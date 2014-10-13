class Match < ActiveRecord::Base
  belongs_to :competition_type
  belongs_to :competition_overs_limit
  belongs_to :series

  belongs_to :team_a, :class_name => "Team"
  belongs_to :team_b, :class_name => "Team"

  belongs_to :user
  belongs_to :venue
end
