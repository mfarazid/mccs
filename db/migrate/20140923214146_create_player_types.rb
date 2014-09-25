class CreatePlayerTypes < ActiveRecord::Migration
  def change
    create_table :player_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
