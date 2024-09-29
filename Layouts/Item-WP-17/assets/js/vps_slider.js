
var cpu_arr = new Array('2 vCPU','4 vCPU','6 vCPU','8 vCPU','9 vCPU');
var ram_arr = new Array('2GB','4GB','8GB','12GB','16GB');
var hdd_arr  = new Array('10GB','30GB','50GB','60GB','80GB');
var bandwidth_arr = new Array('Unlimited','Unlimited','Unlimited','Unlimited','Unlimited');
var price_arr = 	new Array('$150','$286','$300','$350','$400');
var link_arr = 		new Array('$10','$25','$50','$75','$100','$125');
var b_url = 'https://www.your-domain.com/?cmd=cart&action=add&id=';

// This is what you want the default position to be
var def_pos = 2;

$(document).ready(function(){

	$( "#slider" ).slider({
		range: 'min',
		animate: true,
		min: 1,
		max: 5,
		paddingMin: 12,
		paddingMax: 75,
		//step: 0.1,
		slide: function( event, ui ) {
			$('.slider-container #cpu_val span.value').html(cpu_arr[ui.value-1]);
			$('.slider-container #ram_val span.value').html(ram_arr[ui.value-1]);
			$('.slider-container #hdd_val span.value').html(hdd_arr[ui.value-1]);
			$('.slider-container #bandwidth_val span.value').html(bandwidth_arr[ui.value-1]);
			$('.slider-container #price_val').html(price_arr[ui.value-1]);
			$('.slider-container a.buynow-button').attr('href', b_url + link_arr[ui.value-1]);
			$(".slider-container div.price_rangetxt div").removeClass("current");
			for(var i=0;i<ui.value;i++)
				$(".slider-container div.price_rangetxt div#icon-"+i).addClass("current");
		},
		change: function( event, ui ) {
			$('.slider-container #cpu_val span.value').html(cpu_arr[ui.value-1]);
			$('.slider-container #ram_val span.value').html(ram_arr[ui.value-1]);
			$('.slider-container #hdd_val span.value').html(hdd_arr[ui.value-1]);
			$('.slider-container #bandwidth_val span.value').html(bandwidth_arr[ui.value-1]);
			$('.slider-container #price_val').html(price_arr[ui.value-1]);
			$('.slider-container a.buynow-button').attr('href', b_url + link_arr[ui.value-1]);
			for(var i=0;i<ui.value;i++)
				$(".slider-container div.price_rangetxt div#icon-"+i).addClass("current");
		}
	});
	$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	$('#slider').slider('value', def_pos);
	$('.icon').click(function() {
		ch_value= parseInt(this.id.slice(5)) + 1;
		$(".slider-container div.price_rangetxt div").removeClass("current");
		$('#slider').slider('value', ch_value);
	});
});