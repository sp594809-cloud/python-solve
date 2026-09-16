// ============================================================
// LJIET Software Engineering Practice Book (SEM-I style)
// SE_PRACTICE_BOOK – used by js/app-se.js
// ============================================================

const SE_PRACTICE_BOOK = {
  unit1: {
    unit: 1,
    title: "Introduction to Software Engineering",
    mcqs: [
      { id: "se1-1", q: "Software Engineering is best defined as:", options: ["Writing code only", "Systematic design, development, testing and maintenance of software", "Only debugging programs", "Installing operating systems"], answer: 1, explanation: "Software Engineering applies engineering principles to the full software life cycle, not only coding." },
      { id: "se1-2", q: "Which of the following is NOT a typical software characteristic?", options: ["Software is engineered, not manufactured in the classical sense", "Software does not wear out like hardware", "Software is always free of defects when first written", "Software is complex"], answer: 2, explanation: "Software can contain defects; quality must be built and tested in." },
      { id: "se1-3", q: "The main goal of Software Engineering is to produce software that is:", options: ["Only fast", "Reliable, efficient, maintainable and within budget/schedule", "Written in one language only", "Never updated"], answer: 1, explanation: "Good software balances quality attributes with cost and time constraints." },
      { id: "se1-4", q: "A software product crisis historically referred to:", options: ["Lack of computers", "Projects over budget, late, and poor quality", "Too many programmers", "Internet failure"], answer: 1, explanation: "The software crisis described cost, schedule and quality problems in large projects." },
      { id: "se1-5", q: "Which layer is at the center of the software engineering layered technology model?", options: ["Tools", "Methods", "Process", "Quality focus"], answer: 3, explanation: "A quality focus underpins process, methods and tools." },
      { id: "se1-6", q: "Generic process framework activities usually include:", options: ["Only coding and deploying", "Communication, planning, modeling, construction, deployment", "Only testing", "Hardware design only"], answer: 1, explanation: "These five framework activities appear across many process models." },
      { id: "se1-7", q: "Umbrella activities in software engineering include:", options: ["Only writing user manuals", "Risk management, SQA, configuration management, reviews", "Only compiling code", "Buying servers"], answer: 1, explanation: "Umbrella activities support the project across the life cycle." },
      { id: "se1-8", q: "Who is primarily responsible for defining software requirements?", options: ["Only the tester", "Stakeholders with analyst/engineer support", "Only the network admin", "Only the database vendor"], answer: 1, explanation: "Requirements come from stakeholders; analysts help capture and document them." }
    ]
  },
  unit2: {
    unit: 2,
    title: "Software Process Models",
    mcqs: [
      { id: "se2-1", q: "In the Waterfall model, phases are generally:", options: ["Fully overlapping with no order", "Sequential with limited going back", "Random", "Only testing repeated forever"], answer: 1, explanation: "Waterfall progresses phase by phase in order, with limited iteration." },
      { id: "se2-2", q: "A major limitation of the classical Waterfall model is:", options: ["It is too agile", "Late discovery of requirement changes is costly", "It has no documentation", "It cannot be taught"], answer: 1, explanation: "Working software appears late; change late in the cycle is expensive." },
      { id: "se2-3", q: "Prototyping is most useful when:", options: ["Requirements are fully frozen and clear", "Requirements are unclear and need clarification with users", "Only hardware is involved", "No UI is needed"], answer: 1, explanation: "A prototype helps refine unclear requirements through user feedback." },
      { id: "se2-4", q: "The Spiral model emphasizes:", options: ["Ignoring risk", "Risk analysis in repeated cycles", "Only one delivery at the end", "No planning"], answer: 1, explanation: "Spiral combines iteration with explicit risk assessment each cycle." },
      { id: "se2-5", q: "Incremental process models deliver software as:", options: ["One big bang only", "A series of usable increments", "Hardware chips", "Only documents"], answer: 1, explanation: "Each increment adds capability the user can often use earlier." },
      { id: "se2-6", q: "Agile methods value most highly:", options: ["Following a rigid plan over change", "Working software and response to change", "Avoiding customer collaboration", "No testing"], answer: 1, explanation: "Agile values individuals, working software, collaboration and responding to change." },
      { id: "se2-7", q: "In Scrum, the time-boxed iteration is called a:", options: ["Waterfall", "Sprint", "Spiral", "Baseline only"], answer: 1, explanation: "Scrum delivers potentially shippable work in sprints." },
      { id: "se2-8", q: "Which model is often preferred when requirements are stable and well understood?", options: ["Pure research prototype only", "Waterfall (or structured sequential approach)", "Chaos model", "No process"], answer: 1, explanation: "Stable, clear requirements fit sequential models better than highly uncertain projects." }
    ]
  },
  unit3: {
    unit: 3,
    title: "Requirements Engineering",
    mcqs: [
      { id: "se3-1", q: "A functional requirement describes:", options: ["How fast the system must respond", "What the system should do (behavior/features)", "Only the programming language", "Office furniture"], answer: 1, explanation: "Functional requirements specify system behavior and features." },
      { id: "se3-2", q: "A non-functional requirement example is:", options: ["User can login", "System should respond within 2 seconds", "User can print a report", "User can add a product"], answer: 1, explanation: "Performance, security, usability etc. are non-functional (quality) requirements." },
      { id: "se3-3", q: "SRS stands for:", options: ["Software Runtime System", "Software Requirements Specification", "System Random Sample", "Secure Remote Server"], answer: 1, explanation: "The SRS document captures agreed requirements." },
      { id: "se3-4", q: "Requirements elicitation means:", options: ["Writing code", "Gathering requirements from stakeholders", "Only testing", "Deploying to production"], answer: 1, explanation: "Elicitation is discovering and collecting needs from users and stakeholders." },
      { id: "se3-5", q: "A good requirement should be:", options: ["Vague and optional", "Clear, testable and unambiguous", "Written only in machine code", "Hidden from the customer"], answer: 1, explanation: "Testable, clear requirements reduce rework and disputes." },
      { id: "se3-6", q: "Use cases mainly help describe:", options: ["Database indexes only", "Interactions between actors and the system to achieve goals", "CPU voltage", "Compiler flags"], answer: 1, explanation: "Use cases capture how actors use the system to get results." },
      { id: "se3-7", q: "Traceability in requirements means:", options: ["Ignoring old requirements", "Linking requirements to design, code and tests", "Deleting the SRS", "Only printing the document"], answer: 1, explanation: "Traceability supports impact analysis and verification." },
      { id: "se3-8", q: "Which is a common requirements problem?", options: ["Too much clarity", "Incomplete, changing or conflicting requirements", "Too many automated tests", "Excess documentation tools"], answer: 1, explanation: "Ambiguity, incompleteness and change are classic requirements risks." }
    ]
  },
  unit4: {
    unit: 4,
    title: "Design, Coding & Testing Basics",
    mcqs: [
      { id: "se4-1", q: "Coupling in design refers to:", options: ["How related modules depend on each other", "Screen color only", "Number of programmers", "Disk brand"], answer: 0, explanation: "Lower coupling (less inter-module dependence) is generally better." },
      { id: "se4-2", q: "Cohesion means:", options: ["How closely elements inside a module belong together", "Network latency", "Font size", "Keyboard type"], answer: 0, explanation: "High cohesion is desirable: a module does one focused job." },
      { id: "se4-3", q: "Black-box testing focuses on:", options: ["Internal code structure", "Inputs and expected outputs without viewing code", "Only compiler warnings", "Hardware voltage"], answer: 1, explanation: "Black-box tests behavior against requirements, not implementation." },
      { id: "se4-4", q: "White-box testing focuses on:", options: ["Only the UI colors", "Internal logic, paths and structure of code", "Marketing copy", "Office layout"], answer: 1, explanation: "White-box uses knowledge of code paths, branches and conditions." },
      { id: "se4-5", q: "Unit testing is typically done on:", options: ["The whole deployed system only", "Individual modules/functions", "Only the user manual", "Electricity supply"], answer: 1, explanation: "Unit tests verify the smallest testable pieces of software." },
      { id: "se4-6", q: "Integration testing checks:", options: ["Only spelling in comments", "Interfaces and interaction between modules", "Only RAM size", "Printer ink"], answer: 1, explanation: "Integration testing finds defects in how components work together." },
      { id: "se4-7", q: "Regression testing is performed to:", options: ["Ignore old features", "Ensure old functionality still works after changes", "Only test new hardware", "Skip verification"], answer: 1, explanation: "Regression tests protect existing behavior when software changes." },
      { id: "se4-8", q: "Debugging is the process of:", options: ["Writing the SRS", "Finding and fixing the cause of defects", "Only deploying", "Buying licenses"], answer: 1, explanation: "Testing finds failures; debugging locates and corrects the fault." }
    ]
  },
  unit5: {
    unit: 5,
    title: "Maintenance, Quality & Project Basics",
    mcqs: [
      { id: "se5-1", q: "Corrective maintenance deals with:", options: ["Adding brand-new features only", "Fixing faults found after delivery", "Only rewriting documentation style", "Changing office chairs"], answer: 1, explanation: "Corrective maintenance repairs defects in production software." },
      { id: "se5-2", q: "Adaptive maintenance is needed when:", options: ["Nothing changes in the environment", "The environment or platform changes (OS, rules, hardware)", "Only fonts change in a PDF", "Tests are deleted"], answer: 1, explanation: "Adaptive maintenance keeps software usable in a changed environment." },
      { id: "se5-3", q: "SQA stands for:", options: ["Software Quick Access", "Software Quality Assurance", "System Queue Allocation", "Secure Query API"], answer: 1, explanation: "SQA is about processes and activities that promote quality." },
      { id: "se5-4", q: "A baseline in configuration management is:", options: ["A random file copy", "An agreed, controlled version of a configuration item", "Only a Git branch name with no meaning", "A type of bug"], answer: 1, explanation: "Baselines are reviewed and frozen reference points for change control." },
      { id: "se5-5", q: "Risk management mainly aims to:", options: ["Ignore problems", "Identify, analyze and mitigate project risks early", "Only increase cost", "Avoid all documentation"], answer: 1, explanation: "Proactive risk handling reduces likelihood and impact of problems." },
      { id: "se5-6", q: "Effort estimation helps a project manager to:", options: ["Avoid scheduling", "Plan time, cost and resources more realistically", "Skip requirements", "Disable testing"], answer: 1, explanation: "Estimates support planning, staffing and tracking." },
      { id: "se5-7", q: "Which metric relates to defects?", options: ["Lines of marketing text", "Defect density (e.g. defects per KLOC)", "Chair height", "Room temperature only"], answer: 1, explanation: "Defect density is a common quality-related metric." },
      { id: "se5-8", q: "The main reason software needs maintenance is:", options: ["Software never needs change", "Business needs, environment and discovered defects change over time", "Compilers ban updates", "Users never request features"], answer: 1, explanation: "Real-world software evolves; maintenance is a large part of life-cycle cost." }
    ]
  }
};

if (typeof window !== "undefined") {
  window.SE_PRACTICE_BOOK = SE_PRACTICE_BOOK;
}
