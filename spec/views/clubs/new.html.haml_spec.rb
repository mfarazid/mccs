require 'rails_helper'

RSpec.describe "clubs/new", :type => :view do
  before(:each) do
    assign(:club, Club.new(
      :name => "MyString",
      :county => "MyString",
      :club_flag_id => 1,
      :user_id => 2
    ))
  end

  it "renders new club form" do
    render

    assert_select "form[action=?][method=?]", clubs_path, "post" do

      assert_select "input#club_name[name=?]", "club[name]"

      assert_select "input#club_county[name=?]", "club[county]"

      assert_select "input#club_club_flag_id[name=?]", "club[club_flag_id]"

      assert_select "input#club_user_id[name=?]", "club[user_id]"
    end
  end
end
