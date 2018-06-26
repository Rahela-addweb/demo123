jQuery(window).load(function() {

 //Change link of portfolio tags
 jQuery('.portfolio-inner-page .portfolio-tags .field--name-field-technology .field--item a').each(function() {
   var tech_link = jQuery(this).attr('href');
   var tech_link_text = jQuery(this).text();
   tech_text_replace = tech_link_text.replace('technology-detail', 'portfolio').replace(/\s+/g, '-').replace(/\./g,'-').replace(/%20/g, "-").toLowerCase().replace('-', '_');
   tech_link_replace = tech_link.replace('technology-detail', 'portfolio').replace('-', '_');
   jQuery(this).attr("href", tech_link_replace);
   jQuery(this).attr("href", tech_text_replace);
 });

  //Change link of blogs tags
  jQuery('.blog-detail-tags a').each(function() {
    var tech_link_blog = jQuery(this).attr('href');
    tech_link_blog_replace = tech_link_blog.replace('technology-detail', 'technology').replace('_', '-');
    jQuery(this).attr("href", tech_link_blog_replace);
  });

  jQuery('.blog-detail-tags .field--name-field-seo-tags a').each(function() {
    var tech_link_blog = jQuery(this).attr('href');
    tech_link_blog_replace = tech_link_blog.replace('tags-detail', 'tags').replace('_', '-');
    jQuery(this).attr("href", tech_link_blog_replace);
  });

  //Change link of blog-author tags
   jQuery('.blog-teaser .view-blog-inner .blog-inner-tags .blog-tags a').each(function() {
     var tech_link = jQuery(this).attr('href');
     var urlink = document.location.origin;
     tech_link_replace = tech_link.replace('technology-detail', 'technology').replace('tags-detail', 'tags').replace('_', '-').replace(/%20/g, '-').replace(/\./g,'-').toLowerCase();
     jQuery(this).attr("href", tech_link_replace);
   });

  //Blog List Comment
  jQuery('.blog-main-page .view-content .blogs-wrapper .blogs-bottom .blog-comment-count ul li a').each(function() {
    //alert(jQuery(this).text());
    var comment = jQuery(this).text();
    var comment_text = comment.split(" Comments");
    jQuery(this).text(comment_text[0]);

    var comment_text1 = comment.split(" Comment");
    jQuery(this).text(comment_text1[0]);
  });

  //Technology Page Comment
  jQuery('.tag-inner-page .view-content .blog-teaser .view-blog-inner .blog-comment-count ul li a').each(function() {
    //alert(jQuery(this).text());
    var comment = jQuery(this).text();
    var comment_text = comment.split(" Comments");
    jQuery(this).text(comment_text[0]);

   var comment_text1 = comment.split(" Comment");
    jQuery(this).text(comment_text1[0]);
  });

  //Related Blogs Comment
  jQuery('.related-blogs-view .view-content .related-blog-bottom .related-blog-comment .blog-comment-count ul li a').each(function() {
    //alert(jQuery(this).text());
    var comment = jQuery(this).text();
    var comment_text = comment.split(" Comments");
    jQuery(this).text(comment_text[0]);

    var comment_text1 = comment.split(" Comment");
    jQuery(this).text(comment_text1[0]);
  });

  // Services page carousel js
  jQuery('.services-wrap').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    items:1
  });
  jQuery('.services-wrap .owl-item').each(function() {
    var banner_bg_img1 = jQuery(this).find('.each-slide .slider-bg-img img').attr('src');
    jQuery(this).find('.each-slide .slider-bg-img').css('background-image', 'url(' + banner_bg_img1 + ')');
  });
});

