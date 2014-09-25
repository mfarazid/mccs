require 'rails_helper'

RSpec.describe "players/edit", :type => :view do
  before(:each) do
    @player = assign(:player, Player.create!(
      :name => "MyString",
      :player_batting_style => "MyString",
      :best_performance => "MyString",
      :worst_performance => "MyString",
      :picturl_url => "MyString",
      :team_id => 1,
      :user_id => 1,
      :player_type_id => 1,
      :player_blowing_style_id => 1
    ))
  end

  it "renders the edit player form" do
    render

    assert_select "form[action=?][method=?]", player_path(@player), "post" do

      assert_select "input#player_name[name=?]", "player[name]"

      assert_select "input#player_player_batting_style[name=?]", "player[player_batting_style]"

      assert_select "input#player_best_performance[name=?]", "player[best_performance]"

      assert_select "input#player_worst_performance[name=?]", "player[worst_performance]"

      assert_select "input#player_picturl_url[name=?]", "player[picturl_url]"

      assert_select "input#player_team_id[name=?]", "player[team_id]"

      assert_select "input#player_user_id[name=?]", "player[user_id]"

      assert_select "input#player_player_type_id[name=?]", "player[player_type_id]"

      assert_select "input#player_player_blowing_style_id[name=?]", "player[player_blowing_style_id]"
    end
  end
end
