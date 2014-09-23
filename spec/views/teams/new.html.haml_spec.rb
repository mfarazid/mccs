require 'rails_helper'

RSpec.describe "teams/new", :type => :view do
  before(:each) do
    assign(:team, Team.new(
      :name => "MyString",
      :city => "MyString",
      :flag_url => "MyString",
      :team_flag_id => 1,
      :user_id => 1,
      :club_id => 1
    ))
  end

  it "renders new team form" do
    render

    assert_select "form[action=?][method=?]", teams_path, "post" do

      assert_select "input#team_name[name=?]", "team[name]"

      assert_select "input#team_city[name=?]", "team[city]"

      assert_select "input#team_flag_url[name=?]", "team[flag_url]"

      assert_select "input#team_team_flag_id[name=?]", "team[team_flag_id]"

      assert_select "input#team_user_id[name=?]", "team[user_id]"

      assert_select "input#team_club_id[name=?]", "team[club_id]"
    end
  end
end
