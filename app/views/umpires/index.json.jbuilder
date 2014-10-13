json.array!(@umpires) do |umpire|
  json.extract! umpire, :id, :first_name, :last_name
  json.url umpire_url(umpire, format: :json)
end
