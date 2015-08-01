class Item < ActiveRecord::Base
  validates :name, presence: true
  validates :keep, presence: true, inclusion: { in: [true, false] }
end
