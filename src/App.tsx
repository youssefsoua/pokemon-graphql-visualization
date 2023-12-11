import { ApolloWrapper } from "./api";
import NavBar from "./components/NavBar";
import Home from "./container/Home";

function App() {
  return (
    <ApolloWrapper>
      <NavBar />
      <Home />
    </ApolloWrapper>
  );
}

export default App;
