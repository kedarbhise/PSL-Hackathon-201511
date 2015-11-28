var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Gaig!@#123',
  database : 'hackathon'
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

//to make db connection
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});

//To get requested user's details
app.get('/getRequestQueue', function(req, res) {
	connection.query('SELECT * FROM Requests a, Customer b where a.EmailId=b.EmailId', function(err, rows, fields) {
	//connection.end();
  if (!err){
    console.log('The solution is: ', rows);
	res.send(rows);
	}
  else{
    console.log('Error while performing Query.');
  }
  });	
});

//To get requested user's details
app.get('/getEnergyUsage', function(req, res) {
	var customerId = req.query.CustomerId;
	console.log("customerId: "+customerId);
	connection.query('SELECT * FROM EnergyUsage where CustomerId='+customerId, function(err, rows, fields) {
  if (!err){
    console.log('The solution is: ', rows);
	res.send(rows);
	}
  else{
    console.log('Error while performing Query.');
  }
  });		
});

//To post user's details
app.post('/postHelpRequest', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	var body=req.body;
	console.log(body); 
	var query1="INSERT INTO Requests (EmailId, isServiced) VALUES ('"+body.EmailId+"',0)";
	connection.query(query1,function(err, rows, fields) {
	if (err) {
		console.error(err);
		res.statusCode = 500;
		res.send(JSON.stringify({
			result: 'error',
			err: err.code
		}));
	}
	else{	
		console.log("Record saved to Requests table");
		var check=getCustomerDetails(body.EmailId,function(error,isExist){
			if(error==null){
				if(isExist){
					console.log("Exist ");
				}
				else
				{	console.log("Not Exist ");
					insertCustomerData(body.Name,body.EmailId);
				}
			}
			else{
				console.log("Error while selecting ");
			}
		});
		res.send(JSON.stringify({
				result: 'success',
				json: rows,
				length: rows.length
				}));
		//connection.end();
	}	 
	});

});

//To update URL
app.post('/postMeetURL', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	var body=req.body;
	console.log(body); 
	var query="UPDATE Requests SET MeetingURL='"+body.URL+"', isServiced=1 WHERE RequestId="+body.RequestId;
	connection.query(query,function(err, rows, fields) {
	if (err) {
		console.error(err);
		res.statusCode = 500;
		res.send(JSON.stringify({
			result: 'error',
			err: err.code
		}));
	}
	else{	
		console.log("Record updated to db");
		res.send(JSON.stringify({
		result: 'success',
		json: rows,
		length: rows.length
		}));
		//connection.end();
	}	 
	});

});

app.get('/getMeetURL', function(req, res) {
	var requestId = req.query.RequestId;
	console.log("requestId: "+requestId);
	connection.query('SELECT MeetingURL FROM Requests where RequestId='+requestId, function(err, rows, fields) {
	
  if (!err){
    console.log('The solution is: ', rows);
	res.send(rows);
	}
  else{
    console.log('Error while performing Query.');
  }
  });

		
});

function getCustomerDetails(emailId,callback){
	connection.query("SELECT * FROM Customer where EmailId='"+emailId+"'", function(err, rows, fields) {
	//connection.end();
  if (!err){
    console.log('The solution is: ', rows);
    if(rows.length>0){
    	 callback(null,true);
 	}
 	else
 		callback(null,false);
	//res.send(rows);
	}
  else{
    console.log('Error while performing Search on Customer.');
    callback(err,false);
  }
  });
}

function insertCustomerData(name,emailId){
	var query="INSERT INTO Customer (Name,EmailId) VALUES ('"+name+"','"+emailId+"')";
	connection.query(query,function(err, rows, fields) {
	if (err) {
		console.error(err);
	}
	else{	
		console.log("Record added to customer db");
	}	 
	});
}
app.listen(3000);

