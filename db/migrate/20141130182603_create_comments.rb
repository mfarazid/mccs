class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author_name
      t.string :email
      t.text :content
      t.integer :player_id

      t.timestamps
    end
  end
end
