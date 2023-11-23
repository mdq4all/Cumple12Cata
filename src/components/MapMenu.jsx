import PropTypes from "prop-types";
import close from "../assets/close-round-svgrepo-com.svg";

const MapMenu = ({ setOpenMap, openMap }) => {
  const handleClick = () => setOpenMap(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 backdrop-blur w-full h-screen flex items-center justify-center ${
          openMap ? "opacity-100 z-20" : "opacity-0 -z-20"
        } duration-700`}
        onClick={handleClick}
      >
        {openMap && (
          <div>
            <div className="flex justify-end">
              <button onClick={handleClick}>
                <img src={close} alt="icono de cerrar" width={30} />
              </button>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4448.392174797143!2d-57.59461674936281!3d-37.96573293729452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9076228e18b%3A0x843e6b6370c0c5be!2sAyacucho%207632%2C%20B7606ECF%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700699103710!5m2!1ses!2sar"
              width="350"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
};

export default MapMenu;

MapMenu.propTypes = {
  setOpenMap: PropTypes.func,
  openMap: PropTypes.bool,
};
