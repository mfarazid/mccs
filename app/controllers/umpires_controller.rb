class UmpiresController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_umpire, only: [:show, :edit, :update, :destroy]

  # GET /umpires
  # GET /umpires.json
  def index
    @umpires = Umpire.all
  end

  # GET /umpires/1
  # GET /umpires/1.json
  def show
  end

  # GET /umpires/new
  def new
    @umpire = Umpire.new
  end

  # GET /umpires/1/edit
  def edit
  end

  # POST /umpires
  # POST /umpires.json
  def create
    @umpire = Umpire.new(umpire_params)
    @umpire.user_id = current_user.id
    
    respond_to do |format|
      if @umpire.save
        format.html { redirect_to @umpire, toast('success','Umpire was successfully created!') }
        format.json { render action: 'show', status: :created, location: @umpire }
      else
        format.html { render action: 'new' }
        format.json { render json: @umpire.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /umpires/1
  # PATCH/PUT /umpires/1.json
  def update
    respond_to do |format|
      if @umpire.update(umpire_params)
        format.html { redirect_to @umpire, toast('success','Umpire was successfully updated!') }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @umpire.errors, status: :unprocessable_entity }
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
