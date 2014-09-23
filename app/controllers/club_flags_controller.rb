class ClubFlagsController < ApplicationController
  before_action :set_club_flag, only: [:show]
  def show
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_club_flag
    @club_flag = ClubFlag.find(params[:id])
  end
end
