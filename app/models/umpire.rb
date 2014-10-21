class Umpire < ActiveRecord::Base
  has_many :umpires_in_matches, :dependent => :destroy
  has_many :matches, through: :umpires_in_matches

  def name
    self.first_name + ' ' + self.last_name
  end

  validates :first_name, presence: true, length: {in: 3..30}
  validates :last_name, presence: true, length: {in: 3..30}
end
