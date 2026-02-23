import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">

      {/* ================= HERO ================= */}
<section className="relative h-screen flex items-center justify-center text-center text-white">

  {/* Background Image */}
  <Image
    src="/images/hero-santa-marta.png"
    alt="Santa Marta and Sierra Nevada de Santa Marta"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center">

    {/* Small Circular Logo */}
    <div className="mb-6">
      <Image
        src="/images/home-logo.jpeg"
        alt="Fundación ProCaribbean Logo"
        width={120}       // small size
        height={100}
        className="rounded-lg object-cover border-2 border-white"
      />
    </div>

    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Fundación ProCaribbean
    </h1>

    {/* Subtitle */}
    <p className="mt-6 text-xl md:text-2xl font-light">
      Supporting Vulnerable Communities in the Caribbean Region and Indigenous Peoples of Colombia
    </p>
  </div>
</section>

      {/* ================= ORIGINS ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Origins</h2>
        <p className="mb-6 leading-relaxed">ProCaribbean Foundation was established as the natural outcome of many years of direct field engagement and a sustained commitment to addressing structural inequalities in the Colombian Caribbean region.</p>
        <p className="mb-6 leading-relaxed">The Foundation reflects the long-standing work of Ms Lorena Díaz Castillo, a Colombian economist and alumna, among others, of Universidad de los Andes, as well as a former staff member of the Congress of the Republic of Colombia. Her professional experience combines economic analysis, public sector insight and community-based engagement, forming the institutional and ethical framework upon which the Foundation was built.</p>
        <p className="mb-6 leading-relaxed">Rather than emerging from a purely theoretical or academic initiative, ProCaribbean was shaped by practical experience in underserved territories — areas where access to healthcare, education and institutional support remains uneven. The Foundation was therefore created to provide structured, transparent and accountable responses to persistent social challenges affecting vulnerable and historically marginalised populations.</p>
        <p className="leading-relaxed">From its inception, ProCaribbean has operated with a clear emphasis on dignity, partnership and measurable impact, seeking to bridge local leadership with national and international collaboration.</p>
      </section>

      {/* ================= PROGRAMMES ================= */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Current Programmes
          </h2>
           <p className="mb-6">Under the direct leadership of Ms Díaz Castillo — and in coordination with associated foundations, civil society partners and local community representatives — ProCaribbean Foundation currently implements programmes in three principal areas:</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                1. Medical Equipment Support for Children
              </h3>
              <p>
                The Foundation provides targeted assistance to children living with cerebral palsy and severe neurological conditions, particularly in low-income and geographically isolated communities. This includes the acquisition of essential assistive devices, mobility equipment and basic clinical support tools, enabling improved quality of life and access to care.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                2. Access to Education for the Most Disadvantaged
              </h3>
              <p>
                ProCaribbean supports educational access for children and young people from the most underprivileged barrios and socially excluded environments. Initiatives include the provision of learning materials, institutional coordination and structured pathways designed to promote long-term social inclusion and opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                3. Cooperation with Indigenous Communities of the Sierra Nevada
              </h3>
              <p className="mb-4">
                The Foundation works in respectful partnership with Indigenous leadership and communities of the Sierra Nevada de Santa Marta, including the Kogui, Wiwa, Arhuaco and Kankuamo peoples. Engagement is conducted in alignment with local priorities, with particular attention to cultural integrity, community autonomy and sustainable development principles.
              </p>
              <p>Across all programmes, ProCaribbean Foundation maintains a commitment to transparency, accountability and responsible governance, ensuring that each initiative is implemented with measurable outcomes and long-term sustainability in view.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">Recent Field Assessment</h2>
        <p>In a recent field intervention, ProCaribbean Foundation conducted a structured needs assessment for children living with cerebral palsy and related neurological conditions in vulnerable communities.</p>
        <p>The assessment was carried out in coordination with local authorities in Santa Marta, ensuring secure access, institutional oversight and proper documentation of beneficiary needs.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>On-site evaluation of medical equipment requirements;</li>
          <li>Documentation of mobility and assistive support gaps;</li>
          <li>Family consultations regarding long-term care needs;</li>
          <li>Visual and recorded documentation maintained for transparency and reporting purposes.</li>
        </ul>
        <p>This coordinated approach reinforces the Foundation’s commitment to responsible field engagement and institutional alignment.</p>
      </section>

      <section className="py-24 px-6 bg-gray-100 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">Transparency & Financial Responsibility</h2>
        <p>ProCaribbean Foundation is committed to maintaining high standards of financial integrity, traceability and responsible resource management.</p>
        <p>All funds received are allocated to clearly defined programme objectives, with documented expenditure pathways and beneficiary verification procedures.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Defined allocation frameworks for programme spending;</li>
          <li>Internal documentation of procurement and distribution processes;</li>
          <li>Clear separation between programme funds and operational costs;</li>
          <li>Secure banking procedures for institutional transfers.</li>
        </ul>
        <p className="mb-3">Where appropriate, financial summaries and supporting documentation may be made available to institutional partners following formal inquiry and due diligence processes</p>
        <p>ProCaribbean Foundation views transparency not as an administrative requirement, but as an ethical obligation towards beneficiaries, partners and supporters.</p>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto space-y-6">
  <h2 className="text-3xl font-semibold">
    Ethical Standards & Safeguarding
  </h2>

  <p>
    ProCaribbean Foundation is committed to upholding the highest ethical 
    standards in all areas of its work.
  </p>

  <p>
    The Foundation recognises that engagement with vulnerable populations — 
    particularly children, persons with disabilities and Indigenous communities — 
    requires rigorous safeguarding frameworks and culturally respectful practice.
  </p>

  <div>
    <p className="font-medium mb-3">Key principles include:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Respect for human dignity and community autonomy;</li>
      <li>Informed engagement and non-exploitative representation;</li>
      <li>Protection of children and vulnerable adults in all programme activities;</li>
      <li>Responsible use of photographic and audiovisual documentation;</li>
      <li>Zero tolerance for discrimination, exploitation or misuse of resources.</li>
    </ul>
  </div>

  <p>
    All field activities are conducted with sensitivity to local context, with 
    particular attention to the rights and integrity of beneficiaries. 
    Safeguarding is treated not as a procedural formality, but as a core 
    institutional value.
  </p>
</section>

<section className="py-24 px-6 mb-6 bg-gray-100 max-w-5xl mx-auto space-y-6">
  <h2 className="text-3xl font-semibold">
    Institutional Vision & Long-Term Strategy
  </h2>

  <p>
    ProCaribbean Foundation’s long-term vision is to contribute to structurally 
    inclusive development in the Colombian Caribbean region through accountable, 
    community-aligned and measurable interventions.
  </p>

  <div>
    <p className="font-medium mb-3">The Foundation seeks to:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Strengthen access to essential healthcare support for vulnerable children;
      </li>
      <li>
        Expand equitable educational opportunities in marginalised urban and rural environments;
      </li>
      <li>
        Support Indigenous communities in preserving cultural integrity while enhancing social resilience;
      </li>
      <li>
        Build sustainable institutional partnerships at national and international levels.
      </li>
    </ul>
  </div>

  <p>
    The strategic approach emphasises gradual scaling, institutional stability 
    and evidence-based programme design rather than rapid expansion without 
    governance capacity.
  </p>
</section>


      {/* ================= IMPACT ================= */}
      {/* <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Impact & Achievements
        </h2>
        <p className="leading-relaxed">
          The Foundation measures its work through tangible and sustained outcomes, including structured field assessments conducted in coordination with local authorities in Santa Marta.
        </p>
      </section> */}

      {/* ================= MEDIA ================= */}
<section className="py-24 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-12">
      Media & Field Documentation
    </h2>

    {/* Symmetrical Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
      {["field-1.jpeg", "field-2.jpeg", "field-3.jpeg"].map((img) => (
        <div key={img} className="relative h-64 w-full">
          <Image
            src={`/images/${img}`}
            alt="Field documentation"
            fill
            className="object-cover rounded"
          />
        </div>
      ))}
    </div>

    {/* Centered Main Video */}
    <div className="flex justify-center mb-12">
      <div className="w-full md:w-2/3 aspect-video">
        <video controls className="w-full h-full rounded">
          <source src="/videos/field-video-2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    {/* Centered Additional Video */}
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 aspect-video">
        <video controls className="w-full h-full rounded">
          <source src="/videos/field-video-1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</section>



      {/* ================= GOVERNANCE ================= */}
      {/* <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Governance & Accountability
        </h2>
        <p className="leading-relaxed">
          ProCaribbean Foundation operates under principles of transparency, responsible stewardship and institutional integrity.
        </p>
      </section> */}

<section className="py-24 px-6 max-w-5xl mx-auto space-y-6">
  <h2 className="text-3xl font-semibold">
    Regional Context & Rationale
  </h2>

  <p>
    The Colombian Caribbean region, including the Sierra Nevada de Santa Marta 
    and surrounding urban areas, continues to experience structural inequalities 
    in healthcare access, educational opportunity and institutional support.
  </p>

  <p>
    Geographic isolation, socio-economic disparity and historical marginalisation 
    have contributed to persistent gaps in service provision. Children with 
    neurological conditions, families in highly disadvantaged barrios and 
    Indigenous communities in remote areas face compounded barriers to opportunity.
  </p>

  <p>
    ProCaribbean Foundation was established in response to these structural 
    realities, recognising that targeted, accountable and culturally aligned 
    interventions can contribute to long-term social stability and inclusion.
  </p>

  <p>
    The Foundation’s programmes are therefore designed within the broader 
    context of regional development challenges, rather than as isolated 
    charitable responses.
  </p>
</section>


      {/* ================= STRATEGIC ================= */}
      <section className="py-24 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
      Strategic Priorities 2025–2027
    </h2>

    <p className="mb-6">
      For the period 2025–2027, ProCaribbean Foundation has identified the following strategic priorities:
    </p>

    <ol className="list-decimal pl-6 space-y-3 mb-6">
      <li>
        Expansion of medical equipment support programmes for children with cerebral palsy and severe neurological conditions in underserved communities;
      </li>
      <li>
        Development of structured educational access pathways for children from highly disadvantaged barrios;
      </li>
      <li>
        Strengthening of cooperation mechanisms with Indigenous leadership structures of the Kogui, Wiwa, Arhuaco and Kankuamo peoples;
      </li>
      <li>
        Consolidation of internal governance, documentation and reporting frameworks to support institutional partnerships;
      </li>
      <li>
        Establishment of multi-year funding relationships aligned with measurable programme outcomes.
      </li>
    </ol>

    <p>
      The Foundation’s strategic outlook prioritises sustainability, accountability and institutional coherence over short-term activity growth.
    </p>
  </div>
</section>


      <section className="py-24 px-6 max-w-5xl mx-auto space-y-6">
  <h2 className="text-3xl font-semibold">
    Monitoring & Evaluation Framework
  </h2>

  <p>
    ProCaribbean Foundation applies a structured approach to monitoring and 
    evaluation in order to ensure programme effectiveness and responsible 
    resource allocation.
  </p>

  <div>
    <p className="font-medium mb-3">Core components of the framework include:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Baseline identification of beneficiary needs;</li>
      <li>Documented distribution and intervention records;</li>
      <li>Qualitative assessment of beneficiary impact;</li>
      <li>Internal review of programme delivery and expenditure alignment;</li>
      <li>Periodic reporting to institutional partners where applicable.</li>
    </ul>
  </div>

  <p>
    The Foundation recognises that measurable outcomes and traceable 
    implementation processes are essential for long-term credibility and 
    sustainable collaboration.
  </p>

  <p>
    Monitoring and evaluation mechanisms are continuously refined in line 
    with programme development and partnership requirements.
  </p>
</section>

{/* ================= INSTITUTIONAL FUNDING ================= */}
<section className="py-24 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto space-y-6">
    
    <h2 className="text-3xl md:text-4xl font-semibold">
      Contact & Institutional Funding
    </h2>

    <p>
      ProCaribbean Foundation welcomes formal engagement with institutional 
      donors, philanthropic partners and organisations committed to responsible 
      and measurable social development.
    </p>

    <div>
      <p className="font-medium mb-3">Funding cooperation may include:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Project-specific institutional grants;</li>
        <li>Multi-year programme partnerships;</li>
        <li>Targeted support for paediatric medical equipment acquisition;</li>
        <li>Educational access initiatives in structurally disadvantaged communities;</li>
        <li>Collaborative initiatives developed in alignment with Indigenous leadership priorities.</li>
      </ul>
    </div>

    <p>
      Secure international wire transfer instructions (via Bancolombia) are 
      provided upon formal inquiry and due diligence engagement.
    </p>

    <p>
      For institutional correspondence, partnership proposals or documentation requests.
    </p>

  </div>
</section>



     {/* ================= CONTACT ================= */}
<section className="py-24 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto space-y-12">
    
    {/* Top Row */}
    <div className="flex flex-col md:flex-row items-start gap-12">

      {/* Left – Contact Info */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Contact & Institutional Funding
        </h2>
        <address className="not-italic space-y-2 text-gray-300">
          <p><strong className="text-white">Fundación ProCaribbean</strong></p>
          <p>NIT: 901.800.244-1</p>
          <p>Calle 29I No. 21D–05</p>
          <p>El Piñón II</p>
          <p>Santa Marta, Magdalena</p>
          <p>Colombia</p>
          <br />
          <p>Email: info@procaribbean.org</p>
          <p>LinkedIn: ProCaribbean Foundation</p>
        </address>
      </div>

      {/* Middle – Additional Text */}
      <div className="flex-1 text-gray-300 space-y-4">
        <p>
          Fundación ProCaribbean is committed to creating sustainable partnerships
          and supporting initiatives that strengthen the Caribbean region.
        </p>
        <p>
          Reach out to discuss collaborations, funding opportunities, or general inquiries.
        </p>
      </div>

      {/* Right – Logo */}
      <div className="flex-1 flex justify-start md:justify-end">
        <Image
          src="/images/logo.jpeg"
          alt="Fundación ProCaribbean Logo"
          width={220}
          height={120}
          className="object-contain"
        />
      </div>

    </div>

  </div>
</section>




    </main>
  );
}