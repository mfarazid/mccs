json.array!(@clubs) do |club|
  json.extract! club, :id, :name, :county, :flag_url, :club_flag_id, :user_id
  json.url club_url(club, format: :json)
end
