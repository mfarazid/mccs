class BowlerInInning < ActiveRecord::Base
  belongs_to :match
  belongs_to :team
  belongs_to :player

  validates_presence_of :match_id, :team_id 
  validates_presence_of :overs, :maiden_overs, :runs, :wickets, :if => Proc.new { |a| a.player.present? }

  def bowler_econ
    self.runs.to_f  / self.overs.to_f
  end
  
  def bowler_ave
    self.runs.to_f  / self.wickets.to_f 
  end
end
