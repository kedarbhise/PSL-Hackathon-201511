/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 * 
 */

if (typeof $ === 'undefined') { throw new Error('This application\'s JavaScript requires jQuery'); }

var host=domain;
var host2=domain2;

// APP START
// ----------------------------------- 
var changeSt=undefined;
var changeStateToTimeline=undefined;
var changeStateToDetail=undefined;

var App = angular.module('angle', ['ngRoute', 'ngAnimate', 'ngStorage', 'ngCookies', 'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', 'cfp.loadingBar', 'ngSanitize', 'ngResource', 'ui.utils'])
          .run(["$rootScope", "$state", "$stateParams",  '$window', '$templateCache','$http', function ($rootScope, $state, $stateParams, $window, $templateCache,$http) {
              // Set reference to access them from any scope
              $rootScope.$state = $state;
              $rootScope.$stateParams = $stateParams;
              $rootScope.$storage = $window.localStorage;
			  $rootScope.changeState=function(state){
                 if( $state.current.name==state)
				  return;
				 
				$rootScope.changeFooter();
			    $state.go(state);
			  };
			  //testing footer change
			   $rootScope.testFcn=function()
			  { 
			    //alert('hghgjhjh');
			   }
			  $rootScope.changeFooter=function()
			  { 
				switch($state.current.name)
				{
				case "app.healthRecord":
				case "app.myCareTeam":
				case "app.shareHealthRecord":
				case 'app.detailedView':
				case 'app.ongoingTreatment':
				case 'app.report':
				case 'app.prescription':
					var ele='<br/><div class="text-center h5" style="color:black;margin-top:0px;">&copy;2015 - Persistent Systems Ltd.</div>';
				break;
				case "app.chat":
					var ele='<center style="height:100%"><button type="button" style="height:100%; font-size:2rem;" class="btn btn-square btn-danger myButton mt0 mb0">Emergency Broadcast</button></center>';
				break;
				
   					
				}
                $("#footerDiv").empty();
	            $("#footerDiv").append(ele);
			   }
			   changeSt=function(state)
			   {
			
					$state.go(state);
			   }
			   
			   changeStateToTimeline=function()
			   {
			  
					$state.go("app.ongoingTreatment");
			   }
			    changeStateToDetail=function()
			   {
			  
					$state.go("app.detailedView");
			   }
			   changeStateToChat=function()
			   {
			  
					$state.go("app.chat");
			   }
			   
			   //end testing footer change
              // Uncomment this to disable template cache
              /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                  if (typeof(toState) !== 'undefined'){
                    $templateCache.remove(toState.templateUrl);
                  }
              });*/

              // Scope Globals
              // ----------------------------------- 
              $rootScope.app = {
                name: 'Care Coordination',
                description: 'Angular Bootstrap Admin Template',
                year: ((new Date()).getFullYear()),
                layout: {
                  isFixed: true,
                  isCollapsed: true,
                  isBoxed: false,
                  isRTL: false,
                  horizontal: false,
                  isFloat: false,
                  asideHover: false
                },
                useFullLayout: false,
                hiddenFooter: false,
                viewAnimation: 'ng-fadeInUp'
              };
              /*$rootScope.user = {
                name:     'John',
                job:      'ng-Dev',
                picture:  'app/img/user/02.jpg'
              };*/
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
              $rootScope.myData=[
                                 
                                 {
                                	"image":"Ethan.jpg",
                                	"clinic":"Genesis Clinic",
                                	"add":"Sacramento",
                                	"state":"CA",
                                	"doctor":"Dr. Ethan Mathews",
                                	//"desig":"Neurologist (HDHS,NERS)",
                                	"desig":"Pulmonologist",
                                	"addedOn":"28 April, 2015",
                                	"email":"Ethan@gmail.com"
                                	},
                                	{
                                	"image":"Ryan.jpg",
                                	"clinic":"Merzano Clinic",
                                	"add":"Roseville",
                                	"state":"CA",
                                	"doctor":"Dr. Ryan Fleming",
                                	//"desig":" Eye Specialist(HDHS,NERS)",
                                	"desig":"Cardiologist",
                                	"addedOn":"17 Dec, 2014",
                                	"email":"Ryan@gmail.com"
                                	},
                                	{
                                	"image":"Josh.jpg",
                                	"clinic":"Magna Care Clinic",
                                	"add":"Sacramento",
                                	"state":"CA",
                                	"doctor":"Dr. Josh Hanson",
                                	//"desig":"(PCP, MD, ABD)",
                                	"desig":"Primary Care Physician",	
                                	"addedOn":"14 Aug, 2014",
                                	"email":"Josh@gmail.com"
                                	}/*,
                                	{
                                	"image":"David.jpg",
                                	"clinic":"Stanford Clinic",
                                	"add":"Stanford", 
                                	"state":"CA",
                                	"doctor":"Dr. David Brown",
                                	//"desig":" Specialist (NNSC, HAS)",
                                	"desig":"Pathologist",	
                                	"addedOn":"15 Jan, 2015"
                                	},*/
                                 
                                 ];
//$rootScope.emails=["aniket_khaire@persistent.com","sushank_dahiwadkar@persistent.com","mayank_senani@persistent.com","nagesh_pathrut@persistent.com"];
  $rootScope.emails=["aniket_khaire@persistent.com"];
 
			  
			  /* chat=function()
	{
  		var client_id = "ngHfBRv5V0I";
		var client_secret = "sNrrSI109-s";
			timestamp = new Date().getTime();
			console.log(timestamp);
			var hash = CryptoJS.HmacSHA256(client_id + 'b' + timestamp, client_secret);
			var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
			var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
			console.log("signature:"+signature);
			$http({
				url: "https://apisandbox.moxtra.com/oauth/token",
				method: "POST",
				headers: {"Content-Type": "application/x-www-form-urlencoded"},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: {
					"client_id": client_id,
					"client_secret": client_secret,
					"grant_type": "http://www.moxtra.com/auth_uniqueid",
					"timestamp": timestamp,
					"uniqueid": "b",
					"signature": signature}
			}).
			success(function(data, status) {
			 alert("success in authenticate");
			 console.log("access token : "+data.access_token);
			 	 console.log("access token expiry : "+data.expires_in);
				  $rootScope.accessToken = data.access_token;
			
				 
			}).
			error(function(data, status) {
			alert("error in authentication");
				  $rootScope.data = data || "Authentication failed";
				  $rootScope.status = status;
			});
			
			
			
			
			var options = {
                    mode: "production", 
                    client_id: "ngHfBRv5V0I", //
                    access_token: $rootScope.accessToken,
                    invalid_token: function(event) {
                        //Triggered when the access token is expired or invalid
                        alert("Access Token expired for session id: " + event.session_id);
                    }
                };
             Moxtra.init(options);
			
			$rootScope.em="";
			var i=0;
			for(i=0;i<$rootScope.emails.length-1;i++)
				{
				  $rootScope.em=$rootScope.em+$rootScope.emails[i]+",";
				}
			$rootScope.em=$rootScope.em+$rootScope.emails[i];
	var options1 = {
			email: $rootScope.em,
			iframe: true,
			tagid4iframe: "container",
			iframewidth: "100%",
			iframeheight: "650px",
			autostart_meet: true,
			autostart_note: false,
			start_chat: function(event) {
		alert("Chat started session Id: " + event.session_id);
    },
    start_meet: function(event) {
        alert("Meet started session key: " + event.session_key + " session id: " + event.session_id);
    },
    end_meet: function(event) {
        alert("Meet end event");
    },
    invite_member: function(event) {
        alert("Invite member into binder Id: " + event.binder_id);
    },
    request_note: function(event) {
        alert("Note start request");
    },
    error: function(event) {
        alert("Chat error code: " + event.error_code + " error message: " + event.error_message);
    }
};
Moxtra.chat(options1);

  }

	*/		  
  
  

  
  
  
  
  
			  
			  
          }]);

