giftCtrl.controller('mainCtrl', ['$scope', 'mainService', '$ionicSlideBoxDelegate', function($scope, mainService, $ionicSlideBoxDelegate){
	
	//准备数据源
	$scope.bannerData = [];
	$scope.sBannerData = [];
	$scope.listData = [];
	
	$scope.page = 1;
	$scope.count = 20;
	
	//数据初始化
	function initData(){
		RequestBanner();
		requestMainList(0);
	}
	initData();
	
	//请求banner的数据
	function RequestBanner(){
		
		mainService.getMainbannerData(
			function success(data){
				$scope.bannerData = data;
				$ionicSlideBoxDelegate.update();
			},
			function fail(error){
				
			}
		);
		
		mainService.getMainSecondaryBanner(
			function(data){
				$scope.sBannerData = data;
	//			console.log($scope.sBannerData);
			}, 
			function fail(error){
				
			}
		);
	}
	
	
	
	//请求列表数据,type:0：初始化 ， 1： 下拉刷新， 2：上拉加载更多
	function requestMainList(type){
		mainService.getMainList(
			$scope.page,
			$scope.count,
			function success(data){
				
//				console.log(data);
				if(type==1){
					//清空数据源
					//把请求的最新数据放在数据源中
					$scope.listData = data;
					//将刷新的动画关闭
					$scope.$broadcast('scroll.refreshComplete');
				}
				else if(type==2){
					//将请求的数据拼接到数据源后面
					$scope.listData = $scope.listData.concat(data);
					
					//将加载更多的动画关闭
					$scope.$broadcast('scroll.infiniteScrollComplete');
					console.log($scope.listData);
				}
				else if(type==0){
					$scope.listData = data;
				}
				
			},
			function fail(error){
				//提示用户请求失败
				
				if(type==1){
					$scope.$broadcast('scroll.refreshComplete');
				}
				else if(type==2){
					$scope.$broadcast('scroll.infiniteScrollComplete');
					$scope.page--;
				}
				
			}
		);
	}
	
	
	$scope.onRefresh = function(){
		//请求最新数据（page=1）
		//清空数据源
		//把请求的最新数据放在数据源中
		//将刷新的动画关闭
		RequestBanner();
		
		$scope.page = 1;
		requestMainList(1);
	}
	
	$scope.loadMore = function(){
		//请求下一页数据（page++）
		//将请求的数据拼接到数据源后面
		//将加载更多的动画关闭
		$scope.page++;
		requestMainList(2);
	}

	
	
	
	
	
}])