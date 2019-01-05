/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8083,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "zh-cn",
	//language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
        /*
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
        */
		{
			module: "clock",
			position: "top_left"
		},
        /*
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "upper_third"
		},
        */
        /*
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "beijing",
				locationID: "CN101010100",
				appid: "fa3f75cce8ce4abfa5fda54449bc7c30"
			}
		},
        */
		{
			module: "my-currentweather",
			position: "top_right",
			config: {
				location: "beijing",
				locationID: "CN101010100", 
                hideFlag: false,
				appid: "fa3f75cce8ce4abfa5fda54449bc7c30"
			}
		},
		{
			module: "my-weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
                location: "北京",
				locationID: "CN101010100", 
                hideFlang: false,
				appid: "fa3f75cce8ce4abfa5fda54449bc7c30"
			}
		},
        {
            module: "MMM-LocalTemperature",
            position: "top_left", // Only add a position if you want this module to display the data
            header: "Room Temperature",
            config: {
                sensorPin: 22, // For GPIO 22
                // See below for more Configuration Options
            }
        },
        /*
        {
          module: "my-year",
          config: {
                event: "二零一九 倒计时",
                date: "2019-01-01 15:53:00"
          }
        },
        */
        {
            module: 'MMM-Snow',
            position: 'fullscreen_above',
            config: { // See 'Configuration options' for more information.
                flakeCount: 10,
                //theme: "love"
                theme: "winter"
            }
        },
        {
          module: "MMM-News",
          position: "lower_third",
          config: {
            apiKey : "05a530ee717844859fd08d85c1f36b2d",
            type: "horizontal",
            query : [
              {
                sources: "xinhua-net",
                className: "redTitle",
              },
              {
                country: "cn",
                className: "redTitle",
              },
              {
                country: "fr",
                className: "redTitle",
              }
            ],
          }
        },
   		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "知乎",
                        url: "https://www.zhihu.com/rss",
						//url: "http://feeds.feedburner.com/zhihu-daily",
                        encoding: "UTF-8" //ISO-8859-1
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
        /*
        {
            module: 'MMM-Heart',
            position: 'bottom_right',
        },
        {
		module: 'MMM-iFrame',
		position: 'middle_center',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: ["www.baidu.com"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
				width: "180", // width of iframe
				height: "220", // height of iframe
				frameWidth: "400" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
	},
        {
      module: 'MMM-SingleStock',
      position: 'top_right',
      config: {
        stockSymbol: 'ERIC',
        updateInterval: 3600000, // 1 hour in milliseconds
        showChange: true,        // false | true
        label: 'symbol'          // 'symbol' | 'companyName' | 'none' | any string
      }
    },
    */
        /*
        {
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "2d488972eb54da820441265b7fe16796"
			}
		},
        /*
        {
            module: 'MMM-ImageSlideshow',
            position: 'middle_center',
            config: {
                imagePaths: ['modules/MMM-ImageSlideshow/exampleImages']
            }
        },
        {
            module: 'MMM-Season',
            position: 'middle_center',
            config: {
                imagePaths: ['modules/MMM-Season/exampleImages']
            }
        },
        {
            module: 'my-season',
            position: "lower_third",
            //position: 'middle_center',
            config: {
                imagePaths: ['modules/my-season/exampleImages']
            }
        },
        */
        /*
        {
            module: 'MMM-Zhihu',
            position: 'bottom_right',
            config: {
                imagePaths: ['modules/MMM-Zhihu/exampleImages']
            }
        },
        */
        /*
		{
			module: "my-1-hello",
			position: "upper_third"
		},
		{
			module: "my-2-intro",
			position: "upper_third"
		},
		{
			module: "my-3-clock",
			position: "upper_third"
		},
		{
			module: "my-weather",
			position: "upper_third",
            hideFlag: true

		},
		{
			module: "my-weather-1",
			position: "lower_third",
            hideFlag: true
		},
		{
			module: "my-world-show",
			position: "upper_third",
            hideFlag: true
		},
		{
			module: "my-zhihu-show",
			position: "upper_third"
		},
		{
			module: "my-news-show",
			position: "upper_third"
		},
		{
			module: "my-happy-show",
			position: "upper_third"
		},
		{
			module: "my-chris-show",
			position: "upper_third"
		}
        {
            module: 'MMM-CountDown',
            position: "middle_center",
            config: {
                event: "二零一九 倒计时",
                date: "2019-01-01 00:00:00",
                showDays: false,
                showHours: false,
                showMinutes: false,
                showSeconds: true,
                secondsLabel: ''		
                // See configuration options
            }
        },
        {
          module: "my-love1",
            config: {
                date: "2019-01-01 00:00:00"
            }
        }
        */
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
