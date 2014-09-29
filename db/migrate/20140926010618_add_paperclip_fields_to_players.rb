class AddPaperclipFieldsToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :picture_url_file_name,    :string
    add_column :players, :picture_url_content_type, :string
    add_column :players, :picture_url_file_size,    :integer
    add_column :players, :picture_url_updated_at,   :datetime
  end
end