jQuery(document).ready(function() {

  //URL issue of Footer Technology  
  jQuery('.tag-cloud-bottom .views-row .views-field-name .field-content a').each(function() {
    var tech_link = jQuery(this).attr('href');
    var str_replace_link = tech_link.replace(' ', '-').toLowerCase();
    var str_replace_link = tech_link.replace(/%20/g, "-").replace(/\./g,'-').toLowerCase();
    jQuery(this).attr("href", str_replace_link);
  });

  //Remove active class from Home Page
  if(jQuery('body').hasClass('path-frontpage')) {
    jQuery('.menu--simple-mega-menu li:nth-child(2) a').removeClass('is-active');
  }

  //Header Banner Image
  var total_banner = 0;
  jQuery('.banner1 .field--item').each(function(i){
    jQuery(this).addClass('banner-text' + i);

    jQuery('.banner1 .banner-text' + i).hide();
    jQuery('.banner1 .banner-text0').show();
    total_banner++;
  });

  var int_initial = 0;

  function doStuff() {

      var class_name1 = '.banner-text' + int_initial;

      if (int_initial == total_banner-1) {
        int_initial = -1;
      }
      var class_name2 = '.banner-text' + (int_initial + 1);

      jQuery(class_name1).hide();
      jQuery(class_name2).toggle( "slide" );
      int_initial = int_initial + 1;
  }

  var myTimer = setInterval(doStuff, 7000);

  //Remove link of Disqus Comments
  jQuery('.blog-main-page .view-content .blogs-wrapper .blogs-bottom .blog-comment-count ul li a').removeAttr("href");
  jQuery('.related-blogs-view .view-content .related-blog-bottom .related-blog-comment .blog-comment-count ul li a').removeAttr("href");

  //Remove link of Technology Disqus Comments
  jQuery('.tag-inner-page .view-content .blog-teaser .view-blog-inner .blog-comment-count ul li a').removeAttr("href");
  jQuery('.related-blogs-view .view-content .related-blog-bottom .related-blog-comment .blog-comment-count ul li a').removeAttr("href");
  

  var baseUrl = document.location.origin;

  //Date Archive of news
  jQuery('#block-views-block-date-archive-block-1 .view-content ul li a').each(function() {
    var date_str = jQuery(this).text();
    var year = date_str.substring(0 , 4);
    var month = date_str.substring(4 , 6);
    if (date_str != ''){
      jQuery(this).text(month + '-' + year);
      var monthName = GetMonthName(month);
      if(monthName != undefined) {
        jQuery(this).text(monthName + ',' + ' ' + year);
      }
    }
  });

  //Change Url of Portfolio Filter Page
 jQuery( ".portfolio-main-page .bef-exposed-form .form-inline #edit-submit-portfolio" ).click(function() {
   var technology_value = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').val();
   var industry_value = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper select option:selected').val();
   var str_replace_search = jQuery('.portfolio-main-page .bef-exposed-form .js-form-item-combine #edit-combine').val();
   var label = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').text();
   var label_industry = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper .selectric-wrapper .selectric span').text();
   var label_replace = label.toLowerCase().replace(/\./g,'_').replace(/\s+/g, '_');
   var label_replace_industry = label_industry.toLowerCase().replace(/\./g,'_').replace(/\s+/g, '_');    
  if (label != 'Select Technology') {
     
    if(label_industry != 'Select Industry'){
      var address = baseUrl + '/portfolio/' + label_replace + '?' + 'combine=' + str_replace_search + '&industry=' + industry_value;
     }else{
       var address = baseUrl + '/portfolio/' + label_replace + '?' + 'combine=' + str_replace_search;  
    }
     window.location.href = (address);
     return false;
   }
   if(technology_value == 'All') {
     if(label_industry != 'Select Industry'){
      var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
       str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
       var address = baseUrl + '/portfolio' + '?' + 'combine=' + str_replace_search + '&industry=' + industry_value;
     }else{
       var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
       str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
       var address = baseUrl + '/portfolio' + '?' + 'combine=' + str_replace_search;
     }
     /*var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
     str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
     var address = baseUrl + '/portfolio' + '?' + 'combine=' + str_replace_search;*/
     window.location.href = (address);
     return false;
   }
   else {      
    var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
     var str_replace_val = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').val();
     str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
     var address;
     if(str_replace != '' && str_replace_search == '') {
       address = baseUrl + '/portfolio/' + str_replace;
     }
     else {
       
      address = baseUrl + '/portfolio/' + str_replace + '?' + 'combine=' + str_replace_search;
     }
     window.location.href = (address);
     return false;
   }
 });

  //Selecttric for Portfolio Select List
  jQuery('.portfolio-main-page .bef-exposed-form .select-wrapper select').selectric({disableOnMobile: false, nativeOnMobile: false});
  jQuery('.portfolio-main-page .bef-exposed-form .select-wrapper select').css('display' ,'none'); 

  //Add class in option of select list
  // jQuery('.portfolio-main-page .bef-exposed-form .select-wrapper select option').hover(function () {
  //   jQuery(this).toggleClass('highlighted');
  // });
  //Add class in option of select list
  jQuery('.portfolio-main-page .bef-exposed-form .js-form-item-industry .select-wrapper select option').hover(function () {

    jQuery(this).toggleClass('highlighted');
  });

  jQuery('.portfolio-main-page .bef-exposed-form .js-form-item-field-technology-target-id .select-wrapper select option').hover(function () {
    jQuery(this).toggleClass('highlighted');
  });

  //Change Portfolio Title url on filter page
  if (jQuery('body').hasClass('context-portfolio')) {
    jQuery('.portfolio-main-page .view-content .portfolio-list .portfolio-list-title a').each(function() {
      var title_value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
      this.href = this.href.replace('portfolio/-/', title_value + '-');
    });
  }

  //Hire Us Technology of Portfolio
  if (jQuery('body').hasClass('context-portfolio')) {
    var value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    var value_split = value.split("?");
    var value_split_index = value_split[0];
    var val_rep = value_split_index.replace(/_/g, " ").replace(/-/g, " ");
    var final_val = val_rep.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    jQuery('.hireus-technology').text(final_val);
  }

  //Tehnology Filter of Portfolio
  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').each(function() {
    var technology_list = jQuery(this).text();
    technology_list = technology_list.toLowerCase().replace(' ', '-');
    technology_list = technology_list.toLowerCase().replace('.', "-");
    jQuery(this).attr('class', technology_list);
    // alert(technology_list);
  });

  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').click(function(){
    var technology_list_select = jQuery(this).text();
    technology_list_select = technology_list_select.toLowerCase().replace(' ', '-');
    technology_list_select = technology_list_select.toLowerCase().replace('.', '-');
    jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').attr('class', technology_list_select);
  });
  // End

  //Industry Filter of Portfolio
  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').each(function() {
    var industry_list = jQuery(this).text();
    industry_list = industry_list.toLowerCase().replace(' ', '-');
    industry_list = industry_list.toLowerCase().replace('.', "-");
    jQuery(this).attr('class', industry_list);
    // alert(technology_list);
  });

  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').click(function(){
    var industry_list_select = jQuery(this).text();
    industry_list_select = industry_list_select.toLowerCase().replace(' ', '-');
    industry_list_select = industry_list_select.toLowerCase().replace('.', '-');
    jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').attr('class', industry_list_select);
  });
  // End
  
  //Selected technology in portfolio filter page
  var select_value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  var value_split = select_value.split("?");
  var value_split_index = value_split[0];

  var label = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').text();
  if (select_value != 'portfolio' && label != '' && value_split_index !='portfolio' ) {
    var select_tech = value_split_index.replace(/_/g, " ").replace(/-/g, " ");
    var final_tech = select_tech.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').text(final_tech);
  }

  //Footer Tag Cloud
  jQuery('.tag-cloud-bottom .views-row .views-field-name .field-content a').each(function() {
    jQuery(this).attr('title', jQuery(this).text());
  });

  //News Type
  jQuery('.news-main .view-content .views-row .news-list .news-list-details .news-list-type a').each(function() {
    //jQuery(this).text();
    jQuery(this).attr('title', jQuery(this).text());
  });

  // Typed.js
  var hBanner_text = jQuery('.home-banner-img .field--name-field-banner-title').text();
  setTimeout(function() {
    jQuery(".home-banner-img .field--name-field-banner-title").typed({
      strings: [hBanner_text],
      typeSpeed: 40
    });
  }, 3000);

  //Careers Sharethis
  if (jQuery('body').hasClass('path-careers')) {
      var current_location = window.location.href;
      if (current_location.indexOf('#') != -1) {
        current = current_location.split('#');
        var div_position = "#career-" + current[1];
        if (jQuery(window).width() < 960) {
          var height_div = jQuery(div_position).position().top - 30;
          jQuery('html, body').animate({scrollTop:height_div}, 'slow');
        }
        else {
          var height_div = jQuery(div_position).position().top - 70;
          jQuery('html, body').animate({scrollTop:height_div}, 'slow');
        }
      }
    }

  // Social media
  // jQuery('.social-icons li a').attr('target', '_blank');
  // jQuery('#block-socialmedia').prepend('<div class="social-share-icon-mobile"></div>');
  // jQuery('.social-icon-link').click(function(){
  //   jQuery(this).toggleClass('social-in');
  //   jQuery('.social-share-icon-mobile').toggleClass('ssim-show');
  //   jQuery(this).siblings('.social-icons').toggleClass('show-icon');
  // });
  jQuery('ul.social-icons li.Skype a').attr('href', 'skype:add.websolution?chat');

  //Parent Menu Link
  jQuery(".menu li a").removeAttr("data-toggle");

  /* Responsive Menu */
  // Add mobile menu link
  var mobile_menu_link_div = '<a href="javascript:void(0);" class="mobile-menu-btn">\
    <span class="sr-only">Toggle navigation</span>\
    <span class="icon-bar"></span>\
    <span class="icon-bar"></span>\
    <span class="icon-bar"></span>\
  </a>';  
  // jQuery('.navbar-header .region-navigation').prepend(mobile_menu_link_div);
  // jQuery('.navbar-header:eq(1) .region-navigation:eq(1)').prepend(mobile_menu_link_div);
  jQuery('.navbar-header .region-navigation').prepend(mobile_menu_link_div);
  // jQuery('.main-menu ul li ul').parent('li').prepend('<div class="cart-arrow"></div>');

  jQuery('.mobile-menu-btn').click(function() {
    jQuery('.main-menu-left, .main-menu-right').slideToggle();
  });
  var counter = 0;
  jQuery('.cart-arrow').click(function() {
    var subMenuLength = jQuery(this).parent('li').find('.cart-arrow').length;
    console.log('subMenuLength',subMenuLength);
    if(parseInt(subMenuLength) > 1) {
      counter = 1;

      if(jQuery(this).parent().hasClass('megamenu-title')) { // for inner menu

        if (jQuery(this).parent().next().css('display') == 'block') {
          jQuery(this).parent().next().slideUp();
        } else {
          jQuery(this).parent().next().slideDown();
        }

      } else { // For main outer menu

        if(jQuery(this).parent('li').find('.mega-menu-wrapper').hasClass( 'customTop' )) {

          jQuery(this).parent('li').find('.mega-menu-wrapper').slideUp();
          jQuery(this).parent('li').find('.mega-menu-wrapper').removeClass('customTop');

          //For closing inner menu when menu menu is being closed
          //if (jQuery(this).parent().find('.menu-grid ul').css('display') == 'block') {
          jQuery(this).parent().find('.menu-grid ul').slideUp();
          // } else {
          //   jQuery(this).parent().find('.menu-grid ul').slideDown();
          // }



        } else {
          jQuery(this).parent('li').find('.mega-menu-wrapper').addClass('customTop');
        }
      }

      if (jQuery(this).next().next().css('display') == 'block') {
        jQuery(this).next().next().slideUp();
      } else {
        jQuery(this).next().next().slideDown();
      }
      
    } else if(parseInt(subMenuLength) == 1) {
      if (jQuery(this).next().next().css('display') == 'block') {
        jQuery(this).next().next().slideUp();
      } else {
        jQuery(this).next().next().slideDown();
      }
    } else {


      if(jQuery(this).parent().hasClass('megamenu-title')) { // for inner menu

        if (jQuery(this).parent().next().css('display') == 'block') {
          jQuery(this).parent().next().slideUp();
        } else {
          jQuery(this).parent().next().slideDown();
        }

      } else { // For main outer menu
        if(jQuery(this).parent('li').find('.mega-menu-wrapper').hasClass( 'customTop' )) {
          jQuery(this).parent('li').find('.mega-menu-wrapper').slideUp();
          jQuery(this).parent('li').find('.mega-menu-wrapper').removeClass('customTop');
        } else {
          jQuery(this).parent('li').find('.mega-menu-wrapper').addClass('customTop');
        }
      }

      if (jQuery(this).next().next().css('display') == 'block') {
        jQuery(this).next().next().slideUp();
      } else {
        jQuery(this).next().next().slideDown();
        if(counter != 1) {
          jQuery('.main-menu ul ul').slideUp();  
        }
      }  
    }

    
  });


  // Say hello popup form js
  jQuery('.request-quote-button').click(function() {
    if (jQuery('.request-quote-form').hasClass('form-in') && jQuery('.request-quote-form').hasClass('rqf-tranform-1')) {
      jQuery('.request-quote-floating .request-quote-form').removeClass('rqf-tranform-1');
      setTimeout(function() {
        jQuery('.request-quote-floating .request-quote-form').removeClass('form-in');
      }, 800);
    }
    else {
      jQuery('.request-quote-form').toggleClass('form-in');
      setTimeout(function(){
        jQuery('.request-quote-floating .request-quote-form').toggleClass('rqf-tranform-1');
      }, 800);
    }

    // For height
    var request_popup_height = jQuery('.request-quote-form').outerHeight();
    var request_popup_half_height = request_popup_height / (-2);
    jQuery('.request-quote-form').css('margin-top' , request_popup_half_height);

    var windowHeight = jQuery(window).height();
    if(windowHeight < request_popup_height) {
      jQuery('.request-quote-form').addClass('say-hello-height');
    }
  });

  jQuery(window).resize(function() {
    var windowHeight = jQuery(window).height();
    //console.log('windowHeight:  ' + windowHeight);
    jQuery('.request-quote-form').css('height', 'auto');
    var request_popup_height = jQuery('.request-quote-form').outerHeight();
    if(windowHeight < request_popup_height) {
      //console.log('win-small');
      var request_popup_half_height = request_popup_height / (-2);
      jQuery('.request-quote-form').css('margin-top' , request_popup_half_height);

      jQuery('.request-quote-form').addClass('say-hello-height');
    }
    else {
      jQuery('.request-quote-form').removeClass('say-hello-height');
    }
  });

  jQuery('.request-close-btn').click(function() { // Close button
    setTimeout(function(){
      jQuery('.request-quote-form').removeClass('form-in');
    }, 800);
    jQuery('.request-quote-floating .request-quote-form').removeClass('rqf-tranform-1');
  });
  jQuery('.webform-submission-contact-node-1-form .captcha summary').click(function() {
    setTimeout(function() {
      var windowHeight = jQuery(window).height();
      var request_popup_height = jQuery('.request-quote-form').outerHeight();
      var request_popup_half_height = request_popup_height / (-2);
      jQuery('.request-quote-form').css('margin-top' , request_popup_half_height);

      if(windowHeight < request_popup_height) {
        //alert('if');
        jQuery('.request-quote-form').css('height' , windowHeight - 40);
        jQuery('.request-quote-form').css({ 'top' : '0', 'margin-top' : '20px', });
      }
    }, 300);
  });

  //Hire-Us
  if (jQuery(window).width() > 1024) {
    jQuery(window).scroll(function() {
      jQuery('.hire-us').removeClass('reveal-footer');
      if(jQuery(window).scrollTop() + jQuery(window).height() > (jQuery(document).height() - 300) ) {
        //you are at bottom
       jQuery('.hire-us').addClass('reveal-footer');
      }
      jQuery('.footer').removeClass('fixed-footer');
      if(jQuery(window).scrollTop() + jQuery(window).height() > (jQuery(document).height() - 550) ) {
        //you are at bottom
       jQuery('.footer').addClass('fixed-footer');
      }
    });
    jQuery(window).resize(function() {
      jQuery(window).scroll(function() {
        jQuery('.hire-us').removeClass('reveal-footer');
        if(jQuery(window).scrollTop() + jQuery(window).height() > (jQuery(document).height() - 300) ) {
          //you are at bottom
         jQuery('.hire-us').addClass('reveal-footer');
        }
        jQuery('.footer').removeClass('fixed-footer');
        if(jQuery(window).scrollTop() + jQuery(window).height() > (jQuery(document).height() - 550) ) {
          //you are at bottom
         jQuery('.footer').addClass('fixed-footer');
        }
      });
    });
  }

  if (jQuery(window).width() > 640) {
    var divHeight = jQuery('.view-portfolio .portfolio-main .portfolio-inner-image').outerHeight();
    jQuery('.view-portfolio .portfolio-main .portfolio-inner-content').css('height', divHeight);
    jQuery(window).resize(function() {
      var divHeight = jQuery('.view-portfolio .portfolio-main .portfolio-inner-image').outerHeight();
      jQuery('.view-portfolio .portfolio-main .portfolio-inner-content').css('height', divHeight);
    });
  }

  /* Sticky Header */
  jQuery(window).scroll(function() {
    var scrolled = jQuery(window).scrollTop();
    if(scrolled >= 52) {
      jQuery('body').addClass('sticky-header');
    }
    else {
      jQuery('body').removeClass('sticky-header');
    }
  });

  // Add placeholder for stay in touch section
  if (jQuery("#block-simplenewssubscription")) {
    jQuery("#edit-mail-0-value").attr('placeholder', 'Enter email for latest updates');
  }

  // Add placeholder for portfolio keyword search section
    jQuery(".portfolio-main-page .views-exposed-form .form-inline .js-form-item-combine #edit-combine").attr('placeholder', 'Search any tag or keyword');

  //Careers Read More
    jQuery('.careers-main .careers-main-body .views-more-link').click(function(e) {
    e.preventDefault();
    jQuery(this).parent().prev().prev().prev().prev().find('.plus').toggleClass('open');
    // jQuery(this).toggleClass('open');
    jQuery(this).parents('.careers-main-right').children('.careers-main-full-body').slideToggle();
    jQuery(this).parents('.careers-main-right').children('.careers-main-body').slideToggle();
  });

  /**
   * Career page
   */
  // Social icon
  jQuery('.plus').click(function() {
    jQuery(this).toggleClass('open');
    jQuery(this).parents('.careers-main-right').children('.careers-main-full-body').slideToggle();
    jQuery(this).parents('.careers-main-right').children('.careers-main-body').slideToggle();
  });
  jQuery('.share').click(function() {
    jQuery(this).parents('.careers-main-right').children('.careers-main-share').slideToggle();
  });

  jQuery(document).ajaxComplete(function() {
    // Social icon
    jQuery('.plus').click(function() {
      jQuery(this).toggleClass('open');
      jQuery(this).parents('.careers-main-right').children('.careers-main-full-body').slideToggle();
      jQuery(this).parents('.careers-main-right').children('.careers-main-body').slideToggle();
    });
    jQuery('.share').click(function() {
      jQuery(this).parents('.careers-main-right').children('.careers-main-share').slideToggle();
    });
  });

  // Career page progress bar
  jQuery('.careers-main').each(function() {
    var text = '';
    var progress = jQuery(this);
    jQuery(this).find('.careers-main-percentage').wrapInner('<div class="bar-percentage"></div>');
    jQuery(this).find('.careers-main-percentage').append('<div class="bar-container"><div class="bar"></div></div>');
    pct = jQuery(this).find('.careers-main-percentage .bar-percentage').text();
    var pct_int = pct.replace('%', '');
    
    var progress = jQuery(this).find('.careers-main-percentage .bar-percentage');
    var progress_bar = jQuery(this).find('.careers-main-percentage .bar-container .bar');
    var percentage = Math.ceil(pct_int);
    jQuery({countNum: 0}).animate({countNum: percentage}, {
      duration: 2000,
      easing:'linear',
      step: function() {
      // What todo on every count
        var pct1 = '';
        if(percentage == 0) {
          pct1 = Math.floor(this.countNum) + '%';
        }
        else {
          pct1 = Math.floor(this.countNum+1) + '%';
        }
        progress.text(pct1);
        progress_bar.css('width',pct1);
      }
    });

    jQuery(this).find('.careers-main-percentage .bar-percentage').css('margin-left', pct);
  });

  jQuery(document).ajaxComplete(function() {

    //Careers Sharethis
  if (jQuery('body').hasClass('path-careers')) {
      var current_location = window.location.href;
      if (current_location.indexOf('#') != -1) {
        current = current_location.split('#');
        var div_position = "#career-" + current[1];
        if (jQuery(window).width() < 960) {
          var height_div = jQuery(div_position).position().top - 30;
          jQuery('html, body').animate({scrollTop:height_div}, 'slow');
        }
        else {
          var height_div = jQuery(div_position).position().top - 70;
          jQuery('html, body').animate({scrollTop:height_div}, 'slow');
        }
      }
    }

    //Careers Read More
    // jQuery('.careers-main .careers-main-body .views-more-link').click(function(e) {
    //   e.preventDefault();
    //   jQuery(this).toggleClass('open');
    //   jQuery(this).parents('.careers-main-right').children('.careers-main-full-body').slideToggle();
    //   jQuery(this).parents('.careers-main-right').children('.careers-main-body').slideToggle();
    // });

    // Social icon
    // jQuery('.plus').click(function() {
    //   jQuery(this).toggleClass('open');
    //   jQuery(this).parents('.careers-main-right').children('.careers-main-full-body').slideToggle();
    //   jQuery(this).parents('.careers-main-right').children('.careers-main-body').slideToggle();
    // });

    jQuery('.share').click(function() {
      jQuery(this).parents('.careers-main-right').children('.careers-main-share').slideToggle();
    });

    jQuery('.careers-main').each(function() {
      var text = '';
      var progress = jQuery(this);
      jQuery(this).find('.careers-main-percentage').wrapInner('<div class="bar-percentage"></div>');
      jQuery(this).find('.careers-main-percentage').append('<div class="bar-container"><div class="bar"></div></div>');
      pct = jQuery(this).find('.careers-main-percentage .bar-percentage').text();
      var pct_int = pct.replace('%', '');
      
      var progress = jQuery(this).find('.careers-main-percentage .bar-percentage');
      var progress_bar = jQuery(this).find('.careers-main-percentage .bar-container .bar');
      var percentage = Math.ceil(pct_int);
      jQuery({countNum: 0}).animate({countNum: percentage}, {
        duration: 2000,
        easing:'linear',
        step: function() {
        // What todo on every count
          var pct1 = '';
          if(percentage == 0) {
            pct1 = Math.floor(this.countNum) + '%';
          }
          else {
            pct1 = Math.floor(this.countNum+1) + '%';
          }
          progress.text(pct1);
          progress_bar.css('width',pct1);
        }
      });
      jQuery(this).find('.careers-main-percentage .bar-percentage').css('margin-left', pct);
    });
  });
  /* End of career page */

  //Hide SayHello button in Responsive menu 
  jQuery('.icon-bar').click(function() {
    jQuery('body').toggleClass('open-mob-menu');
  });

  //Careers filters
  jQuery('.careers-list .bef-exposed-form input[type="radio"]').each(function() {
    if (jQuery(this).is(':checked')) {
      jQuery(this).parents('.js-form-item-field-job-position-target-id label').addClass('active');
      } else {
        jQuery(this).parents('.js-form-item-field-job-position-target-id label').removeClass('active');
    }
  });

  //Hire Us Technology of Hire Developer detail page
  if (jQuery('body').hasClass('hire-developer-detail')) {

   var value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    var val_rep = value.replace(/_/g, " ").replace(/-/g, " ");
    var final_val = val_rep.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    jQuery('.hireus-technology').text(final_val);
  }

  jQuery('.careers-list .bef-exposed-form input[type="radio"]').click(function(){
    jQuery(this).parent('label').addClass('active');
  });

  jQuery(document).ajaxComplete(function() {
    jQuery('.careers-list .bef-exposed-form input[type="radio"]').each(function() {
    if (jQuery(this).is(':checked')) {
      jQuery(this).parents('.js-form-item-field-job-position-target-id label').addClass('active');
      } else {
        jQuery(this).parents('.js-form-item-field-job-position-target-id label').removeClass('active');
      }
    });

    jQuery('.careers-list .bef-exposed-form input[type="radio"]').click(function(){
      jQuery(this).parent('label').addClass('active');
    });
  });

});

