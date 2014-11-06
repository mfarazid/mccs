class VenuesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy]
  before_action :set_venue, only: [:new_venue, :show, :destroy]

  # GET /venues
  # GET /venues.json
  def index
    if current_user.present?
      @venues = Venue.where(:user_id => current_user.id)
    else
      @venues = Venue.all
    end
    @venue = Venue.new
  end

  # GET /venues/1
  # GET /venues/1.json
  def show
    respond_to do |format|
      format.html # show.html.erb
      format.js # show.js.erb
      format.json { render json: @venue }
    end
  end

  # Add new record to the table
  def new_venue
  end

  # GET /venues/new
  def new
    @venue = Venue.new
  end

  # POST /venues
  # POST /venues.json
  def create
    @venue = Venue.new(venue_params)
    @venue.user_id = current_user.id

    respond_to do |format|
      if @venue.save
        toast('success','Venue was successfully created!')
        format.html { redirect_to venues_url }
        format.json { render action: 'show', status: :created, location: @venue }
        format.js   { render action: 'new_venue', status: :created, location: @venue}  
      else
        format.html { render action: 'new' }
        format.json { render json: @venue.errors, status: :unprocessable_entity }
        format.js   { render json: @venue.errors, status: :unprocessable_entity } 
      end
    end
  end

  # DELETE /venues/1
  # DELETE /venues/1.json
  def destroy
    @venue.destroy
    respond_to do |format|
      format.html { redirect_to venues_url, toast('success','Venue was successfully removed!') }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_venue
      @venue = Venue.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def venue_params
      params.require(:venue).permit(:name, :address, :city, :county_or_state, :country)
    end
end
