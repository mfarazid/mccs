class CreateUmpiresInMatches < ActiveRecord::Migration
  def change
    create_table :umpires_in_matches do |t|
      t.integer :umpire_id
      t.integer :match_id

      t.timestamps
    end
  end
end
