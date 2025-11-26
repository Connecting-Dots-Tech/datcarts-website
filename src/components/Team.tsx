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
  // {
  //   name: "K S KURIAN",
  //   role: "CSO",
  //   desc: "8+ YEARS EXPERIENCE IN TECHNOLOGY SECTOR",
  //   img: "/assets/team/kurian.png",
  //   roleColor: "#FFD600",
  // },
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

const Team = () => (
  <section className="flex min-h-screen w-full flex-col items-center justify-center bg-[url('/assets/bgteam.svg')] bg-cover bg-center px-4 py-20 max-md:bg-[url('/assets/bgteammob.svg')] max-md:py-5">
    {/* Header */}
    <div className="mb-12 max-w-4xl text-center max-md:mb-8">
      <h3 className="mb-1 text-lg font-medium tracking-wider text-white">
        OUR LEADERSHIP
      </h3>
      <h2 className="mb-3 text-4xl font-extrabold tracking-wide text-[#1db954] max-md:text-xl">
        DATCARTS COMPANY
      </h2>
      <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-[#d6e6d6] max-md:px-2 max-md:text-[0.97rem]">
        At DATCARTS, leadership means more than just steering the company — it's
        about shaping the future of retail advertising. Our leaders bring
        together expertise in technology, retail operations, marketing, and
        business strategy, united by one mission: to create a dynamic,
        personalized in-store media network that transforms the way brands
        connect with shoppers.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-black/65 to-black/45 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-2xl"
        >
          {/* Accent bar - color coded by role */}
          <div
            className="absolute left-0 top-0 h-1 w-full"
            style={{ backgroundColor: member.roleColor }}
          />

          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative h-50 w-50 overflow-hidden rounded-full border-4 border-white/20 shadow-xl transition-all duration-300 group-hover:border-white/40 group-hover:shadow-2xl">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="128px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h4 className="mb-2 text-xl font-semibold tracking-wide text-white">
              {member.name}
            </h4>
            <p
              className="mb-4 text-base font-medium tracking-wider"
              style={{ color: member.roleColor }}
            >
              {member.role}
            </p>
            <p className="text-xs font-light leading-relaxed text-[#d6e6d6]/80">
              {member.desc}
            </p>
          </div>

          {/* Hover gradient overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  </section>
);

export default Team;
