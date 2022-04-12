Rails.application.config.session_store :active_record_store, :key => '_my_app_session'

ActiveSupport.on_load(:active_record) do
  ActiveRecord::SessionStore::Session.serializer = :json
  ActionDispatch::Session::ActiveRecordStore.session_class = ServerSideSession
end
