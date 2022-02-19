import MyCrewBoard from "../components/MyCrewCard";
import "../styles/routes/crew.scss";
import { myCrew } from "../test/data/crew";

const Crew = () => {
  const myCrewArray = myCrew();
  return (
    <>
      <section className="my-crew__section">
        {myCrewArray.map((board) => (
          <MyCrewBoard
            key={board.index}
            image={board.image}
            name={board.name}
            amount={board.amount}
            region={board.region}
          />
        ))}
      </section>
    </>
  );
};

export default Crew;
