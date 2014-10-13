json.array!(@matches) do |match|
  json.extract! match, :id, :team_a_id, :team_b_id, :series_id, :competition_type_id, :venue_id, :team_won_toss, :team_choose_to, :start_date_time, :end_date_time, :competition_overs_limit_id, :user_id
  json.url match_url(match, format: :json)
end
