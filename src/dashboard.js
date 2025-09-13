// --- Employee Resources page interactive handlers ---
function initEmployeeResourcesPage() {
  const select = document.getElementById('sector-select');
  const advice = document.getElementById('sector-advice');
  if (select && advice) {
    select.addEventListener('change', function() {
      var val = select.value;
      var html = '';
      // Add a short instruction for clarity
      let instruction = '<div class="mb-2 text-xs text-gray-600">Links below are clickable buttons for more info or training.</div>';
      // Helper to style links as buttons
      function styleLinks(str) {
        return str.replace(
          /<a ([^>]+)>([^<]+)<\/a>/g,
          "<a $1 class='block w-full text-center px-3 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-800 font-semibold transition' style='text-decoration:none;margin:4px 0;' target='_blank' rel='noopener'>$2</a>"
        );
      }
      if (val === 'healthcare') html = `<strong>Healthcare:</strong><ul>
        <li>AI in diagnostics, patient management, and admin: upskill in digital health and data privacy.</li>
        <li><a href='https://www.e-lfh.org.uk/'>NHS e-Learning for Healthcare</a></li>
        <li><a href='https://transform.england.nhs.uk/ai-lab/'>NHS AI Lab (England)</a></li>
        <li>Data security and privacy: <a href='https://www.dsptoolkit.nhs.uk/'>NHS DSP Toolkit</a></li>
        <li>Mental health support: <a href='https://www.mind.org.uk/'>Mind</a></li>
      </ul>`;
      else if (val === 'education') html = `<strong>Education:</strong><ul>
        <li>AI in lesson planning, grading, and student support: upskill in digital tools and AI literacy.</li>
        <li><a href='https://teachcomputing.org/'>National Centre for Computing Education (Teach Computing)</a></li>
        <li><a href='https://www.jisc.ac.uk/ai'>Jisc: AI in education (HE & FE)</a></li>
        <li>Evidence-based edtech: <a href='https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/digital-technology'>EEF Digital Technology guidance</a></li>
      </ul>`;
      else if (val === 'retail') html = `<strong>Retail:</strong><ul>
        <li>Automation in checkout, inventory, and customer service: upskill in digital sales and logistics.</li>
        <li><a href='https://www.skillsforcareers.education.gov.uk/'>Skills for Careers (UK)</a></li>
        <li><a href='https://www.skillsforcareers.education.gov.uk/pages/skills-bootcamps'>Find a Skills Bootcamp</a></li>
        <li>Careers support: <a href='https://nationalcareers.service.gov.uk/'>National Careers Service</a></li>
      </ul>`;
      else if (val === 'manufacturing') html = `<strong>Manufacturing:</strong><ul>
        <li>Robotics and smart factories: upskill in digital manufacturing and safety.</li>
        <li><a href='https://www.madesmarter.uk/'>Made Smarter</a></li>
        <li><a href='https://hvm.catapult.org.uk/'>High Value Manufacturing Catapult</a></li>
        <li><a href='https://www.skillsforcareers.education.gov.uk/pages/skills-bootcamps'>Find a Skills Bootcamp</a></li>
      </ul>`;
      else if (val === 'finance') html = `<strong>Finance:</strong><ul>
        <li>AI in risk, compliance, and customer service: upskill in data analysis and compliance.</li>
        <li>Regulatory innovation: <a href='https://www.fca.org.uk/innovation'>FCA Innovation Hub</a></li>
        <li>Data skills hub: <a href='https://www.open.edu/openlearn/digital'>OpenLearn: Digital & Computing</a></li>
        <li>Careers support: <a href='https://nationalcareers.service.gov.uk/'>National Careers Service</a></li>
      </ul>`;
      else if (val === 'public') html = `<strong>Public Sector:</strong><ul>
        <li>AI in admin, casework, and citizen services: upskill in digital government and data ethics.</li>
        <li><a href='https://www.gov.uk/service-manual'>GOV.UK Service Manual</a></li>
        <li><a href='https://www.gov.uk/government/collections/digital-data-and-technology-profession-capability-framework'>DDaT Capability Framework</a></li>
        <li>Ethics: <a href='https://www.gov.uk/government/publications/data-ethics-framework'>UK Data Ethics Framework</a></li>
      </ul>`;
      else html = '<em>Select a sector to see tailored advice, training links, and support contacts here.</em>';
      advice.innerHTML = val ? instruction + styleLinks(html) : html;
    });
  }
}

import './style.css';
import { articles } from './data/articles.js';
import { categories } from './data/categories.js';
import { weeklyBlog } from './data/weeklyBlog.js';
import { categoryPages } from './data/categoryPages.js';

// --- Add "AI Jobs" to categories and categoryPages (MUST be before rendering) ---
if (!categories.some(cat => cat.name === "AI Jobs")) {
  categories.push({
    name: "AI Jobs",
    icon: `<svg class="w-5 h-5 mr-2 inline text-green-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"/></svg>`
  });
}
categoryPages["AI Jobs"] = {
  content: `
    <section class="mb-10" aria-labelledby="ai-jobs-hero-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div>
          <h2 id="ai-jobs-hero-title" class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 flex items-center gap-3">
            <span>
              <svg class="w-10 h-10 text-blue-700 inline-block mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"/>
              </svg>
            </span>
            AI Job Board
          </h2>
          <p class="text-lg text-blue-800 mb-2">
            Discover remote opportunities in Artificial Intelligence.
          </p>
          <p class="text-md text-blue-900 mb-2">
            Browse the latest AI, machine learning, and data science jobs from around the world.
          </p>
          <div class="text-sm text-gray-500 mb-2">
            Powered by <a href="https://remotive.com/" target="_blank" rel="noopener" class="underline text-blue-700 font-bold">Remotive</a>
          </div>
        </div>
      </div>
    </section>
    <div id="ai-jobs-search" class="mb-6 flex flex-col md:flex-row gap-4">
      <input id="ai-jobs-keyword" type="text" placeholder="Keyword (e.g. Machine Learning, Data Scientist)" class="px-4 py-2 border rounded w-full md:w-1/3" />
      <select id="ai-jobs-country" class="border rounded px-3 py-2">
        <option value="">All Countries</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Canada">Canada</option>
        <option value="Germany">Germany</option>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
        <!-- Add more countries as needed -->
      </select>
      <button id="ai-jobs-search-btn" class="px-6 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800">Search</button>
    </div>
    <div id="ai-jobs-list" class="space-y-6">
      <div class="text-gray-600">Loading jobs...</div>
    </div>
  `
};

// --- Helper: Social sharing URLs ---
function getShareLinks(articleIdx) {
  const url = encodeURIComponent(window.location.origin + `/article/${articleIdx}`);
  const article = articles[articleIdx];
  const title = encodeURIComponent(article.title);
  return {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
    reddit: `https://www.reddit.com/submit?url=${url}&title=${title}`
  };
}

// --- Helper: Quiz HTML for each article ---
function getArticleQuiz(articleIdx) {
  const article = articles[articleIdx];
  if (!article.quiz) return '';
  const quiz = article.quiz;
  return `
    <div class="mt-8 p-4 bg-blue-50 rounded-lg shadow" id="article-quiz">
      <h4 class="font-bold mb-2">Quick Quiz</h4>
      <form id="articleQuizForm">
        <label class="block mb-2">${quiz.question}</label>
        ${quiz.options.map((opt, i) => `
          <div class="mb-2">
            <input type="radio" name="q1" value="${i}" id="q1${i}" required>
            <label for="q1${i}">${opt}</label>
          </div>
        `).join('')}
        <button type="submit" class="mt-2 px-4 py-1 bg-blue-700 text-white rounded hover:bg-blue-800">Submit Answer</button>
      </form>
      <div id="articleQuizResult" class="mt-3 font-semibold"></div>
    </div>
  `;
}

// --- Singularity Countdown in Sidebar ---
function updateSidebarSingularityCountdown() {
  const countdownDiv = document.getElementById('sidebar-singularity-countdown');
  if (countdownDiv) {
    const target = new Date('2045-01-01T00:00:00Z');
    const now = new Date();
    const diff = target - now;
    if (diff > 0) {
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
      countdownDiv.innerHTML = `Singularity in <span class="font-bold">${years}y ${days}d</span>`;
    } else {
      countdownDiv.innerHTML = `Singularity date (2045) has passed.`;
    }
  }
}
setInterval(updateSidebarSingularityCountdown, 60 * 60 * 1000); // update every hour

// --- Render header, sidebar, and empty main content ---
document.getElementById('root').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col font-sans text-gray-900">
    <!-- Header -->
    <header class="sticky top-0 z-10 bg-white/95 shadow-lg p-6 flex items-center justify-between" role="banner">
      <div class="flex items-center gap-3">
  <img src="/assets/logos/mainlogo.png" alt="Site logo" class="w-12 h-12 md:w-14 md:h-14 rounded site-logo" />
        <h1 class="text-3xl font-extrabold text-blue-900 tracking-tight">Humanity, Society and AI</h1>
      </div>
      <nav aria-label="Main navigation">
        <a href="#" class="ml-6 text-blue-900 hover:text-blue-700 font-medium transition-colors focus:outline focus:outline-2 focus:outline-blue-700">About</a>
      </nav>
    </header>
  <!-- Tech Progress Animation (decorative) -->
  <div id="tech-progress" class="px-6 md:px-12 pt-2" aria-hidden="true">
      <div class="relative h-10">
        <!-- Parallax starfield (canvas) -->
        <canvas id="tech-stars" class="absolute inset-0 w-full h-10 pointer-events-none opacity-60" aria-hidden="true"></canvas>
        <!-- Earth backdrop (visible during spaceship phase) -->
        <div id="earth-backdrop" class="absolute right-0 top-0 w-16 h-10 rounded-full opacity-0 pointer-events-none" style="background: radial-gradient(circle, #4ade80 30%, #22c55e 60%, #15803d 100%); transform: scale(0.8);" aria-hidden="true"></div>
        <!-- Track -->
        <div class="absolute inset-x-0 top-4 h-2 rounded-full bg-white/30 shadow-inner overflow-hidden ring-1 ring-white/40" aria-hidden="true">
          <div id="tech-progress-fill" class="h-full w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 transition-[width] duration-150 ease-out" style="background-size:200% 100%; box-shadow:0 0 8px rgba(99,102,241,.5);"></div>
        </div>
        <!-- Moving marker and icons -->
        <div id="tech-marker" class="absolute -top-1 left-0 -translate-x-1/2 will-change-transform">
          <div class="relative w-10 h-10" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,.35));">
            <!-- speed trail -->
            <div id="tech-trail" class="absolute -left-16 top-1/2 -translate-y-1/2 h-2 w-16 rounded-full opacity-0 pointer-events-none" style="background:linear-gradient(90deg, rgba(99,102,241,0) 0%, rgba(99,102,241,.55) 50%, rgba(99,102,241,0) 100%); filter: blur(2px);"></div>
            <!-- Person Walking -->
            <svg id="icon-walking" viewBox="0 0 64 64" class="absolute inset-0 w-10 h-10 text-green-700 drop-shadow" fill="currentColor" aria-hidden="true" style="opacity:1;">
              <!-- head -->
              <circle cx="32" cy="18" r="6" fill="currentColor"/>
              <!-- body -->
              <rect x="28" y="24" width="8" height="16" rx="2" fill="currentColor"/>
              <!-- left arm -->
              <rect x="22" y="26" width="6" height="3" rx="1.5" fill="currentColor" transform="rotate(-20 25 27.5)"/>
              <!-- right arm -->
              <rect x="36" y="26" width="6" height="3" rx="1.5" fill="currentColor" transform="rotate(20 39 27.5)"/>
              <!-- left leg (walking stride) -->
              <rect x="26" y="40" width="4" height="12" rx="2" fill="currentColor" transform="rotate(-15 28 46)"/>
              <!-- right leg -->
              <rect x="34" y="40" width="4" height="12" rx="2" fill="currentColor" transform="rotate(10 36 46)"/>
              <!-- walking step emphasis -->
              <ellipse cx="24" cy="56" rx="3" ry="1" fill="currentColor" opacity="0.3"/>
            </svg>
            <!-- Car -->
            <svg id="icon-car" viewBox="0 0 64 64" class="absolute inset-0 w-10 h-10 text-blue-900 drop-shadow" fill="currentColor" aria-hidden="true" style="opacity:0;">
              <path d="M8 38c0-2 1.2-3.7 3-4.5l5.7-2.6 4.5-8.7A6 6 0 0 1 27.5 18H38a6 6 0 0 1 5.4 3.3l4.1 8.2 6.1 2.7c1.8.8 3 2.5 3 4.5v6c0 1.1-.9 2-2 2h-2.2a6.8 6.8 0 0 1-13.6 0H23.2a6.8 6.8 0 0 1-13.6 0H8c-1.1 0-2-.9-2-2v-6Zm10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm28 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
            </svg>
            <!-- Train -->
            <svg id="icon-train" viewBox="0 0 64 64" class="absolute inset-0 w-10 h-10 text-indigo-900 drop-shadow" fill="currentColor" aria-hidden="true" style="opacity:0;">
              <!-- body -->
              <rect x="10" y="22" rx="4" ry="4" width="42" height="18" fill="currentColor"/>
              <!-- windows -->
              <rect x="16" y="26" width="8" height="6" fill="#e5e7eb" rx="1"/>
              <rect x="26" y="26" width="8" height="6" fill="#e5e7eb" rx="1"/>
              <rect x="36" y="26" width="8" height="6" fill="#e5e7eb" rx="1"/>
              <!-- wheels -->
              <circle cx="22" cy="42" r="3" fill="#111827"/>
              <circle cx="40" cy="42" r="3" fill="#111827"/>
              <!-- headlight beam (animated via opacity) -->
              <defs>
                <linearGradient id="beamGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.6"/>
                  <stop offset="100%" stop-color="#fde68a" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <polygon id="train-beam" points="52,30 64,26 64,34" fill="url(#beamGrad)" opacity="0"/>
            </svg>
            <!-- Spaceship (horizontal) -->
            <svg id="icon-ship" viewBox="0 0 64 64" class="absolute inset-0 w-10 h-10 text-purple-700 drop-shadow" fill="currentColor" aria-hidden="true" style="opacity:0;">
              <!-- main body (horizontal) -->
              <ellipse cx="32" cy="32" rx="20" ry="6" fill="currentColor"/>
              <!-- cockpit -->
              <circle cx="45" cy="32" r="4" fill="#ddd6fe"/>
              <!-- left wing -->
              <polygon points="16,28 8,24 8,40 16,36" fill="currentColor" opacity="0.8"/>
              <!-- right wing -->
              <polygon points="16,28 8,24 8,40 16,36" fill="currentColor" opacity="0.8" transform="scale(1,-1) translate(0,-64)"/>
              <!-- exhaust flame -->
              <ellipse id="ship-flame" cx="8" cy="32" rx="6" ry="3" fill="url(#flameGrad)" opacity="0.0"/>
              <defs>
                <linearGradient id="flameGrad" x1="1" x2="0" y1="0" y2="0">
                  <stop offset="0%" stop-color="#f59e0b"/>
                  <stop offset="100%" stop-color="#ef4444"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="sticky top-20 h-[calc(100vh-5rem)] w-72 bg-white/95 shadow-xl rounded-xl m-6 p-6 hidden md:block" aria-label="Sidebar">
        <h2 class="text-xl font-semibold mb-6 text-blue-900">Categories</h2>
        <ul>
          <li class="mb-6">
            <a href="#" class="flex items-center px-3 py-2 rounded-lg text-blue-900 font-bold bg-indigo-100 hover:bg-indigo-200 transition focus:outline focus:outline-2 focus:outline-blue-700"
               id="dashboardNav">
              <svg class="w-5 h-5 mr-2 inline text-blue-900" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"></path></svg>
              Dashboard
            </a>
          </li>
          ${categories.map(cat => `
            <li class="mb-4">
              <a href="#" class="flex items-center px-3 py-2 rounded-lg text-indigo-700 font-medium hover:bg-indigo-100 transition focus:outline focus:outline-2 focus:outline-blue-700"
                 data-category="${cat.name}">
                ${cat.icon}${cat.name}
              </a>
              ${cat.name === "Superintelligence" ? `<div id="sidebar-singularity-countdown" class="ml-8 mt-1 text-xs text-yellow-900 bg-yellow-100 rounded px-2 py-1 font-semibold"></div>` : ""}
            </li>
          `).join('')}
        </ul>
      </aside>
  <!-- Main Content -->
  <main class="flex-1 p-6 md:p-12 bg-white/5 md:bg-white/10 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm" id="main-content" tabindex="-1"></main>
    </div>
    <!-- Modals (required for buttons to work) -->
  <div id="articleModal" class="fixed inset-0 z-50 bg-black/50 hidden overflow-auto" role="dialog" aria-modal="true" aria-labelledby="articleModalTitle">
      <div class="flex items-center justify-center min-h-screen p-6">
        <div class="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
          <button id="closeArticleModal" class="absolute top-4 right-4 text-2xl font-bold text-blue-900 hover:text-blue-700" aria-label="Close">&times;</button>
          <article>
            <h2 id="articleModalTitle" class="text-2xl font-bold mb-4"></h2>
            <div id="articleModalContent" class="prose max-w-none"></div>
            <div id="articleSocialShare" class="mt-6 flex gap-4"></div>
            <div id="articleQuizContainer" class="mt-6"></div>
          </article>
        </div>
      </div>
    </div>
  <div id="subscribeModal" class="fixed inset-0 z-50 bg-black/50 hidden overflow-auto" role="dialog" aria-modal="true" aria-labelledby="subscribeHeading">
      <div class="flex items-center justify-center min-h-screen p-6">
        <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
          <button id="closeModal" class="absolute top-4 right-4 text-2xl font-bold text-blue-900 hover:text-blue-700" aria-label="Close">&times;</button>
          <h2 id="subscribeHeading" class="text-xl font-bold mb-4">Subscribe to Weekly AI Insights</h2>
          <form id="subscribeForm" class="space-y-4">
            <input id="subscriberName" type="text" placeholder="Your name" class="w-full px-4 py-2 border rounded" required />
            <input type="email" placeholder="Your email" class="w-full px-4 py-2 border rounded" required />
            <button type="submit" class="w-full bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800">Subscribe</button>
          </form>
          <div id="subscribeSuccess" class="hidden text-green-700 font-bold mt-4">Thank you for subscribing!</div>
        </div>
      </div>
    </div>
  <div id="quizModal" class="fixed inset-0 z-50 bg-black/50 hidden overflow-auto" role="dialog" aria-modal="true" aria-labelledby="quizHeading">
      <div class="flex items-center justify-center min-h-screen p-6">
        <div class="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
          <button id="closeQuizModal" class="absolute top-4 right-4 text-2xl font-bold text-blue-900 hover:text-blue-700" aria-label="Close">&times;</button>
          <form id="quizForm" class="space-y-4">
            <h2 id="quizHeading" class="text-xl font-bold mb-2">Get Personalized Recommendations</h2>
            <label for="q1" class="block font-semibold">Your experience with AI:</label>
            <select id="q1" class="w-full px-4 py-2 border rounded" required>
              <option value="">Select...</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label for="q2" class="block font-semibold">Topic you're most interested in:</label>
            <select id="q2" class="w-full px-4 py-2 border rounded" required>
              <option value="">Select...</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="Ethics">Ethics</option>
              <option value="Work">Work & Jobs</option>
              <option value="Superintelligence">Superintelligence</option>
            </select>
            <button type="submit" class="w-full bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800">Get Recommendations</button>
          </form>
          <div id="quizResult" class="hidden">
            <h3 class="text-lg font-bold mb-2">Recommended Articles:</h3>
            <div id="quizRecommendations"></div>
            <button id="quizRestart" class="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Restart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// --- Main content rendering function ---
