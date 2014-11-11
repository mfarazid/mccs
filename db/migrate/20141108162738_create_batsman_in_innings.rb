class CreateBatsmanInInnings < ActiveRecord::Migration
  def change
    create_table :batsman_in_innings do |t|
      t.integer :match_id
      t.integer :team_id
      t.integer :player_id
      t.integer :runs
      t.integer :balls
      t.integer :fours
      t.integer :sixes
      t.integer :minutes
      t.integer :out_id
      t.integer :out_bowler_id
      t.integer :out_fielder_id

      t.timestamps
    end
  end
end
