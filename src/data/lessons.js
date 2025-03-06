const lessons = [
  {
    id: 1,
    title: "Introduction to Business Analysis",
    content: `
        <p>Business Analysis is the practice of enabling change in an organization by defining needs and recommending solutions that deliver value to stakeholders. A Business Analyst (BA) acts as a bridge between business needs and technical solutions, ensuring that projects align with organizational goals. This lesson covers:</p>
        <ul>
          <li>The role and responsibilities of a Business Analyst.</li>
          <li>Key skills: communication, problem-solving, and critical thinking.</li>
          <li>Common methodologies: Agile, Waterfall, and Hybrid approaches.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the primary role of a Business Analyst?",
        options: [
          "Writing code for software applications",
          "Bridging the gap between business needs and technical solutions",
          "Managing the project budget",
          "Designing user interfaces",
        ],
        answer:
          "Bridging the gap between business needs and technical solutions",
      },
      {
        question: "Which methodology emphasizes iterative development?",
        options: ["Waterfall", "Agile", "Six Sigma", "Lean"],
        answer: "Agile",
      },
      {
        question: "Which skill is essential for a Business Analyst?",
        options: [
          "Graphic design",
          "Critical thinking",
          "Hardware repair",
          "Accounting",
        ],
        answer: "Critical thinking",
      },
      {
        question: "What does a BA ensure about projects?",
        options: [
          "They exceed budget",
          "They align with organizational goals",
          "They avoid stakeholders",
          "They skip testing",
        ],
        answer: "They align with organizational goals",
      },
      {
        question: "Which methodology follows a linear approach?",
        options: ["Agile", "Hybrid", "Waterfall", "Scrum"],
        answer: "Waterfall",
      },
    ],
  },
  {
    id: 2,
    title: "Requirements Gathering Techniques",
    content: `
        <p>Requirements gathering is a critical step in understanding what stakeholders need from a project. This lesson explores:</p>
        <ul>
          <li><strong>Interviews</strong>: One-on-one discussions with stakeholders to uncover needs.</li>
          <li><strong>Workshops</strong>: Collaborative sessions to gather input from multiple stakeholders.</li>
          <li><strong>Surveys/Questionnaires</strong>: Collecting data from a large group efficiently.</li>
          <li><strong>Observation</strong>: Watching processes in action to identify inefficiencies.</li>
        </ul>
        <p>Tips for documenting requirements clearly and concisely.</p>
      `,
    quiz: [
      {
        question: "Which technique involves watching a process in real-time?",
        options: ["Interviews", "Workshops", "Observation", "Surveys"],
        answer: "Observation",
      },
      {
        question: "What is the benefit of conducting a workshop?",
        options: [
          "It’s the cheapest method",
          "It allows collaboration among stakeholders",
          "It requires no preparation",
          "It’s only useful for technical teams",
        ],
        answer: "It allows collaboration among stakeholders",
      },
      {
        question: "Which method is best for large groups?",
        options: ["Interviews", "Observation", "Surveys", "Workshops"],
        answer: "Surveys",
      },
      {
        question: "What should documented requirements be?",
        options: [
          "Vague",
          "Clear and concise",
          "Overly technical",
          "Incomplete",
        ],
        answer: "Clear and concise",
      },
      {
        question: "What is a goal of interviews?",
        options: [
          "To confuse stakeholders",
          "To uncover needs",
          "To write code",
          "To test software",
        ],
        answer: "To uncover needs",
      },
    ],
  },
  {
    id: 3,
    title: "Understanding Stakeholder Analysis",
    content: `
        <p>Stakeholder analysis identifies individuals or groups impacted by a project and assesses their influence and interest. This lesson covers:</p>
        <ul>
          <li>Identifying key stakeholders.</li>
          <li>Mapping stakeholder power and interest.</li>
          <li>Strategies for engaging stakeholders effectively.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the first step in stakeholder analysis?",
        options: [
          "Engaging stakeholders",
          "Identifying stakeholders",
          "Mapping power",
          "Documenting needs",
        ],
        answer: "Identifying stakeholders",
      },
      {
        question:
          "Which factor is NOT typically assessed in stakeholder analysis?",
        options: ["Interest", "Power", "Technical skills", "Influence"],
        answer: "Technical skills",
      },
      {
        question: "What does a high-power, low-interest stakeholder require?",
        options: [
          "Frequent updates",
          "Minimal engagement",
          "Detailed reports",
          "Constant involvement",
        ],
        answer: "Minimal engagement",
      },
      {
        question: "Why is stakeholder mapping useful?",
        options: [
          "It writes requirements",
          "It prioritizes engagement",
          "It codes solutions",
          "It eliminates stakeholders",
        ],
        answer: "It prioritizes engagement",
      },
      {
        question: "Which tool is commonly used for stakeholder mapping?",
        options: [
          "Power/Interest grid",
          "Gantt chart",
          "Flowchart",
          "Pie chart",
        ],
        answer: "Power/Interest grid",
      },
    ],
  },
  {
    id: 4,
    title: "Introduction to Agile Methodology",
    content: `
        <p>Agile is a flexible, iterative approach to project management and software development. This lesson introduces:</p>
        <ul>
          <li>Core principles of Agile (e.g., collaboration, adaptability).</li>
          <li>Scrum and Kanban frameworks.</li>
          <li>Benefits: faster delivery, improved quality.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is a key principle of Agile?",
        options: [
          "Fixed scope",
          "Customer collaboration",
          "Detailed upfront planning",
          "Single delivery",
        ],
        answer: "Customer collaboration",
      },
      {
        question: "Which framework uses sprints?",
        options: ["Kanban", "Scrum", "Waterfall", "Lean"],
        answer: "Scrum",
      },
      {
        question: "What is a benefit of Agile?",
        options: [
          "Rigid structure",
          "Faster delivery",
          "Less feedback",
          "Higher costs",
        ],
        answer: "Faster delivery",
      },
      {
        question: "What does Kanban focus on?",
        options: [
          "Time-boxed iterations",
          "Visualizing workflow",
          "Fixed requirements",
          "Long planning",
        ],
        answer: "Visualizing workflow",
      },
      {
        question: "Who is typically involved in Agile daily stand-ups?",
        options: [
          "Stakeholders only",
          "Development team",
          "Executives",
          "Clients only",
        ],
        answer: "Development team",
      },
    ],
  },
  {
    id: 5,
    title: "Waterfall Methodology Basics",
    content: `
        <p>Waterfall is a linear, sequential approach to project management. This lesson explains:</p>
        <ul>
          <li>Phases: requirements, design, implementation, testing, maintenance.</li>
          <li>Advantages: clear structure, predictable outcomes.</li>
          <li>Disadvantages: inflexibility, late feedback.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the first phase of Waterfall?",
        options: ["Testing", "Requirements", "Design", "Implementation"],
        answer: "Requirements",
      },
      {
        question: "What is an advantage of Waterfall?",
        options: [
          "Flexibility",
          "Clear structure",
          "Iterative feedback",
          "Rapid changes",
        ],
        answer: "Clear structure",
      },
      {
        question: "Why is Waterfall less flexible?",
        options: [
          "Phases overlap",
          "Changes are hard after planning",
          "It uses Agile",
          "It’s iterative",
        ],
        answer: "Changes are hard after planning",
      },
      {
        question: "When is testing done in Waterfall?",
        options: [
          "After implementation",
          "During design",
          "Before requirements",
          "Throughout",
        ],
        answer: "After implementation",
      },
      {
        question: "What type of project suits Waterfall?",
        options: [
          "Unpredictable scope",
          "Well-defined requirements",
          "Frequent changes",
          "Small teams",
        ],
        answer: "Well-defined requirements",
      },
    ],
  },
  {
    id: 6,
    title: "Writing Effective User Stories",
    content: `
        <p>User stories are short, simple descriptions of a feature from the user’s perspective. This lesson covers:</p>
        <ul>
          <li>Format: As a [user], I want [goal] so that [benefit].</li>
          <li>Criteria for good user stories (INVEST model).</li>
          <li>Examples and common pitfalls.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the typical format of a user story?",
        options: [
          "If-then",
          "As a-I want-so that",
          "Who-what-why",
          "When-where-how",
        ],
        answer: "As a-I want-so that",
      },
      {
        question: "What does the 'I' in INVEST stand for?",
        options: ["Iterative", "Independent", "Integrated", "Innovative"],
        answer: "Independent",
      },
      {
        question: "Why include a benefit in a user story?",
        options: [
          "To confuse developers",
          "To clarify value",
          "To increase scope",
          "To add complexity",
        ],
        answer: "To clarify value",
      },
      {
        question: "Which is a pitfall of user stories?",
        options: [
          "Being too vague",
          "Being specific",
          "Including benefits",
          "Using a template",
        ],
        answer: "Being too vague",
      },
      {
        question: "Who typically writes user stories?",
        options: ["Developers", "Testers", "Business Analysts", "Executives"],
        answer: "Business Analysts",
      },
    ],
  },
  {
    id: 7,
    title: "Process Modeling with BPMN",
    content: `
        <p>Business Process Model and Notation (BPMN) is a standard for visualizing processes. This lesson includes:</p>
        <ul>
          <li>Basic elements: events, activities, gateways.</li>
          <li>Creating a simple process diagram.</li>
          <li>Benefits: clarity, standardization.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does BPMN stand for?",
        options: [
          "Business Process Model Notation",
          "Basic Process Mapping Network",
          "Business Plan Management Notation",
          "Business Process Monitoring Node",
        ],
        answer: "Business Process Model Notation",
      },
      {
        question: "What represents a decision point in BPMN?",
        options: ["Event", "Activity", "Gateway", "Flow"],
        answer: "Gateway",
      },
      {
        question: "What is a benefit of BPMN?",
        options: [
          "Increased complexity",
          "Standardized visuals",
          "Less collaboration",
          "Higher costs",
        ],
        answer: "Standardized visuals",
      },
      {
        question: "Which element starts a process in BPMN?",
        options: ["Gateway", "End event", "Start event", "Task"],
        answer: "Start event",
      },
      {
        question: "Who uses BPMN diagrams?",
        options: [
          "Only developers",
          "Business and technical teams",
          "Executives only",
          "Clients only",
        ],
        answer: "Business and technical teams",
      },
    ],
  },
  {
    id: 8,
    title: "Data Flow Diagrams (DFD) Explained",
    content: `
        <p>Data Flow Diagrams show how data moves through a system. This lesson covers:</p>
        <ul>
          <li>Components: processes, data stores, external entities, flows.</li>
          <li>Levels: context, Level 0, Level 1.</li>
          <li>Use cases in business analysis.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does a circle represent in a DFD?",
        options: ["Data store", "Process", "External entity", "Flow"],
        answer: "Process",
      },
      {
        question: "What is a data store in a DFD?",
        options: [
          "A decision point",
          "A storage location",
          "An external user",
          "A process step",
        ],
        answer: "A storage location",
      },
      {
        question: "What is the simplest DFD level?",
        options: ["Level 0", "Level 1", "Context", "Level 2"],
        answer: "Context",
      },
      {
        question: "Who interacts with the system in a DFD?",
        options: ["Processes", "External entities", "Data stores", "Flows"],
        answer: "External entities",
      },
      {
        question: "Why use DFDs?",
        options: [
          "To confuse stakeholders",
          "To show data movement",
          "To write code",
          "To replace BPMN",
        ],
        answer: "To show data movement",
      },
    ],
  },
  {
    id: 9,
    title: "Use Case Modeling",
    content: `
        <p>Use case modeling defines how users interact with a system. This lesson covers:</p>
        <ul>
          <li>Elements: actors, use cases, relationships.</li>
          <li>Writing use case descriptions.</li>
          <li>Benefits: clear system requirements.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is an actor in a use case?",
        options: [
          "A process",
          "A user or system",
          "A data store",
          "A decision",
        ],
        answer: "A user or system",
      },
      {
        question: "What does a use case describe?",
        options: [
          "Code structure",
          "User interaction",
          "Hardware setup",
          "Budget",
        ],
        answer: "User interaction",
      },
      {
        question: "What connects actors to use cases?",
        options: ["Flows", "Relationships", "Gateways", "Events"],
        answer: "Relationships",
      },
      {
        question: "Why use use case modeling?",
        options: [
          "To confuse developers",
          "To clarify requirements",
          "To skip testing",
          "To increase costs",
        ],
        answer: "To clarify requirements",
      },
      {
        question: "Who writes use case descriptions?",
        options: ["Testers", "Developers", "Business Analysts", "Clients"],
        answer: "Business Analysts",
      },
    ],
  },
  {
    id: 10,
    title: "SWOT Analysis for Projects",
    content: `
        <p>SWOT analysis evaluates strengths, weaknesses, opportunities, and threats. This lesson explains:</p>
        <ul>
          <li>Internal factors: strengths, weaknesses.</li>
          <li>External factors: opportunities, threats.</li>
          <li>Application in project planning.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does SWOT stand for?",
        options: [
          "Strengths, Weaknesses, Opportunities, Threats",
          "Systems, Workflows, Operations, Tools",
          "Scope, Work, Objectives, Tasks",
          "Standards, Wins, Options, Trends",
        ],
        answer: "Strengths, Weaknesses, Opportunities, Threats",
      },
      {
        question: "Which is an internal factor?",
        options: ["Market trends", "Strengths", "Competitors", "Regulations"],
        answer: "Strengths",
      },
      {
        question: "What is an example of a threat?",
        options: [
          "Skilled team",
          "New technology",
          "Economic downturn",
          "Efficient process",
        ],
        answer: "Economic downturn",
      },
      {
        question: "Why use SWOT in projects?",
        options: [
          "To write code",
          "To assess risks and benefits",
          "To design UI",
          "To skip planning",
        ],
        answer: "To assess risks and benefits",
      },
      {
        question: "Which factor is external?",
        options: ["Weaknesses", "Opportunities", "Team skills", "Budget"],
        answer: "Opportunities",
      },
    ],
  },
  {
    id: 11,
    title: "Risk Assessment in Projects",
    content: `
        <p>Risk assessment identifies potential issues and their impact. This lesson covers:</p>
        <ul>
          <li>Risk identification techniques.</li>
          <li>Risk probability and impact analysis.</li>
          <li>Mitigation strategies.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the goal of risk assessment?",
        options: [
          "To ignore risks",
          "To identify and mitigate risks",
          "To increase costs",
          "To skip testing",
        ],
        answer: "To identify and mitigate risks",
      },
      {
        question: "Which technique helps identify risks?",
        options: ["Brainstorming", "Coding", "Budgeting", "Designing"],
        answer: "Brainstorming",
      },
      {
        question: "What does risk impact measure?",
        options: ["Likelihood", "Severity", "Cost", "Time"],
        answer: "Severity",
      },
      {
        question: "What is a mitigation strategy?",
        options: [
          "Ignoring risks",
          "Reducing risk impact",
          "Increasing risks",
          "Avoiding planning",
        ],
        answer: "Reducing risk impact",
      },
      {
        question: "Who performs risk assessment?",
        options: [
          "Only developers",
          "Project team",
          "Clients only",
          "Testers only",
        ],
        answer: "Project team",
      },
    ],
  },
  {
    id: 12,
    title: "Cost-Benefit Analysis",
    content: `
        <p>Cost-benefit analysis compares project costs to benefits. This lesson includes:</p>
        <ul>
          <li>Calculating costs: direct, indirect.</li>
          <li>Estimating benefits: tangible, intangible.</li>
          <li>Decision-making applications.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does cost-benefit analysis compare?",
        options: [
          "Risks and threats",
          "Costs and benefits",
          "Time and scope",
          "Team and tools",
        ],
        answer: "Costs and benefits",
      },
      {
        question: "What is a direct cost?",
        options: [
          "Employee morale",
          "Software purchase",
          "Brand reputation",
          "Customer satisfaction",
        ],
        answer: "Software purchase",
      },
      {
        question: "What is an intangible benefit?",
        options: [
          "Revenue increase",
          "Improved morale",
          "Equipment cost",
          "Time saved",
        ],
        answer: "Improved morale",
      },
      {
        question: "Why use cost-benefit analysis?",
        options: [
          "To confuse stakeholders",
          "To justify decisions",
          "To skip planning",
          "To increase costs",
        ],
        answer: "To justify decisions",
      },
      {
        question: "What type of cost is training?",
        options: ["Indirect", "Direct", "Intangible", "External"],
        answer: "Direct",
      },
    ],
  },
  {
    id: 13,
    title: "Prototyping Techniques",
    content: `
        <p>Prototyping creates early models of a solution. This lesson covers:</p>
        <ul>
          <li>Types: paper, digital, interactive.</li>
          <li>Benefits: feedback, validation.</li>
          <li>Best practices for prototyping.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the purpose of prototyping?",
        options: [
          "To finalize code",
          "To test ideas",
          "To increase costs",
          "To skip testing",
        ],
        answer: "To test ideas",
      },
      {
        question: "Which is a type of prototype?",
        options: ["Paper", "Budget", "Code", "Survey"],
        answer: "Paper",
      },
      {
        question: "What is a benefit of prototyping?",
        options: [
          "Higher costs",
          "Early feedback",
          "Less clarity",
          "More complexity",
        ],
        answer: "Early feedback",
      },
      {
        question: "What is an interactive prototype?",
        options: [
          "A static drawing",
          "A clickable model",
          "A budget plan",
          "A final product",
        ],
        answer: "A clickable model",
      },
      {
        question: "Who reviews prototypes?",
        options: [
          "Developers only",
          "Stakeholders",
          "Testers only",
          "Executives only",
        ],
        answer: "Stakeholders",
      },
    ],
  },
  {
    id: 14,
    title: "Change Management Basics",
    content: `
        <p>Change management ensures smooth transitions in projects. This lesson explains:</p>
        <ul>
          <li>Key steps: assess, plan, implement.</li>
          <li>Stakeholder involvement.</li>
          <li>Common frameworks (e.g., ADKAR).</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the goal of change management?",
        options: [
          "To resist change",
          "To manage transitions",
          "To increase risks",
          "To skip planning",
        ],
        answer: "To manage transitions",
      },
      {
        question: "What is a key step in change management?",
        options: ["Coding", "Assessing change", "Designing UI", "Budgeting"],
        answer: "Assessing change",
      },
      {
        question: "Who is involved in change management?",
        options: [
          "Stakeholders",
          "Developers only",
          "Testers only",
          "Clients only",
        ],
        answer: "Stakeholders",
      },
      {
        question: "What does ADKAR stand for?",
        options: [
          "Awareness, Desire, Knowledge, Ability, Reinforcement",
          "Analyze, Design, Keep, Assess, Review",
          "Adapt, Develop, Know, Act, Repeat",
          "Assess, Deliver, Keep, Adapt, Revise",
        ],
        answer: "Awareness, Desire, Knowledge, Ability, Reinforcement",
      },
      {
        question: "Why plan for change?",
        options: [
          "To confuse teams",
          "To reduce resistance",
          "To increase costs",
          "To avoid feedback",
        ],
        answer: "To reduce resistance",
      },
    ],
  },
  {
    id: 15,
    title: "Prioritization Methods (MoSCoW)",
    content: `
        <p>MoSCoW prioritizes requirements effectively. This lesson covers:</p>
        <ul>
          <li>Categories: Must, Should, Could, Won’t.</li>
          <li>Applying MoSCoW in projects.</li>
          <li>Benefits: focus, clarity.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does MoSCoW stand for?",
        options: [
          "Must, Should, Could, Won’t",
          "Manage, Scope, Control, Work",
          "Measure, Study, Create, Win",
          "Model, Share, Collect, Wait",
        ],
        answer: "Must, Should, Could, Won’t",
      },
      {
        question: "Which category is highest priority?",
        options: ["Should", "Could", "Must", "Won’t"],
        answer: "Must",
      },
      {
        question: "What does ‘Won’t’ mean?",
        options: ["Top priority", "Not this time", "Maybe later", "Essential"],
        answer: "Not this time",
      },
      {
        question: "Why use MoSCoW?",
        options: [
          "To confuse teams",
          "To prioritize requirements",
          "To write code",
          "To skip planning",
        ],
        answer: "To prioritize requirements",
      },
      {
        question: "What is a ‘Could’ requirement?",
        options: ["Essential", "Nice-to-have", "Not included", "Mandatory"],
        answer: "Nice-to-have",
      },
    ],
  },
  {
    id: 16,
    title: "Root Cause Analysis",
    content: `
        <p>Root cause analysis identifies underlying issues. This lesson includes:</p>
        <ul>
          <li>Techniques: 5 Whys, Fishbone diagram.</li>
          <li>Steps to perform RCA.</li>
          <li>Benefits: problem-solving.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the goal of root cause analysis?",
        options: [
          "To ignore issues",
          "To find underlying causes",
          "To increase costs",
          "To skip testing",
        ],
        answer: "To find underlying causes",
      },
      {
        question: "What is a technique for RCA?",
        options: ["5 Whys", "Budgeting", "Coding", "Designing"],
        answer: "5 Whys",
      },
      {
        question: "What does a Fishbone diagram show?",
        options: [
          "Code structure",
          "Causes of a problem",
          "Team hierarchy",
          "Budget",
        ],
        answer: "Causes of a problem",
      },
      {
        question: "How many times do you ask ‘Why’ in 5 Whys?",
        options: ["3", "5", "7", "10"],
        answer: "5",
      },
      {
        question: "Why use RCA?",
        options: [
          "To confuse stakeholders",
          "To solve problems",
          "To avoid feedback",
          "To increase risks",
        ],
        answer: "To solve problems",
      },
    ],
  },
  {
    id: 17,
    title: "Stakeholder Communication Plans",
    content: `
        <p>A communication plan ensures stakeholder alignment. This lesson covers:</p>
        <ul>
          <li>Components: audience, message, frequency.</li>
          <li>Creating an effective plan.</li>
          <li>Benefits: transparency, trust.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the purpose of a communication plan?",
        options: [
          "To confuse stakeholders",
          "To align stakeholders",
          "To write code",
          "To skip planning",
        ],
        answer: "To align stakeholders",
      },
      {
        question: "What is a component of a communication plan?",
        options: ["Code", "Audience", "Budget", "Design"],
        answer: "Audience",
      },
      {
        question: "What does frequency define?",
        options: [
          "Message content",
          "How often to communicate",
          "Team size",
          "Project cost",
        ],
        answer: "How often to communicate",
      },
      {
        question: "Why use a communication plan?",
        options: [
          "To increase costs",
          "To build trust",
          "To avoid feedback",
          "To skip testing",
        ],
        answer: "To build trust",
      },
      {
        question: "Who creates the plan?",
        options: ["Developers", "Business Analysts", "Testers", "Clients"],
        answer: "Business Analysts",
      },
    ],
  },
  {
    id: 18,
    title: "Business Case Development",
    content: `
        <p>A business case justifies a project. This lesson explains:</p>
        <ul>
          <li>Sections: problem, solution, benefits.</li>
          <li>Writing a compelling case.</li>
          <li>Stakeholder approval process.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does a business case justify?",
        options: ["A project", "A budget cut", "A team", "A design"],
        answer: "A project",
      },
      {
        question: "What is a section of a business case?",
        options: ["Code", "Problem", "Team size", "Hardware"],
        answer: "Problem",
      },
      {
        question: "What is a goal of a business case?",
        options: [
          "To confuse stakeholders",
          "To gain approval",
          "To increase costs",
          "To skip planning",
        ],
        answer: "To gain approval",
      },
      {
        question: "Who reviews a business case?",
        options: ["Developers", "Stakeholders", "Testers", "Clients only"],
        answer: "Stakeholders",
      },
      {
        question: "What does the solution section describe?",
        options: ["Problems", "Proposed fix", "Team roles", "Budget"],
        answer: "Proposed fix",
      },
    ],
  },
  {
    id: 19,
    title: "Acceptance Criteria Writing",
    content: `
        <p>Acceptance criteria define when a requirement is met. This lesson covers:</p>
        <ul>
          <li>Format: Given-When-Then.</li>
          <li>Characteristics: clear, testable.</li>
          <li>Examples and pitfalls.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What do acceptance criteria define?",
        options: [
          "Code structure",
          "Requirement completion",
          "Team roles",
          "Budget",
        ],
        answer: "Requirement completion",
      },
      {
        question: "What is a common format for criteria?",
        options: [
          "If-Then",
          "Given-When-Then",
          "Who-What-Why",
          "When-Where-How",
        ],
        answer: "Given-When-Then",
      },
      {
        question: "What should criteria be?",
        options: ["Vague", "Testable", "Complex", "Incomplete"],
        answer: "Testable",
      },
      {
        question: "What is a pitfall of acceptance criteria?",
        options: [
          "Being clear",
          "Being ambiguous",
          "Being testable",
          "Being concise",
        ],
        answer: "Being ambiguous",
      },
      {
        question: "Who writes acceptance criteria?",
        options: ["Developers", "Business Analysts", "Testers", "Clients"],
        answer: "Business Analysts",
      },
    ],
  },
  {
    id: 20,
    title: "Scrum Roles and Responsibilities",
    content: `
        <p>Scrum defines key roles for Agile teams. This lesson includes:</p>
        <ul>
          <li>Roles: Product Owner, Scrum Master, Team.</li>
          <li>Responsibilities of each role.</li>
          <li>Collaboration in Scrum.</li>
        </ul>
      `,
    quiz: [
      {
        question: "Who owns the product backlog in Scrum?",
        options: ["Scrum Master", "Product Owner", "Team", "Stakeholders"],
        answer: "Product Owner",
      },
      {
        question: "What does the Scrum Master do?",
        options: [
          "Writes code",
          "Facilitates process",
          "Defines requirements",
          "Tests software",
        ],
        answer: "Facilitates process",
      },
      {
        question: "Who builds the product in Scrum?",
        options: ["Product Owner", "Scrum Master", "Team", "Clients"],
        answer: "Team",
      },
      {
        question: "What is a key Scrum collaboration?",
        options: [
          "Daily stand-ups",
          "Monthly reviews",
          "Solo work",
          "Annual planning",
        ],
        answer: "Daily stand-ups",
      },
      {
        question: "Who prioritizes features in Scrum?",
        options: ["Team", "Product Owner", "Scrum Master", "Developers"],
        answer: "Product Owner",
      },
    ],
  },
  {
    id: 21,
    title: "Kanban Board Setup",
    content: `
        <p>Kanban boards visualize workflows. This lesson covers:</p>
        <ul>
          <li>Columns: To Do, In Progress, Done.</li>
          <li>Work-in-progress (WIP) limits.</li>
          <li>Benefits: efficiency, transparency.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does a Kanban board show?",
        options: ["Code", "Workflow", "Budget", "Team roles"],
        answer: "Workflow",
      },
      {
        question: "What is a typical column?",
        options: ["In Progress", "Budget", "Design", "Code"],
        answer: "In Progress",
      },
      {
        question: "What does WIP stand for?",
        options: [
          "Work-in-progress",
          "Workflow-in-place",
          "Work-is-pending",
          "Work-in-plan",
        ],
        answer: "Work-in-progress",
      },
      {
        question: "Why use WIP limits?",
        options: [
          "To increase delays",
          "To improve efficiency",
          "To confuse teams",
          "To skip planning",
        ],
        answer: "To improve efficiency",
      },
      {
        question: "What is a benefit of Kanban?",
        options: [
          "Less transparency",
          "More complexity",
          "Better visibility",
          "Higher costs",
        ],
        answer: "Better visibility",
      },
    ],
  },
  {
    id: 22,
    title: "Quality Assurance in Analysis",
    content: `
        <p>Quality assurance ensures requirements meet standards. This lesson explains:</p>
        <ul>
          <li>Techniques: reviews, validation.</li>
          <li>Criteria for quality requirements.</li>
          <li>Benefits: reduced errors.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does quality assurance ensure?",
        options: [
          "Code works",
          "Requirements meet standards",
          "Budget is met",
          "Design is pretty",
        ],
        answer: "Requirements meet standards",
      },
      {
        question: "What is a QA technique?",
        options: ["Coding", "Reviews", "Budgeting", "Designing"],
        answer: "Reviews",
      },
      {
        question: "What should a quality requirement be?",
        options: ["Vague", "Clear", "Complex", "Incomplete"],
        answer: "Clear",
      },
      {
        question: "Why use QA in analysis?",
        options: [
          "To increase errors",
          "To reduce errors",
          "To skip testing",
          "To confuse teams",
        ],
        answer: "To reduce errors",
      },
      {
        question: "Who performs QA?",
        options: [
          "Developers only",
          "Business Analysts",
          "Clients only",
          "Testers only",
        ],
        answer: "Business Analysts",
      },
    ],
  },
  {
    id: 23,
    title: "Elicitation Best Practices",
    content: `
        <p>Elicitation gathers stakeholder needs effectively. This lesson covers:</p>
        <ul>
          <li>Techniques: brainstorming, focus groups.</li>
          <li>Preparing for elicitation.</li>
          <li>Common challenges and solutions.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the goal of elicitation?",
        options: [
          "To write code",
          "To gather needs",
          "To design UI",
          "To skip planning",
        ],
        answer: "To gather needs",
      },
      {
        question: "What is an elicitation technique?",
        options: ["Brainstorming", "Coding", "Budgeting", "Testing"],
        answer: "Brainstorming",
      },
      {
        question: "What should you do before elicitation?",
        options: [
          "Skip preparation",
          "Prepare questions",
          "Write code",
          "Test software",
        ],
        answer: "Prepare questions",
      },
      {
        question: "What is a common elicitation challenge?",
        options: [
          "Clear goals",
          "Unclear stakeholder needs",
          "Good communication",
          "Simple processes",
        ],
        answer: "Unclear stakeholder needs",
      },
      {
        question: "Who participates in elicitation?",
        options: [
          "Developers only",
          "Stakeholders",
          "Testers only",
          "Clients only",
        ],
        answer: "Stakeholders",
      },
    ],
  },
  {
    id: 24,
    title: "Requirements Traceability",
    content: `
        <p>Requirements traceability links needs to deliverables. This lesson includes:</p>
        <ul>
          <li>Traceability matrix basics.</li>
          <li>Benefits: completeness, validation.</li>
          <li>Tools for traceability.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does traceability link?",
        options: [
          "Code to budget",
          "Needs to deliverables",
          "Team to clients",
          "Design to hardware",
        ],
        answer: "Needs to deliverables",
      },
      {
        question: "What is a traceability matrix?",
        options: [
          "A budget tool",
          "A tracking tool",
          "A design tool",
          "A coding tool",
        ],
        answer: "A tracking tool",
      },
      {
        question: "What is a benefit of traceability?",
        options: [
          "Increased errors",
          "Completeness",
          "Less clarity",
          "More complexity",
        ],
        answer: "Completeness",
      },
      {
        question: "What tool helps with traceability?",
        options: ["Excel", "Photoshop", "Word", "PowerPoint"],
        answer: "Excel",
      },
      {
        question: "Why use traceability?",
        options: [
          "To confuse teams",
          "To validate requirements",
          "To skip testing",
          "To increase costs",
        ],
        answer: "To validate requirements",
      },
    ],
  },
  {
    id: 25,
    title: "Decision Analysis Techniques",
    content: `
        <p>Decision analysis aids in choosing solutions. This lesson covers:</p>
        <ul>
          <li>Methods: decision trees, weighted scoring.</li>
          <li>Steps for analysis.</li>
          <li>Benefits: informed choices.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the goal of decision analysis?",
        options: [
          "To confuse teams",
          "To choose solutions",
          "To write code",
          "To skip planning",
        ],
        answer: "To choose solutions",
      },
      {
        question: "What is a decision analysis method?",
        options: ["Decision trees", "Budgeting", "Coding", "Testing"],
        answer: "Decision trees",
      },
      {
        question: "What does weighted scoring use?",
        options: ["Random guesses", "Criteria scores", "Team size", "Budget"],
        answer: "Criteria scores",
      },
      {
        question: "Why use decision analysis?",
        options: [
          "To increase risks",
          "To inform choices",
          "To avoid feedback",
          "To skip testing",
        ],
        answer: "To inform choices",
      },
      {
        question: "What is a step in decision analysis?",
        options: [
          "Skipping planning",
          "Evaluating options",
          "Writing code",
          "Designing UI",
        ],
        answer: "Evaluating options",
      },
    ],
  },
  {
    id: 26,
    title: "Feasibility Studies",
    content: `
        <p>Feasibility studies assess project viability. This lesson explains:</p>
        <ul>
          <li>Types: technical, economic, operational.</li>
          <li>Conducting a study.</li>
          <li>Benefits: risk reduction.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does a feasibility study assess?",
        options: ["Code quality", "Project viability", "Team size", "Design"],
        answer: "Project viability",
      },
      {
        question: "What is a type of feasibility?",
        options: ["Technical", "Budget", "Code", "Design"],
        answer: "Technical",
      },
      {
        question: "What does economic feasibility evaluate?",
        options: ["Team skills", "Cost-effectiveness", "Hardware", "Software"],
        answer: "Cost-effectiveness",
      },
      {
        question: "Why conduct a feasibility study?",
        options: [
          "To increase risks",
          "To reduce risks",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To reduce risks",
      },
      {
        question: "What is operational feasibility?",
        options: ["Code readiness", "Process fit", "Budget fit", "Design fit"],
        answer: "Process fit",
      },
    ],
  },
  {
    id: 27,
    title: "Gap Analysis Fundamentals",
    content: `
        <p>Gap analysis compares current and desired states. This lesson covers:</p>
        <ul>
          <li>Steps: assess, identify gaps, plan.</li>
          <li>Tools: SWOT, process maps.</li>
          <li>Benefits: improvement focus.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does gap analysis compare?",
        options: [
          "Code to design",
          "Current to desired state",
          "Team to budget",
          "Hardware to software",
        ],
        answer: "Current to desired state",
      },
      {
        question: "What is a step in gap analysis?",
        options: [
          "Writing code",
          "Identifying gaps",
          "Designing UI",
          "Skipping planning",
        ],
        answer: "Identifying gaps",
      },
      {
        question: "What tool is used in gap analysis?",
        options: ["SWOT", "Photoshop", "Word", "Excel"],
        answer: "SWOT",
      },
      {
        question: "Why use gap analysis?",
        options: [
          "To confuse teams",
          "To focus improvements",
          "To increase costs",
          "To skip testing",
        ],
        answer: "To focus improvements",
      },
      {
        question: "What does gap analysis help plan?",
        options: ["Code", "Solutions", "Budget", "Design"],
        answer: "Solutions",
      },
    ],
  },
  {
    id: 28,
    title: "Workflow Optimization",
    content: `
        <p>Workflow optimization improves efficiency. This lesson includes:</p>
        <ul>
          <li>Techniques: streamlining, automation.</li>
          <li>Identifying bottlenecks.</li>
          <li>Benefits: time savings.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is the goal of workflow optimization?",
        options: [
          "To increase delays",
          "To improve efficiency",
          "To write code",
          "To skip planning",
        ],
        answer: "To improve efficiency",
      },
      {
        question: "What is a technique for optimization?",
        options: ["Streamlining", "Budgeting", "Coding", "Testing"],
        answer: "Streamlining",
      },
      {
        question: "What is a bottleneck?",
        options: [
          "A delay point",
          "A fast process",
          "A budget cut",
          "A design flaw",
        ],
        answer: "A delay point",
      },
      {
        question: "Why optimize workflows?",
        options: [
          "To increase costs",
          "To save time",
          "To confuse teams",
          "To avoid feedback",
        ],
        answer: "To save time",
      },
      {
        question: "What can automation do?",
        options: [
          "Slow processes",
          "Speed tasks",
          "Increase errors",
          "Skip planning",
        ],
        answer: "Speed tasks",
      },
    ],
  },
  {
    id: 29,
    title: "User Acceptance Testing (UAT)",
    content: `
        <p>UAT ensures solutions meet user needs. This lesson covers:</p>
        <ul>
          <li>Planning and executing UAT.</li>
          <li>Roles: users, BAs.</li>
          <li>Benefits: user satisfaction.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does UAT ensure?",
        options: [
          "Code works",
          "User needs are met",
          "Budget is met",
          "Design is pretty",
        ],
        answer: "User needs are met",
      },
      {
        question: "Who performs UAT?",
        options: ["Developers", "Users", "Testers only", "Clients only"],
        answer: "Users",
      },
      {
        question: "What is a step in UAT?",
        options: [
          "Writing code",
          "Executing tests",
          "Designing UI",
          "Budgeting",
        ],
        answer: "Executing tests",
      },
      {
        question: "Why use UAT?",
        options: [
          "To increase errors",
          "To ensure satisfaction",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To ensure satisfaction",
      },
      {
        question: "Who supports UAT?",
        options: [
          "Business Analysts",
          "Developers only",
          "Testers only",
          "Clients only",
        ],
        answer: "Business Analysts",
      },
    ],
  },
  {
    id: 30,
    title: "Metrics and KPIs for BAs",
    content: `
        <p>Metrics and KPIs measure BA success. This lesson explains:</p>
        <ul>
          <li>Examples: requirement accuracy, stakeholder satisfaction.</li>
          <li>Defining effective KPIs.</li>
          <li>Benefits: performance tracking.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What do KPIs measure?",
        options: ["Code quality", "BA success", "Team size", "Design"],
        answer: "BA success",
      },
      {
        question: "What is an example of a BA metric?",
        options: [
          "Lines of code",
          "Requirement accuracy",
          "Budget",
          "Hardware use",
        ],
        answer: "Requirement accuracy",
      },
      {
        question: "What makes a KPI effective?",
        options: [
          "Vague goals",
          "Clear targets",
          "Complex terms",
          "No tracking",
        ],
        answer: "Clear targets",
      },
      {
        question: "Why use metrics?",
        options: [
          "To confuse teams",
          "To track performance",
          "To increase costs",
          "To skip planning",
        ],
        answer: "To track performance",
      },
      {
        question: "What is stakeholder satisfaction?",
        options: [
          "A design metric",
          "A BA KPI",
          "A code metric",
          "A budget metric",
        ],
        answer: "A BA KPI",
      },
    ],
  },
  {
    id: 31,
    title: "Agile Estimation Techniques",
    content: `
        <p>Agile estimation predicts effort and time. This lesson covers:</p>
        <ul>
          <li>Methods: story points, planning poker.</li>
          <li>Benefits: better planning.</li>
          <li>Common pitfalls.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does Agile estimation predict?",
        options: ["Code quality", "Effort and time", "Team size", "Design"],
        answer: "Effort and time",
      },
      {
        question: "What is an estimation method?",
        options: ["Story points", "Budgeting", "Coding", "Testing"],
        answer: "Story points",
      },
      {
        question: "What is planning poker?",
        options: [
          "A game",
          "A group estimation",
          "A budget tool",
          "A design method",
        ],
        answer: "A group estimation",
      },
      {
        question: "Why use Agile estimation?",
        options: [
          "To increase delays",
          "To improve planning",
          "To confuse teams",
          "To skip testing",
        ],
        answer: "To improve planning",
      },
      {
        question: "What is a pitfall of estimation?",
        options: ["Accuracy", "Overconfidence", "Clear goals", "Team input"],
        answer: "Overconfidence",
      },
    ],
  },
  {
    id: 32,
    title: "Sprint Planning Overview",
    content: `
        <p>Sprint planning sets goals for Agile sprints. This lesson includes:</p>
        <ul>
          <li>Steps: define scope, estimate tasks.</li>
          <li>Roles: Product Owner, team.</li>
          <li>Benefits: focus, alignment.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does sprint planning set?",
        options: ["Code structure", "Sprint goals", "Team size", "Budget"],
        answer: "Sprint goals",
      },
      {
        question: "What is a step in sprint planning?",
        options: [
          "Writing code",
          "Estimating tasks",
          "Designing UI",
          "Budgeting",
        ],
        answer: "Estimating tasks",
      },
      {
        question: "Who defines the sprint scope?",
        options: ["Developers", "Product Owner", "Testers", "Clients"],
        answer: "Product Owner",
      },
      {
        question: "Why plan sprints?",
        options: [
          "To confuse teams",
          "To align efforts",
          "To increase costs",
          "To skip testing",
        ],
        answer: "To align efforts",
      },
      {
        question: "Who estimates tasks in sprint planning?",
        options: ["Team", "Product Owner", "Scrum Master", "Stakeholders"],
        answer: "Team",
      },
    ],
  },
  {
    id: 33,
    title: "Backlog Grooming",
    content: `
        <p>Backlog grooming refines the product backlog. This lesson covers:</p>
        <ul>
          <li>Tasks: prioritize, clarify, estimate.</li>
          <li>Frequency and timing.</li>
          <li>Benefits: readiness, efficiency.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does backlog grooming refine?",
        options: ["Code", "Product backlog", "Team roles", "Budget"],
        answer: "Product backlog",
      },
      {
        question: "What is a grooming task?",
        options: ["Writing code", "Prioritizing", "Designing UI", "Budgeting"],
        answer: "Prioritizing",
      },
      {
        question: "How often is grooming done?",
        options: ["Once a year", "Regularly", "Never", "Only at start"],
        answer: "Regularly",
      },
      {
        question: "Why groom the backlog?",
        options: [
          "To increase delays",
          "To ensure readiness",
          "To confuse teams",
          "To skip planning",
        ],
        answer: "To ensure readiness",
      },
      {
        question: "Who clarifies backlog items?",
        options: [
          "Developers only",
          "Product Owner",
          "Testers only",
          "Clients only",
        ],
        answer: "Product Owner",
      },
    ],
  },
  {
    id: 34,
    title: "Conflict Resolution for BAs",
    content: `
        <p>Conflict resolution maintains team harmony. This lesson explains:</p>
        <ul>
          <li>Techniques: negotiation, mediation.</li>
          <li>Steps to resolve disputes.</li>
          <li>Benefits: collaboration.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does conflict resolution maintain?",
        options: ["Code quality", "Team harmony", "Budget", "Design"],
        answer: "Team harmony",
      },
      {
        question: "What is a resolution technique?",
        options: ["Negotiation", "Coding", "Budgeting", "Testing"],
        answer: "Negotiation",
      },
      {
        question: "What is a step in conflict resolution?",
        options: [
          "Ignoring issues",
          "Listening to parties",
          "Writing code",
          "Designing UI",
        ],
        answer: "Listening to parties",
      },
      {
        question: "Why resolve conflicts?",
        options: [
          "To increase tension",
          "To improve collaboration",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To improve collaboration",
      },
      {
        question: "What does mediation involve?",
        options: ["A neutral party", "A developer", "A tester", "A client"],
        answer: "A neutral party",
      },
    ],
  },
  {
    id: 35,
    title: "Tool Overview: JIRA",
    content: `
        <p>JIRA is a tool for tracking projects. This lesson covers:</p>
        <ul>
          <li>Features: issues, workflows.</li>
          <li>Setting up a project.</li>
          <li>Benefits: visibility, control.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is JIRA used for?",
        options: [
          "Designing UI",
          "Tracking projects",
          "Writing code",
          "Budgeting",
        ],
        answer: "Tracking projects",
      },
      {
        question: "What is a JIRA feature?",
        options: ["Workflows", "Graphics", "Spreadsheets", "Presentations"],
        answer: "Workflows",
      },
      {
        question: "What does JIRA track?",
        options: ["Team size", "Issues", "Hardware", "Design"],
        answer: "Issues",
      },
      {
        question: "Why use JIRA?",
        options: [
          "To increase costs",
          "To improve visibility",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To improve visibility",
      },
      {
        question: "What is a step in JIRA setup?",
        options: [
          "Writing code",
          "Creating a project",
          "Designing UI",
          "Testing",
        ],
        answer: "Creating a project",
      },
    ],
  },
  {
    id: 36,
    title: "Tool Overview: Confluence",
    content: `
        <p>Confluence is a collaboration tool for documentation. This lesson includes:</p>
        <ul>
          <li>Features: pages, spaces.</li>
          <li>Using Confluence with teams.</li>
          <li>Benefits: knowledge sharing.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What is Confluence used for?",
        options: ["Coding", "Documentation", "Budgeting", "Testing"],
        answer: "Documentation",
      },
      {
        question: "What is a Confluence feature?",
        options: ["Pages", "Graphics", "Code", "Budget"],
        answer: "Pages",
      },
      {
        question: "What does Confluence support?",
        options: [
          "Team collaboration",
          "Solo work",
          "Hardware setup",
          "Design",
        ],
        answer: "Team collaboration",
      },
      {
        question: "Why use Confluence?",
        options: [
          "To increase errors",
          "To share knowledge",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To share knowledge",
      },
      {
        question: "What is a Confluence space?",
        options: [
          "A team meeting",
          "A content area",
          "A budget plan",
          "A design tool",
        ],
        answer: "A content area",
      },
    ],
  },
  {
    id: 37,
    title: "Tool Overview: Visio",
    content: `
        <p>Visio creates diagrams for processes. This lesson covers:</p>
        <ul>
          <li>Features: shapes, templates.</li>
          <li>Creating a flowchart.</li>
          <li>Benefits: visual clarity.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does Visio create?",
        options: ["Code", "Diagrams", "Budget", "Design"],
        answer: "Diagrams",
      },
      {
        question: "What is a Visio feature?",
        options: ["Shapes", "Code", "Spreadsheets", "Presentations"],
        answer: "Shapes",
      },
      {
        question: "What can you make in Visio?",
        options: ["A flowchart", "A budget", "A program", "A test"],
        answer: "A flowchart",
      },
      {
        question: "Why use Visio?",
        options: [
          "To increase complexity",
          "To clarify visuals",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To clarify visuals",
      },
      {
        question: "What helps build diagrams in Visio?",
        options: ["Templates", "Code", "Budget", "Team size"],
        answer: "Templates",
      },
    ],
  },
  {
    id: 38,
    title: "Business Rules Analysis",
    content: `
        <p>Business rules define operational constraints. This lesson explains:</p>
        <ul>
          <li>Types: policies, conditions.</li>
          <li>Documenting rules.</li>
          <li>Benefits: consistency.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What do business rules define?",
        options: ["Code", "Constraints", "Team size", "Design"],
        answer: "Constraints",
      },
      {
        question: "What is a type of business rule?",
        options: ["Policy", "Budget", "Code", "Test"],
        answer: "Policy",
      },
      {
        question: "What should rules be?",
        options: ["Vague", "Documented", "Complex", "Skipped"],
        answer: "Documented",
      },
      {
        question: "Why analyze business rules?",
        options: [
          "To increase errors",
          "To ensure consistency",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To ensure consistency",
      },
      {
        question: "What is a condition rule?",
        options: [
          "A budget limit",
          "A specific requirement",
          "A team role",
          "A design choice",
        ],
        answer: "A specific requirement",
      },
    ],
  },
  {
    id: 39,
    title: "Scenario Analysis",
    content: `
        <p>Scenario analysis explores possible outcomes. This lesson covers:</p>
        <ul>
          <li>Steps: define, analyze, evaluate.</li>
          <li>Using scenarios in planning.</li>
          <li>Benefits: preparedness.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does scenario analysis explore?",
        options: ["Code", "Outcomes", "Budget", "Design"],
        answer: "Outcomes",
      },
      {
        question: "What is a step in scenario analysis?",
        options: [
          "Writing code",
          "Defining scenarios",
          "Designing UI",
          "Budgeting",
        ],
        answer: "Defining scenarios",
      },
      {
        question: "Why use scenarios in planning?",
        options: [
          "To increase risks",
          "To prepare for outcomes",
          "To skip testing",
          "To confuse teams",
        ],
        answer: "To prepare for outcomes",
      },
      {
        question: "What is a benefit of scenario analysis?",
        options: ["Confusion", "Preparedness", "Higher costs", "Less clarity"],
        answer: "Preparedness",
      },
      {
        question: "What does evaluate mean in scenario analysis?",
        options: [
          "Assess outcomes",
          "Write code",
          "Design UI",
          "Skip planning",
        ],
        answer: "Assess outcomes",
      },
    ],
  },
  {
    id: 40,
    title: "State Transition Diagrams",
    content: `
        <p>State transition diagrams model system states. This lesson includes:</p>
        <ul>
          <li>Elements: states, transitions.</li>
          <li>Creating a diagram.</li>
          <li>Benefits: behavior clarity.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What do state transition diagrams model?",
        options: ["Code", "System states", "Budget", "Design"],
        answer: "System states",
      },
      {
        question: "What is an element of the diagram?",
        options: ["Transitions", "Budget", "Code", "Team size"],
        answer: "Transitions",
      },
      {
        question: "What does a state represent?",
        options: ["A condition", "A budget", "A team", "A design"],
        answer: "A condition",
      },
      {
        question: "Why use state transition diagrams?",
        options: [
          "To increase complexity",
          "To clarify behavior",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To clarify behavior",
      },
      {
        question: "What connects states?",
        options: ["Code", "Transitions", "Budget", "Design"],
        answer: "Transitions",
      },
    ],
  },
  {
    id: 41,
    title: "Entity-Relationship Diagrams (ERD)",
    content: `
        <p>ERDs model data relationships. This lesson covers:</p>
        <ul>
          <li>Components: entities, relationships, attributes.</li>
          <li>Building an ERD.</li>
          <li>Benefits: data structure clarity.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What do ERDs model?",
        options: ["Code", "Data relationships", "Budget", "Design"],
        answer: "Data relationships",
      },
      {
        question: "What is a component of an ERD?",
        options: ["Entities", "Budget", "Code", "Team size"],
        answer: "Entities",
      },
      {
        question: "What is an attribute?",
        options: [
          "A data property",
          "A budget item",
          "A team role",
          "A design choice",
        ],
        answer: "A data property",
      },
      {
        question: "Why use ERDs?",
        options: [
          "To increase complexity",
          "To clarify data structure",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To clarify data structure",
      },
      {
        question: "What connects entities?",
        options: ["Code", "Relationships", "Budget", "Design"],
        answer: "Relationships",
      },
    ],
  },
  {
    id: 42,
    title: "Lean Principles in BA",
    content: `
        <p>Lean principles focus on value and efficiency. This lesson explains:</p>
        <ul>
          <li>Key ideas: eliminate waste, optimize flow.</li>
          <li>Applying Lean in analysis.</li>
          <li>Benefits: cost savings.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What do Lean principles focus on?",
        options: ["Code", "Value and efficiency", "Budget", "Design"],
        answer: "Value and efficiency",
      },
      {
        question: "What is a Lean idea?",
        options: [
          "Eliminate waste",
          "Increase complexity",
          "Skip planning",
          "Add costs",
        ],
        answer: "Eliminate waste",
      },
      {
        question: "What does optimize flow mean?",
        options: [
          "Slow processes",
          "Speed workflows",
          "Increase errors",
          "Skip testing",
        ],
        answer: "Speed workflows",
      },
      {
        question: "Why use Lean in BA?",
        options: [
          "To increase waste",
          "To save costs",
          "To confuse teams",
          "To skip feedback",
        ],
        answer: "To save costs",
      },
      {
        question: "What is waste in Lean?",
        options: [
          "Useful tasks",
          "Unnecessary steps",
          "Team effort",
          "Design work",
        ],
        answer: "Unnecessary steps",
      },
    ],
  },
  {
    id: 43,
    title: "Six Sigma Basics for BAs",
    content: `
        <p>Six Sigma improves quality through data. This lesson covers:</p>
        <ul>
          <li>DMAIC: Define, Measure, Analyze, Improve, Control.</li>
          <li>Role of BAs in Six Sigma.</li>
          <li>Benefits: defect reduction.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does Six Sigma improve?",
        options: ["Code", "Quality", "Budget", "Design"],
        answer: "Quality",
      },
      {
        question: "What does DMAIC stand for?",
        options: [
          "Define, Measure, Analyze, Improve, Control",
          "Design, Model, Assess, Implement, Check",
          "Develop, Monitor, Adjust, Inspect, Complete",
          "Define, Manage, Assess, Improve, Cancel",
        ],
        answer: "Define, Measure, Analyze, Improve, Control",
      },
      {
        question: "What is the first step in DMAIC?",
        options: ["Measure", "Define", "Analyze", "Control"],
        answer: "Define",
      },
      {
        question: "Why use Six Sigma?",
        options: [
          "To increase defects",
          "To reduce defects",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To reduce defects",
      },
      {
        question: "What do BAs do in Six Sigma?",
        options: ["Write code", "Analyze data", "Design UI", "Budget"],
        answer: "Analyze data",
      },
    ],
  },
  {
    id: 44,
    title: "Facilitation Skills",
    content: `
        <p>Facilitation skills enhance meetings and workshops. This lesson includes:</p>
        <ul>
          <li>Techniques: active listening, questioning.</li>
          <li>Managing group dynamics.</li>
          <li>Benefits: productive sessions.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What do facilitation skills enhance?",
        options: ["Code", "Meetings", "Budget", "Design"],
        answer: "Meetings",
      },
      {
        question: "What is a facilitation technique?",
        options: ["Active listening", "Coding", "Budgeting", "Testing"],
        answer: "Active listening",
      },
      {
        question: "What does questioning help with?",
        options: ["Confusion", "Clarity", "Errors", "Delays"],
        answer: "Clarity",
      },
      {
        question: "Why use facilitation skills?",
        options: [
          "To waste time",
          "To improve productivity",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To improve productivity",
      },
      {
        question: "What is managing group dynamics?",
        options: [
          "Ignoring conflicts",
          "Handling interactions",
          "Writing code",
          "Designing UI",
        ],
        answer: "Handling interactions",
      },
    ],
  },
  {
    id: 45,
    title: "Requirements Validation",
    content: `
        <p>Requirements validation ensures accuracy. This lesson covers:</p>
        <ul>
          <li>Techniques: reviews, prototyping.</li>
          <li>Criteria: complete, feasible.</li>
          <li>Benefits: error prevention.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does requirements validation ensure?",
        options: ["Code works", "Accuracy", "Budget", "Design"],
        answer: "Accuracy",
      },
      {
        question: "What is a validation technique?",
        options: ["Prototyping", "Coding", "Budgeting", "Testing"],
        answer: "Prototyping",
      },
      {
        question: "What should requirements be?",
        options: ["Vague", "Complete", "Complex", "Skipped"],
        answer: "Complete",
      },
      {
        question: "Why validate requirements?",
        options: [
          "To increase errors",
          "To prevent errors",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To prevent errors",
      },
      {
        question: "What does feasible mean?",
        options: ["Impossible", "Achievable", "Expensive", "Unclear"],
        answer: "Achievable",
      },
    ],
  },
  {
    id: 46,
    title: "Project Closure Analysis",
    content: `
        <p>Project closure evaluates success. This lesson explains:</p>
        <ul>
          <li>Steps: review, document, close.</li>
          <li>Lessons learned process.</li>
          <li>Benefits: improvement.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does project closure evaluate?",
        options: ["Code", "Success", "Budget", "Design"],
        answer: "Success",
      },
      {
        question: "What is a closure step?",
        options: ["Writing code", "Reviewing", "Designing UI", "Budgeting"],
        answer: "Reviewing",
      },
      {
        question: "What is lessons learned?",
        options: [
          "A budget report",
          "A reflection process",
          "A code review",
          "A design plan",
        ],
        answer: "A reflection process",
      },
      {
        question: "Why analyze closure?",
        options: [
          "To increase costs",
          "To improve future projects",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To improve future projects",
      },
      {
        question: "What does documenting do?",
        options: [
          "Confuses teams",
          "Records outcomes",
          "Writes code",
          "Designs UI",
        ],
        answer: "Records outcomes",
      },
    ],
  },
  {
    id: 47,
    title: "Ethics in Business Analysis",
    content: `
        <p>Ethics guide BA decisions. This lesson covers:</p>
        <ul>
          <li>Principles: honesty, fairness.</li>
          <li>Handling ethical dilemmas.</li>
          <li>Benefits: trust, reputation.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What guides BA decisions?",
        options: ["Code", "Ethics", "Budget", "Design"],
        answer: "Ethics",
      },
      {
        question: "What is an ethical principle?",
        options: ["Honesty", "Deception", "Complexity", "Skipping"],
        answer: "Honesty",
      },
      {
        question: "What is an ethical dilemma?",
        options: [
          "A clear choice",
          "A moral conflict",
          "A budget issue",
          "A design flaw",
        ],
        answer: "A moral conflict",
      },
      {
        question: "Why focus on ethics?",
        options: [
          "To increase risks",
          "To build trust",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To build trust",
      },
      {
        question: "What does fairness ensure?",
        options: ["Bias", "Equal treatment", "Errors", "Delays"],
        answer: "Equal treatment",
      },
    ],
  },
  {
    id: 48,
    title: "Career Paths for BAs",
    content: `
        <p>BA careers offer growth opportunities. This lesson includes:</p>
        <ul>
          <li>Roles: BA, Senior BA, Product Owner.</li>
          <li>Skills for advancement.</li>
          <li>Benefits: versatility, impact.</li>
        </ul>
      `,
    quiz: [
      {
        question: "What does a BA career offer?",
        options: [
          "Code focus",
          "Growth opportunities",
          "Budget cuts",
          "Design roles",
        ],
        answer: "Growth opportunities",
      },
      {
        question: "What is a BA career role?",
        options: ["Product Owner", "Coder", "Designer", "Tester"],
        answer: "Product Owner",
      },
      {
        question: "What skill helps BA advancement?",
        options: [
          "Coding only",
          "Communication",
          "Budgeting only",
          "Testing only",
        ],
        answer: "Communication",
      },
      {
        question: "Why pursue a BA career?",
        options: [
          "To increase costs",
          "To make an impact",
          "To skip planning",
          "To confuse teams",
        ],
        answer: "To make an impact",
      },
      {
        question: "What is a Senior BA?",
        options: ["Entry-level", "Advanced BA", "Developer", "Designer"],
        answer: "Advanced BA",
      },
    ],
  },
];

export default lessons;
