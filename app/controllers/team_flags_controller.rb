class TeamFlagsController < ApplicationController
  before_action :set_team_flag, only: [:show]
  def show
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_team_flag
    @team_flag = TeamFlag.find(params[:id])
  end
end
