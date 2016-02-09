App.controller('ongoingTreatmentController', ["$scope","$rootScope", function($scope,$rootScope) {

$(document).ready(function(){
  // we call the function
$rootScope.changeFooter();
$rootScope.onchat1();
 $scope.date = new Date();
});

  $scope.timeLineData=[
	{
		"date":"25", 
		"heading":"Dr. Ethan Mathews | Pulmonologist", 
		"desc":"Spirometry test conducted,observed moderate airflow obstruction (Range: 64%).Pulmonologist prescribed medicines(Albuterol, Budesonide, and Pneumococcal vaccine) and advised next visit after 2 weeks.Need to follow it for at least two weeks with specific diet plan."
	},
	/*{
		"date":"22", 
		"heading":"Dr. David Brown | Pathologist", 
		"desc":"Lab test done; reports was showing some moderate airflow obstruction (Range: 64%)"
	},*/
  
	/*{
		"date":"22", 
		"heading":"Dr. Ethan Mathews | Neurologist (HDHS, NERS)", 
		"desc":"Medication suggested for specific duration. Need to follow it for atleast two weeks with specific diet plan.Medication suggested for specific duration. Need to follow it for atleast two weeks with specific diet plan."
	}, */
	/*{
		"date":"19", 
		"heading":"Radiology Lab | St. Patrick Local Hospital", 
		"desc":"MRI scan for Knee."
	}, */
		{
		"date":"19", 
		"heading":"Dr. Ryan Fleming | Cardiologist", 
		"desc":"Primary examination revealed nothing. Recommended Spirometry test based on past history and advise to visit Pulmonologist.."
	},
	/*{
		"date":"15", 
		"heading":"Dr. Ethan Mathews | Neurologist (HDHS, NERS)", 
		"desc":"Primary examination revealed nothing. Recommended for a MRI scan."
	}, */
	/*{
		"date":"15", 
		"heading":"Dr. David Brown | Pathologist", 
		"desc":"Lab test done; reports was showing some minor increasing trend in Blood Pressure."
	},	*/
	/*{
		"date":"14", 
		"heading":"Dr. Ryan Fleming | Eye Specialist(HDHS, NERS)", 
		"desc":"Change in medication as the reports are normal. If the issue is not resolved, need to see a neurologist."
	},
*/	
	{
		"date":"14", 
		"heading":"Dr. Josh Hanson | Physician", 
		"desc":"Primary examination revealed minor increase in Blood Pressure. Prescribed Blood Pressure and ECG check and advised to meet Cardiologist."
	},	
/*	{
		"date":"14", 
		"heading":"Dr. Ryan Fleming | Eye Specialist(HDHS, NERS)", 
		"desc":"Eye examination and Medication recommended. Visit post reports if required."
	}, 

	{
		"date":"14", 
		"heading":"Dr. David Brown| Specialist (NNSC, HAS)", 
		"desc":"Concussion due to head injury, minor bleeding from the wound.Recommended to see Vision Expert. The headache must be due to Migrane."
	}, 
	{
		"date":"12", 
		"heading":"Dr. Josh Hanson(PCP, MD, ABD) | Magna Care Clinic", 
		"desc":"Concussion due to an accident. Need to see a specialist for headache. Minor bleeding from wound. Need to visit a specialist."
	}, 
	{
		"date":"11", 
		"heading":"Dr. Josh Hanson(PCP, MD, ABD) | Magna Care Clinic", 
		"desc":"Primary examination for Concussion."
	}, 
	{
		"date":"10", 
		"heading":"Dr. Josh Hanson(PCP, MD, ABD) | Magna Care Clinic", 
		"desc":"Primary examination for Concussion."
	}, 
	{
		"date":"09", 
		"heading":"Dr. Josh Hanson(PCP, MD, ABD) | Magna Care Clinic", 
		"desc":"Primary examination for Concussion."
	}
  */
	{
		"date":"09", 
		"heading":"Dr. Josh Hanson | Physician", 
		"desc":"Fever diagnosed. Prescribed Flu Vaccination."
	}  
  ];
}]);

  