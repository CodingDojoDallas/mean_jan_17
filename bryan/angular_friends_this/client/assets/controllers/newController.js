app.controller('newController', function(friendsFactory, $location, $routeParams, $filter) {
	var self = this;

	self.$location = $location;

	self.index = function() {
		friendsFactory.index(function(returnedData, $filter) {
			// console.log(returnedData);
			self.friends = returnedData;
		});
	};
	self.index();

	self.create = function() {
		friendsFactory.create(self.newfriend);
		$location.url('/');
		self.newfriend = {};
	};

	self.delete = function(id) {
		friendsFactory.delete(id, function() {
			index();
		});
	}

	self.filterDate = function(filter_date) {
		return $filter('date')(filter_date, 'yyyy-MM-dd');
	}

});
