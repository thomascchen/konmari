class Api::V1::ItemSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :name, :keep
end