/* global Module */

/* Magic Mirror
 * Module: MM Hide All
 *
 * By EoF https://forum.magicmirror.builders/user/eof
 * MIT Licensed.
 */

Module.register("my-love1",{

    defaults: {
		event: "New Millenium:",
		date: "3000-01-01",
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		customInterval: 1000,
		daysLabel: 'd',
		hoursLabel: 'h',
		minutesLabel: 'm',
		secondsLabel: 's',		
	},
 
	start: function () {
        var self = this;
        this.hideFlag = false;

		setInterval(function() {
			self.updateTimer(); // no speed defined, so it updates instantly.
		}, this.config.customInterval);  
    },

    updateTimer: function () {
        var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

     if (diffHours == 23 || (diffHours == 0 && diffMinutes == 0 && diffSeconds == 0)) {
            this._showTargetModules("clock");
            this.sendNotification('SHOW_CLOCK', true);
            this._showTargetModules("my-currentweather");
            this.sendNotification('SHOW_MY_CURRENTWEATHER', true);
            this._showTargetModules("my-weatherforecast");
            this.sendNotification('SHOW_MY_WEATHERFORCAST', true);
            this._showTargetModules("my-season");
            this.sendNotification('SHOW_MY_SEASON', true);
            Log.info("show clock mylove1");
       }
        
    },

    myall: function () {
        this._hideTargetModules("my-happy-show");
        this._showTargetModules("my-chris-show");
        this.sendNotification('SHOW_MY_CHRIS', true);

        this.sleep(20000).then(() => {
            this._showTargetModules("clock");
            this._showTargetModules("my-currentweather");
            this._showTargetModules("my-weatherforecast");
            this._showTargetModules("MMM-LocalTemperature");
            this._showTargetModules("newsfeed");
        })
    },
    mynews: function () {
        this._showTargetModules("my-news-show");
        this._showTargetModules("MMM-News");
        this.sendNotification('SHOW_MY_NEWS', true);
        this.sleep(60000).then(() => {
           this._hideTargetModules("my-news-show");
           this._hideTargetModules("MMM-News");
        })
    },
    myzhihu: function () {
        this._showTargetModules("my-zhihu-show");
        this._showTargetModules("newsfeed");
        this.sendNotification('SHOW_MY_ZHIHU', true);
        this.sleep(30000).then(() => {
           this._hideTargetModules("my-zhihu-show");
           this._hideTargetModules("newsfeed");
        })
    },

    myworld: function () {
        this._showTargetModules("my-world-show");
        this.sendNotification('SHOW_MY_WORLD', true);
        this.sleep(6000).then(() => {
            this._hideTargetModules("my-world-show");
            this._showTargetModules("my-season");
            this.sendNotification('SHOW_MY_SEASON', true);
            this.sleep(16000).then(() => {
               this._hideTargetModules("my-season");
            })
        })
    },
    /*
    myfun: function () {
        this._showTargetModules("my-fun-show");
        this._showTargetModules("MMM-LocalTemperature");
        this.sendNotification('SHOW_MY_TEMP', true);
        this.sleep(3000).then(() => {
           this._hideTargetModules("my-temp-show");
           this._hideTargetModules("MMM-LocalTemperature");
        })
    },
    */
    mytemp: function () {
        this._showTargetModules("my-temp-show");
        this._showTargetModules("MMM-LocalTemperature");
        this.sendNotification('SHOW_MY_TEMP', true);
        this.sleep(3000).then(() => {
           this._hideTargetModules("my-temp-show");
           this._hideTargetModules("MMM-LocalTemperature");
        })
    },

    myweather: function () {
        this._showTargetModules("my-weather");
        this.sendNotification('SHOW_MY_WEATHER', true);
        this.sleep(5000).then(() => {
            this._showTargetModules("my-currentweather");
            this.sendNotification('SHOW_MY_CURRENTWEATHER', true);
            this._showTargetModules("my-weatherforecast");
            this.sendNotification('SHOW_MY_WEATHERFORCAST', true);
            
            
            this.sleep(8000).then(() => {
               this._hideTargetModules("my-weather");
               this._hideTargetModules("my-currentweather");
               this._hideTargetModules("my-weatherforecast");
            })
        })
    },

    myweather1: function () {
        this._showTargetModules("my-weather-1");
        this.sendNotification('SHOW_MY_WEATHER_1', true);
        this.sleep(3000).then(() => {
           this._hideTargetModules("my-weather-1");
        })
    },

    my1hello: function () {
        this._showTargetModules("my-1-hello");
        this.sendNotification('SHOW_1_HELLO', true);
        this.sleep(15000).then(() => {
           this._hideTargetModules("my-1-hello");
        })
    },

    my2intro: function () {
        this._showTargetModules("my-2-intro");
        this.sendNotification('SHOW_2_INTRO', true);
        this.sleep(12000).then(() => {
           this._hideTargetModules("my-2-intro");
        })
     },

    showTime: function (info) {
            var time = new Date();
            Log.info(info, time.toLocaleString());
    },

     my3clock: function () {
        this._showTargetModules("my-3-clock");
        this.sendNotification('SHOW_3_CLOCK', true);
        this.sleep(8000).then(() => {
            var time2 = new Date();
            this._showTargetModules("clock");
            this.sendNotification('SHOW_CLOCK', true);
            this.sleep(7000).then(() => {
                var time3 = new Date();
                this._hideTargetModules("my-3-clock");
                this._hideTargetModules("clock");
                })
            })
    },


        sleep: function(time) {
        //function sleep (time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        },

        _hideTargetModules(name) {
            const targetModules = this._getTargetModules(name);
            for (let i = 0; i < targetModules.length; i++) {
              const targetModule = targetModules[i];
          targetModule.hide(1000);
        }
      },

      _showTargetModules(name) {
        const targetModules = this._getTargetModules(name);
        for (let i = 0; i < targetModules.length; i++) {
          const targetModule = targetModules[i];
          targetModule.show(1000);
        }

      },

      _getTargetModules(name) {
        return MM.getModules().withClass(name);
      }
});
