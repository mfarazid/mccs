class CompetitionType < ActiveRecord::Base
  has_many :matches
end