/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
  'use strict';

  // Set the following to true to enable the HTML5 Mode
  // You may have to set <base> tag in index and a routing configuration in your server
  $locationProvider.html5Mode(false);

  // default route
  $urlRouterProvider.otherwise('/app/healthRecord');

  // 
  // Application Routes
  // -----------------------------------   
  $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: helper.basepath('app.html'),
        controller: 'AppController',
        resolve: helper.resolveFor('modernizr', 'icons','slimscroll')
    })
    .state('app.singleview', {
        url: '/singleview',
        title: 'Single View',
        templateUrl: helper.basepath('singleview.html')
    })
    .state('app.submenu', {
        url: '/submenu',
        title: 'Submenu',
        templateUrl: helper.basepath('submenu.html')
    })
	.state('app.healthRecord', {
        url: '/healthRecord',
        title: 'Health Record',
        templateUrl: helper.basepath('healthRecord.html'),
		//controller:  'healthRecordController',
        resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets')
    })
	 .state('app.ongoingTreatment', {
        url: '/ongoingTreatment',
        title: 'Ongoing Treatment',
		controller:  'ongoingTreatmentController',
        templateUrl: helper.basepath('ongoingTreatment.html')
		
    })
  .state('app.detailedView', {
        url: '/detailedView',
        title: 'Detailed View',
		controller:'detailedViewController',
        templateUrl: helper.basepath('detailedView.html')
		
    })
	.state('app.myCareTeam', {
        url: '/myCareTeam',
        title: 'My Care Team',
		controller: 'myCareTeamController',
        templateUrl: helper.basepath('myCareTeam.html')
    })
	.state('app.shareHealthRecord', {
        url: '/shareHealthRecord',
        title: 'Share Health Record',
		controller: 'shareHealthRecordController',
        templateUrl: helper.basepath('shareHealthRecord.html')
    })
	.state('app.chat', {
        url: '/chat',
        title: 'Chat',
		controller: 'chatController',
        templateUrl: helper.basepath('chat.html')
    })
		.state('app.meet', {
        url: '/meet',
        title: 'Meet',
		controller: 'meetController',
       //templateUrl: helper.basepath('shareHealthRecord.html')
    })
	.state('app.report', {
        url: '/report',
        title: 'report',
		controller: 'reportController',
        templateUrl: helper.basepath('report.html')
    })
		.state('app.prescription', {
        url: '/prescription',
        title: 'prescription',
		controller: 'prescriptionController',
        templateUrl: helper.basepath('Prescription.html')
    })
    .state('app.useragent', {
        url: '/useragent',
        title: 'User Agent',
        templateUrl: helper.basepath('UserAgentView.html')
    })
    .state('app.login', {
                              url: '/login',
                              title: 'Login Page',
                              controller: 'LoginController',
                              templateUrl: helper.basepath('Login.html')
                             // resolve: helper.resolveFor('oitozero.ngSweetAlert')
                          })
    .state('app.patientrecord',{
	    url : '/PatientRecord',
	    title : 'paient-record',
	    controller : "patientRecordController",
		templateUrl : helper.basepath('PatientRecord.html')
    })
		//resolve : helper.resolveFor('modernizr',
			//							'icons', 'slimscroll')
     .state('app.meeting', {
        url: '/meeting',
        title: 'Meeting',
        controller:'moxtraMeetingController',
        templateUrl: helper.basepath('meeting.html')
    })


    // 
    // CUSTOM RESOLVES
    //   Add your own resolves properties
    //   following this object extend
    //   method
    // ----------------------------------- 
    // .state('app.someroute', {
    //   url: '/some_url',
    //   templateUrl: 'path_to_template.html',
    //   controller: 'someController',
    //   resolve: angular.extend(
    //     helper.resolveFor(), {
    //     // YOUR RESOLVES GO HERE
    //     }
    //   )
    // })
    ;


}]).config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
    'use strict';

    // Lazy Load modules configuration
    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      modules: APP_REQUIRES.modules
    });

}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ( $controllerProvider, $compileProvider, $filterProvider, $provide) {
      'use strict';
      // registering components after bootstrap
      App.controller = $controllerProvider.register;
      App.directive  = $compileProvider.directive;
      App.filter     = $filterProvider.register;
      App.factory    = $provide.factory;
      App.service    = $provide.service;
      App.constant   = $provide.constant;
      App.value      = $provide.value;

}]).config(['$translateProvider', function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix : 'app/i18n/',
        suffix : '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();
    $translateProvider.usePostCompiling(true);

}]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.parentSelector = '.wrapper > section';
  }])
;

