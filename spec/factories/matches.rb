# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :match do
    team_a_id 1
    team_b_id 1
    series_id 1
    competition_type_id 1
    venue_id 1
    team_won_toss "MyString"
    team_choose_to "MyString"
    start_date_time "2014-10-13"
    end_date_time "2014-10-13"
    competition_overs_limit_id 1
    user_id 1
  end
end
