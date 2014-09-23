require 'rails_helper'

RSpec.describe "clubs/show", :type => :view do
  before(:each) do
    @club = assign(:club, Club.create!(
      :name => "Name",
      :county => "County",
      :club_flag_id => 1,
      :user_id => 2
    ))
  end

  # it "renders attributes in <p>" do
  #   render
  #   expect(rendered).to match(/Name/)
  #   expect(rendered).to match(/County/)
  #   expect(rendered).to match(/1/)
  #   expect(rendered).to match(/2/)
  # end
end
