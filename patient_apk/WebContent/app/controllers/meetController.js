App.controller('meetController',[ '$scope','$rootScope','$window','$state','$http', function( $scope,$rootScope,$window,$state,$http ){
	
								
								//navigator.startApp.start([["com.android.settings", "com.android.settings.fuelgauge.PowerUsageSummary"]																						
								//alert(navigator);
								//alert(navigator.startApp);
								
								var userName = 'edmundj234@gmail.com ';
								var password = 'persistent';
								var applicationName = 'Health';
								var clientId = 'g0uivUS2F2E';
								var clientSecret = 'pcufJOJ-3Tk';
								var current_timestamp = new Date().getTime();
								
								var hash = CryptoJS.HmacSHA256(clientId + userName + current_timestamp, clientSecret);
								var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
								var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
								
								console.log("clientId >> "+clientId);
								console.log("clientSecret >> "+clientSecret);
								console.log("current_timestamp >> "+current_timestamp);
								console.log("userName >> "+userName);
								console.log("signature >> "+signature);
								
								var apisandbox_moxtra_token_parameters  =  {
										client_id: String(clientId),
										client_secret: String(clientSecret),
										grant_type: 'http://www.moxtra.com/auth_uniqueid',
										timestamp: String(current_timestamp),
										uniqueid: String(userName),
										signature: String(signature)
									};


									

								
									$http({
										url: 'https://apisandbox.moxtra.com/oauth/token',
										method: "POST",
										headers: {
											"Content-Type": "application/x-www-form-urlencoded"
										},
										transformRequest: function(obj) {
											var str = [];
											for(var p in obj)
											str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
											return str.join("&");
										},
										data: apisandbox_moxtra_token_parameters
									}).success(function(data, status) {
										$scope.access_token_for_meeting = data.access_token;
										//alert("Access Token is:"+$scope.access_token_for_meeting);
										
								navigator.startApp.start([["com.example.conversationsdk", "com.example.conversationsdk.activity.LoginActivity"],[{"access_token_for_meeting":$scope.access_token_for_meeting }]
                                                ], function(message) {
                                                console.log(message);
                                },
                                function(error) {
                                                console.log(error);
                                });
								
								
									}).error(function(data, status) {
										$scope.data = data || "Authentication failed";
										$scope.status = status;
									});
									
									

                                
}]);