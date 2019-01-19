class RsvpsController < ApiController
  # before_action :require_login
  # skip_before_action :verify_authenticity_token
  def index
    @rsvps = Rsvp.all
    render json: @rsvps
  end

  def show
    @rsvp = Rsvp.find(params[:id])
    render json: {rsvp: rsvp}
  end


  def create
    @rsvp = Rsvp.new(rsvp_params)
    if @rsvp.save
      render json: @rsvp
    else
      render json: @rsvp.errors, status: :unprocessable_entity
    end
  end

  def update
    if @rsvp.update(rsvp_params)
      render json: @rsvp
    else
      render json: @rsvp.errors, status: :unprocessable_entity
    end
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:firstname, :lastname, :attendees, :comment, :rsvp, :user_id, :event_id)
  end
end
