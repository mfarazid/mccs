class BatsmanInInning < ActiveRecord::Base

  belongs_to :match
  belongs_to :team
  belongs_to :player
  belongs_to :out

  belongs_to :out_fielder, :class_name => "Player"
  belongs_to :out_bowler, :class_name => "Player"

  validates_presence_of :match_id, :team_id
  validates_presence_of :out, :if => Proc.new { |a| a.player.present? }  
  validates_presence_of :runs, :balls, :fours, :sixes, :if => Proc.new { |a| a.out.present? }

  def strike_rate
    self.runs.to_f / self.balls.to_f * 100.00 
  end

  def out_def(id)
    case id
      when 1
        if self.out_fielder.name == self.out_bowler.name
          "c & b " + self.out_bowler.name
        else
          "c " + self.out_fielder.name + " b " + self.out_bowler.name 
        end   
      when 2, 3, 6
        "b " + self.out_bowler.name
      when 4
        "run out ( " + self.out_fielder.name + " )" 
      when 5
        "st ( keeper ) b " + self.out_bowler.name
      when 7
        self.out.name    
    end
  end
end
