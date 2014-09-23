require 'csv'
ClubFlag.destroy_all
TeamFlag.destroy_all
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