function renderMainContent(page) {
  const main = document.getElementById('main-content');



  // 1. If it's AI Jobs, render jobs page
  if (page === "AI Jobs") {
    main.innerHTML = categoryPages["AI Jobs"].content;
    setTimeout(() => {
      fetchAndDisplayAIJobs();
      document.getElementById('ai-jobs-search-btn').onclick = () => {
        fetchAndDisplayAIJobs();
      };
      document.getElementById('ai-jobs-keyword').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') fetchAndDisplayAIJobs();
      });
      attachSidebarListeners();
    }, 0);
    setTimeout(updateSidebarSingularityCountdown, 0);
    return;
  }

  // 2. If a category page exists, render it
  if (page && categoryPages[page]) {
    main.innerHTML = categoryPages[page].content;
    setTimeout(() => {
  attachSidebarListeners();
  if (typeof initCVBuilder === 'function') initCVBuilder();
  if (typeof initGovPage === 'function') initGovPage();
  // Employee Resources sector selector logic
  if (page === 'Employee Resources' && typeof initEmployeeResourcesPage === 'function') initEmployeeResourcesPage();
  // Employer and School simulators
  if (page === 'Employer Resources' && typeof initEmployerPage === 'function') initEmployerPage();
  if (page === 'School Resources' && typeof initSchoolResourcesPage === 'function') initSchoolResourcesPage();
    }, 0);
    setTimeout(updateSidebarSingularityCountdown, 0);
    return;
  }

  // 3. Otherwise, render the dashboard (default/fallback)
  // --- DASHBOARD HERO SECTION ---
  main.innerHTML = `

    <!-- Hero Banner -->
  <section class="mb-0" aria-labelledby="hero-title">
      <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div>
          <h2 id="hero-title" class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Exploring the Future of AI & Humanity
          </h2>
          <p class="text-lg text-blue-800 mb-4">
            Articles, insights, and resources on artificial intelligence, superintelligence, and their impact on human life, work, and meaning.
          </p>
          <p class="text-md text-blue-900 mb-4">
            <strong>Not sure where to begin?</strong> Click <b>Get Started</b> to tell us your interests and experience level. We’ll recommend the most relevant articles and resources for you!
          </p>
          <button id="getStartedBtn" class="mt-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 focus:outline focus:outline-2 focus:outline-blue-900 transition" aria-label="Get Started">
            Get Started
          </button>
        </div>
     <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
       alt="Abstract representation of AI and humanity"
       class="rounded-2xl shadow-xl w-64 h-40 object-cover hidden md:block" loading="lazy" width="400" height="256" />
      </div>
    </section>
  <!-- Section Divider -->
  <div role="separator" aria-hidden="true" class="my-12 h-px bg-gradient-to-r from-blue-500/0 via-indigo-400/40 to-purple-500/0 twinkle-line"></div>
    <!-- AI Progress Cards Section -->
<section class="mb-0" aria-labelledby="ai-types-title">
  <div class="flex items-center justify-between mb-6">
    <h2 id="ai-types-title" class="text-2xl font-bold text-white">AI Progress: Where Are We?</h2>
    <div class="flex items-center gap-3">
      <label for="ai-scenario" class="text-white text-sm font-semibold">Scenario:</label>
      <select id="ai-scenario" class="px-2 py-1 rounded bg-white text-sm">
        <option value="consensus">Consensus</option>
        <option value="optimistic">Optimistic</option>
        <option value="pessimistic">Pessimistic</option>
      </select>
  <button id="ai-scenario-info" class="ml-2 w-6 h-6 rounded-full bg-white text-blue-900 font-bold flex items-center justify-center" aria-label="Scenario info" aria-controls="ai-scenario-legend" aria-expanded="false">i</button>
    </div>
    <div id="ai-scenario-legend" class="hidden absolute right-12 top-28 z-50 w-80 bg-white text-blue-900 rounded-lg shadow-lg p-4 text-sm">
      <div class="font-semibold mb-2">Scenario presets</div>
      <div class="mb-2"><strong>Consensus:</strong> Default consensus estimates from our baseline experts.</div>
      <div class="mb-2"><strong>Optimistic:</strong> Faster timelines and higher near-term probability.</div>
      <div class="mb-2"><strong>Pessimistic:</strong> Slower timelines and lower near-term probability.</div>
  <div class="text-xs text-gray-500">These presets are model parameters (median year and steepness).</div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Narrow AI Card -->
    <div class="bg-white/95 rounded-2xl shadow-xl p-4 flex flex-col items-center">
      <svg class="w-10 h-10 mb-2 text-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4a4 4 0 00-4 4v1H7a3 3 0 000 6h1v1a4 4 0 004 4m0-16a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-4 4"/>
      </svg>
      <h3 class="text-lg font-bold text-blue-900 mb-1">Narrow AI</h3>
      <p class="text-blue-900 text-center text-sm mb-1">AI specialized for a single task (e.g., chatbots, image recognition).</p>
      <span class="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mb-1">Where we are today</span>
      <div class="mt-2 text-sm text-gray-700">Est. time to widespread Local AI adoption:</div>
      <div id="countdown-narrow" class="text-sm font-mono text-green-700" aria-live="polite">calculating...</div>
    </div>

    <!-- AGI Card -->
    <div class="bg-white/95 rounded-2xl shadow-xl p-4 flex flex-col items-center">
      <svg class="w-10 h-10 mb-2 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a7 7 0 017 7c0 3.87-3.13 7-7 7s-7-3.13-7-7a7 7 0 017-7zm0 14v4m-2 0h4"/>
      </svg>
      <h3 class="text-lg font-bold text-blue-900 mb-1">AGI</h3>
      <p class="text-blue-900 text-center text-sm mb-1">Artificial General Intelligence: human-level reasoning and learning across any domain.</p>
      <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full mb-1">Still theoretical</span>
      <div class="mt-2 text-sm text-gray-700">Est. time to AGI:</div>
      <div id="countdown-agi" class="text-sm font-mono text-yellow-700" aria-live="polite">calculating...</div>
    </div>

    <!-- ASI Card -->
    <div class="bg-white/95 rounded-2xl shadow-xl p-4 flex flex-col items-center">
      <svg class="w-10 h-10 mb-2 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7M5 13l-1.5 4.5a.5.5 0 00.6.6L11 19m-6-6l6 6"/>
      </svg>
      <h3 class="text-lg font-bold text-blue-900 mb-1">ASI (Singularity)</h3>
      <p class="text-blue-900 text-center text-sm mb-1">Artificial Superintelligence: AI vastly surpassing human intelligence.</p>
      <span class="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full mb-1">Speculative future</span>
      <div class="mt-2 text-sm text-gray-700">Est. time to ASI / Singularity:</div>
      <div id="countdown-asi" class="text-sm font-mono text-purple-700" aria-live="polite">calculating...</div>
    </div>
  </div>

  <!-- Progress Bar -->
  <div class="mt-6">
    <div class="flex items-center justify-between mb-1">
      <span class="text-green-300 text-xs font-bold">Narrow AI</span>
      <span class="text-yellow-300 text-xs font-bold">AGI</span>
      <span class="text-purple-300 text-xs font-bold">ASI</span>
    </div>
    <div class="relative h-3 bg-blue-900 rounded-full overflow-hidden">
      <div class="absolute left-0 top-0 h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400" style="width: 33%;"></div>
      <div class="absolute left-1/3 top-0 w-1 h-3 bg-yellow-400"></div>
      <div class="absolute left-2/3 top-0 w-1 h-3 bg-purple-400"></div>
      <div class="absolute left-[30%] top-1/2 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow -translate-y-1/2 animate-pulse" title="Current Progress"></div>
    </div>

    <div class="text-center text-xs text-white mt-1">We are here: Narrow AI</div>
  </div>

</section>
  <!-- Section Divider -->
  <div role="separator" aria-hidden="true" class="my-12 h-px bg-gradient-to-r from-blue-500/0 via-indigo-400/40 to-purple-500/0 twinkle-line"></div>
    <!-- Weekly Blog Card -->
  <article class="md:col-span-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between mb-0 border-4 border-yellow-400" tabindex="0" aria-labelledby="weekly-blog-title">
      <div>
        <span class="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-3">${weeklyBlog.badge}</span>
        <h3 id="weekly-blog-title" class="text-2xl md:text-3xl font-extrabold text-white mb-2">${weeklyBlog.title}</h3>
        <div class="text-indigo-100 mb-4">${weeklyBlog.summary}</div>
        <div class="flex flex-col sm:flex-row gap-4">
          <button id="readWeeklyArticle" class="inline-block px-6 py-2 bg-white text-blue-800 font-bold rounded-lg shadow hover:bg-yellow-400 hover:text-blue-900 transition focus:outline focus:outline-2 focus:outline-yellow-400" aria-label="Read this week's AI blog">Read this week's article →</button>
          <button id="subscribeBtn" class="inline-block px-6 py-2 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow hover:bg-yellow-300 transition focus:outline focus:outline-2 focus:outline-blue-700" aria-label="Subscribe to Weekly AI Insights">
            Subscribe
          </button>
        </div>
      </div>
    </article>
  <!-- Section Divider -->
  <div role="separator" aria-hidden="true" class="my-12 h-px bg-gradient-to-r from-blue-500/0 via-indigo-400/40 to-purple-500/0 twinkle-line"></div>
    <!-- Embedded Videos Section -->
    <section class="mb-0">
      <h2 class="text-2xl font-bold text-white mb-6">Latest risk assessment podcasts</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Videos grid -->
          <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe loading="lazy"
              src="https://www.youtube.com/embed/UclrVWafRAI"
              title="YouTube video 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full"></iframe>
          </div>
          <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe loading="lazy"
              src="https://youtube.com/embed/j2i9D24KQ5k"
              title="YouTube video 2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full"></iframe>
          </div>
          <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe loading="lazy"
              src="https://youtube.com/embed/U05IWKf94sM"
              title="YouTube video 3"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full"></iframe>
          </div>
          <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe loading="lazy"
              src="https://youtube.com/embed/LgUjLcxJxVg"
              title="YouTube video 4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-full h-full"></iframe>
          </div>
      </div>
    </section>
    
    <!-- Society Impact Section -->
    <section class="mt-10 mb-0" aria-labelledby="society-impact-title">
      <div class="bg-white/95 rounded-2xl shadow-xl p-6">
        <h3 id="society-impact-title" class="text-lg font-bold text-blue-900 mb-3">How will AI impact society?</h3>
        <form id="societyImpactForm" class="flex flex-col gap-3">
          <label for="societySelect" class="text-sm font-semibold">Choose a societal area</label>
          <select id="societySelect" class="w-full px-3 py-2 border rounded">
            <option value="">-- Choose an area --</option>
            <option value="crime">Crime & Public Safety</option>
            <option value="relationships">Relationships & Family</option>
            <option value="economy">Economy & Jobs</option>
            <option value="education">Education & Learning</option>
            <option value="health">Health & Wellbeing</option>
            <option value="democracy">Democracy & Governance</option>
            <option value="environment">Environment & Climate</option>
            <option value="media">Media & Information</option>
            <option value="culture">Culture & Arts</option>
            <option value="privacy">Privacy & Civil Liberties</option>
            <option value="inequality">Inequality & Inclusion</option>
            <option value="community">Community & Social Fabric</option>
          </select>
          <button type="submit" class="mt-2 bg-blue-700 text-white py-2 rounded font-bold">Show Impact</button>
        </form>
        <div id="societyResult" class="mt-4 p-3 rounded bg-blue-50 border border-blue-200 text-blue-900 hidden fx-fade-expand fx-hidden" tabindex="-1" aria-live="polite"></div>
      </div>
    </section>

    <!-- Industry Impact Section (moved out to avoid stretching videos) -->
    <section class="mt-10 mb-0" aria-labelledby="industry-impact-title">
      <div class="bg-white/95 rounded-2xl shadow-xl p-6">
        <h3 id="industry-impact-title" class="text-lg font-bold text-blue-900 mb-3">Will AI impact your industry?</h3>
        <form id="industryCardForm" class="flex flex-col gap-3">
          <label for="industrySelectCard" class="text-sm font-semibold">Select industry</label>
          <select id="industrySelectCard" class="w-full px-3 py-2 border rounded">
            <option value="">-- Choose an industry --</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail</option>
            <option value="transportation">Transportation</option>
            <option value="legal">Legal</option>
            <option value="agriculture">Agriculture</option>
            <option value="media">Media & Entertainment</option>
            <option value="technology">Technology</option>
            <option value="energy">Energy</option>
            <option value="construction">Construction</option>
            <option value="hospitality">Hospitality</option>
            <option value="government">Government</option>
            <option value="realestate">Real Estate</option>
            <option value="logistics">Logistics</option>
            <option value="defense">Defense</option>
            <option value="insurance">Insurance</option>
            <option value="telecom">Telecommunications</option>
            <option value="pharma">Pharmaceuticals</option>
            <option value="sports">Sports</option>
            <option value="arts">Arts & Culture</option>
            <option value="other">Other</option>
          </select>
          <button type="submit" class="mt-2 bg-blue-700 text-white py-2 rounded font-bold">Find Out</button>
        </form>
        <div id="industryCardResult" class="mt-4 p-3 rounded bg-blue-50 border border-blue-200 text-blue-900 hidden fx-fade-expand fx-hidden" tabindex="-1" aria-live="polite"></div>
      </div>
    </section>
    <!-- Section Divider -->
  <div role="separator" aria-hidden="true" class="my-12 h-px bg-gradient-to-r from-blue-500/0 via-indigo-400/40 to-purple-500/0 twinkle-line"></div>
<!-- Top Trending AI Websites Banner -->
<section id="trending-ai-sites" class="mb-0">
  <div class="rounded-3xl bg-white/95 shadow-2xl p-8 flex flex-col gap-2">
    <div class="font-bold text-lg text-blue-900 mb-2">Top Trending AI Websites</div>
    <div class="flex flex-wrap gap-4">
      <a href="https://www.openai.com/" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">OpenAI</a>
      <a href="https://www.deepmind.com/" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">DeepMind</a>
      <a href="https://www.anthropic.com/" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">Anthropic</a>
      <a href="https://www.huggingface.co/" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">Hugging Face</a>
      <a href="https://www.stability.ai/" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">Stability AI</a>
      <a href="https://arxiv.org/list/cs.AI/recent" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">arXiv AI Papers</a>
      <a href="https://www.aitrends.com/" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">AI Trends</a>
      <a href="https://www.lesswrong.com/tag/artificial-intelligence" target="_blank" rel="noopener" class="underline hover:text-yellow-500 text-blue-700">LessWrong AI</a>
    </div>
  </div>
</section>
  <!-- Section Divider -->
  <div role="separator" aria-hidden="true" class="my-12 h-px bg-gradient-to-r from-blue-500/0 via-indigo-400/40 to-purple-500/0 twinkle-line"></div>
    <!-- Articles -->
    <h2 class="text-2xl font-bold text-white mb-6">Featured Articles</h2>
    <div class="grid gap-8 md:grid-cols-2">
      ${articles.map((article, idx) => `
        <article class="bg-white rounded-2xl shadow-xl p-6 hover:scale-[1.03] hover:shadow-2xl transition-transform" tabindex="0" aria-labelledby="article-${article.title.replace(/\s+/g, '-').toLowerCase()}">
          <h3 id="article-${article.title.replace(/\s+/g, '-').toLowerCase()}" class="text-xl font-bold text-blue-900 mb-2">${article.title}</h3>
          <span class="inline-block bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full mb-3">${article.category}</span>
          <p class="text-gray-800">${article.summary}</p>
          <button data-article="${idx}" class="mt-4 inline-block text-blue-800 hover:underline font-semibold focus:outline focus:outline-2 focus:outline-blue-700">Read more <span aria-hidden="true">→</span></button>
        </article>
      `).join('')}
    </div>
  `;
  setTimeout(() => {
    // Subscribe modal logic
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', () => {
        const subModal = document.getElementById('subscribeModal');
        subModal.classList.remove('hidden');
        subModal.__lastOpener = subscribeBtn;
        const nameField = document.getElementById('subscriberName');
        (nameField || subModal).focus();
        trapFocus(subModal);
      });
    }
    // subscribe modal close button
    const subCloseBtn = document.getElementById('closeModal');
    const subModalEl = document.getElementById('subscribeModal');
    if (subCloseBtn && subModalEl) {
      subCloseBtn.addEventListener('click', () => {
        subModalEl.classList.add('hidden');
        releaseFocus(subModalEl);
      });
    }
