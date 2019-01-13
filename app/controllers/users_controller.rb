class UsersController < ApiController
  before_action :require_login, except: [:create]
  # GET /users
  def index
    @users = User.all
    render json: @users.as_json(except: [:password_digest])
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.create!(user_params)

    if @user.save
      render json: {token: @user.auth_token,user:{ email: @user.email, id:@user.id}}
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def profile
     @user = User.find_by_auth_token!(request.headers[:token])
     user_rsvps = user.rsvps
      render json:{user:{ email: @user.email }, rsvps: user_rsvps}
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

    # def set_user
    #   @user = User.find(params[:id])
    # end

    def user_params
      params.require(:user).permit(:email, :password, :public_key)
    end
end
