export const quizzes = [
  {
    id: 'intermediate',
    title: 'AI in Practice – Intermediate',
    level: 'Intermediate',
    description: 'Applied AI concepts for professionals: reliability, privacy, risk, and evaluation.',
    questions: [
      {
        q: 'Which metric best detects overfitting when evaluating a clinical prediction model?',
        options: ['High training accuracy', 'Worse validation performance than training', 'Number of parameters', 'Model size on disk'],
        correctIndex: 1,
        explanation: 'Overfitting shows up as a gap between training and validation performance; worse validation vs training indicates the model memorized instead of generalizing.'
      },
      {
        q: 'For PHI in a hospital setting, the safest default storage pattern is…',
        options: ['Centralize all PHI in one cloud bucket', 'Local-first with strict access controls and audit logs', 'Email CSVs to the team weekly', 'Store PHI in analytics dashboards'],
        correctIndex: 1,
        explanation: 'Local-first (or private VPC) with least-privilege access, encryption, and auditing reduces exposure risk.'
      },
      {
        q: 'A triage model’s ROC AUC improves from 0.82 to 0.87, but alerts double. What should you check first?',
        options: ['Inference latency', 'Operating threshold and precision/PPV', 'GPU utilization', 'Model license'],
        correctIndex: 1,
        explanation: 'Thresholds affect alert volume. Check precision/PPV at the chosen threshold to understand false positives and clinician burden.'
      },
      {
        q: 'Which approach reduces data leakage in model evaluation?',
        options: ['Shuffle all data before training', 'Split by patient or time (e.g., by encounter date)', 'Use k-fold on random rows only', 'Use the largest possible batch size'],
        correctIndex: 1,
        explanation: 'Temporal or patient-level splits prevent the same patient’s data appearing in both train and test, avoiding leakage.'
      },
      {
        q: 'Which is most appropriate to detect distribution shift in production?',
        options: ['F1 score on the training set', 'Manual spot checks quarterly', 'Population drift monitoring (input + outcome)', 'Code coverage in unit tests'],
        correctIndex: 2,
        explanation: 'Monitoring input distributions and outcome prevalence helps detect drift that can degrade performance.'
      },
      {
        q: 'You deploy an ambient scribe. What is a critical safety control?',
        options: ['Disable logs to save storage', 'Allow free-text editing with change tracking', 'Force auto-sign without review', 'Email notes to patients automatically'],
        correctIndex: 1,
        explanation: 'Clinicians must review and edit drafts; change tracking improves accountability and learning.'
      },
      {
        q: 'A model is accurate but occasionally harmful. What practice helps mitigate harm?',
        options: ['Lower the learning rate', 'Human-in-the-loop approval for high-risk actions', 'Train longer', 'Use a bigger model'],
        correctIndex: 1,
        explanation: 'Human oversight at critical decision points reduces the risk of rare but serious errors.'
      },
      {
        q: 'For explainability in high-stakes use, which matters most?',
        options: ['Pretty graphs', 'Traceable evidence and alternatives for decisions', 'Open-sourcing the model', 'Using only linear models'],
        correctIndex: 1,
        explanation: 'Provide evidence, uncertainty, and alternatives to support clinician judgment in context.'
      },
      {
        q: 'Differential privacy is primarily used to…',
        options: ['Compress models', 'Protect individual contributions in datasets', 'Speed up training', 'Prevent prompt injection'],
        correctIndex: 1,
        explanation: 'Differential privacy limits what can be inferred about any individual from aggregate data.'
      },
      {
        q: 'To reduce hallucinations in a retrieval-augmented chatbot, you should…',
        options: ['Lower temperature and constrain to retrieved sources', 'Increase beam width', 'Use larger context windows only', 'Disable retrieval entirely'],
        correctIndex: 0,
        explanation: 'Lower temperature and grounding responses in retrieved citations reduces unsupported generations.'
      }
    ]
  },
  {
    id: 'advanced',
    title: 'AI Governance & Safety – Advanced',
    level: 'Advanced',
    description: 'Governance, red‑teaming, alignment, and lifecycle risk management for AI in healthcare.',
    questions: [
      {
        q: 'Which control best addresses prompt‑injection against an LLM agent accessing tools?',
        options: ['Longer prompts', 'Tool whitelisting + strict schemas + output verification', 'Higher sampling temperature', 'Removing system prompts'],
        correctIndex: 1,
        explanation: 'Limit tool scope, validate inputs/outputs, and verify actions to contain prompt‑injection impact.'
      },
      {
        q: 'A hospital RAG system cites outdated guidance. What is the right fix?',
        options: ['Increase model size', 'Automate corpus freshness checks and recrawl policies', 'Turn off citations', 'Use a different embedding model only'],
        correctIndex: 1,
        explanation: 'Governance requires freshness SLAs, automated recrawls, and deprecation of stale sources.'
      },
      {
        q: 'Red‑teaming an AI scribe should include…',
        options: ['Random typos only', 'Edge accents/noise, overlapping speakers, and adversarial prompts', 'GPU stress tests only', 'English-only inputs'],
        correctIndex: 1,
        explanation: 'Realistic audio and prompt adversaries reveal failure modes that standard tests miss.'
      },
      {
        q: 'Which alignment evaluation is most relevant for care‑orchestration agents?',
        options: ['BLEU score', 'Task phase‑gates with human approval and rollback plans', 'Parameter count', 'Wall‑clock training time'],
        correctIndex: 1,
        explanation: 'Phase‑gates, approvals, and rollback ensure the agent aligns with clinical intent over time.'
      },
      {
        q: 'Post‑deployment, the top governance artifact to review monthly is…',
        options: ['Marketing materials', 'Model/agent change logs and incident reports', 'Debug console logs only', 'Website traffic'],
        correctIndex: 1,
        explanation: 'Change logs and incident reviews drive safe iteration and accountability.'
      },
      {
        q: 'To handle PHI in LLM fine‑tuning, the safest approach is…',
        options: ['Public cloud with no VPC', 'De‑identify + encrypt + access controls; consider synthetic augmentation', 'Email datasets between teams', 'Store keys in code'],
        correctIndex: 1,
        explanation: 'Combine de‑identification, encryption, least‑privilege access, and secure key management.'
      },
      {
        q: 'A fairness audit finds lower recall for a subgroup. A solid next step is…',
        options: ['Ignore if overall AUC is high', 'Collect targeted data and/or reweight to improve subgroup recall', 'Reduce learning rate', 'Switch to k‑NN'],
        correctIndex: 1,
        explanation: 'Targeted data and reweighting address subgroup performance gaps ethically and effectively.'
      },
      {
        q: 'Which evaluation best simulates real‑world agent performance?',
        options: ['Static Q&A accuracy', 'End‑to‑end task trials with humans in the loop', 'Token perplexity', 'Context window overflow rate'],
        correctIndex: 1,
        explanation: 'Task trials with oversight measure reliability, safety, and coordination in realistic settings.'
      },
      {
        q: 'The NIST AI RMF main lifecycle phases include…',
        options: ['Design, Build, Market', 'Map, Measure, Manage, Govern', 'Plan, Code, Ship', 'Collect, Store, Query'],
        correctIndex: 1,
        explanation: 'NIST AI RMF centers on Map, Measure, Manage, and Govern for comprehensive risk management.'
      },
      {
        q: 'For international deployments, which privacy consideration is critical?',
        options: ['Cache everything globally', 'Data localization and cross‑border transfer compliance', 'Disable logging entirely', 'Translate all records automatically'],
        correctIndex: 1,
        explanation: 'Regimes like GDPR require data localization/transfer controls and lawful bases for processing.'
      }
    ]
  }
];

export default quizzes;