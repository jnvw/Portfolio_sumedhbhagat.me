import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    mongo,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Duke,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Ethical Hacking",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Summer Intern (Firmware Developer)",
      company_name: "ZOHO Corporation",
      icon: mongo,
      iconBg: "#383E56",
      date: "JUN 2024-AUG 2024",
      points: [
        "Applied knowledge of NFS and SMB protocols to build secure, scalable file-sharing systems.",
"Built and customized Embedded Linux images for BeagleBone Black using Yocto and CMake boot on QEMU.",
"Developed and tested device drivers for I2C, SPI, and UART interfaces on embedded platforms.",
      ],
    },
    {
      title: "Project Trainee (Firmware Developer)",
      company_name: "ZOHO Corporation",
      icon: mongo,
      iconBg: "#383E56",
      date: "JAN 2025-MAY 2025",
      points: [

"Implemented secure boot and firmware update mechanisms for embedded devices using OpenSSL and U-Boot.",
"Worked on Slim Bootloader and U-Boot to boot embedded platforms like Tiger Lake UP3 and BeagleBone.",
"Configured OpenBMC on Raspberry Pi 3 and developed a full-stack sensor monitoring UI using Vue.js, Redfish API, and D-Bus for remote server management and real-time telemetry visualization."

      ],
    },
    {
      title: "FrontEnd Development (Coursera)",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "DEC 2022",
      points: [
       " Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.", 
       "Learn to use React in relation to Javascript libraries and frameworks.",
        "Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.",
        "HTML,CSS,Tailwindcss,Bootrap, UI/UX design,React, JavaScript",
      ],
      
    },
    {
      title: "Programming Fundamentals (Coursera)",
      company_name: "Duke University",
      icon: Duke,
      iconBg: "white",
      date: "Jan 2023",
      points: [
         "This course helps to develop logical thinking & helps to understand how program would work before writing actual program. ",
         "Demonstrate problem solving skills by developing and implementing algorithms to solve problems.",
         "Derive problem specifications from problem statements.",
         "Develop algorithms using modular design principles to meet stated specifications.",
         "Algorithms, Programming Language, Concepts Problem Solving, C Programming",
      ],
    },
    {
      title: "Back End Development (Coursera)",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "FEB 2023 ",
      points: [
        "Gain the technical skills required to become a qualified back-end developer.",
        "Learn To ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers",

        "Learn to use programming systems including Python Syntax, Linux commands, Git, SQL, Version Control, Cloud Hosting, APIs, JSON, XML and more.",
        
        
       
      ],
      
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sumedh proved me wrong.",
      name: "Pandurang Jadhao",
      designation: "Owner",
      company: "RJ showroom",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sumedh does.",
      name: "Hariom Balang",
      designation: "Student",
      company: "YCCE Nagpur",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sumedh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Shubham Bhagat",
      designation: "Student",
      company: "YCHS",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-commerce App",
      description:
        "Built a full-stack E-commerce app using Django REST and ReactJS. Implemented JWT authentication, Twilio OTP, and Cashfree payment integration. Developed an admin dashboard to manage products, orders, and users with secure API access and real-time order creation.",
      tags: [
        {
          name: "DRF",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Dairy Diary: AES-256 Encrypted Diary App",
      description:"A secure, military-grade encrypted diary application that ensures absolute privacy using AES-256 encryption, ensuring that even the database administrator cannot read user entries.",    
      tags: [
        {
          name: "FLask",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "HTML/Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "Cryptography (Fernet/AES)",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Deepfake Detection Using Meta-Learning",
      description:
        "Implemented a robust deepfake image detection framework using MetaOptNet for meta-learning and Grad-CAM for explainability. Achieved strong generalization on unseen data with few-shot learning. Focused on adaptive model behavior and visual saliency to handle data drift effectively.",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "gradio",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "resnet18",
          color: "orange-text-gradient",
        },
        {
          name: "MetaOptNet",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Epileptic Seizure Prediction",
      description:
        "Developed a machine learning model with 97% accuracy to predict seizures using patient physiological data. Applied ensemble methods (Voting Classifier with SVM, KNN, RF, Logistic Regression) and K-Fold validation. Deployed a Gradio-based UI for user-friendly real-time predictions.",
      tags: [
        {
          name: "sklearn",
          color: "blue-text-gradient",
        },
        {
          name: "gradio",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "ensemble learning",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "File Management Toolkit",
      description:
        "Built a Python-based toolkit with Tkinter for organizing files by type. Included image editing, file format conversions, and templates for bill/resume creation. Integrated Huffman and RLE compression, plus digital signature support using hash embedding in file metadata.",
      tags: [
        {
          name: "tkinter",
          color: "blue-text-gradient",
        },
        {
          name: "hashlib",
          color: "green-text-gradient",
        },
        {
          name: "PIL",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "CollabShop –Collaborative E-commerce Platform",
      description:
        "Created a real-time collaborative shopping platform using Django Channels and WebSockets. Features include synchronized carts, live chat, multi-group sessions, dynamic dashboard with Chart.js, full e-commerce engine, order tracking, and secure Cashfree payments with server-side verification and printable invoice support.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "redis",
          color: "green-text-gradient",
        },
        {
          name: "websockets",
          color: "pink-text-gradient",
        },
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "orange-text-gradient",
        },
        {
          name: "cashfree",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://drive.google.com/file/d/19wjYCgKm7Jizyq_4n1tRFkSo2-wC4jCI/view?usp=drive_link",
    },
    {
      name: "transformer from scratch",
      description:
        "Built a transformer model from scratch using PyTorch, implementing multi-head self-attention, position-wise feedforward networks, and layer normalization. Trained on a large text corpus with a custom dataset and data loader, achieving state-of-the-art results on several NLP benchmarks.",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "gradio",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Real-Time Intrusion Detection System (IDS)",
      description:
        "Developed a modular IDS in Python using Scapy and multithreading for live traffic analysis. Combined rule-based and anomaly detection via Isolation Forest. Extracted flow-level features and structured alerts by severity. Designed for extensibility with automated testing using synthetic packets.",
      tags: [
        {
          name: "nmap",
          color: "blue-text-gradient",
        },
        {
          name: "Scapy",
          color: "green-text-gradient",
        },
        {
          name: "sklearn",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/jnvw/Intrusion-Detection-System",
    },
    {
      name: "Stock Market Prediction",
      description:
        "Developed a stock market prediction model using historical price data and RSA indicator. Implemented Regression architectures for time series forecasting, achieving high accuracy and robustness. Deployed the model with a user-friendly interface for real-time predictions.",
      tags: [
        {
          name: "sklearn",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter NB",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/jnvw",
    },
    {
      name: "Stock Market Prediction",
      description:
        "Developed a stock market prediction model using historical price data and RSA indicator. Implemented Regression architectures for time series forecasting, achieving high accuracy and robustness. Deployed the model with a user-friendly interface for real-time predictions.",
      tags: [
        {
          name: "sklearn",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter NB",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/jnvw/Stock_Analysis",
    },
    {
      name: "django videoconferencing app",
      description:
        "Created a real-time video calling application using Django  and ZegoCloud. Features include multi-party video calls, chat functionality, and user authentication.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
        {
          name: "ZegoCloud",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/jnvw/django_video_call_app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };