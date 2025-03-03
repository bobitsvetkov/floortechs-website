import { FlooringService } from "../../types/types";
import firstProjectAfter from '../../assets/showcaseProjectAfter1.jpg';
import secondProjectAfter from '../../assets/showcaseProjectAfter2.jpg';
import thirdProjectAfter from '../../assets/showcaseProjectAfter3.jpg'
export const services: FlooringService[] = [
    {
      id: "resurfacing",
      title: "COMMERCIAL FLOOR RESURFACING",
      shortDescription: "Restore worn commercial flooring with minimal downtime.",
      fullDescription: "Our commercial floor resurfacing service provides complete restoration of worn surfaces while minimizing disruption to your business operations. We use advanced techniques and high-quality materials to transform damaged floors into durable, attractive surfaces.",
      benefits: [
        "Extends floor lifespan by up to 10 years",
        "Cost-effective alternative to full replacement",
        "Customizable finishes and textures",
        "Environmentally friendly options available"
      ],
      imageUrl: firstProjectAfter
    },
    {
      id: "inspections",
      title: "COMMERCIAL FLOORING INSPECTIONS",
      shortDescription: "Identify issues before they become costly problems.",
      fullDescription: "Our comprehensive commercial flooring inspection service helps identify potential issues before they develop into expensive problems. We provide detailed assessments of your flooring's condition, structural integrity, and compliance with industry standards.",
      benefits: [
        "Detailed written reports with recommendations",
        "Moisture testing and subfloor evaluation",
        "Compliance verification with industry standards",
        "Preventative maintenance planning"
      ],
      imageUrl: secondProjectAfter
    },
    {
      id: "rejuvenation",
      title: "COMMERCIAL FLOOR REJUVENATION",
      shortDescription: "Revitalize floor appearance without complete resurfacing.",
      fullDescription: "Our floor rejuvenation service brings new life to your commercial flooring without the need for extensive resurfacing. This cost-effective solution addresses surface-level wear and restores the visual appeal of your floors through deep cleaning, polishing, and protective treatments.",
      benefits: [
        "Deep cleaning and stain removal",
        "Surface polishing and buffing",
        "Color restoration and sealing",
        "Same-day completion for most spaces"
      ],
      imageUrl: thirdProjectAfter
    },
    {
      id: "repairs",
      title: "COMMERCIAL FLOOR REPAIRS",
      shortDescription: "Targeted fixes for damaged flooring of all types.",
      fullDescription: "Our commercial floor repair service addresses specific damage to all types of commercial flooring. We offer precise solutions for cracks, holes, loose tiles, damaged joints, and other common flooring issues to restore both functionality and appearance.",
      benefits: [
        "Crack and hole remediation",
        "Tile and plank replacement",
        "Joint sealing and reinforcement",
        "Subfloor issue correction"
      ],
      imageUrl: thirdProjectAfter
    },
    {
      id: "maintenance",
      title: "COMMERCIAL FLOOR MAINTENANCE",
      shortDescription: "Keep floors in optimal condition year-round.",
      fullDescription: "Our comprehensive floor maintenance programs ensure your commercial floors remain in optimal condition throughout the year. We develop customized care schedules based on your specific flooring type, traffic patterns, and business requirements.",
      benefits: [
        "Customized maintenance schedules",
        "Specialized cleaning for different floor types",
        "Traffic pattern management solutions",
        "Slip resistance treatment options"
      ],
      imageUrl: secondProjectAfter
    }
  ];