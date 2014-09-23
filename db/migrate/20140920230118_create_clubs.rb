class CreateClubs < ActiveRecord::Migration
  def change
    create_table :clubs do |t|
      t.string :name
      t.string :county
      t.integer :club_flag_id
      t.integer :user_id

      t.timestamps
    end
  end
end
