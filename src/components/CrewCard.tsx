import { Link } from "react-router-dom";
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
      <Link to={`/crew/${crewObject.id}`} className="link">
        <div className="card__container--forward">
          <div className="logo__container">
            <img
              src={crewObject.image}
              alt="crew-logo"
              className="logo__image"
            />
          </div>
          <div className="text__container--forward">
            <div className="span--top">
              <span className="name__span">{crewObject.name}</span>
            </div>
            <div className="span--bottom">
              <span className="region__span">{crewObject.region}</span>
              <span className="amount__span">{crewObject.amount}</span>
            </div>
          </div>
        </div>
        <div className="card__container--backward">
          <div className="text__container--backward">
            <p>{crewObject.introduction}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CrewCard;
