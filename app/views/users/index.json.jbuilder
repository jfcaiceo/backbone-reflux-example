json.array!(@users) do |user|
  json.extract! user, :id, :name, :type, :photo, :description
end
