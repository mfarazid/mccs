class Team < ActiveRecord::Base
  belongs_to :team_flag
  belongs_to :club
  belongs_to :user
  
  has_many :players, :dependent => :destroy
  accepts_nested_attributes_for :players, allow_destroy: true 

  has_many :matches, :class_name => "Match", :foreign_key => "team_a_id", :dependent => :destroy
  has_many :matches, :class_name => "Match", :foreign_key => "team_b_id", :dependent => :destroy
   
  validates_presence_of :name, :city, :team_flag, :club, :user_id

  def flag_and_name
    ActionController::Base.helpers.image_tag("teams/#{self.team_flag.file_name}", class: "flag_icon") + ' ' + self.name
  end

end
