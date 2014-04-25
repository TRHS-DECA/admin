function itemCtrl($scope, $http) {
	$scope.notHome = true;
	$scope.pageTitle = "The Ridge - Items";
	$http.get('http://theridge.herokuapp.com/api/items').success(function(data) {
		$scope.items = data;
	});
}

function newItemCtrl($scope, $http) {
	$scope.notHome = true;
	$scope.pageTitle = "The Ridge - New Item";
	$scope.itemSubmit = function() {
		$scope.loading = true;
		$http.post('http://theridge.herokuapp.com/api/items/new', {name: $scope.name, price: $scope.price}).success(function(data) {
			$scope.loading = false;
			window.location.hash = '#/items';
		});
	};
}
