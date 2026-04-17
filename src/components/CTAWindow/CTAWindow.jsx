"use client";
import "./CTAWindow.css";

import Copy from "../Copy/Copy";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const CTAWindow = ({
  img,
  header,
  callout,
  description,
  ctaLabel,
  ctaRoute,
}) => {
  return (
    <section className="cta-window">
      <div className="container">
        <div className="cta-window-img-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="cta-window-img-overlay"></div>
        <div className="cta-window-header">
          <Copy delay={0.1}>
            <h1>{header}</h1>
          </Copy>
        </div>
        <div className="cta-window-footer">
          <div className="cta-window-callout">
            <Copy delay={0.1}>
              <h3>{callout}</h3>
            </Copy>
            {ctaLabel && ctaRoute && (
              <div className="cta-window-cta">
                <AnimatedButton label={ctaLabel} route={ctaRoute} />
              </div>
            )}
          </div>
          <div className="cta-window-description">
            <Copy delay={0.1}>
              <p>{description}</p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAWindow;
