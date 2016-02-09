App.controller('footerController', '$state',["$scope", function($scope,$state) {

	var current=$state.current.name;
$scope.footerText="<div>FOOTER</div>";

  
  switch(current) {
    case "app.healthRecord":
             $scope.footerText='<center><button type="button" class="btn btn-square btn-danger myButton">Emergency Broadcast</button></center>';
                
        break;
   
    default:
       $scope.footerText='<span>&copy; {{app.year}} - {{ app.name }}</span>';
}

}]);

  