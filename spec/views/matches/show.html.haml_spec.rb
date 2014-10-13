require 'rails_helper'

RSpec.describe "matches/show", :type => :view do
  before(:each) do
    @match = assign(:match, Match.create!(
      :team_a_id => 1,
      :team_b_id => 2,
      :series_id => 3,
      :competition_type_id => 4,
      :venue_id => 5,
      :team_won_toss => "Team Won Toss",
      :team_choose_to => "Team Choose To",
      :competition_overs_limit_id => 6,
      :user_id => 7
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
    expect(rendered).to match(/5/)
    expect(rendered).to match(/Team Won Toss/)
    expect(rendered).to match(/Team Choose To/)
    expect(rendered).to match(/6/)
    expect(rendered).to match(/7/)
  end
end
