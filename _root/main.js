var app = angular.module('adminApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: homeCtrl
		})
	
		.state('transactions', {
			url: '/transactions',
			templateUrl: 'partials/transactions.html',
			controller: transactionCtrl
		})
	
		.state('shifts', {
			url: '/shifts',
			templateUrl: 'partials/shifts.html',
			controller: shiftCtrl
		})

		.state('items', {
			url: '/items',
			templateUrl: 'partials/items.html',
			controller: itemCtrl
		})
	
		.state('newItem', {
			url: '/items/new',
			templateUrl: 'partials/new_item.html',
			controller: newItemCtrl
		})

		.state('stats', {
			url: '/stats',
			templateUrl: 'partials/stats.html',
			controller: statCtrl
		});
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
