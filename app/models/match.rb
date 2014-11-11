class Match < ActiveRecord::Base
  belongs_to :competition_type
  belongs_to :competition_overs_limit
  belongs_to :series

  belongs_to :team_a, :class_name => "Team"
  belongs_to :team_b, :class_name => "Team"

  belongs_to :user
  belongs_to :venue

  has_many :inning_extras, :dependent => :destroy
  accepts_nested_attributes_for :inning_extras, allow_destroy: true

  has_many :batsman_in_innings, :dependent => :destroy
  accepts_nested_attributes_for :batsman_in_innings, allow_destroy: true,
    reject_if: proc { |attributes| attributes['player_id'].blank? } 
  
  has_many :bowler_in_innings, :dependent => :destroy
  accepts_nested_attributes_for :bowler_in_innings, allow_destroy: true, 
    reject_if: proc { |attributes| attributes['player_id'].blank? } 

  has_many :umpires_in_matches, :dependent => :destroy
  has_many :umpires, through: :umpires_in_matches

  validates_presence_of :team_a_id, :team_b_id, :competition_type_id, :competition_overs_limit_id, 
        :team_won_toss, :team_choose_to, on: :create

  def total_runs(team)
    runs = BatsmanInInning.where(:match_id => self.id, :team_id => team).sum("runs")
    extra_runs = InningExtra.find_by(:match_id => self.id, :team_id => team).total_extras
    total_runs = (runs + extra_runs)
  end
  
  def total_outs(team)
    BatsmanInInning.where("match_id = #{self.id} and team_id = #{team} and out_id != 7").count
  end 
  
  def total_overs(team)
    BowlerInInning.where(:match_id => self.id, :team_id => team).sum("overs")
  end 
end
