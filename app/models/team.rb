class Team < ActiveRecord::Base
  belongs_to :team_flag
  belongs_to :club
  belongs_to :user

  validates_presence_of :name, :city, :team_flag, :club, :user_id
end
