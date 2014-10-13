require 'rails_helper'

RSpec.describe "matches/index", :type => :view do
  before(:each) do
    assign(:matches, [
      Match.create!(
        :team_a_id => 1,
        :team_b_id => 2,
        :series_id => 3,
        :competition_type_id => 4,
        :venue_id => 5,
        :team_won_toss => "Team Won Toss",
        :team_choose_to => "Team Choose To",
        :competition_overs_limit_id => 6,
        :user_id => 7
      ),
      Match.create!(
        :team_a_id => 1,
        :team_b_id => 2,
        :series_id => 3,
        :competition_type_id => 4,
        :venue_id => 5,
        :team_won_toss => "Team Won Toss",
        :team_choose_to => "Team Choose To",
        :competition_overs_limit_id => 6,
        :user_id => 7
      )
    ])
  end

  it "renders a list of matches" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
    assert_select "tr>td", :text => 5.to_s, :count => 2
    assert_select "tr>td", :text => "Team Won Toss".to_s, :count => 2
    assert_select "tr>td", :text => "Team Choose To".to_s, :count => 2
    assert_select "tr>td", :text => 6.to_s, :count => 2
    assert_select "tr>td", :text => 7.to_s, :count => 2
  end
end
