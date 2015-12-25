var Game = function(canvas, mainColor, colors, keys, duration, interval) {
	var Game = {
		canvas: canvas,
		mainColor: mainColor,
		colors: colors,
		keys: keys,
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
		sessionActive: false,
		_initialize: function() {
			if (this.colors.length !== 4) {
				console.log("Game object only takes a color array of length 4.");
				return false;
			}

			var ctx = this.canvas.getContext("2d");
			setInterval(this._draw.bind(this, ctx), this.interval);

			// shuffle colors
			var currentIndex = this.colors.length, tempValue, randomIndex;
			while(0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				tempValue = this.colors[currentIndex];
				this.colors[currentIndex] = this.colors[randomIndex];
				this.colors[randomIndex] = tempValue;
			}

			// assign colors to keys
			this.key.space.color = null;
			this.key.up.color = this.colors[0];
			document.getElementById("up").style.background = this.colors[0];
			this.key.right.color = this.colors[1];
			document.getElementById("right").style.background = this.colors[1];
			this.key.down.color = this.colors[2];
			document.getElementById("down").style.background = this.colors[2];
			this.key.left.color = this.colors[3];
			document.getElementById("left").style.background = this.colors[3];

			document.addEventListener("keydown", this._keyDownHandler.bind(this), false);
			document.addEventListener("keyup", this._keyUpHandler.bind(this), false);

			return true;
		},
		_draw: function(ctx) {
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this._drawBackground();
			this._drawTimer();
		},
		_drawBackground: function() {
			this.canvas.style.background = this.mainColor;
		},
		_drawTimer: function() {
			if (this.sessionActive === true) {
				this.duration -= this.interval/1000;
				document.getElementById("time").innerHTML = Math.ceil(this.duration);
				if (Math.ceil(this.duration) === 0) {
					this.sessionActive = false;
				}
			}
		},
		_keyDownHandler: function(e) {
			var choice;
			if(this.sessionActive === false) {
				if(e.keyCode === 32) {
					this.key.space.pressed = true;
					choice = this.key.space.color;
					this._startSession();
				}
			}
			else if(this.sessionActive === true) {
				if(e.keyCode === this.keys[0]) {
					this.key.up.pressed = true;
					choice = this.key.up.color;
				}
				else if(e.keyCode === this.keys[1]) {
					this.key.right.pressed = true;
					choice = this.key.right.color;
				}
				else if(e.keyCode === this.keys[2]) {
					this.key.down.pressed = true;
					choice = this.key.down.color;
				}
				else if(e.keyCode === this.keys[3]) {
					this.key.left.pressed = true;
					choice = this.key.left.color;
				}
				if(e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
					this._checkResponse(choice);
				}
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
		_startSession: function() {
			document.getElementById("legend").style.display = "none";
			this.mainColor = this.colors[Math.floor(Math.random()*this.colors.length)];
			this.sessionActive = true;
		},
		_checkResponse: function(choice) {
			console.log(this.mainColor);
			if (choice === this.mainColor) {
				this.score ++;

				var newColor = this.colors[Math.floor(Math.random()*this.colors.length)];
				while (newColor === this.mainColor) {
					newColor = this.colors[Math.floor(Math.random()*this.colors.length)];
				}
				this.mainColor = newColor;
			}
			else {
				this.score --;
			}
			document.getElementById("score").innerHTML = this.score;
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
