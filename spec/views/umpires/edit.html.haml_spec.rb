require 'rails_helper'

RSpec.describe "umpires/edit", :type => :view do
  before(:each) do
    @umpire = assign(:umpire, Umpire.create!(
      :first_name => "MyString",
      :last_name => "MyString"
    ))
  end

  it "renders the edit umpire form" do
    render

    assert_select "form[action=?][method=?]", umpire_path(@umpire), "post" do

      assert_select "input#umpire_first_name[name=?]", "umpire[first_name]"

      assert_select "input#umpire_last_name[name=?]", "umpire[last_name]"
    end
  end
end
