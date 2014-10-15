class Match < ActiveRecord::Base
  belongs_to :competition_type
  belongs_to :competition_overs_limit
  belongs_to :series

  belongs_to :team_a, :class_name => "Team"
  belongs_to :team_b, :class_name => "Team"

  belongs_to :user
  belongs_to :venue

  has_many :umpires_in_matches, :dependent => :destroy
  has_many :umpires, through: :umpires_in_matches

  validates_presence_of :team_a_id, :team_b_id, :competition_type_id, :competition_overs_limit_id, 
        :team_won_toss, :team_choose_to 
end