function GetMonthName(monthNumber) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthNumber - 1];
}

// $('#newsletter-Modal').on('shown.bs.modal', function () {
//   $('#myInput').focus()
// })

var show = function(){
    jQuery('#newsletter-Modal').modal('show');
};

jQuery(window).load(function(){
    var timer = window.setTimeout(show,5000);
});


//Solved URL issues of Portfolio and Blogs Tags
  jQuery('.view-blogs .blogs-upper-right .tags .blog-tags').each(function() {
    jQuery(this).find('a').each(function() {
      var tech_link = jQuery(this).attr('href');
      var str_replace_link = tech_link.replace(' ', '-').toLowerCase();
      var str_replace_link = tech_link.replace(/%20/g, "-").replace(/\./g,'-').toLowerCase();
      jQuery(this).attr("href", str_replace_link);
    });
  });

  jQuery('.portfolio-home .latest-work-grid .latest-work-tag').each(function() {
    jQuery(this).find('a').each(function() {
      var tech_link = jQuery(this).attr('href');
      var str_replace_link = tech_link.replace(' ', '-').toLowerCase();
      var str_replace_link = tech_link.replace(/%20/g, "-").replace(/\./g,'-').toLowerCase();
      jQuery(this).attr("href", str_replace_link);
    });
  });

 jQuery('.portfolio-main-page .portfolio-details .portfolio-list-tags').each(function() {
    jQuery(this).find('a').each(function() {
      var tech_link = jQuery(this).attr('href');
      var str_replace_link = tech_link.replace(' ', '-').toLowerCase();
      var str_replace_link = tech_link.replace(/%20/g, "-").replace(/\./g,'-').toLowerCase();
      jQuery(this).attr("href", str_replace_link);
    });
  });

 //Solved URL issues of Technology Tags
 //jQuery('.tag-inner-page .blog-teaser .view-blog-inner .blog-inner-tags').each(function() {
 //   jQuery(this).find('a').each(function() {      
 //     var tech_link = jQuery(this).attr('href');
 //     var urlink = document.location.origin;
 //     if(tech_link.indexOf('tags') != '-1') {
 //       var arr1 = tech_link.split('tags/');
 //       var str_replace_link1 = arr1[1].replace(/%20/g, '-').replace(/[^a-zA-Z0-9]/g, '-').replace('#', '').replace('/', '-').replace(/\./g,'-').toLowerCase();      
 //       jQuery(this).attr("href", urlink +arr1[0]+'tags/'+str_replace_link1);
 //     } else if(tech_link.indexOf('technology') != '-1') {
 //       var arr2 = tech_link.split('technology/');  
 //      var str_replace_link2 = arr2[1].replace(/%20/g, '-').replace(/[^a-zA-Z0-9]/g, '-').replace('#', '').replace('/', '-').replace(/\./g,'-').toLowerCase();        
 //      jQuery(this).attr("href", urlink +arr2[0]+'technology/'+str_replace_link2);
 //     }
      
 //   });
 // });
 
