module PlayersHelper
  #****************
  #  T20 Deatails
  #****************   
  def t20_best_batting player
    runs = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                          .select("MAX(batsman_in_innings.runs) as runs")
                          .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 2").first.runs    
    if runs
      balls = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                             .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 2
                                     and batsman_in_innings.runs = #{runs}").first.balls
      best_batting = "#{runs} runs of #{balls} balls"
    end
  end
  
  def t20_best_bowling player
    wickets = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                            .select("MAX(bowler_in_innings.wickets) as wickets")
                            .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2").first.wickets
    if wickets
      runs = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                           .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2
                                   and bowler_in_innings.wickets = #{wickets}").first.runs
      overs = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                            .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2
                                   and bowler_in_innings.wickets = #{wickets}").first.overs.to_f
      best_bowling = "#{wickets} wickets and #{runs} runs in #{overs} overs"
    end
  end

  def t20_matches player
    bt_ct = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                           .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 2").count
    if (bt_ct == 0) 
      bl_ct = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                            .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2").count
    else
      bt_ct
    end
  end
  
  def t20_bt_innings player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 2").count
  end
  

  def t20_bt_runs player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 2")
                   .sum("batsman_in_innings.runs")  
  end
  
  def t20_bt_not_out player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 2 
                           and batsman_in_innings.out_id = 7").count
  end
  
  def t20_bt_average player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 2")
                   .average("runs").to_f
  end    

  def t20_bl_innings player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2").count
  end
  
  def t20_bl_runs player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2")
                  .sum("bowler_in_innings.runs")  
  end
      
  def t20_bl_balls player
    ov = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2")
                  .sum("bowler_in_innings.overs").round  
    balls = ov * 6              
  end
  
  def t20_bl_wickets player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 2")
                  .sum("bowler_in_innings.wickets")  
  end

  #****************
  # ODI Deatails
  #**************** 

  def odi_best_batting player
    runs = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                          .select("MAX(batsman_in_innings.runs) as runs")
                          .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 1").first.runs    
    if runs
      balls = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                           .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 1
                                   and batsman_in_innings.runs = #{runs}").first.balls
      best_batting = "#{runs} runs of #{balls} balls"
    end  
  end
  
  def odi_best_bowling player
    wickets = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                            .select("MAX(bowler_in_innings.wickets) as wickets")
                            .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1").first.wickets
    if wickets
      runs = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                         .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1
                                 and bowler_in_innings.wickets = #{wickets}").first.runs
      overs = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                          .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1
                                 and bowler_in_innings.wickets = #{wickets}").first.overs.to_f
      best_bowling = "#{wickets} wickets and #{runs} runs in #{overs} overs"
    end  
  end

  def odi_matches player
    bt_ct = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                           .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 1").count
    if (bt_ct == 0) 
      bl_ct = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                            .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1").count
    else
      bt_ct
    end
  end
  
  def odi_bt_innings player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 1").count
  end
  

  def odi_bt_runs player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 1")
                   .sum("batsman_in_innings.runs")  
  end
  
  def odi_bt_not_out player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 1 
                           and batsman_in_innings.out_id = 7").count
  end
  
  def odi_bt_average player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id = 1")
                   .average("runs").to_f
  end    

  def odi_bl_innings player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1").count
  end
  
  def odi_bl_runs player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1")
                  .sum("bowler_in_innings.runs")  
  end
      
  def odi_bl_balls player
    ov = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1")
                  .sum("bowler_in_innings.overs").round  
    balls = ov * 6              
  end
  
  def odi_bl_wickets player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id = 1")
                  .sum("bowler_in_innings.wickets")  
  end 

  #****************
  # Test Deatails
  #**************** 

  def test_best_batting player
    runs = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                          .select("MAX(batsman_in_innings.runs) as runs")
                          .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')").first.runs    
    if runs
      balls = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                           .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')
                                   and batsman_in_innings.runs = #{runs}").first.balls
      best_batting = "#{runs} runs of #{balls} balls"
    end  
  end
  
  def test_best_bowling player
    wickets = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                            .select("MAX(bowler_in_innings.wickets) as wickets")
                            .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')").first.wickets
    if wickets
      runs = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                         .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')
                                 and bowler_in_innings.wickets = #{wickets}").first.runs
      overs = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                          .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')
                                 and bowler_in_innings.wickets = #{wickets}").first.overs.to_f
      best_bowling = "#{wickets} wickets and #{runs} runs in #{overs} overs"
    end
  end

  def test_matches player
    bt_ct = BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                           .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')").count
    if (bt_ct == 0) 
      bl_ct = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                            .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')").count
    else
      bt_ct
    end
  end
  
  def test_bt_innings player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')").count
  end
  

  def test_bt_runs player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')")
                   .sum("batsman_in_innings.runs")  
  end
  
  def test_bt_not_out player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4') 
                           and batsman_in_innings.out_id = 7").count
  end
  
  def test_bt_average player
    BatsmanInInning.joins("Inner join matches on matches.id = batsman_in_innings.match_id")
                   .where("batsman_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')")
                   .average("runs").to_f
  end    

  def test_bl_innings player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')").count
  end
  
  def test_bl_runs player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')")
                  .sum("bowler_in_innings.runs")  
  end
      
  def test_bl_balls player
    ov = BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')")
                  .sum("bowler_in_innings.overs").round  
    balls = ov * 6              
  end
  
  def test_bl_wickets player
    BowlerInInning.joins("Inner join matches on matches.id = bowler_in_innings.match_id")
                  .where("bowler_in_innings.player_id = #{player} and matches.competition_type_id in ('3','4')")
                  .sum("bowler_in_innings.wickets")  
  end 
end
