App.controller('shareHealthRecordController', ["$scope","$http","$rootScope", function($scope,$http,$rootScope) {

$scope.date = new Date();

  // we call the function
    var qrcode1 = new QRCode("qrcode", {
    text: "123",
    width: 160,
    height: 160,
    colorDark : "#000000",
    colorLight : "#f3f3f3",
    correctLevel : QRCode.CorrectLevel.H
});
  // qrcode1.makeCode(); 
 
$(document).ready(function(){
  // we call the function
$rootScope.changeFooter();
$rootScope.onchat1();
});


  
}]);

  