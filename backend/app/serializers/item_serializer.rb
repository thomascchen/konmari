class ItemSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :name, :keep
end
