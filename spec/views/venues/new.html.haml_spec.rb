require 'rails_helper'

RSpec.describe "venues/new", :type => :view do
  before(:each) do
    assign(:venue, Venue.new(
      :name => "MyString",
      :address => "MyString",
      :city => "MyString",
      :county_or_state => "MyString",
      :country => "MyString"
    ))
  end

  it "renders new venue form" do
    render

    assert_select "form[action=?][method=?]", venues_path, "post" do

      assert_select "input#venue_name[name=?]", "venue[name]"

      assert_select "input#venue_address[name=?]", "venue[address]"

      assert_select "input#venue_city[name=?]", "venue[city]"

      assert_select "input#venue_county_or_state[name=?]", "venue[county_or_state]"

      assert_select "input#venue_country[name=?]", "venue[country]"
    end
  end
end
