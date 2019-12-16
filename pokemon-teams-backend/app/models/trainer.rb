class Trainer < ApplicationRecord
    has_many :pokemons

    def self.trainers_serializer
        Trainer.all.map do |trainer|
            {
                name: trainer.name,
                id: trainer.id,
                pokemons: trainer.pokemons.map do |mon|
                {
                    id: mon.id,
                    species: mon.species,
                    nickname: mon.nickname,
                }
            end
            }
        end
    end

    def pokemons_serializer(trainer)
       
    end
end
