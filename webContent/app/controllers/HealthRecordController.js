App.controller('healthRecordController', ["$scope","$http","$rootScope", function($scope,$http,$rootScope) {

$(document).ready(function(){
  // we call the function
$rootScope.changeFooter();
$rootScope.onchat1();
});

$rootScope.user=
	{
		    name:"Edmund Jackson",
		    email:"edmund234@gmail.com",
		    address:
		    {
			    street : "675 Valley Brok Ave",
			    city: "NJ",
			    pin:"07071",
		     	country:"United States"			
             },
             tel:"+1 201-933-9477",
             mobile:"+1 201-933-9488",
             age:"68 yrs",
             height:" 174 cm ",
             vision:"20/20",
             gender:"Male",
             weight:"154.3 lbs",
             hearing:"Normal"
	};
	
  $(function() {
  
    $( "#accordion1" ).accordion({
  collapsible: true,
  heightStyle: "content"
});
    $( "#accordion2" ).accordion({
   collapsible: true,
  heightStyle: "content"
});
    $( "#accordion3" ).accordion({
   collapsible: true,
  heightStyle: "content"
});
 $( "#accordion4" ).accordion({
   collapsible: true,
  heightStyle: "content"
});
 $( "#accordion5" ).accordion({
   collapsible: true,
  heightStyle: "content"
});

  });
  
  $scope.timeLineData=["1","2","3","4","5"];
 
   var allergies_local=
   [

  {
    "resourceType": "AllergyIntolerance",
    "text": {
      "status": "generated",
      "div": "<div>Sensitivity to Dust mites</div>"
    },
    "criticality": "Moderate",
    "sensitivityType": "allergy",
    "recordedDate": "22-05-2000",
    "status": "confirmed",
    "subject": {
      "reference": "Patient/1000001"
    },
    "substance": {
      "reference": "Substance/ndfrt-N0000175503"
    },
    "reaction": {
      "reference": "AdverseReaction/28"
    }
  },
  {
	    "resourceType": "AllergyIntolerance",
	    "text": {
	      "status": "generated",
	      "div": "<div>Sensitivity to Pollen</div>"
	    },
	    "criticality": "Moderate",
	    "sensitivityType": "allergy",
	    "recordedDate": "22-05-2000",
	    "status": "confirmed",
	    "subject": {
	      "reference": "Patient/1000001"
	    },
	    "substance": {
	      "reference": "Substance/ndfrt-N0000175503"
	    },
	    "reaction": {
	      "reference": "AdverseReaction/28"
	    }
	  },
	  {
		    "resourceType": "AllergyIntolerance",
		    "text": {
		      "status": "generated",
		      "div": "<div>Sensitivity to Animal Hair</div>"
		    },
		    "criticality": "Low",
		    "sensitivityType": "allergy",
		    "recordedDate": "22-05-2000",
		    "status": "confirmed",
		    "subject": {
		      "reference": "Patient/1000001"
		    },
		    "substance": {
		      "reference": "Substance/ndfrt-N0000175503"
		    },
		    "reaction": {
		      "reference": "AdverseReaction/28"
		    }
		  },
  {
	    "resourceType": "AllergyIntolerance",
	    "text": {
	      "status": "generated",
	      "div": "<div>Sensitivity to Penicllin</div>"
	    },
	    "criticality": "Severe",
	    "sensitivityType": "allergy",
	    "recordedDate": "22-05-2000",
	    "status": "confirmed",
	    "subject": {
	      "reference": "Patient/1000001"
	    },
	    "substance": {
	      "reference": "Substance/ndfrt-N0000175503"
	    },
	    "reaction": {
	      "reference": "AdverseReaction/28"
	    }
	  }
];


var len=allergies_local.length;
        var i=0;
        var arr=[];
        for(i=0;i<len;i++)
        {
          var allObj={};
          var res=allergies_local[i].text.div;
          res = res.replace("<div>", "");
          res = res.replace("</div>", "");
          allObj.name=res;
          allObj.status=allergies_local[i].status;
          allObj.criticality=allergies_local[i].criticality;
          if(allObj.criticality.toLowerCase()=='low')
          {
            allObj.color="orange";
          }
          if(allObj.criticality.toLowerCase()=='high')
          {
             allObj.color="red";
          }
          var sub=res.replace("Sensitivity to ","");
          allObj.substance=sub;
          allObj.reaction=allergies_local[i].reaction.reference;
          allObj.RecordedAt=allergies_local[i].recordedDate;
          arr.push(allObj);
		 
		  
        }
         $scope.allergies=arr;
		 
 /*  $http.get(host+"/allergies")
       .success(function (response) {
        var len=response.length;
        var i=0;
        var arr=[];
        for(i=0;i<len;i++)
        {
          var allObj={};
          var res=response[i].text.div;
          res = res.replace("<div>", "");
          res = res.replace("</div>", "");
          allObj.name=res;
          allObj.status=response[i].status;
          allObj.criticality=response[i].criticality;
          if(allObj.criticality.toLowerCase()=='low')
          {
            allObj.color="orange";
          }
          if(allObj.criticality.toLowerCase()=='high')
          {
             allObj.color="red";
          }
          var sub=res.replace("Sensitivity to ","");
          allObj.substance=sub;
          allObj.reaction=response[i].reaction.reference;
          allObj.RecordedAt=response[i].recordedDate;
          arr.push(allObj);
		 
		  
        }
         $scope.allergies=arr;
		 
       });*/
  
  
      var medicine_local=
	  [
 /* {
    "resourceType": "MedicationPrescription",
    "text": {
      "status": "generated",
      "div": "<div>Insulin, Aspart, Human (NovoLog), Rx Norm: 284810</div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "name": "Theophylline"
      }
    ],
    "patient": {
      "reference": "Patient/1000001"
    },
    "dosageInstruction": [
      {
        "text": "5mg/kg/day",
        "timingSchedule": {
          "event": [
            {
              "start": "13-08-2008"
            }
          ],
          "repeat": {
            "frequency": "Twice",
            "duration": "1"
          }
        },
        "doseQuantity": {
          "value": "100",
          "units": "mg",
          "system": "http://unitsofmeasure.org"
        }
      }
    ]
  },*/
      {
    "resourceType": "MedicationPrescription",
    "text": {
      "status": "generated",
      "div": "<div>Lipitor</div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "name": "Lipitor"
      }
    ],
    "patient": {
      "reference": "Patient/1000001"
    },
    "dosageInstruction": [
      {
        "text": "10-80 mg PO qDay",
        "timingSchedule": {
          "event": [
            {
              "start": "13-08-2008"
            }
          ],
          "repeat": {
            "frequency": "Twice",
            "duration": "1"
          }
        },
        "doseQuantity": {
          "value": "20",
          "units": "mg",
          "system": "http://unitsofmeasure.org"
        }
      }
    ]
  },
  
        {
    "resourceType": "MedicationPrescription",
    "text": {
      "status": "generated",
      "div": "<div>Lisinopril</div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "name": "Lisinopril"
      }
    ],
    "patient": {
      "reference": "Patient/1000001"
    },
    "dosageInstruction": [
      {
        "text": "10 mg Once a day",
        "timingSchedule": {
          "event": [
            {
              "start": "13-08-2008"
            }
          ],
          "repeat": {
            "frequency": "Once ",
            "duration": "1"
          }
        },
        "doseQuantity": {
          "value": "10",
          "units": "mg",
          "system": "http://unitsofmeasure.org"
        }
      }
    ]
  }
];


        var len2=medicine_local.length;
        var i=0;
        var arr2=[];
        for(i=0;i<len2;i++)
        {
          var medObj={};
          medObj.name=medicine_local[i].contained[0].name;
          medObj.numberOfDays=medicine_local[i].dosageInstruction[0].timingSchedule.repeat.duration+' days';
          medObj.doseQuantity=medicine_local[i].dosageInstruction[0].doseQuantity.value+' '+medicine_local[i].dosageInstruction[0].doseQuantity.units;
          medObj.doseFrequency=medicine_local[i].dosageInstruction[0].timingSchedule.repeat.frequency;
          medObj.startedOn=medicine_local[i].dosageInstruction[0].timingSchedule.event[0].start;
          arr2.push(medObj);
        }
         $scope.medicine=arr2;


     /*$http.get(host+"/medications")
       .success(function (response) {
        var len=response.length;
        var i=0;
        var arr=[];
        for(i=0;i<len;i++)
        {
          var medObj={};
          medObj.name=response[i].contained[0].name;
          medObj.numberOfDays=response[i].dosageInstruction[0].timingSchedule.repeat.duration+' days';
          medObj.doseQuantity=response[i].dosageInstruction[0].doseQuantity.value+' '+response[i].dosageInstruction[0].doseQuantity.units;
          medObj.doseFrequency=response[i].dosageInstruction[0].timingSchedule.repeat.frequency;
          medObj.startedOn=response[i].dosageInstruction[0].timingSchedule.event[0].start;
          arr.push(medObj);
        }
         $scope.medicine=arr;
       });
       */
   $scope.emails=["aniket_khaire@persistent.com","sushank_dahiwadkar@persistent.com","mayank_senani@persistent.com","nagesh_pathrut@persistent.com"];
  
  
}]);

  