/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/
App
  .constant('APP_COLORS', {
    'primary':                '#5d9cec',
    'success':                '#27c24c',
    'info':                   '#23b7e5',
    'warning':                '#ff902b',
    'danger':                 '#f05050',
    'inverse':                '#131e26',
    'green':                  '#37bc9b',
    'pink':                   '#f532e5',
    'purple':                 '#7266ba',
    'dark':                   '#3a3f51',
    'yellow':                 '#fad732',
    'gray-darker':            '#232735',
    'gray-dark':              '#3a3f51',
    'gray':                   '#dde6e9',
    'gray-light':             '#e4eaec',
    'gray-lighter':           '#edf1f2'
  })
  .constant('APP_MEDIAQUERY', {
    'desktopLG':             1200,
    'desktop':                992,
    'tablet':                 768,
    'mobile':                 480
  })
  .constant('APP_REQUIRES', {
    // jQuery based and standalone scripts
    scripts: {
      'modernizr':          ['vendor/modernizr/modernizr.js'],
      'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                             'vendor/simple-line-icons/css/simple-line-icons.css'],
	                             // jquery core and widgets
      'jquery-ui':          ['vendor/jquery-ui/ui/core.js',
                             'vendor/jquery-ui/ui/widget.js'],
                             // loads only jquery required modules and touch support
      'jquery-ui-widgets':  ['vendor/jquery-ui/ui/core.js',
                             'vendor/jquery-ui/ui/widget.js',
                             'vendor/jquery-ui/ui/mouse.js',
                             'vendor/jquery-ui/ui/draggable.js',
                             'vendor/jquery-ui/ui/droppable.js',
                             'vendor/jquery-ui/ui/sortable.js',
							 'vendor/jquery-ui/ui/accordion.js',
							 'vendor/jquery-ui/jquery-ui.css',
                             'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
	  'slimscroll':         ['vendor/slimScroll/jquery.slimscroll.min.js']
	  
    },
    // Angular based script (use the right module name)
    modules: [
      // { name: 'toaster', files: ['vendor/angularjs-toaster/toaster.js','vendor/angularjs-toaster/toaster.css'] }
    ]

  })
;
/**=========================================================
 * Module: main.js
 * Main Application Controller
 =========================================================*/

App.controller('AppController',
  ['$rootScope', '$scope', '$state', '$translate', '$window', '$localStorage', '$timeout', 'toggleStateService', 'colors', 'browser', 'cfpLoadingBar','$compile','$http',
  function($rootScope, $scope, $state, $translate, $window, $localStorage, $timeout, toggle, colors, browser, cfpLoadingBar,$compile,$http) {
    "use strict";

    // Setup the layout mode
    $rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout == 'app-h') ;

    // Loading bar transition
    // ----------------------------------- 
    var thBar;
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if($('.wrapper > section').length) // check if bar container exists
          thBar = $timeout(function() {
            cfpLoadingBar.start();
          }, 0); // sets a latency Threshold
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        event.targetScope.$watch("$viewContentLoaded", function () {
          $timeout.cancel(thBar);
          cfpLoadingBar.complete();
        });
    });
$rootScope.collapse = true;
	$rootScope.onchat=function()
	{
	
	  $rootScope.collapse=!$rootScope.collapse;
	  if($rootScope.collapse)
	  {
	
	    $("#outerDiv").removeClass( "mainDiv" );
		}
	 else
	 {
	 
	  $("#outerDiv").addClass( "mainDiv" );
	  }
	}	
$rootScope.onchat1=function()
	{
	
	 
	  if($rootScope.collapse)
	  {
	
	    $("#outerDiv").removeClass( "mainDiv" );
		}
	 else
	 {
	 
	  $("#outerDiv").addClass( "mainDiv" );
	  }
	}
	
	$rootScope.sidebarCollapse = true;
	$rootScope.onsidebar=function()
	{

	  $rootScope.sidebarCollapse=!$rootScope.sidebarCollapse;
	  if($rootScope.sidebarCollapse)
	  {
	
	    $("#outerDiv").removeClass( "mainDiv2" );
		}
	 else
	 { 
	  $("#outerDiv").addClass( "mainDiv2" );
	  }
	}
	
	$rootScope.onsidebar1=function()
	{
	
	  if($rootScope.sidebarCollapse)
	  {
	
	    $("#outerDiv").removeClass( "mainDiv2" );
		}
	 else
	 {
	 
	  $("#outerDiv").addClass( "mainDiv2" );
	  }
	}

	
	
    // Hook not found
    $rootScope.$on('$stateNotFound',
      function(event, unfoundState, fromState, fromParams) {
          console.log(unfoundState.to); // "lazy.state"
          console.log(unfoundState.toParams); // {a:1, b:2}
          console.log(unfoundState.options); // {inherit:false} + default options
      });
    // Hook error
    $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, fromState, fromParams, error){
        console.log(error);
      });
    // Hook success
    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams) {
        // display new view from top
        $window.scrollTo(0, 0);
        // Save the route title
        $rootScope.currTitle = $state.current.title;
      });

    $rootScope.currTitle = $state.current.title;
    $rootScope.pageTitle = function() {
      var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
      document.title = title;
      return title; 
    };

    // iPad may presents ghost click issues
    // if( ! browser.ipad )
      // FastClick.attach(document.body);

    // Close submenu when sidebar change from collapsed to normal
    $rootScope.$watch('app.layout.isCollapsed', function(newValue, oldValue) {
      if( newValue === false )
        $rootScope.$broadcast('closeSidebarMenu');
    });

    // Restore layout settings
    if( angular.isDefined($localStorage.layout) )
      $scope.app.layout = $localStorage.layout;
    else
      $localStorage.layout = $scope.app.layout;

    $rootScope.$watch("app.layout", function () {
      $localStorage.layout = $scope.app.layout;
    }, true);

    
    // Allows to use branding color with interpolation
    // {{ colorByName('primary') }}
    $scope.colorByName = colors.byName;

    // Internationalization
    // ----------------------

    $scope.language = {
      // Handles language dropdown
      listIsOpen: false,
      // list of available languages
      available: {
        'en':       'English',
        'es_AR':    'Español'
      },
      // display always the current ui language
      init: function () {
        var proposedLanguage = $translate.proposedLanguage() || $translate.use();
        var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
        $scope.language.selected = $scope.language.available[ (proposedLanguage || preferredLanguage) ];
      },
      set: function (localeId, ev) {
        // Set the new idiom
        $translate.use(localeId);
        // save a reference for the current language
        $scope.language.selected = $scope.language.available[localeId];
        // finally toggle dropdown
        $scope.language.listIsOpen = ! $scope.language.listIsOpen;
      }
    };

    $scope.language.init();

    // Restore application classes state
    toggle.restoreState( $(document.body) );

    // cancel click event easily
    $rootScope.cancel = function($event) {
      $event.stopPropagation();
    };

    //start moxtra code
    $rootScope.startMeet=function()
    {
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
    }
    //end moxtra code
	
}]);