// Weekly article modal logic
const readWeeklyArticle = document.getElementById('readWeeklyArticle');
if (readWeeklyArticle) {
  readWeeklyArticle.addEventListener('click', () => {
    const articleModal = document.getElementById('articleModal');
    const articleModalTitle = document.getElementById('articleModalTitle');
    const articleModalContent = document.getElementById('articleModalContent');
    articleModalTitle.textContent = weeklyBlog.title;
    articleModalContent.innerHTML = weeklyBlog.fullArticle;
  articleModal.classList.remove('hidden');
  articleModal.__lastOpener = readWeeklyArticle;
  (articleModalTitle || document.getElementById('closeArticleModal')).focus();
  trapFocus(articleModal);

    // Attach close button event listener
    const closeArticleModal = document.getElementById('closeArticleModal');
    if (closeArticleModal) {
      closeArticleModal.onclick = () => {
        articleModal.classList.add('hidden');
        releaseFocus(articleModal);
        history.pushState({}, '', '/');
  document.title = "Humanity, Society and AI";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = "Articles, insights, and resources on artificial intelligence, superintelligence, and their impact on human life, work, and meaning.";
      };
    }
  });
}
    // Quiz modal logic
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', () => {
        const quizModal = document.getElementById('quizModal');
        quizModal.classList.remove('hidden');
        document.getElementById('quizForm').classList.remove('hidden');
        document.getElementById('quizResult').classList.add('hidden');
        document.getElementById('quizForm').reset();
        quizModal.__lastOpener = getStartedBtn;
        document.getElementById('q1').focus();
        trapFocus(quizModal);
      });
    }
    // Attach article card listeners
    attachArticleCardListeners();
    attachSidebarListeners();
    // Industry card logic: handle form submission and show Local AI / AGI / ASI results
    const industryForm = document.getElementById('industryCardForm');
    const industrySelect = document.getElementById('industrySelectCard');
    const industryResult = document.getElementById('industryCardResult');
    if (industryForm && industrySelect && industryResult) {
      industryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const key = industrySelect.value;
        if (!key) return;
        const impactData = {
          healthcare: {
            label: 'Healthcare',
            linkCategory: 'AI / AGM / ASI',
            ai: 'Clinical decision support, diagnostic imaging triage, ambient scribing, and revenue-cycle automation (HIPAA-compliant). EHR workflows see big gains.',
            aiEx: ['Radiology triage flags likely pneumonia on X-rays', 'Ambient scribe drafts SOAP notes from consults'],
            agi: 'End-to-end treatment planning, drug discovery acceleration, synthetic trials, and continuous monitoring—under strict clinical governance.',
            agiEx: ['Multi-modal case review suggests optimal oncology regimen', 'Virtual RCTs simulate outcomes before enrolling patients'],
            asi: 'Potential eradication of major diseases and rapid bio-innovation; requires robust biosecurity and global health oversight.',
            asiEx: ['Rapid vaccine design and global deployment', 'Autonomous discovery of novel therapies']
          },
          finance: {
            label: 'Finance',
            linkCategory: 'Work',
            ai: 'Fraud/anomaly detection, AML/KYC screening, RPA for ops, and client chat. Quant research assist and faster reconciliation under compliance controls.',
            aiEx: ['Graph-based AML alerts for unusual counterparties', 'Reconciliation bots clear break items overnight'],
            agi: 'Autonomous portfolio strategies, market simulation, real-time risk, and hyper-personalized advice with model-risk management and auditability.',
            agiEx: ['Agent-based market simulations stress-test portfolios', 'Personal CFO copilots optimize tax and cash flow'],
            asi: 'Transformative effects on market structure and macro policy; systemic risk and governance become primary concerns.',
            asiEx: ['Policy co-design with macro-models at global scale']
          },
          education: {
            label: 'Education',
            linkCategory: 'School Resources',
            ai: 'Adaptive learning, auto-grading, lesson planning, accessibility (captioning, translation), and teacher assistants that reduce admin load.',
            aiEx: ['Auto-generated lesson plans aligned to standards', 'Captioning and translation for multilingual classrooms'],
            agi: '1:1 tutors across subjects and languages, instant curriculum generation, skills assessment, and credible credentialing at scale.',
            agiEx: ['Personal tutors that adapt to learning styles', 'Instant course design for differentiated instruction'],
            asi: 'Learning redefined with lifelong, instantaneous knowledge access; social frameworks for development and meaning become critical.',
            asiEx: ['Immersive, personalized learning worlds']
          },
          manufacturing: {
            label: 'Manufacturing',
            linkCategory: 'Work',
            ai: 'Vision-based QC, predictive maintenance, yield optimization, and digital twins for scheduling and line balancing; safer cobot workflows.',
            aiEx: ['Camera QC flags surface defects on the line', 'Digital twin predicts downtime and reschedules work'],
            agi: 'Autonomous factory orchestration, generative design for parts and tooling, resilient supply-chain planning under uncertainty.',
            agiEx: ['Automated cell reconfiguration for rush orders'],
            asi: 'Discovery of novel materials and processes; near-frictionless design-to-production cycles.',
            asiEx: ['On-demand materials with targeted properties']
          },
          retail: {
            label: 'Retail',
            linkCategory: 'Work',
            ai: 'Personalization, dynamic pricing, demand forecasting, and checkoutless experiences; supply-chain visibility and returns optimization.',
            aiEx: ['Checkoutless convenience stores', 'Next-best-offer personalization on PDPs'],
            agi: 'Autonomous merchandising, space planning, and omnichannel orchestration tailored to local context in real time.',
            agiEx: ['Store planograms auto-optimized by neighborhood'],
            asi: 'New commerce paradigms with fully anticipatory fulfillment and hyper-tailored experiences.',
            asiEx: ['Predictive fulfillment shipped before you order']
          },
          transportation: {
            label: 'Transportation',
            linkCategory: 'Future',
            ai: 'Driver assistance, route optimization, fleet telematics, and maintenance forecasting; safer operations and lower fuel costs.',
            aiEx: ['Dynamic routing reduces delivery time', 'Predictive brake service avoids roadside failures'],
            agi: 'Level 4/5 autonomy across modes (road, rail, air, sea), network-wide scheduling and congestion management.',
            agiEx: ['Autonomous yard ops and hub-to-hub lanes'],
            asi: 'Radically efficient logistics networks and re-architected mobility infrastructure.',
            asiEx: ['City-scale traffic equilibrated in real time']
          },
          legal: {
            label: 'Legal',
            linkCategory: 'Ethics',
            ai: 'Document review, clause extraction, eDiscovery, contract lifecycle automation, and first-draft motions with privacy safeguards.',
            aiEx: ['Contract redline suggestions and risk flags', 'eDiscovery prioritization of relevant docs'],
            agi: 'Case strategy generation, precedent synthesis, negotiation planning, and regulatory drafting support.',
            agiEx: ['Brief co-authoring with cited precedent'],
            asi: 'Rapid legislation and complex agreement generation—heightened need for human governance and legitimacy.',
            asiEx: ['Policy drafting at national scale']
          },
          agriculture: {
            label: 'Agriculture',
            linkCategory: 'Future',
            ai: 'Precision ag (imagery-based disease/pest detection), yield prediction, irrigation/fertilizer optimization, and robotics for repetitive tasks.',
            aiEx: ['Drone imagery spots blight early', 'Robotic weeders reduce herbicide use'],
            agi: 'Autonomous farm management across seasons and markets; resilient planning for weather and supply constraints.',
            agiEx: ['Seasonal crop plan optimized by climate models'],
            asi: 'Engineered crops and climate control strategies with global coordination needs.',
            asiEx: ['Climate-resilient varieties designed on demand']
          },
          media: {
            label: 'Media & Entertainment',
            linkCategory: 'Society',
            ai: 'Assistive writing, editing, tagging, and summarization; audience analytics; watermarking and provenance for synthetic media.',
            aiEx: ['Auto-edit rough cuts; smart captioning', 'SEO summaries and content tagging'],
            agi: 'Fully generated shows, games, and campaigns with dynamic narrative; complex IP and creator-compensation models.',
            agiEx: ['Interactive stories personalized per viewer'],
            asi: 'Real-time adaptive entertainment tailored to individual cognition and mood.',
            asiEx: ['Live content composed for each audience member']
          },
          technology: {
            label: 'Technology',
            linkCategory: 'Future',
            ai: 'Code copilots, test/gen, incident triage, and security scanning; CI/CD and ops automation for faster delivery.',
            aiEx: ['Unit tests generated from PR diffs', 'Ops copilot triages incidents with runbooks'],
            agi: 'System architecture, self-healing services, and product strategy co-design with human review.',
            agiEx: ['Architecture blueprints proposed from goals'],
            asi: 'Extreme invention velocity and new computing paradigms.',
            asiEx: ['Breakthrough algorithms and materials computing']
          },
          energy: {
            label: 'Energy',
            linkCategory: 'Future',
            ai: 'Demand forecasting, grid balancing, anomaly detection, and predictive maintenance for turbines, pipelines, and substations.',
            aiEx: ['Load forecasts reduce peak costs', 'Vibration monitoring predicts turbine failure'],
            agi: 'Whole-grid orchestration across sources and storage, siting and permitting optimization, and resilience planning.',
            agiEx: ['Site selection co-optimized for cost and impact'],
            asi: 'Step-changes in efficiency and discovery; careful safety and geopolitical coordination required.',
            asiEx: ['Novel energy storage and transmission designs']
          },
          construction: {
            label: 'Construction',
            linkCategory: 'Work',
            ai: 'Drone/BIM site monitoring, safety hazard detection, schedule/estimate optimization, and change-order analytics.',
            aiEx: ['Drone scans detect unsafe scaffolding', 'Bid estimates refined from past project data'],
            agi: 'Autonomous planning, robotic builds, and value engineering across trades and supply chains.',
            agiEx: ['Autonomous rebar tying and layout'],
            asi: 'Novel materials and on-demand structures with minimal waste.',
            asiEx: ['Rapid-print structures with custom composites']
          },
          hospitality: {
            label: 'Hospitality',
            linkCategory: 'Work',
            ai: 'Dynamic pricing, demand forecasting, staffing optimization, concierge chat, and review/reputation analysis.',
            aiEx: ['Forecast-driven staffing schedules', 'Concierge chat handles routine requests'],
            agi: 'End-to-end personalized itineraries and autonomous service orchestration (rooms, F&B, experiences).',
            agiEx: ['Real-time itinerary optimization during trip'],
            asi: 'Immersive, adaptive experiences beyond current modalities.',
            asiEx: ['Experiences generated to match guest mood']
          },
          government: {
            label: 'Government',
            linkCategory: 'Government Resources',
            ai: 'Citizen-service chat, benefits/case triage, fraud analytics, and smarter procurement; privacy and fairness are key.',
            aiEx: ['Case triage for benefits applications', 'RPA for document intake and routing'],
            agi: 'Policy simulation, emergency response planning, and infrastructure optimization with human accountability.',
            agiEx: ['Disaster response planning with scenario sims'],
            asi: 'National security, sovereignty, and governance challenges at unprecedented scale.',
            asiEx: ['Macro policy optimization with global feedback']
          },
          realestate: {
            label: 'Real Estate',
            linkCategory: 'Work',
            ai: 'Automated valuation, lead scoring, doc processing, and property analytics (imagery/IoT); occupancy and energy insights.',
            aiEx: ['AVM updates with latest comps', 'Lease extraction from PDFs into CRM'],
            agi: 'Autonomous portfolio optimization, urban planning, and permitting navigation.',
            agiEx: ['Portfolio rebalance based on multi-factor signals'],
            asi: 'Dynamically reconfigurable built environments and new ownership models.',
            asiEx: ['Adaptive buildings reconfigure for use patterns']
          },
          logistics: {
            label: 'Logistics',
            linkCategory: 'Work',
            ai: 'Route optimization, warehouse vision picking, demand forecasting, and customs/document automation.',
            aiEx: ['Pick-path optimization in warehouses', 'Auto-generated customs forms from shipments'],
            agi: 'End-to-end autonomous supply chains with multi-agent negotiation and dynamic re-routing.',
            agiEx: ['Agents re-route around port closures'],
            asi: 'Near-zero-latency, self-optimizing global flows.',
            asiEx: ['Global flow control with real-time clearing']
          },
          defense: {
            label: 'Defense',
            linkCategory: 'ASI Superintelligence',
            ai: 'ISR analysis, cyber defense, training simulation, and logistics; strong human-in-the-loop requirements.',
            aiEx: ['Computer vision on ISR feeds', 'Cyber anomaly detection and response playbooks'],
            agi: 'Battle-management decision support and strategic simulations under strict oversight.',
            agiEx: ['Wargaming outcomes across theaters'],
            asi: 'Strategic stability and escalation risks require international norms and controls.',
            asiEx: ['Treaty analysis and verification at scale']
          },
          insurance: {
            label: 'Insurance',
            linkCategory: 'Work',
            ai: 'Underwriting assistance, claims automation, fraud detection, and telematics-driven pricing.',
            aiEx: ['Photo-based damage estimates for claims', 'Usage-based pricing from telematics'],
            agi: 'Hyper-personalized risk models and dynamic products with transparent governance.',
            agiEx: ['Peril modeling and instant product creation'],
            asi: 'Market structure shifts as risk becomes more predictable and preventable.',
            asiEx: ['Prevention-first programs reshape premiums']
          },
          telecom: {
            label: 'Telecommunications',
            linkCategory: 'Future',
            ai: 'Self-optimizing networks, outage prediction, spectrum planning, and AI-driven support.',
            aiEx: ['RAN optimization reduces dropped calls', 'Chat support agents powered by AI'],
            agi: 'Autonomic networks with real-time provisioning across edge/cloud.',
            agiEx: ['Zero-touch provisioning across regions'],
            asi: 'New communications paradigms and ubiquitous connectivity.',
            asiEx: ['Ultra-low-latency global mesh connectivity']
          },
          pharma: {
            label: 'Pharmaceuticals',
            linkCategory: 'AI / AGM / ASI',
            ai: 'Candidate screening, lab automation, protocol generation, and real-world evidence analysis.',
            aiEx: ['Active learning screens compound libraries', 'Lab robots run workflows 24/7'],
            agi: 'De novo design and simulation of molecules, adaptive trials, and accelerated regulatory pathways.',
            agiEx: ['In-silico ADMET prediction streamlines design'],
            asi: 'Rapid cures and bio-innovation with stringent safety controls.',
            asiEx: ['On-demand therapeutics for rare diseases']
          },
          sports: {
            label: 'Sports',
            linkCategory: 'Society',
            ai: 'Performance analytics, injury prediction, tactic analysis, and fan engagement personalization.',
            aiEx: ['Wearable data predicts injury risk', 'Video analysis suggests tactics'],
            agi: 'Autonomous strategy generation, individualized training, and scouting at global scale.',
            agiEx: ['Training plans adapt session-by-session'],
            asi: 'New competitive formats and immersive fan experiences.',
            asiEx: ['Hyper-personalized live broadcasts']
          },
          arts: {
            label: 'Arts & Culture',
            linkCategory: 'Society',
            ai: 'Assistive creation (image/audio/video), upscaling, restoration, and multilingual translation with rights management.',
            aiEx: ['Photo restoration and colorization', 'Style transfer for concept exploration'],
            agi: 'Fully generative franchises and interactive storytelling; new models for attribution and revenue sharing.',
            agiEx: ['Narratives adapt to audience choices'],
            asi: 'Indistinguishable synthetic realities raising deep authenticity questions.',
            asiEx: ['Museum-grade immersive reconstructions']
          },
          other: {
            label: 'Other',
            linkCategory: 'AI / AGM / ASI',
            ai: 'AI will have domain-specific impacts across knowledge work, operations, and customer experiences.',
            aiEx: ['Automation of repetitive workflows', 'Better analytics and decision support'],
            agi: 'End-to-end automation of complex tasks with human oversight and accountability.',
            agiEx: ['Autonomous planning and optimization across functions'],
            asi: 'Broad transformations to how value is created, coordinated, and governed.',
            asiEx: ['Global-scale coordination and innovation']
          }
        };
        const d = impactData[key] || impactData.other;
        industryResult.innerHTML = `
          <div class="mb-2 font-bold text-blue-800">${d.label}</div>
          <div class="mb-3">
            <span class="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">Local AI</span>
            <div class="mt-1"><span class="font-semibold text-green-700">What it looks like:</span> ${d.ai}</div>
            ${d.aiEx && d.aiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.aiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          </div>
          <div class="mb-3">
            <span class="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">AGI</span>
            <div class="mt-1"><span class="font-semibold text-yellow-700">What it enables:</span> ${d.agi}</div>
            ${d.agiEx && d.agiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.agiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          </div>
          <div class="mb-2">
            <span class="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">ASI</span>
            <div class="mt-1"><span class="font-semibold text-purple-700">Longer-term shifts:</span> ${d.asi}</div>
            ${d.asiEx && d.asiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.asiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          </div>
          ${d.linkCategory ? `<div class="mt-3"><a href="#" data-category="${d.linkCategory}" class="inline-flex items-center gap-1 text-blue-800 underline hover:text-yellow-500">Explore related: ${d.linkCategory} <span aria-hidden=\"true\">→</span></a></div>` : ''}
        `;
  // Animate into view: reset state, then show and unhide fx
  industryResult.classList.remove('hidden');
  // Force a reflow so the transition triggers consistently
  void industryResult.offsetWidth;
  industryResult.classList.remove('fx-hidden');
  industryResult.focus();
        attachSidebarListeners();
      });
    }
    // Society impact logic
    const societyForm = document.getElementById('societyImpactForm');
    const societySelect = document.getElementById('societySelect');
    const societyResult = document.getElementById('societyResult');
    if (societyForm && societySelect && societyResult) {
      societyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const key = societySelect.value;
        if (!key) return;
        const societyData = {
          crime: {
            label: 'Crime & Public Safety',
            ai: 'Predictive hotspots, CCTV analytics, license plate recognition, and triage of non-emergency reports; improved evidence search with guardrails.',
            aiEx: ['Video analytics flag suspicious activity zones', 'Triage bots route non-urgent 311/101 reports'],
            agi: 'Coordinated response planning, investigative assistance across multimodal evidence, and rapid cross-agency intel sharing with oversight.',
            agiEx: ['Case link analysis across regions', 'Optimized patrol and response balancing fairness'],
            asi: 'Proactive harm prevention and near-real-time threat modeling; requires strict civil liberties protections and accountability.',
            asiEx: ['Early intervention signals with human review']
          },
          relationships: {
            label: 'Relationships & Family',
            ai: 'Companion chat, translation, scheduling, and conflict-mediation prompts; accessibility for neurodiverse communication.',
            aiEx: ['Translation in mixed-language families', 'Conversation summarizers for shared decisions'],
            agi: 'Deeply personalized guidance for parenting, caregiving, and relationship growth—ethically bounded and opt-in.',
            agiEx: ['Adaptive parenting support tuned to child needs'],
            asi: 'New forms of companionship and identity exploration; strong guardrails to preserve autonomy and authenticity.',
            asiEx: ['Immersive co-presence across distances']
          },
          economy: {
            label: 'Economy & Jobs',
            ai: 'Productivity boosts, new services, and task automation; reskilling demand and job redesign across sectors.',
            aiEx: ['Copilots reduce routine task time', 'SMBs launch services with AI back-office'],
            agi: 'Rapid creation of firms and products, dynamic labor-market matching, and policy challenges on taxation and safety nets.',
            agiEx: ['Autonomous entrepreneurship and micro-firms'],
            asi: 'Abundance scenarios and new distribution models; rethinking ownership, income, and meaning of work.',
            asiEx: ['Unbundled income via public dividends']
          },
          education: {
            label: 'Education & Learning',
            ai: 'Adaptive curricula, grading assistants, accessibility for diverse learners, and teacher planning support.',
            aiEx: ['1:many tutoring in classrooms', 'Auto-captioning and language support'],
            agi: '1:1 tutors at scale, validated assessments, and lifelong learning pathways for every individual.',
            agiEx: ['Instant course generation for goals'],
            asi: 'Learning becomes ambient and continuous; emphasis shifts to values, creativity, and social development.',
            asiEx: ['Fully personalized learning worlds']
          },
          health: {
            label: 'Health & Wellbeing',
            ai: 'Preventive care nudges, triage chat, remote monitoring, and mental health assistants.',
            aiEx: ['Wearables flag anomalies for early care', 'On-demand CBT-style exercises'],
            agi: 'Personal health orchestration and integrated care plans; faster discovery-to-care pipelines.',
            agiEx: ['Holistic care plans spanning providers'],
            asi: 'Disease burden drops dramatically; equity and global coordination become central.',
            asiEx: ['On-demand therapies for rare conditions']
          },
          democracy: {
            label: 'Democracy & Governance',
            ai: 'Civic service chat, misinformation detection, easier consultation analysis, and accessible documents.',
            aiEx: ['Plain-language policy summaries', 'Consultation clustering to surface themes'],
            agi: 'Scenario modeling for policy trade-offs, participatory tools at scale, and legislative drafting support with transparency.',
            agiEx: ['City-scale policy sims with public inputs'],
            asi: 'Global-scale coordination tools and rapid response; legitimacy and accountability must be preserved.',
            asiEx: ['Crisis coordination across jurisdictions']
          },
          environment: {
            label: 'Environment & Climate',
            ai: 'Better forecasts, anomaly detection, optimization of energy and resource use; easier reporting/compliance.',
            aiEx: ['Building energy optimization', 'Wildfire early-warning from imagery'],
            agi: 'Integrated climate planning, resilient infrastructure design, and ecosystem modeling.',
            agiEx: ['Adaptation plans tailored to local risks'],
            asi: 'Breakthrough mitigation and restoration technologies; robust governance to prevent misuse.',
            asiEx: ['Novel carbon capture and storage methods']
          },
          media: {
            label: 'Media & Information',
            ai: 'Assistive creation, moderation, provenance tooling, and consumer controls.',
            aiEx: ['Watermarked media and provenance checks', 'Summaries with source links'],
            agi: 'Personal news synthesis with bias disclosures and interactive explainers.',
            agiEx: ['Contextualized updates with citations'],
            asi: 'Highly adaptive, immersive information environments—safeguards against manipulation are vital.',
            asiEx: ['Personalized explorable explanations']
          },
          culture: {
            label: 'Culture & Arts',
            ai: 'Restoration, translation, and low-cost creation expand participation.',
            aiEx: ['Digitized restorations of archives', 'Community-produced works with AI help'],
            agi: 'Interactive, living cultural works and new compensation models for creators.',
            agiEx: ['Audience-participatory performances'],
            asi: 'Deeply personalized cultural experiences and new forms of expression.',
            asiEx: ['Immersive heritage reconstructions']
          },
          privacy: {
            label: 'Privacy & Civil Liberties',
            ai: 'Local AI and edge processing reduce data sharing; better privacy tooling for citizens and SMEs.',
            aiEx: ['On-device assistants, no cloud data', 'Easy DSARs and consent management'],
            agi: 'Powerful analysis requires new norms, regulation, and verifiable accountability.',
            agiEx: ['Open audits and verifiable logging'],
            asi: 'Rights-preserving architectures and global standards become essential.',
            asiEx: ['Privacy-by-design infrastructure at scale']
          },
          inequality: {
            label: 'Inequality & Inclusion',
            ai: 'Targeted outreach, accessibility features, and better benefits administration improve access.',
            aiEx: ['Assistive tech for disabilities', 'Faster benefits processing with safeguards'],
            agi: 'Stronger inclusion via personalized supports and pathways; careful bias oversight.',
            agiEx: ['Adaptive upskilling programs'],
            asi: 'Mass prosperity potential; governance choices determine fairness of distribution.',
            asiEx: ['Public dividends and access guarantees']
          },
          community: {
            label: 'Community & Social Fabric',
            ai: 'Local information, volunteer matching, and dispute resolution support strengthen ties.',
            aiEx: ['Local help hubs match needs to helpers'],
            agi: 'Civic projects co-designed with communities; resilient networks that activate in crises.',
            agiEx: ['Neighborhood preparedness planning'],
            asi: 'New modes of connection and shared meaning; safeguarding against isolation is key.',
            asiEx: ['Persistent, supportive community spaces']
          }
        };
        const d = societyData[key];
        if (!d) return;
        societyResult.innerHTML = `
          <div class="mb-2 font-bold text-blue-800">${d.label}</div>
          <div class="mb-3">
            <span class="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">Local AI</span>
            <div class="mt-1"><span class="font-semibold text-green-700">What it looks like:</span> ${d.ai}</div>
            ${d.aiEx && d.aiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.aiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          </div>
          <div class="mb-3">
            <span class="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">AGI</span>
            <div class="mt-1"><span class="font-semibold text-yellow-700">What it enables:</span> ${d.agi}</div>
            ${d.agiEx && d.agiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.agiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          </div>
          <div class="mb-2">
            <span class="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">ASI</span>
            <div class="mt-1"><span class="font-semibold text-purple-700">Longer-term shifts:</span> ${d.asi}</div>
            ${d.asiEx && d.asiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.asiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          </div>
        `;
        societyResult.classList.remove('hidden');
        void societyResult.offsetWidth;
        societyResult.classList.remove('fx-hidden');
        societyResult.focus();
      });
    }
    // --- AI probability estimates (replaces date countdowns) ---
    // We model subjective probabilities using a logistic CDF.
    // Parameters below are configurable 'median year' (t0) and steepness (k).
    // These are not a definitive forecast but a simple, transparent estimation model.
    const aiPresets = {
      optimistic: {
        narrow: { label: 'Local AI', t0: 2022, k: 1.8 },
        agi: { label: 'AGI', t0: 2030, k: 0.2 },
        asi: { label: 'ASI', t0: 2040, k: 0.12 }
      },
      consensus: {
        narrow: { label: 'Local AI', t0: 2023, k: 1.2 },
        agi: { label: 'AGI', t0: 2040, k: 0.12 },
        asi: { label: 'ASI', t0: 2060, k: 0.08 }
      },
      pessimistic: {
        narrow: { label: 'Local AI', t0: 2025, k: 0.9 },
        agi: { label: 'AGI', t0: 2055, k: 0.08 },
        asi: { label: 'ASI', t0: 2080, k: 0.05 }
      }
    };
    // start with consensus
    let aiProbabilityModel = JSON.parse(JSON.stringify(aiPresets.consensus));

    // wire up the scenario selector (if present) and persist choice to localStorage
    const scenarioSelect = document.getElementById('ai-scenario');
    const LS_KEY = 'aiScenarioChoice';
    if (scenarioSelect) {
      const stored = localStorage.getItem(LS_KEY);
      const initial = stored && aiPresets[stored] ? stored : 'consensus';
      scenarioSelect.value = initial;
      aiProbabilityModel = JSON.parse(JSON.stringify(aiPresets[initial]));
      scenarioSelect.addEventListener('change', (e) => {
        const v = e.target.value || 'consensus';
        if (aiPresets[v]) {
          aiProbabilityModel = JSON.parse(JSON.stringify(aiPresets[v]));
          localStorage.setItem(LS_KEY, v);
          updateAIProbabilities();
        }
      });
    }

    // Legend / tooltip toggle
    const infoBtn = document.getElementById('ai-scenario-info');
    const legend = document.getElementById('ai-scenario-legend');
    if (infoBtn && legend) {
      infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = legend.classList.contains('hidden');
        if (isHidden) {
          legend.classList.remove('hidden');
          legend.focus?.();
          infoBtn.setAttribute('aria-expanded', 'true');
        } else {
          legend.classList.add('hidden');
          infoBtn.setAttribute('aria-expanded', 'false');
        }
      });
      // Close when clicking outside
      document.addEventListener('click', (ev) => {
        if (!legend.classList.contains('hidden') && !legend.contains(ev.target) && ev.target !== infoBtn) {
          legend.classList.add('hidden');
          infoBtn.setAttribute('aria-expanded', 'false');
        }
      });
      // Close on Escape
      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape' && !legend.classList.contains('hidden')) {
          legend.classList.add('hidden');
          infoBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Logistic function returning probability in [0,1]
    function logisticProbability(year, t0, k) {
      // Prevent overflow for large exponents
      const x = -k * (year - t0);
      if (x > 700) return 0;
      if (x < -700) return 1;
      return 1 / (1 + Math.exp(x));
    }

    function updateAIProbabilities() {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const yearFrac = now.getFullYear() + ((now - startOfYear) / (1000 * 60 * 60 * 24 * 365.25));
      const elN = document.getElementById('countdown-narrow');
      const elA = document.getElementById('countdown-agi');
      const elS = document.getElementById('countdown-asi');

      const pN = logisticProbability(yearFrac, aiProbabilityModel.narrow.t0, aiProbabilityModel.narrow.k);
      const pA = logisticProbability(yearFrac, aiProbabilityModel.agi.t0, aiProbabilityModel.agi.k);
      const pS = logisticProbability(yearFrac, aiProbabilityModel.asi.t0, aiProbabilityModel.asi.k);

      if (elN) elN.innerHTML = `${(pN * 100).toFixed(1)}% <span class="text-xs text-gray-500">(median ${aiProbabilityModel.narrow.t0})</span>`;
      if (elA) elA.innerHTML = `${(pA * 100).toFixed(1)}% <span class="text-xs text-gray-500">(median ${aiProbabilityModel.agi.t0})</span>`;
      if (elS) elS.innerHTML = `${(pS * 100).toFixed(1)}% <span class="text-xs text-gray-500">(median ${aiProbabilityModel.asi.t0})</span>`;
    }

    // Kick off and update every 1s (keeps numbers feeling live); adjust interval if desired
    updateAIProbabilities();
    const aiProbInterval = setInterval(updateAIProbabilities, 1000);
    // Cleanup when navigating away
    window.addEventListener('beforeunload', () => clearInterval(aiProbInterval));
  }, 0);
  setTimeout(updateSidebarSingularityCountdown, 0);
}

// --- Fetch and display jobs from Remotive API ---
function fetchAndDisplayAIJobs() {
  const keyword = document.getElementById('ai-jobs-keyword').value.trim();
  const country = document.getElementById('ai-jobs-country').value;
  const listDiv = document.getElementById('ai-jobs-list');
  listDiv.innerHTML = `
    <div class="flex items-center gap-2 text-green-700">
      <svg class="animate-spin h-8 w-8 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 008-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <span>Searching for <span class="font-bold">"${keyword}"</span> jobs${country ? ' in <span class="font-bold">' + country + '</span>' : ''}...</span>
    </div>
  `;

  fetch(`https://remotive.com/api/remote-jobs?search=${encodeURIComponent(keyword)}`)
    .then(res => res.json())
    .then(data => {
      let jobs = data.jobs;
      if (country) {
        jobs = jobs.filter(job =>
          job.candidate_required_location &&
          job.candidate_required_location.toLowerCase().includes(country.toLowerCase())
        );
      }
      if (jobs.length === 0) {
        listDiv.innerHTML = `<div class="text-red-700 font-semibold mt-4">No jobs found for your search.</div>`;
        return;
      }
      listDiv.innerHTML = `
        <div class="flex flex-col gap-6">
          ${jobs.slice(0, 20).map(job => `
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col md:flex-row md:items-center gap-6 border border-gray-100">
              <div class="flex-1 min-w-0">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <span class="text-xl font-extrabold text-green-900">${job.title}</span>
                  <span class="ml-0 sm:ml-4 text-green-700 font-semibold">${job.company_name}</span>
                </div>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">${job.candidate_required_location}</span>
                  <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">${job.job_type}</span>
                </div>
                <div class="text-gray-700 text-sm mb-3 line-clamp-3" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                  ${job.description.replace(/(<([^>]+)>)/gi, '').slice(0, 260)}${job.description.length > 260 ? '...' : ''}
                </div>
                <a href="${job.url}" target="_blank" rel="noopener"
                  class="inline-block mt-2 px-5 py-2 bg-green-700 text-white font-bold rounded-lg shadow hover:bg-green-800 focus:outline focus:outline-2 focus:outline-green-800 transition"
                  aria-label="View and apply for ${job.title} at ${job.company_name}">
                  View & Apply
                </a>
              </div>
              <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-gray-50 rounded-xl border border-gray-200">
<img src="${job.company_logo_url || 'https://remotive.com/favicon.ico'}"
  alt="${job.company_name} logo"
  class="w-20 h-20 object-contain rounded bg-white"
  onerror="this.onerror=null;this.src='/assets/logos/mainlogo.png';" />
              </div>
            </div>
          `).join('')}
        </div>
      `;
    })
    .catch(() => {
      listDiv.innerHTML = `<div class="text-red-700 font-semibold mt-4">Failed to load jobs. Please try again later.</div>`;
    });
}

// --- Attach article card listeners after rendering main content ---
function attachArticleCardListeners() {
  document.querySelectorAll('button[data-article]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-article');
      openArticleModal(idx, btn);
    });
  });
}

