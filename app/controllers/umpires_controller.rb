class UmpiresController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy]
  before_action :set_umpire, only: [:add_record, :show, :destroy]

  # GET /umpires
  # GET /umpires.json
  def index
    if current_user.present?
      @umpires = Umpire.where(:user_id => current_user.id)
    else
      @umpires = Umpire.all
    end
    @umpire = Umpire.new
  end

  # add new record
  def add_record
  end
  
  # GET /umpires/1
  # GET /umpires/1.json
  def show
    respond_to do |format|
      format.html # show.html.erb
      format.js # show.js.erb
      format.json { render json: @umpire }
    end
  end

  # GET /umpires/new
  def new
    @umpire = Umpire.new
  end

  # POST /umpires
  # POST /umpires.json
  def create
    @umpire = Umpire.new(umpire_params)
    @umpire.user_id = current_user.id
    
    respond_to do |format|
      if @umpire.save
        format.html { redirect_to @umpire, toast('success','Umpire was successfully created!') }
        format.json { render action: 'add_record', status: :created, location: @umpire }
        format.js   { render action: 'add_record', status: :created, location: @umpire }      
      else
        format.html { render action: 'new' }
        format.json { render json: @umpire.errors, status: :unprocessable_entity }
        format.js   { render json: @umpire.errors, status: :unprocessable_entity }      
      end
    end
  end

  # DELETE /umpires/1
  # DELETE /umpires/1.json
  def destroy
    @umpire.destroy
    respond_to do |format|
      format.html { redirect_to umpires_url, toast('success','Umpire was successfully removed!') }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_umpire
      @umpire = Umpire.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def umpire_params
      params.require(:umpire).permit(:first_name, :last_name)
    end
end
