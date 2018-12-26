/* global Module */

/* Magic Mirror
 * Module: MM Hide All
 *
 * By EoF https://forum.magicmirror.builders/user/eof
 * MIT Licensed.
 */

Module.register("my-love",{
	
	start: function () {
        //var beginwait = 120000;
        var beginwait = 2000;
        var introwait = beginwait + 15000;
        var clockwait = introwait + 13000;


        var myweatherwait = clockwait + 16000;
        var myweather1wait = myweatherwait + 11000;
        var mytempwait = myweather1wait + 3500;
        var myworldwait = mytempwait + 3500;
        var myzhihuwait = myworldwait + 19000;
        //var mynewswait = 10000;
        var myhappywait =myzhihuwait + 31000;
        var myallwait = myhappywait + 60000;

        this.showTime("cj my-love begin ");
        this.sleep(beginwait).then(() => {
            this.my1hello();
        })
        this.sleep(introwait).then(() => {
            this.my2intro();
        })
        this.sleep(clockwait).then(() => {
            //this.showTime("cj 3clock begin ");
            this.my3clock();
        })
        this.sleep(myweatherwait).then(() => {
            this.myweather();
        })
        this.sleep(myweather1wait).then(() => {
            this.myweather1();
        })
        this.sleep(mytempwait).then(() => {
            this.mytemp();
        })
        /*
        this.sleep(myfun).then(() => {
            this.myfun();
        })
        */
        this.sleep(myworldwait).then(() => {
            this.myworld();
        })
        this.sleep(myzhihuwait).then(() => {
            this.myzhihu();
        })
        /*
        this.sleep(mynewswait).then(() => {
            this.mynews();
        })
        */

        this.sleep(myhappywait).then(() => {
            this.myhappy();
        })
        this.sleep(myallwait).then(() => {
            this.myall();
        })
        },

    myhappy: function () {
        this._showTargetModules("my-happy-show");
        this.sendNotification('SHOW_MY_HAPPY', true);
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
