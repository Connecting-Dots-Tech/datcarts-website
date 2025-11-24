import "./Features.css";
import { FaChartBar, FaCogs, FaStream, FaChartPie } from "react-icons/fa";
import {
  FaFlagCheckered,
  FaChartLine,
  FaMapMarkedAlt,
  FaTrophy,
  FaUndo,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartBar />,
    title: "Massive Market Potential",
    desc: "The in-store advertising market is a $20 billion opportunity ripe for disruption. DATCARTS is uniquely positioned to capture a significant share with our innovative smart cart solution.",
  },
  {
    icon: <FaCogs />,
    title: "Proven Technology",
    desc: "Our smart cart technology has been successfully piloted in major retail chains, demonstrating its effectiveness in enhancing customer engagement and driving sales.",
  },
  {
    icon: <FaStream />,
    title: "Multiple Revenue Streams",
    desc: "DATCARTS generates revenue through advertising, data analytics, and partnerships with retailers and brands, creating a diversified and scalable business model.",
  },
  {
    icon: <FaChartPie />,
    title: "Data-Driven Advantage",
    desc: "Our technology provides valuable insights into shopper behavior, enabling targeted advertising and personalized shopping experiences, giving retailers a competitive edge.",
  },
];

const roadmap = [
  {
    icon: <FaFlagCheckered color="#FFD600" />,
    title: "Phase 1: Pilot Program",
    desc: "Successful pilot programs in select retail locations, validating technology and market demand.",
  },
  {
    icon: <FaChartLine color="#FFD600" />,
    title: "Phase 2: Expansion",
    desc: "Strategic partnerships with major retail chains, expanding our footprint and market reach.",
  },
  {
    icon: <FaMapMarkedAlt color="#FFD600" />,
    title: "Phase 3: National Rollout",
    desc: "Nationwide deployment of DATCARTS in leading supermarkets and retail stores.",
  },
  {
    icon: <FaTrophy color="#FFD600" />,
    title: "Phase 4: Market Leadership",
    desc: "Establishing DATCARTS as the premier in-store advertising platform, driving innovation and maximizing market share.",
  },
];

const investorBenefits = [
  {
    icon: <FaUndo color="#1db954" />,
    title: "Early Access",
    desc: "Be among the first to invest in a groundbreaking technology poised to transform the retail landscape.",
  },
  {
    icon: <FaDollarSign color="#1db954" />,
    title: "Scalable Revenue",
    desc: "Benefit from a revenue model designed for rapid growth and significant returns as DATCARTS expands its market presence.",
  },
];

const Features = () => (
  <section className="features-section">
    <h3 className="features-title">INVEST IN THE FUTURE OF</h3>
    <h2 className="features-highlight">IN-STORE ENGAGEMENT</h2>
    <p className="features-desc">
      DATCARTS is revolutionizing in-store retail advertising with our
      innovative smart shopping cart technology. Join us in transforming the
      shopping experience and capturing a significant share of the $20 billion
      in-store advertising market.
    </p>
    <div className="features-cards">
      {features.map((f, idx) => (
        <div className="features-card" key={idx}>
          <div className="features-icon">{f.icon}</div>
          <div className="features-card-title">{f.title}</div>
          <div className="features-card-desc">{f.desc}</div>
        </div>
      ))}
    </div>

    {/* Growth Roadmap */}
    <div className="roadmap-section">
      <h3 className="roadmap-title">GROWTH ROADMAP</h3>
      <div className="feature-divide" />
      <div className="roadmap-list">
        {roadmap.map((item, idx) => (
          <div className="roadmap-item" key={idx}>
            <div className="roadmap-icon">{item.icon}</div>
            <div>
              <div className="roadmap-phase">{item.title}</div>
              <div className="roadmap-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Investor Benefits */}
    <div className="investor-section">
      <div className="investor-title">Investor Benefits</div>
      <div className="investor-subtitle">Exclusive Opportunities</div>
      <div className="investor-desc">
        Investing in DATCARTS offers unique advantages, including early access
        to a disruptive technology and the potential for substantial returns.
      </div>
      <div className="investor-benefits-cards">
        {investorBenefits.map((item, idx) => (
          <div className="investor-benefit-card" key={idx}>
            <div className="investor-benefit-icon">{item.icon}</div>
            <div>
              <div className="investor-benefit-title">{item.title}</div>
              <div className="investor-benefit-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="investor-sub-section">
      <div className="investor-cta-title">Ready to Invest?</div>
      <div className="investor-cta-desc">
        Join us in shaping the future of in-store advertising. Contact us today
        to learn more about investment opportunities and how you can be a part
        of the DATCARTS success story.
      </div>
      <button className="investor-cta-btn">
        Explore Investment Opportunities
      </button>
    </div>
  </section>
);

export default Features;
