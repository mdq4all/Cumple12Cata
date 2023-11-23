import { useState } from "react";
import gpsMarker from "./assets/gps-location-maps.svg";
import wtLogo from "./assets/whatsapp-logo.svg";
import MapMenu from "./components/MapMenu";

const App = () => {
  const [openMap, setOpenMap] = useState(false);

  const handleClickMap = () => setOpenMap(true);

  return (
    <main>
      <div className="fixed top-0 bg-hero-pattern bg-cover w-full h-screen p-4 overflow-hidden" />
      <div className="text-center opacity-70">
        <p className="font-playfair text-lg mt-4 scale-in-center-2">
          Te espero a festejar
        </p>
        <h2 className="font-playfair text-3xl mb-6 scale-in-center">
          Mis <span className="text-5xl">12</span> años
        </h2>
        <h1 className="font-ephesis text-8xl mb-14 fade-in">Catalina</h1>
        <div className="puff-in-center">
          <article className="font-playfair text-xl font-semibold mb-2">
            MARTES
          </article>
          <article className="font-playfair text-4xl font-semibold mb-2">
            05 |DIC| 23
          </article>
          <article className="font-playfair text-xl font-semibold">
            13:00 hs a 17:30 hs
          </article>
        </div>
        <div className="flex flex-col items-center my-10 fade-in-2">
          <button onClick={handleClickMap}>
            <img src={gpsMarker} alt="logo marcador" width={50} />
          </button>
          <p className="font-playfair font-semibold">
            El Quincho de Migue, Ayacucho 7632
          </p>
        </div>
        <div className="flex flex-col items-center fade-in-3">
          <a href="whatsapp://send?phone=542233057530&text=¡Hola!">
            <img src={wtLogo} alt="whatsapp logo" width={40} />
          </a>
          <article>2235357272</article>
          <article className="font-playfair">Confirmar asistencia</article>
        </div>
      </div>
      <MapMenu setOpenMap={setOpenMap} openMap={openMap} />
    </main>
  );
};

export default App;
