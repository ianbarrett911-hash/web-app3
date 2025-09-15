import { weeklyPosts } from './weeklyArchive.js';

export const categoryPages = {
"AI Microlearning": {
  title: "AI Microlearning – Quizzes",
  content: `
    <section class="mb-10" aria-labelledby="microlearning-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8">
        <h2 id="microlearning-title" class="text-3xl font-extrabold text-blue-900 mb-4">AI Microlearning</h2>
        <p class="text-blue-900 mb-4">Short, role‑relevant quizzes. Start at Beginner, then progress to Intermediate and Advanced. Each quiz has 10 questions with explanations for any missed items.</p>
        <div id="microlearning-root" class="mt-4"></div>
      </div>
    </section>
  `
},
"Medical AI Resources": {
  title: "Medical AI Resources – Clinicians & Patients",
  content: `
    <section class="mb-10" aria-labelledby="medical-ai-resources-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8">
        <h2 id="medical-ai-resources-title" class="text-3xl font-extrabold text-blue-900 mb-2">Practical AI in Healthcare</h2>
        <p class="text-blue-900 mb-6">Curated, trustworthy links for healthcare professionals and patients on AI-enabled care, safety, and adoption. External links open in a new tab.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section aria-labelledby="clinician-links">
            <h3 id="clinician-links" class="text-2xl font-semibold text-blue-900 mb-3">For Clinicians</h3>
            <ul class="list-disc pl-6 space-y-2 text-blue-900">
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.ama-assn.org/practice-management/digital/ama-augmented-intelligence-ai-resources" target="_blank" rel="noopener">AMA – Augmented Intelligence (AI) in Healthcare</a>
                <div class="text-sm text-gray-700">Policy, use cases, and guidance from the American Medical Association.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.ahrq.gov/learning-health-systems/aiml/index.html" target="_blank" rel="noopener">AHRQ – AI & Machine Learning in Health Systems</a>
                <div class="text-sm text-gray-700">Evidence and implementation resources from the U.S. Agency for Healthcare Research and Quality.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.nature.com/collections/hhajgjjfeh" target="_blank" rel="noopener">Nature – Clinical AI Collection</a>
                <div class="text-sm text-gray-700">Peer‑reviewed advances in clinical AI (imaging, triage, prediction).</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.thelancet.com/journals/landig/home" target="_blank" rel="noopener">The Lancet Digital Health</a>
                <div class="text-sm text-gray-700">Research at the intersection of clinical care and digital technologies, including AI.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener">NIST AI Risk Management Framework</a>
                <div class="text-sm text-gray-700">Practical risk governance guidance applicable to clinical AI deployments.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device" target="_blank" rel="noopener">FDA – AI/ML Software as a Medical Device (SaMD)</a>
                <div class="text-sm text-gray-700">Regulatory perspective on AI/ML-enabled medical devices and change control.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://who.int/publications/i/item/9789240077987" target="_blank" rel="noopener">WHO – Generative AI in Health: Guidance</a>
                <div class="text-sm text-gray-700">World Health Organization considerations for safe, effective use of generative AI in health.</div>
              </li>
            </ul>
          </section>

          <section aria-labelledby="patient-links">
            <h3 id="patient-links" class="text-2xl font-semibold text-blue-900 mb-3">For Patients</h3>
            <ul class="list-disc pl-6 space-y-2 text-blue-900">
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.mayoclinic.org/medical-professionals/center-for-digital-health/artificial-intelligence" target="_blank" rel="noopener">Mayo Clinic – AI in Medicine (overview)</a>
                <div class="text-sm text-gray-700">Plain‑language explanations and examples of AI supporting care.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.cancer.gov/news-events/cancer-currents-blog/2023/ai-cancer-research-clinical-care" target="_blank" rel="noopener">NCI – How AI is used in Cancer Care</a>
                <div class="text-sm text-gray-700">From the U.S. National Cancer Institute: where AI helps today and what to ask your care team.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.healthit.gov/topic/innovations/artificial-intelligence-ai-health-it" target="_blank" rel="noopener">ONC – AI & Health IT (Patient Info)</a>
                <div class="text-sm text-gray-700">U.S. Office of the National Coordinator resources on AI, privacy, and rights.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.nhs.uk/nhs-services/online-services/about-the-nhs-app/nhs-app-and-artificial-intelligence-ai" target="_blank" rel="noopener">NHS – AI in the NHS App (UK)</a>
                <div class="text-sm text-gray-700">How AI features support access and safety within the NHS app.</div>
              </li>
              <li>
                <a class="underline text-blue-700 hover:text-yellow-600" href="https://www.who.int/news-room/questions-and-answers/item/artificial-intelligence-and-health" target="_blank" rel="noopener">WHO – Q&A: Artificial Intelligence and Health</a>
                <div class="text-sm text-gray-700">Frequently asked questions about AI in health from the World Health Organization.</div>
              </li>
            </ul>
          </section>
        </div>

        <div class="mt-8">
          <a href="#" data-category="Medical AI Resources" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Back to Medical Resources</a>
        </div>
      </div>
    </section>
  `
},
"Weekly Archive": {
  title: "Weekly AI Insights – Archive",
  content: `
    <section class="mb-10" aria-labelledby="weekly-archive-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8">
        <h2 id="weekly-archive-title" class="text-3xl font-extrabold text-blue-900 mb-4">Previous Weekly Articles</h2>
        <p class="text-blue-900 mb-4">Browse past Weekly AI Insights. Click a title to read.</p>
        <div id="weekly-archive-list">
          ${weeklyPosts.map((p, i) => `
            <article class="mb-6 p-4 bg-white rounded shadow">
              <header class="flex items-center justify-between mb-2">
                <button type="button" class="text-left underline text-blue-700 hover:text-yellow-600 font-semibold" data-weekly-index="${i}">${p.title}</button>
                <time class="text-sm text-gray-600">${new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
              </header>
              <p class="text-gray-800">${p.summary}</p>
            </article>
          `).join('')}
        </div>
        <div class="mt-6">
          <button id="backToDashboardFromArchive" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Back to Dashboard</button>
        </div>
      </div>
    </section>
  `
},
"AI / AGM / ASI": {
  title: "Artificial Intelligence (AI), AGI & ASI",
  content: `
    <section class="mb-10" aria-labelledby="ai-agi-asi-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="ai-agi-asi-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          Understanding AI, AGI, and ASI: The Spectrum of Machine Intelligence
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            Artificial Intelligence (AI) is transforming our world, powering everything from voice assistants to medical diagnostics. But AI is just the beginning of a spectrum of machine intelligence that includes Artificial General Intelligence (AGI) and Artificial Superintelligence (ASI). Understanding these concepts is key to grasping the opportunities and challenges that lie ahead.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">Narrow AI (ANI): Where We Are Today</h3>
          <p>
            <strong>Narrow AI</strong>, also known as Artificial Narrow Intelligence (ANI), refers to systems designed to perform specific tasks—often with superhuman efficiency. Examples include language translation, image recognition, recommendation engines, and game-playing AIs like AlphaGo. These systems excel at their programmed functions but lack the ability to transfer knowledge or reasoning to unrelated domains.
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Examples:</strong> Siri, Alexa, Google Translate, facial recognition, spam filters, self-driving car navigation.
            </li>
            <li>
              <strong>Limitations:</strong> Cannot truly "understand" or generalize beyond their training; they follow patterns in data.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Artificial General Intelligence (AGI): The Next Frontier</h3>
          <p>
            <strong>AGI</strong> describes a hypothetical machine with the ability to understand, learn, and apply intelligence across a wide range of tasks—matching or exceeding human cognitive abilities. AGI would be able to reason, plan, solve problems, think abstractly, and learn from experience, much like a human being.
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Potential:</strong> AGI could revolutionize science, medicine, education, and more by autonomously tackling complex, open-ended problems.
            </li>
            <li>
              <strong>Status:</strong> AGI does not yet exist. It remains a subject of research, debate, and speculation among scientists and philosophers.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Artificial Superintelligence (ASI): Beyond Human Intelligence</h3>
          <p>
            <strong>ASI</strong> refers to a level of intelligence far surpassing the brightest and most gifted human minds in every field—including creativity, wisdom, and social skills. ASI could rapidly improve itself, leading to an "intelligence explosion" sometimes called the Singularity.
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Possibilities:</strong> ASI could solve problems currently beyond human comprehension, but it also raises profound ethical, existential, and safety concerns.
            </li>
            <li>
              <strong>Debate:</strong> Some experts believe ASI could emerge soon after AGI, while others are more skeptical or warn of unpredictable consequences.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Why Does This Progression Matter?</h3>
          <p>
            The journey from Narrow AI to AGI and potentially ASI is not just a technological evolution—it’s a transformation that could reshape society, the economy, and even what it means to be human. Each step brings new opportunities and risks, making it essential for everyone—not just scientists and engineers—to understand these concepts and participate in the conversation.
          </p>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://en.wikipedia.org/wiki/Artificial_general_intelligence" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Wikipedia: Artificial General Intelligence</a></li>
              <li><a href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Wait But Why: The AI Revolution</a></li>
              <li><a href="https://www.nickbostrom.com/superintelligence.html" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Nick Bostrom, "Superintelligence"</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
},
"ASI Superintelligence": {
  title: "ASI Superintelligence",
  content: `
    <section class="mb-10" aria-labelledby="asi-superintelligence-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="asi-superintelligence-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          Artificial Superintelligence (ASI): Beyond Human Intelligence
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            Artificial Superintelligence (ASI) represents a level of machine intelligence that vastly surpasses the brightest and most gifted human minds in every field, including scientific creativity, general wisdom, and social skills. While today’s AI systems are powerful, they remain narrow in scope. ASI is a hypothetical future stage where machines not only match but greatly exceed human cognitive abilities.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">What Is ASI?</h3>
          <p>
            ASI is the theoretical point at which artificial intelligence becomes capable of recursive self-improvement, rapidly increasing its own intelligence and capabilities far beyond human comprehension. This leap is sometimes referred to as the “intelligence explosion” or the technological singularity.
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Self-Improvement:</strong> ASI could redesign its own architecture, optimize its learning, and innovate at speeds impossible for humans.
            </li>
            <li>
              <strong>Superhuman Abilities:</strong> It could solve complex scientific, social, and philosophical problems, create new technologies, and potentially reshape civilization.
            </li>
            <li>
              <strong>Unpredictable Outcomes:</strong> The emergence of ASI could bring about changes that are difficult or impossible for us to foresee.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Opportunities and Risks</h3>
          <p>
            The arrival of ASI could unlock extraordinary benefits—curing diseases, ending poverty, and solving global challenges. However, it also raises profound risks and ethical dilemmas:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Alignment:</strong> How do we ensure ASI’s goals align with human values and well-being?
            </li>
            <li>
              <strong>Control:</strong> Can we maintain meaningful control over a superintelligent system?
            </li>
            <li>
              <strong>Existential Risk:</strong> If misaligned, ASI could pose risks to humanity’s survival.
            </li>
            <li>
              <strong>Societal Impact:</strong> ASI could disrupt economies, governments, and social structures on a global scale.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">The Debate: When and How?</h3>
          <p>
            Experts disagree on when (or if) ASI will emerge. Some believe it could happen within decades of achieving AGI, while others are more skeptical. The debate centers on technical feasibility, timelines, and the best approaches to safety and governance.
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Optimists:</strong> See ASI as a path to solving humanity’s greatest challenges.
            </li>
            <li>
              <strong>Pessimists:</strong> Warn of existential dangers and advocate for strict oversight and research into alignment.
            </li>
            <li>
              <strong>Pragmatists:</strong> Focus on building robust, transparent, and value-aligned AI systems as we advance.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Why Does ASI Matter?</h3>
          <p>
            The prospect of ASI is not just a technological question—it’s a philosophical and ethical one. It challenges us to reflect on what it means to be human, how we define intelligence, and what kind of future we want to create.
          </p>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://www.nickbostrom.com/superintelligence.html" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Nick Bostrom, "Superintelligence"</a></li>
              <li><a href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Wait But Why: The AI Revolution</a></li>
              <li><a href="https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Future of Life Institute: Benefits & Risks of AI</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
},
Work: {
  title: "AI & Work",
  content: `
    <section class="mb-10" aria-labelledby="work-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="work-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          The Impact of AI, AGI, and ASI on Work
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            Artificial Intelligence is rapidly transforming the world of work. From automating repetitive tasks to enabling new forms of collaboration, AI is reshaping industries, job roles, and the skills needed to thrive. As we look ahead to the possibilities of Artificial General Intelligence (AGI) and Artificial Superintelligence (ASI), the future of work becomes even more complex and fascinating.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">AI Today: Automation and Augmentation</h3>
          <p>
            <strong>Narrow AI</strong> is already automating routine tasks in fields like manufacturing, logistics, finance, and customer service. AI-powered tools can analyze data, recognize patterns, and even interact with customers, freeing humans to focus on more creative and strategic work.
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Job Transformation:</strong> Many jobs are evolving rather than disappearing. Workers are increasingly collaborating with AI systems, using them as tools to boost productivity and innovation.
            </li>
            <li>
              <strong>New Opportunities:</strong> AI is creating demand for new roles—such as data scientists, AI ethicists, and machine learning engineers—while also enabling entrepreneurship and remote work.
            </li>
            <li>
              <strong>Challenges:</strong> Some workers face displacement, especially in roles that are highly repetitive or predictable. Reskilling and lifelong learning are essential to adapt.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">AGI: The Next Frontier for Work</h3>
          <p>
            <strong>Artificial General Intelligence (AGI)</strong> would be capable of performing any intellectual task that a human can do. The arrival of AGI could fundamentally change the nature of work:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Universal Automation:</strong> AGI could automate not just routine tasks, but also complex problem-solving, creativity, and decision-making across all industries.
            </li>
            <li>
              <strong>Redefining Human Value:</strong> As machines match or exceed human cognitive abilities, society may need to rethink the meaning of work, purpose, and value.
            </li>
            <li>
              <strong>Social and Economic Shifts:</strong> AGI could lead to massive productivity gains, but also raise questions about income distribution, employment, and social safety nets.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">ASI: Work in the Age of Superintelligence</h3>
          <p>
            <strong>Artificial Superintelligence (ASI)</strong> would surpass human intelligence in every domain. The implications for work are profound and largely speculative:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Radical Transformation:</strong> ASI could solve problems and create technologies beyond human imagination, potentially rendering most human labor obsolete.
            </li>
            <li>
              <strong>New Roles and Purposes:</strong> Humans may focus on areas where meaning, creativity, and connection matter most, or invent entirely new forms of contribution and fulfillment.
            </li>
            <li>
              <strong>Existential Questions:</strong> The rise of ASI challenges us to consider what it means to contribute, create, and find purpose in a world where machines can do almost anything.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Preparing for the Future</h3>
          <p>
            The future of work in an AI-driven world is uncertain, but humans have always adapted to technological change. By embracing lifelong learning, fostering creativity, and focusing on uniquely human strengths, we can shape a future where technology empowers rather than replaces us.
          </p>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://www.weforum.org/agenda/2023/01/future-of-jobs-2023-ai/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">World Economic Forum: The Future of Jobs Report</a></li>
              <li><a href="https://www.mckinsey.com/featured-insights/future-of-work" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">McKinsey: The Future of Work</a></li>
              <li><a href="https://www.oxfordmartin.ox.ac.uk/downloads/academic/The_Future_of_Employment.pdf" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Oxford Study: The Future of Employment</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
},
  Meaning: {
  title: "Meaning",
  content: `
    <section class="mb-10" aria-labelledby="meaning-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="meaning-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          What Does It Mean to Be Human in an AI-Driven World?
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            As artificial intelligence (AI) becomes increasingly woven into the fabric of our daily lives, we are prompted to reflect on what it truly means to be human. The rise of intelligent machines challenges us to reconsider our roles, values, and aspirations in a world where technology can perform tasks once thought to be uniquely human. This exploration delves into the evolving relationship between humanity and AI, focusing on the enduring questions of purpose, creativity, and fulfillment.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">The Changing Nature of Work and Purpose</h3>
          <p>
            For centuries, work has been a cornerstone of human identity and purpose. Our jobs have provided not only livelihoods but also a sense of meaning, accomplishment, and social connection. With AI automating routine tasks and even encroaching on complex professions, many wonder: <strong>What will be left for humans to do?</strong>
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Redefining Purpose:</strong> As AI takes over repetitive and analytical work, humans are increasingly free to focus on roles that require empathy, ethical judgment, and interpersonal skills—areas where machines still lag behind. This shift invites us to redefine purpose not by what we produce, but by how we connect, care, and create value for one another.
            </li>
            <li>
              <strong>Lifelong Learning:</strong> In an AI-driven world, adaptability becomes a key human trait. Embracing lifelong learning and curiosity allows us to continually reinvent ourselves, discover new passions, and remain relevant in a rapidly changing landscape.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Creativity: The Human Edge</h3>
          <p>
            AI can compose music, generate art, and write stories, often with impressive results. Yet, human creativity is more than the sum of patterns and data.
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Imagination and Originality:</strong> While AI can remix existing ideas, humans possess the ability to imagine the unprecedented, to dream beyond the data. Our creativity is fueled by emotion, intuition, and lived experience—qualities that are difficult to encode.
            </li>
            <li>
              <strong>Collaboration with AI:</strong> Rather than viewing AI as a competitor, many artists and innovators see it as a collaborator. AI can spark inspiration, handle technical details, or suggest novel combinations, freeing humans to focus on vision and meaning.
            </li>
            <li>
              <strong>Authenticity and Expression:</strong> Human creativity is deeply personal. Our art, music, and writing are expressions of our unique perspectives, struggles, and joys. In a world of machine-generated content, the value of authentic human expression may become even more cherished.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Fulfillment and Well-Being</h3>
          <p>
            As AI handles more of our practical needs, we are left with a profound question: <strong>What brings true fulfillment?</strong>
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Relationships and Community:</strong> Social bonds remain at the heart of human happiness. Technology can connect us across distances, but it cannot replace the warmth of genuine friendship, love, and belonging.
            </li>
            <li>
              <strong>Contribution and Impact:</strong> Many find fulfillment in making a difference—helping others, advancing knowledge, or improving the world. AI can amplify our impact, but the drive to contribute is a distinctly human motivation.
            </li>
            <li>
              <strong>Mindfulness and Presence:</strong> In a fast-paced, tech-saturated world, practices like mindfulness, reflection, and gratitude help us stay grounded. They remind us to savor the present moment and appreciate the richness of human experience.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Ethical and Philosophical Reflections</h3>
          <p>
            The advance of AI raises deep ethical questions:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>What values should guide AI development?</li>
            <li>How do we ensure technology serves humanity, rather than the other way around?</li>
            <li>What rights and responsibilities do we have in shaping the future?</li>
          </ul>
          <p>
            Engaging with these questions is itself a uniquely human endeavor, requiring wisdom, empathy, and foresight.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion: Embracing Our Humanity</h3>
          <p>
            To be human in an AI-driven world is to embrace the qualities that machines cannot replicate: empathy, imagination, moral judgment, and the capacity for wonder. It is to seek purpose not just in productivity, but in connection, growth, and meaning. As technology advances, it is up to us to shape a future where AI enhances—not diminishes—our humanity.
          </p>
          <p>
            By reflecting on these questions and nurturing our distinctly human gifts, we can find fulfillment and purpose in a world transformed by intelligent machines.
          </p>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://www.ynharari.com/book/21-lessons/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Yuval Noah Harari, "21 Lessons for the 21st Century"</a></li>
              <li><a href="https://www.sherryturkle.com/reclaiming-conversation" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Sherry Turkle, "Reclaiming Conversation"</a></li>
              <li><a href="https://www.life3book.com/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Max Tegmark, "Life 3.0: Being Human in the Age of Artificial Intelligence"</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
  `,

  },
Ethics: {
  title: "Ethics",
  content: `
    <section class="mb-10" aria-labelledby="ethics-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="ethics-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          Ethics in the Age of AI, AGI, and ASI
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            As artificial intelligence (AI) systems become more powerful and pervasive, ethical considerations are at the forefront of technological progress. The transition from Narrow AI to Artificial General Intelligence (AGI) and eventually Artificial Superintelligence (ASI) raises profound questions about fairness, accountability, transparency, and the future of humanity itself.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">Ethical Challenges of AI Today</h3>
          <p>
            Current AI systems already impact millions of lives, from hiring algorithms to facial recognition and autonomous vehicles. Key ethical issues include:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Bias and Fairness:</strong> AI can inherit and amplify biases present in training data, leading to unfair or discriminatory outcomes.
            </li>
            <li>
              <strong>Transparency:</strong> Many AI models, especially deep learning systems, are "black boxes"—their decision-making processes are difficult to interpret or explain.
            </li>
            <li>
              <strong>Accountability:</strong> When AI systems make mistakes or cause harm, it can be unclear who is responsible: the developer, the user, or the AI itself?
            </li>
            <li>
              <strong>Privacy:</strong> AI-driven data collection and surveillance raise concerns about individual rights and consent.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">AGI and the Expansion of Ethical Concerns</h3>
          <p>
            The development of AGI—machines with human-level intelligence—would amplify existing ethical challenges and introduce new ones:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Autonomy and Control:</strong> How do we ensure AGI systems act in alignment with human values and intentions?
            </li>
            <li>
              <strong>Value Alignment:</strong> Defining and encoding ethical principles that reflect diverse human perspectives is a major challenge.
            </li>
            <li>
              <strong>Societal Impact:</strong> AGI could disrupt economies, labor markets, and social structures, raising questions about justice and equity.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">ASI: Existential and Global Risks</h3>
          <p>
            Artificial Superintelligence (ASI) would possess capabilities far beyond human comprehension. The ethical stakes become existential:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Existential Risk:</strong> Misaligned or uncontrolled ASI could pose risks to humanity’s survival.
            </li>
            <li>
              <strong>Global Governance:</strong> Coordinating international efforts to ensure safe and beneficial ASI is a complex and urgent challenge.
            </li>
            <li>
              <strong>Moral Status:</strong> If ASI develops consciousness or sentience, what rights or moral consideration should it receive?
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Building Ethical AI: Principles and Practices</h3>
          <p>
            Addressing these challenges requires a multidisciplinary approach, involving ethicists, technologists, policymakers, and the public. Key principles include:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Transparency and Explainability</strong>
            </li>
            <li>
              <strong>Fairness and Non-Discrimination</strong>
            </li>
            <li>
              <strong>Accountability and Responsibility</strong>
            </li>
            <li>
              <strong>Human Oversight and Control</strong>
            </li>
            <li>
              <strong>Beneficence and Non-Maleficence</strong>
            </li>
            <li>
              <strong>Inclusivity and Public Engagement</strong>
            </li>
          </ul>
          <p>
            As we advance toward AGI and ASI, ongoing dialogue and proactive governance are essential to ensure that AI technologies serve the common good and respect fundamental human values.
          </p>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://futureoflife.org/ai-principles/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Asilomar AI Principles (Future of Life Institute)</a></li>
              <li><a href="https://ai.google/responsibilities/responsible-ai-practices/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Google: Responsible AI Practices</a></li>
              <li><a href="https://www.nature.com/articles/d41586-020-03186-4" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Nature: The Ethics of Artificial Intelligence</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
},
"AI Impact Support": {
  title: "AI Impact Support — UK & US",
  content: `
    <section class="mb-10" aria-labelledby="ai-impact-support-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="ai-impact-support-title" class="text-4xl font-extrabold text-blue-900 mb-4">AI Impact Support — practical help for workers</h2>
        <div class="text-blue-900 text-lg">
          <p>
            As AI changes how work is done, some roles will evolve while others may shrink. This page collects practical support services, retraining routes, and guidance for people affected by workplace change in the UK and the US. The focus is on coping, retraining, mental health, and navigating job transitions.
          </p>

          <h3 class="text-xl font-semibold mt-6 mb-2">Key principles</h3>
          <ul class="list-disc pl-6 mb-2">
            <li><strong>Recognise change early:</strong> Identify which tasks in a role are most likely to be automated and where human strengths still matter (empathy, judgement, complex communication).</li>
            <li><strong>Reskill with purpose:</strong> Focus on transferable skills — problem solving, digital literacy, communication, and domain knowledge that complements automation.</li>
            <li><strong>Use available support:</strong> Governments, charities and employers often provide retraining funds, career coaching, and mental health support.</li>
            <li><strong>Plan financially:</strong> Seek early advice on benefits, redundancy pay, and local support schemes to reduce stress during transitions.</li>
          </ul>

          <h3 class="text-xl font-semibold mt-6 mb-2">United Kingdom — Support & services</h3>
          <div class="mb-2">
            <p class="note">Immediate help and careers advice</p>
            <ul class="list-disc pl-6">
              <li><strong>Jobcentre Plus</strong> — government employment support, benefits guidance, and access to local Work Coaches. <a href="https://www.gov.uk/contact-jobcentre-plus" target="_blank" rel="noopener" class="underline text-blue-700">Contact Jobcentre Plus</a></li>
              <li><strong>National Careers Service</strong> — free careers advice, skills assessments, and local training opportunities. <a href="https://nationalcareers.service.gov.uk/" target="_blank" rel="noopener" class="underline text-blue-700">National Careers Service</a></li>
              <li><strong>ACAS</strong> — workplace advice on redundancy, consultation, and employment rights. <a href="https://www.acas.org.uk/" target="_blank" rel="noopener" class="underline text-blue-700">ACAS</a></li>
            </ul>
          </div>

          <div class="mb-2">
            <p class="note">Retraining & funding</p>
            <ul class="list-disc pl-6">
              <li><strong>Skills Bootcamps</strong> — funded short courses in digital, technical and managerial skills. Ask your local college or the National Careers Service about availability.</li>
              <li><strong>Lifetime Skills Guarantee</strong> — free courses for people without level 3 qualifications in selected subjects; check eligibility and local offers.</li>
              <li><strong>Local Authorities & Combined Authorities</strong> — many run targeted retraining and return-to-work programmes; search your local council website.</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mt-6 mb-2">United States — Support & services</h3>
          <div class="mb-2">
            <p class="note">Immediate help and careers advice</p>
            <ul class="list-disc pl-6">
              <li><strong>American Job Centers</strong> — local career centres offering training, unemployment support, and job search help. <a href="https://www.careeronestop.org/" target="_blank" rel="noopener" class="underline text-blue-700">CareerOneStop / Find local center</a></li>
              <li><strong>Workforce Innovation and Opportunity Act (WIOA)</strong> — federally funded programmes for training and re-employment services. Contact your state workforce board for details.</li>
              <li><strong>State Unemployment Agencies</strong> — guidance on benefits and transition support (search your state agency site).</li>
            </ul>
          </div>

          <div class="mb-2">
            <p class="note">Retraining & funding</p>
            <ul class="list-disc pl-6">
              <li><strong>Community colleges</strong> — affordable and practical retraining, short courses, and certificates in growing fields such as IT, healthcare, and skilled trades.</li>
              <li><strong>Apprenticeships & apprenticeships.gov</strong> — paid on-the-job training routes for many careers; apprenticeships exist for adults as well as school leavers.</li>
              <li><strong>Nonprofit retraining programmes</strong> — organisations like Goodwill and Year Up offer training and placement support.</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mt-6 mb-2">Mental health & coping</h3>
          <p class="note">Losing or changing a job can be stressful. Encourage people to seek support early.</p>
          <ul class="list-disc pl-6 mb-2">
            <li><strong>UK:</strong> Samaritans, NHS mental health services and local charities provide free support. <a href="https://www.samaritans.org/" target="_blank" rel="noopener" class="underline text-blue-700">Samaritans</a></li>
            <li><strong>US:</strong> Use local community health services, Employee Assistance Programs (EAP), and crisis lines (988 in the US).</li>
            <li>Practical steps: keep a routine, seek peer support, and break job search into small tasks. Use local libraries and community centres for internet access and CV help.</li>
          </ul>

          <h3 class="text-xl font-semibold mt-6 mb-2">Advice for employers and managers</h3>
          <ul class="list-disc pl-6 mb-2">
            <li>Communicate early, clearly, and with empathy about changes and the rationale behind automation decisions.</li>
            <li>Offer reskilling, redeployment, and transition packages where possible rather than immediate redundancy.</li>
            <li>Provide access to career coaching and practical financial advice as part of redundancy support packages.</li>
          </ul>

          <h3 class="text-xl font-semibold mt-6 mb-2">Useful links & organisations</h3>
          <ul class="list-disc pl-6 mb-2">
            <li><a href="https://www.gov.uk/" target="_blank" rel="noopener" class="underline text-blue-700">UK government services</a></li>
            <li><a href="https://www.careeronestop.org/" target="_blank" rel="noopener" class="underline text-blue-700">CareerOneStop (US)</a></li>
            <li><a href="https://www.acas.org.uk/" target="_blank" rel="noopener" class="underline text-blue-700">ACAS (UK workplace advice)</a></li>
            <li><a href="https://www.nationalcareers.service.gov.uk/" target="_blank" rel="noopener" class="underline text-blue-700">National Careers Service (UK)</a></li>
            <li>Charities & local support: Goodwill, Citizens Advice (UK), community colleges, and local employment charities.</li>
          </ul>

          <div class="mt-6 font-semibold">
            <strong>Quick action checklist</strong>
            <ul class="list-disc pl-6 mt-2">
              <li>Identify transferable skills and document achievements.</li>
              <li>Contact local career services and enquire about funded training.</li>
              <li>Check eligibility for benefits or redundancy support early.</li>
              <li>Look after mental health — talk to a GP, EAP, or trusted colleague.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
},
Society: {
  title: "Society",
  content: `
    <section class="mb-10" aria-labelledby="society-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="society-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          Society in the Age of AI, AGI, and ASI
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            The rise of Artificial Intelligence (AI), and the future possibilities of Artificial General Intelligence (AGI) and Artificial Superintelligence (ASI), are poised to reshape society in profound ways. From how we learn and work to how we govern and connect, these technologies will influence every aspect of our communities and institutions.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">AI Today: Transforming Daily Life and Institutions</h3>
          <p>
            <strong>Narrow AI</strong> is already embedded in our daily lives—powering recommendation systems, automating customer service, enhancing healthcare diagnostics, and optimizing transportation. In society, AI is:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Education:</strong> Personalized learning platforms adapt to individual student needs, making education more accessible and effective.
            </li>
            <li>
              <strong>Healthcare:</strong> AI assists in early disease detection, drug discovery, and patient care, improving outcomes and efficiency.
            </li>
            <li>
              <strong>Public Services:</strong> Governments use AI for smart city planning, resource allocation, and fraud detection.
            </li>
            <li>
              <strong>Social Media & Communication:</strong> AI shapes the information we see, influencing opinions, trends, and even elections.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">AGI: Societal Shifts and New Challenges</h3>
          <p>
            <strong>Artificial General Intelligence (AGI)</strong> would be capable of human-level reasoning and learning across any domain. Its arrival could bring:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Economic Disruption:</strong> AGI could automate most jobs, requiring societies to rethink employment, income distribution, and social safety nets.
            </li>
            <li>
              <strong>Education Revolution:</strong> AGI-powered tutors and mentors could make high-quality education universally available, but also challenge traditional schooling models.
            </li>
            <li>
              <strong>Governance and Law:</strong> AGI could assist in policy-making, legal analysis, and even direct democratic processes, raising questions about transparency and accountability.
            </li>
            <li>
              <strong>Social Inequality:</strong> Access to AGI technologies could widen or bridge gaps between nations and communities, depending on how benefits are shared.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">ASI: The Societal Unknown</h3>
          <p>
            <strong>Artificial Superintelligence (ASI)</strong> would surpass human intelligence in every domain. Its impact on society is largely speculative but could include:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Global Coordination:</strong> ASI could help solve complex global challenges—climate change, pandemics, poverty—if aligned with human values.
            </li>
            <li>
              <strong>Governance Risks:</strong> Control over ASI could become the most significant power in history, raising concerns about misuse, concentration of power, and existential risk.
            </li>
            <li>
              <strong>Cultural and Ethical Shifts:</strong> ASI may challenge our concepts of identity, agency, and what it means to be human, prompting new ethical and philosophical debates.
            </li>
            <li>
              <strong>Societal Redefinition:</strong> The very structure of society—work, relationships, governance—could be transformed in ways we cannot yet predict.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Preparing Society for the Future</h3>
          <p>
            Navigating the societal impacts of AI, AGI, and ASI requires foresight, adaptability, and inclusive dialogue. Key priorities include:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Equitable Access:</strong> Ensuring all communities benefit from AI advancements, not just a privileged few.
            </li>
            <li>
              <strong>Ethical Governance:</strong> Developing transparent, accountable frameworks for AI deployment and oversight.
            </li>
            <li>
              <strong>Public Engagement:</strong> Involving citizens in shaping the future of AI and its role in society.
            </li>
            <li>
              <strong>Resilience and Adaptation:</strong> Building systems and cultures that can adapt to rapid technological change.
            </li>
          </ul>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://www.brookings.edu/research/how-artificial-intelligence-is-transforming-the-world/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Brookings: How Artificial Intelligence is Transforming the World</a></li>
              <li><a href="https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Future of Life Institute: Benefits & Risks of AI</a></li>
              <li><a href="https://www.weforum.org/agenda/archive/artificial-intelligence/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">World Economic Forum: AI and Society</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
},
Future: {
  title: "Future",
  content: `
    <section class="mb-10" aria-labelledby="future-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="future-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          The Future of AI and Humanity
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            The future of artificial intelligence (AI) is one of the most exciting and debated topics of our time. As AI continues to advance, it promises to reshape every aspect of our lives—from how we work and learn to how we connect, govern, and even understand ourselves. Looking ahead, we must consider not only the technological possibilities, but also the ethical, social, and philosophical questions that will define our shared future.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">Emerging Trends in AI</h3>
          <p>
            AI is evolving rapidly, with breakthroughs in machine learning, natural language processing, robotics, and more. Key trends shaping the future include:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Human-AI Collaboration:</strong> AI will increasingly augment human abilities, enabling new forms of creativity, productivity, and problem-solving.
            </li>
            <li>
              <strong>Personalization:</strong> AI-driven systems will tailor education, healthcare, and entertainment to individual needs and preferences.
            </li>
            <li>
              <strong>Autonomous Systems:</strong> Self-driving vehicles, smart infrastructure, and intelligent agents will become more common in daily life.
            </li>
            <li>
              <strong>Ethical AI:</strong> There will be a growing focus on transparency, fairness, and accountability in AI development and deployment.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Predictions and Possibilities</h3>
          <p>
            Experts predict that AI will continue to accelerate scientific discovery, revolutionize industries, and transform society. Some possibilities include:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Healthcare:</strong> AI could enable earlier disease detection, personalized treatments, and improved patient outcomes.
            </li>
            <li>
              <strong>Climate Action:</strong> AI-powered models may help us better understand and address climate change.
            </li>
            <li>
              <strong>Education:</strong> Adaptive learning platforms could make high-quality education accessible to all.
            </li>
            <li>
              <strong>Global Challenges:</strong> AI could assist in solving complex issues such as poverty, hunger, and pandemics.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Long-Term Outlook: AGI and ASI</h3>
          <p>
            Looking further ahead, the development of Artificial General Intelligence (AGI)—machines with human-level reasoning—and Artificial Superintelligence (ASI)—machines vastly surpassing human intelligence—could bring about unprecedented change. These advances raise profound questions:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>What will be the role of humans in a world with AGI or ASI?</strong>
            </li>
            <li>
              <strong>How do we ensure these technologies align with human values and well-being?</strong>
            </li>
            <li>
              <strong>What new opportunities and risks will emerge?</strong>
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Shaping the Future Together</h3>
          <p>
            The future of AI is not predetermined—it will be shaped by the choices we make today. By fostering inclusive dialogue, investing in education and ethics, and prioritizing human-centered design, we can guide AI toward a future that benefits all of humanity.
          </p>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Future of Life Institute: Benefits & Risks of AI</a></li>
              <li><a href="https://www.weforum.org/agenda/archive/artificial-intelligence/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">World Economic Forum: The Future of Artificial Intelligence</a></li>
              <li><a href="https://www.nickbostrom.com/superintelligence.html" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Nick Bostrom, "Superintelligence"</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
},

"AI & Children": {
  title: "AI & Children",
  content: `
    <section class="mb-10" aria-labelledby="ai-children-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="ai-children-title" class="text-4xl font-extrabold text-blue-900 mb-4">
          AI & Children: Opportunities, Risks, and the Future
        </h2>
        <div class="text-blue-900 text-lg">
          <p>
            Artificial Intelligence is increasingly present in the lives of children—from educational apps and smart toys to recommendation systems and online safety tools. As AI shapes how children learn, play, and interact, it brings both exciting opportunities and important challenges.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">Opportunities</h3>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Personalized Learning:</strong> AI-powered platforms can adapt to each child's pace and style, making education more engaging and effective.
            </li>
            <li>
              <strong>Accessibility:</strong> AI tools can help children with disabilities communicate, learn, and participate more fully.
            </li>
            <li>
              <strong>Safety & Wellbeing:</strong> AI can help detect cyberbullying, inappropriate content, and online risks, supporting safer digital environments.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Risks & Challenges</h3>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>Privacy:</strong> Children's data is sensitive. AI systems must be designed to protect privacy and comply with regulations.
            </li>
            <li>
              <strong>Bias & Fairness:</strong> AI can reflect or amplify biases, affecting educational outcomes or access to opportunities.
            </li>
            <li>
              <strong>Screen Time & Wellbeing:</strong> Overuse of AI-powered devices can impact physical and mental health.
            </li>
            <li>
              <strong>Autonomy & Critical Thinking:</strong> Children need guidance to understand how AI works and to think critically about technology.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Preparation: Study, Training, and Skills for the Future</h3>
          <p>
            As AI becomes more integrated into society, it is important for children to develop skills that will help them thrive in a technology-rich world. Here are some key areas of focus:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>
              <strong>STEM Education:</strong> Encourage interest in science, technology, engineering, and mathematics. Coding, robotics, and data literacy will be valuable skills in the future job market.
            </li>
            <li>
              <strong>Digital Literacy:</strong> Teach children how to use technology responsibly, understand how AI works, and recognize the strengths and limitations of digital tools.
            </li>
            <li>
              <strong>Critical Thinking:</strong> Foster curiosity, problem-solving, and the ability to question information and sources—essential for navigating a world shaped by algorithms.
            </li>
            <li>
              <strong>Creativity and Communication:</strong> Skills like creativity, collaboration, and effective communication will remain uniquely human and highly valued, even as automation increases.
            </li>
            <li>
              <strong>Ethics and Empathy:</strong> Help children understand the ethical implications of AI and the importance of empathy, fairness, and respect in both digital and real-world interactions.
            </li>
            <li>
              <strong>Lifelong Learning:</strong> Encourage a mindset of continuous learning and adaptability, as technology and job requirements will keep evolving.
            </li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Looking Ahead</h3>
          <p>
            As AI becomes more integrated into childhood, collaboration among parents, educators, technologists, and policymakers is essential. Together, we can ensure AI empowers children, protects their rights, and prepares them for a future shaped by intelligent technology.
          </p>
          <div class="mt-6 font-semibold">
            <strong>Further Reading:</strong>
            <ul class="list-disc pl-6">
              <li><a href="https://www.unicef.org/globalinsight/reports/policy-guidance-ai-children" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">UNICEF: Policy Guidance on AI for Children</a></li>
              <li><a href="https://www.oecd.org/education/ai-in-education.htm" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">OECD: AI in Education</a></li>
              <li><a href="https://www.commonsensemedia.org/articles/artificial-intelligence-and-kids-what-parents-need-to-know" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Common Sense Media: AI and Kids</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
}

  ,
  "School Resources": {
    title: "School Resources — Teachers' Toolkit",
    content: `
      <section class="mb-10" aria-labelledby="school-resources-title">
        <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
          <h2 id="school-resources-title" class="text-4xl font-extrabold text-blue-900 mb-4">School Resources — Teachers' Toolkit</h2>
          <div class="text-blue-900 text-lg space-y-4">
            <p>Practical, age-appropriate resources to introduce students to AI, digital literacy, and safe, creative use of technology. Links are curated for lesson plans, activities, and further reading.</p>

            <h3 class="text-xl font-semibold mt-2">What if? Preparedness simulator (schools)</h3>
            <p class="text-sm mb-2">Explore how Local AI, AGI, and ASI could affect different areas of a school — and what to prepare now. Runs entirely in your browser.</p>
            <div class="bg-white rounded-xl p-4 shadow">
              <form id="schoolWhatIfForm" class="flex flex-col gap-3" aria-describedby="school-whatif-help">
                <label for="schoolResponsibilitySelect" class="text-sm font-semibold">Choose a school area</label>
                <select id="schoolResponsibilitySelect" class="w-full px-3 py-2 border rounded">
                  <option value="">-- Select an area --</option>
                  <option value="classroom">Classroom teaching & assessment</option>
                  <option value="safeguarding">Safeguarding & student wellbeing</option>
                  <option value="admin">Administration & timetabling</option>
                  <option value="send">SEND / inclusion</option>
                  <option value="it-policy">IT & edtech policy</option>
                  <option value="parent-comm">Parent communication</option>
                </select>
                <div id="school-whatif-help" class="text-xs text-gray-600">You’ll see tiered outcomes (Local AI / AGI / ASI), examples, and a short checklist of preparedness actions.</div>
                <button type="submit" class="mt-2 bg-blue-700 text-white py-2 rounded-lg font-bold">Show scenario</button>
              </form>
              <div id="schoolWhatIfResult" class="mt-4 p-3 rounded bg-blue-50 border border-blue-200 text-blue-900 hidden fx-fade-expand fx-hidden" tabindex="-1" aria-live="polite"></div>
            </div>

            <h3 class="text-2xl font-semibold mt-4">Early Years (Ages 5–7)</h3>
            <ul class="list-disc pl-6">
              <li><a href="https://www.code.org/" target="_blank" rel="noopener" class="underline text-blue-700">Code.org - Hour of Code activities</a> (visual, unplugged or block based activities)</li>
              <li><a href="https://www.commonsense.org/education/" target="_blank" rel="noopener" class="underline text-blue-700">Common Sense Education</a> — digital citizenship lessons for young learners</li>
              <li><a href="https://www.childrensuniversity.manchester.ac.uk/" target="_blank" rel="noopener" class="underline text-blue-700">Simple science & tech experiments</a> adapted for classrooms</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">Primary (Ages 8–11)</h3>
            <ul class="list-disc pl-6">
              <li><a href="https://teachyourselfcs.com/" target="_blank" rel="noopener" class="underline text-blue-700">Intro CS and computational thinking</a> — gentle, project-based lessons</li>
              <li><a href="https://microbit.org/" target="_blank" rel="noopener" class="underline text-blue-700">BBC micro:bit projects</a> — simple physical computing to illustrate inputs, outputs, and logic</li>
              <li><a href="https://machinelearningforkids.co.uk/" target="_blank" rel="noopener" class="underline text-blue-700">Machine Learning for Kids</a> — kid-friendly ML projects with Scratch integration</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">Middle School (Ages 11–14)</h3>
            <ul class="list-disc pl-6">
              <li><a href="https://ai.google/education/" target="_blank" rel="noopener" class="underline text-blue-700">Google AI Education</a> — classroom-friendly explainers and activities</li>
              <li><a href="https://www.tinkercad.com/" target="_blank" rel="noopener" class="underline text-blue-700">Tinkercad</a> — design and simulation projects to teach systems thinking</li>
              <li><a href="https://teachmachinelogic.example/" target="_blank" rel="noopener" class="underline text-blue-700">Project-based AI mini-lessons</a> — starter prompts and datasets (teacher-created examples)</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">Secondary (Ages 14–18)</h3>
            <ul class="list-disc pl-6">
              <li><a href="https://www.coursera.org/" target="_blank" rel="noopener" class="underline text-blue-700">Coursera / EdX introductory AI courses</a> — short courses suitable for advanced students</li>
              <li><a href="https://www.fast.ai/" target="_blank" rel="noopener" class="underline text-blue-700">fast.ai</a> — practical ML for motivated students (teacher guidance recommended)</li>
              <li><a href="https://www.data.gov/" target="_blank" rel="noopener" class="underline text-blue-700">Open datasets & data literacy</a> — projects using real data</li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">Teacher Toolkits & Policy/Guidance</h3>
            <ul class="list-disc pl-6">
              <li><a href="https://unesco.org/" target="_blank" rel="noopener" class="underline text-blue-700">UNESCO guidance on AI in education</a></li>
              <li><a href="https://www.commonsense.org/education/" target="_blank" rel="noopener" class="underline text-blue-700">Common Sense Education — digital citizenship curriculum</a></li>
              <li><a href="https://www.gov.uk/government/publications/artificial-intelligence-in-education" target="_blank" rel="noopener" class="underline text-blue-700">Policy briefs: AI in schools (country resources)</a></li>
            </ul>

            <h3 class="text-2xl font-semibold mt-4">Lesson Ideas & Activities</h3>
            <ul class="list-disc pl-6">
              <li>Unplugged activities: logic puzzles, role-play to explain algorithms, storytelling about 'smart' objects.</li>
              <li>Data ethics discussion: short cases about bias, privacy, and how AI decisions can affect people.</li>
              <li>Project-based: build a simple classifier (images or text) using guided datasets, then discuss limitations.</li>
            </ul>

            <div class="mt-6 font-semibold">
              <strong>Printable teacher packs</strong>
              <div class="space-y-2 mt-2">
                <div class="text-sm text-gray-600">Intro pack: <strong>5 pages</strong> • Suggested class time: 1–2 lessons (45–90 minutes)</div>
                <div>
                  <a href="/teacher-toolkit-intro-ai.pdf" target="_blank" rel="noopener" class="inline-flex items-center gap-2 underline text-blue-700">
                    <img src="/assets/logos/mainlogo.png" alt="Intro PDF" class="w-6 h-6 rounded" />
                    <span>Download Teacher Toolkit — Intro to AI (PDF)</span>
                  </a>
                </div>
                <div class="text-sm text-gray-600 mt-3">Early Years pack (Ages 5–7): <strong>3 pages</strong> • Suggested class time: 30–45 minutes</div>
                <div>
                  <a href="/teacher-toolkit-early-years.pdf" target="_blank" rel="noopener" class="inline-flex items-center gap-2 underline text-blue-700">
                    <img src="/assets/logos/mainlogo.png" alt="Early Years PDF" class="w-6 h-6 rounded" />
                    <span>Download Teacher Toolkit — Early Years (PDF)</span>
                  </a>
                </div>
                <div class="text-sm text-gray-600 mt-3">Primary pack (Ages 8–11): <strong>8 pages</strong> • Suggested class time: 2–3 lessons (90–135 minutes)</div>
                <div>
                  <a href="/teacher-toolkit-primary.html" target="_blank" rel="noopener" class="inline-flex items-center gap-2 underline text-blue-700">
                    <img src="/assets/logos/mainlogo.png" alt="Primary PDF" class="w-6 h-6 rounded" />
                    <span>Download Teacher Toolkit — Primary (Ages 8–11)</span>
                  </a>
                </div>
                <div class="text-sm text-gray-600 mt-3">Middle School pack (Ages 11–14): <strong>10 pages</strong> • Suggested class time: 3–4 lessons (120–180 minutes)</div>
                <div>
                  <a href="/teacher-toolkit-middle-school.html" target="_blank" rel="noopener" class="inline-flex items-center gap-2 underline text-blue-700">
                    <img src="/assets/logos/mainlogo.png" alt="Middle School PDF" class="w-6 h-6 rounded" />
                    <span>Download Teacher Toolkit — Middle School (Ages 11–14)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }
,
"Employer Resources": {
  title: "Employer Resources — Preparing Workplaces for AI",
  content: `
    <section class="mb-10" aria-labelledby="employer-resources-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-6">
        <h2 id="employer-resources-title" class="text-4xl font-extrabold text-blue-900 mb-4">Employer Resources — Preparing Workplaces for AI</h2>
        <div class="text-blue-900 text-lg">
          <p>
            AI, AGI, and ASI will reshape every workplace. Employers who prepare now can empower their teams, reduce risk, and unlock new opportunities. This page provides clear explanations, a readiness checklist, practical steps, curated support/training links, and downloadable resources.
          </p>
          <h3 class="text-xl font-semibold mt-6 mb-2">What Are AI, AGI, and ASI?</h3>
          <ul class="list-disc pl-6 mb-2">
            <li><strong>AI (Artificial Intelligence):</strong> Software that automates or augments specific tasks (e.g., chatbots, document analysis, scheduling, image recognition).</li>
            <li><strong>AGI (Artificial General Intelligence):</strong> Hypothetical future systems that can learn and reason across any domain, like a human.</li>
            <li><strong>ASI (Artificial Superintelligence):</strong> Hypothetical systems vastly more capable than any human, with unpredictable impacts.</li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">What Should Employers Do Now?</h3>
          <ol class="list-decimal pl-6 mb-2">
            <li><strong>Assess your exposure:</strong> Which roles, processes, or products could be impacted by AI? Use the checklist below.</li>
            <li><strong>Engage your workforce:</strong> Communicate openly about AI, listen to concerns, and involve staff in planning.</li>
            <li><strong>Upskill and reskill:</strong> Invest in training for digital, data, and critical thinking skills. See the training links below.</li>
            <li><strong>Review policies:</strong> Update your data, privacy, and ethics policies for AI use. Download sample templates below.</li>
            <li><strong>Plan for change:</strong> Prepare for redeployment, new roles, and support for affected staff.</li>
          </ol>

          <h3 class="text-xl font-semibold mt-6 mb-2">What if? Preparedness simulator</h3>
          <p class="text-sm mb-2">Explore how Local AI, AGI, and ASI could affect different business areas — and what to prepare now. Runs entirely in your browser.</p>
          <div class="bg-white rounded-xl p-4 shadow">
            <form id="employerWhatIfForm" class="flex flex-col gap-3" aria-describedby="employer-whatif-help">
              <label for="employerAreaSelect" class="text-sm font-semibold">Choose a business area</label>
              <select id="employerAreaSelect" class="w-full px-3 py-2 border rounded">
                <option value="">-- Select an area --</option>
                <option value="hr">HR, talent & learning</option>
                <option value="operations">Operations & supply chain</option>
                <option value="it-security">IT & security</option>
                <option value="legal">Legal, risk & compliance</option>
                <option value="customer">Customer service & marketing</option>
                <option value="rnd">R&D / product</option>
                <option value="finance">Finance & planning</option>
                <option value="hse">Health, safety & wellbeing</option>
              </select>
              <div id="employer-whatif-help" class="text-xs text-gray-600">You’ll see tiered outcomes (Local AI / AGI / ASI), examples, and a short checklist of preparedness actions.</div>
              <button type="submit" class="mt-2 bg-blue-700 text-white py-2 rounded-lg font-bold">Show scenario</button>
            </form>
            <div id="employerWhatIfResult" class="mt-4 p-3 rounded bg-blue-50 border border-blue-200 text-blue-900 hidden fx-fade-expand fx-hidden" tabindex="-1" aria-live="polite"></div>
          </div>

          <h3 class="text-xl font-semibold mt-6 mb-2">AI Readiness Checklist</h3>
          <ul class="list-disc pl-6 mb-2">
            <li><input type="checkbox" id="ai-check-1"> <label for="ai-check-1">We have mapped which jobs/processes could be automated or augmented by AI</label></li>
            <li><input type="checkbox" id="ai-check-2"> <label for="ai-check-2">We have a plan to communicate AI changes to staff and stakeholders</label></li>
            <li><input type="checkbox" id="ai-check-3"> <label for="ai-check-3">We offer training/upskilling for digital and data skills</label></li>
            <li><input type="checkbox" id="ai-check-4"> <label for="ai-check-4">We have reviewed our data, privacy, and ethics policies for AI</label></li>
            <li><input type="checkbox" id="ai-check-5"> <label for="ai-check-5">We have a process for staff to raise concerns or suggest improvements</label></li>
            <li><input type="checkbox" id="ai-check-6"> <label for="ai-check-6">We monitor AI system performance and fairness</label></li>
          </ul>
          <button onclick="window.print()" class="mt-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Print Checklist</button>
          <h3 class="text-xl font-semibold mt-6 mb-2">Support & Training Links</h3>
          <ul class="list-disc pl-6 mb-2">
            <li><a href="https://www.futurelearn.com/courses/ai-for-business" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">FutureLearn: AI for Business</a></li>
            <li><a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Coursera: AI for Everyone (Andrew Ng)</a></li>
            <li><a href="https://digitalleadership.com/ai-ethics-policy-template/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">AI Ethics Policy Template (Digital Leadership)</a></li>
            <li><a href="https://www.cipd.org/en/knowledge/factsheets/artificial-intelligence-hr-factsheet/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">CIPD: AI in HR Factsheet</a></li>
            <li><a href="https://www.gov.uk/government/publications/ai-action-plan/ai-action-plan" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">UK Government: AI Action Plan</a></li>
            <li><a href="https://www.skillsforcare.org.uk/Developing-your-workforce/AI-and-digital-skills.aspx" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Skills for Care: AI & Digital Skills</a></li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Downloadable Resources</h3>
          <ul class="list-disc pl-6 mb-2">
            <li><a href="/public/ai-policy-template.docx" download class="underline text-blue-700 hover:text-yellow-500">Sample AI Use Policy (Word)</a></li>
            <li><a href="/public/ai-readiness-checklist.pdf" download class="underline text-blue-700 hover:text-yellow-500">AI Readiness Checklist (PDF)</a></li>
          </ul>
          <h3 class="text-xl font-semibold mt-6 mb-2">Sector-Specific Guides</h3>
          <p class="mb-2">Want tailored advice for your sector? <strong>Email us your sector and needs</strong> and we’ll prioritize new guides for:</p>
          <ul class="list-disc pl-6 mb-2">
            <li>Healthcare</li>
            <li>Education</li>
            <li>Retail</li>
            <li>Manufacturing</li>
            <li>Finance</li>
            <li>Public Sector</li>
          </ul>
        </div>
      </div>
    </section>
  `
},
"Employee Resources": {
  title: "Employee Resources — Support, Training & Rights",
  content: `
    <section class="mb-10" aria-labelledby="employee-resources-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-6">
        <h2 id="employee-resources-title" class="text-4xl font-extrabold text-blue-900 mb-2">Employee Resources — Support, Training & Rights</h2>
        <div class="text-blue-900 text-lg">
          <p>
            Practical resources for employees facing AI-driven change: training, career transition advice, rights, and tools to help you take the next step.
          </p>

          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-2">AI Impact Self-Assessment</h3>
            <p class="text-sm mb-2">Worried about how AI might affect your job? Use this quick self-check to start a conversation with your manager or union rep.</p>
            <ul class="list-disc pl-6 text-sm mb-2">
              <li><input type="checkbox" id="emp-ai-1"> <label for="emp-ai-1">My role involves repetitive or data-driven tasks</label></li>
              <li><input type="checkbox" id="emp-ai-2"> <label for="emp-ai-2">I've seen new software/tools introduced in my area recently</label></li>
              <li><input type="checkbox" id="emp-ai-3"> <label for="emp-ai-3">I have access to training or upskilling opportunities</label></li>
              <li><input type="checkbox" id="emp-ai-4"> <label for="emp-ai-4">I know who to ask about AI changes at work</label></li>
              <li><input type="checkbox" id="emp-ai-5"> <label for="emp-ai-5">I feel confident adapting to new technology</label></li>
            </ul>
            <p class="text-xs text-gray-600">Tip: If you checked 1 or 2 but not 3–5, consider asking for more support or training.</p>
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-2">Sector-Specific Advice</h3>
            <label for="sector-select" class="block text-sm font-semibold mb-1">Choose your sector for tailored resources:</label>
            <select id="sector-select" class="border rounded px-2 py-1 mb-2">
              <option value="">-- Select sector --</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="finance">Finance</option>
              <option value="public">Public Sector</option>
            </select>
            <div id="sector-advice" class="mt-3 bg-blue-50 rounded p-4 text-sm">
              <em>Select a sector to see tailored advice, training links, and support contacts here.</em>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-2">Personal Upskilling Planner</h3>
            <p class="text-sm mb-2">Plan your next steps: choose a skill, set a goal, and track your progress.</p>
            <form id="upskill-form" class="flex flex-col md:flex-row gap-2 mb-2">
              <input type="text" id="upskill-skill" placeholder="Skill to learn (e.g. Excel, Python, project management)" class="border rounded px-2 py-1 flex-1">
              <input type="text" id="upskill-goal" placeholder="Goal (e.g. complete a course, get a certificate)" class="border rounded px-2 py-1 flex-1">
              <button type="button" onclick="alert('Progress tracking coming soon!')" class="px-3 py-1 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Add</button>
            </form>
            <p class="text-xs text-gray-600">Write down your plan, or use a notes app to track your learning journey.</p>
          </div>

          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-4 shadow">
              <h3 class="text-xl font-semibold mb-2">Quick starters</h3>
              <ul class="list-disc pl-6 text-sm">
                <li>Reskilling pathways and free courses</li>
                <li>How to talk to your manager about role changes</li>
                <li>Where to get local employment and legal support</li>
              </ul>
            </div>
            <div class="bg-white rounded-xl p-4 shadow">
              <h3 class="text-xl font-semibold mb-2">CV Builder</h3>
              <p class="text-sm">Create a clean CV quickly — fill the form, preview, then download as a Word/HTML file or print to PDF.</p>
              <div class="mt-3 flex items-center gap-3">
                <button id="cv-open-builder" class="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Open CV Builder</button>
                <label for="cv-template" class="text-sm font-semibold">Template:</label>
                <select id="cv-template" class="px-2 py-1 border rounded text-sm">
                  <option value="simple">Simple</option>
                  <option value="professional">Professional</option>
                  <option value="creative">Creative</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-xl font-semibold mb-2">Mental Health & Support</h3>
            <ul class="list-disc pl-6 text-sm mb-2">
              <li><a href="https://www.mind.org.uk/information-support/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Mind: Information & Support</a></li>
              <li><a href="https://www.acas.org.uk/mental-health-awareness" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">ACAS: Mental Health at Work</a></li>
              <li><a href="https://www.citizensadvice.org.uk/work/rights-at-work/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">Citizens Advice: Rights at Work</a></li>
              <li><a href="https://www.nationalcareers.service.gov.uk/" target="_blank" rel="noopener" class="underline text-blue-700 hover:text-yellow-500">National Careers Service</a></li>
            </ul>
            <p class="text-xs text-gray-600">If you feel overwhelmed, talk to a trusted colleague, union rep, or mental health professional.</p>
          </div>

          <div class="mt-8">
            <h3 class="text-xl font-semibold mb-2">Downloadable Guides</h3>
            <ul class="list-disc pl-6 text-sm mb-2">
              <li><a href="/public/employee-rights-and-ai.pdf" download class="underline text-blue-700 hover:text-yellow-500">Your Rights & AI: Employee Guide (PDF)</a></li>
              <li><a href="/public/transition-checklist.pdf" download class="underline text-blue-700 hover:text-yellow-500">Career Transition Checklist (PDF)</a></li>
            </ul>
          </div>

          <!-- CV Builder UI (hidden until opened) -->
          <div id="cv-builder" class="mt-6 bg-white rounded-xl p-6 shadow hidden">
            <form id="cv-builder-form" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input id="cv-name" type="text" placeholder="Full name" class="px-3 py-2 border rounded w-full" required />
                <input id="cv-role" type="text" placeholder="Professional title (e.g. Product Manager)" class="px-3 py-2 border rounded w-full" />
              </div>
              <textarea id="cv-summary" rows="3" placeholder="Brief personal summary (2–4 sentences)" class="w-full px-3 py-2 border rounded"></textarea>
              <label class="block text-sm font-semibold">Experience (one per line — company, role, years)</label>
              <textarea id="cv-experience" rows="4" placeholder="Example:\nAcme Ltd — Senior Analyst — 2019–2024" class="w-full px-3 py-2 border rounded"></textarea>
              <label class="block text-sm font-semibold">Education (one per line)</label>
              <textarea id="cv-education" rows="3" placeholder="Example:\nMSc Computer Science — University X — 2018" class="w-full px-3 py-2 border rounded"></textarea>
              <input id="cv-skills" type="text" placeholder="Key skills (comma-separated)" class="px-3 py-2 border rounded w-full" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input id="cv-contact" type="text" placeholder="Email or phone" class="px-3 py-2 border rounded w-full" />
                <input id="cv-linkedin" type="text" placeholder="LinkedIn or portfolio URL" class="px-3 py-2 border rounded w-full" />
              </div>

              <div class="flex flex-wrap gap-2">
                <button type="button" id="cv-generate-btn" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Generate Preview</button>
                <button type="button" id="cv-download-docx-btn" class="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800" disabled>Download .doc</button>
              </div>
              <p class="mt-3 text-xs text-gray-600">Privacy: Everything is generated in your browser and is not uploaded to any server by default. Downloads are created locally.</p>
            </form>

            <div id="cv-preview" class="mt-6 bg-gray-50 p-4 rounded prose max-w-none"></div>
          </div>

          <!-- Template presets and sample CVs -->
          <div class="mt-4 flex flex-col md:flex-row gap-4">
            <div class="bg-white rounded-xl p-4 shadow w-full md:w-1/2">
              <h4 class="font-semibold mb-2">Sample CVs</h4>
              <p class="text-sm mb-2">Quick-fill sample CVs for testing and inspiration.</p>
              <div class="flex gap-2 flex-wrap">
                <button id="sample-junior" class="px-3 py-1 bg-gray-100 rounded-lg">Junior Analyst (sample)</button>
                <button id="sample-mid" class="px-3 py-1 bg-gray-100 rounded-lg">Product Manager (sample)</button>
                <button id="sample-tech" class="px-3 py-1 bg-gray-100 rounded-lg">Software Engineer (sample)</button>
              </div>
            </div>

            <div class="bg-white rounded-xl p-4 shadow w-full md:w-1/2">
              <h4 class="font-semibold mb-2">Curated Links (UK / US)</h4>
              <p class="text-sm mb-2">Reskilling, legal support and government guidance.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <h5 class="font-semibold">UK</h5>
                  <ul class="list-disc pl-5">
                    <li><a href="https://nationalcareers.service.gov.uk/" target="_blank" rel="noopener" class="underline text-blue-700">National Careers Service</a></li>
                    <li><a href="https://www.gov.uk/government/statistics/skills-for-jobs" target="_blank" rel="noopener" class="underline text-blue-700">Skills for Jobs guidance</a></li>
                    <li><a href="https://www.acas.org.uk/" target="_blank" rel="noopener" class="underline text-blue-700">ACAS — employment rights & advice</a></li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold">US</h5>
                  <ul class="list-disc pl-5">
                    <li><a href="https://www.careeronestop.org/" target="_blank" rel="noopener" class="underline text-blue-700">CareerOneStop (training & job search)</a></li>
                    <li><a href="https://www.uschamber.com/co/grow/" target="_blank" rel="noopener" class="underline text-blue-700">U.S. Chamber: workforce resources</a></li>
                    <li><a href="https://www.dol.gov/" target="_blank" rel="noopener" class="underline text-blue-700">U.S. Department of Labor</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
},
"Government Resources": {
  title: "Government Resources — Policy, Support & Guidance",
  content: `
    <section class="mb-10" aria-labelledby="government-resources-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-4">
        <h2 id="government-resources-title" class="text-4xl font-extrabold text-blue-900 mb-4">Government Resources — Policy, Support & Guidance</h2>
        <div class="text-blue-900 text-lg">
          <p>
            Practical resources for public sector teams preparing policy, procurement, and workforce planning in the face of accelerating AI adoption. All tools below are client-side: copying, downloads and exports happen in your browser and no personal data is uploaded.
          </p>

          <h3 class="text-xl font-semibold mt-6 mb-2">What if? Preparedness simulator</h3>
          <p class="text-sm mb-2">Explore how Local AI, AGI, and ASI could affect different government responsibilities — and what to prepare now. Results are generated entirely in your browser.</p>
          <div class="bg-white rounded-xl p-4 shadow">
            <form id="govWhatIfForm" class="flex flex-col gap-3" aria-describedby="gov-whatif-help">
              <label for="govResponsibilitySelect" class="text-sm font-semibold">Choose an area of responsibility</label>
              <select id="govResponsibilitySelect" class="w-full px-3 py-2 border rounded">
                <option value="">-- Select an area --</option>
                <option value="public-safety">Public safety & policing</option>
                <option value="healthcare">Healthcare & public health</option>
                <option value="education">Education</option>
                <option value="tax-benefits">Tax, benefits & casework</option>
                <option value="elections">Democracy & elections</option>
                <option value="critical-infra">Critical infrastructure</option>
                <option value="transport">Transport & cities</option>
                <option value="environment">Environment & climate</option>
                <option value="emergency">Emergency response & resilience</option>
                <option value="social-care">Social care</option>
                <option value="immigration">Immigration & borders</option>
                <option value="justice">Courts & justice</option>
                <option value="procurement">Procurement & suppliers</option>
                <option value="housing-planning">Housing & planning</option>
                <option value="economy">Economy & innovation</option>
                <option value="communications">Communications & media</option>
              </select>
              <div id="gov-whatif-help" class="text-xs text-gray-600">You’ll see tiered outcomes (Local AI / AGI / ASI), concrete examples, and a short checklist of preparedness actions.</div>
              <button type="submit" class="mt-2 bg-blue-700 text-white py-2 rounded-lg font-bold">Show scenario</button>
            </form>
            <div id="govWhatIfResult" class="mt-4 p-3 rounded bg-blue-50 border border-blue-200 text-blue-900 hidden fx-fade-expand fx-hidden" tabindex="-1" aria-live="polite"></div>
          </div>

          <h3 class="text-xl font-semibold mt-6 mb-2">Quick toolkit</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white rounded-xl p-4 shadow">
              <h4 class="font-semibold mb-2">Policy one-pager (short)</h4>
              <p class="text-sm mb-2">A concise brief you can customise for internal circulation or public consultation.</p>
              <div class="flex gap-2">
                <button onclick="gov_copyTemplate('policy-short')" class="px-3 py-1 bg-blue-700 text-white rounded-lg">Copy</button>
                <button onclick="gov_downloadTemplate('policy-short')" class="px-3 py-1 bg-green-600 text-white rounded-lg">Download</button>
                <button onclick="gov_emailTemplate('policy-short')" class="px-3 py-1 bg-indigo-600 text-white rounded-lg">Email</button>
              </div>
            </div>

            <div class="bg-white rounded-xl p-4 shadow">
              <h4 class="font-semibold mb-2">Public consultation template</h4>
              <p class="text-sm mb-2">Structured template for engagement and responses.</p>
              <div class="flex gap-2">
                <button onclick="gov_copyTemplate('consultation')" class="px-3 py-1 bg-blue-700 text-white rounded-lg">Copy</button>
                <button onclick="gov_downloadTemplate('consultation')" class="px-3 py-1 bg-green-600 text-white rounded-lg">Download</button>
                <button onclick="gov_emailTemplate('consultation')" class="px-3 py-1 bg-indigo-600 text-white rounded-lg">Email</button>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold mt-6 mb-2">Workforce transition checklist</h3>
          <p class="text-sm mb-2">A simple checklist teams can use during planning. Items are stored locally in your browser.</p>
          <div class="bg-white rounded-xl p-4 shadow mb-4">
            <ul id="gov-checklist" class="list-disc pl-6" aria-live="polite">
              <li id="check-1"><label><input type="checkbox" onchange="gov_toggleChecklistItem('check-1')" /> Map tasks & roles susceptible to automation</label></li>
              <li id="check-2"><label><input type="checkbox" onchange="gov_toggleChecklistItem('check-2')" /> Identify reskilling and redeployment pathways</label></li>
              <li id="check-3"><label><input type="checkbox" onchange="gov_toggleChecklistItem('check-3')" /> Publish a transparent procurement & governance policy</label></li>
              <li id="check-4"><label><input type="checkbox" onchange="gov_toggleChecklistItem('check-4')" /> Run stakeholder consultation (publish summary)</label></li>
              <li id="check-5"><label><input type="checkbox" onchange="gov_toggleChecklistItem('check-5')" /> Allocate transition funding & timeline</label></li>
            </ul>
            <div class="mt-3 flex gap-2">
              <button onclick="gov_exportChecklist()" class="px-3 py-1 bg-green-600 text-white rounded-lg">Export checklist</button>
              <button onclick="gov_resetChecklist()" class="px-3 py-1 bg-red-600 text-white rounded-lg">Reset checklist</button>
            </div>
          </div>

          <h3 class="text-xl font-semibold mt-6 mb-2">Recommended links & funding</h3>
          <ul class="list-disc pl-6 mb-2">
            <li><a href="https://www.gov.uk/government/organisations/department-for-education" target="_blank" rel="noopener" class="underline text-blue-700">UK Department for Education</a> — guidance & funding routes</li>
            <li><a href="https://www.usa.gov/government-works" target="_blank" rel="noopener" class="underline text-blue-700">USA.gov</a> — federal programme portals</li>
            <li><a href="https://european-union.europa.eu/" target="_blank" rel="noopener" class="underline text-blue-700">EU funding & policy</a></li>
          </ul>

          <div class="mt-6 text-sm text-gray-600">Privacy note: checklist state and copied/downloaded templates remain on your device only.</div>
        </div>
      </div>
    </section>
  `
}
}
