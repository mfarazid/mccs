class CreateOuts < ActiveRecord::Migration
  def change
    create_table :outs do |t|
      t.string :name
      t.text :description
      
      t.timestamps
    end
  end
end
