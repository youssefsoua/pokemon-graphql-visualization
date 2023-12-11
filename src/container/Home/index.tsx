import { usePokemonQuery } from "../../api";
import Accordion from "../../components/Accordion";

const Home = () => {
  const { data, loading, error } = usePokemonQuery({ offset: 10 });
  return (
    <div className="flex flex-col p-4">
      <section>
        <input placeholder="Search..." className="border px-4 py-2"></input>
      </section>
      {loading && <div>...Loading</div>}
      {error && <div>Error</div>}
      {data && (
        <section className="py-4">
          {data.pokemon.map((e) => (
            <Accordion key={e.id} title={e.name} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
