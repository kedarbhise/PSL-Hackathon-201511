App.controller('prescriptionController', function($rootScope, $scope,$http) {
	
	var presciption=
	{
  "resourceType": "MedicationPrescription",
  "text": {
    "status": "generated",
    "div": "<div>\n      <p>\n        <b>Generated Narrative</b>\n      </p>\n      <p>\n        <b>identifier</b>: order9837293 (official)\n      </p>\n      <p>\n        <b>dateWritten</b>: 25-May 2013 19:32\n      </p>\n      <p>\n        <b>status</b>: active\n      </p>\n      <p>\n        <b>patient</b>: P. van den Heuvel\n      </p>\n      <p>\n        <b>prescriber</b>: R.A. van den Berk\n      </p>\n      <p>\n        <b>encounter</b>: visit who leads to this priscription\n      </p>\n      <p>\n        <b>reason[x]</b>: \n        <span title=\"Codes: {http://snomed.info/sct 13645005}\">Chronic obstructive pulmonary disease</span>\n      </p>\n      <p>\n        <b>medication</b>: prescribed medication\n      </p>\n      <h3>DosageInstructions</h3>\n      <table class=\"grid\">\n        <tr>\n          <td>\n            <b>Text</b>\n          </td>\n          <td>\n            <b>AdditionalInstructions</b>\n          </td>\n          <td>\n            <b>Timing[x]</b>\n          </td>\n          <td>\n            <b>AsNeeded[x]</b>\n          </td>\n          <td>\n            <b>Site</b>\n          </td>\n          <td>\n            <b>Route</b>\n          </td>\n          <td>\n            <b>Method</b>\n          </td>\n          <td>\n            <b>DoseQuantity</b>\n          </td>\n          <td>\n            <b>Rate</b>\n          </td>\n          <td>\n            <b>MaxDosePerPeriod</b>\n          </td>\n        </tr>\n        <tr>\n          <td>3 tot 4 maal daags 1 flacon</td>\n          <td>\n            <span title=\"Codes: \">for use during pregnancy, contact physician</span>\n          </td>\n          <td>Starting 4-Aug 2013 --&gt; 5-Nov 2013, 3 per 1 days</td>\n          <td> </td>\n          <td>\n            <span title=\"Codes: {http://snomed.info/sct 181220002}\">Entire oral cavity</span>\n          </td>\n          <td>\n            <span title=\"Codes: {http://snomed.info/sct 394899003}\">oral administration of treatment</span>\n          </td>\n          <td> </td>\n          <td>10 ml</td>\n          <td> </td>\n          <td> </td>\n        </tr>\n      </table>\n      <h3>Dispenses</h3>\n      <table class=\"grid\">\n        <tr>\n          <td>\n            <b>Medication</b>\n          </td>\n          <td>\n            <b>ValidityPeriod</b>\n          </td>\n          <td>\n            <b>NumberOfRepeatsAllowed</b>\n          </td>\n          <td>\n            <b>Quantity</b>\n          </td>\n          <td>\n            <b>ExpectedSupplyDuration</b>\n          </td>\n        </tr>\n        <tr>\n          <td> </td>\n          <td>8-Apr 2013 --&gt; 30-May 2013</td>\n          <td>20</td>\n          <td>100 mcg</td>\n          <td>40 days</td>\n        </tr>\n      </table>\n    </div>"
  },
  "identifier": [
    {
      "use": "official",
      "system": "http://www.bmc/portal/prescriptions",
      "value": "order9837293"
    }
  ],
  "dateWritten": "2013-05-25T19:32:52+01:00",
  "status": "active",
  "patient": {
    "reference": "Patient/f001",
    "display": "P. van den Heuvel"
  },
  "prescriber": {
    "reference": "Practitioner/f006",
    "display": "Dr. Ethan Mathews"
  },
  "encounter": {
    "reference": "Encounter/f001",
    "display": "visit who leads to this priscription"
  },
  "reasonCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "13645005",
        "display": "Chronic obstructive pulmonary disease"
      }
    ]
  },
  "medication": {
    "reference": "Medication/f001",
    "display": "prescribed medication"
  },
  "dosageInstruction": [
    {
      "text": "3 tot 4 maal daags 1 flacon",
      "additionalInstructions": {
        "text": "for use during pregnancy, contact physician"
      },
      "timingSchedule": {
        "event": [
          {
            "start": "2013-08-04",
            "end": "2013-11-05"
          }
        ],
        "repeat": {
          "frequency": 3,
          "duration": 1,
          "units": "d"
        }
      },
      "site": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "181220002",
            "display": "Entire oral cavity"
          }
        ]
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394899003",
            "display": "oral administration of treatment"
          }
        ]
      },
      "doseQuantity": {
        "value": 2.5,
        "units": "mg",
        "system": "http://unitsofmeasure.org",
        "code": "mg"
      },
      "medicineName":"Albuterol"
    }
  ],
  "dispense": {
    "validityPeriod": {
      "start": "2013-04-08",
      "end": "2013-05-30"
    },
    "numberOfRepeatsAllowed": 20,
    "quantity": {
      "value": 100,
      "units": "mg",
      "system": "urn:oid:2.16.840.1.113883.6.8",
      "code": "ug"
    },
    "expectedSupplyDuration": {
      "value": 40,
      "units": "days",
      "system": "urn:oid:2.16.840.1.113883.6.8",
      "code": "d"
    }
  }
};
	
var medication=
{
  "resourceType": "Medication",
  "text": {
    "status": "generated",
    "div": "<div> 2.5mg (0.5mL of 0.5% diluted to 3mL with sterile normal saline, or 3mL of 0.083%) 3–4</div>"
  },
  "name": "Albuterol 2.5mg",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "323418000",
        "display": " 2.5mg (0.5mL of 0.5% diluted to 3mL with sterile normal saline, or 3mL of 0.083%) 3–4"
      },
      {
        "system": "http://nehta.gov.au/amt/v2",
        "code": "22571011000036102",
        "display": "phenoxymethylpenicillin 125 mg / 5 mL oral liquid, 5 mL measure"
      }
    ]
  },
  "isBrand": false,
  "kind": "product",
  "product": {
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "37595005",
          "display": "Suspension"
        }
      ]
    }
  }
};
	
	$scope.loadPrescription = function() {
		/*$http.get(host2 + "/Prescription")
				.success(function(response) {
					$rootScope.prescriptiondata = response;

//					alert(JSON.stringify(response));
				});*/
			/*	$http.get(host2+ "/Medication")
				.success(function(response) {
					$rootScope.name = response.name;
					
				});*/
				
				$rootScope.prescriptiondata=presciption;
				//$rootScope.name=medication.name;
				$rootScope.name="Albuterol";
				
	};

	
	$(document).ready(function(){
  // we call the function
$rootScope.changeFooter();
$rootScope.onchat1();
});
	
});