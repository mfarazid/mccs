# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :player do
    name "MyString"
    player_batting_style "MyString"
    best_performance "MyString"
    worst_performance "MyString"
    picturl_url "MyString"
    team_id 1
    user_id 1
    player_type_id 1
    player_blowing_style_id 1
    date_of_birth "2014-09-23"
    odi_debut "2014-09-23"
    test_debut "2014-09-23"
    t20_debut "2014-09-23"
  end
end
