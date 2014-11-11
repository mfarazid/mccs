$(document).ready(function() {
  addMask();
  
  function addMask() {
    // batting mask
    $('input[name*="minutes"]').mask('000');
    // $('input[name*="bt_runs"]').mask('000');
    $('input[name*="balls"]').mask('000');
    $('input[name*="fours"]').mask('00');
    $('input[name*="sixes"]').mask('00');
    // bowling mask
    $('input[name*="overs"]').mask('0Z.Z', {translation: {'Z': {pattern: /[0-6]/, optional: true}}});
    $('input[name*="maiden_overs"]').mask('0');
    $('input[name*="runs"]').mask('000');
    $('input[name*="wickets"]').mask('0');  
    // extras mask
    $('input[name*="bye"]').mask('00');
    $('input[name*="leg_bye"]').mask('00');
    $('input[name*="wide"]').mask('00');
    $('input[name*="no_ball"]').mask('00');
  }
  
  // client-side validation
  $('#scorecard').click(function() {

    //*************************************
    // Inning Batting batsman validation 
    //*************************************
    
    if ($('#match_batsman_in_innings_attributes_0_player_id')[0].selectedIndex <= 0 || $('#match_batsman_in_innings_attributes_1_player_id')[0].selectedIndex <= 0) {

      if ($('#match_batsman_in_innings_attributes_0_player_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_0_player_id').focus();
      }
      if ($('#match_batsman_in_innings_attributes_1_player_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_1_player_id').focus();
      }       
      
      Command: toastr.error("Please enter details for at least 2 batsman");
      return false;
    } 

    // batsman 1 fields validation.    
    if ($('#match_batsman_in_innings_attributes_0_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_0_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }

    if ($('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_0_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_0_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_0_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_0_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_0_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_0_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }


    if ($('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_0_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_0_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_0_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_0_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_0_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_0_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_0_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_0_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_0_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_0_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_0_sixes').focus();
        return false;
      }
         
    }

    // batsman 2 fields validation.
    if ($('#match_batsman_in_innings_attributes_1_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_1_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_1_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_1_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_1_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_1_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_1_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_1_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_1_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_1_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_1_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_1_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_1_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_1_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_1_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_1_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_1_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_1_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_1_sixes').focus();
        return false;
      }
         
    }

    // batsman 3 fields validation.
    if ($('#match_batsman_in_innings_attributes_2_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_2_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }

    if ($('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_2_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_2_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_2_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_2_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_2_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_2_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_2_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_2_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_2_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_2_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_2_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_2_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_2_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_2_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_2_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_2_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_2_sixes').focus();
        return false;
      }
         
    }

    // batsman 4 fields validation.
    if ($('#match_batsman_in_innings_attributes_3_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_3_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_3_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_3_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_3_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_3_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_3_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_3_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_3_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_3_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_3_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_3_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_3_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_3_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_3_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_3_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_3_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_3_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_3_sixes').focus();
        return false;
      }
         
    }

    // batsman 5 fields validation.    
    if ($('#match_batsman_in_innings_attributes_4_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_4_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_4_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_4_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_4_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_4_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_4_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_4_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_4_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_4_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_4_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_4_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_4_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_4_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_4_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_4_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_4_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_4_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_4_sixes').focus();
        return false;
      }
         
    }

    // batsman 6 fields validation.
    if ($('#match_batsman_in_innings_attributes_5_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_5_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_5_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_5_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_5_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_5_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_5_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_5_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_5_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_5_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_5_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_5_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_5_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_5_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_5_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_5_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_5_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_5_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_5_sixes').focus();
        return false;
      }
         
    }

    // batsman 7 fields validation.
    if ($('#match_batsman_in_innings_attributes_6_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_6_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_6_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_6_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_6_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_6_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_6_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_6_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_6_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_6_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_6_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_6_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_6_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_6_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_6_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_6_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_6_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_6_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_6_sixes').focus();
        return false;
      }
         
    }

    // batsman 8 fields validation.
    if ($('#match_batsman_in_innings_attributes_7_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_7_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_7_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_7_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_7_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_7_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_7_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_7_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_7_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_7_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_7_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_7_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_7_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_7_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_7_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_7_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_7_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_7_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_7_sixes').focus();
        return false;
      }
         
    }

    // batsman 9 fields validation.
    if ($('#match_batsman_in_innings_attributes_8_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_8_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_8_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_8_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_8_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_8_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_8_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_8_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_8_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_8_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_8_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_8_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_8_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_8_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_8_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_8_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_8_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_8_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_8_sixes').focus();
        return false;
      }
         
    }

    // batsman 10 fields validation.
    if ($('#match_batsman_in_innings_attributes_9_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_9_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }
    
    if ($('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_9_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_9_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_9_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_9_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_9_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_9_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_9_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_9_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_9_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_9_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_9_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_9_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_9_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_9_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_9_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_9_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_9_sixes').focus();
        return false;
      }
         
    }

    // batsman 11 fields validation.
    if ($('#match_batsman_in_innings_attributes_10_player_id')[0].selectedIndex > 0 && $('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex <= 0) {
      $('#match_batsman_in_innings_attributes_10_out_id').focus();
      Command: toastr.error("Please select out for the batsman");
      return false;        
    }

    if ($('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex == 1 )
    {
      if ($('#match_batsman_in_innings_attributes_10_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_10_out_fielder_id').focus();
        Command: toastr.error("Please select catcher name.");
        return false
      }
      if ($('#match_batsman_in_innings_attributes_10_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_10_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex == 4 ) 
    {
      if ($('#match_batsman_in_innings_attributes_10_out_fielder_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_10_out_fielder_id').focus();
        Command: toastr.error("Please select fielder name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex == 2 || 
      $('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex == 3 ||
      $('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex == 5 || 
      $('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex == 6 )
    {

      if ($('#match_batsman_in_innings_attributes_10_out_bowler_id')[0].selectedIndex <= 0) {
        $('#match_batsman_in_innings_attributes_10_out_bowler_id').focus();
        Command: toastr.error("Please select bowler name.");
        return false
      }
    }

    if ($('#match_batsman_in_innings_attributes_10_out_id')[0].selectedIndex > 0) {
      
      if ($('#match_batsman_in_innings_attributes_10_runs').val() == "" ) {
         
        Command: toastr.error("Please enter batsman runs");
        $('#match_batsman_in_innings_attributes_10_runs').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_10_balls').val() == "" ) {
         
        Command: toastr.error("Please enter batsman ball faced");
        $('#match_batsman_in_innings_attributes_10_balls').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_10_fours').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 4's");
        $('#match_batsman_in_innings_attributes_10_fours').focus();
        return false;
      }
      if ($('#match_batsman_in_innings_attributes_10_sixes').val() == "" ) {
         
        Command: toastr.error("Please enter batsman score 6's");
        $('#match_batsman_in_innings_attributes_10_sixes').focus();
        return false;
      }
         
    }

    //*************************************
    // Inning bowling bowler validation 
    //*************************************                                       
    
    if ($('#match_bowler_in_innings_attributes_0_player_id')[0].selectedIndex <= 0 || $('#match_bowler_in_innings_attributes_1_player_id')[0].selectedIndex <= 0) {

      if ($('#match_bowler_in_innings_attributes_0_player_id')[0].selectedIndex <= 0) {
        $('#match_bowler_in_innings_attributes_0_player_id').focus();
      }
      if ($('#match_bowler_in_innings_attributes_1_player_id')[0].selectedIndex <= 0) {
        $('#match_bowler_in_innings_attributes_1_player_id').focus();
      }       
      
      Command: toastr.error("Please enter details for at least 2 bowler");
      return false;
    }

    // bowler 1 fields validation.
    if ($('#match_bowler_in_innings_attributes_0_player_id')[0].selectedIndex > 0) {
      
      if ($('#match_bowler_in_innings_attributes_0_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler overs");
        $('#match_bowler_in_innings_attributes_0_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_0_maiden_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler maiden overs");
        $('#match_bowler_in_innings_attributes_0_maiden_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_0_runs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler runs");
        $('#match_bowler_in_innings_attributes_0_runs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_0_wickets').val() == "" ) {
         
        Command: toastr.error("Please enter bowler wickets taken");
        $('#match_bowler_in_innings_attributes_0_wickets').focus();
        return false;
      }
         
    }

    // bowler 2 fields validation.
    if ($('#match_bowler_in_innings_attributes_1_player_id')[0].selectedIndex > 0) {
      
      if ($('#match_bowler_in_innings_attributes_1_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler overs");
        $('#match_bowler_in_innings_attributes_1_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_1_maiden_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler maiden overs");
        $('#match_bowler_in_innings_attributes_1_maiden_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_1_runs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler runs");
        $('#match_bowler_in_innings_attributes_1_runs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_1_wickets').val() == "" ) {
         
        Command: toastr.error("Please enter bowler wickets taken");
        $('#match_bowler_in_innings_attributes_1_wickets').focus();
        return false;
      }
         
    }

    // bowler 3 fields validation.
    if ($('#match_bowler_in_innings_attributes_2_player_id')[0].selectedIndex > 0) {
      
      if ($('#match_bowler_in_innings_attributes_2_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler overs");
        $('#match_bowler_in_innings_attributes_2_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_2_maiden_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler maiden overs");
        $('#match_bowler_in_innings_attributes_2_maiden_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_2_runs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler runs");
        $('#match_bowler_in_innings_attributes_2_runs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_2_wickets').val() == "" ) {
         
        Command: toastr.error("Please enter bowler wickets taken");
        $('#match_bowler_in_innings_attributes_2_wickets').focus();
        return false;
      }
         
    }

    // bowler 4 fields validation.
    if ($('#match_bowler_in_innings_attributes_3_player_id')[0].selectedIndex > 0) {
      
      if ($('#match_bowler_in_innings_attributes_3_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler overs");
        $('#match_bowler_in_innings_attributes_3_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_3_maiden_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler maiden overs");
        $('#match_bowler_in_innings_attributes_3_maiden_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_3_runs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler runs");
        $('#match_bowler_in_innings_attributes_3_runs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_3_wickets').val() == "" ) {
         
        Command: toastr.error("Please enter bowler wickets taken");
        $('#match_bowler_in_innings_attributes_3_wickets').focus();
        return false;
      }
         
    }

    // bowler 5 fields validation.
    if ($('#match_bowler_in_innings_attributes_4_player_id')[0].selectedIndex > 0) {
      
      if ($('#match_bowler_in_innings_attributes_4_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler overs");
        $('#match_bowler_in_innings_attributes_4_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_4_maiden_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler maiden overs");
        $('#match_bowler_in_innings_attributes_4_maiden_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_4_runs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler runs");
        $('#match_bowler_in_innings_attributes_4_runs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_4_wickets').val() == "" ) {
         
        Command: toastr.error("Please enter bowler wickets taken");
        $('#match_bowler_in_innings_attributes_4_wickets').focus();
        return false;
      }
         
    }

    // bowler 6 fields validation.
    if ($('#match_bowler_in_innings_attributes_5_player_id')[0].selectedIndex > 0) {
      
      if ($('#match_bowler_in_innings_attributes_5_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler overs");
        $('#match_bowler_in_innings_attributes_5_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_5_maiden_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler maiden overs");
        $('#match_bowler_in_innings_attributes_5_maiden_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_5_runs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler runs");
        $('#match_bowler_in_innings_attributes_5_runs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_5_wickets').val() == "" ) {
         
        Command: toastr.error("Please enter bowler wickets taken");
        $('#match_bowler_in_innings_attributes_5_wickets').focus();
        return false;
      }
         
    }

    // bowler 7 fields validation.
    if ($('#match_bowler_in_innings_attributes_6_player_id')[0].selectedIndex > 0) {
      
      if ($('#match_bowler_in_innings_attributes_6_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler overs");
        $('#match_bowler_in_innings_attributes_6_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_6_maiden_overs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler maiden overs");
        $('#match_bowler_in_innings_attributes_6_maiden_overs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_6_runs').val() == "" ) {
         
        Command: toastr.error("Please enter bowler runs");
        $('#match_bowler_in_innings_attributes_6_runs').focus();
        return false;
      }
      if ($('#match_bowler_in_innings_attributes_6_wickets').val() == "" ) {
         
        Command: toastr.error("Please enter bowler wickets taken");
        $('#match_bowler_in_innings_attributes_6_wickets').focus();
        return false;
      }
         
    }                    
    //*************************************
    // Inning bowling extras validation 
    //************************************* 

    if ($('#match_innings_attributes_0_extras_bye').val() == "" ) {
       
      Command: toastr.error("Please enter extras bye");
      $('#match_innings_attributes_0_extras_bye').focus();
      return false;
    }
    if ($('#match_innings_attributes_0_extras_leg_bye').val() == "" ) {
       
      Command: toastr.error("Please enter extras leg bye");
      $('#match_innings_attributes_0_extras_leg_bye').focus();
      return false;
    }
    if ($('#match_innings_attributes_0_extras_wide').val() == "" ) {
       
      Command: toastr.error("Please enter extras wide");
      $('#match_innings_attributes_0_extras_wide').focus();
      return false;
    }
    if ($('#match_innings_attributes_0_extras_no_ball').val() == "" ) {
       
      Command: toastr.error("Please enter extras no ball");
      $('#match_innings_attributes_0_extras_no_ball').focus();
      return false;
    }

  });

});