class Club < ActiveRecord::Base
  before_create
  belongs_to :club_flag
  belongs_to :user
  has_many :teams, :dependent => :destroy

  validates_presence_of :name, :county, :club_flag_id
end
