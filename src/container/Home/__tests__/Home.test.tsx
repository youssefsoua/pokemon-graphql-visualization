import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ApolloWrapper, POKEMON_QUERY } from "../../../api";
import Home from "..";

const mocks = {
  request: {
    query: POKEMON_QUERY,
    variables: { offset: 10 },
  },
  result: {
    data: {
      pokemon: [
        {
          name: "metapod",
          id: 11,
        },
        {
          name: "butterfree",
          id: 12,
        },
        {
          name: "weedle",
          id: 13,
        },
        {
          name: "kakuna",
          id: 14,
        },
        {
          name: "beedrill",
          id: 15,
        },
        {
          name: "pidgey",
          id: 16,
        },
        {
          name: "pidgeotto",
          id: 17,
        },
        {
          name: "pidgeot",
          id: 18,
        },
        {
          name: "rattata",
          id: 19,
        },
        {
          name: "raticate",
          id: 20,
        },
      ],
    },
  },
};
test("Renders the main page", async () => {
  render(
    <ApolloWrapper>
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <Home />
      </MockedProvider>
    </ApolloWrapper>
  );
  await waitFor(() => {
    // Check that the rendered content includes the expected data
    expect(screen.getByText("metapod")).toBeInTheDocument();
  });
});

test("Renders the loading state when data is being fetched", async () => {
  render(
    <ApolloWrapper>
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <Home />
      </MockedProvider>
    </ApolloWrapper>
  );
  await waitFor(() => {
    // Check that the loading state is rendered
    expect(screen.getByText("...Loading")).toBeInTheDocument();
  });
});

test("Renders the error state when there is an error fetching data", async () => {
  render(
    <ApolloWrapper>
      <MockedProvider mocks={[]} addTypename={false}>
        <Home />
      </MockedProvider>
    </ApolloWrapper>
  );
  await waitFor(() => {
    // Check that the error state is rendered
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});

test("Renders the search input field", async () => {
  render(
    <ApolloWrapper>
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <Home />
      </MockedProvider>
    </ApolloWrapper>
  );
  await waitFor(() => {
    // Check that the search input field is rendered
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});
