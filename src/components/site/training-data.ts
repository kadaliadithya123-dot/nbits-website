export type CourseLevel = {
  level: string;
  title: string;
  weeks: string[];
};

export type Course = {
  slug: string;
  title: string;
  duration: string;
  overview: string;
  levels: CourseLevel[];
  tools?: string[];
  outcomes?: string[];
};

export type Track = {
  key: string;
  label: string;
  eyebrow: string;
  courses: string[];
};

export const COURSE_DETAILS: Course[] = [
  {
    slug: "computer-fundamentals-digital-marketing",
    title: "Computer Fundamentals with Digital Marketing",
    duration: "6–8 Weeks",
    overview:
      "Foundations of computing plus a hands-on introduction to modern digital marketing — SEO, social media, ads and analytics.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Computing & Marketing Fundamentals",
        weeks: [
          "Introduction to computers, operating systems and office productivity",
          "Internet essentials, browsers, cloud tools and collaboration",
          "Marketing mix, buyer personas and marketing channels",
          "SEO basics: keyword research and on-page fundamentals",
          "Google Analytics and content marketing introduction",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "SEO, Social & Paid Campaigns",
        weeks: [
          "In-depth SEO: on-page, off-page and technical",
          "Social media strategy for Facebook, Instagram, LinkedIn and X",
          "Google Ads and PPC campaign setup",
          "Email marketing automation & tools",
          "KPI monitoring and campaign analytics",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Advanced Growth & Automation",
        weeks: [
          "Advanced SEO and content optimisation",
          "Conversion rate optimisation & landing pages",
          "Marketing automation platforms",
          "Retargeting and remarketing strategies",
          "Executive dashboards and campaign reporting",
        ],
      },
    ],
    tools: ["Google Analytics", "Google Ads", "Meta Ads", "SEMrush", "Mailchimp"],
    outcomes: ["Plan and run an end-to-end digital campaign", "Portfolio with 2 mini projects + capstone"],
  },
  {
    slug: "tally-gst",
    title: "Tally Prime with GST",
    duration: "8 Weeks",
    overview:
      "Master computerised accounting with Tally Prime — from ledgers and vouchers to GST-compliant billing, payroll and financial analysis.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Accounting & Tally Essentials",
        weeks: [
          "Accounting principles and Tally Prime interface",
          "Company creation, ledgers and groups",
          "Accounting vouchers: receipt, payment, contra, journal",
          "Trial balance, P&L and balance sheet basics",
          "Practical: recording day-to-day transactions",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Advanced Vouchers, Inventory & GST Basics",
        weeks: [
          "Purchase, sales, credit/debit notes and BRS",
          "Inventory: stock groups, items, categories, units",
          "GST registration, tax ledgers, GST billing",
          "Reports: receipts/payments, stock summary, sales register",
          "Managing accounts & inventory for a mid-sized firm",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "GST Returns, Payroll & Financial Analysis",
        weeks: [
          "GST returns preparation and filing",
          "Payroll: employees, salary structures, attendance",
          "Budgets, cost centers and ratio analysis",
          "Cash flow, fund flow and management reports",
          "Capstone: full accounts, payroll and GST for a company",
        ],
      },
    ],
    tools: ["Tally Prime", "GST Portal", "MS Excel"],
    outcomes: ["Hands-on Tally, GST filing and payroll", "Job-ready for accounting & taxation roles"],
  },
  {
    slug: "full-stack-java",
    title: "Full Stack Java",
    duration: "8 Weeks",
    overview:
      "End-to-end Java development — from core Java and JDBC to Spring Boot, JSP, REST APIs and cloud deployment.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Core Java & Front-End Basics",
        weeks: [
          "Java syntax, OOP, collections and exceptions",
          "HTML, CSS and JavaScript fundamentals",
          "Bootstrap for responsive design",
          "IDE setup, Maven/Gradle and Git basics",
          "Integration: Java + static web pages",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "JSP, Servlets, JDBC & REST",
        weeks: [
          "Servlets and JSP fundamentals",
          "JDBC and MySQL integration",
          "REST APIs, JSON handling and CRUD",
          "Sessions, filters and basic authentication",
          "Mini project: Library Management Web App",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Spring Boot, Microservices & Cloud",
        weeks: [
          "Spring Boot, dependency injection and REST controllers",
          "Spring Data JPA and validation",
          "JWT security and role-based access",
          "Docker containers and cloud deployment",
          "Capstone: production-grade full-stack Java app",
        ],
      },
    ],
    tools: ["Java 17", "Spring Boot", "JSP", "MySQL", "Docker", "Git"],
  },
  {
    slug: "full-stack-python",
    title: "Full Stack Python",
    duration: "8 Weeks",
    overview:
      "Master Python full-stack development with Flask/Django, REST APIs, databases and cloud deployment.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Python & Front-End Foundations",
        weeks: [
          "Python data types, control flow, functions and OOP",
          "HTML, CSS and JavaScript basics",
          "Bootstrap responsive design",
          "Environment setup, Git & GitHub",
          "Integrating Python scripts with static pages",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Web Frameworks, REST APIs & DB",
        weeks: [
          "Flask/Django setup, routing and templates",
          "REST API design and CRUD",
          "MySQL/SQLite models and migrations",
          "Sessions, login/logout and user management",
          "Building and testing dynamic web apps",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Advanced Frameworks, Security & Deployment",
        weeks: [
          "Advanced Django/Flask: forms, middleware, ORM",
          "AJAX and REST API consumption on the front-end",
          "Deploying to Heroku, AWS or Azure",
          "Web security and JWT authentication",
          "Capstone: end-to-end full-stack Python project",
        ],
      },
    ],
    tools: ["Python", "Django", "Flask", "PostgreSQL", "Docker"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    duration: "8 Weeks",
    overview:
      "Design, build and deploy modern responsive web applications with HTML5, CSS3, JavaScript, React and Node.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "HTML, CSS & JavaScript Fundamentals",
        weeks: [
          "Web overview, tools setup (VS Code, Git)",
          "HTML5 structure, forms and semantic tags",
          "CSS layouts, Flexbox, Grid and responsive design",
          "JavaScript syntax, events and DOM manipulation",
          "Mini project: responsive personal portfolio",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Advanced JS & React",
        weeks: [
          "ES6+, promises and async programming",
          "React basics — components, props, state",
          "Routing and REST API integration",
          "Version control workflows with GitHub",
          "Mini project: weather or to-do app in React",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Back-End, Databases & Deployment",
        weeks: [
          "Node.js and Express REST APIs",
          "MongoDB CRUD and schema design",
          "JWT authentication and secure routes",
          "Deployment on Vercel / Netlify / Render",
          "Capstone: end-to-end full-stack web app",
        ],
      },
    ],
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    slug: "data-science-ai",
    title: "Data Science & Artificial Intelligence",
    duration: "10 Weeks",
    overview:
      "Learn the complete data-to-AI pipeline: Python, statistics, ML algorithms, deep learning and business intelligence.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Python, Data & ML Foundations",
        weeks: [
          "Python, NumPy and Pandas basics",
          "Data wrangling, cleaning and EDA",
          "Statistics, probability & visualisation",
          "Supervised learning — regression & classification",
          "Model evaluation and mini project",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Advanced ML, SQL & Generative AI",
        weeks: [
          "Decision trees, random forests, clustering",
          "SQL fundamentals and advanced queries",
          "LLMs, prompt engineering and OpenAI APIs",
          "Building a GenAI application",
          "Project: house-price / churn prediction",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Agentic AI, Automation & BI",
        weeks: [
          "Agentic AI workflows and function calling",
          "AI agents for automation and decisioning",
          "Power BI: modeling, DAX and dashboards",
          "Data storytelling & report automation",
          "Capstone: AI agent + BI dashboard",
        ],
      },
    ],
    tools: ["Python", "scikit-learn", "TensorFlow", "SQL", "Power BI", "LangChain"],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security & Ethical Hacking",
    duration: "8 Weeks",
    overview:
      "Progress from computer security foundations through ethical hacking and penetration testing to digital forensics.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Fundamentals & Computer Security",
        weeks: [
          "Cybersecurity landscape and career roles",
          "CIA triad, security policies and principles",
          "Networks, threats and attack vectors",
          "Encryption basics, malware and social engineering",
          "Lab setup, VMs and safe attack simulations",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "System Security & Ethical Hacking",
        weeks: [
          "Windows & Linux security architecture",
          "Reconnaissance, scanning and footprinting",
          "Firewalls, IDS/IPS and packet sniffing",
          "Vulnerability scanning: Nmap, Nessus, OpenVAS",
          "Hands-on network reconnaissance",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Penetration Testing & Forensics",
        weeks: [
          "Exploitation, privilege escalation, rootkits",
          "Penetration testing lifecycle",
          "OWASP Top 10, SQLi and XSS defenses",
          "Incident response and digital forensics",
          "Capstone: full simulated pentest & defense",
        ],
      },
    ],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit"],
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud Computing",
    duration: "8 Weeks",
    overview:
      "Master modern DevOps and cloud engineering: Git, Linux, Docker, Kubernetes, CI/CD and multi-cloud deployments.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "DevOps & Cloud Fundamentals",
        weeks: [
          "DevOps culture and cloud service models",
          "Git and GitHub collaboration workflow",
          "Linux CLI, permissions and shell scripting",
          "Docker: images, containers, registries",
          "Lab: containerise a demo application",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "CI/CD, IaC & Cloud Deployment",
        weeks: [
          "CI/CD concepts and pipeline design",
          "Jenkins and GitHub Actions",
          "Docker Compose and multi-container apps",
          "AWS/GCP/Azure — EC2, S3, IAM basics",
          "Terraform IaC and cloud monitoring",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Kubernetes, Security & E2E Pipelines",
        weeks: [
          "Advanced CI/CD and automated testing",
          "Kubernetes: pods, deployments, services",
          "Rolling updates and manifest design",
          "Cloud security and IAM policies",
          "Capstone: end-to-end DevOps pipeline",
        ],
      },
    ],
    tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Prometheus"],
  },
  {
    slug: "aws-cloud",
    title: "Amazon Web Services (AWS)",
    duration: "6 Weeks",
    overview:
      "Design, deploy and operate scalable applications on AWS with EC2, S3, RDS, IAM and load balancing.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "AWS Fundamentals",
        weeks: [
          "Cloud concepts and AWS global infrastructure",
          "IAM users, roles and policies",
          "EC2, EBS and key pairs",
          "S3 storage classes and static hosting",
          "VPC, subnets and security groups",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Compute, Storage & Databases",
        weeks: [
          "Elastic Load Balancing and Auto Scaling",
          "RDS and DynamoDB fundamentals",
          "CloudWatch monitoring and alerts",
          "Route 53 and CloudFront basics",
          "Project: deploy a dynamic web app on EC2 + RDS",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Serverless, DevOps & Well-Architected",
        weeks: [
          "Lambda, API Gateway and event-driven design",
          "CI/CD with CodePipeline and CodeBuild",
          "Security best practices and cost optimisation",
          "Well-Architected Framework pillars",
          "Capstone: highly available AWS architecture",
        ],
      },
    ],
    tools: ["AWS Console", "CLI", "CloudFormation", "Lambda", "S3", "EC2"],
  },
  {
    slug: "power-bi",
    title: "Power BI & Business Analytics",
    duration: "6 Weeks",
    overview:
      "Turn raw data into executive dashboards using Power BI, DAX and modern data modeling.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Power BI Foundations",
        weeks: [
          "Power BI ecosystem and Desktop overview",
          "Connecting data sources and Power Query",
          "Data cleaning and transformation",
          "Basic visuals and formatting",
          "Publishing to Power BI Service",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Modeling & DAX",
        weeks: [
          "Star schema and relationships",
          "DAX fundamentals: measures & calculated columns",
          "Time intelligence functions",
          "Custom visuals and drill-through",
          "Mini project: sales performance dashboard",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Advanced Analytics & Deployment",
        weeks: [
          "Advanced DAX patterns",
          "Row-level security and workspaces",
          "AI visuals and Q&A",
          "Automated refresh and gateways",
          "Capstone: executive employee-performance dashboard",
        ],
      },
    ],
    tools: ["Power BI Desktop", "Power Query", "DAX", "Excel"],
  },
  {
    slug: "iot",
    title: "Internet of Things (IoT)",
    duration: "8 Weeks",
    overview:
      "Build smart, connected systems with NodeMCU, sensors and Raspberry Pi through hands-on labs.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "IoT Fundamentals & NodeMCU",
        weeks: [
          "IoT concepts, architecture and applications",
          "NodeMCU introduction, setup and pinout",
          "GPIO control, digital I/O, LED & buzzer",
          "Simple sensors and Tinkercad simulations",
          "Mini project: sensor-based automatic light",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Sensors, Actuators & Networking",
        weeks: [
          "Interfacing temperature, humidity, motion sensors",
          "Actuators: relays, DC and servo motors",
          "Serial communication and debugging",
          "Wi-Fi setup for NodeMCU",
          "Mini project: smart-home automation demo",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Raspberry Pi & System Integration",
        weeks: [
          "Raspberry Pi setup, OS and Python scripting",
          "GPIO control and sensor reads on Pi",
          "Data logging and local storage",
          "NodeMCU + Pi integration over local network",
          "Capstone: smart IoT monitoring system",
        ],
      },
    ],
    tools: ["NodeMCU (ESP8266)", "Raspberry Pi", "Arduino IDE", "Tinkercad", "Python"],
  },
  {
    slug: "embedded-systems",
    title: "Embedded Systems",
    duration: "8 Weeks",
    overview:
      "Design and program embedded systems with Arduino, sensors, actuators and real-time simulation on Tinkercad.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Fundamentals & Arduino",
        weeks: [
          "Embedded architecture and applications",
          "Arduino Uno hardware and pin configuration",
          "Programming basics in Arduino IDE (C)",
          "Interfacing LEDs, switches, buzzers, potentiometers",
          "Mini project: LED pattern generator",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Sensors & Actuators",
        weeks: [
          "Analog & digital sensors — LDR, temperature, ultrasonic",
          "DC and servo motor control, relay interfacing",
          "16x2 LCD interfacing and UART basics",
          "Simulation practice on Tinkercad",
          "Mini project: temperature-controlled fan",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "System Integration & Real-Time",
        weeks: [
          "Timers, PWM and interrupts",
          "ADC and EEPROM data logging",
          "Multi-module integration",
          "Final project design and documentation",
          "Capstone: embedded home-automation simulation",
        ],
      },
    ],
    tools: ["Arduino", "Embedded C", "Tinkercad", "STM32", "ARM Cortex"],
  },
  {
    slug: "vlsi",
    title: "VLSI Design",
    duration: "8 Weeks",
    overview:
      "From digital design foundations to RTL, synthesis and physical design using Verilog and industry tools.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Digital Design Foundations",
        weeks: [
          "Number systems and Boolean algebra",
          "Combinational and sequential logic",
          "Introduction to Verilog HDL",
          "Simulation and testbenches",
          "Mini project: digital clock in Verilog",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Verilog, Simulation & RTL",
        weeks: [
          "Advanced Verilog and finite state machines",
          "RTL design methodologies",
          "Simulation with modern VLSI tools",
          "Design verification basics",
          "Mini project: traffic light controller",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Synthesis & Physical Design",
        weeks: [
          "Logic synthesis and timing analysis",
          "Floor planning and placement",
          "Routing, DRC and LVS",
          "Low-power design techniques",
          "Capstone: end-to-end RTL to GDS",
        ],
      },
    ],
    tools: ["Verilog", "Xilinx Vivado", "ModelSim", "Cadence"],
  },
  {
    slug: "blockchain",
    title: "Blockchain Technologies",
    duration: "8 Weeks",
    overview:
      "Master blockchain fundamentals, Solidity smart contracts and decentralised application (dApp) development.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Blockchain Foundations",
        weeks: [
          "Distributed ledgers, hashing and cryptography",
          "Bitcoin, Ethereum and consensus mechanisms",
          "Wallets, keys and transactions",
          "Introduction to smart contracts",
          "Setting up development environment",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Solidity & dApps",
        weeks: [
          "Solidity syntax and contract structure",
          "ERC-20 and ERC-721 tokens",
          "Web3.js and MetaMask integration",
          "Deploying to test networks",
          "Mini project: Voting System dApp",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Security, DeFi & Enterprise",
        weeks: [
          "Smart contract security and audits",
          "DeFi protocols and NFTs",
          "IPFS and decentralised storage",
          "Layer-2, sidechains and enterprise blockchain",
          "Capstone: full dApp with front-end",
        ],
      },
    ],
    tools: ["Solidity", "Hardhat", "Ethers.js", "MetaMask", "IPFS"],
  },
  {
    slug: "digital-marketing",
    title: "Advanced Digital Marketing",
    duration: "8 Weeks",
    overview:
      "Become a job-ready digital marketer covering SEO, SEM, social, email, analytics and AI-driven growth.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Foundations & SEO",
        weeks: [
          "Digital marketing ecosystem & funnels",
          "Website structure and UX",
          "SEO: on-page, off-page, technical",
          "Keyword research and audits",
          "Content marketing basics",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Paid Media & Analytics",
        weeks: [
          "Meta Ads: audience targeting and creative",
          "Google Ads: search, display, video",
          "Email marketing automation",
          "Google Analytics (GA4)",
          "Mini project: multi-channel campaign",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Growth, AI & Career",
        weeks: [
          "Conversion rate optimisation",
          "AI tools in digital marketing",
          "Influencer & growth marketing",
          "Live client project and reporting",
          "Freelancing, resume and interviews",
        ],
      },
    ],
    tools: ["Google Ads", "Meta Ads", "GA4", "Search Console", "Mailchimp"],
  },
  {
    slug: "hrm",
    title: "Human Resource Management",
    duration: "8 Weeks",
    overview:
      "End-to-end HR training: recruitment, performance, payroll, labour laws, HR analytics and modern HR tech.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "HRM Fundamentals",
        weeks: [
          "HR roles, structures and employee lifecycle",
          "HR policies and common HR software",
          "Fundamentals of labour laws",
          "Employee relations and communication",
          "HR documentation and process flowcharts",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Recruitment, Performance & Engagement",
        weeks: [
          "Recruitment and selection techniques",
          "Onboarding and induction design",
          "Performance management and KPIs",
          "Employee engagement and retention",
          "HRIS basics and records management",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Strategic HR & Analytics",
        weeks: [
          "Strategic HR and workforce planning",
          "Compensation and benefits",
          "HR analytics and dashboards",
          "Talent management and succession",
          "Culture, conflict resolution and capstone",
        ],
      },
    ],
    tools: ["Excel", "HRIS platforms", "Power BI (HR analytics)"],
  },
  {
    slug: "business-analysis",
    title: "Business Analysis",
    duration: "8 Weeks",
    overview:
      "Bridge business and technology: requirement gathering, process modeling, analytics and stakeholder reporting.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "BA Foundations",
        weeks: [
          "Role of a business analyst",
          "Requirement elicitation techniques",
          "Business process modeling (BPMN)",
          "SDLC and Agile fundamentals",
          "Documentation: BRD and FRD",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Data & Tools",
        weeks: [
          "Excel for analysts and SQL basics",
          "Data visualisation with Power BI/Tableau",
          "Wireframing and prototyping",
          "User stories and backlog management",
          "Mini project: process improvement analysis",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Strategic Analysis & Capstone",
        weeks: [
          "SWOT, PESTLE and gap analysis",
          "Stakeholder management",
          "Change management basics",
          "Case-study driven capstone",
          "Interview prep and portfolio",
        ],
      },
    ],
    tools: ["Excel", "SQL", "Power BI", "Jira", "Figma"],
  },
  {
    slug: "quantum-computing",
    title: "Quantum Computing",
    duration: "8 Weeks",
    overview:
      "From qubits to Qiskit — learn quantum algorithms, cryptography and quantum machine learning on real IBM hardware.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Quantum Foundations",
        weeks: [
          "Classical vs quantum computing",
          "Qubits, Bloch sphere and quantum states",
          "Pauli, Hadamard and CNOT gates",
          "Superposition, entanglement and Bell states",
          "Mini project: quantum circuit simulator",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Algorithms & Qiskit",
        weeks: [
          "Deutsch and Grover's algorithms",
          "Shor's algorithm basics and QFT",
          "Introduction to Qiskit",
          "Running simulations on IBM Quantum",
          "Mini project: quantum teleportation circuit",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Cryptography & Quantum ML",
        weeks: [
          "BB84 protocol and QKD",
          "Quantum neural networks",
          "Hybrid quantum-classical models",
          "PennyLane, Cirq and Qiskit ecosystem",
          "Capstone: QKD system or quantum ML classifier",
        ],
      },
    ],
    tools: ["Python", "Qiskit", "IBM Quantum", "PennyLane", "Cirq"],
  },
  {
    slug: "robotics",
    title: "Robotics",
    duration: "8 Weeks",
    overview:
      "Design intelligent robotic systems combining Arduino/Raspberry Pi, sensors, motors and AI logic.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Robotics Fundamentals",
        weeks: [
          "Robotics history and applications",
          "Robot components: sensors, actuators, controllers",
          "Arduino programming for robotics",
          "Motor control and driver circuits",
          "Mini project: line-following robot",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Sensors, Automation & Vision",
        weeks: [
          "Ultrasonic and IR-based navigation",
          "Servo control and robotic arms",
          "Basic computer vision with OpenCV",
          "Sensor fusion and decision making",
          "Mini project: maze-solving robot car",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "AI Robotics & ROS",
        weeks: [
          "Introduction to ROS and Gazebo",
          "Path planning and control",
          "AI-based object recognition",
          "Autonomous decision systems",
          "Capstone: autonomous robotic assistant",
        ],
      },
    ],
    tools: ["Arduino", "Raspberry Pi", "ROS", "Gazebo", "OpenCV", "Python"],
  },
  {
    slug: "3d-printing",
    title: "3D Printing & Design",
    duration: "6 Weeks",
    overview:
      "Model, slice and fabricate real components using modern CAD tools and additive manufacturing workflows.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "CAD & 3D Design",
        weeks: [
          "Introduction to 3D printing and use cases",
          "CAD basics with Tinkercad/Fusion 360",
          "Sketching, extrusion and revolve operations",
          "Assemblies and parametric design",
          "Mini project: printable everyday object",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Slicing & Printing",
        weeks: [
          "STL export and mesh repair",
          "Slicing with Cura/PrusaSlicer",
          "Materials: PLA, ABS, PETG basics",
          "Print settings, supports and adhesion",
          "Mini project: functional mechanical part",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Advanced Workflow & Post-Processing",
        weeks: [
          "Advanced Fusion 360 modeling",
          "Design for additive manufacturing (DfAM)",
          "Post-processing and finishing",
          "Prototyping workflow end-to-end",
          "Capstone: full CAD-to-part project",
        ],
      },
    ],
    tools: ["Fusion 360", "Tinkercad", "Cura", "PrusaSlicer"],
  },
  {
    slug: "life-sciences",
    title: "Life Sciences & Microbiology",
    duration: "8 Weeks",
    overview:
      "Hands-on lab program in microbiology, biotechnology applications, molecular techniques and research methods.",
    levels: [
      {
        level: "Level 1 – Beginner",
        title: "Life Sciences & Microbiology Basics",
        weeks: [
          "Cell structure and function",
          "Microbial classification: bacteria, fungi, viruses",
          "Laboratory safety and aseptic techniques",
          "Basic staining: Gram and simple staining",
          "Microscopy and microbial observation",
        ],
      },
      {
        level: "Level 2 – Intermediate",
        title: "Culture & Biotechnology",
        weeks: [
          "Culture techniques on solid and liquid media",
          "Sterilisation and disinfection",
          "Advanced microscopy techniques",
          "Antibiotic sensitivity testing",
          "Biotechnology applications overview",
        ],
      },
      {
        level: "Level 3 – Advanced",
        title: "Molecular Techniques & Industry",
        weeks: [
          "PCR and gel electrophoresis basics",
          "Microbial growth kinetics and bioinformatics",
          "Quality control and safety protocols",
          "Industrial microbiology case studies",
          "Research project simulation",
        ],
      },
    ],
    tools: ["Microscopy", "Gram staining", "PCR", "Gel electrophoresis"],
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSE_DETAILS.find((c) => c.slug === slug);
}

// Map degree programs → applicable course slugs
import { CSE_TRACK } from "./tracks/cse";
import { ECE_TRACK } from "./tracks/ece";
import { BSC_TRACK } from "./tracks/bsc";
import { BCOM_TRACK } from "./tracks/bcom";
import { BA_TRACK } from "./tracks/ba";
import { BBA_TRACK } from "./tracks/bba";
import { BCA_TRACK } from "./tracks/bca";
import { BBM_TRACK } from "./tracks/bbm";
import { CIVIL_TRACK } from "./tracks/civil";
import { ECM_TRACK } from "./tracks/ecm";
import { IT_TRACK } from "./tracks/it";
import { EEE_TRACK } from "./tracks/eee";
import { MECH_TRACK } from "./tracks/mech";
import { AIML_TRACK } from "./tracks/aiml";
import { ANY_TRACK } from "./tracks/any";

export const DEGREE_TRACKS: {
  key: string;
  label: string;
  eyebrow: string;
  courses: string[];
}[] = [
  BSC_TRACK,
  BCOM_TRACK,
  BA_TRACK,
  BBA_TRACK,
  BCA_TRACK,
  BBM_TRACK,
];

export const BTECH_TRACKS: {
  key: string;
  label: string;
  eyebrow: string;
  courses: string[];
}[] = [
  CSE_TRACK,
  ECE_TRACK,
  CIVIL_TRACK,
  ECM_TRACK,
  IT_TRACK,
  EEE_TRACK,
  MECH_TRACK,
  AIML_TRACK,
  ANY_TRACK,
];

export function getTrack(key: string) {
  const all = [...DEGREE_TRACKS, ...BTECH_TRACKS];
  try {
    // Developer debug: log lookups when navigating to a track
    // eslint-disable-next-line no-console
    console.log('[getTrack] lookup', key, 'available:', all.map((t) => t.key));
  } catch (e) {
    // ignore
  }
  return all.find((t) => t.key === key);
}
