/*global GB*/
/*global navigator*/
/*global window*/
/*global document*/
/*global $*/

$.ajaxSetup({context: document.body,xhrFields: { withCredentials: true }});

$(document).ready(function(){ window.__load_ads(); });

window.__load_ads = function() {
  function setIframeSrc(idx) {
    var iframes = document.getElementsByClassName('GB-iframe');
    var array = [0,1,2,3,4,5];
    array.length = iframes.length;
    var i = idx || 0;
    var iframe = iframes[i];
    var busting = Math.floor((+new Date()) + (Math.random() * 10000));
    var iframeSrc = GB.urls.smartads + '/serve/'  + GB.partner_id + '/' + GB.niche + '/'  + GB.campaign_id + '/' + iframe.width + '-x-' + iframe.height + '?v=' + busting+'&i='+i;
    i++;
    iframe.onload = function () {
      var nextIframe = iframes[i];
      if (nextIframe) {
        setIframeSrc(i);
      }
    };

    if (-1 == navigator.userAgent.indexOf('MSIE')) {
      iframe.src = iframeSrc;
    }
    else {
      iframe.location = iframeSrc;
    }
  }
  setTimeout(function(){ setIframeSrc(); }, 5);
};
