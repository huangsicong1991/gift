var gift = angular.module('gift-app', ['ionic', 'gift-controller', 'gift-service']);

var giftCtrl = angular.module('gift-controller', []);
var giftService = angular.module('gift-service', []);

gift.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
	//设置tabs风格
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	//设置tabs位置
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.position('bottom');
	//设置导航title的位置
	$ionicConfigProvider.platform.ios.navBar.alignTitle("center");
	$ionicConfigProvider.platform.android.navBar.alignTitle("center");
	//设置导航的返回键
	$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-back');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-back');
	//设置过渡动画效果
	$ionicConfigProvider.platform.ios.views.transition('ios');
	$ionicConfigProvider.platform.android.views.transition('ios');
	
	$stateProvider.state('tabs', {
		url:"/tabs",
		templateUrl: 'views/tabs.html',
		abstract:true
	})
	.state('tabs.main', {
		url:'/main',
		views:{
			"main-tab":{
				templateUrl:"views/main/main.html",
				controller: "mainCtrl"
			}
		}
	})
	.state('tabs.hot', {
		url:'/hot',
		views:{
			"hot-tab":{
				templateUrl:"views/hot/hot.html"
			}
		}
	})
	.state('tabs.category', {
		url:'/category',
		views:{
			"category-tab":{
				templateUrl:"views/category/category.html"
			}
		}
	})
	.state('tabs.me', {
		url:'/me',
		views:{
			"me-tab":{
				templateUrl:"views/me/me.html"
			}
		}
	});
	
	$urlRouterProvider.otherwise('/tabs/main');
	
}])