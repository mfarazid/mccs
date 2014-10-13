require 'rails_helper'

RSpec.describe "Umpires", :type => :request do
  describe "GET /umpires" do
    it "works! (now write some real specs)" do
      get umpires_path
      expect(response.status).to be(200)
    end
  end
end
