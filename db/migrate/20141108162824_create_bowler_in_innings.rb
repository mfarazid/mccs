class CreateBowlerInInnings < ActiveRecord::Migration
  def change
    create_table :bowler_in_innings do |t|
      t.integer :match_id
      t.integer :player_id
      t.integer :team_id
      t.string :overs
      t.integer :maiden_overs
      t.integer :runs
      t.integer :wickets

      t.timestamps
    end
  end
end
