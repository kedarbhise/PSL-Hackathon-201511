App
		.controller(
				'chatController',
				[
						"$scope",
						"$http",
						"$rootScope",
						function($scope, $http, $rootScope) {

							$scope.chat = function() {
								var accessToken = "";
								var client_id = "ngHfBRv5V0I";
								var client_secret = "sNrrSI109-s";
								timestamp = new Date().getTime();
								console.log(timestamp);
								var hash = CryptoJS.HmacSHA256(client_id
										+ 'edmundj234@gmail.com' + timestamp,
										client_secret);
								var hashInBase64 = CryptoJS.enc.Base64
										.stringify(hash);
								var signature = hashInBase64
										.replace(/\+/g, '-')
										.replace(/\//g, '_')
										.replace(/\=+$/, '');
								console.log("signature:" + signature);
								$http(
										{
											url : "https://apisandbox.moxtra.com/oauth/token",
											method : "POST",
											headers : {
												"Content-Type" : "application/x-www-form-urlencoded"
											},
											transformRequest : function(obj) {
												var str = [];
												for ( var p in obj)
													str
															.push(encodeURIComponent(p)
																	+ "="
																	+ encodeURIComponent(obj[p]));
												return str.join("&");
											},
											data : {
												"client_id" : client_id,
												"client_secret" : client_secret,
												"grant_type" : "http://www.moxtra.com/auth_uniqueid",
												"timestamp" : timestamp,
												"uniqueid" : "edmundj234@gmail.com",
												"signature" : signature
											}
										})
										.success(
												function(data, status) {
													// alert("success in
													// authenticate");
													console
															.log("access token : "
																	+ data.access_token);
													console
															.log("access token expiry : "
																	+ data.expires_in);
													accessToken = data.access_token;
													console.log("at:"
															+ accessToken);

													var options = {
														mode : "sandbox",
														client_id : "ngHfBRv5V0I", //
														access_token : accessToken,
														invalid_token : function(
																event) {
															// Triggered when
															// the access token
															// is expired or
															// invalid
															alert("Access Token expired for session id: "
																	+ event.session_id);
														}
													};
													console.log("at1:"
															+ accessToken);
													Moxtra.init(options);
													/*
													 * $http({ url:
													 * "https://apisandbox.moxtra.com/me/binders?access_token="+accessToken,
													 * method: "POST", headers:
													 * {"Content-Type":
													 * "application/json"},
													 * data: { "name": "Hello
													 * World"
													 *  } }).
													 * success(function(data,
													 * status) { alert("binder
													 * success");
													 * alert(JSON.stringify(data));
													 * 
													 * console.log("binder
													 * id"+data.data.id); //
													 * alert( $scope.binderId);
													 * 
													 * }). error(function(data,
													 * status) { alert("error in
													 * binder"); $scope.data =
													 * data || "Authentication
													 * failed"; $scope.status =
													 * status; });
													 * 
													 * 
													 */

												})
										.error(
												function(data, status) {
													alert("error in authentication");
													$scope.data = data
															|| "Authentication failed";
													$scope.status = status;
												});

								$scope.em = "";
								var i = 0;
								for (i = 0; i < $scope.emails.length - 1; i++) {
									$scope.em = $scope.em + $scope.emails[i]
											+ ",";
								}
								$scope.em = $scope.em + $scope.emails[i];

								var options1 = {
									binder_id : "BkrJi4pEpk81qIQdEX8Ii76",
									email : $scope.em,
									iframe : true,
									tagid4iframe : "chatContainer",
									iframewidth : "100%",
									iframeheight : "700px",
									autostart_meet : true,
									autostart_note : false,
									start_chat : function(event) {
										// alert("Chat started session Id: " +
										// event.session_id);
									},
									start_meet : function(event) {
										alert("Meet started session key: "
												+ event.session_key
												+ " session id: "
												+ event.session_id);
									},
									end_meet : function(event) {
										alert("Meet end event");
									},
									invite_member : function(event) {
										alert("Invite member into binder Id: "
												+ event.binder_id);
									},
									request_note : function(event) {
										alert("Note start request");
									},
									error : function(event) {
										alert("Chat error code: "
												+ event.error_code
												+ " error message: "
												+ event.error_message);
									}
								};
								Moxtra.chat(options1);

							}

							$(document)
									.ready(
											function() {
												// we call the function
												// alert("chatting");
												// $scope.emails=["divya_mehta@persistent.com"];
												$scope.emails = [ "joshhanson234@gmail.com,ethanmathews234@gmail.com,ryanfleming135@gmail.com" ];
												$rootScope.changeFooter();
												$scope.chat();
											});

						} ]);
