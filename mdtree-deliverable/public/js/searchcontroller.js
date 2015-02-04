mdtreeApp.controller('searchcontroller',
    function searchcontroller($scope, productService,SelectValueService, $http,Auth,$log,$stateParams,$state) {
      $scope.currentPage = {};
      $scope.stateParams = $stateParams;
      $scope.currentPage.page = 1;
      console.log($stateParams);
    
  $scope.selectPage = function (pageNo) {
    console.log(pageNo);
    $scope.currentPage = pageNo;

  };
  $scope.count = 30;
  $scope.startProvider = 0;
  $scope.pageChanged = function() {
    $scope.startProvider = ($scope.currentPage.page-1)*30;
    $scope.firstsearchoperation($scope.indexValue,($scope.currentPage.page-1)*30,$scope.count); 
    $log.log('Page changed to: ' + $scope.currentPage.page);
  };

        $scope.maxSize = 7;
        $scope.categories = {};
        $scope.insurance = {};
        $scope.specialty= {};
        $scope.categories.type = $stateParams.category;
        $scope.specialty.doctor = $stateParams.doctor;
        $scope.user = Auth.user;
        console.log($scope.user);
        $scope.zipcode = $stateParams.location;
        console.log($scope.zipcode);
        $scope.insurance.type = $stateParams.insurance;
        $scope.advanceSearchoptions = false;
        $scope.dentistslists= {};
        $scope.chiropractors= {};
        $scope.otherSpeciality = {};
        $scope.gender= {};
        $scope.gender.options = [{gender:"male"},{gender:"female"}];
        $scope.language= {};
        $scope.vision = {};
        $scope.categories.options = SelectValueService.getCategoryJson();
        $scope.specialty.options = SelectValueService.getDoctorsJson();
         $scope.dentistslists.options = SelectValueService.getdentistslists();
         $scope.chiropractors.options = SelectValueService.getchiropractors();
         $scope.otherSpeciality.options = SelectValueService.getotherSpeciality();
        $scope.vision.options = SelectValueService.getvision();
        $scope.language.options = SelectValueService.getLangJson();
        $scope.insurance.options = SelectValueService.getinsuranceJson();
        $scope.openTab = function(address) {
            $scope.url = 'https://www.google.co.in/maps/preview?q='+address;
        };
        // $scope.specialtyValue = $scope.specialty.options[$scope.specialty.doctor];
        $scope.statuschecked = function(value) {
            return ((value=="booked") ? true : false);
        };
        var Selectedinsurance =  _.findWhere($scope.insurance.options, {key:$scope.insurance.type}) ;
        
        productService.addaddinsurance(Selectedinsurance.value);
        console.log($stateParams.doctor);
        var SelectedSpeciality = ( _.findWhere($scope.specialty.options, {key:$stateParams.doctor} )
         || _.findWhere($scope.dentistslists.options, {key:$stateParams.doctor})
         || _.findWhere($scope.chiropractors.options, {key:$stateParams.doctor})
         || _.findWhere($scope.otherSpeciality.options, {key:$stateParams.doctor})  
         || _.findWhere($scope.vision.options, {key:$stateParams.doctor})
         ); 
        console.log(SelectedSpeciality);
        $scope.specialtyValue = SelectedSpeciality.value;
        console.log($scope.specialtyValue);
        $scope.bookingdate = [];
        var dayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var date ;
        $scope.getdateCalender = function  () {
            $scope.bookingdate = [];
            date = new Date();
            $scope.getYearandDate = new Date(date);
            var dateStr = {dayShort: dayShort[date.getDay()], date: (date.getMonth() + 1)  + '/' +  date.getDate()};
            $scope.bookingdate.push(dateStr);
            
            console.log($scope.getYearandDate);
            date.setDate(date.getDate() + 1);
            dateStr = {dayShort: dayShort[date.getDay()], date: (date.getMonth() + 1)  + '/' + date.getDate()};
            $scope.bookingdate.push(dateStr);
            date.setDate(date.getDate() + 1);

            dateStr = {dayShort: dayShort[date.getDay()], date: (date.getMonth() + 1)  + '/' + date.getDate()};

            $scope.bookingdate.push(dateStr);

            $scope.indexValue =0;
        }
        $scope.getdateCalender();
        
        $scope.openNewTab = function(uri){
           
            var link = angular.element('<a href="http://' + uri + '" target="_blank"></a>');

            angular.element(document.body).append(link);

            link[0].click();
            link.remove();
        }

        $scope.nextslots = function(value){
           // console.log($scope.bookingdate); 
           console.log($scope.getYearandDate,"getYearandDate");


           var date = new Date($scope.getYearandDate);
           // console.log(date);
           // date.setDate(date.getDate() + 3);
           // console.log(new Date(date));

           console.log(date,"datevalue")
           $scope.bookingdate = [] ;
           if (value == 'prev'){
                date.setDate(date.getDate() - 3);
                date = new Date(date);
                console.log(date,"date");
                console.log(date.getDate(),"datevale");
                $scope.indexValue = $scope.indexValue - 1; 
                $scope.getYearandDate = new Date(date);
           }
           else{
               
                date.setDate(date.getDate() + 3);
                date = new Date(date);
                $scope.indexValue = $scope.indexValue + 1; 
                $scope.getYearandDate = new Date(date);
           }
            console.log(date,"dateloop");
            var dateStr = {dayShort: dayShort[date.getDay()], date: (date.getMonth() + 1)  + '/' +  date.getDate()};
            $scope.bookingdate.push(dateStr);
            
            console.log($scope.getYearandDate,"date")
            date.setDate(date.getDate() + 1);
            dateStr = {dayShort: dayShort[date.getDay()], date: (date.getMonth() + 1)  + '/' + date.getDate()};
            $scope.bookingdate.push(dateStr);
            date.setDate(date.getDate() + 1);
            dateStr = {dayShort: dayShort[date.getDay()], date: (date.getMonth() + 1)  + '/' + date.getDate()};
            $scope.bookingdate.push(dateStr);
            console.log($scope.bookingdate); 
            $scope.firstsearchoperation($scope.indexValue,$scope.startProvider,$scope.count);
            console.log($scope.bookingdate,"bookingdate");
            //localhost:8000/v1/provider/search?zip=90002&specialty=cardiology&category=doctors&insurance=AArp&startindex=1
        }

        
        $scope.timeclicked = function(doctor, md_date, md_time,offer,desc,offerStmt) {
            var dayFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            console.log(md_date);
            var date = new Date(md_date);
            var datedetails = {date : md_date, day: dayFull[date.getDay()], time: md_time,offer:offer,desc:desc,offerStmt:offerStmt};
            if($scope.user.type === 'patient'){
                 var tempurl = '/v1/slotStatus?location='+doctor.locationId+'&email='+doctor.email+'&date='+md_date+'&slot='+md_time;
                console.log(tempurl);
                $http.get(tempurl)
                    .success(function(data, status, headers, config) {
                       console.log(data);
                        $state.go("public.appDetails2",({doctor:JSON.stringify(doctor),data:JSON.stringify(datedetails),searchData:JSON.stringify($stateParams)}))
            
                    })
                    .error(function(data, status, headers, config) {
                        console.log(data);
                        productService.adderrormsgwhenAppointment(data.message);
                    
                });
     
            }else{
                if($scope.user.role.title === 'public'){
                    var tempjsonForSlotStatus = {locid:doctor.locationId,doc:doctor.email,date:md_date,slotTime:md_time};
                    productService.addSlotStatus(tempjsonForSlotStatus);
                   }
                $state.go("public.appDetails2",({doctor:JSON.stringify(doctor),data:JSON.stringify(datedetails),searchData:JSON.stringify($stateParams)}));
                
            }
           

            // productService.adddoctorEmailTemp(doctor.email);
            // productService.adddoctordetails(doctor);
            // productService.adddate_day_time(data);
            
        }
        // $scope.bookappoinmentClicked = function (doctor) {
        //     productService.adddoctorEmailTemp(doctor);
        // }

        
        $scope.findmaplocation = [];
        $scope.firstsearchoperation = function(indexValue,startfrom,count) {
            // productService.addcategory($scope.categories.type);
            // productService.addspecialty($scope.specialty.doctor);
            // productService.addinsurance($scope.insurance.type);
            // productService.addlocation($scope.zipcode);
            var Selectedinsurance =  _.findWhere($scope.insurance.options, {key:$scope.insurance.type}) ;
        
            productService.addaddinsurance(Selectedinsurance.value)
            queryParams = "";
            if($stateParams.searchAgain){
                $scope.SearchAgainOption = true;
            }
            if ($stateParams.category) {
                queryParams += "category=" + $stateParams.category;
            } else {
                queryParams + "category=doctors";
            }
            
            if ($stateParams.doctor) {
                queryParams += "&specialty=" + encodeURIComponent($stateParams.doctor);
            }
            if ($stateParams.location) {
                queryParams += "&zip=" + $stateParams.location;
            }
            
            if(indexValue != undefined){
                temp = queryParams + "&startindex=" + indexValue;
                console.log(temp);
            }
            if ($stateParams.gender) {
                 $scope.advanceSearchoptions = true;
                queryParams += "&gender=" + $stateParams.gender;
                $scope.gender.doctor = $stateParams.gender;
            }
            if ($stateParams.insurance) {
                queryParams += "&insurance=" + $scope.insurance.type
            }
            console.log($stateParams.advanceSearch,"$stateParams.advanceSearch");

            console.log($stateParams.languages);
            if ($stateParams.languages) {
                 $scope.advanceSearchoptions = true;
                $scope.language.doctor = $stateParams.languages;
                var languages = $stateParams.languages.split(",");
                // console.log(languages);
                 var str = [];
                 var language = "";
                for (var key in languages) {
                    // console.log(key);
                    
                    if(key == (languages.length-1)){
                        language += '"' + languages[key] + '"';
                    }
                    else if (languages[key]) {
                        language += '"' + languages[key] + '",';
                    }
                    // console.log(language);
                }
                // console.log(language);
                // console.log($scope.language.doctor);
                // console.log($scope.language.doctor.toString(),"To stirng");
                queryParams += "&languages=" + encodeURIComponent("["+language+"]") ;
                // console.log(queryParams);
            }
            // if ($stateParams.languages) {
            //     queryParams += "&languages=" + $stateParams.languages ;
            // }
            if ($stateParams.name) {
                 $scope.advanceSearchoptions = true;
                queryParams += "&name=" + $scope.providername;
                $scope.providername = $stateParams.name;
            }
            var temp = queryParams;
            $scope.showMessage = false;
            console.log(temp);
            $scope.doctordetails=[];
            $scope.myPromise = $http.get('v1/provider/search?' + temp+'&start='+startfrom+'&count='+count);
            console.log($scope.myPromise);
            $scope.myPromise
                .success(function(data, status, headers, config) {
                    $scope.doctordetails = data;

                    console.log(startfrom,count,"count");
                    // $scope.doctordetails.providers = data.providers.slice(startfrom, count);
                    // $scope.doctordetails.providers.splice(startfrom,count);
                    $scope.dataAssign(data);
                    console.log(data.total);
                    $scope.totalItems = data.total;
                    console.log(data);
                    $scope.appointmentHideOrShow = [];
                    for(var i=0;i< data.providers.length;i++){
                        
                        $scope.appointmentHideOrShow[i]="true";
                        
                        for(var j=0;j<data.providers[i].appointmentSchedules.length;j++){
                            
                            for(var k=0;k<data.providers[i].appointmentSchedules[j].slots.length;k++){
                                    
                                    $scope.appointmentHideOrShow[i]="false";

                            }
                        }
                    }
                    for(var i=0;i< data.providers.length;i++){
                        var tempValue =  _.findWhere(SelectValueService.getcashPriceJson(), {key:data.providers[i].cash}) ;
                        if(tempValue){
                            $scope.doctordetails.providers[i].cash = tempValue.id;
                        }
                       
                        var tempValue =  _.findWhere(SelectValueService.getOfferJson(), {key:data.providers[i].offerStmt}) ;
                        // console.log(tempValue);
                        if(tempValue){
                            $scope.doctordetails.providers[i].offerStmt = tempValue.id;
                        } 
                        
                        // console.log($scope.doctordetails.providers[i].offerStmt);
                    }
                })
                .error(function(data, status, headers, config) {
                    console.log(data);
                    if(data.message == "No exact matching"){
                    
                        $scope.doctordetails = [];
                        
                        console.log($scope.doctordetails);
                    }
                    $scope.showMessage = true;
            });
        }
        $scope.firstsearchoperation($scope.indexValue,0,$scope.count);

        
        // $scope.doctorBookApponimentClicked = function(email){
        //     productService.adddoctorEmailTemp(email);
        // }

        $scope.searchoperation = function(){
            $state.go("public.search",({doctor:$scope.specialty.doctor,location:$scope.zipcode,insurance:$scope.insurance.valueSelect,
                category:$scope.categories.type,gender:$scope.gender.doctor,insurance:$scope.insurance.type,
                languages:$scope.language.doctor,name:$scope.providername,searchAgain:true}))

        }
    
        $scope.dataAssign = function(data){
            $scope.findmaplocation = data.providers;
            // $scope.findmaplocation = ["madurai","erode","dindukal"];
            
        }
        
        // $scope.initialize();


        $scope.doctordetailsPage = function  (email,searchData,zip) {
            $stateParams.location = zip;
            $state.go("public.doctorDetails",({email:email,searchData:JSON.stringify($stateParams)}));
        }
   

    $scope.initialize = function (value,arrayvalue) {
        console.log(arrayvalue);
        if(value){
            $scope.MapViewOption = true;
        }
        
        if(document.getElementById("map_canvas") == null) return;
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        //map.setCenter(new GLatLng(37.4419, -122.1419), 13);
        map.setUIToDefault();
      }      

      geocoder = new GClientGeocoder();
      console.log(geocoder.getLatLng);
      // var address = 'madurai';
      if(arrayvalue !== undefined){
        address = address = $scope.findmaplocation[arrayvalue].address + "," + $scope.findmaplocation[arrayvalue].city + ","+ $scope.findmaplocation[arrayvalue].state;
            
      }
      else{
        address = $scope.zipcode;
      }
        
        

      addMarkers(map, address, 0);
      // $scope.findmaplocation = ["pasumalai","villapuam","nilaiyur"];
      console.log($scope.findmaplocation);
      if(arrayvalue !== undefined){
            address = $scope.findmaplocation[arrayvalue].address + "," + $scope.findmaplocation[arrayvalue].city + ","+ $scope.findmaplocation[arrayvalue].state;
            infoText = "<html><div align=\"left\">" + address + "</div></html>";
            addMarkers(map,address, 1, (arrayvalue+1), infoText);
            console.log(address);
      }
      else{
        for ( var i=0;i<$scope.findmaplocation.length;i++){
            console.log($scope.findmaplocation[i].plan);
           address = $scope.findmaplocation[i].address + "," + $scope.findmaplocation[i].city + ","+ $scope.findmaplocation[i].state;
            infoText = "<html><div align=\"left\">" + address + "</div></html>";
            addMarkers(map,address, 1, (i+1), infoText,$scope.findmaplocation[i].plan);
            // console.log(address);
        }
      }
      
    }
    // $scope.initialize();



    
    function addMarkers(map, address, val, iconNo, infoText,plan) {
        
        if (geocoder) {
          geocoder.getLatLng(
            address,
            function(point) {
              if (!point) {
              //alert(address + " not found");
              } else {
                if(val == 0) {
                    map.setCenter(point, 8);
                } else {
                    var url = "images/GoogleMap/"+plan+"/pin" + (iconNo) + ".png";
                    gicons = new GIcon(G_DEFAULT_ICON, url); 
                    console.log(gicons);

                    var marker = new GMarker(point, gicons);
                    /* marker.openInfoWindowHtml("Some other stuff"); */
                    map.addOverlay(marker);
                    GEvent.addDomListener(document.getElementById('pin' + iconNo), "click", function() { 
                        marker.openInfoWindowHtml(infoText); 
                    });
                    GEvent.addDomListener(marker, "click", function() { 
                        marker.openInfoWindowHtml(infoText); 
                    });
                }
              }
            }
          );
        }
    }

});
