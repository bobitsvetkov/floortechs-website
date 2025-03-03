import { FlooringSolution } from "../../types/types";
import firstProjectAfter from '../../assets/showcaseProjectAfter1.jpg';
import secondProjectAfter from '../../assets/showcaseProjectAfter2.jpg';
import thirdProjectAfter from '../../assets/showcaseProjectAfter3.jpg'

export const flooringSolutions: FlooringSolution[] = [
  {
    id: "polished-concrete",
    title: "POLISHED CONCRETE FLOORING",
    tagline: "Sustainable, high-performance concrete finishing system",
    shortDescription: "Premium concrete transformation delivering exceptional durability and reduced maintenance costs.",
    fullDescription: "Transform ordinary concrete into a stunning, high-performance surface with our mechanical polishing system. This solution densifies and polishes existing concrete to create a beautiful, durable floor with excellent light reflectivity and minimal maintenance requirements. Perfect for facilities seeking long-term sustainability with architectural appeal.",
    idealFor: [
      { 
        name: "Retail & Commercial",
        description: "Creates visually appealing, easy-to-maintain surfaces that enhance lighting efficiency"
      },
      { 
        name: "Education & Institutional",
        description: "Provides durable, long-lasting floors with low lifecycle costs"
      },
      { 
        name: "Industrial & Manufacturing",
        description: "Delivers dust-proof surfaces with excellent abrasion resistance"
      }
    ],
    imageUrl: firstProjectAfter,
    primaryColor: "#2563EB"
  },
  {
    id: "urethane-flooring",
    title: "URETHANE FLOORING SOLUTIONS",
    tagline: "Heavy-duty systems for extreme industrial environments",
    shortDescription: "Industry-leading urethane technology engineered to withstand conditions with superior chemical resistance.",
    fullDescription: "Our urethane flooring systems provide unmatched chemical, thermal, and impact resistance for the most demanding industrial environments. These engineered solutions combine flexible urethane technology with specialized aggregate blends to create seamless, protective surfaces that maintain their integrity under extreme operational conditions.",
    idealFor: [
      { 
        name: "Food & Beverage Processing",
        description: "Withstands wash-downs, chemicals, and temperature fluctuations"
      },
      { 
        name: "Chemical Processing",
        description: "Provides protection against harsh chemicals and processing agents"
      },
      { 
        name: "Heavy Manufacturing",
        description: "Resists impact damage and heavy machinery traffic"
      }
    ],
    imageUrl: secondProjectAfter,
    primaryColor: "#2563EB"
  },
  {
    id: "commercial-coatings",
    title: "COMMERCIAL FLOOR COATINGS",
    tagline: "Versatile, protective finishes for commercial spaces",
    shortDescription: "Specialized coating systems optimizing performance, aesthetics, and cost-efficiency for commercial applications.",
    fullDescription: "Our commercial coating systems deliver reliable protection and enhanced aesthetics for a wide range of commercial environments. From thin-film epoxies to polyaspartic coatings, we offer specialized formulations engineered to address your specific facility requirements while providing excellent value and performance.",
    idealFor: [
      { 
        name: "Office & Commercial",
        description: "Provides durable, attractive surfaces with minimal maintenance"
      },
      { 
        name: "Healthcare & Institutional",
        description: "Delivers hygienic, easy-to-clean surfaces that support infection control"
      },
      { 
        name: "Automotive & Service",
        description: "Resists automotive fluids, tire marking and abrasion"
      }
    ],
    imageUrl: thirdProjectAfter,
    primaryColor: "#2563EB"
  },
  {
    id: "floor-resurfacers",
    title: "COMMERCIAL FLOOR RESURFACERS",
    tagline: "Structural restoration for deteriorated concrete",
    shortDescription: "Cost-effective concrete restoration that extends facility lifecycle without the disruption of full replacement.",
    fullDescription: "Our resurfacing systems restore and strengthen damaged concrete through engineered overlays. Addressing significant surface deterioration, deep spalling, and structural weaknesses, these solutions create new high-performance wearing surfaces without the cost and disruption of complete replacement.",
    idealFor: [
      { 
        name: "Warehousing & Distribution",
        description: "Restores flat, durable surfaces for forklift traffic and logistics operations"
      },
      { 
        name: "Parking & Transportation",
        description: "Provides structural reinforcement with waterproofing capabilities"
      },
      { 
        name: "Retail Renovation",
        description: "Transforms aged concrete into new surfaces without demolition"
      }
    ],
    imageUrl: secondProjectAfter,
    primaryColor: "#2563EB"
  },
  {
    id: "decorative-broadcast",
    title: "DECORATIVE BROADCAST",
    tagline: "Premium aesthetic systems with superior performance",
    shortDescription: "Surfaces with enhanced safety features and commercial-grade durability for client spaces.",
    fullDescription: "Our decorative broadcast systems combine visual appeal with industrial performance. By embedding customized aggregate blends into specialized polymer matrices, we create distinctive surfaces with enhanced slip resistance and textural depth. These systems allow for unlimited creative expression while maintaining commercial-grade durability.",
    idealFor: [
      { 
        name: "Hospitality & Retail",
        description: "Creates branded environments with custom aesthetics"
      },
      { 
        name: "Recreational Facilities",
        description: "Provides decorative, slip-resistant surfaces for wet areas"
      },
      { 
        name: "Corporate & Institutional",
        description: "Delivers high-end finishes that enhance architectural design"
      }
    ],
    imageUrl: firstProjectAfter,
    primaryColor: "#2563EB"
  }
];

export const getBenefits = (solution: FlooringSolution) => {
  const benefitsMap: {
    [key: string]: { title: string; description: string }[];
  } = {
    "polished-concrete": [
      {
        title: "Mechanical Polish",
        description:
          "Diamond-ground surface with increasing levels of refinement",
      },
      {
        title: "High Reflectivity",
        description:
          "Light-reflecting finish that reduces lighting requirements",
      },
      {
        title: "Minimal Maintenance",
        description: "Simple maintenance regimen with no waxing required",
      },
    ],
    "urethane-flooring": [
      {
        title: "Chemical Resistance",
        description:
          "Withstands acids, caustics, solvents and process chemicals",
      },
      {
        title: "Impact Absorption",
        description:
          "Flexible urethane matrix absorbs impacts without cracking",
      },
      {
        title: "Antimicrobial Options",
        description:
          "Available with built-in protection against bacteria and fungi",
      },
    ],
    "commercial-coatings": [
      {
        title: "Fast Application",
        description: "Rapid installation with minimal facility downtime",
      },
      {
        title: "Chemical Protection",
        description: "Resistant to common chemicals, stains and spills",
      },
      {
        title: "Cost-Effective",
        description: "Excellent value with competitive installation costs",
      },
    ],
    "floor-resurfacers": [
      {
        title: "Structural Repair",
        description: "Restores load-bearing capacity to deteriorated concrete",
      },
      {
        title: "Surface Leveling",
        description: "Self-leveling capabilities for uneven substrates",
      },
      {
        title: "Cost Savings",
        description: "80% less expensive than full concrete replacement",
      },
    ],
    "decorative-broadcast": [
      {
        title: "Texture Control",
        description: "Customizable slip resistance for specific environments",
      },
      {
        title: "Depth & Dimension",
        description: "Multi-layered appearance with visual sophistication",
      },
      {
        title: "Seamless Integration",
        description: "Transitions smoothly to other flooring systems",
      },
    ],
  };

  return benefitsMap[solution.id];
};
