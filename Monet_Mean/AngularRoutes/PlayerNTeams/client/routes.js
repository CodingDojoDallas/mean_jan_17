var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/players",{
		templateUrl:"/partials/players.html"
	})
	.when("/teams",{
		templateUrl: "/partials/teams.html"
	})
	.when("/associations",{
		templateUrl: "/partials/associations.html"
	})
})


//Factory

app.factory('playerFactory', function(){

	var players = [{name: "John"},{name:"Jim"}],
		factory = {};
		factory.getPlayer = function(callback){
			callback(players);
		}
		factory.createPlayer = function(newPlayer, callback){
			players.push(newPlayer);
			callback(players);
		}
		factory.showPlayer = function(index, callback){
			var thePlayer=players[index];
			callback(thePlayer);
		}
		factory.deletePlayer = function(player, callback){
			players.splice(players.indexOf(player),1);
			callback(players);
		}
		return factory;
	
})

app.factory('teamFactory', function(){

	var teams = [{name: "Cadets"},{name:"Rockets"}],
		factory = {};

		factory.getTeam = function(callback){
			callback(teams);
		}
		factory.createTeam = function(newTeams, callback){
			teams.push(newTeams);
			callback(teams);
		}
		factory.deleteTeam = function(team, callback){
			console.log(team)
			console.log(teams)
			console.log(teams[teams.indexOf(team)])
			teams.splice(teams.indexOf(team),1);
			console.log(teams)
			callback(teams);
		}
		return factory;



})




//Controller

app.controller('PlayersController',['$scope', 'playerFactory', function($scope, playerFactory){

	var players = [];

	currentPlayerList = function(data){
		$scope.players = data;
	}

	playerFactory.getPlayer(currentPlayerList);
	$scope.createPlayer = function(){
		playerFactory.createPlayer($scope.newPlayer, currentPlayerList);
		$scope.newPlayer={};
	}
	$scope.deletePlayer = function(player){
		playerFactory.deletePlayer(player, currentPlayerList);
	}



}])

app.controller('TeamsController',['$scope', 'teamFactory', function($scope, teamFactory){ 

	var teams = [];

	currentTeamList = function(data){
		$scope.teams = data;
	}

	teamFactory.getTeam(currentTeamList);
	$scope.createTeam = function(){
		teamFactory.createTeam($scope.newTeam, currentTeamList);
		$scope.newTeam={};
	}
	$scope.deleteTeam = function(team){
		teamFactory.deleteTeam(team, currentTeamList);
	}

}])
app.controller('AssociationsController',['$scope', 'playerFactory','teamFactory', function($scope, playerFactory, teamFactory){ 

	var associations = [];

	// currentAssociation = function(playerdata, teamdata){
	// 	$scope.teams = data;
	// }

	$scope.data ={};
	$scope.associations=[];

	$scope.createAssociation = function(team){
		console.log("in create Assoc.");
		console.log($scope.data.player);
		console.log($scope.data.team);

		$scope.associations.push({player: $scope.getPlayer($scope.data.player), team: $scope.data.team});
		$scope.data={};
		console.log($scope.associations);

		// teamFactory.createTeam($scope.newTeam, currentTeamList);
		// $scope.newTeam={};

	}
	$scope.getPlayer = function(index){
		console.log("inside getPlayer")
		console.log(index)
		playerFactory.showPlayer(index, function(data){
		var onePlayer= data;
		$scope.data.player =onePlayer.name;
		})
		return $scope.data.player

	}
	$scope.hidePlayer = function(player){
		console.log("In the hide function")
		console.log(player);
		console.log($scope.associations);
		var selectList = $scope.associations
		if (selectList.length > 0) {
			for (var i = 0; i < selectList.length; i++) {
				if (player == selectList[i].player) {
					return false;
				}
			}
		}
		return true;		
	}
	$scope.deleteAssoc = function(assocIndex){
		$scope.associations.splice(assocIndex,1);
	}

}])
