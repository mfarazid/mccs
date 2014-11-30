module MatchesHelper

  def Inning match, team
    if InningExtra.where(:match_id => match, :team_id => team).present? 
       true
    else
      false   
    end
  end

  def Summary match, team
    number_with_precision(total_runs(match, team), precision: 0) + "/#{total_outs(match, team)}"
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

  def run_rate match, teamA, teamB
    total_runs(match, teamA).to_f/total_overs(match, teamB).to_f
  end

  def Results match, teamA, teamB
    @match = Match.find(match)

    if @match.team_won_toss == @match.team_a.name && @match.team_choose_to == "Batting First"
      if total_runs(@match.id, teamA) > total_runs(@match.id, teamB)
        runs_won_by = total_runs(@match.id, teamA) - total_runs(@match.id, teamB)
        result = "#{@match.team_a.name} won by #{number_with_precision(runs_won_by, precision: 0)} runs"
      elsif total_runs(@match.id, teamB) > total_runs(@match.id, teamA)
        wickets_won_by = 10 - total_outs(@match.id, teamB)
        result = "#{@match.team_b.name} won by #{wickets_won_by} wickets"
      end       
    elsif @match.team_won_toss == @match.team_a.name && @match.team_choose_to == "Bowling First"
      if total_runs(@match.id, teamA) > total_runs(@match.id, teamB)
        wickets_won_by = 10 - total_outs(@match.id, teamA)
        result = "#{@match.team_a.name} won by #{wickets_won_by} wickets"
      elsif total_runs(@match.id, teamB) > total_runs(@match.id, teamA)
        runs_won_by = total_runs(@match.id, teamB) - total_runs(@match.id, teamA)
        result = "#{@match.team_b.name} won by #{number_with_precision(runs_won_by, precision: 0)} runs"      
      end      
    elsif @match.team_won_toss == @match.team_b.name && @match.team_choose_to == "Batting First"
      if total_runs(@match.id, teamB) > total_runs(@match.id, teamA)
        runs_won_by = total_runs(@match.id, teamB) - total_runs(@match.id, teamA)
        result = "#{@match.team_b.name} won by #{number_with_precision(runs_won_by, precision: 0)} runs"
      elsif total_runs(@match.id, teamA) > total_runs(@match.id, teamB)
        wickets_won_by = 10 - total_outs(@match.id, teamA)
        result = "#{@match.team_a.name} won by #{wickets_won_by} wickets"
      end
    elsif @match.team_won_toss == @match.team_b.name && @match.team_choose_to == "Bowling First"
      if total_runs(@match.id, teamB) > total_runs(@match.id, teamA)
        wickets_won_by = 10 - total_outs(@match.id, teamB)
        result = "#{@match.team_b.name} won by #{wickets_won_by} wickets"
      elsif total_runs(@match.id, teamA) > total_runs(@match.id, teamB)
        runs_won_by = total_runs(@match.id, teamA) - total_runs(@match.id, teamB)
        result = "#{@match.team_a.name} won by #{number_with_precision(runs_won_by, precision: 0)} runs"
      end  
    end

  end  
end