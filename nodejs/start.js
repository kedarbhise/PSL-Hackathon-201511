
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var content={{"name":"abc","email":"abc@gmail.com"},{"name":"xyz","email":"xyz@gmail.com"}};

//request=request.defaults({'proxy':'http://shipra_singhal:saurabh@119@hjproxy.persistent.co.in:8080'});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/getDetails', function(req, res) {
	
});
app.post('/postDetails', function(req, res) {
	console.log("Body: "+JSON.stringify(req.body));	
	
	console.log("Content: "+JSON.stringify(content));
	postMarks(req, res);
});


//Post Marks
function postMarks(req, res){
request({	url: 'https://gateway.watsonplatform.net/tradeoff-analytics/api/v1/dilemmas',
			method: 'POST',
			body: JSON.stringify(content),
			headers: {
				'Authorization':'Basic ZTNiNjA2ZmUtMDM4My00MzlhLTg2N2MtNGMyMGJmM2Y1OThhOlVSbWxQaWlJMTVoSQ==',
				'Content-Type':'application/json'
				}
			
		},
			function(error, response, body){
				console.log("Fetching Data");
				//console.log(error+": "+response.statusCode);
				if (!error && response.statusCode == 200) {
					console.log("successful POST");
					//res.send(JSON.parse(body));
					var result=JSON.parse(body).resolution; 
					var frontResult="<b>Top-Options</b> : ";
					var excludedResult="<b>Excluded-Options</b> : "; 
					for(var i=0;i<3;i++){
						if(result.solutions[i].status == "FRONT"){
							if((result.solutions[i].solution_ref)==(content.options[i].key))
							{
							frontResult+=content.options[i].name+" ";
							}
						}
						else{
							if((result.solutions[i].solution_ref)==(content.options[i].key))
							{
							excludedResult+=content.options[i].name+" ";
							}
						}														
					}
					res.send(frontResult+"<br><br>"+excludedResult);	
				}
				else{
				res.send("Error:"+error);
				}			
			}	
		);
}

app.listen(3000);