// --- Attach sidebar listeners ---
function attachSidebarListeners() {
  document.querySelectorAll('[data-category]').forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      renderMainContent(link.getAttribute('data-category'));
      setTimeout(updateSidebarSingularityCountdown, 0);
    };
  });
  const dashboardNav = document.getElementById('dashboardNav');
  if (dashboardNav) {
    dashboardNav.onclick = e => {
      e.preventDefault();
      renderMainContent();
      setTimeout(updateSidebarSingularityCountdown, 0);
    };
  }
}

// --- CV Builder initialization (runs after category page render) ---
function initCVBuilder() {
  // Elements may not exist on other pages; guard early
  const openBtn = document.getElementById('cv-open-builder');
  const builder = document.getElementById('cv-builder');
  const form = document.getElementById('cv-builder-form');
  if (!openBtn || !builder || !form) return;

  const preview = document.getElementById('cv-preview');
  const generateBtn = document.getElementById('cv-generate-btn');
  const downloadDocxBtn = document.getElementById('cv-download-docx-btn');
  const templateSelect = document.getElementById('cv-template');
  const sampleJunior = document.getElementById('sample-junior');
  const sampleMid = document.getElementById('sample-mid');
  const sampleTech = document.getElementById('sample-tech');

  // Track created object URLs so we can revoke them on clear
  const urlsToRevoke = [];

  openBtn.addEventListener('click', () => {
    builder.classList.toggle('hidden');
    if (!builder.classList.contains('hidden')) {
      document.getElementById('cv-name').focus();
    }
  });

  function buildCVHtml(data) {
    const skills = (data.skills || '').split(',').map(s => s.trim()).filter(Boolean);
    const experience = (data.experience || '').split('\n').map(l => l.trim()).filter(Boolean);
    const education = (data.education || '').split('\n').map(l => l.trim()).filter(Boolean);

  const template = (data.template || 'simple');

  const baseStyle = `body{font-family:Arial,Helvetica,sans-serif;color:#111;padding:18px;margin:0} .header{display:flex;justify-content:space-between;align-items:center} h1{font-size:22px;margin:0} h2{font-size:16px;margin:8px 0} .section{margin-top:10px} .muted{color:#555;font-size:13px} ul{margin:4px 0 0 18px}`;

  const professionalExtras = `.header{border-bottom:2px solid #eee;padding-bottom:12px;margin-bottom:12px} h1{color:#0b5bd7} .section{margin-top:14px}` +
    `@media print { h1{font-size:18px} .header{padding-bottom:8px} }`;
  const creativeExtras = `body{background:#fff9f2} h1{font-family:Georgia,serif;color:#7a2b8b} .skills-badge{background:#fbe8ff;padding:6px 10px;border-radius:999px;margin-right:6px;display:inline-block}` +
    `@media print { body{background:transparent} h1{font-family:serif} }`;

  let style = baseStyle;
  if (template === 'professional') style += professionalExtras;
  if (template === 'creative') style += creativeExtras;

  // Print-specific rules appended to the style block below for better PDF fidelity
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(data.name || 'Curriculum Vitae')}</title>
  <style>
    ${style}
    @media print {
      @page { size: A4; margin: 20mm; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section { break-inside: avoid; page-break-inside: avoid; }
      img { max-width: 100%; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>${escapeHtml(data.name || '')}</h1>
      <div class="muted">${escapeHtml(data.role || '')}</div>
    </div>
    <div class="muted">${escapeHtml(data.contact || '')}<br/>${escapeHtml(data.linkedin || '')}</div>
  </div>
  <div class="section">
    <h2>Profile</h2>
    <div>${escapeHtml(data.summary || '')}</div>
  </div>
  <div class="section">
    <h2>Experience</h2>
    ${experience.length ? `<ul>${experience.map(e => `<li>${escapeHtml(e)}</li>`).join('')}</ul>` : `<div class="muted">No experience entered</div>`}
  </div>
  <div class="section">
    <h2>Education</h2>
    ${education.length ? `<ul>${education.map(e => `<li>${escapeHtml(e)}</li>`).join('')}</ul>` : `<div class="muted">No education entered</div>`}
  </div>
  <div class="section">
    <h2>Skills</h2>
    ${skills.length ? `<div>${skills.map(s => `<span style="display:inline-block;margin:4px 6px;padding:4px 8px;background:#f0f0f0;border-radius:6px">${escapeHtml(s)}</span>`).join('')}</div>` : `<div class="muted">No skills entered</div>`}
  </div>
</body>
</html>`;
  }

  // --- Build a professional-styled HTML optimized for Word (.docx) export ---
  function buildDocxHtml(data) {
    const skills = (data.skills || '').split(',').map(s => s.trim()).filter(Boolean);
    const experience = (data.experience || '').split('\n').map(l => l.trim()).filter(Boolean);
    const education = (data.education || '').split('\n').map(l => l.trim()).filter(Boolean);

    const name = escapeHtml(data.name || '');
    const role = escapeHtml(data.role || '');
    const contact = escapeHtml(data.contact || '');
    const linkedin = escapeHtml(data.linkedin || '');
    const summary = escapeHtml(data.summary || '');

    // Professional print styles compatible with Word
    const docxStyle = `
      body{font-family:Calibri, 'Segoe UI', Arial, sans-serif;color:#111;margin:1in;font-size:11pt}
      .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px}
      h1{font-size:22px;margin:0;color:#0b3d91}
      .role{font-size:12px;color:#333;margin-top:4px}
      .contact{font-size:11px;color:#444;text-align:right}
      hr{border:none;border-bottom:2px solid #e6eef9;margin:8px 0 16px}
      h2{font-size:12px;color:#0b3d91;margin:12px 0 6px}
      .section{margin-bottom:8px}
      ul{margin:6px 0 0 18px}
      .skills{margin-top:6px}
      .skill-badge{display:inline-block;margin:0 6px 6px 0;padding:4px 8px;border-radius:4px;background:#f3f7ff;color:#0b3d91;font-size:10pt}
    `;

    return `<!doctype html>
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8"/>
        <title>${name ? name + ' — CV' : 'Curriculum Vitae'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>${docxStyle}</style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>${name}</h1>
            <div class="role">${role}</div>
          </div>
          <div class="contact">${contact}${contact && linkedin ? '<br/>' : ''}${linkedin}</div>
        </div>
        <hr/>
        <div class="section">
          <h2>Profile</h2>
          <div>${summary || '<span style="color:#666;font-style:italic">No profile provided</span>'}</div>
        </div>
        <div class="section">
          <h2>Experience</h2>
          ${experience.length ? `<ul>${experience.map(e => `<li>${escapeHtml(e)}</li>`).join('')}</ul>` : `<div style="color:#666">No experience entered</div>`}
        </div>
        <div class="section">
          <h2>Education</h2>
          ${education.length ? `<ul>${education.map(e => `<li>${escapeHtml(e)}</li>`).join('')}</ul>` : `<div style="color:#666">No education entered</div>`}
        </div>
        <div class="section">
          <h2>Skills</h2>
          ${skills.length ? `<div class="skills">${skills.map(s => `<span class="skill-badge">${escapeHtml(s)}</span>`).join('')}</div>` : `<div style="color:#666">No skills entered</div>`}
        </div>
      </body>
      </html>`;
  }

  // --- Sample CV pre-fill handlers ---
  function fillSample(type) {
    const samples = {
      junior: {
        name: 'Alex Green',
        role: 'Junior Data Analyst',
        contact: 'alex.green@email.example | +44 7700 900123',
        linkedin: 'linkedin.com/in/alex-green',
        summary: 'Curious and methodical junior data analyst with hands-on experience in cleaning, analysing, and visualising datasets to answer business questions. Comfortable building dashboards and writing SQL queries to surface insights that inform product and marketing decisions.',
        experience: 'SmallCo — Data Intern — 2022–2023\n• Cleaned and transformed weekly sales datasets; reduced ETL time by 20% through optimized queries.\n• Built Power BI dashboards for the retail operations team to track SKU performance.\nLocal Retail — Sales Assistant — 2019–2022\n• Supported store inventory and customer analytics initiatives; ran weekly reports for store manager.',
        education: 'BSc Economics — University Y — 2022\nRelated coursework: Econometrics, Statistics, Data Visualisation',
        skills: 'Excel, SQL, PowerBI, Python (pandas), Data cleaning, Data visualisation',
        projects: 'Inventory Dashboard — built a Power BI dashboard to visualise SKU-level trends and forecast seasonal demand.'
      },
      mid: {
        name: 'Samantha Lee',
        role: 'Product Manager',
        contact: 'samantha.lee@example.com | +1 415-555-0123',
        linkedin: 'linkedin.com/in/samanthalee-pm',
        summary: 'Product manager with 5+ years launching B2B SaaS features that increase retention and revenue. Skilled at discovery, A/B testing, and working closely with engineering and data teams to deliver measurable outcomes.',
        experience: 'Acme SaaS — Product Manager — 2020–Present\n• Led a cross-functional team to deliver a new analytics module that increased weekly active users by 18%.\n• Defined product roadmap, wrote PRDs, and ran experiments to validate hypotheses.\nWebStart — Associate PM — 2017–2020\n• Coordinated releases and improved onboarding flow resulting in a 12% lift in trial-to-paid conversion.',
        education: 'MBA — University Z — 2017\nBA Communications — College X — 2013',
        skills: 'Product strategy, Roadmapping, Analytics, Stakeholder management, A/B testing',
        certifications: 'Certified Scrum Product Owner (CSPO), Google Analytics Individual Qualification (GAIQ)'
      },
      tech: {
        name: 'Rahul Patel',
        role: 'Senior Software Engineer',
        contact: 'rahul.patel@devmail.example | +91 98765 43210',
        linkedin: 'linkedin.com/in/rahulpdev',
        summary: 'Full-stack engineer focused on building scalable, maintainable web services. Experienced in cloud-native patterns, CI/CD, and mentoring junior engineers.',
        experience: 'TechCorp — Senior Engineer — 2021–Present\n• Designed and implemented microservices that handled 2M+ monthly requests; improved latency by 30%.\n• Led migration to containerised deployments using Docker and Kubernetes.\nDevStartup — Engineer — 2018–2021\n• Built core API features used by mobile and web clients; introduced automated testing and reduced regressions.',
        education: 'BEng Computer Science — Institute A — 2018\nHonours: First Class',
        skills: 'JavaScript, Node.js, React, TypeScript, Docker, Kubernetes, AWS, CI/CD, Testing',
        projects: 'Realtime Metrics Service — architected a lightweight metrics pipeline using Kinesis and Lambda to aggregate KPIs in near real-time.'
      }
    };
    const s = samples[type];
    if (!s) return;
  document.getElementById('cv-name').value = s.name;
  document.getElementById('cv-role').value = s.role;
  if (s.contact) document.getElementById('cv-contact').value = s.contact;
  if (s.linkedin) document.getElementById('cv-linkedin').value = s.linkedin;
  document.getElementById('cv-summary').value = s.summary || '';
  // combine experience and optional projects/certifications into the larger free-text fields
  const expParts = [s.experience || ''];
  if (s.projects) expParts.push('\nProjects:\n' + s.projects);
  if (s.certifications) expParts.push('\nCertifications:\n' + s.certifications);
  document.getElementById('cv-experience').value = expParts.join('\n');
  document.getElementById('cv-education').value = s.education || '';
  document.getElementById('cv-skills').value = s.skills || '';
    // Ensure builder is visible and generate preview automatically
    if (builder.classList.contains('hidden')) builder.classList.remove('hidden');
    setTimeout(() => {
      const nameEl = document.getElementById('cv-name');
      if (nameEl) nameEl.focus();
      try { generateBtn.click(); } catch (e) { /* fallback: nothing */ }
    }, 0);
  }

  if (sampleJunior) sampleJunior.addEventListener('click', () => fillSample('junior'));
  if (sampleMid) sampleMid.addEventListener('click', () => fillSample('mid'));
  if (sampleTech) sampleTech.addEventListener('click', () => fillSample('tech'));

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  generateBtn.addEventListener('click', () => {
    const data = {
      name: document.getElementById('cv-name').value.trim(),
      role: document.getElementById('cv-role').value.trim(),
      summary: document.getElementById('cv-summary').value.trim(),
      experience: document.getElementById('cv-experience').value.trim(),
      education: document.getElementById('cv-education').value.trim(),
      skills: document.getElementById('cv-skills').value.trim(),
      contact: document.getElementById('cv-contact').value.trim(),
      linkedin: document.getElementById('cv-linkedin').value.trim()
    };
    // include template choice
    data.template = (templateSelect && templateSelect.value) ? templateSelect.value : 'simple';
    const html = buildCVHtml(data);
    preview.innerHTML = html;

    // Enable download action (only .docx available)
  const downloadDocxBtn = document.getElementById('cv-download-docx-btn');
  if (downloadDocxBtn) downloadDocxBtn.disabled = false;

    // Client-side PDF & copy functionality removed per request (only .docx remains)

    // Client-side DOC (.doc with HTML content) download for reliable Word opening
    if (downloadDocxBtn) {
      downloadDocxBtn.onclick = () => {
        try {
          downloadDocxBtn.textContent = 'Preparing...';
          const docxHtml = buildDocxHtml(data);
          const blob = new Blob([docxHtml], { type: 'application/msword' });
          const url = URL.createObjectURL(blob);
          urlsToRevoke.push(url);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${(data.name || 'cv').replace(/\s+/g,'_')}.doc`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e) {} }, 10000);
        } finally {
          downloadDocxBtn.textContent = 'Download .doc';
        }
      };
    }

    // Clear button removed — users can edit fields or re-open the builder to reset.
  });
}


// --- Open article modal and render quiz/social share ---
function openArticleModal(idx, openerEl) {
  const article = articles[idx];
  if (article && article.fullArticle) {
    const articleModal = document.getElementById('articleModal');
    const articleModalTitle = document.getElementById('articleModalTitle');
    const articleModalContent = document.getElementById('articleModalContent');
    const articleSocialShare = document.getElementById('articleSocialShare');
    const articleQuizContainer = document.getElementById('articleQuizContainer');
    articleModalTitle.textContent = article.title;
    articleModalContent.innerHTML = article.fullArticle;
    articleModal.classList.remove('hidden');
    articleModal.__lastOpener = openerEl || document.activeElement;
    const initial = articleModalTitle || document.getElementById('closeArticleModal');
    if (initial) initial.focus();
    trapFocus(articleModal);

    // Attach close button event listener every time modal is opened
    const closeArticleModal = document.getElementById('closeArticleModal');
    if (closeArticleModal) {
      closeArticleModal.onclick = () => {
        articleModal.classList.add('hidden');
        releaseFocus(articleModal);
        history.pushState({}, '', '/');
        document.title = "Humanity, Society and AI";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = "Articles, insights, and resources on artificial intelligence, superintelligence, and their impact on human life, work, and meaning.";
      };
    }

    // Social sharing buttons
    const shareLinks = getShareLinks(idx);
    articleSocialShare.innerHTML = `
      <span class="font-semibold mr-2">Share:</span>
      <a href="${shareLinks.twitter}" target="_blank" rel="noopener" aria-label="Share on Twitter" class="text-blue-500 hover:underline"><svg class="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54a4.25 4.25 0 01-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 4.59a8.5 8.5 0 01-2.54.7z"/></a>
      <a href="${shareLinks.facebook}" target="_blank" rel="noopener" aria-label="Share on Facebook" class="text-blue-700 hover:underline"><svg class="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></a>
      <a href="${shareLinks.linkedin}" target="_blank" rel="noopener" aria-label="Share on LinkedIn" class="text-blue-800 hover:underline"><svg class="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.32-.03-3.01-1.84-3.01-1.84 0-2.12 1.43-2.12 2.91v5.6h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg></a>
      <a href="${shareLinks.reddit}" target="_blank" rel="noopener" aria-label="Share on Reddit" class="text-orange-600 hover:underline"><svg class="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576 4.765-1.587 8.199-6.084 8.199-11.384z"/></svg></a>
    `;

    // Quiz (if available)
    articleQuizContainer.innerHTML = getArticleQuiz(Number(idx));
    const quizForm = document.getElementById('articleQuizForm');
    const quizResult = document.getElementById('articleQuizResult');
    if (quizForm && quizResult) {
      quizForm.onsubmit = function (e) {
        e.preventDefault();
        const answer = Number(quizForm.q1.value);
        const correct = articles[idx].quiz.correct;
        if (answer === correct) {
          quizResult.textContent = `✅ Correct! ${articles[idx].quiz.explanation}`;
          quizResult.classList.remove("text-red-700");
          quizResult.classList.add("text-green-700");
        } else {
          quizResult.textContent = `❌ Not quite. ${articles[idx].quiz.explanation}`;
          quizResult.classList.remove("text-green-700");
          quizResult.classList.add("text-red-700");
        }
      };
    }

    // Update URL and meta tags for SEO
    history.pushState({ article: idx }, '', `/article/${idx}`);
  document.title = `${article.title} | Humanity, Society and AI`;
    // Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = article.summary || '';

    // Helper to set meta[property] tags (OG)
    function setMetaProperty(prop, value) {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
      el.content = value || '';
    }

    // Set Open Graph and Twitter tags dynamically
    setMetaProperty('og:title', article.title);
    setMetaProperty('og:description', article.summary || '');
    setMetaProperty('og:url', window.location.origin + `/article/${idx}`);
    // Optionally set an article image if available
    if (article.image) setMetaProperty('og:image', window.location.origin + article.image);

    // Update Twitter card tags
    function setMetaName(name, value) {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
      el.content = value || '';
    }
    setMetaName('twitter:title', article.title);
    setMetaName('twitter:description', article.summary || '');
    if (article.image) setMetaName('twitter:image', window.location.origin + article.image);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = window.location.origin + `/article/${idx}`;
  }
}

// --- Quiz modal close "×" button logic ---
setTimeout(() => {
  const closeQuizModal = document.getElementById('closeQuizModal');
  const quizModal = document.getElementById('quizModal');
  if (closeQuizModal && quizModal) {
    closeQuizModal.addEventListener('click', () => {
      quizModal.classList.add('hidden');
      releaseFocus(quizModal);
    });
  }
  const closeSubscribe = document.getElementById('closeModal');
  const subscribeModalEl = document.getElementById('subscribeModal');
  if (closeSubscribe && subscribeModalEl) {
    closeSubscribe.addEventListener('click', () => {
      subscribeModalEl.classList.add('hidden');
      releaseFocus(subscribeModalEl);
    });
  }
}, 0);

// --- Quiz modal logic for recommendations ---
setTimeout(() => {
  const quizModal = document.getElementById('quizModal');
  const quizForm = document.getElementById('quizForm');
  const quizResult = document.getElementById('quizResult');
  const quizRecommendations = document.getElementById('quizRecommendations');
  const quizRestart = document.getElementById('quizRestart');

  if (quizForm && quizResult && quizRecommendations && quizRestart) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Get answers
      const level = document.getElementById('q1').value;
      const topic = document.getElementById('q2').value;
      // Recommend articles
      let recs = [];
      if (topic) {
        recs = articles.filter(a => a.category === topic);
      }
      if (recs.length === 0) recs = articles.slice(0, 2);
      quizRecommendations.innerHTML = recs.map((a, idx) => `
        <button
          type="button"
          data-article="${articles.indexOf(a)}"
          class="mb-4 p-4 bg-blue-50 rounded shadow w-full text-left hover:bg-blue-100 focus:outline focus:outline-2 focus:outline-blue-700"
        >
          <div class="font-bold text-blue-900">${a.title}</div>
          <div class="text-blue-800 text-sm mb-1">${a.category}</div>
          <div class="text-gray-800">${a.summary}</div>
          <span class="text-blue-700 underline text-sm">Read more</span>
        </button>
      `).join('');
      quizForm.classList.add('hidden');
      quizResult.classList.remove('hidden');

      // Attach event listeners to the new buttons
      quizRecommendations.querySelectorAll('button[data-article]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = btn.getAttribute('data-article');
          const article = articles[idx];
          if (article && article.fullArticle) {
            quizModal.classList.add('hidden');
            releaseFocus(quizModal);
            openArticleModal(idx, btn);
          }
        });
      });
    });
    quizRestart.addEventListener('click', () => {
      quizForm.classList.remove('hidden');
      quizResult.classList.add('hidden');
      quizForm.reset();
      document.getElementById('q1').focus();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        quizModal.classList.add('hidden');
        releaseFocus(quizModal);
      }
    });
  }
}, 0);