/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/


App.controller('SidebarController', ['$rootScope', '$scope', '$state', '$http', '$timeout', 'Utils',
  function($rootScope, $scope, $state, $http, $timeout, Utils){

    var collapseList = [];

    // demo: when switch from collapse to hover, close all items
    $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal){
      if ( newVal === false && oldVal === true) {
        closeAllBut(-1);
      }
    });

    // Check item and children active state
    var isActive = function(item) {

      if(!item) return;

      if( !item.sref || item.sref == '#') {
        var foundActive = false;
        angular.forEach(item.submenu, function(value, key) {
          if(isActive(value)) foundActive = true;
        });
        return foundActive;
      }
      else
        return $state.is(item.sref) || $state.includes(item.sref);
    };

    // Load menu from json file
    // ----------------------------------- 
    
    $scope.getMenuItemPropClasses = function(item) {
      return (item.heading ? 'nav-heading' : '') +
             (isActive(item) ? ' active' : '') ;
    };

    $scope.loadSidebarMenu = function() {

      var menuJson = 'server/sidebar-menu.json',
          menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
      $http.get(menuURL)
        .success(function(items) {
           $rootScope.menuItems = items;
        })
        .error(function(data, status, headers, config) {
          alert('Failure loading menu');
        });
     };

     $scope.loadSidebarMenu();

    // Handle sidebar collapse items
    // ----------------------------------- 

    $scope.addCollapse = function($index, item) {
      collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
    };

    $scope.isCollapse = function($index) {
      return (collapseList[$index]);
    };

    $scope.toggleCollapse = function($index, isParentItem) {


      // collapsed sidebar doesn't toggle drodopwn
      if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) return true;

      // make sure the item index exists
      if( angular.isDefined( collapseList[$index] ) ) {
        if ( ! $scope.lastEventFromChild ) {
          collapseList[$index] = !collapseList[$index];
          closeAllBut($index);
        }
      }
      else if ( isParentItem ) {
        closeAllBut(-1);
      }
      
      $scope.lastEventFromChild = isChild($index);

      return true;
    
    };

    function closeAllBut(index) {
      index += '';
      for(var i in collapseList) {
        if(index < 0 || index.indexOf(i) < 0)
          collapseList[i] = true;
      }
    }

    function isChild($index) {
      return (typeof $index === 'string') && !($index.indexOf('-') < 0);
    }

}]);
/**=========================================================
 * Module: scroll.js
 * Make a content box scrollable
 =========================================================*/


/**sweetalertcontroller*/


App.controller('SweetAlertController', ['$scope', '$state', '$http', '$interval','$rootScope',
                                        function($scope, $state, $http, $interval,$rootScope){
     	  'use strict';
     
       
        

     }]);

App.directive('scrollable', function(){
  return {
    restrict: 'EA',
    link: function(scope, elem, attrs) {
      var defaultHeight = 250;
      elem.slimScroll({
          height: (attrs.height || defaultHeight)
      });
    }
  };
});
/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

App.directive('searchOpen', ['navSearch', function(navSearch) {
  'use strict';

  return {
    restrict: 'A',
    controller: ["$scope", "$element", function($scope, $element) {
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', navSearch.toggle);
    }]
  };

}]).directive('searchDismiss', ['navSearch', function(navSearch) {
  'use strict';

  var inputSelector = '.navbar-form input[type="text"]';

  return {
    restrict: 'A',
    controller: ["$scope", "$element", function($scope, $element) {

      $(inputSelector)
        .on('click', function (e) { e.stopPropagation(); })
        .on('keyup', function(e) {
          if (e.keyCode == 27) // ESC
            navSearch.dismiss();
        });
        
      // click anywhere closes the search
      $(document).on('click', navSearch.dismiss);
      // dismissable options
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', navSearch.dismiss);
    }]
  };

}]);

App.controller('patientRecordController', ["$scope","$rootScope","$state", function($scope,$rootScope,$state) {
	  /* controller code */
	  $scope.currentIllness={};
	  $scope.currentIllness.title="COPD";
	  $scope.currentIllness.desc="Chronic obstructive pulmonary disease (COPD), also known as chronic obstructive lung disease (COLD), and chronic obstructive airway disease (COAD), among others, is a type of obstructive lung disease characterized by chronically poor airflow. It typically worsens over time. The main symptoms include shortness of breath, cough, and sputum production.Most people with chronic bronchitis have COPD.";
	  
	$scope.patient=
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
	  $scope.moveTimeLine=function(){
	  $state.go('app.timeline');
	  }
	 /* $(document).ready(function(){ 
	  $rootScope.changeFooter();
	   $rootScope.changeHeader();*/
	//$rootScope.onchat1();
	//});
	}]);
