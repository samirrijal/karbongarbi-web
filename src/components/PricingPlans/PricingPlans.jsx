"use client";
import "./PricingPlans.css";
import { useRef, useState } from "react";
import { pricingPlans, pricingComparison } from "./pricing-plans-content";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import Copy from "@/components/Copy/Copy";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PricingPlans = () => {
  const containerRef = useRef(null);
  const toggleRef = useRef(null);
  const compareRef = useRef(null);
  const [billing, setBilling] = useState("annual");
  const [showCompare, setShowCompare] = useState(false);

  const formatPrice = (plan) => {
    const value = billing === "annual" ? plan.priceAnnual : plan.priceMonthly;
    return `€${value.toLocaleString("es-ES")}`;
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".pricing-card");
      gsap.set(cards, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
        animation: gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        }),
      });

      if (toggleRef.current) {
        gsap.set(toggleRef.current, { opacity: 0, y: 20 });
        ScrollTrigger.create({
          trigger: toggleRef.current,
          start: "top 90%",
          once: true,
          animation: gsap.to(toggleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          }),
        });
      }

      if (compareRef.current) {
        gsap.set(compareRef.current, { opacity: 0, y: 20 });
        ScrollTrigger.create({
          trigger: compareRef.current,
          start: "top 90%",
          once: true,
          animation: gsap.to(compareRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          }),
        });
      }
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (showCompare) {
        const rows = containerRef.current.querySelectorAll(
          ".pricing-compare-row"
        );
        gsap.fromTo(
          rows,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.03,
            ease: "power3.out",
          }
        );
      }

      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies: [showCompare] }
  );

  const renderCell = (value) => {
    if (value === true) {
      return (
        <span className="compare-icon check" aria-label="Incluido">
          <IoMdCheckmark />
        </span>
      );
    }
    if (value === false) {
      return (
        <span className="compare-icon cross" aria-label="No incluido">
          <IoMdClose />
        </span>
      );
    }
    return <span className="compare-value">{value}</span>;
  };

  return (
    <div className="pricing-plans" ref={containerRef}>
      <div className="container">
        <div className="pricing-billing-wrap" ref={toggleRef}>
          <div
            className="pricing-billing-toggle"
            role="tablist"
            aria-label="Facturación"
          >
            <button
              role="tab"
              type="button"
              aria-selected={billing === "monthly"}
              className={`pricing-billing-option ${
                billing === "monthly" ? "active" : ""
              }`}
              onClick={() => setBilling("monthly")}
            >
              Mensual
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={billing === "annual"}
              className={`pricing-billing-option ${
                billing === "annual" ? "active" : ""
              }`}
              onClick={() => setBilling("annual")}
            >
              Anual
              <span className="pricing-billing-save">−20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.featured ? "featured" : ""} ${
                plan.premium ? "premium" : ""
              }`}
            >
              {plan.badge && (
                <div className="pricing-card-badge">
                  <p>{plan.badge}</p>
                </div>
              )}

              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <p className="md pricing-card-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing-card-price">
                {plan.priceFrom && (
                  <span className="pricing-price-prefix">Desde</span>
                )}
                <span className="pricing-price-value">{formatPrice(plan)}</span>
                <span className="pricing-price-suffix">
                  {plan.priceSuffix}
                </span>
              </div>
              <p className="pricing-card-pricenote">
                {plan.priceNote
                  ? plan.priceNote
                  : billing === "annual"
                  ? "Facturado anualmente"
                  : "Facturado mensualmente"}
              </p>

              <div className="pricing-card-cap">
                <p className="md">{plan.supplierCap}</p>
                {plan.overagePack && (
                  <p className="pricing-card-overage">{plan.overagePack}</p>
                )}
              </div>

              <ul className="pricing-card-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span
                      className="pricing-feature-icon"
                      aria-hidden="true"
                    >
                      <IoMdCheckmark />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.subvencionable && (
                <div className="pricing-card-subsidy">
                  <p>{plan.subvencionable}</p>
                </div>
              )}

              <div className="pricing-card-cta">
                <AnimatedButton
                  label={plan.ctaLabel}
                  route={plan.ctaRoute}
                  animate={false}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-compare-wrap" ref={compareRef}>
          <button
            type="button"
            className="pricing-compare-toggle"
            aria-expanded={showCompare}
            onClick={() => setShowCompare((v) => !v)}
          >
            {showCompare ? "Ocultar comparativa" : "Ver comparativa completa"}
          </button>

          {showCompare && (
            <div className="pricing-compare-table" role="table">
              <div
                className="pricing-compare-row pricing-compare-head"
                role="row"
              >
                <div
                  className="pricing-compare-cell label"
                  role="columnheader"
                >
                  Característica
                </div>
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`pricing-compare-cell ${
                      plan.featured ? "featured" : ""
                    }`}
                    role="columnheader"
                  >
                    {plan.name}
                  </div>
                ))}
              </div>
              {pricingComparison.map((row, i) => (
                <div key={i} className="pricing-compare-row" role="row">
                  <div className="pricing-compare-cell label" role="cell">
                    {row.label}
                  </div>
                  {row.values.map((value, j) => (
                    <div
                      key={j}
                      className={`pricing-compare-cell ${
                        pricingPlans[j].featured ? "featured" : ""
                      }`}
                      role="cell"
                    >
                      {renderCell(value)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
