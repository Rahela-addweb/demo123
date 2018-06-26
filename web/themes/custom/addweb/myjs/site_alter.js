(function(jQuery){ 
    var ratevalue = jQuery("#rateYo1").rateYo({ 
        onSet: function (rating, rateYoInstance) {
            rate_url = jQuery("#rating_page_url").val();
            currentrate = jQuery("#currentrate").val();
            jQuery.ajax({
                type: "POST",
                url:"../custom/addweb_rating",
                dataType: "json",
                data: {
                  rating:rating,
                  rate_url:rate_url,
                  ratingPoints:currentrate,
                  action: "userRating"
                },
                success: function(data) {
                    var totalRating = data.averageRating;
                    var totalClient = data.clientCount;
                    var userip = data.ipUser;
                    jQuery("#ratingValue").html(totalRating);
                    jQuery("#totalClient").html(totalClient);
                    jQuery('.rateit-wrap').find('.rate-btn.rateYo2').addClass('edited');
                    jQuery('.rateit-wrap').find('.rate-btn.rateYo2').text('Rated');
                    jQuery("#rateYo1").rateYo("option", "readOnly", true);

                }
            });
          },
        rating: ratingValue,
        halfStar: true,
        starWidth: "13px",
        ratedFill: "#ff5722",
        normalFill: "#ffffff",
        spacing: "2px",
        readOnly: true
 });
    jQuery("#rateYo1 svg").click(function (e) {

        if (jQuery('#rateYo1').hasClass('rateYo2') && !jQuery('#totalClient').hasClass('mark') ) {
            /* get rating */
            var datademo = jQuery("#totalClient").addClass("mark");
            jQuery(this).addClass('sucess'); //cahnge sucess
            
            setTimeout(function () {
                jQuery('.rate-submit').fadeOut(500);
            }, 1000);
        } else if (jQuery('#rateYo1').hasClass('rateYo2') && jQuery('#totalClient').hasClass('mark')) {
            jQuery('.rate-btn.rateYo2').text('Already Rated');
            jQuery('.rate-btn.rateYo2').addClass('already_rated');
        } else {
            e.preventDefault(e);
            return false;
        }

    });
    jQuery('.rate-btn').on('click', function (e) {
        if (jQuery('.edited').length > 0) {
            e.preventDefault(e);
            return false;                         
        }
        else {
            jQuery("#rateYo1").rateYo("option", "readOnly", false);
            jQuery(".rate-submit").addClass("full-show");
            jQuery("#rateYo1").addClass("rateYo2");
            jQuery(this).addClass("rateYo2");
            jQuery(this).removeClass("enable");
            jQuery(this).text("Click to rate");
        }
    });

})(jQuery);

