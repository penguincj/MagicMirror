Module.register("MMM-CountDown",{
	// Default module config.
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

	// Set translations
	getTranslations: function() {
		return {
				en: "translations/en.json",
				nl: "translations/nl.json",
				sv: "translations/sv.json"
		}
	},

	// set update interval
	start: function() {
		var self = this;
        this.hideFlag = false;

		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 
	},
         
    _hideTargetModules(name) {
        const targetModules = this._getTargetModules(name);
        for (let i = 0; i < targetModules.length; i++) {
            const targetModule = targetModules[i];
            Log.info('hide clock 11111111');
            targetModule.hide(0);
        }
    },
 
    _showTargetModules(name) {
        const targetModules = this._getTargetModules(name);
        for (let i = 0; i < targetModules.length; i++) {
            const targetModule = targetModules[i];
            targetModule.show(1000);
        }
    },   

	// Update function
	getDom: function() {
        /*
       if (this.hideFlag) {
           this.hide(0);
           var wrapper1 = document.createElement("div");
           return wrapper1;
       }
       */
		var wrapper = document.createElement("div");

		var timeWrapper = document.createElement("div");
		var textWrapper = document.createElement("div");

		textWrapper.className = "week dimmed medium";
		timeWrapper.className = "time bright xlarge light";
		textWrapper.innerHTML=this.config.event + "<br>";

		var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
		
		// Build the output
		var hrs = '';
		var mins = '';
		var secs = '';
		var days = '';
		//var days = diffDays + this.config.daysLabel;

		if(this.config.showDays == true) days = diffDays + this.config.daysLabel;
		if(this.config.showHours == true) hrs = diffHours + this.config.hoursLabel;
		if(this.config.showMinutes == true) mins = diffMinutes + this.config.minutesLabel;
		if(this.config.showSeconds == true) secs = diffSeconds + this.config.secondsLabel;

		timeWrapper.innerHTML = days + hrs + mins + secs;

       if (this.hideFlag || diffHours == 0 && diffMinutes == 0 && diffSeconds == 0) {
	       textWrapper.innerHTML="2019";
           timeWrapper.innerHTML = "新年快乐";
           this.hideFlag = true;
       }

		wrapper.appendChild(textWrapper);
		wrapper.appendChild(timeWrapper);

        /*
           if (diffHours == 0 && diffMinutes == 0) {
                Log.info('00000000000000');
            if (diffSeconds <= 50 && diffSeconds > 20) {
                Log.info('hide clock');
                this._hideTargetModules("clock");
            } else if (diffSeconds <= 20) {
                Log.info('show clock');
                this._showTargetModules("clock");
            }
        }
        */
        
		 

        Log.info('count !!!!!!');
		return wrapper;
	}
});
