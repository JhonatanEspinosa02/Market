import './about_styles.css'
export function About() {
  return (
    <>
      <section className="about-us">
        <h1>XpressMarket</h1>
        <p>Plataforma desarrollada para el comercio libre</p>
        <sub>Version: 34.67.21</sub>

        <div className='fiscal-add'>
          <p>
            El presente canal hace constar{" "}
            <sub>
              Ingresa un aviso de privacidad que contenga datos de la empresa,
              nombre fiscal, copyright, año de fundacion{" "}
            </sub>
          </p>
          <p>Lugar en donde fue desarrollada o lugar de la tienda</p>
        </div>

        <div className='privacity'>
          <a href="">Como cuidamos tu privacidad</a>
          <a href="">Terminos y Condiciones</a>
          <a href="">Accesibilidad</a>
        </div>

        <div>Suggerencias</div>
        <div className='developers'>
          <a>Explore more about of developers</a>
        </div>
      </section>
    </>
  );
}
