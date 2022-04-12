class Api::V1::Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private
  def respond_with(_resource, _opts= {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: {
      message: 'Signed Up Successfully',
      user: current_user
    }, status: :ok
  end

  def register_failed
    render json: {
      message: 'Sign Up Failed'
    }, status: :unprocessable_entity
  end
end