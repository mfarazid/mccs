Mccs::Application.routes.draw do

  get "welcome/home"
  mount RedactorRails::Engine => '/redactor_rails'
  root to: "welcome#home"
  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}, 
      controllers: {omniauth_callbacks: "omniauth_callbacks"}

  resources :users, only: [:edit, :update]
  resources :authorizations, only: [:index, :show]

  namespace :admin do
    get 'dashboard/home' => "dashboard#home", as: :dashboard_home
    resources :dashboard, only: [:home]
    resources :authorizations, only: [:index, :destroy]
    resources :users, only: [:index, :show, :destroy]
  end
end
