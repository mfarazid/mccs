require 'rails_helper'

RSpec.describe "teams/index", :type => :view do
  before(:each) do
    assign(:teams, [
      Team.create!(
        :name => "Name",
        :city => "City",
        :team_flag_id => 1,
        :user_id => 2,
        :club_id => 3
      ),
      Team.create!(
        :name => "Name",
        :city => "City",
        :team_flag_id => 1,
        :user_id => 2,
        :club_id => 3
      )
    ])
  end

  it "renders a list of teams" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
  end
end
