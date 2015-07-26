console.log('\'Allo \'Allo!');
$(function() {
  'use strict';

  var matches = location.href.match(/pin=([\w\d]+)/);

  var pin = matches && matches.length ? matches[1] : 'asdf';

  //var pin = '222';

  var env = bowser.ios ? 'ios' : bowser.android ? 'android' : undefined;
  var appleStore = 'https://itunes.apple.com/us/app/maybeso/id705613904?mt=8';
  //var androidMarket = 'https://play.google.com/store/apps/details?id=com.homesliceapp&hl=en';

  if (pin) {
    $('#rp').text(pin);
  }

  $('#rp').on('copy', function() {
    ga('send', {
      'hitType': 'event',          // Required.
      'eventCategory': 'pin',   // Required.
      'eventAction': 'copy',      // Required.
      'eventLabel': 'ios-download',
      'eventValue': 0
    });

    setTimeout(function() {
      document.location.href = appleStore;
    },100);
  });

  $('#dl').click(function() {
    console.log('dl');
    if (env === 'ios') {
      console.log('stuff');
      $('.btn').hide();
      $('.piny').show();
    } else if (env === 'android') {
      var m = 'market://details?id=com.maybeso&referrer=pin%3D' + pin;

      setTimeout(function() {
        document.location.href = m;
      }, 100);

    }
  });

  $('#open').click(function() {
    var baseurl = 'maybeso' + '://invite' + '?pin=' + pin;
    if (env === 'ios') {
      setTimeout(function () {
        console.log('ios-appinstalled');
        //console.log(baseurl + iid);
        console.log(baseurl);
        document.location.href = baseurl;
      }, 100);
    } else if (env === 'android') {
      setTimeout(function () {
        console.log(baseurl);
        document.location.href = baseurl;
      }, 100);
    }
  });

});
