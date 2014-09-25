class Player < ActiveRecord::Base
  belongs_to :team
  belongs_to :user
  belongs_to :player_type
  belongs_to :player_bowling_style
  
  validates_presence_of :name, :message => "required."
  validates_presence_of :player_type, :message => 'required.'
  validates_presence_of :player_batting_style, :message => "required."
  validates_presence_of :player_bowling_style, :message => 'required.'

  def age(dob)
    now = Time.now.utc.to_date
    now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end

end
