require 'rails_helper'

RSpec.describe "players/index", :type => :view do
  before(:each) do
    assign(:players, [
      Player.create!(
        :name => "Name",
        :player_batting_style => "Player Batting Style",
        :best_performance => "Best Performance",
        :worst_performance => "Worst Performance",
        :picturl_url => "Picturl Url",
        :team_id => 1,
        :user_id => 2,
        :player_type_id => 3,
        :player_blowing_style_id => 4
      ),
      Player.create!(
        :name => "Name",
        :player_batting_style => "Player Batting Style",
        :best_performance => "Best Performance",
        :worst_performance => "Worst Performance",
        :picturl_url => "Picturl Url",
        :team_id => 1,
        :user_id => 2,
        :player_type_id => 3,
        :player_blowing_style_id => 4
      )
    ])
  end

  it "renders a list of players" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Player Batting Style".to_s, :count => 2
    assert_select "tr>td", :text => "Best Performance".to_s, :count => 2
    assert_select "tr>td", :text => "Worst Performance".to_s, :count => 2
    assert_select "tr>td", :text => "Picturl Url".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
  end
end
