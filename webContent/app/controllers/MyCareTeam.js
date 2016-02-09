App.controller('myCareTeamController', ["$scope","$rootScope", function($scope,$rootScope) {

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
 $scope.checkEnable=function()
{
	
	if(document.getElementById("chk").checked)
		return "Enabled";
	else
		return "Disabled";
}


}]);