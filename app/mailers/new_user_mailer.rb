class RsvpMailer < ApplicationMailer
  def notify_user(user)
    @user = user
    mail(to: @user.email, subject: "Welcome!")
  end
end
