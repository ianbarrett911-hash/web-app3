export const weeklyBlog = {
  title: "This Week in Medical AI",
  summary: `
    <strong>AI is quietly fixing healthcare—today.</strong>
    <p class="mt-2">
      From hospital note‑taking that gives clinicians hours back to AI triage that shortens wait times,
      this week we look at tangible medical technology improvements you can feel now—and what’s next.
    </p>
    <ul class="list-disc pl-6 mt-2 mb-2 text-blue-100">
      <li>Near-term wins: scribing, imaging, and triage</li>
      <li>Medium-term shifts: care orchestration with planning AIs</li>
      <li>Safety rails for when systems get smarter</li>
    </ul>
  `,
  fullArticle: `
    <h2 class="text-2xl font-bold mb-2">Medical Technology Is Quietly Getting Great</h2>
    <p class="italic text-blue-700 mb-4">Estimated reading time: 7 minutes</p>
    <p class="mb-4">
      Healthcare doesn’t change overnight—but in 2025, AI is finally delivering pragmatic upgrades
      patients and clinicians can feel. The biggest improvements are not sci‑fi; they’re the
      invisible fixes that remove friction, surface risks earlier, and return time to care.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">1) Local AI that helps today</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Ambient scribing:</strong> On‑device or private cloud models now draft encounter notes,
      orders, and patient instructions automatically. Clinicians review and sign—saving 1‑2 hours per day.</li>
      <li><strong>Imaging triage:</strong> AI flags likely strokes, pneumothorax, PE, and fractures in minutes,
      prioritizing reads and speeding interventions without replacing radiologists.</li>
      <li><strong>Risk stratification:</strong> Hospital models watch vitals and labs to predict sepsis,
      delirium, and readmission—paging teams earlier and reducing length of stay.</li>
      <li><strong>Patient access:</strong> Chat and voice agents handle refill requests, scheduling,
      pre‑visit intake, and post‑op FAQs with human handoff on edge cases.</li>
    </ul>
    <p class="mb-4">
      These are narrow models with clear guardrails, audit logs, and clinician oversight. They’re not
      replacing expertise—they’re removing busywork and catching issues sooner.
    </p>
    <h3 class="text-xl font-semibold mt-6 mb-2">2) AGI‑class planning for care pathways</h3>
    <p class="mb-3">
      As reasoning models improve, the next leap is <em>care orchestration</em>: systems that can plan,
      simulate, and coordinate across multi‑month pathways—diabetes, oncology, heart failure—while
      staying aligned to clinician intent and patient preferences.
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Personalized pathways:</strong> Given guidelines, history, and SDOH data, agents propose
      stepwise plans, verify coverage, book follow‑ups, and adapt as labs and symptoms change.</li>
      <li><strong>Closed‑loop safety:</strong> Every action is paired with uncertainty estimates,
      counterfactual checks, and human approval points for high‑risk steps.</li>
      <li><strong>System‑level gains:</strong> Fewer gaps in care, fewer no‑shows, smoother handoffs,
      and measurable outcome improvements.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">3) Preparing for superhuman assistance</h3>
    <p class="mb-3">
      We don’t need mythical ASI to see risk. As capabilities compound, the right <em>rails</em> matter:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Data governance by default:</strong> Local first where possible, robust PHI controls, and
      differential privacy for research pipelines.</li>
      <li><strong>Model governance:</strong> Versioning, monitoring for drift, red‑teaming, and incident
      response runbooks—treated like clinical quality programs, not side projects.</li>
      <li><strong>Explainability where it counts:</strong> Not every model needs a thesis, but high‑stakes
      decisions demand traceable evidence, alternatives, and uncertainty.</li>
      <li><strong>Human authority:</strong> Clinicians remain accountable. Systems must make it easy to
      override, appeal, and audit.</li>
    </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">What this means for you</h3>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Patients:</strong> Shorter waits, clearer instructions, fewer repeat visits. Ask your clinic
      if they offer visit summaries and AI‑assisted follow‑ups.</li>
      <li><strong>Clinicians:</strong> Start with ambient scribing and inbox automation; measure time saved
      and error rates. Build toward pathway orchestration with clear outcome goals.</li>
      <li><strong>Health systems:</strong> Treat AI like an operations upgrade—tie deployments to throughput,
      safety, and cost metrics. Invest in governance early.</li>
    </ul>
    <hr class="my-6 border-indigo-300 opacity-40">
    <p class="text-sm text-blue-700 mt-4">
      <strong>Discussion Prompt:</strong> Where would AI save you the most time in a clinical day—or as a patient?
    </p>
  `,
  link: "#",
  badge: "This Week",
};