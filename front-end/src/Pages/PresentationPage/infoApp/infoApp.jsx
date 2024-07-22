export default function InfoApp() {
  return (
    <>
      <div className="cards-download transition-all">
        <div className="card-download card-download-playstore">
          <header>
            <h2>Download in PlayStore</h2>
          </header>
          <section>
            <p>Nuestras apps son compatibles con el sistema operativo de android, <br /> por lo que te asegura que podras comprar o vender tus productos sin problema</p>
          </section>
          <footer>
            <a href="" className="text-blue">Ingresa link de la aplicacion hacia play store</a>
          </footer>
        </div>
        <div className="card-download card-download-applestore">
          <header>
            <h2>Download in AppleStore</h2>
          </header>
          <section>
            <p>Nuestras apps son compatibles con el sistema operativo de iOS, <br /> por lo que te asegura que podras comprar o vender tus productos sin problema</p>
          </section>
          <footer>
            <a href="" className="text-blue">Ingresa link de la aplicacion hacia play store</a>
          </footer>
        </div>
      </div>
    </>
  );
}