App.controller('LoginController', ['$scope', '$state', '$http', '$interval',
                                 function($scope, $state, $http, $interval){

  $scope.doctorEmail="";
		$scope.password="";
		//Login Functionality
		$scope.login=function(){
		    console.log("Email:"+$scope.doctorEmail+", Password:"+$scope.password);
		  	var reqBody={
						"DoctorEmail": $scope.doctorEmail,
						"DoctorPassword": $scope.password
				};
			//	alert(JSON.stringify(reqBody));
				   $http({
          url: 'http://10.44.54.9:3000/doctorLogin',
          method:'POST',
          headers: {
			    	'Content-Type': 'application/json'
		   	},
          data:reqBody

      }).success(function(data, status) {
         // console.log(JSON.stringify(data));
          $scope.loginCredentials=data;
          if($scope.loginCredentials.result=="success"){
            console.log("Login Success: "+$scope.loginCredentials.json[0].DoctorEmail);
            localStorage.setItem("DoctorEmail",$scope.loginCredentials.json[0].DoctorEmail);
            console.log("Localstorage: "+localStorage.getItem("DoctorEmail"));
            $state.transitionTo('app.useragent');
          }

      }).error(function(data,status) {
        console.log("Login not success: "+data);

      });

		}

}]);
App.controller('UserAgentController', ['$scope','$rootScope', '$state', '$http','$window',
                                      function($scope,$rootScope, $state, $http,$window){
	/*
	 * $http.get("http://10.44.54.9:3000/getRequestQueue") .then(function
	 * (response) { alert(response.data.)});
	 */
	 $scope.details=false;
	 $scope.noData=false;
	 $scope.yesData=false;
	 $scope.selectedRow = null;
		var email=localStorage.getItem("DoctorEmail");
   $http({
          url: 'http://10.44.54.9:3000/getRequestQueue?doctorEmail="'+ email+'"',     
          method:'GET'
           
      }).success(function(data, status) {
         // console.log(JSON.stringify(data));
          $scope.record=data;
          console.log($scope.record);
                
      }).error(function(data,status) {
        

      });

   $scope.getHistory=function(requestID){
  	/* $scope.id=requestID;
  	 $scope.selectedRow = requestID;
  	// alert($scope.id);
  	  $http({
            url: 'http://10.44.54.9:3000/getEnergyUsage?CustomerId='+$scope.id,     
            method:'GET'
        
             
        }).success(function(data, status) {
           console.log(JSON.stringify(data));
           if(data==""){
          	 $scope.details=true;
          	 $scope.noData=true;
          	 $scope.yesData=false;
           }
           else{
           $scope.details=true;
           $scope.yesData=true;
           $scope.noData=false;
            $scope.usage=data;
            console.log($scope.usage);
            console.log($scope.details);
        // document.body.style.cursor = "wait";
            document.getElementById('historyTable').scrollIntoView();
          // document.body.style.cursor = "default";
           }
        }).error(function(data,status) {
          

        });*/
  	 $state.go('app.patientrecord');
  	  
   }
   
   
  	 $scope.startmeet=function(requestID){
  		// $state.go('app.meeting');
  		$scope.reqid=requestID;
  		// $rootScope.a=$scope.reqid;
  		// console.log( "rootscope value"+$rootScope.a);
  		// $localStorage.reqID
  		$window.open('http://hjd22841:8080/ProviderApp/index.html#/app/meeting?val='+$scope.reqid, '_blank');
  	 } 
  	// http://localhost:8080/ProviderApp/index.html#/app/useragent
  	
  	/*
		 * setInterval(function() { window.location.reload();
		 *  }, 15000);
		 */

}]);

App.controller('moxtraMeetingController', ['$scope', '$rootScope','$http', '$state', '$cookieStore', '$sce','$location', function($scope,$rootScope, $http, $state, $cookieStore, $sce,$location) {

		// alert($location.path());
	$scope.location = $location;
  $scope.$watch('location.search()', function() {
      $scope.target = $location.search()['val'];
      console.log($scope.target);
  }, true);
			var userName="ethanmathews234@gmail.com"; 
			var password="persistent";
			var applicationName="screensharingapp";
			var clientId="ngt7v1V6tU4";
			var clientSecret="lRojyRBD8pQ";
		// console.log( "rootscope value"+$rootScope.a);
		// $scope.ReqID=$rootScope.a;
		// console.log("URL ID:"+$scope.ReqID);
			
			var timestamp = new Date().getTime();
			
			var startMeetingTimestamp = new Date().getTime();
			var endMeetingDate = new Date();
			endMeetingDate.setDate(endMeetingDate.getDate()+1);
			var endMeetingTimestamp = endMeetingDate.getTime();
			
		
			// var hash = CryptoJS.HmacSHA256('q7QopLz9nzM' +
			// "akshaykolhe1989@gmail.com" + timestamp, 'o2QNsZN2ZSQ');
			var hash = CryptoJS.HmacSHA256(clientId + userName + timestamp, clientSecret);
			var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
			var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
			
			
			
			
			var apisandbox_moxtra = 'https://apisandbox.moxtra.com';
			var apisandbox_moxtra_token = '/oauth/token';
			var apisandbox_moxtra_binder = '/me/binders?access_token=';
			var apisandbox_moxtra_meet = '/meets/schedule?access_token=';
			// var apisandbox_moxtra_end_meet = '/meets/schedule?access_token=';
			// var apisandbox_moxtra_timeline = '/timeline?access_token=';
			
			
			
			var apisandbox_moxtra_binder_name = 'HackthonBinder';
			var apisandbox_moxtra_binder_binder_description = 'HackthonBinder is a binder for connecting people';
			
			var apisandbox_moxtra_meet_name="Consultation Meeting";
			
			console.log("clientId: "+clientId);
			console.log("clientSecret: "+clientSecret);
			console.log("timestamp: "+timestamp);
			console.log("userName: "+userName);
			console.log("signature: "+signature);
		
			
			
			var apisandbox_moxtra_token_parameters = {client_id : String(clientId),
					client_secret: String(clientSecret),
					grant_type: 'http://www.moxtra.com/auth_uniqueid',
					timestamp: String(timestamp),
					uniqueid: String(userName),
					signature: String(signature)};
					
var apisandbox_moxtra_binder_parameters = {name: apisandbox_moxtra_binder_name,
description: apisandbox_moxtra_binder_binder_description};

var apisandbox_moxtra_meet_parameters = {
name: apisandbox_moxtra_meet_name,
start_time: String(startMeetingTimestamp),
end_time: String(endMeetingTimestamp),
agenda: ''
};






					
					
					
	    	$http({
				url: apisandbox_moxtra+apisandbox_moxtra_token,
				method: "POST",
				headers: {"Content-Type": "application/x-www-form-urlencoded"} ,
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: apisandbox_moxtra_token_parameters
			}).
			success(function(data, status) {
				  accessToken = data.access_token;
				  console.log("accessToken is: "+accessToken);
				  $cookieStore.put('accessToken',accessToken);
				  $scope.status = status;
				  $scope.authInfo = data;
				  
				  
				  
				  
				  $http({
								
				url: apisandbox_moxtra+apisandbox_moxtra_binder + accessToken,
				method: "POST",

				data: apisandbox_moxtra_binder_parameters
				}).success(function(data, status) {
				$scope.status = status;
				$scope.authInfo = data;
				binderId = data.data.id;
				$cookieStore.put('binderId',binderId);
				
				console.log("Binder is: "+binderId);



$http({
			url:apisandbox_moxtra+apisandbox_moxtra_meet+accessToken, // $cookieStore.get('moxtraToken'),
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
		   	},
		   	data: apisandbox_moxtra_meet_parameters
		}).
		success(function(data,status,headers,config) {
			  
			  $scope.status = data.data.status;
			  $scope.sessionKey = data.data.startmeet_url,
			  console.log("data is: "+JSON.stringify(data));
			  console.log("sessionKey is: "+$scope.sessionKey);
			  var sessionId=data.data.session_key;
			  
				$scope.endMeet  = function(){
				// console.log("End Meet");
					$http({
					url: apisandbox_moxtra+"/"+binderId+"?access_token="+accessToken,
					method: "POST",
					}).success(function(data, status) {
						console.log("Binder deleted");
					}).
			error(function(data, status) {
				console.log("Binder deletion error");
				  $scope.data = data || "Authentication failed";
				  $scope.status = status;
			});
				}
				$scope.source = {
					"url": $sce.trustAsResourceUrl($scope.sessionKey+"?access_token="+accessToken)
					// "url":
					// $sce.trustAsResourceUrl("https://sandbox.moxtra.com/462218592?access_token="+accessToken)
				// alert($scope.source.url);
					// "url":
					// $sce.trustAsResourceUrl("https://www.moxtra.com/"+sessionId+"?access_token="+accessToken)
					// "url":
					// $sce.trustAsResourceUrl("https:/sandbox.moxtra.com/service/#timeline?access_token="+accessToken)
					// "url":
					// $sce.trustAsResourceUrl("https:/sandbox.moxtra.com/timeline?access_token="+accessToken)
				}
			  // $window.location.reload();
				

			// alert($scope.source.url);
				
		    	// alert("requestid:"+$scope.ReqID);
				// alert("requID"+$scope.target);
			// alert("sessionid:"+$scope.sessionKey);
				$scope.reid=parseInt($scope.target);
				
				// post URL
				var reqBody={
						
						"RequestId" :$scope.reid,
						"URL" :$scope.sessionKey
				}
			// alert(JSON.stringify(reqBody));
				   $http({
          url: 'http://10.44.54.9:3000/postMeetURL',     
          method:'POST',
          headers: {
				'Content-Type': 'application/json'
		   	},
          data:reqBody
           
      }).success(function(data, status) {
         // console.log(JSON.stringify(data));
          $scope.record=data;
          console.log($scope.record.result);
                
      }).error(function(data,status) {
        

      });
				 
				
				
			  
		}).
		error(function(data,status,headers,config){
			 $scope.data = data || "Authentication failed";
			$scope.status = status;
		});

}).
error(function(data, status,config) {
$scope.data = data || "Authentication failed";
$scope.status = status;
});
				  
				  
				  
				}).
			error(function(data, status) {
				  $scope.data = data || "Authentication failed";
				  $scope.status = status;
			});
			
		
			
	    	
			
			

}]);



