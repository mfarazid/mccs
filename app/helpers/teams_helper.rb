module TeamsHelper
  def link_to_add_fields(name, f, player)
    new_object = f.object.send(player).klass.new
    id = new_object.object_id
    fields = f.fields_for(player, new_object, child_index: id) do |builder|
      render(player.to_s.singularize + "_fields", f: builder)
    end
    link_to(name, '#', class: "add_fields btn btn-success", data: {id: id, fields: fields.gsub("\n", "")})
  end
end
