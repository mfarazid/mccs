class InningExtra < ActiveRecord::Base
  belongs_to :match
  belongs_to :team
  has_many :batsman_in_innings
  has_many :bowler_in_innings

  validates_presence_of :team, :bye, :leg_bye, :wide, :no_ball, :message => "required"

  def total_extras
    self.bye + self.leg_bye + self.wide + self.no_ball
  end
  def extras_details
    "( b - " + self.bye.to_s + " lb - " + self.leg_bye.to_s + " w - " + self.wide.to_s + " nb - " + self.no_ball.to_s + " )"
  end

end
