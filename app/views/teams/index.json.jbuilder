json.array!(@teams) do |team|
  json.extract! team, :id, :name, :city, :flag_url, :team_flag_id, :user_id, :club_id
  json.url team_url(team, format: :json)
end
