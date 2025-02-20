import LineChart from "./assets/analytics-graph-svgrepo-com.svg"
import Activity from "./assets/data-monitor-svgrepo-com.svg"
import Brain from "./assets/brain-illustration-12-svgrepo-com.svg"
import Imagebanner from "./assets/doctors-wearing-simulation-with-hologram-medical-technology.png";
import LabImage from "./assets/lab.png";
import TransformingImage from "./assets/Transforming.png";

import Shi from "./assets/Shi.svg"
import Time from "./assets/time.svg"
import personTeam from "./assets/person-team.svg"
import dataMonitor from "./assets/data-monitor.svg"

// Data.js
export const navItems = [
  {
    NavName: 'Home',
    sectionId: 'home'
  },
  {
    NavName: 'Features',
    sectionId: 'features'
  },
  {
    NavName: 'Transforming',
    sectionId: 'transforming'
  },
  {
    NavName: 'Integration',
    sectionId: 'integration'
  },
  {
    NavName: 'Medication',
    sectionId: 'medication'
  }
];


export const  features = [
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Advanced risk assessment and health trajectory predictions using state-of-the-art AI models."
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts and notifications for critical changes."
    },
    {
      icon: Brain,
      title: "Real-time Monitoring",
      description: "AI-driven treatment suggestions and resource optimization recommendations."
    }
  ];
export const  TransformData = [
    {
      icon: Shi,
      title: "FHIR Compliant",
      description: "Seamless integration with existing healthcare systems using HL7 FHIR standards."
    },
    {
      icon: Time,
      title: "Time Efficiency",
      description: "Reduce decision-making time with instant AI-powered insights."
    },
    {
      icon: personTeam,
      title: "Improved Patient Care",
      description: "Better outcomes through predictive insights and early intervention."
    },
    {
      icon: dataMonitor,
      title: "Resource Optimization",
      description: "Smart allocation of healthcare resources based on predictive analytics."
    }
  ];



export const  IntegrationItem = [
    {
      title: "SMART on FHIR compatible",
    },
    {
      title: "Easy EHR integration",
    },
    {
      title: "Secure data handling",
    },
    {
      title: "Real-time synchronization",
    }
  ];


export const slideData = [
    {
      image: Imagebanner,
      title: "Advanced Healthcare Solutions",
      description: "Experience modern healthcare with AI-driven diagnostics and real-time monitoring.",
    },
    {
      image: LabImage,
      title: "Expert Medical Consultation",
      description: "Our team of experts provides 24/7 medical consultation and personalized care.",
    },
    {
      image: TransformingImage,
      title: "Seamless Insurance Integration",
      description: "Easily manage your health insurance and claims with our integrated platform.",
    },
  ];

  

  export const footerFirstItems = [
    {
      Footer: 'Features',
      sectionId: 'features'
    },
    {
      Footer: 'Integration',
      sectionId: 'integration'
    },
    {
      Footer: 'Documentation',
      sectionId: 'documentation'
    },
    {
      Footer: 'Pricing',
      sectionId: 'pricing'
    },
  
  ];
