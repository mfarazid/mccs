class PlayersController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_player, only: [:new_player, :show, :edit, :update, :destroy]

  # GET /players
  # GET /players.json
  def index
    if current_user.present?
      @players = Player.where(:user_id => current_user.id)
    else
      @players = Player.all
    end
  end

  def new_player
  end

  # GET /players/1
  # GET /players/1.json
  def show
  end

  # GET /players/1/edit
  def edit
  end

  # POST /players
  # POST /players.json
  def create
    @player = Player.new(player_params)
    @player.user_id = current_user.id
    respond_to do |format|
      if @player.save
        if params[:player][:show].present? 
          toast('success','Player was successfully created!')
          format.html { redirect_to @player }
          format.json { render action: 'show', status: :created, location: @player }
          format.js { render action: 'new_player', status: :created, location: @player }
        else    
          format.html { redirect_to @player, toast('success','Player was successfully created!') }
          format.json { render action: 'show', status: :created, location: @player }
        end
      else
        format.html { render action: 'new' }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /players/1
  # PATCH/PUT /players/1.json
  def update
    respond_to do |format|
      if @player.update(player_params)
        format.html { redirect_to @player, toast('success',"Player was successfully updated!") }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /players/1
  # DELETE /players/1.json
  def destroy
    @player.destroy
    respond_to do |format|
      format.html { redirect_to team_path(@player.team_id), toast('success',"Player was successfully removed from #{@player.team.name}!") }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def player_params
      params.require(:player).permit(:name, :player_batting_style, :best_performance, :worst_performance, :picture_url, :team_id, :user_id, :player_type_id, :player_bowling_style_id, :date_of_birth, :odi_debut, :test_debut, :t20_debut)
    end
end
