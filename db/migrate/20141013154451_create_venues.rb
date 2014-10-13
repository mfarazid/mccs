class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :county_or_state
      t.string :country
      t.integer :user_id

      t.timestamps
    end
  end
end
