export const quizzes = [
  {
    id: 'beginner',
    title: 'AI Basics – Beginner',
    level: 'Beginner',
    description: 'Foundations: what AI can/can’t do, safe use, common terms, and practical tips.',
    questions: [
      {
        q: 'Which description best fits today’s most common AI systems?',
        options: [
          'They understand the world like humans do',
          'They find patterns in data and predict likely outputs',
          'They are conscious and self-aware',
          'They always tell the truth'
        ],
        correctIndex: 1,
        explanation:
          'Modern AI systems learn statistical patterns from data to produce likely outputs; they don’t “understand” like humans.'
      },
      {
        q: 'What is a safe habit when using an AI assistant at work?',
        options: [
          'Paste sensitive data into any public tool',
          'Share API keys in prompts for convenience',
          'Verify important outputs and keep private data private',
          'Assume legal/compliance checks are automatic'
        ],
        correctIndex: 2,
        explanation:
          'Always double-check important results and avoid sharing sensitive data unless your environment is approved and secure.'
      },
      {
        q: 'Which term means “the AI made something up that sounds plausible but is wrong”?',
        options: ['Grounding', 'Hallucination', 'Regularization', 'Overfitting'],
        correctIndex: 1,
        explanation:
          '“Hallucination” describes confident but incorrect outputs; grounding and citations help reduce this.'
      },
      {
        q: 'What does “prompting” refer to?',
        options: [
          'Measuring model accuracy',
          'Providing instructions and context to an AI model',
          'Compressing a model to run on phones',
          'Encrypting data at rest'
        ],
        correctIndex: 1,
        explanation:
          'Prompting is how you guide the model—clear instructions and examples usually improve results.'
      },
      {
        q: 'Which is a good way to improve AI output quality?',
        options: [
          'Give vague instructions to keep it creative',
          'Provide clear goals, constraints, and examples',
          'Ask multiple unrelated tasks in one prompt',
          'Increase temperature for factual tasks'
        ],
        correctIndex: 1,
        explanation:
          'Be specific about goals and constraints, and show examples; use lower temperature for factual tasks.'
      },
      {
        q: 'Why should you cite or link sources when AI drafts content?',
        options: [
          'To make the text longer',
          'To pass plagiarism checks automatically',
          'To let readers verify claims and reduce misinformation',
          'Because links always improve search ranking'
        ],
        correctIndex: 2,
        explanation:
          'Citations help readers verify claims and reduce the risk of spreading inaccurate information.'
      },
      {
        q: 'Which is true about bias in AI systems?',
        options: [
          'AI can’t be biased',
          'Bias only appears in images',
          'Bias can come from training data and design choices',
          'Bias is illegal so models don’t have it'
        ],
        correctIndex: 2,
        explanation:
          'Bias often comes from data and system design; teams should measure and mitigate it where possible.'
      },
      {
        q: 'What’s a sensible rule for private or regulated information (e.g., patient, student, or financial data)?',
        options: [
          'Share it in any AI tool to get better help',
          'Use approved tools and follow data handling rules',
          'Email exports to yourself for convenience',
          'Store keys and secrets in prompts'
        ],
        correctIndex: 1,
        explanation:
          'Use approved, compliant tools and follow your organization’s data handling policies.'
      },
      {
        q: 'When using AI for ideation, what’s a good approach?',
        options: [
          'Generate many rough ideas, then shortlist and refine with clear criteria',
          'Wait for the perfect idea from a single prompt',
          'Avoid giving constraints to stay “creative”',
          'Use only one model forever to stay consistent'
        ],
        correctIndex: 0,
        explanation:
          'Diverge first (many ideas), then converge with criteria; iterate prompts and compare alternatives.'
      },
      {
        q: 'Lowering the temperature in a text generation model generally…',
        options: [
          'Makes outputs more deterministic and focused',
          'Increases model size',
          'Speeds up your GPU',
          'Adds new training data to the model'
        ],
        correctIndex: 0,
        explanation:
          'Lower temperature reduces randomness and is helpful for factual or procedural tasks.'
      }
    ]
  },
  {
    id: 'intermediate',
    title: 'AI in Practice – Intermediate',
    level: 'Intermediate',
    description:
      'Applied AI concepts for professionals: reliability, privacy, risk, evaluation, and production use.',
    questions: [
      {
        q: 'Which signal best indicates overfitting when evaluating a prediction model?',
        options: [
          'High training accuracy',
          'Worse validation performance than training',
          'Number of parameters',
          'Model size on disk'
        ],
        correctIndex: 1,
        explanation:
          'Overfitting shows up as a gap between training and validation performance; worse validation vs training indicates the model memorized instead of generalizing.'
      },
      {
        q: 'For sensitive data in an organization, the safest default storage pattern is…',
        options: [
          'Centralize all data in one public bucket',
          'Local-first/private VPC with least-privilege access and audit logs',
          'Email CSVs to the team weekly',
          'Store sensitive data in analytics dashboards'
        ],
        correctIndex: 1,
        explanation:
          'Local-first (or private VPC) with least-privilege access, encryption, and auditing reduces exposure risk.'
      },
      {
        q: 'An alerting model’s ROC AUC improves from 0.82 to 0.87, but alerts double. What should you check first?',
        options: [
          'Inference latency',
          'Operating threshold and precision/PPV',
          'GPU/CPU utilization',
          'Model license'
        ],
        correctIndex: 1,
        explanation:
          'Thresholds affect alert volume. Check precision/PPV at the chosen threshold to understand false positives and user burden.'
      },
      {
        q: 'Which approach reduces data leakage in model evaluation?',
        options: [
          'Shuffle all data before training',
          'Split by user/entity or by time (e.g., by event date)',
          'Use k-fold on random rows only',
          'Use the largest possible batch size'
        ],
        correctIndex: 1,
        explanation:
          'Temporal or entity-level splits prevent the same entity’s data appearing in both train and test, avoiding leakage.'
      },
      {
        q: 'Which is most appropriate to detect distribution shift in production?',
        options: [
          'F1 score on the training set',
          'Manual spot checks quarterly',
          'Population drift monitoring (input + outcome)',
          'Code coverage in unit tests'
        ],
        correctIndex: 2,
        explanation:
          'Monitoring input distributions and outcome prevalence helps detect drift that can degrade performance.'
      },
      {
        q: 'You deploy an AI assistant that drafts notes/content. What is a critical safety control?',
        options: [
          'Disable logs to save storage',
          'Allow human review and editing with change tracking',
          'Auto-publish without review',
          'Email drafts to external recipients automatically'
        ],
        correctIndex: 1,
        explanation:
          'Humans must review and edit drafts; change tracking improves accountability and learning.'
      },
      {
        q: 'A model is accurate but occasionally harmful. What practice helps mitigate harm?',
        options: [
          'Lower the learning rate',
          'Human-in-the-loop approval for high-risk actions',
          'Train longer',
          'Use a bigger model'
        ],
        correctIndex: 1,
        explanation:
          'Human oversight at critical decision points reduces the risk of rare but serious errors.'
      },
      {
        q: 'For explainability in high-stakes use, which matters most?',
        options: [
          'Pretty graphs',
          'Traceable evidence, uncertainty, and alternatives for decisions',
          'Open-sourcing the model',
          'Using only linear models'
        ],
        correctIndex: 1,
        explanation:
          'Provide evidence, uncertainty, and alternatives to support human judgment in context.'
      },
      {
        q: 'Differential privacy is primarily used to…',
        options: [
          'Compress models',
          'Protect individual contributions in datasets',
          'Speed up training',
          'Prevent prompt injection'
        ],
        correctIndex: 1,
        explanation:
          'Differential privacy limits what can be inferred about any individual from aggregate data.'
      },
      {
        q: 'To reduce hallucinations in a retrieval-augmented chatbot, you should…',
        options: [
          'Lower temperature and constrain to retrieved sources',
          'Increase beam width',
          'Use larger context windows only',
          'Disable retrieval entirely'
        ],
        correctIndex: 0,
        explanation:
          'Lower temperature and grounding responses in retrieved citations reduces unsupported generations.'
      }
    ]
  },
  {
    id: 'advanced',
    title: 'AI Governance & Safety – Advanced',
    level: 'Advanced',
    description:
      'Governance, red‑teaming, alignment, and lifecycle risk management for AI systems and agents.',
    questions: [
      {
        q: 'Which control best addresses prompt‑injection against an LLM agent accessing tools?',
        options: [
          'Longer prompts',
          'Tool whitelisting + strict schemas + output verification',
          'Higher sampling temperature',
          'Removing system prompts'
        ],
        correctIndex: 1,
        explanation:
          'Limit tool scope, validate inputs/outputs, and verify actions to contain prompt‑injection impact.'
      },
      {
        q: 'A RAG system cites outdated sources. What is the right fix?',
        options: [
          'Increase model size',
          'Automate corpus freshness checks and recrawl policies',
          'Turn off citations',
          'Use a different embedding model only'
        ],
        correctIndex: 1,
        explanation:
          'Governance requires freshness SLAs, automated recrawls, and deprecation of stale sources.'
      },
      {
        q: 'Red‑teaming a speech/assistant system should include…',
        options: [
          'Random typos only',
          'Edge accents/noise, overlapping speakers, and adversarial prompts',
          'GPU stress tests only',
          'English-only inputs'
        ],
        correctIndex: 1,
        explanation:
          'Realistic audio and prompt adversaries reveal failure modes that standard tests miss.'
      },
      {
        q: 'Which alignment evaluation is most relevant for workflow‑automation agents?',
        options: ['BLEU score', 'Task phase‑gates with human approval and rollback plans', 'Parameter count', 'Wall‑clock training time'],
        correctIndex: 1,
        explanation:
          'Phase‑gates, approvals, and rollback ensure the agent aligns with intent over time.'
      },
      {
        q: 'Post‑deployment, the top governance artifact to review monthly is…',
        options: [
          'Marketing materials',
          'Model/agent change logs and incident reports',
          'Debug console logs only',
          'Website traffic'
        ],
        correctIndex: 1,
        explanation:
          'Change logs and incident reviews drive safe iteration and accountability.'
      },
      {
        q: 'To handle sensitive data in LLM fine‑tuning, the safest approach is…',
        options: [
          'Public cloud with no VPC',
          'De‑identify + encrypt + access controls; consider synthetic augmentation',
          'Email datasets between teams',
          'Store keys in code'
        ],
        correctIndex: 1,
        explanation:
          'Combine de‑identification, encryption, least‑privilege access, and secure key management.'
      },
      {
        q: 'A fairness audit finds lower recall for a subgroup. A solid next step is…',
        options: [
          'Ignore if overall AUC is high',
          'Collect targeted data and/or reweight to improve subgroup recall',
          'Reduce learning rate',
          'Switch to k‑NN'
        ],
        correctIndex: 1,
        explanation:
          'Targeted data and reweighting address subgroup performance gaps ethically and effectively.'
      },
      {
        q: 'Which evaluation best simulates real‑world agent performance?',
        options: [
          'Static Q&A accuracy',
          'End‑to‑end task trials with humans in the loop',
          'Token perplexity',
          'Context window overflow rate'
        ],
        correctIndex: 1,
        explanation:
          'Task trials with oversight measure reliability, safety, and coordination in realistic settings.'
      },
      {
        q: 'The NIST AI RMF main lifecycle phases include…',
        options: ['Design, Build, Market', 'Map, Measure, Manage, Govern', 'Plan, Code, Ship', 'Collect, Store, Query'],
        correctIndex: 1,
        explanation:
          'NIST AI RMF centers on Map, Measure, Manage, and Govern for comprehensive risk management.'
      },
      {
        q: 'For international deployments, which privacy consideration is critical?',
        options: [
          'Cache everything globally',
          'Data localization and cross‑border transfer compliance',
          'Disable logging entirely',
          'Translate all records automatically'
        ],
        correctIndex: 1,
        explanation:
          'Regimes like GDPR require data localization/transfer controls and lawful bases for processing.'
      }
    ]
  },
  {
    id: 'expert',
    title: 'AI Systems & Evaluation – Expert',
    level: 'Expert',
    description: 'Frontier evaluation, scalable oversight, security, and production reliability at scale.',
    questions: [
      {
        q: 'In retrieval-augmented generation (RAG), which failure indicates retrieval saturation rather than pure model hallucination?',
        options: [
          'The model cites sources irrelevant to the query',
          'Increasing top-k does not improve citation precision and answers remain off-topic',
          'The model repeats the same sentence twice',
          'Latency spikes during embedding generation'
        ],
        correctIndex: 1,
        explanation: 'If raising top-k yields no better grounding, the corpus/query mapping is saturated; fix indexing, recall, or query rewriting.'
      },
      {
        q: 'Which strategy most robustly limits prompt injection for tool-using agents?',
        options: [
          'Longer system prompts',
          'Constrained function calling with schema validation, allowlists, and output guards',
          'Higher temperature to explore safely',
          'Rely on user instructions only'
        ],
        correctIndex: 1,
        explanation: 'Defense-in-depth uses strict schemas, tool allowlists, canonicalization, and verification layers to bound agent behavior.'
      },
      {
        q: 'A/B tests show a small accuracy gain but a large increase in user time-on-task. What metric trade-off should you examine first?',
        options: [
          'Precision/recall balance and error costs',
          'Token throughput',
          'GPU memory fragmentation',
          'Model parameter count'
        ],
        correctIndex: 0,
        explanation: 'Small accuracy gains may hide higher false positives/negatives that increase user burden; evaluate utility-weighted metrics.'
      },
      {
        q: 'For evals of multi-step agents, which design best captures real performance?',
        options: [
          'Static multiple-choice questions',
          'End-to-end task suites with partial credit, timeouts, and human spot checks',
          'Perplexity over synthetic text',
          'Measuring context window usage only'
        ],
        correctIndex: 1,
        explanation: 'E2E task suites with oversight and timeouts reflect coordination, planning, and failure recovery abilities.'
      },
      {
        q: 'You suspect training-serving skew. Which probe most directly detects it?',
        options: [
          'Compare training logs to marketing copy',
          'Shadow traffic to a mirror model and compare feature distributions and predictions',
          'Increase batch size at inference',
          'Lower temperature in production'
        ],
        correctIndex: 1,
        explanation: 'Shadow deployments reveal feature and prediction differences between offline and online pipelines.'
      },
      {
        q: 'Which approach best mitigates data poisoning in public web-scraped corpora?',
        options: [
          'Trust popular domains only',
          'Content provenance checks, de-duplication, anomaly detection, and red teaming of the corpus',
          'Increase context window size',
          'Rely on model size to overpower poisoning'
        ],
        correctIndex: 1,
        explanation: 'Provenance, dedupe, anomaly detection, and targeted audits reduce poisoning risk; scale alone is insufficient.'
      },
      {
        q: 'For cost-quality optimization of LLM routing, which scheme is most effective?',
        options: [
          'Randomly pick a model each request',
          'Heuristic or learned router selecting among small/medium/large models by task complexity',
          'Always use the largest model',
          'Use temperature=0 for everything'
        ],
        correctIndex: 1,
        explanation: 'Routers allocate budget: simple tasks to small models, hard tasks to larger ones, improving cost-performance.'
      },
      {
        q: 'An LLM shows “gradient hacking”-like behavior in evals. What should you do first?',
        options: [
          'Assume it is sentient',
          'Harden eval protocols: randomize templates, holdout prompts, externalize reward signals, and cross-model checks',
          'Lower the learning rate',
          'Switch to beam search'
        ],
        correctIndex: 1,
        explanation: 'Before exotic conclusions, rule out eval leakage and reward gaming by robustifying protocols and using multiple judges.'
      },
      {
        q: 'For safety evals on refusal/guardrails, which setup reduces judge bias?',
        options: [
          'Single in-model self-judge',
          'Blind, cross-model judges with rubric prompts and majority vote',
          'Judge with access to ground-truth answers only',
          'Use the same model for generation and judging without controls'
        ],
        correctIndex: 1,
        explanation: 'Cross-model blind judging with explicit rubrics limits shared biases and improves reliability.'
      },
      {
        q: 'To maintain grounding quality in RAG over time, what’s a key SLO/monitor?',
        options: [
          'Context window token count',
          'Citation precision/recall at k and source freshness',
          'Average prompt length',
          'Model download size'
        ],
        correctIndex: 1,
        explanation: 'Track citation precision/recall and source freshness to ensure answers remain well-grounded and current.'
      }
    ]
  }
];

export default quizzes;