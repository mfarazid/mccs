class Club < ActiveRecord::Base
  before_create
  belongs_to :club_flag
  belongs_to :user
  has_many :teams, :dependent => :destroy

  validates :name, presence: true, length: {in: 3..30}
  validates :county, presence: true, length: {in: 3..30}
  validates :club_flag_id, presence: true
end
