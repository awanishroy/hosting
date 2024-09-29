
var cpu_arr = new Array('1 Core','2 Core','4 Core','6 Core','8 Core');
var ram_arr = new Array('8 GB','16 GB','32 GB','64 GB','128 GB');
var hdd_arr  = new Array('240 GB','320 GB','500 GB','1 TB','2 TB');
var bandwidth_arr = new Array('50 GB','100 GB','150 GB','200 GB','250 GB');
var ip_arr = new Array('3 IPs', '5 IPs','7 IPs','9 IPs','Unlimited')
var price_arr = 	new Array('$15.95','$25.99','$35.99','$45.99','$55.99');
var link_arr = 		new Array('$10','$25','$50','$75','$100','$125');
var b_url = 'https://akdesigner.com/whmcs-templates/cart.php?a=add&pid=';

// This is what you want the default position to be
var def_pos = 2;

$(document).ready(function(){

    $( "#slider" ).slider({
        range: 'min',
        animate: true,
        min: 1,
        max: 5,
        paddingMin: 90,
        paddingMax: 75,
        change: function( event, ui ) {
            $('.slider-container #cpu_val span.value').html(cpu_arr[ui.value-1]);
            $('.slider-container #ram_val span.value').html(ram_arr[ui.value-1]);
            $('.slider-container #hdd_val span.value').html(hdd_arr[ui.value-1]);
            $('.slider-container #bandwidth_val span.value').html(bandwidth_arr[ui.value-1]);
            $('.slider-container #ip_val span.value').html(ip_arr[ui.value-1]);
            $('.slider-container #price_val').html(price_arr[ui.value-1]);
            $('.slider-container a.buynow_button').attr('href', b_url + link_arr[ui.value-1]);
            $('.slider-container.linux-slider .price_rangetxt  div#icon-'+(ui.value-1)).addClass("current");
            $('.slider-container #sub-heading-'+(ui.value-1)).addClass("current1");
        }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
    $('#slider').slider('value', def_pos);
    $('.slider-container.linux-slider .icon').click(function() {
        ch_value= parseInt(this.id.slice(5)) + 1;
        $(this).parents('div.slider-container').find('.icon').removeClass('current');
        $('#slider').slider('value', ch_value);
    });
});

var cpu_arr = new Array('1 Core','2 Core','4 Core','6 Core','8 Core');
var ram_arr = new Array('8 GB','16 GB','32 GB','64 GB','128 GB');
var hdd_arr  = new Array('240 GB','320 GB','500 GB','1 TB','2 TB');
var bandwidth_arr = new Array('50 GB','100 GB','150 GB','200 GB','250 GB');
var ip_arr = new Array('3 IPs', '5 IPs','7 IPs','9 IPs','Unlimited')
var price_arr = 	new Array('$15.95','$25.99','$35.99','$45.99','$55.99');
var link_arr = 		new Array('$10','$25','$50','$75','$100','$125');
var b_url = 'https://akdesigner.com/whmcs-templates/cart.php?a=add&pid=';

// This is what you want the default position to be
var def_pos = 2;

$(document).ready(function(){

    $( "#slider01" ).slider({
        range: 'min',
        animate: true,
        min: 1,
        max: 5,
        paddingMin: 90,
        paddingMax: 75,
        change: function( event, ui ) {
            $('.slider-container #cpu_valu span.value').html(cpu_arr[ui.value-1]);
            $('.slider-container #ram_valu span.value').html(ram_arr[ui.value-1]);
            $('.slider-container #hdd_valu span.value').html(hdd_arr[ui.value-1]);
            $('.slider-container #bandwidth_valu span.value').html(bandwidth_arr[ui.value-1]);
            $('.slider-container #ip_val span.value').html(ip_arr[ui.value-1]);
            $('.slider-container #price_valu').html(price_arr[ui.value-1]);
            $('.slider-container a.buynow_button').attr('href', b_url + link_arr[ui.value-1]);
            $('.slider-container div.price_rangetxt div#w-icon-'+(ui.value-1)).addClass("current");
            $('.slider-container #sub-heading-'+(ui.value-1)).addClass("current1");
        }
    });
    $( "#amount" ).val( "$" + $( "#slider01" ).slider( "value" ) );
    $('#slider01').slider('value', def_pos);
    $('.slider-container.window-slider .icon').click(function() {
        ch_value= parseInt(this.id.slice(7)) + 1;
        $(this).parents('div.slider-container').find('.icon').removeClass('current');
        $('#slider01').slider('value', ch_value);
    });
});