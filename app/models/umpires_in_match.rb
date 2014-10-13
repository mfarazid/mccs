class UmpiresInMatch < ActiveRecord::Base
  belongs_to :match
  belongs_to :umpire
end