// --- Handle browser navigation (back/forward) and direct links ---
window.addEventListener('popstate', (event) => {
  const path = window.location.pathname;
  const match = path.match(/^\/article\/(\d+)/);
  if (match) {
    const idx = match[1];
    openArticleModal(idx, null);
  } else {
    // Close modal and reset meta tags
    const articleModal = document.getElementById('articleModal');
    if (articleModal) articleModal.classList.add('hidden');
  document.title = "Humanity, Society and AI";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = "Articles, insights, and resources on artificial intelligence, superintelligence, and their impact on human life, work, and meaning.";
    // Reset OG/twitter meta tags back to site defaults
    function resetMetaProperty(prop, defaultValue) {
      const el = document.querySelector(`meta[property="${prop}"]`);
      if (el) el.content = defaultValue || '';
    }
    function resetMetaName(name, defaultValue) {
      const el = document.querySelector(`meta[name="${name}"]`);
      if (el) el.content = defaultValue || '';
    }
  resetMetaProperty('og:title', 'Humanity, Society and AI');
    resetMetaProperty('og:description', 'Articles, insights and resources on the impact of AI on work and human life.');
    resetMetaProperty('og:url', window.location.origin + '/');
  resetMetaName('twitter:title', 'Humanity, Society and AI');
    resetMetaName('twitter:description', 'Articles, insights and resources on the impact of AI on work and human life.');
    // Reset canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = window.location.origin + '/';
  }
});

// --- Initial render and countdown ---
setTimeout(() => {
  renderMainContent();
  setTimeout(updateSidebarSingularityCountdown, 0);
}, 0);

// Chat UI removed per user request.


  

