class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.boolean :keep, null: false, default: false

      t.timestamps null: false
    end
  end
end
