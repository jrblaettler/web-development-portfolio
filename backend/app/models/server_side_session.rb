class ServerSideSession < ActiveRecord::SessionStore::Session
  belongs_to :user, optional: true

  before_update :set_user_id

  ACTIVE_SESSION_LIMIT = 10

  scope :by_oldest, -> { order(updated_at: :asc) }
  after_commit :limit_active_sessions

  private

  def limit_active_sessions
    if ServerSideSession.where(user_id: user_id).count > ACTIVE_SESSION_LIMIT
      ServerSideSession
         .where(user_id: user_id)
         .by_oldest
         .limit(1)
         .delete_all
    end
  end

  def set_user_id
    self.user_id = data['warden.user.user.key']&.first&.first
  end

end
