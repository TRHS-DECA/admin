function transactionCtrl($scope, $http) {
	$scope.notHome = true;
	$scope.pageTitle = "The Ridge - Transactions";
	$scope.loading = true;
	$http.get('http://theridge.herokuapp.com/api/sales').success(function(data) {
		$scope.loading = false;
		$scope.sales = data;
	});
}
