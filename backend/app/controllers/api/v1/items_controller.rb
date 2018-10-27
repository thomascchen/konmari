class Api::V1::ItemsController < ApplicationController
  def index
    @items = Item.order(id: :desc)

    render json: @items
  end

  def show
    @item = Item.find(params[:id])

    render json: @item
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item,
        status: :created,
        location: [:api, :v1, @item]
    else

      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.update(item_params)
      render json: @item,
        status: :ok,
        location: [:api, :v1, @item]
    else

      render json: { errors: @item.errors }, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :keep)
  end
end