/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================*/

App.directive('sidebar', ['$rootScope', '$window', 'Utils', function($rootScope, $window, Utils) {
  
  var $win  = $($window);
  var $body = $('body');
  var $scope;
  var $sidebar;
  var currentState = $rootScope.$state.current.name;

  return {
    restrict: 'EA',
    template: '<nav class="sidebar" ng-transclude></nav>',
    transclude: true,
    replace: true,
    link: function(scope, element, attrs) {
      
      $scope   = scope;
      $sidebar = element;

      var eventName = Utils.isTouch() ? 'click' : 'mouseenter' ;
      var subNav = $();
      $sidebar.on( eventName, '.nav > li', function() {

        if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) {

          subNav.trigger('mouseleave');
          subNav = toggleMenuItem( $(this) );

          // Used to detect click and touch events outside the sidebar          
          sidebarAddBackdrop();

        }

      });

      scope.$on('closeSidebarMenu', function() {
        removeFloatingNav();
      });

      // Normalize state when resize to mobile
      $win.on('resize', function() {
        if( ! Utils.isMobile() )
          $body.removeClass('aside-toggled');
      });

      // Adjustment on route changes
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        currentState = toState.name;
        // Hide sidebar automatically on mobile
        $('body.aside-toggled').removeClass('aside-toggled');

        $rootScope.$broadcast('closeSidebarMenu');
      });

    }
  };

  function sidebarAddBackdrop() {
    var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
    $backdrop.insertAfter('.aside-inner').on("click mouseenter", function () {
      removeFloatingNav();
    });
  }

  // Open the collapse sidebar submenu items when on touch devices 
  // - desktop only opens on hover
  function toggleTouchItem($element){
    $element
      .siblings('li')
      .removeClass('open')
      .end()
      .toggleClass('open');
  }

  // Handles hover to open items under collapsed menu
  // ----------------------------------- 
  function toggleMenuItem($listItem) {

    removeFloatingNav();

    var ul = $listItem.children('ul');
    
    if( !ul.length ) return $();
    if( $listItem.hasClass('open') ) {
      toggleTouchItem($listItem);
      return $();
    }

    var $aside = $('.aside');
    var $asideInner = $('.aside-inner'); // for top offset calculation
    // float aside uses extra padding on aside
    var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);
    var subNav = ul.clone().appendTo( $aside );
    
    toggleTouchItem($listItem);

    var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
    var vwHeight = $win.height();

    subNav
      .addClass('nav-floating')
      .css({
        position: $scope.app.layout.isFixed ? 'fixed' : 'absolute',
        top:      itemTop,
        bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
      });

    subNav.on('mouseleave', function() {
      toggleTouchItem($listItem);
      subNav.remove();
    });

    return subNav;
  }

  function removeFloatingNav() {
    $('.dropdown-backdrop').remove();
    $('.sidebar-subnav.nav-floating').remove();
    $('.sidebar li.open').removeClass('open');
  }

}]);
/**=========================================================
 * Module: toggle-state.js
 * Toggle a classname from the BODY Useful to change a state that 
 * affects globally the entire layout or more than one item 
 * Targeted elements must have [toggle-state="CLASS-NAME-TO-TOGGLE"]
 * User no-persist to avoid saving the sate in browser storage
 =========================================================*/

