class CreateTeamFlags < ActiveRecord::Migration
  def change
    create_table :team_flags do |t|
      t.string :name
      t.string :file_name

      t.timestamps
    end
  end
end
