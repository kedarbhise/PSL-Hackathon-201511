App.controller('myCareTeamController', ["$scope","$rootScope","$http","$interval",function($scope,$rootScope,$http,$interval) {

$(document).ready(function(){
  // we call the function
$rootScope.changeFooter();
$rootScope.onchat1();


});

 $rootScope.myData=[
 
 {
	"image":"Ethan.jpg",
	"clinic":"Genesis Clinic",
	"add":"Sacramento",
	"state":"CA",
	"doctor":"Dr. Ethan Mathews",
	//"desig":"Neurologist (HDHS,NERS)",
	"desig":"Pulmonologist",
	"addedOn":"28 April, 2015",
	"email":"ethan@gmail.com"
	
	},
	{
	"image":"Ryan.jpg",
	"clinic":"Merzano Clinic",
	"add":"Roseville",
	"state":"CA",
	"doctor":"Dr. Ryan Fleming",
	//"desig":" Eye Specialist(HDHS,NERS)",
	"desig":"Cardiologist",
	"addedOn":"17 Dec, 2014",
	"email":"ryan@gmail.com"
	},
	{
	"image":"Josh.jpg",
	"clinic":"Magna Care Clinic",
	"add":"Sacramento",
	"state":"CA",
	"doctor":"Dr. Josh Hanson",
	//"desig":"(PCP, MD, ABD)",
	"desig":"Primary Care Physician",	
	"addedOn":"14 Aug, 2014",
	"email":"josh@gmail.com"
	}/*,
	{
	"image":"David.jpg",
	"clinic":"Stanford Clinic",
	"add":"Stanford", 
	"state":"CA",
	"doctor":"Dr. David Brown",
	//"desig":" Specialist (NNSC, HAS)",
	"desig":"Pathologist",	
	"addedOn":"15 Jan, 2015"
	},*/
 
 ];
 $scope.chk="Enabled";
 $scope.findchecked=function(index){
	 //alert("index:"+index);
	 if(index==0){
		 return true;
	 }
	 else{
		 return false;
	 }
 }
 $scope.checkEnable=function()
{
	
	if(document.getElementById("chk").checked)
		return "Enabled";
	else
		return "Disabled";
}

//for screen share
 $scope.popupFlag=false;
 $scope.loadingVisible = false;
     	
     		$scope.showLoading = function(){
     		  //alert("show loader image"+$scope.loadingVisible);
     			$scope.loadingVisible = true;
     				console.log("show loader image"+$scope.loadingVisible);
     				//alert("show loader image"+$scope.loadingVisible);
     		};
     			$scope.hideLoading = function(){
     			  //console.log("hide loader image");
     			  //alert("show loader image"+$scope.loadingVisible);
     			$scope.loadingVisible = false;
     			console.log("show loader image"+$scope.loadingVisible);
     		};

         $scope.requestedId=0;
     	 $scope.name="";
     	 $scope.email="";  
     	 $scope.getHelp=function(doc){
     		$scope.popupFlag=true;
     		//alert($scope.popupFlag);
     	 
         	   try {
                       					//alert("doc email "+doc);
     									var requestBody = {"EmailId":$rootScope.user.email,"Name":$rootScope.user.name,"DoctorEmail":doc};
     							
     									console.log("####" + JSON.stringify(requestBody));
     									var request = {
     										method : 'POST',
     										url : 'http://10.44.54.9:3000/postHelpRequest',
     										data : requestBody
     									};

     									$http(request).then(
     										function(response) {
     										  $scope.showLoading();
     										console.log("success"+JSON.stringify(response));
     									  $scope.requestedId=response.data.json.insertId;
     									  console.log("$scope.requestedId="+$scope.requestedId);
     									  $scope.timer=$interval(function(){
           									   $http({
                               method: 'GET',
                               url: 'http://10.44.54.9:3000/getMeetURL?RequestId='+$scope.requestedId
                             }).then(function successCallback(response) {
                                 // this callback will be called asynchronously
                                 // when the response is available
                                 console.log("*** response"+JSON.stringify(response));
                                 $scope.meetURL=response.data[0].MeetingURL;
                                 console.log($scope.meetURL);
                                 if($scope.meetURL!==null){
                                  // alert("Kill");
                                   $scope.killtimer();
                                 }
                                 //	$scope.hideLoading();
                                 	
                               }, function errorCallback(response) {
                                 // called asynchronously if an error occurs
                                 // or server returns response with an error status.
                                 console.log("not fetched url");
                               });
     									  },6000);	  
     	  
     									  
     										
     										console.log(JSON.stringify(response));
     										
     										}, function(response) {
     										console.log("error");
     									});
     										//$scope.showLoading();
     										
                       	
     		  } 
         	   catch (e) {
     						console.log(e);
     		   }
     };
     	$scope.killtimer=function(){
     	   $scope.hideLoading();
     	   
     	if(angular.isDefined($scope.timer))
     	  {
     		$interval.cancel($scope.timer);
     		$scope.timer=undefined;
     	  }
         };
     	
     $scope.ClickMe=function(){
     		
     	  swal({
             html : true,
             title : '<div>'+
                     '<p>Enter Your Name : <input type="text" ng-model="name"/></p>'+
                     '<p>Enter Email Address :<input type="text" ng-model="email"/></p>'+
                     '</div>',
           /* 
           title : '<p style="font-size:20pt;margin-top:-0.5%;font-family:Roboto,sans-serif;font-weight:normal;">Spend Deposit</p><br/><br/><div id="div1" align="center"><img id="overlay1" src="app/img/icon_fuel.png" align="center" style="margin-top:-15%;width:100px;"></img><p style="font-size:20pt;color:#DE5554;font-family:Roboto,sans-serif;font-weight:normal;margin-top: 10px;margin-bottom: 0px;" align="center">'+$scope.cat+'&nbsp;<em class="fa fa-rupee"></em> '+$scope.amt+'</p><small style="font-size:12pt;color:#9F9EA1;font-family:Roboto,sans-serif;font-weight:normal;">Date: '+$scope.todayDate +'</small></div>'+
             '<p style="margin-top: 0px;line-height:40px;margin-bottom: 0px;"  ><a href="#" onClick="performSpendDepositOperation('+fuel+')"  style="font-size:13pt;color:#52A0CD;font-family:Roboto,sans-serif;font-weight:normal;" align="center;">Spend From Deposit</a><br/><a href="#" onClick="performKeepDepositOperation('+fuel+')" style="font-size:13pt;color:#52A0CD;font-family:Roboto,sans-serif;font-weight:normal;" align="center;">Keep Deposit</a><br/><a href="#" onClick="performCreateNewOperation('+fuel+')" style="font-size:13pt;color:#52A0CD;font-family:Roboto,sans-serif;font-weight:normal;" align="center;">Create New</a></p>',
       */     
                     type: "input",
                     showConfirmButton : true,
               showCancelButton: true, 
               confirmButtonColor: "#1aacda", 
               confirmButtonText: "Submit",
               closeOnConfirm: false
            
            
            });
     };

     $scope.response=function(){
     	  swal({
           html : true,
           title : '<div>'+
                   '<p>Please Click Below Link</p>'+
                   '<a href="https://sandbox.moxtra.com/439588822">Click ME</a>'+
                   '</div>',
         /* 
         title : '<p style="font-size:20pt;margin-top:-0.5%;font-family:Roboto,sans-serif;font-weight:normal;">Spend Deposit</p><br/><br/><div id="div1" align="center"><img id="overlay1" src="app/img/icon_fuel.png" align="center" style="margin-top:-15%;width:100px;"></img><p style="font-size:20pt;color:#DE5554;font-family:Roboto,sans-serif;font-weight:normal;margin-top: 10px;margin-bottom: 0px;" align="center">'+$scope.cat+'&nbsp;<em class="fa fa-rupee"></em> '+$scope.amt+'</p><small style="font-size:12pt;color:#9F9EA1;font-family:Roboto,sans-serif;font-weight:normal;">Date: '+$scope.todayDate +'</small></div>'+
           '<p style="margin-top: 0px;line-height:40px;margin-bottom: 0px;"  ><a href="#" onClick="performSpendDepositOperation('+fuel+')"  style="font-size:13pt;color:#52A0CD;font-family:Roboto,sans-serif;font-weight:normal;" align="center;">Spend From Deposit</a><br/><a href="#" onClick="performKeepDepositOperation('+fuel+')" style="font-size:13pt;color:#52A0CD;font-family:Roboto,sans-serif;font-weight:normal;" align="center;">Keep Deposit</a><br/><a href="#" onClick="performCreateNewOperation('+fuel+')" style="font-size:13pt;color:#52A0CD;font-family:Roboto,sans-serif;font-weight:normal;" align="center;">Create New</a></p>',
     */     
                   type: "input",
                   showConfirmButton : true,
             showCancelButton: false, 
             confirmButtonColor: "#1aacda", 
             confirmButtonText: "Submit",
             closeOnConfirm: false
          });
     } 

}]);