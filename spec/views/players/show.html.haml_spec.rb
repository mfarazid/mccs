require 'rails_helper'

RSpec.describe "players/show", :type => :view do
  before(:each) do
    @player = assign(:player, Player.create!(
      :name => "Name",
      :player_batting_style => "Player Batting Style",
      :best_performance => "Best Performance",
      :worst_performance => "Worst Performance",
      :picturl_url => "Picturl Url",
      :team_id => 1,
      :user_id => 2,
      :player_type_id => 3,
      :player_blowing_style_id => 4
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Player Batting Style/)
    expect(rendered).to match(/Best Performance/)
    expect(rendered).to match(/Worst Performance/)
    expect(rendered).to match(/Picturl Url/)
    expect(rendered).to match(/1/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
  end
end
