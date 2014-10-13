class Umpire < ActiveRecord::Base
  has_many :umpire_in_matches, :dependent => :destroy
  has_many :matches, through: :umpire_in_matches

  def name
    self.first_name + ' ' + self.last_name
  end
end
