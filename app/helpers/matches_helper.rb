module MatchesHelper

  def Inning match, team
    if InningExtra.where(:match_id => match, :team_id => team).present? 
       true
    else
      false   
    end
  end

  def Summary match, team
    match = Match.find(match)
    number_with_precision(total_runs(match.id, team), precision: 0) + "/#{total_outs(match.id, team)}" +
     " #{total_overs(match.id, team)} overs"
  end

  def total_runs match, team
    runs = BatsmanInInning.where(:match_id => match, :team_id => team).sum("runs")
    extra_runs = InningExtra.find_by(:match_id => match, :team_id => team).total_extras
    total_runs = runs + extra_runs
  end
  
  def total_outs match, team
    BatsmanInInning.where("match_id = #{match} and team_id = #{team} and out_id != 7").count
  end 
  
  def total_overs match, team
    BowlerInInning.where(:match_id => match, :team_id => team).sum("overs")
  end

end