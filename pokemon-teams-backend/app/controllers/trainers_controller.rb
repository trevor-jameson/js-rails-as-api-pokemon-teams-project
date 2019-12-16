class TrainersController < ApplicationController
    def index
        render json: trainers_serializer
    end

    def trainers_serializer
        Trainer.all.map do |trainer|
            {
                name: trainer.name,
                id: trainer.id,
                pokemons: pokemons_serializer(trainer),
            }
        end
    end

    def pokemons_serializer(trainer)
       trainer.pokemons.map do |mon|
        {
            id: mon.id,
            species: mon.species,
            nickname: mon.nickname,
        }
       end
    end
end
