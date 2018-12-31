/* global Module */

/* MMM-ImageSlideshow.js
 * 
 * Magic Mirror
 * Module: MMM-ImageSlideshow
 * 
 * Magic Mirror By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 * 
 * Module MMM-ImageSlideshow By Adam Moses http://adammoses.com
 * MIT Licensed.
 */
 
//var compliments = require("../default/compliments/compliments.js");
//const compliments = require("../default/compliments/compliments.js");
//const translations = require("../../translations/translations.js");

Module.register("my-season", {
	// Default module config.
	defaults: {
        // an array of strings, each is a path to a directory with images
        imagePaths: [ 'modules/my-season/exampleImages' ],
        // the speed at which to switch between images, in milliseconds
		slideshowSpeed: 2 * 1000,
        // if zero do nothing, otherwise set width to a pixel value
        fixedImageWidth: 750,
        // if zero do nothing, otherwise set height to a pixel value        
        fixedImageHeight: 450,
        // if true randomize image order, otherwise do alphabetical
        randomizeImageOrder: false,
        // if true combine all images in all the paths
        // if false each path with be viewed seperately in the order listed
        treatAllPathsAsOne: false,
        // if true, all images will be made grayscale, otherwise as they are
        makeImagesGrayscale: false,
        // list of valid file extensions, seperated by commas
        validImageFileExtensions: 'bmp,jpg,gif,png',
		// a delay timer after all images have been shown, to wait to restart (in ms)
		delayUntilRestart: 0,
        hideFlang: true,
	},
    // load function
	start: function () {
        // add identifier to the config
        this.config.identifier = this.identifier;
        // ensure file extensions are lower case
        this.config.validImageFileExtensions = this.config.validImageFileExtensions.toLowerCase();
        // set no error
		this.errorMessage = null;
        if (this.config.imagePaths.length == 0) {
            this.errorMessage = "MMM-ImageSlideshow: Missing required parameter."
        }
        else {
            // create an empty image list
            this.imageList = [];
            // set beginning image index to -1, as it will auto increment on start
            this.imageIndex = -1;
            // ask helper function to get the image list
            this.sendSocketNotification('IMAGESLIDESHOW_REGISTER_CONFIG', this.config);
			// do one update time to clear the html
			this.updateDom();
			// set a blank timer
			this.interval = null;
        }

        //compliments.hide(0, {lockString: "module_b_identifier"});

	},
	// Define required scripts.
	getStyles: function() {
        // the css contains the make grayscale code
		return ["imageslideshow.css"];
	},    
	// the socket handler
	socketNotificationReceived: function(notification, payload) {
		// if an update was received
		if (notification === "IMAGESLIDESHOW_FILELIST") {
			// check this is for this module based on the woeid
			if (payload.identifier === this.identifier)
			{
				// set the image list
				this.imageList = payload.imageList;
                // if image list actually contains images
                // set loaded flag to true and update dom
                if (this.imageList.length > 0) {
                    this.loaded = true;
                    this.updateDom();
					// set the timer schedule to the slideshow speed			
					var self = this;
					this.interval = setInterval(function() {
						self.updateDom();
						}, this.config.slideshowSpeed);					
                }
			}
		}
    },    
    notificationReceived: function(notification, payload, sender) {
		if (notification == "SHOW_MY_SEASON") {
            if (payload == true ) {
                Log.info('my_weatherforcast received show true');
                this.config.hideFlang = false;
                this.updateDom(this.config.animationSpeed);
            }
        }
	}, 
	// Override dom generator.
	getDom: function () {
        if (this.config.hideFlang) {
            this.hide();
            var wrapper1 = document.createElement("div");
            return wrapper1;
		}

		var wrapper = document.createElement("div");
        // if an error, say so (currently no errors can occur)
        if (this.errorMessage != null) {
            wrapper.innerHTML = this.errorMessage;
        }
        // if no errors
        else {
            // if the image list has been loaded
            if (this.loaded === true) {
				// if was delayed until restart, reset index reset timer
				if (this.imageIndex == -2) {
					this.imageIndex = -1;
					clearInterval(this.interval);
					var self = this;
					this.interval = setInterval(function() {
						self.updateDom(0);
						}, this.config.slideshowSpeed);						
				}				
                // iterate the image list index
                this.imageIndex += 1;
				// set flag to show stuff
				var showSomething = true;
                // if exceeded the size of the list, go back to zero
                if (this.imageIndex == this.imageList.length) {
					// if delay after last image, set to wait
					if (this.config.delayUntilRestart > 0) {
						this.imageIndex = -2;
						wrapper.innerHTML = "&nbsp;";
						showSomething = false;
						clearInterval(this.interval);
						var self = this;
						this.interval = setInterval(function() {
							self.updateDom(0);
							}, this.config.delayUntilRestart);									
					}
					// if not reset index
					else
						this.imageIndex = 0;
				}
				if (showSomething) {
					// create the image dom bit
					var image = document.createElement("img");
					// if set to make grayscale, flag the class set in the .css file
					if (this.config.makeImagesGrayscale)
						image.className = "desaturate";
					// create an empty string
					var styleString = '';
					// if width or height or non-zero, add them to the style string
					if (this.config.fixedImageWidth != 0)
						styleString += 'width:' + this.config.fixedImageWidth + 'px;';
					if (this.config.fixedImageHeight != 0)
						styleString += 'height:' + this.config.fixedImageHeight + 'px;';
					// if style string has antyhing, set it
					if (styleString != '')
						image.style = styleString;
					// set the image location
					image.src = this.imageList[this.imageIndex];
					// ad the image to the dom
					wrapper.appendChild(image);					
				}
            }
            else {
                // if no data loaded yet, empty html
                wrapper.innerHTML = "&nbsp;";
            }
        }
        // return the dom
		return wrapper;
	}
});
