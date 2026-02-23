import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">

        <Image
          src="/images/hero-santa-marta.png"
          alt="Santa Marta and Sierra Nevada de Santa Marta"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Fundación ProCaribbean
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light">
            Supporting Vulnerable Communities in the Caribbean Region and Indigenous Peoples of Colombia
          </p>
        </div>
      </section>

      {/* ================= ORIGINS ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Origins</h2>
        <p className="mb-6 leading-relaxed">
          ProCaribbean Foundation was established as the natural outcome of many years of direct field engagement and sustained commitment to addressing structural inequalities in the Colombian Caribbean region.
        </p>
        <p className="mb-6 leading-relaxed">
          The Foundation reflects the long-standing work of Ms Lorena Díaz Castillo, a Colombian economist and alumna, among others, of Universidad de los Andes, and a former staff member of the Congress of the Republic of Colombia.
        </p>
        <p className="leading-relaxed">
          The Foundation emerged from practical field experience in underserved territories, where access to healthcare, education and institutional support remains uneven.
        </p>
      </section>

      {/* ================= PROGRAMMES ================= */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Current Programmes
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Medical Equipment Support
              </h3>
              <p>
                Provision of specialised assistive and mobility equipment for children living with cerebral palsy and severe neurological conditions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Access to Education
              </h3>
              <p>
                Educational support initiatives benefiting children and young people from highly disadvantaged barrios.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Indigenous Community Cooperation
              </h3>
              <p>
                Structured cooperation with the Kogui, Wiwa, Arhuaco and Kankuamo peoples of the Sierra Nevada region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Impact & Achievements
        </h2>
        <p className="leading-relaxed">
          The Foundation measures its work through tangible and sustained outcomes, including structured field assessments conducted in coordination with local authorities in Santa Marta.
        </p>
      </section>

      {/* ================= MEDIA ================= */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Media & Field Documentation
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {["field-1.jpeg", "field-2.jpeg", "field-3.jpeg"].map((img) => (
              <div key={img} className="relative h-64">
                <Image
                  src={`/images/${img}`}
                  alt="Field documentation"
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <video controls className="w-full rounded">
              <source src="/videos/field-video-1.mp4" type="video/mp4" />
            </video>

            <video controls className="w-full rounded">
              <source src="/videos/field-video-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ================= GOVERNANCE ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Governance & Accountability
        </h2>
        <p className="leading-relaxed">
          ProCaribbean Foundation operates under principles of transparency, responsible stewardship and institutional integrity.
        </p>
      </section>

      {/* ================= STRATEGIC ================= */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Strategic Priorities 2025–2027
          </h2>
          <p>
            Expansion of paediatric medical support, educational access pathways and strengthened Indigenous cooperation frameworks.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
<section className="py-24 px-6 bg-gray-900 text-white">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
    
    {/* Contact Info */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Contact & Institutional Funding
      </h2>

      <address className="not-italic space-y-2">
        <p><strong>Fundación ProCaribbean</strong></p>
        <p>NIT: 901.800.244-1</p>
        <p>Calle 29I No. 21D–05</p>
        <p>El Piñón II</p>
        <p>Santa Marta, Magdalena</p>
        <p>Colombia</p>
        <p>Telephone: +57 301 461 6408</p>
        <p>Email: info@procaribbean.org</p>
      </address>
    </div>

    {/* Logo */}
    <div className="flex-1 flex justify-end">
      <Image
        src="/images/logo.jpeg"   // <-- your logo path
        alt="Fundación ProCaribbean Logo"
        width={200}              // adjust size as needed
        height={100}
        className="object-contain"
      />
    </div>

  </div>
</section>


    </main>
  );
}