App.directive('toggleState', ['toggleStateService', function(toggle) {
  'use strict';
  
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var $body = $('body');

      $(element)
        .on('click', function (e) {
          e.preventDefault();
          var classname = attrs.toggleState;
          
          if(classname) {
            if( $body.hasClass(classname) ) {
              $body.removeClass(classname);
              if( ! attrs.noPersist)
                toggle.removeState(classname);
            }
            else {
              $body.addClass(classname);
              if( ! attrs.noPersist)
                toggle.addState(classname);
            }
            
          }

      });
    }
  };
  
}]);
/**=========================================================
 * Footer Directive
 =========================================================*/

 App.directive('footercontent', function ($compile,$state) {
    var emergencyBroadcastTemplate = '<center><button type="button" class="btn btn-square btn-danger myButton">Emergency Broadcast</button></center>';
	var ongoingTreatmentTemplate ='<div class="row pl0 ml0 pr0 mr0" style="width:100%;background-color:#fff;padding-top:5px;padding-bottom:15px;" >\
   <div class="col-sm-4 col-xs-4" >\
      <em class="h1  fa fa-sliders pl" style="font-weight:bold;font-size:30px;"></em><br/>Timeline\
   </div>\
   <div class="col-sm-4 col-xs-4 myFloatRight" style="text-align:center;">\
      <em class="h1  fa fa-list pl" style="font-weight:bold;font-size:30px;"></em><br/>Detailed View\
   </div>\
   <div class="col-sm-4 col-xs-4 myFloatRight" style="text-align:right;">\
      <em class="h1 fa fa-comment pl" style="font-weight:bold;font-size:30px;"></em><br/>Chat\
   </div>\
</div> ';
    //var videoTemplate = '<div class="entry-video"><h2>&nbsp;</h2><div class="entry-vid"><iframe ng-src="{{content.data}}" width="280" height="200" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.description}}</div></div></div>';
   // var noteTemplate = '<div class="entry-note"><h2>&nbsp;</h2><div class="entry-text"><div class="entry-title">{{content.title}}</div><div class="entry-copy">{{content.data}}</div></div></div>';

    var getTemplate = function() {
        var template = '';
 alert($state.current.name);
        switch($state.current.name) {
            case 'app.healthRecord':
                template = emergencyBroadcastTemplate;
                break;
			case 'app.ongoingTreatment':
                template = ongoingTreatmentTempeate;
                break;
			case 'app.detailedView':
                template = emergencyBroadcastTemplate;
                break;
			case 'app.myCareTeam':
                template = emergencyBroadcastTemplate;
                break;
			case 'app.shareHealthRecord':
                template =emergencyBroadcastTemplate;
                break;
           /* case 'video':
                template = videoTemplate;
                break;
            case 'notes':
                template = noteTemplate;
                break;*/
        }
 //template = healthRecordTempelate;
        return template;
    }

    var linker = function(scope, element, attrs) {
        //scope.rootDirectory = 'images/';
//alert(element);


        element.html(getTemplate()).show();

        $compile(element.contents())(scope);
    }
	
    return {
        restrict: "E",
        link: linker
    };


});


/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

