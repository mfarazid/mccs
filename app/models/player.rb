class Player < ActiveRecord::Base

  belongs_to :team
  belongs_to :user
  belongs_to :player_type
  belongs_to :player_bowling_style
  
  validates_presence_of :name, :player_type,:player_batting_style, :player_bowling_style, :date_of_birth
  
  has_attached_file :picture_url
  validates_attachment_content_type :picture_url, 
      :content_type => ["image/jpg", "image/jpeg", "image/png"]
  
  validates_attachment_size :picture_url, 
      :less_than => 2.megabytes, message: "File size must be less than 2 MB"
  
  def age(dob)
    now = Time.now.utc.to_date
    now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end

end
