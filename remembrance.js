var game = function() {
	var gameObject = {
		score: 0,
		initialize: function() {
			return true;
		}
	};
	gameObject.initialize();
	return gameObject;
};

var user = function(userName) {
	var userObject = {
		name: userName,
		highScore: 0,
		totalPlays: 0,
		initialize: function() {
			return true;
		},
		updateHighScore: function(newHighScore) {
			if (newHighScore > this.highScore) {
				this.highScore = newHighScore;
				return true;
			}
			return false;
		},
		getHighScore: function() {
			return this.highScore;
		},
		incTotalPlays: function() {
			this.totalPlays++;
			return true;
		},
		getTotalPlays: function() {
			return this.totalPlays;
		}
	};
	userObject.initialize();
	return userObject;
};