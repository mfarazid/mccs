class ClubsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_club, only: [:show, :edit, :update, :destroy]

  # GET /clubs
  # GET /clubs.json
  def index
    if current_user.present?
      @clubs = Club.where(:user_id => current_user.id)
    else
      @clubs = Club.all
    end
  end

  # GET /clubs/1
  # GET /clubs/1.json
  def show
    @teams = Team.where(:club_id => @club.id)
  end

  # GET /clubs/new
  def new
    @club = Club.new
  end

  # GET /clubs/1/edit
  def edit
  end

  # POST /clubs
  # POST /clubs.json
  def create
    @club = Club.new(club_params)
    @club.user_id = current_user.id

    respond_to do |format|
      if @club.save
        format.html { redirect_to @club, toast('success','Club was successfully created!')}
        format.json { render action: 'show', status: :created, location: @club }
      else
        format.html { render action: 'new' }
        format.json { render json: @club.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clubs/1
  # PATCH/PUT /clubs/1.json
  def update
    respond_to do |format|
      if @club.update(club_params)
        format.html { redirect_to @club, toast('success','Club was successfully updated!') }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @club.errors, status: :unprocessable_entity }
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
