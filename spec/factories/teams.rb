# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :team do
    name "MyString"
    city "MyString"
    team_flag_id 1
    user_id 1
    club_id 1
  end
end
