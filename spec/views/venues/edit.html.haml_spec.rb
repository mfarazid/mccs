require 'rails_helper'

RSpec.describe "venues/edit", :type => :view do
  before(:each) do
    @venue = assign(:venue, Venue.create!(
      :name => "MyString",
      :address => "MyString",
      :city => "MyString",
      :county_or_state => "MyString",
      :country => "MyString"
    ))
  end

  it "renders the edit venue form" do
    render

    assert_select "form[action=?][method=?]", venue_path(@venue), "post" do

      assert_select "input#venue_name[name=?]", "venue[name]"

      assert_select "input#venue_address[name=?]", "venue[address]"

      assert_select "input#venue_city[name=?]", "venue[city]"

      assert_select "input#venue_county_or_state[name=?]", "venue[county_or_state]"

      assert_select "input#venue_country[name=?]", "venue[country]"
    end
  end
end
