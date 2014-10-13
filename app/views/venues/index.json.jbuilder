json.array!(@venues) do |venue|
  json.extract! venue, :id, :name, :address, :city, :county_or_state, :country
  json.url venue_url(venue, format: :json)
end
