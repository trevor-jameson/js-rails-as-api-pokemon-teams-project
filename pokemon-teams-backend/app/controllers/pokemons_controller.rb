class PokemonsController < ApplicationController
    def create
        trainer = Trainer.find(params[:trainer_id])
        if trainer
            name = Faker::Name.first_name
            species = Faker::Games::Pokemon.name
            pokemon = Pokemon.create(nickname: name, species: species, trainer: trainer)
            render json: pokemon
        else
            render error: {message: 'Trainer not found'}
        end

    end

    def destroy
        pokemon = Pokemon.find(params[:id])
        pokemon.destroy
        render :success
    end
end
