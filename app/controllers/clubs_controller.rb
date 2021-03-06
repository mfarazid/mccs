class ClubsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy]
  before_action :set_club, only: [:new_club, :show, :destroy]

  # GET /clubs
  # GET /clubs.json
  def index
    if current_user.present?
      @clubs = Club.where(:user_id => current_user.id)
    else
      @clubs = Club.all
    end
    @club = Club.new
  end

  # GET /clubs/1
  # GET /clubs/1.json
  def show
  end

  # GET /clubs/new
  def new
    @club = Club.new
  end

  # Add new club
  def new_club
  end

  # POST /clubs
  # POST /clubs.json
  def create
    @club = Club.new(club_params)
    @club.user_id = current_user.id

    respond_to do |format|
      if @club.save
        toast('success','Club was successfully created!')
        format.html { redirect_to @club}
        format.json { render action: 'show', status: :created, location: @club }
        format.js   { render action: 'new_club', status: :created, location: @club}  
      else
        format.html { render action: 'new' }
        format.json { render json: @club.errors, status: :unprocessable_entity }
        format.js   { render json: @club.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clubs/1
  # DELETE /clubs/1.json
  def destroy 
    @club.destroy
    respond_to do |format|
      format.html { redirect_to clubs_url, toast('success','Club was successfully removed!')}
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_club
      @club = Club.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def club_params
      params.require(:club).permit(:name, :county, :club_flag_id, :user_id)
    end
end
