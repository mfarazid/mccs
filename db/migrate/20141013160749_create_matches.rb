class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :team_a_id
      t.integer :team_b_id
      t.integer :series_id
      t.integer :competition_type_id
      t.integer :venue_id
      t.string :team_won_toss
      t.string :team_choose_to
      t.datetime :start_date_time
      t.datetime :end_date_time
      t.integer :competition_overs_limit_id
      t.integer :user_id

      t.timestamps
    end
  end
end
