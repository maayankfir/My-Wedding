Rails.application.routes.draw do
  # get 'todos/index'
  # get 'todos/create'
  # get 'todos/update'
  # get 'todos/destroy'
  resources :users
  resources :rsvps
  resources :todos

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/profile", to: "users#profile"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
