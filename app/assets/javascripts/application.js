// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require social-share-button
//= require toastr
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require_tree .


// function like(id) {
//   $.ajax({
//       Default: "GET",
//       dataType: "json",
//       url: "/articles/like/"+id,
//       success: function(data){
//         var like = data.like;
//         $('#like').html(like);
//         $('#like_it').attr("disabled", "disabled");
//       }
//   }); 
// } 

$(document).ready(function() {
  $('#clubs').dataTable();
  $('#teams').dataTable();
  
  WebFontConfig = {
    google: { families: [ 'Kaushan+Script::latin', 'Source+Sans+Pro:400,300,600,300italic,400italic,600italic:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();  

  // update social icons for twitter
  $('a.social-share-button-twitter').append( "<i class='fa fa-twitter'></i>" );
  $('a.social-share-button-twitter').removeClass('social-share-button-twitter').addClass('btn bg-aqua btn-circle')
  // update social icons for facebook
  $('a.social-share-button-facebook').append( "<i class='fa fa-facebook'></i>" );
  $('a.social-share-button-facebook').removeClass('social-share-button-facebook').addClass('btn bg-blue btn-circle')
  // update social icons for google-plus
  $('a.social-share-button-google_plus').append( "<i class='fa fa-google-plus'></i>" );
  $('a.social-share-button-google_plus').removeClass('social-share-button-google_plus').addClass('btn bg-red btn-circle')
  // update social icons for google
  $('a.social-share-button-pinterest').append( "<i class='fa fa-pinterest'></i>" );
  $('a.social-share-button-pinterest').removeClass('social-share-button-pinterest').addClass('btn bg-dark-red btn-circle')
  $('div.redactor_form-control').css('height', '414px');

  $('#club_club_flag_id').change(function(){
    
    var imageID = $('#club_club_flag_id :selected').val();
    
    if (imageID > 0) {
      $.ajax({
          Default: "GET",
          dataType: "json",
          url: "/club_flags/"+imageID,
          success: function(data){
            var newPic = data.file_name;
            $('#club_flag').attr('src', "/assets/clubs/"+newPic);
          }
      });      
    }
    else {
      $('#club_flag').attr('src', "/assets/clubs/default.png");
    }


  });

  $('#team_team_flag_id').change(function(){
    
    var imageID = $('#team_team_flag_id :selected').val();
    
    if (imageID > 0) {
      $.ajax({
          Default: "GET",
          dataType: "json",
          url: "/team_flags/"+imageID,
          success: function(data){
            var newPic = data.file_name;
            $('#team_flag').attr('src', "/assets/teams/"+newPic);
          }
      });      
    }
    else {
      $('#team_flag').attr('src', "/assets/teams/default.png");
    }

  });
  
  // Teams DataTable search box modification
  $('#teams_filter label').css("color", "white" );
  $('#teams_filter label input').css('width', '130px');
  $('#teams_filter label input').attr('placeholder', 'Search');

  // Clubs DataTable search box modification
  $('#clubs_filter label').css("color", "white" );
  $('#clubs_filter label input').css('width', '130px');
  $('#clubs_filter label input').attr('placeholder', 'Search');

});  

var left_side_width = 220; //Sidebar width in pixels

$(function() {
    "use strict";

    //Enable sidebar toggle
    $("[data-toggle='offcanvas']").click(function(e) {
        e.preventDefault();

        //If window is small enough, enable sidebar push menu
        if ($(window).width() <= 992) {
            $('.row-offcanvas').toggleClass('active');
            $('.left-side').removeClass("collapse-left");
            $(".right-side").removeClass("strech");
            $('.row-offcanvas').toggleClass("relative");
        } else {
            //Else, enable content streching
            $('.left-side').toggleClass("collapse-left");
            $(".right-side").toggleClass("strech");
        }
    });

    //Add hover support for touch devices
    $('.btn').bind('touchstart', function() {
        $(this).addClass('hover');
    }).bind('touchend', function() {
        $(this).removeClass('hover');
    });

    //Activate tooltips
    // $("[data-toggle='tooltip']").tooltip();

    /*
     * Add collapse and remove events to boxes
     */
    $("[data-widget='collapse']").click(function() {
        //Find the box parent
        var box = $(this).parents(".box").first();
        //Find the body and the footer
        var bf = box.find(".box-body, .box-footer");
        if (!box.hasClass("collapsed-box")) {
            box.addClass("collapsed-box");
            bf.slideUp();
        } else {
            box.removeClass("collapsed-box");
            bf.slideDown();
        }
    });

    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     */
    $('.btn-group[data-toggle="btn-toggle"]').each(function() {
        var group = $(this);
        $(this).find(".btn").click(function(e) {
            group.find(".btn.active").removeClass("active");
            $(this).addClass("active");
            e.preventDefault();
        });

    });

    $("[data-widget='remove']").click(function() {
        //Find the box parent
        var box = $(this).parents(".box").first();
        box.slideUp();
    });

    /* Sidebar tree view */
    $(".sidebar .treeview").tree();

    /*
     * Make sure that the sidebar is stretched full height
     * ---------------------------------------------
     * We are gonna assign a min-height value every time the
     * wrapper gets resized and upon page load. We will use
     * Ben Alman's method for detecting the resize event.
     *
     **/
    function _fix() {
        //Get window height and the wrapper height
        var height = $(window).height() - $("body > .header").height();
        $(".wrapper").css("min-height", height + "px");
        var content = $(".wrapper").height();
        //If the wrapper height is greater than the window
        if (content > height)
            //then set sidebar height to the wrapper
            $(".left-side, html, body").css("min-height", content + "px");
        else {
            //Otherwise, set the sidebar to the height of the window
            $(".left-side, html, body").css("min-height", height + "px");
        }
    }
    //Fire upon load
    _fix();
    //Fire when wrapper is resized
    $(".wrapper").resize(function() {
        _fix();
        fix_sidebar();
    });

    //Fix the fixed layout sidebar scroll bug
    fix_sidebar();


});
function fix_sidebar() {
    //Make sure the body tag has the .fixed class
    if (!$("body").hasClass("fixed")) {
        return;
    }

    //Add slimscroll
    $(".sidebar").slimscroll({
        height: ($(window).height() - $(".header").height()) + "px",
        color: "rgba(0,0,0,0.2)"
    });
}

/*END DEMO*/


/*
 * SIDEBAR MENU
 * ------------
 * This is a custom plugin for the sidebar menu. It provides a tree view.
 *
 * Usage:
 * $(".sidebar).tree();
 *
 * Note: This plugin does not accept any options. Instead, it only requires a class
 *       added to the element that contains a sub-menu.
 *
 * When used with the sidebar, for example, it would look something like this:
 * <ul class='sidebar-menu'>
 *      <li class="treeview active">
 *          <a href="#>Menu</a>
 *          <ul class='treeview-menu'>
 *              <li class='active'><a href=#>Level 1</a></li>
 *          </ul>
 *      </li>
 * </ul>
 *
 * Add .active class to <li> elements if you want the menu to be open automatically
 * on page load. See above for an example.
 */
(function($) {
    "use strict";

    $.fn.tree = function() {

        return this.each(function() {
            var btn = $(this).children("a").first();
            var menu = $(this).children(".treeview-menu").first();
            var isActive = $(this).hasClass('active');

            //initialize already active menus
            if (isActive) {
                menu.show();
                btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
            }
            //Slide open or close the menu on link click
            btn.click(function(e) {
                e.preventDefault();
                if (isActive) {
                    //Slide up to close menu
                    menu.slideUp();
                    isActive = false;
                    btn.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left");
                    btn.parent("li").removeClass("active");
                } else {
                    //Slide down to open menu
                    menu.slideDown();
                    isActive = true;
                    btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
                    btn.parent("li").addClass("active");
                }
            });

            /* Add margins to submenu elements to give it a tree look */
            menu.find("li > a").each(function() {
                var pad = parseInt($(this).css("margin-left")) + 10;

                $(this).css({"margin-left": pad + "px"});
            });

        });

    };


}(jQuery));


/* CENTER ELEMENTS */
(function($) {
    "use strict";
    jQuery.fn.center = function(parent) {
        if (parent) {
            parent = this.parent();
        } else {
            parent = window;
        }
        this.css({
            "position": "absolute",
            "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
            "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
        });
        return this;
    }
}(jQuery));

  
