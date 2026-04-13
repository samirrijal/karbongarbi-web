"use client";
import "./studio.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page studio">
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <p>
                  Creemos que la sostenibilidad no empieza con 
grandes inversiones. Empieza con medir bien, 
entender los datos, y tomar decisiones informadas.
                </p>
              </Copy>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <h2>
                  KarbonGarbi nació para que cualquier empresa 
industrial pueda gestionar su huella de carbono 
sin consultores externos, sin Excel, y sin 
perder semanas en burocracia.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                <img src="/studio/about-hero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>Factores de emisión</p>
                  <h2>200+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Categorías cubiertas</p>
                  <h2>15</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Alcances </p>
                  <h2>3</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>Normativas</p>
                  <h2>4</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Años de datos</p>
                  <h2>5</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>
        <CTAWindow
          img="/studio/about-cta-window.jpg"
          header="La Plataforma"
          callout="Construida para la industria"
          description="Cada módulo de KarbonGarbi está diseñado 
para resolver un problema real — desde el 
cálculo hasta el cumplimiento normativo."
        />
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
