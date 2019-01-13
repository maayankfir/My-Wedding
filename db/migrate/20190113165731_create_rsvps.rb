class CreateRsvps < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.belongs_to :user
      t.belongs_to :event
      t.string :firstname
      t.string :lastname
      t.integer :attendees
      t.text :comment
      t.boolean :rsvp, default: false

      t.timestamps
      t.timestamps
    end
  end
end
