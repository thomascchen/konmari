class Item < ApplicationRecord
  validates :name, presence: true
  validates :keep, inclusion: { in: [true, false] }
end