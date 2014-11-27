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
//= require pickadate/picker 
//= require pickadate/picker.date
//= require pickadate/picker.time 
//= require jquery_nested_form
//= require icheck
//= require bootstrapValidator.min
//= require bootstrapValidatorRails
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

  // $('form').on('click', '.remove_fields', function(event) {
  //   $(this).prev('input[type=hidden]').val('1');
  //   $(this).closest('section').hide();
  //   event.preventDefault();
  // });

  // $('form').on('click', '.add_fields', function(event) {
  //   var regexp, time;
  //   time = new Date().getTime();
  //   regexp = new RegExp($(this).data('id'), 'g');
  //   $(this).before($(this).data('fields').replace(regexp, time));
  //   event.preventDefault();
  // });
  
  if ($('.odi_datepicker').length) {
    var maxYear = new Date().getFullYear();
    var maxMonth = new Date().getMonth()+1;
    var maxDay = new Date().getDay();    
    var minYear = new Date().getFullYear()-10;
    $('.odi_datepicker').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      selectYears: 10,
      min: [minYear,1,1],
      max: [maxYear,maxMonth,maxDay],
      onStart: function() {
        if ($('.odi_datepicker').val() !== "") {
          var year = parseInt($('.odi_datepicker').val().substr(0, 4), 10);
          var month = parseInt($('.odi_datepicker').val().substr(5, 2), 10);
          var day = parseInt($('.odi_datepicker').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('.odi_datepicker').val(formattedDate);    
        }
      }
    });
  }

  if ($('.test_datepicker').length) {
    var maxYear = new Date().getFullYear();
    var maxMonth = new Date().getMonth()+1;
    var maxDay = new Date().getDay();    
    var minYear = new Date().getFullYear()-10;
    $('.test_datepicker').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      selectYears: 10,
      min: [minYear,1,1],
      max: [maxYear,maxMonth,maxDay],
      onStart: function() {
        if ($('.test_datepicker').val() !== "") {
          var year = parseInt($('.test_datepicker').val().substr(0, 4), 10);
          var month = parseInt($('.test_datepicker').val().substr(5, 2), 10);
          var day = parseInt($('.test_datepicker').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('.test_datepicker').val(formattedDate);    
        }
      }
    });
  }

  if ($('.t20_datepicker').length) {
    var maxYear = new Date().getFullYear();
    var maxMonth = new Date().getMonth()+1;
    var maxDay = new Date().getDay();    
    var minYear = new Date().getFullYear()-10;
    $('.t20_datepicker').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      selectYears: 10,
      min: [minYear,1,1],
      max: [maxYear,maxMonth,maxDay],
      onStart: function() {
        if ($('.t20_datepicker').val() !== "") {
          var year = parseInt($('.t20_datepicker').val().substr(0, 4), 10);
          var month = parseInt($('.t20_datepicker').val().substr(5, 2), 10);
          var day = parseInt($('.t20_datepicker').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('.t20_datepicker').val(formattedDate);    
        }
      }
    });
  }

  if ($('.dob_datepicker').length) {
    var maxYear= new Date().getFullYear()-10;
    var minYear= new Date().getFullYear()-40;
    $('.dob_datepicker').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      selectYears: 40,
      min: [minYear,1,1],
      max: [maxYear,1,1],
      onStart: function() {
        if ($('.dob_datepicker').val() !== "") {
          var year = parseInt($('.dob_datepicker').val().substr(0, 4), 10);
          var month = parseInt($('.dob_datepicker').val().substr(5, 2), 10);
          var day = parseInt($('.dob_datepicker').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('.dob_datepicker').val(formattedDate);    
        }
      }
    });
  }  

  if ($('#series_start_date').length) {
    $('#series_start_date').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      onStart: function() {
        if ($('#series_start_date').val() !== "") {
          var year = parseInt($('#series_start_date').val().substr(0, 4), 10);
          var month = parseInt($('#series_start_date').val().substr(5, 2), 10);
          var day = parseInt($('#series_start_date').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('#series_start_date').val(formattedDate);    
        }
      }
    });
  } 

  if ($('#series_end_date').length) {
    $('#series_end_date').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      onStart: function() {
        if ($('#series_end_date').val() !== "") {
          var year = parseInt($('#series_end_date').val().substr(0, 4), 10);
          var month = parseInt($('#series_end_date').val().substr(5, 2), 10);
          var day = parseInt($('#series_end_date').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('#series_end_date').val(formattedDate);    
        }
      }
    });
  }

  if ($('#match_start_date').length) {
    $('#match_start_date').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      onStart: function() {
        if ($('#match_start_date').val() !== "") {
          var year = parseInt($('#match_start_date').val().substr(0, 4), 10);
          var month = parseInt($('#match_start_date').val().substr(5, 2), 10);
          var day = parseInt($('#match_start_date').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('#match_start_date').val(formattedDate);    
        }
      }
    });
  }

  if ($('#match_end_date').length) {
    $('#match_end_date').pickadate({
      // Escape any “rule” characters with an exclamation mark (!).
      format: 'mmmm dd, yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenPrefix: 'prefix__',
      hiddenSuffix: '__suffix',
      selectYears: true,
      selectMonths: true,
      onStart: function() {
        if ($('#match_end_date').val() !== "") {
          var year = parseInt($('#match_end_date').val().substr(0, 4), 10);
          var month = parseInt($('#match_end_date').val().substr(5, 2), 10);
          var day = parseInt($('#match_end_date').val().substr(8, 2), 10);
          //months are zero indexed
          formattedDate = moment(new Date(year,month-1,day)).format('LL');
          $('#match_end_date').val(formattedDate);    
        }
      }
    });
  }
  $('#clubs').dataTable();
  $('#teams').dataTable();
  $('#series').dataTable();
  $('#matches').dataTable();
  $('#players').dataTable();
  $('#umpires').dataTable();
  $('#venues').dataTable();

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
      $('#club_flag').attr('src', "/assets/clubs/default-club.png");
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
      $('#team_flag').attr('src', "/assets/teams/default-team.png");
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

  // Venues DataTable search box modification
  $('#venues_filter label').css("color", "white" );
  $('#venues_filter label input').css('width', '130px');
  $('#venues_filter label input').attr('placeholder', 'Search');

  // Umpires DataTable search box modification
  $('#umpires_filter label').css("color", "white" );
  $('#umpires_filter label input').css('width', '130px');
  $('#umpires_filter label input').attr('placeholder', 'Search');

  // Series DataTable search box modification
  $('#series_filter label').css("color", "white" );
  $('#series_filter label input').css('width', '130px');
  $('#series_filter label input').attr('placeholder', 'Search');

  // Players DataTable search box modification
  $('#players_filter label').css("color", "white" );
  $('#players_filter label input').css('width', '130px');
  $('#players_filter label input').attr('placeholder', 'Search');

  $("#match_team_a_id").change(function(e) {
    var teamA = $("#match_team_a_id :selected").text();
    var tossA = $("#match_team_won_toss option:eq(1)");
    if (tossA.text() != teamA) {
      tossA.text(teamA);
      tossA.val(teamA);
    }
    var teamID = $("#match_team_a_id :selected").val();
    $.ajax({
        Default: "GET",
        dataType: "json",
        url: "/teams/"+teamID,
        success: function(data){
          var flagID = data.team_flag_id;
          if (flagID > 0) {
            $.ajax({
                Default: "GET",
                dataType: "json",
                url: "/team_flags/"+flagID,
                success: function(data){
                  var newPic = data.file_name;
                  $('#teamA').attr('src', "/assets/teams/"+newPic);
                }
            });
          }  
          else {
            $('#teamA').attr('src', "/assets/teams/default-team.png");
          }  
        }
    });   
          
  });

  $("#match_team_b_id").change(function(e) {
    var teamB = $("#match_team_b_id :selected").text();
    var tossB = $("#match_team_won_toss option:eq(2)");
    if (tossB.text() != teamA) {
      tossB.text(teamB);
      tossB.val(teamB);
    }
    var teamID = $("#match_team_b_id :selected").val();
    $.ajax({
        Default: "GET",
        dataType: "json",
        url: "/teams/"+teamID,
        success: function(data){
          var flagID = data.team_flag_id;
          if (flagID > 0) {
            $.ajax({
                Default: "GET",
                dataType: "json",
                url: "/team_flags/"+flagID,
                success: function(data){
                  var newPic = data.file_name;
                  $('#teamB').attr('src', "/assets/teams/"+newPic);
                }
            });
          }  
          else {
            $('#teamB').attr('src', "/assets/teams/default-team.png");
          }  
        }
    });   
          
  });
  
  $("#match_competition_type_id").change(function(){          
    var value = $(this).find('option:selected').text();
    
    switch (value) {
        case "One Day":
            $('#match_competition_overs_limit_id option').filter(function () { 
              if ($(this).html() == "50") {
                $("#match_competition_overs_limit_id option").removeAttr('disabled');
                $(this).prop('selected', true);
              } 
            });            
            break;
        case "T20":
            $('#match_competition_overs_limit_id option').filter(function () { 
              if ($(this).html() == "20") {
                $(this).prop('selected', true);
              } else {
                $(this).attr('disabled','disabled');
              }
            });            
            break;
        case "Test 3 Days":
            $('#match_competition_overs_limit_id option').filter(function () { 
              if ($(this).html() == "Unlimited") {
                $(this).prop('selected', true);
              } else {
                $(this).attr('disabled','disabled');
              }
            });            
            break;
        case "Test 5 Days":
            $('#match_competition_overs_limit_id option').filter(function () { 
              if ($(this).html() == "Unlimited") {
                $(this).prop('selected', true);
              } else {
                $(this).attr('disabled','disabled');
              }
            });            
            break;
        default:
            $("#match_competition_overs_limit_id option").removeAttr('disabled');
    }
    
  });
  // $('input[type="checkbox"]').each(function() {
  //   $(this).attr('data-skin',"square");
  //   $(this).attr('data-color',"green");
  //   $(this).addClass('icheck-me');
  // });
  // // Initialize icheck function
  // icheck();
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
    $(function(){
      $('a[title]').tooltip();
    });
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

/* iCkeck Checkboxes and Radiobuttons */
function icheck(){
  if($(".icheck-me").length > 0){
    $(".icheck-me").each(function(){
      var $el = $(this);
      var skin = ($el.attr('data-skin') !== undefined) ? "_" + $el.attr('data-skin') : "",
      color = ($el.attr('data-color') !== undefined) ? "-" + $el.attr('data-color') : "";
      var opt = {
        checkboxClass: 'icheckbox' + skin + color,
        radioClass: 'iradio' + skin + color,
        increaseArea: '10%',
      }
      $el.iCheck(opt);
    });
  }
}