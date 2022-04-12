Rails.application.routes.draw do
  devise_for :users,
              controllers: {
                registrations: 'api/v1/users/registrations',
                sessions: 'api/v1/users/sessions'
              }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
