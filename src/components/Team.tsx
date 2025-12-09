import Image from "next/image";

const teamMembers = [
  {
    name: "ADARSH B",
    role: "CEO",
    desc: "4 YEARS IN SALES. 7 YEARS AS ENTREPRENEUR",
    img: "/assets/team/adharsh.png",
    roleColor: "#FFD600",
  },
  {
    name: "NEVIN MICHAEL",
    role: "CFO",
    desc: "6 YEARS EXPERIENCE AS HEAD OF OPERATIONS IN TECHNOLOGY COMPANIES AND VC FIRMS",
    img: "/assets/team/nevin.png",
    roleColor: "#FFD600",
  },
  {
    name: "ABHISHEK RAJ",
    role: "CRO",
    desc: "3 YEARS IN CIVIL ENGINEERING. 8 YEARS AS AN ENTREPRENEUR",
    img: "/assets/team/abhishek.png",
    roleColor: "#FFD600",
  },
  {
    name: "ABIN M P",
    role: "CMO",
    desc: "7+ YEARS IN FILM & MEDIA INDUSTRY AS CINEMATOGRAPHER",
    img: "/assets/team/abin.png",
    roleColor: "#FFD600",
  },
  {
    name: "KRISHNA BABUJI",
    role: "CTO",
    desc: "7+ Years in Technology sector",
    img: "/assets/team/kbabuji.png",
    roleColor: "#FFD600",
  },
];

const LeadershipSection = () => (
  <section className="relative w-full bg-black py-24 bg-[url('/assets/bgteam.svg')] bg-cover bg-center">
    <div className="mx-auto max-w-5xl px-6 text-center">
      <h3 className="mb-2 text-sm font-medium tracking-widest text-gold-light/80">
        OUR LEADERSHIP
      </h3>
      <h2 className="mb-8 text-4xl font-semibold tracking-tight text-green">
        Guiding the Future of Retail Media
      </h2>
      <p className="mx-auto mb-16 max-w-3xl text-base leading-relaxed text-white/80">
        A team of builders, operators, and innovators redefining in-store
        intelligence.
      </p>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((m, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-xl"
          >
            <div
              className="absolute left-0 top-0 h-1 w-full"
              style={{ backgroundColor: m.roleColor }}
            />

            <div className="mb-6 flex justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 shadow-xl transition-all duration-300 group-hover:border-white/40">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="text-center">
              <h4 className="mb-2 text-xl font-semibold text-white">
                {m.name}
              </h4>
              <p
                className="text-sm font-medium tracking-wider"
                style={{ color: m.roleColor }}
              >
                {m.role}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
