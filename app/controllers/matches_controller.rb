class MatchesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_match, only: [:new_match, :team_a_inning, :team_b_inning, :edit, :update, :show, :destroy]

  # GET /matches
  # GET /matches.json
  def index
    if current_user.present?
      @matches  = Match.where(:user_id => current_user.id)
    else
      @matches  = Match.all
    end
    @matches = Match.all
  end
  
  def new_match
  end
  
  # GET /matches/1
  # GET /matches/1.json
  def show
  end

  # GET /matches/new
  def new
    @match = Match.new
  end

  # GET /matches/1/edit
  def edit
  end

  def team_a_inning

  end

  def team_b_inning

  end
  
  # POST /matches
  # POST /matches.json
  def create
    @match = Match.new(match_params)
    @match.user_id = current_user.id

    respond_to do |format|
      if @match.save
        if params[:match][:show].present?
          toast('success','Match was successfully created!')
          format.html { redirect_to @match }
          format.json { render action: 'new_match', status: :created, location: @match }
          format.js { render action: 'new_match', status: :created, location: @match }
        else    
          format.html { redirect_to @match, toast('success','Match was successfully created!') }
          format.json { render action: 'show', status: :created, location: @match }
        end        
      else
        format.html { render action: 'new' }
        format.json { render json: @match.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /matches/1
  # PATCH/PUT /matches/1.json
  def update
    respond_to do |format|
      if @match.update(match_params)
        format.html { redirect_to @match, notice: 'Match was successfully updated.' }
        format.json { head :no_content }
      else

        team = params[:match][:inning_extras_attributes]["0"][:team_id]     
        if @match.team_a_id = team
          format.html { render action: 'team_a_inning' }
          format.json { render json: @match.errors, status: :unprocessable_entity }
        elsif  @match.team_b_id = team 
          format.html { render action: 'team_b_inning' }
          format.json { render json: @match.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /matches/1
  # DELETE /matches/1.json
  def destroy
    @match.destroy
    respond_to do |format|
      if params[:show].present?
        @series = Series.find(@match.series_id) 
        toast('success','Match was successfully removed!')
        format.html { redirect_to @series }
        format.json { render action: 'show', status: :created, location: @series }
      else    
        format.html { redirect_to matches_url }
        format.json { head :no_content }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_match
      @match = Match.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def match_params
      params.require(:match).permit(:team_a_id, :team_b_id, :series_id, :competition_type_id, :venue_id, :team_won_toss, :team_choose_to, :start_date, :end_date, :competition_overs_limit_id, :user_id, :umpire_ids => [],
        inning_extras_attributes: [:match_id, :team_id, :bye, :leg_bye, :wide, :no_ball, :id, :_destroy],
        batsman_in_innings_attributes: [:match_id, :team_id, :player_id, :runs, :balls, :fours, :sixes, :minutes, :out_id, :out_bowler_id, :out_fielder_id, :id, :_destroy],
        bowler_in_innings_attributes: [:player_id, :match_id, :team_id, :overs, :maiden_overs, :runs, :wickets, :id, :_destroy])
    end
end