// blog tag links changes
jQuery('.blog-teaser .blog-inner-detail .meta-info .blog-inner-tags .blog-tags a').each(function() {    
 var tech_link_blog = jQuery(this).attr('href');
  tech_link_blog_replace = tech_link_blog.replace('tags-detail', 'tags').replace('_', '-');
  jQuery(this).attr("href", tech_link_blog_replace);
});


// Service page banner js
  var banner_bg_img = jQuery('.service-banner-image img').attr('src');
   jQuery('.services-banner-wrap').css('background-image', 'url(' + banner_bg_img + ')');

 // Masonry for interior page design
  setTimeout(function(){
    jQuery('.interior-wrap').masonry({
      // options
      itemSelector: '.interior-inner-wrap',
      // columnWidth: 150,
      gutter: 20
    })
   }, 1500);

  // var container = jquery('.interior-wrap');
  // // initialize Masonry after all images have loaded  
  // container.imagesLoaded( function() {
  //   container.masonry({
  //     // options
  //     itemSelector: '.interior-inner-wrap',
  //     columnWidth: 200,
  //     gutter: 20
  //   })
  // });

// // Create a new Particle
// var ps = new ParticleSlider({
//   ptlGap: 1 ,
//   mouseForce: 3000 ,
//   monochrome: true ,
//   color: '#fff' ,
//   ptlSize: 1 ,
  
