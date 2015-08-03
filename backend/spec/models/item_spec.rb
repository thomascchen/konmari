require 'rails_helper'

RSpec.describe Item, :type => :model do
  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_inclusion_of(:keep).in_array([true, false]) }
  end
end
