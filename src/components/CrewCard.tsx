import "../styles/components/CrewCard.scss";

interface CrewParams {
  id: string;
  image: string;
  name: string;
  introduction: string;
  amount: string;
  region: string;
}

const CrewCard = (crewObject: CrewParams) => {
  return (
    <div className="card__container">
      <div className="logo__container">
        <img src={crewObject.image} alt="crew-logo" className="logo__image" />
      </div>
      <div className="text__container">
        <div className="text__container--forward">
          <span className="name__span">{crewObject.name}</span>
          <span className="amount__span">{crewObject.amount}</span>
          <span className="region__span">{crewObject.region}</span>
        </div>
        <div className="text__container--backward">
          <span>{crewObject.introduction}</span>
          <button>자세히</button>
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
