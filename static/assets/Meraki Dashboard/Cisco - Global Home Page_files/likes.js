if (window.cdc === undefined) { cdc = {}; }

if (cdc.responsive === undefined) { cdc.responsive = {}; }

/**
 * Responsive Likes javascript that handles button registration and
 * @return {array}  {
 *         {function} registerSocialButton
 *         {function} socialButtonsHandler
 * }
 */
cdc.responsive.likes = (function () {
    var buttons = [],
        hasSocialButtonHandlerRun = false;

    /**
     * Handles script injection for facebook likes button and registeres button with utag.addSocialMetrics method
     */
    function facebookButton() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '156494687694418',
                cookie: true,
                status: true,
                xfbml: true,
                version: 'v2.3'
            });

            try {
                utag.addSocialMetrics('facebook', FB);
            } catch (e) { return; }
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) { return; }

            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    /**
     * Handles script injection for twitter tweet button and registers button with utag.addSocialMetrics method
     */
    function twitterButton() {
        window.twttr = (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};

            if (d.getElementById(id)) { return t; }

            js = d.createElement(s);
            js.id = id;
            js.src = "//platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];

            t.ready = function (f) { t._e.push(f); };

            return t;
        }(document, "script", "twitter-wjs"));

        /* Callback function used to track metrics when a tweet is sent */
        function tweetTag() {
            try {
                utag.addSocialMetrics('twitter', window.twttr);
            } catch (e) { return; }
        }

        twttr.ready(function (twttr) {
            twttr.events.bind('tweet', tweetTag);
        });
    }

    /**
     * Handles script injection for linkedin share button
     */
    function linkedinButton() {
        (function (d, s, id) {
            var js,
                lnjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) { return; }

            js = d.createElement(s);
            js.id = id;
            js.src = "//platform.linkedin.com/in.js";
            lnjs.parentNode.insertBefore(js, lnjs);
        }(document, 'script', 'linkedin-injs'));


        if (jQuery('#ie8 #likes-ln span > span:last-child').length) {
            jQuery('#ie8 #likes-ln span > span:last-child').css('vertical-align', 'top !important');
        }
    }

    /**
     * Handles script injection for google plus button that contains registration with utag.addSocialMetrics method
     */
    function googlePlusButton() {
      if (typeof(CQ) == "undefined" || typeof(CQ.WCM) == "undefined"  ) {        
        (function (d, s, id) {
          var js,
          pojs = d.getElementsByTagName(s)[0];

          if (d.getElementById(id)) { return; }

          js = d.createElement(s);
          js.id = id;
          js.src = "//apis.google.com/js/platform.js";
          pojs.parentNode.insertBefore(js, pojs);
        }(document, 'script', 'google-platformjs'));
      }
    }

    /**
     * [Public] Method that pushes registered buttons into the buttons array
     *
     * @param  {string} button - describes button to be registered
     */
    function registerSocialButton(button) {
        buttons.push(button);
    }

    /**
     * [Public] Handler that takes a delay param and uses that as the time to delay execution of script injection for the social media buttons included
     *
     * @param  {integer} delay - time in ms used in setTimeout function
     */
    function socialButtonsHandler(delay) {
        if (typeof delay === 'number' && !hasSocialButtonHandlerRun) {
            setTimeout(function () {
                var i;

                for (i = buttons.length - 1; i >= 0; i--) {
                    switch (buttons[i]) {
                    case "facebook":
                        facebookButton();
                        break;
                    case "twitter":
                        twitterButton();
                        break;
                    case "linkedin":
                        linkedinButton();
                        break;
                    case "googleplus":
                        googlePlusButton();
                        break;
                    default:
                        break;
                    }
                }

                hasSocialButtonHandlerRun = true;
            }, delay);
        }
    }

    return {
        registerSocialButton: registerSocialButton,
        socialButtonsHandler: socialButtonsHandler
    };
}());

// jQuery ready event that instantiates socialButtonsHandler with execution delay of 1000 ms
jQuery(document).ready(function () {
    cdc.responsive.likes.socialButtonsHandler(1000);
});
