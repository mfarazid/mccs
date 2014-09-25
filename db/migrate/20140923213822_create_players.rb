class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.string :player_batting_style
      t.string :best_performance
      t.string :worst_performance
      t.string :picture_url
      t.integer :team_id
      t.integer :user_id
      t.integer :player_type_id
      t.integer :player_bowling_style_id
      t.date :date_of_birth
      t.date :odi_debut
      t.date :test_debut
      t.date :t20_debut

      t.timestamps
    end
  end
end
