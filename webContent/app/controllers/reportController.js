App.controller('reportController', function($rootScope, $scope, $http,$state) {
	console.log("After start");
	
	$scope.getBloodReport = function(report_type) {
		$http.get("app/reports/blood.json")
				.success(function(response) {

					$rootScope.bloodData = response;
					// alert(JSON.stringify(response));
				});
	}
	$scope.getLipidReport = function(report_type) {
			$http.get("app/reports/lipid.json")
					.success(function(response) {
						$rootScope.lipidData = response;
						// alert(JSON.stringify(response));
				});
	}
	$scope.getUrineReport = function(report_type) {
				$http.get("app/reports/urine.json")
						.success(function(response) {
							$rootScope.urineData = response;
							// alert(JSON.stringify(response));
				});
	}
	/*host2 + "/DiagnosticReport?report_type=" + report_type*/
	$scope.getBloodPressureReport = function(report_type) {
		$http.get("app/reports/Bood_Report.json")
				.success(function(response) {
					console.log(response);
					response.entry[0].content.contained[0].isTextBold=true;
					response.entry[0].content.contained[1].isTextBold=true;					
					$rootScope.Blood_Pressure_Data = response;
					// alert(JSON.stringify(response));
		});
}
	
	/*
	 * $http.get(SERVER_URL + "Patient").success( function(response) { //
	 * $rootScope.reportData = // JSON.parse(response); $rootScope.patientData =
	 * response; $scope.date = $rootScope.patientData.birthDate;
	 * $scope.calculateAge = function() { var today = new Date(); var birthDate =
	 * new Date($scope.date); age = Math.floor((today.getTime() -
	 * birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)); return age; } });
	 */

	console.log("in controller");
	$(document).ready(function(){ 
  $rootScope.changeFooter();
$rootScope.onchat1();
});
});

