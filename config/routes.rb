Mccs::Application.routes.draw do

  root to: "welcome#home"
  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}, 
      controllers: {omniauth_callbacks: "omniauth_callbacks"}

  resources :players, only: [:index, :show, :edit, :update, :destroy] 
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
