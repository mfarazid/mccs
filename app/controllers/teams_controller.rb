class TeamsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_team, only: [:add_team, :show, :destroy]

  # GET /teams
  # GET /teams.json
  def index
    if current_user.present?
      @teams = Team.where(:user_id => current_user.id)
    else
      @teams = Team.all
    end
  end
  
  def add_team
  end
  
  # GET /teams/1
  # GET /teams/1.json
  def show
  end

  # GET /teams/new
  def new
    @team = Team.new
  end

  # POST /teams
  # POST /teams.json
  def create
    @team = Team.new(team_params)
    @team.user_id = current_user.id
    respond_to do |format|
      if @team.save
        if params[:team][:show].present?
          club = Club.find(params[:team][:club_id]) 
          toast('success','Team was successfully created!')
          format.html { redirect_to @team }
          format.json { render action: 'add_team', status: :created, location: @team }
          format.js { render action: 'add_team', status: :created, location: @team }
        else    
          format.html { redirect_to @team, toast('success','Team was successfully created!') }
          format.json { render action: 'show', status: :created, location: @team }
        end
      else
        format.html { render action: 'new' }
        format.json { render json: @team.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /teams/1
  # DELETE /teams/1.json
  def destroy
    @team.destroy

    respond_to do |format|
      if params[:show].present?
        @club = Club.find(@team.club_id) 
        toast('success','Team was successfully removed!')
        format.html { redirect_to @club }
        format.json { render action: 'show', status: :created, location: @club }
      else    
        format.html { redirect_to teams_url, toast('success','Team was successfully removed!') }
        format.json { head :no_content }
      end

    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def team_params
      params.require(:team).permit(:name, :city, :team_flag_id, :user_id, :club_id, players_attributes: [:name, :player_type_id, :player_batting_style, :player_bowling_style_id, :user_id, :id, :_destroy])
    end
end
