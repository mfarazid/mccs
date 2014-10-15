class Series < ActiveRecord::Base
  has_many :matches, :dependent => :destroy
  accepts_nested_attributes_for :matches, allow_destroy: true

  validates_presence_of :name, :start_date, :end_date
end
