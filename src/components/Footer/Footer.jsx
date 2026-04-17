"use client";
import "./Footer.css";

import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiDribbbleLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const LEGAL_LINKS = [
  { label: "Términos", route: "/legal/terminos" },
  { label: "Privacidad", route: "/legal/privacidad" },
  { label: "Cookies", route: "/legal/cookies" },
  { label: "DPA", route: "/legal/dpa" },
];

const Footer = () => {
  const { navigateWithTransition } = useViewTransition();
  const socialIconsRef = useRef(null);
  const [lang, setLang] = useState("es");

  useGSAP(
    () => {
      if (!socialIconsRef.current) return;

      const icons = socialIconsRef.current.querySelectorAll(".icon");
      gsap.set(icons, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: socialIconsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(icons, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: -0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: socialIconsRef }
  );

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <Copy delay={0.1}>
                  <h3 className="lg">KarbonGarbi</h3>
                </Copy>
              </div>
              <Copy delay={0.2}>
                <h2>Mide. Reduce. Cumple.</h2>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/");
                  }}
                >
                  <h3>Inicio</h3>
                </a>
                <a
                  href="/studio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/studio");
                  }}
                >
                  <h3>Plataforma</h3>
                </a>
                <a
                  href="/spaces"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/spaces");
                  }}
                >
                  <h3>Precios</h3>
                </a>
                <a
                  href="/sample-space"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/sample-space");
                  }}
                >
                  <h3>Regulación</h3>
                </a>
                <a
                  href="/blueprints"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/blueprints");
                  }}
                >
                  <h3>Blog</h3>
                </a>
                <a
                  href="/connect"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/connect");
                  }}
                >
                  <h3>Contacto</h3>
                </a>
              </Copy>
            </div>
          </div>
        </div>
        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
              <div className="icon">
                <RiLinkedinBoxLine />
              </div>
              <div className="icon">
                <RiInstagramLine />
              </div>
              <div className="icon">
                <RiDribbbleLine />
              </div>
              <div className="icon">
                <RiYoutubeLine />
              </div>
            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p>
                La sostenibilidad no es un informe anual.
                <br></br>Es una decisión diaria.
              </p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-legal">
            <p className="footer-legal-entity">
              KarbonGarbi, S.L. · CIF B00000000 · Bilbao, Bizkaia, Euskadi
            </p>
            <nav className="footer-legal-links" aria-label="Legal">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.route}
                  href={link.route}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition(link.route);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div
              className="footer-lang-switcher"
              role="group"
              aria-label="Idioma"
            >
              <button
                type="button"
                className={`footer-lang-option ${
                  lang === "es" ? "active" : ""
                }`}
                aria-pressed={lang === "es"}
                onClick={() => setLang("es")}
              >
                ES
              </button>
              <button
                type="button"
                className={`footer-lang-option ${
                  lang === "eu" ? "active" : ""
                }`}
                aria-pressed={lang === "eu"}
                onClick={() => setLang("eu")}
              >
                EU
              </button>
            </div>
          </div>
          <div className="footer-header">
            <img src="/logos/karbongarbi-footer-logo.svg" alt="" />
          </div>
          <div className="footer-copyright">
            <p>
              Desarrollada por — <span>Samir Rijal</span>
            </p>
            <p>Este sitio web utiliza cookies.</p>
            <p>Todos los derechos reservados &copy; 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
