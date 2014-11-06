class SeriesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy]
  before_action :set_series, only: [:new_series, :show, :destroy]

  # GET /series
  # GET /series.json
  def index
    if current_user.present?
      @series_all = Series.where(:user_id => current_user.id)
    else
      @series_all = Series.all
    end
    @series = Series.new
  end

  def new_series
  end

  # GET /series/1
  # GET /series/1.json
  def show
  end

  # GET /series/new
  def new
    @series = Series.new
  end

  # POST /series
  # POST /series.json
  def create
    @series = Series.new(series_params)
    @series.user_id = current_user.id
    
    respond_to do |format|
      if @series.save
        toast('success','Series was successfully created!')
        format.html { redirect_to @series }
        format.json { render action: 'show', status: :created, location: @series }
        format.js   { render action: 'new_series', status: :created, location: @series}
      else
        format.html { render action: 'new' }
        format.json { render json: @series.errors, status: :unprocessable_entity }
        format.js   { render json: @series.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /series/1
  # DELETE /series/1.json
  def destroy
    @series.destroy
    respond_to do |format|
      format.html { redirect_to series_index_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_series
      @series = Series.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def series_params
      params.require(:series).permit(:name, :start_date, :end_date, :user_id)
    end
end