App.service('browser', function(){
  "use strict";

  var matched, browser;

  var uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(opr)[\/]([\w.]+)/.exec( ua ) ||
      /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
      /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
      /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
      /(msie) ([\w.]+)/.exec( ua ) ||
      ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
      [];

    var platform_match = /(ipad)/.exec( ua ) ||
      /(iphone)/.exec( ua ) ||
      /(android)/.exec( ua ) ||
      /(windows phone)/.exec( ua ) ||
      /(win)/.exec( ua ) ||
      /(mac)/.exec( ua ) ||
      /(linux)/.exec( ua ) ||
      /(cros)/i.exec( ua ) ||
      [];

    return {
      browser: match[ 3 ] || match[ 1 ] || "",
      version: match[ 2 ] || "0",
      platform: platform_match[ 0 ] || ""
    };
  };

  matched = uaMatch( window.navigator.userAgent );
  browser = {};

  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.version);
  }

  if ( matched.platform ) {
    browser[ matched.platform ] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if ( browser.android || browser.ipad || browser.iphone || browser[ "windows phone" ] ) {
    browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if ( browser.cros || browser.mac || browser.linux || browser.win ) {
    browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if ( browser.chrome || browser.opr || browser.safari ) {
    browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if ( browser.rv )
  {
    var ie = "msie";

    matched.browser = ie;
    browser[ie] = true;
  }

  // Opera 15+ are identified as opr
  if ( browser.opr )
  {
    var opera = "opera";

    matched.browser = opera;
    browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if ( browser.safari && browser.android )
  {
    var android = "android";

    matched.browser = android;
    browser[android] = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;


  return browser;

});
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/
 
App.factory('colors', ['APP_COLORS', function(colors) {
  
  return {
    byName: function(name) {
      return (colors[name] || '#fff');
    }
  };

}]);

/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/
 
App.service('navSearch', function() {
  var navbarFormSelector = 'form.navbar-form';
  return {
    toggle: function() {
      
      var navbarForm = $(navbarFormSelector);

      navbarForm.toggleClass('open');
      
      var isOpen = navbarForm.hasClass('open');
      
      navbarForm.find('input')[isOpen ? 'focus' : 'blur']();

    },

    dismiss: function() {
      $(navbarFormSelector)
        .removeClass('open')      // Close control
        .find('input[type="text"]').blur() // remove focus
        .val('')                    // Empty input
        ;
    }
  };

});
/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

App.provider('RouteHelpers', ['APP_REQUIRES', function (appRequires) {
  "use strict";

  // Set here the base of the relative path
  // for all app views
  this.basepath = function (uri) {
    return 'app/views/' + uri;
  };

  // Generates a resolve object by passing script names
  // previously configured in constant.APP_REQUIRES
  this.resolveFor = function () {
    var _args = arguments;
    return {
      deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
        // Creates a promise chain for each argument
        var promise = $q.when(1); // empty promise
        for(var i=0, len=_args.length; i < len; i ++){
          promise = andThen(_args[i]);
        }
        return promise;

        // creates promise to chain dynamically
        function andThen(_arg) {
          // also support a function that returns a promise
          if(typeof _arg == 'function')
              return promise.then(_arg);
          else
              return promise.then(function() {
                // if is a module, pass the name. If not, pass the array
                var whatToLoad = getRequired(_arg);
                // simple error check
                if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                // finally, return a promise
                return $ocLL.load( whatToLoad );
              });
        }
        // check and returns required data
        // analyze module items with the form [name: '', files: []]
        // and also simple array of script files (for not angular js)
        function getRequired(name) {
          if (appRequires.modules)
              for(var m in appRequires.modules)
                  if(appRequires.modules[m].name && appRequires.modules[m].name === name)
                      return appRequires.modules[m];
          return appRequires.scripts && appRequires.scripts[name];
        }

      }]};
  }; // resolveFor

  // not necessary, only used in config block for routes
  this.$get = function(){};

}]);


/**=========================================================
 * Module: toggle-state.js
 * Services to share toggle state functionality
 =========================================================*/

App.service('toggleStateService', ['$rootScope', function($rootScope) {

  var storageKeyName  = 'toggleState';

  // Helper object to check for words in a phrase //
  var WordChecker = {
    hasWord: function (phrase, word) {
      return new RegExp('(^|\\s)' + word + '(\\s|$)').test(phrase);
    },
    addWord: function (phrase, word) {
      if (!this.hasWord(phrase, word)) {
        return (phrase + (phrase ? ' ' : '') + word);
      }
    },
    removeWord: function (phrase, word) {
      if (this.hasWord(phrase, word)) {
        return phrase.replace(new RegExp('(^|\\s)*' + word + '(\\s|$)*', 'g'), '');
      }
    }
  };

  // Return service public methods
  return {
    // Add a state to the browser storage to be restored later
    addState: function(classname){
      var data = angular.fromJson($rootScope.$storage[storageKeyName]);
      
      if(!data)  {
        data = classname;
      }
      else {
        data = WordChecker.addWord(data, classname);
      }

      $rootScope.$storage[storageKeyName] = angular.toJson(data);
    },

    // Remove a state from the browser storage
    removeState: function(classname){
      var data = $rootScope.$storage[storageKeyName];
      // nothing to remove
      if(!data) return;

      data = WordChecker.removeWord(data, classname);

      $rootScope.$storage[storageKeyName] = angular.toJson(data);
    },
    
    // Load the state string and restore the classlist
    restoreState: function($elem) {
      var data = angular.fromJson($rootScope.$storage[storageKeyName]);
      
      // nothing to restore
      if(!data) return;
      $elem.addClass(data);
    }

  };

}]);
/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

App.service('Utils', ["$window", "APP_MEDIAQUERY", function($window, APP_MEDIAQUERY) {
    'use strict';
    
    var $html = angular.element("html"),
        $win  = angular.element($window),
        $body = angular.element('body');

    return {
      // DETECTION
      support: {
        transition: (function() {
                var transitionEnd = (function() {

                    var element = document.body || document.documentElement,
                        transEndEventNames = {
                            WebkitTransition: 'webkitTransitionEnd',
                            MozTransition: 'transitionend',
                            OTransition: 'oTransitionEnd otransitionend',
                            transition: 'transitionend'
                        }, name;

                    for (name in transEndEventNames) {
                        if (element.style[name] !== undefined) return transEndEventNames[name];
                    }
                }());

                return transitionEnd && { end: transitionEnd };
            })(),
        animation: (function() {

            var animationEnd = (function() {

                var element = document.body || document.documentElement,
                    animEndEventNames = {
                        WebkitAnimation: 'webkitAnimationEnd',
                        MozAnimation: 'animationend',
                        OAnimation: 'oAnimationEnd oanimationend',
                        animation: 'animationend'
                    }, name;

                for (name in animEndEventNames) {
                    if (element.style[name] !== undefined) return animEndEventNames[name];
                }
            }());

            return animationEnd && { end: animationEnd };
        })(),
        requestAnimationFrame: window.requestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.msRequestAnimationFrame ||
                               window.oRequestAnimationFrame ||
                               function(callback){ window.setTimeout(callback, 1000/60); },
        touch: (
            ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
            (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
            (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
            false
        ),
        mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
      },
      // UTILITIES
      isInView: function(element, options) {

          var $element = $(element);

          if (!$element.is(':visible')) {
              return false;
          }

          var window_left = $win.scrollLeft(),
              window_top  = $win.scrollTop(),
              offset      = $element.offset(),
              left        = offset.left,
              top         = offset.top;

          options = $.extend({topoffset:0, leftoffset:0}, options);

          if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
              left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
            return true;
          } else {
            return false;
          }
      },
      langdirection: $html.attr("dir") == "rtl" ? "right" : "left",
      isTouch: function () {
        return $html.hasClass('touch');
      },
      isSidebarCollapsed: function () {
        return $body.hasClass('aside-collapsed');
      },
      isSidebarToggled: function () {
        return $body.hasClass('aside-toggled');
      },
      isMobile: function () {
        return $win.width() < APP_MEDIAQUERY.tablet;
      }
    };
}]);
// To run this code, edit file 
// index.html or index.jade and change
// html data-ng-app attribute from
// angle to myAppName
// ----------------------------------- 

var myApp = angular.module('myAppName', ['angle']);

myApp.run(["$log", function($log) {

  $log.log('I\'m a line from custom.js');

}]);

myApp.config(["RouteHelpersProvider", function(RouteHelpersProvider) {

  // Custom Route definition
  
}]);

myApp.controller('oneOfMyOwnController', ["$scope", function($scope) {
  /* controller code */
}]);

myApp.directive('oneOfMyOwnDirectives', function() {
  /*directive code*/
});

myApp.config(["$stateProvider", function($stateProvider /* ... */) {
  /* specific routes here (see file config.js) */
}]);


App.controller('PanelsCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

  // PANEL COLLAPSE EVENTS
  // ----------------------------------- 

  // We can use panel id name for the boolean flag to [un]collapse the panel
  $scope.$watch('panelDemo1',function(newVal){
      
      console.log('panelDemo1 collapsed: ' + newVal);

  });


  // PANEL DISMISS EVENTS
  // ----------------------------------- 

  // Before remove panel
  $scope.$on('panel-remove', function(event, id, deferred){
    
    console.log('Panel #' + id + ' removing');
    
    // Here is obligatory to call the resolve() if we pretend to remove the panel finally
    // Not calling resolve() will NOT remove the panel
    // It's up to your app to decide if panel should be removed or not
    deferred.resolve();
  
  });

  // Panel removed ( only if above was resolved() )
  $scope.$on('panel-removed', function(event, id){

    console.log('Panel #' + id + ' removed');

  });


  // PANEL REFRESH EVENTS
  // ----------------------------------- 

  $scope.$on('panel-refresh', function(event, id) {
    var secs = 3;
    
    console.log('Refreshing during ' + secs +'s #'+id);

    $timeout(function(){
      // directive listen for to remove the spinner 
      // after we end up to perform own operations
      $scope.$broadcast('removeSpinner', id);
      
      console.log('Refreshed #' + id);

    }, 3000);

  });

  // PANELS VIA NG-REPEAT
  // ----------------------------------- 

  $scope.panels = [
    {
      id: 'panelRepeat1',
      title: 'Panel Title 1',
      body: 'Nulla eget lorem leo, sit amet elementum lorem. '
    },
    {
      id: 'panelRepeat2',
      title: 'Panel Title 2',
      body: 'Nulla eget lorem leo, sit amet elementum lorem. '
    },
    {
      id: 'panelRepeat3',
      title: 'Panel Title 3',
      body: 'Nulla eget lorem leo, sit amet elementum lorem. '
    }
  ];

}]);






