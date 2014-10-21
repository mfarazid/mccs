class Venue < ActiveRecord::Base
  has_many :matches

  def name_with_details
    self.name + ' ('+ self.city + ', ' + self.county_or_state + ', '+ self.country + ') ' 
  end

  validates :name, presence: true, length: {in: 3..30}
  validates :city, presence: true, length: {in: 3..30}  
  validates :county_or_state, presence: true, length: {in: 3..30}
  validates :country, presence: true, length: {in: 3..30}

end
