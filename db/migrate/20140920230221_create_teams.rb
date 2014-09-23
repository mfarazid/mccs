class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.string :city
      t.integer :team_flag_id
      t.integer :user_id
      t.integer :club_id

      t.timestamps
    end
  end
end
