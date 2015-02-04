var Boom =  require("boom"),
	Joi = require("joi"),
	_ = require("underscore"),
	error = require('./config').errorMessage,
	slotStatus = require('./config').slotStatus,
	searchRadius = require('./config').radius,
	Zip = require("../models/zipcode").Zip,	
	Details = require("../models/provdetails").Details,	
	Appointments = require("../models/provappts").Appointments;

module.exports = exports = function(server) {
	exports.search(server);
};

// search providers with the basic requirement
exports.search = function(server) {
	server.route({
		method: "GET",
		path: "/v1/provider/search",
		config: {
			validate: {
				query: {
					specialty: Joi.string().required(),
					insurance: Joi.string(),
					zip: Joi.string().required(),
					category: Joi.string().required(),
					start: Joi.string(),
					count: Joi.string(),
					email: Joi.string(),
					gender: Joi.string(),
					languages: Joi.array(),
					name: Joi.string(),
					startindex: Joi.number(),
					count:Joi.number().integer(),
					start:Joi.number().integer()
				}
			}
		},
		handler: function(request, reply) {
			Array.prototype.has = function(v) {
				for (var l=0;l<this.length; l++) {
					if(this[l]==v) {
						return l+1;
					}
				}
				return false;
			}
			var searchZip = [];
			if(request.query.email) {
				searchZip.push(request.query.zip)
				check();
			}
			else {
				Zip.findOne({'ZIP': request.query.zip}, {'_id':0, 'LTTD':1, 'LGTD':1}, function(err, zip) {				
					// LT and LG
					// range = radius / 69.0
					// select ZIP from ZIP_CDE_DEF where LTTD <= LT+range AND LTTD >= LT-range AND LGTD <= LG+range AND LGTD >= LG-range
					if(err)
						reply(Boom.forbidden(error(err)));
					else if(!zip) 
						reply(Boom.notFound('No such zipcode available'));
					else {
						var searchRange = (searchRadius/ 69.0);
						// console.log('lt and ld', searchRange, (searchRange + zip.LTTD), (searchRange + zip.LGTD) ,(zip.LTTD - searchRange), (zip.LGTD - searchRange));				
						Zip.find({
							'LTTD': {
								$lte: searchRange + zip.LTTD, 
								$gte: zip.LTTD - searchRange
							},
							'LGTD': {
								$lte: searchRange + zip.LGTD,
								$gte: zip.LGTD - searchRange
							}
						}, {'_id':0, 'ZIP':1}, function(err, rangeZip) {
							if(err)
								reply(Boom.forbidden(error(err)));
							else if(!rangeZip || rangeZip.length <= 0)
								reply(Boom.notFound('No providers available in this zipcode'));
							else {
								_.each(rangeZip, function(singleZip, i) {
									if(i == rangeZip.length-1) {
									// if(i == 2) {
										searchZip.push((singleZip.ZIP).toString());
										// console.log('rangeZip', rangeZip.length, searchZip.length);
										check();
									}
									else 
										searchZip.push((singleZip.ZIP).toString());
								});
							}
						});
					}				
				});
			}
				
			var start = 0, count = 30, counting = 30, n = 0;			
			var today = new Date();
			var	dates=[], resultantArray=[], appointment=[],  apptDate=[], apptSlot=[], chkdates=[], timeschedule=[];
			var	locId, count, providers = [], err, dateCount, queryString, i, j, queryparam, getproviders =[];			
			if(request.query.email === undefined)  
				dateCount=3;
			if(request.query.email != undefined) {
				dateCount=5;
				n = (request.query.email).search('@');
			}
			var dates=[];
			var today = new Date();
			var startindex, dateindex;
			if(request.query.startindex === undefined)
				dateindex = 0;
			if(request.query.startindex != undefined)
				dateindex = parseInt(dateCount) * request.query.startindex;
			for (var i=0; i<dateCount; i++) {
				var calcdate = new Date();
				var formatDate = "";
				calcdate.setDate(today.getDate()+(dateindex+i));								
				if (calcdate.getMonth()<9) {
					formatDate += "0" + (calcdate.getMonth()+1);
				} else {
					formatDate += (calcdate.getMonth()+1);
				}
				if (calcdate.getDate()<10) {
					formatDate += "-" +"0" + calcdate.getDate();
				} else {
					formatDate += "-" +calcdate.getDate();
				}
				formatDate += "-" + calcdate.getFullYear();
				dates.push(formatDate);		
			}
			// console.log('dates are ', dates);
			var firstDay = new Date(dates[0]);
			var lastDay = new Date(dates[dates.length-1]);
			lastDay.setHours(23);
			lastDay.setMinutes(59);
			lastDay.setSeconds(59);
			// console.log('firstDay ', firstDay, ' lastDay ', lastDay);
			
			// check();
			function check() {
				var url = require('url'),
					url_parts = url.parse(request.url, true),
					query = url_parts.query,
					newquery,
					languages = [];
				if(request.query.languages != undefined) {
					for (var i=0; i< (request.query.languages).length; i++) 
						languages.push((request.query.languages)[i].toLowerCase());
				}
				var insurance = [];
				if(query.insurance != undefined && query.insurance != 'insure_1') {
					insurance.push('insure_1');
					insurance.push(query.insurance);
				}
				else if(query.insurance === undefined || query.insurance === 'insure_1') 
					insurance.push('insure_1');

				if(query.name != undefined) {
					newquery = {
						"category": query.category,
						"specialty": query.specialty,
						// "location.zip": query.zip,
						"location.zip": {$in: searchZip},
						"insurance": {$in:insurance},
						"languages": {$in:languages},
						"gender": query.gender,
						// "email": query.email,
						$or: [{"firstName": {$regex: ".*"+query.name+".*"}},{"lastName": {$regex: ".*"+query.name+".*"}}]
					}
				}
				if(query.name === undefined) {
					newquery = {
						"category": query.category,
						"specialty": query.specialty,
						// "location.zip": query.zip,
						"location.zip": {$in: searchZip},						
						"insurance": {$in:insurance},
						"languages": {$in: languages},
						"gender": query.gender,
						// "email": query.email
					}
				}
				// console.log('new query to search is ', JSON.stringify(newquery));
				if(n == -1)
					newquery.npi = query.email;
				else
					newquery.email = query.email;
				if(query.insurance === undefined)
					delete newquery.insurance;
				if(query.insurance != undefined)
					newquery.insurance = newquery.insurance;
				if(query.languages === undefined)
					delete newquery.languages;
				if(query.email === undefined)
					delete newquery.email;				
				if(query.gender === undefined)
					delete newquery.gender;
				if(query.name === undefined)
					delete newquery.firstName;
				if(query.name === undefined)
					delete newquery.lastName;	
				delete newquery.start;
				delete newquery.count;
				// console.log('newquery to find is ', newquery);
				if(query != undefined) {
					console.log('\n\nnewquery to find is ', newquery);
					Details.find(newquery).exec(function(err, getproviders) {
						// console.log('details result ', getproviders.length);
						if(err)
							reply(Boom.forbidden(error(err)));
						if(getproviders.length === 0) 
							reply(Boom.notFound("No exact matching"));
						if(getproviders.length != 0) {						
							providers = getproviders;
							// providers = _.shuffle(getproviders);
							getDetails();
						}
					});
				}	
			}
			Date.prototype.today = function () { 
				return (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) + "-"+ ((this.getDate() < 10)?"0":"") + this.getDate() +"-"+ this.getFullYear();
			}
			function getDetails() {
				// console.log('given datacount ', dateCount);
				var length = providers.length;
				if(!request.query.email) {
					if(request.query.start != undefined) 
						start = request.query.start;
					if(request.query.count != undefined) {
						count = (request.query.count);
						counting = parseInt(start)+parseInt(request.query.count);
					}
					if(count > length)
						count = length;
					else
						count = count;
				}
				// console.log('count is ', count, start);
				// _.each(providers, function(provider, processIndex) {
				providerSearch(start);
				function providerSearch(startIndex) {
					// console.log('start inside method is ', start);
					// console.log('array length ', resultantArray.length);
					// console.log('index ', startIndex, providers.length);
					if(startIndex === providers.length || count === resultantArray.length) {
						// console.log('equal to count');
						var resultProvider = [];
						var goldProviders = [], silverProviders = [], bronzeProviders = [], freeProviders =[], randomArray =[];	
						var group = _.groupBy(resultantArray, function(getproviders) {
							return (getproviders.plan	)
						});	
						// console.log("Result from DB" + JSON.stringify(group));
						goldProviders = (group["gold"]);
						silverProviders = (group["silver"]);
						bronzeProviders = (group["bronze"]);
						freeProviders = (group["free"]);								
						if(goldProviders !=undefined) {
							for(var index=0; index<goldProviders.length; index++) {						
								if(goldProviders[index] != undefined)
									randomArray.push(goldProviders[index]);
							}
						}
						
						if(silverProviders != undefined) {
							for(var index=0; index<silverProviders.length; index++) {
								if(silverProviders[index] != undefined)
									randomArray.push(silverProviders[index]);
							}
						}
						if(bronzeProviders != undefined) {
							for(var index=0; index<bronzeProviders.length; index++){
								if(bronzeProviders[index] != undefined)
									randomArray.push(bronzeProviders[index]);
							}
						}
						if(freeProviders != undefined) {
							for(var index=0; index<freeProviders.length; index++) {
								if(freeProviders[index] != undefined)
									randomArray.push(freeProviders[index]);
							}
						}
						console.log('randomArray is ', randomArray.length);
						for( var index =0; index<randomArray.length; index++) {
							resultProvider.push(randomArray[index]);
						}
						console.log('\n\n Final result ', JSON.stringify({providers: resultProvider, start: start, count: resultProvider.length, total:length}));
						// reply({providers:resultProvider, total: length});	
						reply({providers: resultProvider, start: start, count: resultProvider.length, total:length});
					}
					else {
						// console.log('not equal to count');
						// console.log('length changes ', length, provider.location.length);
						length = length + (providers[startIndex].location.length-1);
						// console.log('current provider is ', providers[startIndex]);
						// console.log('length after changes ', length);
						_.each(providers[startIndex].location, function(loc) {	
							// if(loc.zip === request.query.zip) {						
							if(searchZip.has(loc.zip)) {
								// console.log('loc.zip exists ', loc.zip);
								locId = loc.locId;
								appts=[], appointment=[];
								Appointments.find({"loc": locId, "date":{$gte: firstDay, $lte: lastDay}},
									{"date":1, "slots":1, "_id":0, "loc":1, "specialOffer":1},
									{sort:({date:1})}, function(err, appts) {
										// var string = {"loc": locId, "date":{$gte: firstDay, $lte: lastDay}};
										// console.log('search result ', JSON.stringify(appts), 'for ', string);
										if(err)
											reply(Boom.forbidden(error(err)));
										if(appts) {
											var appointment = [];
											var modifySlots = [];
											_.each(dates, function(index) {
												var slot = [], title, description;
												var slotJson = {};
												var time = [], timeTaken;												
												function getSlot(id) {
												    return _.find(appts, function(appt) {
												    	var compareDate = (appt.date).today();
												    	// if(appt.date === id) {
												    	if(compareDate === id) {
												    		function getstatus(status) {													
																return _.find(appt.slots, function(slot) {																
																	if(slot.status == status) {
																		var startTime = slot.at;
																		var	today = new Date(),
																			currentTime = ((today.getHours()+1)*60*60)+((today.getMinutes()+1)*60)+ (today.getSeconds()+1);
																		timeTaken=Math.floor(Math.abs(currentTime - startTime)/60);
																		// console.log(slotStatus.Time.value, 'is maximum limit  and it tooks ', timeTaken);
																		if(timeTaken > slotStatus.Time.value) {
																			slot.status = slotStatus.Available.string;
																			time.push(slot.from);
																		}
																	}
																	if(slot.from === appt.slots[appt.slots.length-1].from) {
																		if(time.length > 0) {
																			// console.log('length > 0');
																			// console.log('inserting ', appt.loc, compareDate, time);
																			slotJson.loc = appt.loc;
																			slotJson.date = compareDate;
																			slotJson.time = time;
																		}
																		modifySlots.push(slotJson);
																	}
																});
															}
															var slots = getstatus(slotStatus.Blocked.string);	
													    	_.each(modifySlots, function(modifySlot) {
													    		_.each(modifySlot.time, function(slotTime) {
																	Appointments.update({'loc': modifySlot.loc, 'date': modifySlot.date, 'slots.from': slotTime}, 
																	    {$set: {'slots.$.status': slotStatus.Available.string}}, function(err, updated) {
																	    	if(err)
																	    		reply(Boom.forbidden(error(err)));
																	    	if(updated) {
																	    		// count++;
																	    		console.log('updated ');
																	    	}
																	    }
																	);
																});
													    	});
													    	return compareDate == id;
												    	}	
												    	// return appt.date == id;										        
												    });
												}

												if(getSlot(index) === undefined)
													slot = [];
												else {
													slot = getSlot(index).slots;
													if(getSlot(index).specialOffer.title && slot.length > 0) {
														// console.log(getSlot(index).specialOffer.title);
														title = getSlot(index).specialOffer.title;
														description = getSlot(index).specialOffer.description;
													}
												}
												var apptSchedule = {
													'date': index,
													'slots': slot,
													'title': title,
													'description': description
												}
												appointment.push(apptSchedule);
											});
											if(dateCount === 3) {
												var emailId;
												if(providers[startIndex].email == undefined) 
													emailId = providers[startIndex].npi;
												else 
													emailId = providers[startIndex].email;
												var result = {
													"email": emailId,												
													"name": providers[startIndex].title+" "+providers[startIndex].firstName+" "+providers[startIndex].lastName,
													"image": providers[startIndex].image,	
													"locationId": loc.locId,						
													"address": loc.address,
													"city": loc.city,
													"state": loc.state,
													"zip": loc.zip,
													"phone": loc.phone1,
													"appointmentSchedules": appointment,
													"plan": providers[startIndex].subscription.planType,
													"cash": providers[startIndex].cash,
										            "offerStmt": providers[startIndex].offer,
										            "website": providers[startIndex].webSite,
										            "rating": providers[startIndex].rating
												}	
												resultantArray.push(result);												
												providerSearch(startIndex+1);
											}

											

											if(dateCount === 5) {
												var email;
												if(providers[startIndex].email == undefined || !providers[startIndex].email)
													email = providers[startIndex].npi;
												else 
													email = providers[startIndex].email;												
												var result;
												if(request.query.startindex) {
													result = {
														"appointmentSchedules": appointment
													}
												}
												else {
													result = {
														"email": email,												
														"name": providers[startIndex].title+" "+providers[startIndex].firstName+" "+providers[startIndex].lastName,
														"image": providers[startIndex].image,
														"locationId": loc.locId,							
														"address": loc.address,
														"city": loc.city,
														"state": loc.state,
														"zip": loc.zip,
														"phone": loc.phone1,
														"appointmentSchedules": appointment,
														"plan": providers[startIndex].subscription.planType
													}
												}
												console.log('\n\n Final result ', JSON.stringify(({providers: result, total:length})));
												// reply({provider:result, total: length});
												reply({provider: result, total:length});
											}								
										}									
									}								
								);							
							}
							else {							
								length = length-1;
								console.log('\n not equal to search zip', loc.zip);
							}						
						});	
					}	
				}		
				// });				
			}
		}
	});
};