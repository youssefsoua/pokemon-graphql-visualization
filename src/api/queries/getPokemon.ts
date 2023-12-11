import { gql, useQuery } from "@apollo/client";

// Interfaces
export interface PokemonQueryProps {
  offset: number;
}

export interface PokemonPage {
  pokemon: Pokemon[];
}

export interface Pokemon {
  id: string;
  name: string;
}

// Query for fetching Pokémon
export const POKEMON_QUERY = gql`
  query GetPokemon($offset: Int) {
    pokemon: pokemon_v2_pokemon(
      limit: 10
      offset: $offset
      order_by: { id: asc }
    ) {
      name
      id
    }
  }
`;

// Hook for using the Pokémon query
export const usePokemonQuery = ({ offset }: PokemonQueryProps) => {
  const { loading, error, data, refetch, networkStatus } =
    useQuery<PokemonPage>(POKEMON_QUERY, {
      variables: {
        offset,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
    });

  return {
    loading,
    error,
    data,
    refetch,
    networkStatus,
  };
};