// });

// var ptl = new ps.Particle(ps);

// // Set time to live of Particle to20 frames.
// ptl.ttl = 20;

//wrap ul to li of service paragraph
jQuery( ".technologies-inner-wrap" ).wrapAll( "<ul  class='nav nav-tabs' role='tablist'></ul>");
jQuery( ".technologies-info-wrap").wrapAll( "<div class='tab-content'></div>");

jQuery('.technologies-info-wrap').each(function(i) {
    jQuery(this).attr('id', 'page'+(i+1));
});

jQuery('.icon-title').each(function(i) {
    jQuery(this).attr('href', '#page'+(i+1));
});

jQuery('.icon-title').each(function(i) {
    jQuery(this).attr('aria-controls', 'page'+(i+1));
});

jQuery(".nav-tabs .technologies-inner-wrap").first().addClass("active");
jQuery(".technologies-info-wrap").first().addClass("active");

//for service all title, subtitle and detail main wrap
jQuery('.author-info').each(function(i) {
   jQuery(this).attr('class', 'author-info'+(i+1));
});

//for service all title, subtitle and detail main wrap
jQuery('.services-banner-content').each(function(i) {
   jQuery(this).attr('class', 'author-info'+(i+1));
});

//remove tooltip from popup and footer subscription form
jQuery("#block-simplenewssubscription #simplenews-subscriptions-block-17b04ba7-698e-421a-9d42-8de68933bafd #edit-mail-wrapper .js-form-item-mail-0-value #edit-mail-0-value").tooltip("disable");
//addplace holder to footer subscription form
jQuery("#block-simplenewssubscription #simplenews-subscriptions-block-17b04ba7-698e-421a-9d42-8de68933bafd #edit-mail-wrapper .js-form-item-mail-0-value #edit-mail-0-value").attr('placeholder', 'Enter email for latest updates');

