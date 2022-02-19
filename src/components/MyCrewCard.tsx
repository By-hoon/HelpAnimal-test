import "../styles/components/MyCrewBoard.scss";

interface MyCrewParams {
  image: string;
  name: string;
  amount: string;
  region: string;
}

const MyCrewCard = (myCrewObject: MyCrewParams) => {
  return (
    <div className="board__container">
      <div className="logo__container">
        <img src={myCrewObject.image} alt="crew-logo" className="logo__image" />
      </div>
      <div className="text__container">
        <span className="name__span">{myCrewObject.name}</span>
        <span className="amount__span">{myCrewObject.amount}</span>
        <span className="region__span">{myCrewObject.region}</span>
      </div>
    </div>
  );
};

export default MyCrewCard;
