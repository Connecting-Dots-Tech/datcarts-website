// import React from "react";
// import "./AboutAssoci.css";
// import swak from "../assets/about/3.jpg";
// import digitalIndia from "../assets/about/2.jpeg.jpg";
// import startupIndia from "../assets/about/startupindia.png";
// import startupKerala from /about/3.png";

// import family from "../assets/SR/family.PNG";
// import moolans from "../assets/SR/moolans.png";
// import rolla from "../assets/SR/rolla.jpg";

// import ummachis from "../assets/brands/umachis.jpg";
// import ajmi from "../assets/brands/ajmi.jpg";
// import allay from "../assets/brands/allay.jpg";
// import elements from "../assets/brands/elements.png";
// import kabani from "../assets/brands/kabani.jpg";
// import mulla from "../assets/brands/mulla.jpg";
// import orgello from "../assets/brands/orgello.png";
// import pureheart from "../assets/brands/pureheart.png";
// import tastynibbles from "../assets/brands/tastynibbles.jpg";
// import wellway from "../assets/brands/wellway.png";

// const AboutAssoci = () => {
//   return (
//     <div className="AboutAssoci-wrapper">
//       <h2 className="associated-title">In Association with</h2>
//       <div className="associated-org">
//         <div className="img-cover">
//           <img src={swak} alt="swak" />
//         </div>
//         <div className="img-cover">
//           <img src={digitalIndia} alt="digitalIndia" />
//         </div>
//         <div className="img-cover">
//           <img src={startupIndia} alt="startupIndia" />
//         </div>
//         <div className="img-cover">
//           <img src={startupKerala} alt="startupKerala" />
//         </div>
//       </div>
//       <h2 className="associated-title">In Association with</h2>
//       <div className="associated-org">
//         <div className="img-cover">
//           <img src={family} alt="swak" />
//         </div>
//         <div className="img-cover">
//           <img src={rolla} alt="digitalIndia" />
//         </div>
//         <div className="img-cover">
//           <img src={moolans} alt="startupIndia" />
//         </div>
//       </div>
//       <h2 className="brand-title">In Association with</h2>
//       <div className="brand-org">
//         <div className="brand-cover">
//           <img src={ajmi} alt="ajmi" />
//         </div>
//         <div className="brand-cover">
//           <img src={allay} alt="allay" />
//         </div>
//         <div className="brand-cover">
//           <img src={elements} alt="elements" />
//         </div>
//         <div className="brand-cover">
//           <img src={kabani} alt="kabani" />
//         </div>{" "}
//         <div className="brand-cover">
//           <img src={mulla} alt="mulla" />
//         </div>{" "}
//         <div className="brand-cover">
//           <img src={orgello} alt="orgello" />
//         </div>{" "}
//         <div className="brand-cover">
//           <img src={pureheart} alt="pureheart" />
//         </div>{" "}
//         <div className="brand-cover">
//           <img src={tastynibbles} alt="tastynibbles" />
//         </div>{" "}
//         <div className="brand-cover">
//           <img src={wellway} alt="wellway" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutAssoci;

import React from "react";
import "./AboutAssoci.css";

const AboutAssoci = () => {
  return (
    <div className="AboutAssoci-wrapper">
      <h2 className="associated-title">Our Engagements & Collaborations</h2>
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
      <h2 className="associated-title">Supermarkets Embracing Our Platform</h2>
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
      <h2 className="brand-title">Our Partnered Brands</h2>
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