jQuery(document).ready(function(){
  jQuery( document ).ajaxComplete(function() {
    //Change link of portfolio tags
    jQuery('.portfolio-inner-page .portfolio-tags .field--name-field-technology .field--item a').each(function() {
     var tech_link = jQuery(this).attr('href');
     var tech_link_text = jQuery(this).text();
     tech_text_replace = tech_link_text.replace('technology-detail', 'portfolio').replace(/\s+/g, '-').replace(/\./g,'-').replace(/%20/g, "-").toLowerCase().replace('-', '_');
     tech_link_replace = tech_link.replace('technology-detail', 'portfolio').replace('-', '_');
     jQuery(this).attr("href", tech_link_replace);
     jQuery(this).attr("href", tech_text_replace);
    });
    // End

    //Change Url of Portfolio Filter Page
 jQuery( ".portfolio-main-page .bef-exposed-form .form-inline #edit-submit-portfolio" ).click(function() {
   var technology_value = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').val();
   var industry_value = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper select option:selected').val();
   var str_replace_search = jQuery('.portfolio-main-page .bef-exposed-form .js-form-item-combine #edit-combine').val();
   var label = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').text();
   var label_industry = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper .selectric-wrapper .selectric span').text();
   var label_replace = label.toLowerCase().replace(/\./g,'_').replace(/\s+/g, '_');
   var label_replace_industry = label_industry.toLowerCase().replace(/\./g,'_').replace(/\s+/g, '_');    
  if (label != 'Select Technology') {
     
    if(label_industry != 'Select Industry'){
      var address = baseUrl + '/portfolio/' + label_replace + '?' + 'combine=' + str_replace_search + '&industry=' + industry_value;
     }else{
       var address = baseUrl + '/portfolio/' + label_replace + '?' + 'combine=' + str_replace_search;  
    }
     window.location.href = (address);
     return false;
   }
   if(technology_value == 'All') {
     if(label_industry != 'Select Industry'){
      var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
       str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
       var address = baseUrl + '/portfolio' + '?' + 'combine=' + str_replace_search + '&industry=' + industry_value;
     }else{
       var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
       str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
       var address = baseUrl + '/portfolio' + '?' + 'combine=' + str_replace_search;
     }
     /*var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
     str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
     var address = baseUrl + '/portfolio' + '?' + 'combine=' + str_replace_search;*/
     window.location.href = (address);
     return false;
   }
   else {      
    var str_replace = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').text();
     var str_replace_val = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper select option:selected').val();
     str_replace = str_replace.toLowerCase().replace(/\./g,'-').replace(/\s+/g, '-');
     var address;
     if(str_replace != '' && str_replace_search == '') {
       address = baseUrl + '/portfolio/' + str_replace;
     }
     else {
       
      address = baseUrl + '/portfolio/' + str_replace + '?' + 'combine=' + str_replace_search;
     }
     window.location.href = (address);
     return false;
   }
 });

  //Selecttric for Portfolio Select List
  jQuery('.portfolio-main-page .bef-exposed-form .select-wrapper select').selectric({disableOnMobile: false, nativeOnMobile: false});
  jQuery('.portfolio-main-page .bef-exposed-form .select-wrapper select').css('display' ,'none'); 

  // //Add class in option of select list
  // jQuery('.portfolio-main-page .bef-exposed-form .select-wrapper select option').hover(function () {
  //   jQuery(this).toggleClass('highlighted');
  // });
  //Add class in option of select list
  jQuery('.portfolio-main-page .bef-exposed-form .js-form-item-industry .select-wrapper select option').hover(function () {
    alert('hi');
    jQuery(this).toggleClass('highlighted');
  });
  jQuery('.portfolio-main-page .bef-exposed-form .js-form-item-field-technology-target-id .select-wrapper select option').hover(function () {
    jQuery(this).toggleClass('highlighted');
  });


  //Change Portfolio Title url on filter page
  if (jQuery('body').hasClass('context-portfolio')) {
    jQuery('.portfolio-main-page .view-content .portfolio-list .portfolio-list-title a').each(function() {
      var title_value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
      this.href = this.href.replace('portfolio/-/', title_value + '-');
    });
  }

  //Tehnology Filter of Portfolio
  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').each(function() {
    var technology_list = jQuery(this).text();
    technology_list = technology_list.toLowerCase().replace(' ', '-');
    technology_list = technology_list.toLowerCase().replace('.', "-");
    jQuery(this).attr('class', technology_list);
    // alert(technology_list);
  });

  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').click(function(){
    var technology_list_select = jQuery(this).text();
    technology_list_select = technology_list_select.toLowerCase().replace(' ', '-');
    technology_list_select = technology_list_select.toLowerCase().replace('.', '-');
    jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').attr('class', technology_list_select);
  });
  // End

  //Industry Filter of Portfolio
  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').each(function() {
    var industry_list = jQuery(this).text();
    industry_list = industry_list.toLowerCase().replace(' ', '-');
    industry_list = industry_list.toLowerCase().replace('.', "-");
    jQuery(this).attr('class', industry_list);
    // alert(technology_list);
  });

  jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-industry .select-wrapper .selectric-wrapper .selectric-items .selectric-scroll ul li').click(function(){
    var industry_list_select = jQuery(this).text();
    industry_list_select = industry_list_select.toLowerCase().replace(' ', '-');
    industry_list_select = industry_list_select.toLowerCase().replace('.', '-');
    jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').attr('class', industry_list_select);
  });
  // End
  
  //Selected technology in portfolio filter page
  var select_value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  var value_split = select_value.split("?");
  var value_split_index = value_split[0];

  var label = jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').text();
  if (select_value != 'portfolio' && label != '' && value_split_index !='portfolio' ) {
    var select_tech = value_split_index.replace(/_/g, " ").replace(/-/g, " ");
    var final_tech = select_tech.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    jQuery('.portfolio-main-page .bef-exposed-form .form-inline .js-form-item-field-technology-target-id .select-wrapper .selectric-wrapper .selectric span').text(final_tech);
  }

  if (jQuery(window).width() > 640) {
    var divHeight = jQuery('.view-portfolio .portfolio-main .portfolio-inner-image').outerHeight();
    jQuery('.view-portfolio .portfolio-main .portfolio-inner-content').css('height', divHeight);
    jQuery(window).resize(function() {
      var divHeight = jQuery('.view-portfolio .portfolio-main .portfolio-inner-image').outerHeight();
      jQuery('.view-portfolio .portfolio-main .portfolio-inner-content').css('height', divHeight);
    });
  }

  // Add placeholder for portfolio keyword search section
  jQuery(".portfolio-main-page .views-exposed-form .form-inline .js-form-item-combine #edit-combine").attr('placeholder', 'Search any tag or keyword');

  //Solved URL issues of Portfolio and Blogs Tags
  jQuery('.view-blogs .blogs-upper-right .tags .blog-tags').each(function() {
    jQuery(this).find('a').each(function() {
      var tech_link = jQuery(this).attr('href');
      var str_replace_link = tech_link.replace(' ', '-').toLowerCase();
      var str_replace_link = tech_link.replace(/%20/g, "-").replace(/\./g,'-').toLowerCase();
      jQuery(this).attr("href", str_replace_link);
    });
  });

  jQuery('.portfolio-home .latest-work-grid .latest-work-tag').each(function() {
    jQuery(this).find('a').each(function() {
      var tech_link = jQuery(this).attr('href');
      var str_replace_link = tech_link.replace(' ', '-').toLowerCase();
      var str_replace_link = tech_link.replace(/%20/g, "-").replace(/\./g,'-').toLowerCase();
      jQuery(this).attr("href", str_replace_link);
    });
  });

 jQuery('.portfolio-main-page .portfolio-details .portfolio-list-tags').each(function() {
    jQuery(this).find('a').each(function() {
      var tech_link = jQuery(this).attr('href');
      var str_replace_link = tech_link.replace(' ', '-').toLowerCase();
      var str_replace_link = tech_link.replace(/%20/g, "-").replace(/\./g,'-').toLowerCase();
      jQuery(this).attr("href", str_replace_link);
    });
  });
  });
});
  