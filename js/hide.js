jQuery("#top").hide();jQuery(function(){jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>100){jQuery('#top').show("slow")}else{jQuery('#top').hide("slow")}});jQuery('#top').click(function(){jQuery('body,html').animate({scrollTop:0},600)})});