var Game = function(canvas, duration, interval) {
	var Game = {
		canvas: canvas,
		duration: duration,
		interval: interval,
		score: 0,
		x: 0,
		y: 0,
		initialize: function() {
			var ctx = this.canvas.getContext("2d");
			setInterval(this.draw.bind(this, ctx), this.interval);
		},
		draw: function(ctx) {
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			ctx.beginPath();
			ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
			ctx.fillStyle = "#0095DD";
			ctx.fill();
			ctx.closePath();
			this.x += 1;
			this.y += 1;
		},
		getKeypress: function() {

		},
		checkResponse: function(choice) {

		},
		terminate: function() {

		}
	};
	Game.initialize();
	return Game;
};

var User = function(userName) {
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
