class CreatePlayerBowlingStyles < ActiveRecord::Migration
  def change
    create_table :player_bowling_styles do |t|
      t.string :name

      t.timestamps
    end
  end
end
