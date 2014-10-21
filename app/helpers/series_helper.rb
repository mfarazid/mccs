module SeriesHelper
  def link_to_add_match_fields(name, f, match)
    new_object = f.object.send(match).klass.new
    id = new_object.object_id
    fields = f.fields_for(match, new_object, child_index: id) do |builder|
      render(match.to_s.singularize + "_fields", f: builder)
    end
    link_to(name, '#', class: "add_match_fields btn btn-success", data: {id: id, fields: fields.gsub("\n", "")})
  end
end
