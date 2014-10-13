require 'rails_helper'

RSpec.describe "umpires/index", :type => :view do
  before(:each) do
    assign(:umpires, [
      Umpire.create!(
        :first_name => "First Name",
        :last_name => "Last Name"
      ),
      Umpire.create!(
        :first_name => "First Name",
        :last_name => "Last Name"
      )
    ])
  end

  it "renders a list of umpires" do
    render
    assert_select "tr>td", :text => "First Name".to_s, :count => 2
    assert_select "tr>td", :text => "Last Name".to_s, :count => 2
  end
end
