function Home() {
  return (
    <>
      <div className="videoContainer">
        <video autoPlay muted loop playsInline>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/byhoon-bdf04.appspot.com/o/pexels-mikhail-nilov-7469782.mp4?alt=media&token=1e70805d-1911-4a46-ab7a-d6739faa7c63"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default Home;
