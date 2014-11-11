class CreateInningExtras < ActiveRecord::Migration
  def change
    create_table :inning_extras do |t|
      t.integer :match_id
      t.integer :team_id
      t.integer :bye
      t.integer :leg_bye
      t.integer :wide
      t.integer :no_ball

      t.timestamps
    end
  end
end
