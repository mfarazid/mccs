require 'rails_helper'

RSpec.describe "teams/show", :type => :view do
  before(:each) do
    @team = assign(:team, Team.create!(
      :name => "Name",
      :city => "City",
      :team_flag_id => 1,
      :user_id => 2,
      :club_id => 3
    ))
  end

  # it "renders attributes in <p>" do
  #   render
  #   expect(rendered).to match(/Name/)
  #   expect(rendered).to match(/City/)
  #   expect(rendered).to match(/1/)
  #   expect(rendered).to match(/2/)
  #   expect(rendered).to match(/3/)
  # end
end
