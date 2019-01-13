class RsvpsController < ApiController
  # before_action :require_login

  def index
    @rsvps = Rsvp.all
    render json: @rsvps
  end

  def show
    rsvp = Rsvp.find(params[:id])
    render json: {rsvp: rsvp}
  end


  def create
    @rsvp = Post.new(rsvp_params)
    if @rsvp.save
      render json: @rsvp
    end
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:firstname, :lastname, :attendees, :comment, :rsvp)
  end
end
