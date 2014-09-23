require 'rails_helper'

RSpec.describe "clubs/edit", :type => :view do
  before(:each) do
    @club = assign(:club, Club.create!(
      :name => "MyString",
      :county => "MyString",
      :club_flag_id => 1,
      :user_id => 2
    ))
  end

  it "renders the edit club form" do
    render

    assert_select "form[action=?][method=?]", club_path(@club), "post" do

      assert_select "input#club_name[name=?]", "club[name]"

      assert_select "input#club_county[name=?]", "club[county]"

      assert_select "input#club_club_flag_id[name=?]", "club[club_flag_id]"

      assert_select "input#club_user_id[name=?]", "club[user_id]"
    end
  end
end
