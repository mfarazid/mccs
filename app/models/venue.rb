class Venue < ActiveRecord::Base
  has_many :matches

  def name_with_details
    self.name + ' ('+ self.city + ', ' + self.county_or_state + ', '+ self.country + ') ' 
  end
end
