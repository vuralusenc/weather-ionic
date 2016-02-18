
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
 // With the new view caching in Ionic, Controllers are only called
 // when they are recreated or on app start, instead of every page change.
 // To listen for when this page is active (for example, to refresh data),
 // listen for the $ionicView.enter event:
 //
 //$scope.$on('$ionicView.enter', function(e) {
 //});

 $scope.chats = ["Adana","Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"].sort();
})

.controller('kgmBotu',['$scope','$http',function($scope,$http){
 $http.get('http://localhost:1313/kgm').success(function(response){
   $scope.habers = response._;
 });
}])

.controller('ChatDetailCtrl', function($scope,$http,$stateParams, Chats) {
 $http.post('http://localhost:1313/havadurumu',{ il : $stateParams.chatId })
 .success(function(data){
   $scope.havadurumu = data._;
   $scope.numbers = 5;
 });
})

.controller('AccountCtrl', function($scope,$http) {

 $scope.form = {};

 $scope.ekle = function(){
		console.log($scope.mail);
	//	$http.post('/ekleme', $scope.mesaj).success(function(response){
		//	console.log(response);
		//});
	}
});
