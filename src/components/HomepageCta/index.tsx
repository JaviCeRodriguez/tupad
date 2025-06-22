import React from "react";

export default function HomepageCta() {
  return (
    <section className="text--center margin-top--xl">
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>¡Únete a la comunidad!</h2>
            <p>
              Este es un proyecto de código abierto mantenido por la comunidad.
              ¡Tu colaboración es bienvenida! Ayúdanos a mejorar los apuntes,
              agregar nuevo material o corregir errores.
            </p>
            <a
              className="button button--primary"
              href="/subjects/como-colaborar"
              target="_self"
            >
              Aprende cómo colaborar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
