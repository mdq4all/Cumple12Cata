import { useState } from "react";
import gpsMarker from "./assets/gps-location-maps.svg";
import wtLogo from "./assets/whatsapp-logo.svg";
import MapMenu from "./components/MapMenu";

const App = () => {
  const [openMap, setOpenMap] = useState(false);

  const handleClickMap = () => setOpenMap(true);

  return (
    <main>
      <div className="fixed top-0 bg-beach-pattern md:bg-beach-desktop bg-cover bg-center w-full h-screen p-4 -z-10 overflow-hidden" />
      <div className="flex flex-col items-center justify-around mt-14">
        <div>
          <p className="font-playfair text-lg scale-in-center-2">
            Te espero a festejar
          </p>
          <h2 className="font-playfair text-3xl mb-6 scale-in-center">
            Mis <span className="text-5xl">12</span> años
          </h2>
        </div>
        <h1 className="font-ephesis text-8xl mb-14 fade-in">Catalina</h1>
        <div className="puff-in-center">
          <article className="font-playfair text-xl font-semibold mb-2 text-center">
            MARTES
          </article>
          <article className="font-playfair text-4xl font-semibold mb-2">
            05 |DIC| 23
          </article>
          <article className="font-playfair text-xl font-semibold">
            13:00 hs a 17:30 hs
          </article>
        </div>
        <div>
          <div className="flex flex-col items-center my-10 fade-in-wo2">
            <button onClick={handleClickMap}>
              <img src={gpsMarker} alt="logo marcador" width={50} />
            </button>
            <p className="font-playfair font-semibold">
              El Quincho de Migue, Ayacucho 7632
            </p>
            <p className="py-2 font-playfair font-extrabold">
              No te olvides de traer la malla y el toallón!
            </p>
          </div>
          <div className="flex flex-col items-center fade-in-wo3">
            <a href="whatsapp://send?phone=542235357272&text=¡Hola!">
              <img src={wtLogo} alt="whatsapp logo" width={40} />
            </a>
            <article>2235357272</article>
            <article className="font-playfair">Confirmar asistencia</article>
          </div>
        </div>
      </div>
      <MapMenu setOpenMap={setOpenMap} openMap={openMap} />
    </main>
  );
};

export default App;
