giftService.service('mainService', ['$http', function($http){
	this.getMainbannerData = function(successCallback, failCallback){
		$http.get("/gift/mock/main/main_banner.json")
		.success(function(data){
//			console.log(data.data.banners);
			var bannerData = [];
			for(var i = 0; i < data.data.banners.length; i++){
				var item = data.data.banners[i];
				var obj = {};
				obj.imageUrl = item.image_url;
				obj.id = item.id;
				bannerData.push(obj);
			}
			successCallback(bannerData);
		})
		.error(function(error){
			failCallback(error);
		});
		
	}
	
	 this.getMainSecondaryBanner = function(successCallback, failCallback){
		$http.get('/gift/mock/main/secondary_banner.json')
		.success(function(data){
//			console.log(data.data.secondary_banners);
			var sBanner = [];
			for(var i = 0; i < data.data.secondary_banners.length; i++){
				var item = data.data.secondary_banners[i];
				var obj = {};
				obj.imageUrl = item.image_url;
				obj.id = item.id;
				sBanner.push(obj);
			}
			successCallback(sBanner);
			
		})
		.error(function(error){
			
		});

	}
	 
	 this.getMainList = function(page, count, successCallback, failCallback){
	 	console.log('page'+page);
	 	console.log('count'+count);
	 	$http.get('/gift/mock/main/main_list'+(page-1)+'.json')
	 	.success(function(data){
//	 		console.log(data.data.items)
	 		var listData = [];
	 		for(var i = 0; i < data.data.items.length; i++){
	 			var item = data.data.items[i];
	 			var obj = {};
	 			obj.coverImg = item.cover_image_url;
	 			obj.title = item.title;
	 			obj.likes = item.likes_count;
	 			listData.push(obj);
	 		}
	 		successCallback(listData);
	 		
	 	})
	 	.error(function(error){
	 		failCallback(error);
	 	})
	 }
	
	
}])