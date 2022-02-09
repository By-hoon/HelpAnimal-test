import { Link } from "react-router-dom";
import "../styles/routes/home.scss";

function Home() {
  return (
    <>
      <main>
        <div className="main--top">
          <div className="section--video">
            <video autoPlay muted loop playsInline>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/byhoon-bdf04.appspot.com/o/pexels-mikhail-nilov-7469782.mp4?alt=media&token=1e70805d-1911-4a46-ab7a-d6739faa7c63"
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            <span className="span1">유기견들을 도와주세요</span>
            <p className="span2">설명 부분</p>
            <Link to="/login" className="span3">
              시작
            </Link>
          </div>
        </div>
        <section className="section1"></section>
        <section className="section2">
          <span>section2</span>
        </section>
        <section className="section3">
          <span>section3</span>
        </section>
      </main>
    </>
  );
}

export default Home;