// --- Government page interactive handlers ---
function initGovPage() {
  // Load checklist state from localStorage
  try {
    const stored = localStorage.getItem('govChecklist');
    if (stored) {
      const data = JSON.parse(stored);
      Object.keys(data).forEach(id => {
        const li = document.getElementById(id);
        if (li) {
          const cb = li.querySelector('input[type="checkbox"]');
          if (cb) cb.checked = !!data[id];
        }
      });
    }
  } catch (e) { /* ignore parse errors */ }

  // Make templates available in-memory
  window._govTemplates = {
  'policy-short': `POLICY ONE-PAGER: [Title]\n\n-- PURPOSE (1–2 sentences) --\nState the objective of this policy or initiative. Example: "Pilot AI-assisted case triage to reduce waiting times in adult social care."\n\nAI HELPER: Which AI capability will be used? (e.g., classification, NLP, anomaly detection). Mention whether this uses existing models, vendor services, or local development.\n\n-- SCOPE & BACKGROUND --\nWho is affected? What services or departments are in scope? Provide a one-paragraph background that explains current context and why action is needed.\n\nAI HELPER: Data sources and sensitives: briefly list data types (personal, special category) and whether data sharing agreements are needed. Note any legal or ethical constraints.\n\n-- KEY OUTCOMES (Bullets) --\n- Outcome 1: e.g., improved service speed by X%\n- Outcome 2: e.g., reduced manual workload for role Y\n\nAI HELPER: Define measurable success metrics (e.g., reduction in processing time, precision/recall targets, user satisfaction). Add a baseline measure and target date.\n\n-- STAKEHOLDER IMPACT & ENGAGEMENT --\nList affected stakeholder groups and any planned engagement steps (e.g., staff workshops, public consultations).\n\nAI HELPER: For affected staff groups, list training needs and who will deliver them. For the public, list accessible materials and translation needs.\n\n-- RISKS & MITIGATIONS --\nName the top 3 risks and short mitigations (data bias, privacy, procurement delays).\n\nAI HELPER: Include AI-specific risks: model bias, dataset representativeness, lack of explainability, and a monitoring plan (periodic performance audits). Suggest immediate mitigations (audit dataset, human-in-the-loop).\n\n-- RESOURCE & TIMELINE SUMMARY --\nEstimated budget, resource owners, and a high-level timeline (Q1 FY, pilot, roll-out).\n\nAI HELPER: Note resource types: data engineering, ML testing, security review, procurement lead. Allow time for ethical review and third-party vendor checks.\n\n-- ASK / RECOMMENDATION --\nClear, actionable recommendation for decision-makers (e.g., approve pilot, allocate £X, publish consultation).\n\n[Notes for the writer: keep this to one page; use simple, plain language for non-technical audiences.]`,

  'consultation': `PUBLIC CONSULTATION TEMPLATE: [Consultation Title]\n\n-- PURPOSE & SCOPE --\nExplain why you are consulting and what decisions this input will inform. State the timeframe and who should respond.\n\nAI HELPER: If the consultation concerns AI, include plain-language notes on how the AI will be used and what data it needs. Provide an accessible summary of potential benefits and risks.\n\n-- BACKGROUND SUMMARY --\nBrief context to help respondents understand the issue in plain language (2–3 short paragraphs).\n\nAI HELPER: Explain technical terms (e.g., "model used for classification") in a one-line glossary. Link to a short explainer or FAQ for non-technical readers.\n\n-- QUESTIONS (use short, clear prompts) --\n1) What do you see as the main benefits of this approach? (free text)\n2) What concerns or unintended consequences should we consider? (free text)\n3) Are there particular groups who may be especially affected? (please specify)\n4) Do you support the recommended next steps? (Yes / No / Unsure)\n\nAI HELPER: Prompt respondents to consider specific AI issues: privacy, bias, transparency, ability to appeal decisions, and accessibility. Offer an example answer for each question to guide responses.\n\n-- HOW WE WILL USE YOUR RESPONSES --\nExplain how responses will be processed and used in decision-making; include an anonymisation note if applicable.\n\nAI HELPER: Commit to publishing an anonymised summary of key themes and a technical annex explaining model evaluation metrics used to assess impact.\n\n-- CONTACT & NEXT STEPS --\nProvide a contact email or office and state when a summary of consultation responses will be published.\n\n[Guidance: keep questions short; provide multiple ways to respond (online form, email, postal). Consider accessible formats and language translations.]`
  };

  // Expose handlers globally for inline onclicks
  window.gov_copyTemplate = gov_copyTemplate;
  window.gov_downloadTemplate = gov_downloadTemplate;
  window.gov_emailTemplate = gov_emailTemplate;
  window.gov_toggleChecklistItem = gov_toggleChecklistItem;
  window.gov_exportChecklist = gov_exportChecklist;
  window.gov_resetChecklist = gov_resetChecklist;

  // --- What-if simulator wiring ---
  const form = document.getElementById('govWhatIfForm');
  const select = document.getElementById('govResponsibilitySelect');
  const result = document.getElementById('govWhatIfResult');
  if (form && select && result) {
    const govWhatIf = {
      'public-safety': {
        label: 'Public safety & policing',
        ai: 'Hotspot prediction, evidence search, triage of non-urgent reports, and gunshot/vehicle acoustic detection with strict auditing.',
        aiEx: ['Video analytics prioritize clips for review', '311/101 chat triages and routes low-severity issues'],
        prep: ['Bias/impact assessment and public transparency page', 'Human-in-the-loop escalation rules and appeal routes'],
        aiNoAct: ['Biased patrol patterns go uncorrected and erode legitimacy', 'FOI/legal exposure due to undocumented tools and data use'],
        agi: 'Cross-agency intelligence synthesis, scenario modeling, and dynamic resource allocation under civilian oversight.',
        agiEx: ['Multi-modal case graph finds cross-border links'],
        agiPrep: ['Independent ethics board; publish model cards', 'Live performance dashboards incl. fairness metrics'],
        agiNoAct: ['Over-reliance on opaque systems leads to wrongful stops/arrests', 'Chilling effects in high-surveillance areas; appeals become impractical'],
        asi: 'Proactive harm prevention with near-real-time modeling; civil liberties and legitimacy are paramount.',
        asiEx: ['City-scale threat modeling with human approvals'],
        asiPrep: ['Legal guardrails and sunset clauses; red-teaming', 'Robust accountability and whistleblower protections'],
        asiNoAct: ['Pervasive surveillance creep and rights erosion', 'Escalation risks without human command override'],
        linkCategory: 'Society'
      },
      healthcare: {
        label: 'Healthcare & public health',
        ai: 'Clinical decision support, triage bots, ambient scribing, surveillance of outbreaks with privacy-preserving analytics.',
        aiEx: ['ED triage chat reduces waiting times', 'Scribe drafts SOAP notes for clinician review'],
        prep: ['Data governance DPIA and PHI controls', 'Clinical safety case and audit trail requirements'],
        aiNoAct: ['Unsafe documentation and alert fatigue harm care quality', 'Data leaks or improper PHI sharing undermine trust'],
        agi: 'End-to-end care planning, integrated population health modeling, and synthetic trial design.',
        agiEx: ['Virtual RCT proposes target cohorts'],
        agiPrep: ['National evaluation sandbox and IRB-style review', 'Calibration monitoring and clinician override UX'],
        agiNoAct: ['Opaque care plans embed bias; clinicians deskill', 'Liability ambiguity delays adoption or creates legal risk'],
        asi: 'Rapid disease mitigation and bio-innovation; strong biosecurity needed.',
        asiEx: ['On-demand vaccine design for novel pathogen'],
        asiPrep: ['Biosecurity standards and international coordination'],
        asiNoAct: ['Single points of failure in care delivery; mass outage risks', 'Biosecurity lapses and dual-use misuse increase'],
        linkCategory: 'AI / AGM / ASI'
      },
      education: {
        label: 'Education',
        ai: 'Adaptive learning, grading assistants, SEND accessibility, and teacher planning support.',
        aiEx: ['Plan generator aligned to curriculum', 'Auto-caption/translate classroom materials'],
        prep: ['Safeguarding/policy for AI in classrooms', 'Procurement rubric incl. privacy and bias tests'],
        aiNoAct: ['Inconsistent rules on AI use, worsening cheating and academic integrity', 'Attainment gaps widen as advantaged pupils get better tools'],
        agi: '1:1 tutors at scale, credentialing, and real-time formative assessment.',
        agiEx: ['Personal tutor per pupil with teacher controls'],
        agiPrep: ['Equity funding to avoid digital divide', 'Teacher oversight tools and transparency reports'],
        agiNoAct: ['Digital divide locks in; teacher anxiety and resistance increase', 'Curricula lag behind capabilities, reducing relevance'],
        asi: 'Learning becomes ambient; focus on values and social development.',
        asiEx: ['Fully personalized learning paths'],
        asiPrep: ['National ethics guidance and student agency'],
        asiNoAct: ['Erosion of human-led development and socialization', 'Loss of local pedagogy and cultural context'],
        linkCategory: 'School Resources'
      },
      'tax-benefits': {
        label: 'Tax, benefits & casework',
        ai: 'Document intake, fraud/anomaly detection, and case triage; plain-language letters at scale.',
        aiEx: ['OCR+NLP routes claims and flags missing info'],
        prep: ['Appeal and human review routes; clear consent', 'Risk-based supervision to avoid over-denial'],
        aiNoAct: ['Wrongful denials and delayed payments harm vulnerable groups', 'Media scandals over opaque scoring damage legitimacy'],
        agi: 'Policy simulation for benefit design and elasticities; automatic reconciliation with human approvals.',
        agiEx: ['Microsim proposes parameter changes for poverty impact'],
        agiPrep: ['Public consultation and red-teaming of assumptions'],
        agiNoAct: ['Mis-calibrated policies exacerbate poverty or work disincentives', 'Errors become harder to challenge at scale'],
        asi: 'High automation with macro feedback loops; maintain legitimacy and rights.',
        asiEx: ['Real-time policy tuning with safety brakes'],
        asiPrep: ['Statutory rights to explanation and redress'],
        asiNoAct: ['Perception of "automated austerity" and loss of consent to govern', 'Policy capture by proprietary systems'],
        linkCategory: 'Ethics'
      },
      elections: {
        label: 'Democracy & elections',
        ai: 'Accessibility for voter info, misinformation detection, and translation; provenance for campaign media.',
        aiEx: ['Plain-language explainers of ballots in multiple languages'],
        prep: ['Content provenance/watermark checks', 'Cross-platform misinformation response protocol'],
        aiNoAct: ['Deepfake and spam floods confuse voters; turnout and trust fall', 'Inequitable access to accurate info for minority languages'],
        agi: 'Deliberation tools, large-scale consultation synthesis, and policy explainers with citations.',
        agiEx: ['Town-scale digital assemblies with traceability'],
        agiPrep: ['Non-partisan governance and audit logs'],
        agiNoAct: ['Influence operations scale faster than responses', 'Unequal access to deliberation tools skews outcomes'],
        asi: 'Global coordination tools and rapid response; preserve legitimacy.',
        asiEx: ['Crisis coordination across jurisdictions'],
        asiPrep: ['Constitutional safeguards and oversight bodies'],
        asiNoAct: ['Narrative control by powerful actors undermines legitimacy', 'Rapid disinfo cycles overwhelm election authorities'],
        linkCategory: 'Society'
      },
      'critical-infra': {
        label: 'Critical infrastructure',
        ai: 'Anomaly detection, predictive maintenance, intrusion detection, and grid balancing.',
        aiEx: ['SCADA anomaly alerts with playbooks'],
        prep: ['Red-team exercises; vendor SBOM requirements', 'Incident logging and fail-safe modes'],
        aiNoAct: ['Undetected anomalies lead to outages and safety incidents', 'Ransomware exposure persists; recovery is slow'],
        agi: 'Autonomous orchestration across sources and demand.',
        agiEx: ['Cross-utility coordination to avoid blackouts'],
        agiPrep: ['Inter-agency drills and fallback protocols'],
        agiNoAct: ['Tightly coupled systems fail without brakes; cascading blackouts', 'Regulatory lag leaves governance gaps'],
        asi: 'Highly optimized networks; systemic risk if misused.',
        asiEx: ['Self-optimizing grids with human override'],
        asiPrep: ['International norms and emergency cut-outs'],
        asiNoAct: ['Systemic failures propagate across borders', 'Strategic dependency creates national security risk'],
        linkCategory: 'Future'
      },
      transport: {
        label: 'Transport & cities',
        ai: 'Route optimization, traffic signal control, and safety analytics.',
        aiEx: ['Dynamic bus lanes and signal timing'],
        prep: ['Data minimization and transparency for mobility data'],
        aiNoAct: ['Mobility data is misused; privacy backlash stalls progress', 'Congestion and emissions improvements fail to materialize'],
        agi: 'City-scale autonomy coordination and infrastructure planning.',
        agiEx: ['Autonomous shuttle networks with hubs'],
        agiPrep: ['Accessibility-first design; public engagement'],
        agiNoAct: ['Unsafe pilots create incidents; stranded investment', 'Mode conflicts and inequity increase'],
        asi: 'Ubiquitous mobility; rethink zoning and emissions.',
        asiEx: ['Real-time urban flow optimization'],
        asiPrep: ['Governance for equity in access'],
        asiNoAct: ['Private capture of mobility networks; public options wither', 'Access gaps widen across neighborhoods'],
        linkCategory: 'Future'
      },
      environment: {
        label: 'Environment & climate',
        ai: 'Forecasting, monitoring, and reporting automation; enforcement support.',
        aiEx: ['Wildfire and flood early warnings'],
        prep: ['Open data standards and citizen science channels'],
        aiNoAct: ['Missed early warnings increase damage and cost', 'Compliance/reporting errors invite penalties and distrust'],
        agi: 'Integrated climate adaptation planning and ecosystem modeling.',
        agiEx: ['Local adaptation plans from multi-model sims'],
        agiPrep: ['Cross-border data sharing agreements'],
        agiNoAct: ['Maladaptation locks in higher future costs', 'Stranded assets from poor siting and planning'],
        asi: 'Breakthrough mitigation and restoration technologies.',
        asiEx: ['Novel carbon capture deployments'],
        asiPrep: ['Safety reviews and environmental justice'],
        asiNoAct: ['Tech lock-in with unintended ecological side-effects', 'Global coordination failures worsen climate risks'],
        linkCategory: 'Society'
      },
      emergency: {
        label: 'Emergency response & resilience',
        ai: 'Early warning, resource dispatch, translation, and public alerts.',
        aiEx: ['Multi-language alerting and routing'],
        prep: ['Neighborhood-level drills and redundancy'],
        aiNoAct: ['Alerting fails for key groups; language barriers persist', 'Uneven response coverage prolongs harm'],
        agi: 'Real-time multi-hazard planning with supply chain awareness.',
        agiEx: ['Scenario sims allocate shelters and logistics'],
        agiPrep: ['Regional MOUs and command protocols'],
        agiNoAct: ['Coordination breaks under stress; supplies misallocated', 'Mutual aid arrives late without pre-agreements'],
        asi: 'Near-instant mobilization; keep humans in command.',
        asiEx: ['Auto-orchestrated response with oversight'],
        asiPrep: ['Legal authority clarity and cutover rules'],
        asiNoAct: ['Opaque automated triage erodes trust and compliance', 'Accountability is lost during crisis decisions'],
        linkCategory: 'Future'
      },
      'social-care': {
        label: 'Social care',
        ai: 'Case triage, benefits navigation, and assistive tech matching.',
        aiEx: ['Eligibility guidance and appointment scheduling'],
        prep: ['Safeguarding policy and opt-outs', 'Human review for adverse decisions'],
        aiNoAct: ['Eligibility bias denies support to those in need', 'Privacy breaches harm already vulnerable people'],
        agi: 'Personalized care plans, carer support, and coordinated services.',
        agiEx: ['Holistic plans across agencies'],
        agiPrep: ['Role redesign and training for practitioners'],
        agiNoAct: ['Dehumanized care experiences increase drop-out', 'Carer burnout worsens due to miscoordination'],
        asi: 'Highly proactive support networks; maintain dignity and choice.',
        asiEx: ['Predictive supports triggered with consent'],
        asiPrep: ['Rights charters and advocacy funding'],
        asiNoAct: ['Consent is undermined; autonomy erodes', 'Overreach prompts legal challenges and program freezes'],
        linkCategory: 'Society'
      },
      immigration: {
        label: 'Immigration & borders',
        ai: 'Document verification, risk-based screening, and translation support.',
        aiEx: ['Smart document checks at intake'],
        prep: ['Due process safeguards and appeal rights'],
        aiNoAct: ['Wrongful refusals rise; backlogs grow', 'Discriminatory screening triggers legal and diplomatic issues'],
        agi: 'Case prioritization and global movement modeling.',
        agiEx: ['Family reunification prioritized by welfare impact'],
        agiPrep: ['Independent oversight and audits'],
        agiNoAct: ['Opaque risk scoring harms humanitarian outcomes', 'Smuggling/trafficking adapt faster than policy'],
        asi: 'Large-scale mobility coordination; prevent discrimination.',
        asiEx: ['Real-time flows with humanitarian corridors'],
        asiPrep: ['International agreements and transparency'],
        asiNoAct: ['Rights violations at scale damage international standing', 'Geopolitical tensions rise at borders'],
        linkCategory: 'Ethics'
      },
      justice: {
        label: 'Courts & justice',
        ai: 'Scheduling, transcription, legal search, and plain-language orders; no automated sentencing.',
        aiEx: ['Transcripts and evidence summarization'],
        prep: ['Policy: decision-making remains human; transparency'],
        aiNoAct: ['Unequal access gives one side tooling advantages', 'Unverified transcripts and summaries slip into records'],
        agi: 'Brief drafting assistance and backlog reduction programs.',
        agiEx: ['Case synthesis with cited precedent'],
        agiPrep: ['Open model cards; defense parity provisions'],
        agiNoAct: ['Creep toward de facto automated sentencing', 'Appeals clog as errors scale'],
        asi: 'High automation risk; ensure fairness and legitimacy.',
        asiEx: ['Process automation except core judgments'],
        asiPrep: ['Statutory bans on automated judgment'],
        asiNoAct: ['Public confidence collapses if judgments automate', 'Due process protections hollowed out'],
        linkCategory: 'Ethics'
      },
      procurement: {
        label: 'Procurement & suppliers',
        ai: 'Contract analysis, risk scanning, and SBOM checks.',
        aiEx: ['Clause extraction and risk flags'],
        prep: ['AI-specific evaluation rubric; DPIA templates'],
        aiNoAct: ['Vendor lock-in and poor value-for-money', 'Security gaps and missing SBOMs go unchecked'],
        agi: 'Outcome-based contracting with continuous evaluation.',
        agiEx: ['Live SLAs tied to observed performance'],
        agiPrep: ['Open data requirements and vendor transparency'],
        agiNoAct: ['Outcomes get gamed by vendors; measurement theater', 'Opaque pipelines make assurance impossible'],
        asi: 'Tight coupling to public outcomes; avoid lock-in.',
        asiEx: ['Adaptive contracts with safety brakes'],
        asiPrep: ['Exit strategies and interoperability standards'],
        asiNoAct: ['Critical dependencies cannot be exited or audited', 'Public sector becomes captive to proprietary stacks'],
        linkCategory: 'Employer Resources'
      },
      'housing-planning': {
        label: 'Housing & planning',
        ai: 'Application triage, plan checking, and impact analysis.',
        aiEx: ['Auto-checks for code compliance'],
        prep: ['Public explainers and appeals process'],
        aiNoAct: ['Opaque scoring drives biased planning outcomes', 'Community opposition (NIMBY) intensifies against black-box tools'],
        agi: 'Urban modeling for zoning and affordability.',
        agiEx: ['Scenario plans for housing and transport'],
        agiPrep: ['Community engagement at design time'],
        agiNoAct: ['Displacement effects worsen without mitigations', 'Infrastructure and services mismatch demand'],
        asi: 'Dynamic land-use optimization; preserve community voice.',
        asiEx: ['Real-time planning with constraints'],
        asiPrep: ['Governance to prevent displacement'],
        asiNoAct: ['Algorithmic gentrification accelerates', 'Local character and cohesion erode'],
        linkCategory: 'Society'
      },
      economy: {
        label: 'Economy & innovation',
        ai: 'Business support copilots and export promotion targeting.',
        aiEx: ['SME advisors with sector playbooks'],
        prep: ['Data-sharing MOUs and privacy guardrails'],
        aiNoAct: ['SMEs fall behind; regional inequalities widen', 'Missed opportunities for trade and inward investment'],
        agi: 'Rapid firm formation and sector planning.',
        agiEx: ['Ecosystem sims for skills and capital'],
        agiPrep: ['Skills pipeline funding and IP policy'],
        agiNoAct: ['Skills mismatch grows; productivity stalls', 'Capital concentrates in a few hubs'],
        asi: 'Abundance scenarios; redesign safety nets.',
        asiEx: ['Macro policy copilots under human control'],
        asiPrep: ['Public dividends and competition policy'],
        asiNoAct: ['Mass displacement without modern safety nets', 'Economic power centralizes; social unrest risk'],
        linkCategory: 'Future'
      },
      communications: {
        label: 'Communications & media',
        ai: 'Plain-language services, translation, and provenance checks.',
        aiEx: ['Accessible summaries of policy changes'],
        prep: ['Style guide for AI-assisted content; disclosures'],
        aiNoAct: ['Misinformation outpaces official comms', 'Accessibility gaps leave groups uninformed'],
        agi: 'Two-way civic dialogue at scale with moderation.',
        agiEx: ['Mass consultation with respectful guardrails'],
        agiPrep: ['Civic moderation standards and tooling'],
        agiNoAct: ['Engagement is captured by manipulative actors', 'Community trust erodes further'],
        asi: 'Persistent, adaptive public information spaces.',
        asiEx: ['Real-time explainers tuned to community needs'],
        asiPrep: ['Strong anti-manipulation safeguards'],
        asiNoAct: ['Narrative capture by hostile or unaccountable actors', 'Crisis communication fails at pivotal moments'],
        linkCategory: 'Society'
      }
    };

    // Default inaction consequences if a specific area doesn't define them
    const noActionDefaults = {
      ai: [
        'Shadow or ungoverned deployments create bias/privacy issues and erode public trust',
        'Vendor lock-in without safeguards raises long-term costs and limits oversight'
      ],
      agi: [
        'Rapid adoption outpaces policy, widening inequality and legitimacy concerns',
        'Opaque automation makes errors hard to challenge or correct'
      ],
      asi: [
        'Power concentrates in a few hands; loss of sovereignty and control',
        'Systemic and cross-border risks escalate without international coordination'
      ]
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const key = select.value;
      if (!key) return;
      const d = govWhatIf[key];
      if (!d) return;
      const aiNoAct = d.aiNoAct || noActionDefaults.ai;
      const agiNoAct = d.agiNoAct || noActionDefaults.agi;
      const asiNoAct = d.asiNoAct || noActionDefaults.asi;
      result.innerHTML = `
        <div class="mb-2 font-bold text-blue-800">${d.label}</div>
        <div class="mb-3">
          <span class="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">Local AI</span>
          <div class="mt-1"><span class="font-semibold text-green-700">What it looks like:</span> ${d.ai}</div>
          ${d.aiEx && d.aiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.aiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          ${d.prep && d.prep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-green-700">Prepare now:</span><ul class="mt-1 ml-5 list-disc">${d.prep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
          ${aiNoAct && aiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${aiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        </div>
        <div class="mb-3">
          <span class="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">AGI</span>
          <div class="mt-1"><span class="font-semibold text-yellow-700">What it enables:</span> ${d.agi}</div>
          ${d.agiEx && d.agiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.agiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          ${d.agiPrep && d.agiPrep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-yellow-700">Prepare next:</span><ul class="mt-1 ml-5 list-disc">${d.agiPrep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
          ${agiNoAct && agiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${agiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        </div>
        <div class="mb-2">
          <span class="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">ASI</span>
          <div class="mt-1"><span class="font-semibold text-purple-700">Longer-term shifts:</span> ${d.asi}</div>
          ${d.asiEx && d.asiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.asiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
          ${d.asiPrep && d.asiPrep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-purple-700">Governance to plan:</span><ul class="mt-1 ml-5 list-disc">${d.asiPrep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
          ${asiNoAct && asiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${asiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        </div>
        ${d.linkCategory ? `<div class="mt-3"><a href="#" data-category="${d.linkCategory}" class="inline-flex items-center gap-1 text-blue-800 underline hover:text-yellow-500">Explore related: ${d.linkCategory} <span aria-hidden=\"true\">→</span></a></div>` : ''}
      `;
      result.classList.remove('hidden');
      void result.offsetWidth; // reflow to trigger transition
      result.classList.remove('fx-hidden');
      result.focus();
      attachSidebarListeners();
    });
  }
}

function gov_copyTemplate(key) {
  const tpl = (window._govTemplates && window._govTemplates[key]) || '';
  if (!tpl) return alert('Template not found');
  try {
    navigator.clipboard.writeText(tpl);
    alert('Template copied to clipboard');
  } catch (e) {
    // fallback: select in a textarea
    const ta = document.createElement('textarea');
    ta.value = tpl;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    alert('Template copied to clipboard');
  }
}

function gov_downloadTemplate(key) {
  const tpl = (window._govTemplates && window._govTemplates[key]) || '';
  if (!tpl) return alert('Template not found');
  const blob = new Blob([tpl], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${key.replace(/[^a-z0-9-_]/gi, '_')}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e) {} }, 5000);
}

function gov_emailTemplate(key) {
  const tpl = (window._govTemplates && window._govTemplates[key]) || '';
  if (!tpl) return alert('Template not found');
  const subject = encodeURIComponent('Template: ' + key);
  const body = encodeURIComponent(tpl);
  // Open mail client with prefilled body. Note: mailto has length limits in some clients.
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function gov_toggleChecklistItem(id) {
  const li = document.getElementById(id);
  if (!li) return;
  const cb = li.querySelector('input[type="checkbox"]');
  if (!cb) return;
  // Save state
  saveGovChecklistState();
}

function saveGovChecklistState() {
  const ul = document.getElementById('gov-checklist');
  if (!ul) return;
  const items = {};
  ul.querySelectorAll('li').forEach(li => {
    const id = li.id;
    const cb = li.querySelector('input[type="checkbox"]');
    if (id && cb) items[id] = !!cb.checked;
  });
  try { localStorage.setItem('govChecklist', JSON.stringify(items)); } catch (e) { /* ignore */ }
}

function gov_exportChecklist() {
  const ul = document.getElementById('gov-checklist');
  if (!ul) return alert('Checklist not found');
  const items = [];
  ul.querySelectorAll('li').forEach(li => {
    const text = li.textContent.trim();
    const cb = li.querySelector('input[type="checkbox"]');
    items.push({ id: li.id, text, checked: !!(cb && cb.checked) });
  });
  const data = JSON.stringify(items, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `gov-checklist-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => { try { URL.revokeObjectURL(url); } catch (e) {} }, 5000);
}

function gov_resetChecklist() {
  const ul = document.getElementById('gov-checklist');
  if (!ul) return;
  ul.querySelectorAll('li').forEach(li => {
    const cb = li.querySelector('input[type="checkbox"]');
    if (cb) cb.checked = false;
  });
  try { localStorage.removeItem('govChecklist'); } catch (e) {}
}

// --- Employer page: What-if Preparedness simulator ---
function initEmployerPage() {
  const form = document.getElementById('employerWhatIfForm');
  const select = document.getElementById('employerAreaSelect');
  const result = document.getElementById('employerWhatIfResult');
  if (!form || !select || !result) return;

  const employerWhatIf = {
    hr: {
      label: 'HR, talent & learning',
      ai: 'Screening support, skills inference from CVs, internal mobility suggestions, and learning copilots.',
      aiEx: ['Shortlist assistant highlighting job-relevant evidence', 'Learning plans generated from role profiles'],
      prep: ['Bias audits and explainability for screening tools', 'Clear policy on AI-assisted hiring and candidate consent'],
      aiNoAct: ['Shadow use leads to discriminatory outcomes and legal risk', 'Employees fear monitoring; trust declines'],
      agi: 'Dynamic skills maps and personalized career pathways across the whole org.',
      agiEx: ['Auto-generated role transitions with training pathways'],
      agiPrep: ['Career frameworks linked to verified skills', 'Union/works council engagement and transparency reports'],
      agiNoAct: ['Unequal access to upskilling worsens inequity', 'Talent churn rises as mobility feels opaque'],
      asi: 'Near-frictionless talent orchestration; work atomized and reassembled on demand.',
      asiEx: ['Work marketplace matching tasks, humans, and AIs'],
      asiPrep: ['Rights to explanation, appeal, and human oversight', 'Wellbeing guardrails and workload caps'],
      asiNoAct: ['Dehumanizing optimization and burnout', 'Loss of employee agency and morale'],
      linkCategory: 'Employee Resources'
    },
    operations: {
      label: 'Operations & supply chain',
      ai: 'Demand forecasting, inventory optimization, predictive maintenance, and process copilots.',
      aiEx: ['Pick/pack suggestions; route and shift optimization'],
      prep: ['Data quality program; fallback modes for outages', 'Health & safety risk assessment for automation'],
      aiNoAct: ['Stockouts/overstock persist; fragile processes', 'Safety incidents from unmanaged human-AI workflows'],
      agi: 'Autonomous planning across sites/suppliers with resilience modeling.',
      agiEx: ['Scenario sims rebalance suppliers in disruptions'],
      agiPrep: ['Diverse suppliers; resilience KPIs and drills', 'Human-in-command protocols and audit logs'],
      agiNoAct: ['Single points of failure cascade across network', 'Opaque automation creates liability exposure'],
      asi: 'Near-optimal orchestration; systemic risk if misaligned.',
      asiEx: ['Self-tuning logistics with human override'],
      asiPrep: ['Interoperability, exit strategies, and cut-outs', 'Independent red-teaming and safety cases'],
      asiNoAct: ['Hard lock-in to proprietary stacks', 'Fleet-wide failures during black swans'],
      linkCategory: 'Work'
    },
    'it-security': {
      label: 'IT & security',
      ai: 'Code assistants, vuln triage, anomaly detection, and access risk scoring.',
      aiEx: ['Pull request AI review with secure defaults'],
      prep: ['Secure SDLC for AI, SBOMs, and model provenance', 'Zero-trust and least-privilege for AI services'],
      aiNoAct: ['Leakage of secrets or PII via prompts', 'Supply-chain risks from unmanaged models/libraries'],
      agi: 'Autonomous remediation suggestions and system hardening.',
      agiEx: ['Live patch proposals with blast-radius analysis'],
      agiPrep: ['Change control with human approvals', 'Chaos drills and rollback playbooks'],
      agiNoAct: ['Automated changes introduce outages', 'Attackers weaponize AGI faster than defenses'],
      asi: 'Highly adaptive defense; governance is critical.',
      asiEx: ['Network-wide defense choreography with oversight'],
      asiPrep: ['Independent oversight; legal and ethical guardrails'],
      asiNoAct: ['Unchecked surveillance and rights erosion', 'Centralized control becomes a liability'],
      linkCategory: 'Ethics'
    },
    legal: {
      label: 'Legal, risk & compliance',
      ai: 'Contract analysis, clause extraction, policy checks, and evidence search.',
      aiEx: ['Playbooks auto-highlight risk and missing clauses'],
      prep: ['Human review boundaries; disclosure and consent', 'Records of processing and DPIAs for AI uses'],
      aiNoAct: ['Inconsistent decisions and audit gaps', 'Regulatory penalties for opaque AI-assisted processing'],
      agi: 'Live compliance monitoring and horizon scanning.',
      agiEx: ['Reg change copilots draft policy updates'],
      agiPrep: ['Assurance processes and independent audits'],
      agiNoAct: ['Regulatory debt accumulates; fines increase', 'Policy theater with little real control'],
      asi: 'Machine-speed law/compliance support.',
      asiEx: ['Continuous compliance with explainable trails'],
      asiPrep: ['Rights to appeal; human accountability lines'],
      asiNoAct: ['Automated enforcement without fairness', 'Due process risks and reputational harm'],
      linkCategory: 'Ethics'
    },
    customer: {
      label: 'Customer service & marketing',
      ai: 'Assistants, summarization, routing, and content generation with guardrails.',
      aiEx: ['Agent assist drafts; multilingual support'],
      prep: ['Brand safety and disclosure guidelines', 'Hallucination controls and escalation policies'],
      aiNoAct: ['Off-brand or misleading content erodes trust', 'Support quality varies and harms retention'],
      agi: 'Truly personalized experiences and journey optimization.',
      agiEx: ['End-to-end concierge with human handoff'],
      agiPrep: ['Consent management and preference centers', 'Fairness tests to avoid exclusion'],
      agiNoAct: ['Filter bubbles and discrimination creep', 'Complaint volumes spike due to opaque decisions'],
      asi: 'Ambient service; privacy and dignity matter.',
      asiEx: ['Context-aware service across channels'],
      asiPrep: ['Privacy-by-design and strong opt-outs'],
      asiNoAct: ['Surveillance marketing triggers backlash', 'Loss of brand legitimacy'],
      linkCategory: 'Society'
    },
    rnd: {
      label: 'R&D / product',
      ai: 'Design space exploration, rapid prototyping, and test generation.',
      aiEx: ['Parametric designs and simulation loops'],
      prep: ['IP strategy for AI-generated artifacts', 'Data licensing clarity and eval benchmarks'],
      aiNoAct: ['IP disputes and vendor dependency', 'Low-quality models shipped without evals'],
      agi: 'Autonomous hypothesis generation and lab automation.',
      agiEx: ['Auto-experiments with human approvals'],
      agiPrep: ['Safety reviews and reproducibility standards'],
      agiNoAct: ['Unsafe prototypes and reputational damage', 'Regulatory blockers discovered late'],
      asi: 'Breakthrough innovation with dual-use risks.',
      asiEx: ['Novel materials and processes at scale'],
      asiPrep: ['Ethics board and red-teaming'],
      asiNoAct: ['Dual-use misuse; export control violations'],
      linkCategory: 'Future'
    },
    finance: {
      label: 'Finance & planning',
      ai: 'Forecasting, variance analysis, and close automation.',
      aiEx: ['Scenario planning and sensitivity analysis'],
      prep: ['Data lineage and model risk management', 'SOX/controls adapted for AI workflows'],
      aiNoAct: ['Errors propagate; audit findings increase', 'Black-box forecasts mislead leadership'],
      agi: 'Continuous planning with multi-source signals.',
      agiEx: ['Rolling budget updates tied to live drivers'],
      agiPrep: ['Human challenge sessions and documentation'],
      agiNoAct: ['Overfitting to short-term noise', 'Loss of accountability for decisions'],
      asi: 'Highly automated finance; retain accountability.',
      asiEx: ['Near-real-time P&L with controls'],
      asiPrep: ['Clear responsibility model and cutovers'],
      asiNoAct: ['Uncontrolled changes affect filings', 'Investor trust and compliance issues'],
      linkCategory: 'Work'
    },
    hse: {
      label: 'Health, safety & wellbeing',
      ai: 'Monitoring assistance, risk detection, and incident analysis.',
      aiEx: ['Wearables flag fatigue; video flags unsafe acts'],
      prep: ['Consent and privacy protections', 'Worker participation in design and review'],
      aiNoAct: ['Privacy backlash and labor disputes', 'False positives/negatives create risk'],
      agi: 'Holistic risk programs integrating human factors.',
      agiEx: ['Personalized safety coaching with oversight'],
      agiPrep: ['Independent ethics and H&S governance'],
      agiNoAct: ['Coercive monitoring undermines safety culture'],
      asi: 'Proactive wellbeing orchestration; dignity first.',
      asiEx: ['Stress-aware scheduling with opt-in'],
      asiPrep: ['Rights charters and opt-out protections'],
      asiNoAct: ['Normalization of surveillance harms wellbeing'],
      linkCategory: 'Ethics'
    }
  };

  const noActionDefaults = {
    ai: [
      'Shadow or ungoverned deployments create bias/privacy issues and legal risk',
      'Vendor lock-in without safeguards raises long-term costs and limits oversight'
    ],
    agi: [
      'Rapid adoption outpaces policy, widening inequality and trust issues',
      'Opaque automation makes errors hard to challenge or correct'
    ],
    asi: [
      'Power concentrates in a few hands; loss of sovereignty and control',
      'Systemic risks escalate without strong governance'
    ]
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const key = select.value;
    if (!key) return;
    const d = employerWhatIf[key];
    if (!d) return;
    const aiNoAct = d.aiNoAct || noActionDefaults.ai;
    const agiNoAct = d.agiNoAct || noActionDefaults.agi;
    const asiNoAct = d.asiNoAct || noActionDefaults.asi;
    result.innerHTML = `
      <div class="mb-2 font-bold text-blue-800">${d.label}</div>
      <div class="mb-3">
        <span class="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">Local AI</span>
        <div class="mt-1"><span class="font-semibold text-green-700">What it looks like:</span> ${d.ai}</div>
        ${d.aiEx && d.aiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.aiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
        ${d.prep && d.prep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-green-700">Prepare now:</span><ul class="mt-1 ml-5 list-disc">${d.prep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${aiNoAct && aiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${aiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
      </div>
      <div class="mb-3">
        <span class="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">AGI</span>
        <div class="mt-1"><span class="font-semibold text-yellow-700">What it enables:</span> ${d.agi}</div>
        ${d.agiEx && d.agiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.agiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
        ${d.agiPrep && d.agiPrep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-yellow-700">Prepare next:</span><ul class="mt-1 ml-5 list-disc">${d.agiPrep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${agiNoAct && agiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${agiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
      </div>
      <div class="mb-2">
        <span class="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">ASI</span>
        <div class="mt-1"><span class="font-semibold text-purple-700">Longer-term shifts:</span> ${d.asi}</div>
        ${d.asiEx && d.asiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.asiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
        ${d.asiPrep && d.asiPrep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-purple-700">Governance to plan:</span><ul class="mt-1 ml-5 list-disc">${d.asiPrep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${asiNoAct && asiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${asiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
      </div>
      ${d.linkCategory ? `<div class=\"mt-3\"><a href=\"#\" data-category=\"${d.linkCategory}\" class=\"inline-flex items-center gap-1 text-blue-800 underline hover:text-yellow-500\">Explore related: ${d.linkCategory} <span aria-hidden=\\"true\\">→</span></a></div>` : ''}
    `;
    result.classList.remove('hidden');
    void result.offsetWidth;
    result.classList.remove('fx-hidden');
    result.focus();
    attachSidebarListeners();
  });
}

// --- School Resources: What-if Preparedness simulator ---
function initSchoolResourcesPage() {
  const form = document.getElementById('schoolWhatIfForm');
  const select = document.getElementById('schoolResponsibilitySelect');
  const result = document.getElementById('schoolWhatIfResult');
  if (!form || !select || !result) return;

  const schoolWhatIf = {
    classroom: {
      label: 'Classroom teaching & assessment',
      ai: 'Lesson planning support, formative assessment hints, translation/captioning, and content search.',
      aiEx: ['Scheme of work generator aligned to curriculum', 'Auto-caption slides and translate worksheets'],
      prep: ['School policy on AI use; disclose and model academic integrity', 'Teacher training and shared exemplars'],
      aiNoAct: ['Inconsistent rules; plagiarism/cheating increases', 'Teachers over-rely and quality varies'],
      agi: '1:1 tutoring support, mastery pacing, and rich feedback for every pupil.',
      agiEx: ['Tutor copilots with teacher oversight and controls'],
      agiPrep: ['Equity funding for devices/connectivity', 'Safeguarding, privacy, and data minimization by design'],
      agiNoAct: ['Digital divide widens attainment gaps', 'Teacher workload shifts without support or training'],
      asi: 'Ambient learning across contexts; focus on values and social development.',
      asiEx: ['Fully personalized learning journeys across subjects'],
      asiPrep: ['National/local guidance; student agency and consent'],
      asiNoAct: ['Loss of human-led pedagogy and socialization'],
      linkCategory: 'School Resources'
    },
    safeguarding: {
      label: 'Safeguarding & student wellbeing',
      ai: 'Signal detection for bullying/self-harm cues, translation for family engagement, and triage assistants.',
      aiEx: ['Anonymous reporting tools with translation'],
      prep: ['Clear protocols; human review and escalation', 'Privacy-first design and opt-outs'],
      aiNoAct: ['False positives/negatives cause harm or overload', 'Trust issues with surveillance perceptions'],
      agi: 'Holistic wellbeing insights and tailored interventions.',
      agiEx: ['Cross-signal models suggest supports for staff decision'],
      agiPrep: ['Ethics board; student voice; external oversight'],
      agiNoAct: ['Overreach undermines trust; chilling effects'],
      asi: 'Proactive supports; dignity and rights paramount.',
      asiEx: ['Crisis supports orchestrated with consent and oversight'],
      asiPrep: ['Rights charters; legal guardrails; advocacy'],
      asiNoAct: ['Rights erosion and community backlash'],
      linkCategory: 'Ethics'
    },
    admin: {
      label: 'Administration & timetabling',
      ai: 'Attendance analytics, timetable suggestions, and communication drafting.',
      aiEx: ['Auto-generate timetable options and cover plans'],
      prep: ['Data quality and privacy controls; FOI readiness', 'Human-in-the-loop approvals and logs'],
      aiNoAct: ['Opaque scoring drives unfair outcomes', 'Parents/staff distrust data-driven decisions'],
      agi: 'End-to-end scheduling and resource planning.',
      agiEx: ['Multi-constraint timetable with fairness metrics'],
      agiPrep: ['Appeals routes and transparency dashboards'],
      agiNoAct: ['Errors scale and are hard to correct', 'Deskilling makes recovery slow after outages'],
      asi: 'Highly automated school ops; keep humans in command.',
      asiEx: ['Self-adjusting schedules with oversight'],
      asiPrep: ['Fallback plans and cutover rules'],
      asiNoAct: ['System failures disrupt learning at scale'],
      linkCategory: 'Government Resources'
    },
    send: {
      label: 'SEND / inclusion',
      ai: 'Accessibility tools, reading supports, and alternative assessment aids.',
      aiEx: ['Live captioning and simplified text modes'],
      prep: ['Personalized consent and teacher review', 'Procurement tests for bias and accessibility'],
      aiNoAct: ['Students with SEND are left out of benefits', 'Tools are adopted without proper safeguards'],
      agi: 'Deep personalization and assistive copilots.',
      agiEx: ['Tailored scaffolds per learner profile'],
      agiPrep: ['Co-design with learners/parents; funding support'],
      agiNoAct: ['Exclusion intensifies; support inequities widen'],
      asi: 'Inclusive learning by default; ensure dignity and agency.',
      asiEx: ['Adaptive multi-modal supports across contexts'],
      asiPrep: ['Rights protections and robust appeals'],
      asiNoAct: ['Dependence without agency; privacy concerns'],
      linkCategory: 'Ethics'
    },
    'it-policy': {
      label: 'IT & edtech policy',
      ai: 'Use policies, procurement rubrics, and vendor risk management for AI tools.',
      aiEx: ['Model cards and DPIAs required for edtech'],
      prep: ['Update AUP; disclosures on AI assistance', 'Staff/pupil training; evaluation criteria'],
      aiNoAct: ['Shadow tools proliferate; privacy/bias risks', 'Procurement lock-in and poor value'],
      agi: 'Governance for copilots and tutoring at scale.',
      agiEx: ['Sandbox pilots with independent evaluation'],
      agiPrep: ['Open standards; exit strategies; audits'],
      agiNoAct: ['Opaque systems dominate classrooms', 'Difficult to change vendors or fix issues'],
      asi: 'System-wide orchestration; balance innovation and safety.',
      asiEx: ['Interoperable platforms under school control'],
      asiPrep: ['Interoperability mandates; oversight bodies'],
      asiNoAct: ['Loss of school autonomy and oversight'],
      linkCategory: 'Government Resources'
    },
    'parent-comm': {
      label: 'Parent communication',
      ai: 'Translation, summarization, and personalized updates to families.',
      aiEx: ['Plain-language, multi-language updates and summaries'],
      prep: ['Consent and clear disclosures; opt-outs', 'Tone/brand guidance and human review'],
      aiNoAct: ['Exclusion of families with language barriers', 'Misinformation from poorly reviewed messages'],
      agi: 'Two-way dialogue at scale with respectful moderation.',
      agiEx: ['Deliberation forums with teacher oversight'],
      agiPrep: ['Moderation standards and logs; inclusivity'],
      agiNoAct: ['Noise and conflict overwhelm teachers', 'Trust declines in school-family relationships'],
      asi: 'Persistent, supportive engagement spaces.',
      asiEx: ['Context-aware updates only when useful'],
      asiPrep: ['Strong anti-manipulation guardrails'],
      asiNoAct: ['Manipulation or spam harms trust'],
      linkCategory: 'Society'
    }
  };

  const noActionDefaults = {
    ai: [
      'Shadow or ungoverned deployments create bias/privacy issues and erode trust',
      'Unequal access widens attainment and wellbeing gaps'
    ],
    agi: [
      'Rapid adoption outpaces safeguarding and inclusion policy',
      'Opaque automation makes errors hard to challenge or correct'
    ],
    asi: [
      'Over-automation erodes human connection and dignity',
      'Systemic risks escalate without strong governance'
    ]
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const key = select.value;
    if (!key) return;
    const d = schoolWhatIf[key];
    if (!d) return;
    const aiNoAct = d.aiNoAct || noActionDefaults.ai;
    const agiNoAct = d.agiNoAct || noActionDefaults.agi;
    const asiNoAct = d.asiNoAct || noActionDefaults.asi;
    result.innerHTML = `
      <div class="mb-2 font-bold text-blue-800">${d.label}</div>
      <div class="mb-3">
        <span class="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">Local AI</span>
        <div class="mt-1"><span class="font-semibold text-green-700">What it looks like:</span> ${d.ai}</div>
        ${d.aiEx && d.aiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.aiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
        ${d.prep && d.prep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-green-700">Prepare now:</span><ul class="mt-1 ml-5 list-disc">${d.prep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${aiNoAct && aiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${aiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
      </div>
      <div class="mb-3">
        <span class="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">AGI</span>
        <div class="mt-1"><span class="font-semibold text-yellow-700">What it enables:</span> ${d.agi}</div>
        ${d.agiEx && d.agiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.agiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
        ${d.agiPrep && d.agiPrep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-yellow-700">Prepare next:</span><ul class="mt-1 ml-5 list-disc">${d.agiPrep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${agiNoAct && agiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${agiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
      </div>
      <div class="mb-2">
        <span class="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">ASI</span>
        <div class="mt-1"><span class="font-semibold text-purple-700">Longer-term shifts:</span> ${d.asi}</div>
        ${d.asiEx && d.asiEx.length ? `<ul class="mt-1 ml-5 list-disc text-[13px] text-blue-900">${d.asiEx.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
        ${d.asiPrep && d.asiPrep.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-purple-700">Governance to plan:</span><ul class="mt-1 ml-5 list-disc">${d.asiPrep.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${asiNoAct && asiNoAct.length ? `<div class="mt-2 text-[13px]"><span class="font-semibold text-red-800">If no action:</span><ul class="mt-1 ml-5 list-disc text-red-800">${asiNoAct.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
      </div>
      ${d.linkCategory ? `<div class=\"mt-3\"><a href=\"#\" data-category=\"${d.linkCategory}\" class=\"inline-flex items-center gap-1 text-blue-800 underline hover:text-yellow-500\">Explore related: ${d.linkCategory} <span aria-hidden=\\"true\\">→</span></a></div>` : ''}
    `;
    result.classList.remove('hidden');
    void result.offsetWidth;
    result.classList.remove('fx-hidden');
    result.focus();
    attachSidebarListeners();
  });
}

// --- Tech Progress Animation Logic ---
let _techAnim = { raf: null, start: null };
function initTechProgressAnimation() {
  const track = document.getElementById('tech-progress');
  const fill = document.getElementById('tech-progress-fill');
  const marker = document.getElementById('tech-marker');
  const starsCanvas = document.getElementById('tech-stars');
  const earthBackdrop = document.getElementById('earth-backdrop');
  const iconWalking = document.getElementById('icon-walking');
  const iconCar = document.getElementById('icon-car');
  const iconTrain = document.getElementById('icon-train');
  const iconShip = document.getElementById('icon-ship');
  const trail = document.getElementById('tech-trail');
  const trainBeam = document.getElementById('train-beam');
  const shipFlame = document.getElementById('ship-flame');
  if (!track || !fill || !marker || !iconWalking || !iconCar || !iconTrain || !iconShip) return;

  // cancel previous
  if (_techAnim.raf) cancelAnimationFrame(_techAnim.raf);
  _techAnim.start = performance.now();

  // Respect reduced motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    fill.style.width = '50%';
    iconWalking.style.opacity = '0';
    iconCar.style.opacity = '0';
    iconTrain.style.opacity = '1';
    iconShip.style.opacity = '0';
    const trackWidth = track.querySelector('.h-2')?.clientWidth || 0;
    const x = trackWidth * 0.5;
    marker.style.transform = `translateX(${x}px)`;
    if (trail) trail.style.opacity = '0';
    if (trainBeam) trainBeam.setAttribute('opacity', '0');
    if (shipFlame) shipFlame.setAttribute('opacity', '0');
    if (earthBackdrop) earthBackdrop.style.opacity = '0';
    // Static shimmer position
    fill.style.backgroundPosition = '50% 0%';
    // Static stars
    if (starsCanvas && starsCanvas.getContext) {
      const ctx = starsCanvas.getContext('2d');
      starsCanvas.width = starsCanvas.clientWidth;
      starsCanvas.height = starsCanvas.clientHeight;
      ctx.clearRect(0,0,starsCanvas.width, starsCanvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      for (let i=0;i<40;i++) {
        const sx = Math.random()*starsCanvas.width;
        const sy = Math.random()*starsCanvas.height;
        ctx.fillRect(sx, sy, 1, 1);
      }
    }
    return;
  }

  function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  // Starfield setup
  let stars = [];
  let ctx = null;
  if (starsCanvas && starsCanvas.getContext) {
    ctx = starsCanvas.getContext('2d');
    const W = starsCanvas.clientWidth || 0;
    const H = 40; // height ~ h-10
    starsCanvas.width = W;
    starsCanvas.height = H;
    const count = Math.max(60, Math.floor(W/10));
    stars = Array.from({length: count}).map(() => ({
      x: Math.random()*W,
      y: Math.random()*H,
      z: Math.random()*1 + 0.2, // speed layer
      a: Math.random()*0.6 + 0.2 // alpha
    }));
  }

  function loop(now) {
    const duration = 16000; // 16s per cycle for 4 phases
    const t = (now - _techAnim.start) % duration;
    const p = t / duration; // 0..1

    // update fill width smoothly
    const pct = (p * 100).toFixed(3) + '%';
    fill.style.width = pct;

    // move marker to the end of fill
    const trackWidth = track.querySelector('.h-2')?.clientWidth || 0;
    const x = Math.max(0, Math.min(trackWidth, p * trackWidth));
    const scale = 0.95 + 0.1 * Math.sin(p * Math.PI * 2);
    marker.style.transform = `translateX(${x}px) scale(${scale.toFixed(3)})`;

    // 4-phase crossfade: walking → car → train → spaceship
    const walkingOut = smoothstep(0.2, 0.3, p);
    const carIn = smoothstep(0.18, 0.28, p);
    const carOut = smoothstep(0.45, 0.55, p);
    const trainIn = smoothstep(0.43, 0.53, p);
    const trainOut = smoothstep(0.7, 0.8, p);
    const shipIn = smoothstep(0.68, 0.78, p);

    const walkingAlpha = 1 - walkingOut;
    const carAlpha = Math.min(carIn, 1 - carOut);
    const trainAlpha = Math.min(trainIn, 1 - trainOut);
    const shipAlpha = shipIn;

    iconWalking.style.opacity = walkingAlpha.toFixed(3);
    iconCar.style.opacity = carAlpha.toFixed(3);
    iconTrain.style.opacity = trainAlpha.toFixed(3);
    iconShip.style.opacity = shipAlpha.toFixed(3);

    // speed trail fades in after walking phase, out during spaceship
    if (trail) {
      let trailAlpha = 0;
      if (p > 0.15 && p < 0.85) trailAlpha = 0.35 + 0.25*Math.sin(p*Math.PI*2);
      trail.style.opacity = Math.max(0, trailAlpha).toFixed(2);
    }

    // train headlight beam pulsing when train visible
    if (trainBeam) {
      const beam = Math.max(0, trainAlpha) * (0.4 + 0.6*Math.abs(Math.sin(now/180)));
      trainBeam.setAttribute('opacity', beam.toFixed(2));
    }

    // spaceship flame flicker when visible
    if (shipFlame) {
      const flameBase = Math.max(0, shipAlpha - 0.1);
      const flame = flameBase * (0.6 + 0.4*Math.sin(now/90));
      shipFlame.setAttribute('opacity', flame.toFixed(2));
      const rx = 5 + 2*Math.abs(Math.sin(now/220));
      shipFlame.setAttribute('rx', rx.toFixed(1));
    }

    // Earth backdrop during spaceship phase
    if (earthBackdrop) {
      earthBackdrop.style.opacity = (shipAlpha * 0.7).toFixed(2);
    }

    // progress fill shimmer animation
    const shimmerX = Math.floor((p*200))%200;
    fill.style.backgroundPosition = `${shimmerX}% 0%`;

    // parallax starfield - dim during train phase, brighten during spaceship
    if (ctx && stars.length) {
      const W = starsCanvas.width;
      const H = starsCanvas.height;
      ctx.clearRect(0,0,W,H);
      const starBrightness = 0.8 - 0.3*trainAlpha + 0.5*shipAlpha;
      for (let i=0;i<stars.length;i++) {
        const s = stars[i];
        s.x -= (0.6 + 1.2*p) * s.z;
        if (s.x < -1) s.x = W + Math.random()*10;
        ctx.globalAlpha = s.a * starBrightness;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s.x, s.y, 1.2, 1.2);
      }
      ctx.globalAlpha = 1;
    }

    _techAnim.raf = requestAnimationFrame(loop);
  }
  _techAnim.raf = requestAnimationFrame(loop);
}

setTimeout(() => {
  renderMainContent();
  setTimeout(updateSidebarSingularityCountdown, 0);
  // Initialize header animation after header DOM is in place
  setTimeout(initTechProgressAnimation, 0);
  // Re-init on resize to ensure correct widths
  window.addEventListener('resize', () => {
    setTimeout(initTechProgressAnimation, 0);
  });
}, 0);


// ---- Focus Trap Utilities ----
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, details, [tabindex]:not([tabindex="-1"])'
  )).filter(el => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
}

function trapFocus(modalEl) {
  const focusables = getFocusableElements(modalEl);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  function onKeyDown(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    } else if (e.key === 'Escape') {
      const closeBtn = modalEl.querySelector('button[aria-label="Close"], #closeArticleModal, #closeQuizModal, #closeModal');
      if (closeBtn) { e.preventDefault(); closeBtn.click(); }
    }
  }
  modalEl.__trapHandler = onKeyDown;
  modalEl.addEventListener('keydown', onKeyDown);
}

function releaseFocus(modalEl) {
  if (modalEl && modalEl.__trapHandler) {
    modalEl.removeEventListener('keydown', modalEl.__trapHandler);
    delete modalEl.__trapHandler;
  }
  const opener = modalEl && modalEl.__lastOpener;
  if (opener && typeof opener.focus === 'function') {
    try { opener.focus(); } catch (_) {}
  }
  if (modalEl) modalEl.__lastOpener = null;
}


