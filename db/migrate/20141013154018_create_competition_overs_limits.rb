class CreateCompetitionOversLimits < ActiveRecord::Migration
  def change
    create_table :competition_overs_limits do |t|
      t.string :overs

      t.timestamps
    end
  end
end
