require 'rails_helper'

RSpec.describe "clubs/index", :type => :view do
  before(:each) do
    assign(:clubs, [
      Club.create!(
        :name => "Name",
        :county => "County",
        :club_flag_id => 1,
        :user_id => 2
      ),
      Club.create!(
        :name => "Name",
        :county => "County",
        :club_flag_id => 1,
        :user_id => 2
      )
    ])
  end

  it "renders a list of clubs" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "County".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
