Mccs::Application.routes.draw do

  root to: "welcome#home"
  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}, 
      controllers: {omniauth_callbacks: "omniauth_callbacks"}

  resources :players
  resources :matches
    get 'matches/:id/team_a_inning' => 'matches#team_a_inning', :as => :add_team_a_inning
    get 'matches/:id/team_b_inning' => 'matches#team_b_inning', :as => :add_team_b_inning
  resources :innings, only: [:new, :create]
  resources :venues
  resources :umpires
  resources :series
  resources :teams
  resources :team_flags, only: [:show]
  resources :clubs
  resources :club_flags, only: [:show]  

  resources :users, only: [:edit, :update]
  resources :authorizations, only: [:index, :show]

  namespace :admin do
    get 'dashboard/home' => "dashboard#home", as: :dashboard_home
    resources :dashboard, only: [:home]
    resources :authorizations, only: [:index, :destroy]
    resources :users, only: [:index, :show, :destroy]
  end
  
end
