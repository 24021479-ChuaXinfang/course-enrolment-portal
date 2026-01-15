const diplomas = [
  {
    name: "Applied AI & Analytics",
    id: "r13-applied-ai-&-analytics",
    code: "R13",
    modules: [
      {
        name: "Machine Learning for Predictive Analytics",
        code: "C387",
        id: "machine-learning-for-predictive-analytics",
        desc: "This module equips students with advanced knowledge and practical skills in data mining and machine learning, with emphasis on supervised and unsupervised algorithms for predictive modelling. It covers techniques in data preparation, exploratory data analysis, visualisation, and model development to extract meaningful and actionable insights. Students will gain hands-on experience in applying machine learning algorithms to build, optimise, and deploy predictive models for real-world business applications, strengthening their ability to translate data-driven insights into informed decision-making.",
        speaker: {
          name: "Geoff Leffler",
          email: "geoff_leffler@rp.edu.sg",
        },
      },
      {
        name: "Applied Large Language Models",
        code: "C388",
        id: "applied-large-language-models",
        desc: "This module equips students with the knowledge and practical skills to apply large language models (LLMs) in solving complex real-world problems. It explores applications such as automated customer support, sentiment analysis, code generation, recommendation systems, voice-based interfaces, and dynamic content creation. The module also introduces key techniques in fine-tuning, prompt engineering, and integrating LLMs within natural language processing and automation workflows. Learners will develop, evaluate, and optimise LLM-based solutions while addressing issues of performance, limitations, and ethical considerations, preparing them to apply generative AI responsibly and effectively across various domains.",
        speaker: {
          name: "Griffin Snow",
          email: "griffin_snow@rp.edu.sg",
        },
      },
    ],
  },
  {
    name: "Cybersecurity & Digital Forensics",
    id: "r55-cybersecurity-&-digital-forensics",
    code:"R55",
    modules: [
      {
        name: "Ethical Hacking",
        code: "C374",
        id: "ethical-hacking",
        desc: "This module introduces students to the fundamentals of penetration testing through a practical approach. Students will learn and practise the five different stages of penetration testing consisting of reconnaissance, scanning, gaining access, maintaining access, and documenting. They will learn how to use various penetration testing tools to collect important network information, perform vulnerabilities scans on computing and network systems, gaining access to systems, and generate penetration test reports. Mobile device penetration techniques will also be covered in this module. These topics will give students a comprehensive view on the job scope of penetration testers.",
        speaker: {
          name: "Ally Bode",
          email: "ally_bode@rp.edu.sg",
        },
      },
      {
        name: "Digital Forensics and Malware Analysis",
        code: "C331",
        id: "digital-forensics-and-malware-analysis",
        desc: "Digital Security includes learning the elements of IT security from a digital forensics perspective. It covers areas like Cryptography, Steganography, Intrusion Detection, and Malware where a forensics investigator should be familiar with in retrieving evidence from a digital media. Digital Forensics includes learning the principles and concepts of digital forensics investigation. It provides an understanding of the factors involve in retrieving digital information that is relevant to appropriate legal computer laws and will help students develop a methodical approach to implement the procedures in place.",
        speaker: {
          name: "Daniel Rohan",
          email: "daniel_rohan@rp.edu.sg",
        },
      },
    ],
  },
  {
    name: "Enterprise Cloud Computing & Management",
    id: "r12-enterprise-cloud-computing-&-management",
    code: "R12",
    modules: [
      {
        name: "Cloud Architecting and Administration",
        code: "C320",
        id: "cloud-architecting-and-administration",
        desc: "This module equips students with practical competencies to design, deploy, and manage cloud infrastructure across computer, networking, and storage services. Through guided labs and authentic industry scenarios, learners will configure cloud environments, implement automation, monitor system performance, and apply robust security controls to ensure scalable and resilient operations. The module emphasises lifecycle management, cost optimisation, and disaster recovery planning, aligned with current industry standards in cloud architecture and administration. The module prepares students for roles in cloud operations and infrastructure engineering, building on foundational knowledge in networking and operating systems. Upon completion, students will be ready to sit for the AWS Architecting on AWS – Associate certification examination.",
        speaker: {
          name: "Dixie Russel",
          email: "dixie_russel@rp.edu.sg",
        },
      },
      {
        name: "DevOps Essentials",
        code: "C270",
        id: "devOps-essentials",
        desc: "This module introduces students to the foundational concepts of DevOps through a practical, hands-on approach that integrates software development and IT operations. Students will gain practical applied experience in front-end deployment, back-end code management, and host optimisation, while learning to use automation tools such as Git, Docker, and Jenkins to establish continuous integration and continuous deployment (CI/CD) workflows. The module also examines the use of AI-powered tools to support predictive scaling and intelligent monitoring, as well as sustainable technology practices such as energy-efficient container orchestration and cloud-native deployment strategies.",
        speaker: {
          name: "Anna Rossi",
          email: "anna_rossi@rp.edu.sg",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "r18-financial-technology",
    code: "R18",
    modules: [
      {
        name: "Financial Technologies",
        code: "C369",
        id: "financial-technologies",
        desc: "This module offers a comprehensive study of Financial Technologies (FinTech) and their application in strengthening compliance processes within the financial and banking sectors. Learners will explore how emerging technologies are transforming compliance frameworks, particularly in Anti-Money Laundering (AML) transaction analysis and Know Your Customer (KYC) authentication. The module highlights how technology integrates with compliance practices to enhance the prevention, detection, and reporting of financial crimes. Through a blend of theory and practice, students will gain hands-on experience with tools and techniques used in Regulatory Technology (RegTech). They will learn to evaluate and implement appropriate technological solutions to address compliance challenges, while developing investigative and analytical skills to identify potential red flags and suspicious activities. Case studies, simulations, and the design of Requests for Information (RFIs) and mock Suspicious Transaction Reports (STRs) provide practical exposure aligned with current industry and regulatory standards.",
        speaker: {
          name: "Jenny Torres",
          email: "jenny_torres@rp.edu.sg",
        },
      },
      {
        name: "Distributed Ledger Technology Solutioning",
        code: "C373",
        id: "distributed-ledger-technology-solutioning",
        desc: "This module involves the study of different Distributed Ledger Technology (DLT) platforms. Students will compare the technical and functional capabilities of various DLT platforms and the applicability of such DLT platforms according to different business requirements. Students will learn to provision Blockchain-as-a-Service (BaaS) wherein a fully configured DLT/blockchain platform of choice can be deployed. Students will also learn to program and deploy smart contracts on the DLT/ blockchain to automate the execution of agreements, without intermediary involvement or time loss and develop web-based programs that connect or integrate to a BaaS for various reporting and workflow business requirements for stakeholders.",
        speaker: {
          name: "Milia Wu",
          email: "milia_wu@rp.edu.sg",
        },
      },
    ],
  },
  {
    name: "Information Technology",
    id: "r47-information-technology",
    code: "R47",
    modules: [
      {
        name: "Software Application Development",
        code: "C237",
        id: "software-application-development",
        desc: "This module introduces students to the key concepts and practices of developing software applications for the web. Students will learn to design, build, and deploy applications that integrate both front-end interfaces and back-end services. They will implement role-based authentication and core functions such as creating, retrieving, updating, and deleting data from databases. In addition, students will be introduced to the use of AI-powered development tools that enhance software design, coding efficiency, and testing workflows. Finally, they will deploy their applications to ensure functionality, reliability, and usability. The module establishes a strong foundation for more advanced web and mobile application development in subsequent modules.",
        speaker: {
          name: "Aran Nguyen",
          email: "aran_nguyen@rp.edu.sg",
        },
      },
      {
        name: "UI/UX Design for Apps",
        code: "C218",
        id: "ui-ux-design-for-app",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module. Students will also gain the skills to offer users an intuitive and responsive experience as they design UI for software platforms on both web and mobile devices. Through this module, students will also learn how to create interactive prototypes using prototyping tools.",
        speaker: {
          name: "Gwen Fabler",
          email: "gwen_fabler@rp.edu.sg",
        },
      },
    ],
  },
  {
    name: "Common ICT Programme",
    id: "r58-common-ICT-programme",
    code: "R58",
    modules: [
      {
        name: "Programming Fundamentals I",
        code: "C110",
        id: "programming-fundamentals-i",
        desc: "This module introduces students to computational thinking for problem-solving in computer programming and the core concepts and constructs applicable to most programming languages. Students will learn to apply computational thinking methods to decompose problems, identify patterns, apply abstraction in problems, and assemble a series of computer instructions that solve a problem using a computer programme. Students will be able to explain and write computer instructions that employ the use of variables, input and output statements, decision-making constructs, repetition constructs, and functions. They will also learn to test and debug computer programmes to ensure optimal performance of the programmes. The module also introduces techniques for effectively leveraging Generative AI (GenAI) tools to enhance learning and the coding process.",
        speaker: {
          name: "Beverley Armstrong",
          email: "beverley_armstrong@rp.edu.sg",
        },
      },
      {
        name: "Software Development Process",
        code: "C206",
        id: "software-development-process",
        desc: "The aim of this module is to introduce students to the fundamental principles and practices of planning, analysis, design, and testing within the context of a Software Development Life Cycle (SDLC). In this module, students will be given the opportunities to apply prevalent software development methodologies and corresponding frameworks to projects of different nature, and through this exposure, develop the ability to align a project’s traits with the appropriate software development methodology.",
        speaker: {
          name: "Aksh Khatri",
          email: "aksh_khatri@rp.edu.sg",
        },
      },
    ],
  }
];

export function getModule({ moduleId, diplomaId }) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id, code }) => ({ name, id, code }));
}
