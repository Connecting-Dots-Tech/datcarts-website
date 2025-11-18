import React from "react";
import "./AboutAssoci.css";

const AboutAssoci = () => {
  return (
    <div className="AboutAssoci-wrapper">
      <h2 className="associated-title">Recognized & Supported By</h2>
      <div className="associated-org">
        <div className="img-cover">
          <img src="/assets/about/swak.jpg" alt="swak" />
        </div>
        <div className="img-cover">
          <img src="/assets/about/digitalIndia.jpg" alt="digitalIndia" />
        </div>
        <div className="img-cover">
          <img src="/assets/about/startupindia.png" alt="startupIndia" />
        </div>
        <div className="img-cover">
          <img src="/assets/about/startupKerala.png" alt="startupKerala" />
        </div>
      </div>
      <h2 className="associated-title">Retailers Using Our Platform</h2>
      <div className="associated-org">
        <div className="img-cover">
          <img src="/assets/SR/family.PNG" alt="family" />
        </div>
        <div className="img-cover">
          <img src="/assets/SR/rolla.jpg" alt="rolla" />
        </div>
        <div className="img-cover">
          <img src="/assets/SR/moolans.png" alt="moolans" />
        </div>
      </div>
      <h2 className="brand-title">Brands Advertising with DATCARTS</h2>
      <div className="brand-org">
        <div className="brand-cover">
          <img src="/assets/brands/ajmi.jpg" alt="ajmi" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/allay.jpg" alt="allay" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/elements.png" alt="elements" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/kabani.jpg" alt="kabani" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/mulla.jpg" alt="mulla" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/orgello.png" alt="orgello" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/pureheart.png" alt="pureheart" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/tastynibbles.jpg" alt="tastynibbles" />
        </div>
        <div className="brand-cover">
          <img src="/assets/brands/wellway.png" alt="wellway" />
        </div>
      </div>
    </div>
  );
};

export default AboutAssoci;
