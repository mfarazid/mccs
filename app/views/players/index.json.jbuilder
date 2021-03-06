json.array!(@players) do |player|
  json.extract! player, :id, :name, :player_batting_style, :best_performance, :worst_performance, :picturl_url, :team_id, :user_id, :player_type_id, :player_blowing_style_id, :date_of_birth, :odi_debut, :test_debut, :t20_debut
  json.url player_url(player, format: :json)
end
