class Item < ActiveRecord::Base
  validates :name, presence: true
  validates :keep, inclusion: { in: [true, false] }
end
