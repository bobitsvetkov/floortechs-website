export type Page = 'home' | 'solutions' | 'work' | 'installation' | 'contact';

export interface Credentials {
    emailJsPublicKey: string;
    emailJsServiceKey: string;
    emailJsTemplateKey: string;
    recaptchaSiteKey: string;
    googleMapsApiKey: string;
}

// import { motion } from 'framer-motion';
// import { ArrowRight, Building2, Ruler, ShieldCheck } from 'lucide-react';

// const Work = () => {
//     const projects = [
//         {
//             title: "Deutsche Bank Trading Floor",
//             location: "Frankfurt Financial District",
//             scope: "32,000 sq ft",
//             details: {
//                 finish: "Ultra-high Performance Concrete",
//                 strength: "10,000 PSI",
//                 certifications: ["ISO 9001", "LEED Platinum"]
//             },
//             description: "Self-leveling concrete system with integrated power distribution and seismic resistance",
//             expertise: "Financial Infrastructure",
//             completionYear: "2024"
//         },
//         {
//             title: "MOMA Exhibition Halls",
//             location: "New York City",
//             scope: "28,000 sq ft",
//             details: {
//                 finish: "Polished Architectural Concrete",
//                 strength: "6,000 PSI",
//                 certifications: ["ACI Excellence", "ASTM E1745"]
//             },
//             description: "Temperature-controlled architectural concrete with integrated humidity management",
//             expertise: "Cultural Institutions",
//             completionYear: "2024"
//         },
//         {
//             title: "SpaceX Launch Complex",
//             location: "Cape Canaveral",
//             scope: "45,000 sq ft",
//             details: {
//                 finish: "High-Temperature Resistant Concrete",
//                 strength: "12,000 PSI",
//                 certifications: ["NASA Approved", "Military Spec"]
//             },
//             description: "Blast-resistant concrete with thermal protection system integration",
//             expertise: "Aerospace Infrastructure",
//             completionYear: "2023"
//         }
//     ];

//     return (
//         <section className= "min-h-screen bg-zinc-950 pt-20" >
//         <div className="max-w-7xl mx-auto px-4 py-24" >
//             <motion.div
//                     initial={ { opacity: 0, y: 20 } }
//     whileInView = {{ opacity: 1, y: 0 }
// }
// viewport = {{ once: true }}
// className = "mb-32"
//     >
//     <h1 className="text-8xl font-light tracking-tight text-zinc-100 mb-8" >
//         Infrastructure < br />
//         <span className="text-zinc-400" > Redefined </span>
//             </h1>
//             < div className = "grid grid-cols-1 md:grid-cols-3 gap-12 text-zinc-400 text-lg" >
//                 <p>Global leaders in architectural concrete solutions, specializing in mission - critical infrastructure.</p>
//                     < p > Pioneering advanced concrete technologies with a focus on sustainability and structural integrity.</p>
//                         < p > Setting new standards in performance concrete for the world's most demanding applications.</p>
//                             </div>
//                             </motion.div>

//                             < div className = "space-y-24" >
//                             {
//                                 projects.map((project, idx) => (
//                                     <motion.div
//                             key= { idx }
//                             initial = {{ opacity: 0, y: 40 }}
// whileInView = {{ opacity: 1, y: 0 }}
// viewport = {{ once: true }}
// transition = {{ duration: 0.7 }}
// className = "group"
//     >
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >
//         {/* Project Image */ }
//         < div className = "relative h-[600px] overflow-hidden" >
//             <img
//                                         src={ `/api/placeholder/1200/1400` }
// alt = { project.title }
// className = "w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent" />
//         </div>

// {/* Project Details */ }
// <div className="space-y-8" >
//     <div>
//     <div className="text-zinc-500 text-sm tracking-widest uppercase mb-4" >
//         { project.expertise }
//         </div>
//         < h2 className = "text-4xl font-light text-zinc-100 mb-6" >
//             { project.title }
//             </h2>
//             < p className = "text-zinc-400 text-lg leading-relaxed" >
//                 { project.description }
//                 </p>
//                 </div>

//                 < div className = "grid grid-cols-2 gap-8" >
//                     <div>
//                     <div className="flex items-center gap-2 text-zinc-400 mb-2" >
//                         <Building2 className="w-5 h-5" />
//                             <span className="text-sm" > Scale </span>
//                                 </div>
//                                 < div className = "text-zinc-200" > { project.scope } </div>
//                                     </div>
//                                     < div >
//                                     <div className="flex items-center gap-2 text-zinc-400 mb-2" >
//                                         <Ruler className="w-5 h-5" />
//                                             <span className="text-sm" > Strength </span>
//                                                 </div>
//                                                 < div className = "text-zinc-200" > { project.details.strength } </div>
//                                                     </div>
//                                                     </div>

//                                                     < div >
//                                                     <div className="flex items-center gap-2 text-zinc-400 mb-4" >
//                                                         <ShieldCheck className="w-5 h-5" />
//                                                             <span className="text-sm" > Certifications </span>
//                                                                 </div>
//                                                                 < div className = "flex gap-4" >
//                                                                 {
//                                                                     project.details.certifications.map((cert, i) => (
//                                                                         <span key= { i } className = "px-4 py-2 bg-zinc-900 text-zinc-300 text-sm" >
//                                                                         { cert }
//                                                                         </span>
//                                                                     ))
//                                                                 }
//                                                                     </div>
//                                                                     </div>

//                                                                     < motion.button
// whileHover = {{ x: 10 }}
// className = "flex items-center gap-3 text-zinc-200 hover:text-zinc-100
// transition - colors duration - 300 group"
//     >
//     View Technical Specifications
//         < ArrowRight className = "w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//             </div>
//             </div>
//             </motion.div>
//                     ))}
// </div>
//     </div>
//     </section>
//     );
// };

// export default Work;