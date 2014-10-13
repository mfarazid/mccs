require 'rails_helper'

RSpec.describe "umpires/new", :type => :view do
  before(:each) do
    assign(:umpire, Umpire.new(
      :first_name => "MyString",
      :last_name => "MyString"
    ))
  end

  it "renders new umpire form" do
    render

    assert_select "form[action=?][method=?]", umpires_path, "post" do

      assert_select "input#umpire_first_name[name=?]", "umpire[first_name]"

      assert_select "input#umpire_last_name[name=?]", "umpire[last_name]"
    end
  end
end
