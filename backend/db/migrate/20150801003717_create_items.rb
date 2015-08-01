class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :keep

      t.timestamps null: false
    end
  end
end
