class Api::V1::ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :keep
end