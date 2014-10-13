require 'rails_helper'

RSpec.describe "matches/edit", :type => :view do
  before(:each) do
    @match = assign(:match, Match.create!(
      :team_a_id => 1,
      :team_b_id => 1,
      :series_id => 1,
      :competition_type_id => 1,
      :venue_id => 1,
      :team_won_toss => "MyString",
      :team_choose_to => "MyString",
      :competition_overs_limit_id => 1,
      :user_id => 1
    ))
  end

  it "renders the edit match form" do
    render

    assert_select "form[action=?][method=?]", match_path(@match), "post" do

      assert_select "input#match_team_a_id[name=?]", "match[team_a_id]"

      assert_select "input#match_team_b_id[name=?]", "match[team_b_id]"

      assert_select "input#match_series_id[name=?]", "match[series_id]"

      assert_select "input#match_competition_type_id[name=?]", "match[competition_type_id]"

      assert_select "input#match_venue_id[name=?]", "match[venue_id]"

      assert_select "input#match_team_won_toss[name=?]", "match[team_won_toss]"

      assert_select "input#match_team_choose_to[name=?]", "match[team_choose_to]"

      assert_select "input#match_competition_overs_limit_id[name=?]", "match[competition_overs_limit_id]"

      assert_select "input#match_user_id[name=?]", "match[user_id]"
    end
  end
end
