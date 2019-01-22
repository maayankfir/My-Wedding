class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.belongs_to :user
      t.string :title
      t.string :body
      t.string :owner
      t.string :duedate

      t.timestamps
    end
  end
end
