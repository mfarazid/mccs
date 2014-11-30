# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :comment do
    author_name "MyString"
    email "MyString"
    content "MyText"
    player_id 1
  end
end
