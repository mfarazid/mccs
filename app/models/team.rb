class Team < ActiveRecord::Base
  belongs_to :team_flag
  belongs_to :club
  belongs_to :user
  
  has_many :players, :dependent => :destroy
  accepts_nested_attributes_for :players, allow_destroy: true

  validates_presence_of :name, :city, :team_flag, :club, :user_id
end
