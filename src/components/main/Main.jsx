import "./Main.css";

function Main() {
  return (
    <main className="main-container">
      <div className="main-content">
        <h1 className="main-title">
          Sistema <span>PoliParking</span>
        </h1>

        <p className="main-description">
          PoliParking es el sistema oficial de gestión de parqueaderos de la EPN.
        </p>

        <a className="btn-reserva">¡Reserva tu parqueadero!</a>
      </div>

  <div className="main-image">
    <img 
    src="https://lh3.googleusercontent.com/p/AF1QipM-5aLM7ZV3W_TKrSuARvx508qTcTqQtWb0bQ1L=s1360-w1360-h1020-rw" 
    alt="Campus EPN" 
    />
  </div>
    </main>
  );
}

export default Main;
