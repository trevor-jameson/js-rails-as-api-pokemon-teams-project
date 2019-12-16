class TrainersController < ApplicationController
    def index
        render json: Trainer.trainers_serializer
    end

    
end
