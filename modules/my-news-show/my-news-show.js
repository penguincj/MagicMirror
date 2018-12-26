/* global Log, Module, moment */

/* Magic Mirror
 * Module: Compliments
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */


Module.register("my-news-show", {

	// Module config defaults.
	defaults: {
		compliments: {
			anytime: [
                "news,  同你看世界正在发生什么",
                "toutiao,  和你一起刷知乎",
			]
		},
		updateInterval: 1000,
        hideFlag: true,
		fadeSpeed: 1000
	},


	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		var self = this;

		this.orderindex = 0;

		// Schedule update timer.
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

     orderIndex: function(compliments) {
		if (compliments.length === 1) {
			return 0;
		}

		if (compliments.length === this.orderindex) {
            return this.orderindex - 1;
        }

        var showIndex = this.orderindex;
        this.orderindex++;

		return showIndex;
	},

	complimentArray: function() {

        var compliments = new Array();

		compliments.push.apply(compliments, this.config.compliments.anytime);

		return compliments;
	},

    orderCompliment: function() {
		var compliments = this.complimentArray();
		var index = this.orderIndex(compliments);

		return compliments[index];
	},
     
	// Override dom generator.
	getDom: function() {
        if (this.config.hideFlag) {
            this.hide();
            var wrapper1 = document.createElement("div");
            return wrapper1;
		}

		var complimentText = this.orderCompliment();

		var compliment = document.createTextNode(complimentText);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		wrapper.appendChild(compliment);

		return wrapper;
	},
    notificationReceived: function(notification, payload, sender) {
		if (notification == "SHOW_MY_NEWS") {
            if (payload == true ) {
                Log.info('my weather received show true');
                this.config.hideFlag = false;
                this.updateDom();
            } else {
                Log.info('2 clock received show clock false');
                this.config.hideFlag = true;
            }
		}
	},
});
