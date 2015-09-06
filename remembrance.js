var Game = function(canvas, mainColor, colors, duration, interval) {
	var Game = {
		canvas: canvas,
		mainColor: mainColor,
		colors: colors,
		duration: duration,
		interval: interval,
		key: {
			space: {pressed: false, color: undefined},
			up: {pressed: false, color: undefined},
			right: {pressed: false, color: undefined},
			down: {pressed: false, color: undefined},
			left: {pressed: false, color: undefined}
		},
		score: 0,
		_initialize: function() {
			var ctx = this.canvas.getContext("2d");
			setInterval(this._draw.bind(this, ctx), this.interval);

			// shuffle colors
			var currentIndex = this.colors.length, tempValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				tempValue = this.colors[currentIndex];
				this.colors[currentIndex] = this.colors[randomIndex];
				this.colors[randomIndex] = tempValue;
			}

			// assign colors to keys
			this.key.space.color = null;
			this.key.up.color = this.colors[0];
			this.key.right.color = this.colors[1];
			this.key.down.color = this.colors[2];
			this.key.left.color = this.colors[3];

			document.addEventListener("keydown", this._keyDownHandler.bind(this), false);
			document.addEventListener("keyup", this._keyUpHandler.bind(this), false);

			return true;
		},
		_draw: function(ctx) {
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.key.left.pressed === true) this.canvas.style.background = this.colors[Math.floor(Math.random()*this.colors.length)];
			else this.canvas.style.background = this.mainColor;
		},
		_keyDownHandler: function(e) {
			if(e.keyCode === 32) {
				this.key.space.pressed = true;
			}
			else if(e.keyCode === 38) {
				this.key.up.pressed = true;
			}
			else if(e.keyCode === 39) {
				this.key.right.pressed = true;
			}
			else if(e.keyCode === 40) {
				this.key.down.pressed = true;
			}
			else if(e.keyCode === 37) {
				this.key.left.pressed = true;
			}
		},
		_keyUpHandler: function(e) {
			if(e.keyCode === 32) {
				this.key.space.pressed = false;
			}
			else if(e.keyCode === 38) {
				this.key.up.pressed = false;
			}
			else if(e.keyCode === 39) {
				this.key.right.pressed = false;
			}
			else if(e.keyCode === 40) {
				this.key.down.pressed = false;
			}
			else if(e.keyCode === 37) {
				this.key.left.pressed = false;
			}
		},
		checkResponse: function(choice) {

		},
		terminate: function() {

		}
	};
	Game._initialize();
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
