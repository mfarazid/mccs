json.array!(@series) do |series|
  json.extract! series, :id, :name, :start_date, :end_date
  json.url series_url(series, format: :json)
end
