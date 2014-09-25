require 'csv'
Club.destroy_all
Team.destroy_all
ClubFlag.destroy_all
TeamFlag.destroy_all
Player.destroy_all
PlayerType.destroy_all
PlayerBowlingStyle.destroy_all
##################################
# Flags
##################################
puts "Importing Club_Flags..."
CSV.foreach(Rails.root.join('db', "club-flags.csv"), headers: true) do |row|
  ClubFlag.create! do |image|
    image.name = row[0]
    image.file_name = row[1]
  end
end

puts "Importing Team_Flags..."
CSV.foreach(Rails.root.join('db', "team-flags.csv"), headers: true) do |row|
  TeamFlag.create! do |image|
    image.name = row[0]
    image.file_name = row[1]
  end
end

##################################
# Player_types
##################################
[
  "All-rounder",
  "Bowler",
  "Batsman",
  "Wicket-Keeper"
].each do |player_type|
  pt = PlayerType.find_or_create_by_name(:name => player_type)
end
##################################
# Bowling_styles
##################################
[
  "Right-arm fast",
  "Left-arm fast",
  "Right-arm medium fast",
  "Left-arm medium fast",
  "Right-arm top spin",
  "Left-arm top spin",
  "Right-arm orthodox spin",
  "Left-arm orthodox spin",
  "Right-arm leg spin",
  "Left-arm leg spin",
  "Right-arm off spin",
  "Left-arm off spin",
  "N/A"

].each do |bowling_style|
  role = PlayerBowlingStyle.find_or_create_by_name(:name => bowling_style)
end