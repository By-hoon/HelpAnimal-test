import CrewCard from "../../components/CrewCard";
import "../../styles/routes/crew.scss";
import { CREWS } from "../../test/data/crew";

const Crew = () => {
  const crews = CREWS.WHOLE;
  return (
    <>
      <section className="crew-list__section">
        {/* <div className="section-bar__container">
          <span className="section-name__span">크루</span>
        </div> */}
        <div className="crew-list__container">
          {crews.map((crew) => (
            <CrewCard
              key={crew.id}
              id={crew.id}
              image={crew.image}
              name={crew.name}
              introduction={crew.introduction}
              amount={crew.amount}
              region={crew.region}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Crew;
