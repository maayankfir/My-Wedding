Rails.application.routes.draw do
  resources :users
  resources :rsvps
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/profile", to: "users#profile"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
