// const ProductSection = () => {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1414690165279-49ab0a9a7e66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "MonNit",
//       // description: "Simplifying remote monitoring with precision",
//       description:
//         "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "HawKeye",
//       // description: "Delivering real-time analytics for informed decisions.",
//       description:
//         "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//     },
//     // {
//     //   image:
//     //     "https://plus.unsplash.com/premium_photo-1706259481452-f857c96ceaca?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //   title: "TracKIT",
//     //   description: "Tracking and managing assets with ease.",
//     // },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1681488060968-ee7b2f6d8751?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "ChatIT",
//       // description: "Smart chat solutions for seamless customer interactions.",
//       description:
//         "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1681487810054-4bced4f73e24?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "De-Fore",
//       // description: "Time-series forecasting made simple",
//       description:
//         "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Py-Transfer Learning",
//       // description: "Utilize pre-trained models for rapid AI deployment",
//       description:
//         "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "NiroG",
//       // description: "AI-powered solutions for healthcare",
//       description:
//         "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "SearchBot",
//       // description: "Empowering industries with intelligent search",
//       description:
//         "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "PratimBimba",
//       // description: "Empowering industries with intelligent search",
//       description:
//         "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Space Analytics",
//       // description: "Empowering industries with intelligent search",
//       description:
//         "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Drone & Robotics",
//       // description: "Empowering industries with intelligent search",
//       description:
//         "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Cattle Monitoring",
//       // description: "Empowering industries with intelligent search",
//       description:
//         "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "AgriTech",
//       // description: "Empowering industries with intelligent search",
//       description:
//         "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//     },
//   ];

//   return (
//     <section className="container mx-auto px-6 py-16 text-center">
//       <h2 className="text-4xl font-bold mb-4">Our Products</h2>
//       <p className="text-lg mb-10">
//         Innovative tools designed to solve real-world challenges.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl"
//           >
//             <div className="relative group">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
//               />
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
//               <p className="text-base text-secondary mt-2">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

// import { motion } from "framer-motion";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
// } from "lucide-react";

// const ProductSection = () => {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//       title: "MonNit",
//       description:
//         "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//       icon: Users,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//       title: "HawKeye",
//       description:
//         "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//       icon: Eye,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//       title: "ChatIT",
//       description:
//         "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//       icon: MessageSquare,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//       title: "De-Fore",
//       description:
//         "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//       icon: TrendingUp,
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
//       title: "Py-Transfer Learning",
//       description:
//         "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//       icon: ImageIcon,
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//       title: "NiroG",
//       description:
//         "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//       icon: Heart,
//       gradient: "from-pink-500 to-rose-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
//       title: "SearchBot",
//       description:
//         "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//       icon: Search,
//       gradient: "from-cyan-500 to-teal-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
//       title: "PratimBimba",
//       description:
//         "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//       icon: Sparkles,
//       gradient: "from-violet-500 to-purple-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
//       title: "Space Analytics",
//       description:
//         "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//       icon: Satellite,
//       gradient: "from-slate-500 to-gray-600",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
//       title: "Drone & Robotics",
//       description:
//         "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//       icon: Plane,
//       gradient: "from-amber-500 to-orange-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
//       title: "Cattle Monitoring",
//       description:
//         "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//       icon: Beef,
//       gradient: "from-lime-500 to-green-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
//       title: "AgriTech",
//       description:
//         "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//       icon: Sprout,
//       gradient: "from-emerald-500 to-teal-500",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       scale: 0.9,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <section className="container mx-auto px-6 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
//           Our Products
//         </h2>
//         <p className="text-lg text-highlight max-w-2xl mx-auto">
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//       >
//         {data.map((item, index) => {
//           const IconComponent = item.icon;

//           return (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{
//                 y: -12,
//                 transition: { duration: 0.3 },
//               }}
//               className="group relative"
//             >
//               {/* Card Container */}
//               <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col">
//                 {/* Image Section with Gradient Overlay */}
//                 <div className="relative h-56 overflow-hidden">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                   />

//                   {/* Gradient Overlay */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
//                   />

//                   {/* Floating Icon */}
//                   <motion.div
//                     className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
//                     whileHover={{ rotate: 360, scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <IconComponent className="w-6 h-6 text-white" />
//                   </motion.div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 flex-1 flex flex-col">
//                   <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-highlight leading-relaxed">
//                     {item.description}
//                   </p>

//                   {/* Bottom Accent Line */}
//                   <motion.div
//                     className={`mt-6 h-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//                     initial={{ width: "0%" }}
//                     whileInView={{ width: "100%" }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: index * 0.1 }}
//                   />
//                 </div>

//                 {/* Hover Effect Border */}
//                 <div
//                   className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500 pointer-events-none`}
//                 />
//               </div>

//               {/* Floating Glow Effect */}
//               <div
//                 className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
//               />
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

// export default ProductSection;

// import { motion } from "framer-motion";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
// } from "lucide-react";

// const ProductSection = () => {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//       title: "MonNit",
//       description:
//         "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//       icon: Users,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//       title: "HawKeye",
//       description:
//         "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//       icon: Eye,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//       title: "ChatIT",
//       description:
//         "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//       icon: MessageSquare,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//       title: "De-Fore",
//       description:
//         "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//       icon: TrendingUp,
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
//       title: "Py-Transfer Learning",
//       description:
//         "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//       icon: ImageIcon,
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//       title: "NiroG",
//       description:
//         "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//       icon: Heart,
//       gradient: "from-pink-500 to-rose-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
//       title: "SearchBot",
//       description:
//         "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//       icon: Search,
//       gradient: "from-cyan-500 to-teal-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
//       title: "PratimBimba",
//       description:
//         "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//       icon: Sparkles,
//       gradient: "from-violet-500 to-purple-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
//       title: "Space Analytics",
//       description:
//         "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//       icon: Satellite,
//       gradient: "from-slate-500 to-gray-600",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
//       title: "Drone & Robotics",
//       description:
//         "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//       icon: Plane,
//       gradient: "from-amber-500 to-orange-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
//       title: "Cattle Monitoring",
//       description:
//         "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//       icon: Beef,
//       gradient: "from-lime-500 to-green-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
//       title: "AgriTech",
//       description:
//         "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//       icon: Sprout,
//       gradient: "from-emerald-500 to-teal-500",
//     },
//   ];

//   return (
//     <section className="container mx-auto px-6 py-20">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center mb-20"
//       >
//         <motion.h2
//           className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent"
//           initial={{ scale: 0.9 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Our Products
//         </motion.h2>
//         <motion.p
//           className="text-xl text-highlight max-w-3xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </motion.p>
//       </motion.div>

//       {/* Products Grid */}
//       <div className="space-y-24">
//         {data.map((item, index) => {
//           const IconComponent = item.icon;
//           const isEven = index % 2 === 0;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="relative"
//             >
//               {/* Background Decoration */}
//               <motion.div
//                 className={`absolute -inset-4 bg-gradient-to-r ${item.gradient} opacity-0 blur-3xl rounded-3xl`}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 0.05 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: 0.3 }}
//               />

//               <div
//                 className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
//                   !isEven ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Image Section */}
//                 <motion.div
//                   className={`relative group ${
//                     !isEven ? "lg:order-2" : "lg:order-1"
//                   }`}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//                     {/* Image */}
//                     <motion.div
//                       className="relative h-96 overflow-hidden"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.6, ease: "easeOut" }}
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                       />

//                       {/* Gradient Overlay on Hover */}
//                       <motion.div
//                         className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-overlay`}
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 0.3 }}
//                         transition={{ duration: 0.4 }}
//                       />
//                     </motion.div>

//                     {/* Floating Icon Badge */}
//                     <motion.div
//                       className={`absolute top-6 right-6 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl backdrop-blur-sm`}
//                       whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </motion.div>

//                     {/* Animated Border */}
//                     <motion.div
//                       className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${item.gradient}`}
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 0.5 }}
//                       transition={{ duration: 0.4 }}
//                       style={{
//                         WebkitMask:
//                           "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                         WebkitMaskComposite: "xor",
//                         maskComposite: "exclude",
//                         padding: "2px",
//                       }}
//                     />
//                   </div>

//                   {/* Glowing Effect */}
//                   <motion.div
//                     className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl -z-10`}
//                     transition={{ duration: 0.6 }}
//                   />
//                 </motion.div>

//                 {/* Content Section */}
//                 <motion.div
//                   className={`space-y-6 ${
//                     !isEven ? "lg:order-1" : "lg:order-2"
//                   }`}
//                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                 >
//                   {/* Product Number */}
//                   <motion.div
//                     className="flex items-center gap-3"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <motion.div
//                       className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
//                       whileHover={{ scale: 1.1, rotate: 360 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </motion.div>
//                     <motion.div
//                       className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//                       initial={{ scaleX: 0 }}
//                       whileInView={{ scaleX: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.8, delay: 0.4 }}
//                       style={{ transformOrigin: "left" }}
//                     />
//                   </motion.div>

//                   {/* Title */}
//                   <motion.h3
//                     className={`text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     {item.title}
//                   </motion.h3>

//                   {/* Description */}
//                   <motion.p
//                     className="text-lg text-highlight leading-relaxed"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     {item.description}
//                   </motion.p>

//                   {/* Learn More Button */}
//                   <motion.button
//                     className={`group/btn relative px-8 py-4 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-full shadow-lg overflow-hidden`}
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.6 }}
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       Learn More
//                       <motion.span
//                         animate={{ x: [0, 5, 0] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                       >
//                         →
//                       </motion.span>
//                     </span>
//                     <motion.div
//                       className="absolute inset-0 bg-white/20"
//                       initial={{ x: "-100%" }}
//                       whileHover={{ x: "100%" }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   </motion.button>

//                   {/* Feature Tags */}
//                   <motion.div
//                     className="flex flex-wrap gap-3 pt-4"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.7 }}
//                   >
//                     {["AI-Powered", "Real-time", "Secure"].map((tag, idx) => (
//                       <motion.span
//                         key={idx}
//                         className="px-4 py-2 bg-white/80 backdrop-blur-sm text-secondary rounded-full text-sm font-medium shadow-md border border-gray-200"
//                         whileHover={{
//                           scale: 1.05,
//                           backgroundColor: "rgba(255,255,255,1)",
//                         }}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.7 + idx * 0.1 }}
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

// import { motion } from "framer-motion";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
// } from "lucide-react";

// const ProductSection = () => {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//       title: "MonNit",
//       description:
//         "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//       icon: Users,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//       title: "HawKeye",
//       description:
//         "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//       icon: Eye,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//       title: "ChatIT",
//       description:
//         "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//       icon: MessageSquare,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//       title: "De-Fore",
//       description:
//         "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//       icon: TrendingUp,
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
//       title: "Py-Transfer Learning",
//       description:
//         "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//       icon: ImageIcon,
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//       title: "NiroG",
//       description:
//         "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//       icon: Heart,
//       gradient: "from-pink-500 to-rose-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
//       title: "SearchBot",
//       description:
//         "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//       icon: Search,
//       gradient: "from-cyan-500 to-teal-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
//       title: "PratimBimba",
//       description:
//         "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//       icon: Sparkles,
//       gradient: "from-violet-500 to-purple-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
//       title: "Space Analytics",
//       description:
//         "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//       icon: Satellite,
//       gradient: "from-slate-500 to-gray-600",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
//       title: "Drone & Robotics",
//       description:
//         "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//       icon: Plane,
//       gradient: "from-amber-500 to-orange-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
//       title: "Cattle Monitoring",
//       description:
//         "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//       icon: Beef,
//       gradient: "from-lime-500 to-green-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
//       title: "AgriTech",
//       description:
//         "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//       icon: Sprout,
//       gradient: "from-emerald-500 to-teal-500",
//     },
//   ];

//   return (
//     <section className="container mx-auto px-6 py-20">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center mb-20"
//       >
//         <motion.h2
//           className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent"
//           initial={{ scale: 0.9 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Our Products
//         </motion.h2>
//         <motion.p
//           className="text-xl text-highlight max-w-3xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </motion.p>
//       </motion.div>

//       {/* Products Grid */}
//       <div className="space-y-24">
//         {data.map((item, index) => {
//           const IconComponent = item.icon;
//           const isEven = index % 2 === 0;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               {/* Background Decoration */}
//               <motion.div
//                 className={`absolute -inset-4 bg-gradient-to-r ${item.gradient} opacity-0 blur-3xl rounded-3xl`}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 0.05 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//               />

//               <div
//                 className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
//                   !isEven ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Image Section */}
//                 <motion.div
//                   className={`relative group ${
//                     !isEven ? "lg:order-2" : "lg:order-1"
//                   }`}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//                     {/* Image */}
//                     <motion.div
//                       className="relative h-96 overflow-hidden"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.6, ease: "easeOut" }}
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                       />

//                       {/* Gradient Overlay on Hover */}
//                       <motion.div
//                         className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-overlay`}
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 0.3 }}
//                         transition={{ duration: 0.4 }}
//                       />
//                     </motion.div>

//                     {/* Floating Icon Badge */}
//                     <motion.div
//                       className={`absolute top-6 right-6 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl backdrop-blur-sm`}
//                       whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </motion.div>

//                     {/* Animated Border */}
//                     <motion.div
//                       className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${item.gradient}`}
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 0.5 }}
//                       transition={{ duration: 0.4 }}
//                       style={{
//                         WebkitMask:
//                           "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                         WebkitMaskComposite: "xor",
//                         maskComposite: "exclude",
//                         padding: "2px",
//                       }}
//                     />
//                   </div>

//                   {/* Glowing Effect */}
//                   <motion.div
//                     className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl -z-10`}
//                     transition={{ duration: 0.6 }}
//                   />
//                 </motion.div>

//                 {/* Content Section */}
//                 <motion.div
//                   className={`space-y-6 ${
//                     !isEven ? "lg:order-1" : "lg:order-2"
//                   }`}
//                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   {/* Product Number */}
//                   <motion.div
//                     className="flex items-center gap-3"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                   >
//                     <motion.div
//                       className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
//                       whileHover={{ scale: 1.1, rotate: 360 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </motion.div>
//                     <motion.div
//                       className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//                       initial={{ scaleX: 0 }}
//                       whileInView={{ scaleX: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.8 }}
//                       style={{ transformOrigin: "left" }}
//                     />
//                   </motion.div>

//                   {/* Title */}
//                   <motion.h3
//                     className={`text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                   >
//                     {item.title}
//                   </motion.h3>

//                   {/* Description */}
//                   <motion.p
//                     className="text-lg text-highlight leading-relaxed"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                   >
//                     {item.description}
//                   </motion.p>

//                   {/* Learn More Button */}
//                   <motion.button
//                     className={`group/btn relative px-8 py-4 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-full shadow-lg overflow-hidden`}
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       Learn More
//                       <motion.span
//                         animate={{ x: [0, 5, 0] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                       >
//                         →
//                       </motion.span>
//                     </span>
//                     <motion.div
//                       className="absolute inset-0 bg-white/20"
//                       initial={{ x: "-100%" }}
//                       whileHover={{ x: "100%" }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   </motion.button>

//                   {/* Feature Tags */}
//                   <motion.div
//                     className="flex flex-wrap gap-3 pt-4"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                   >
//                     {["AI-Powered", "Real-time", "Secure"].map((tag, idx) => (
//                       <motion.span
//                         key={idx}
//                         className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium shadow-md border border-white/10"
//                         whileHover={{
//                           scale: 1.05,
//                           backgroundColor: "rgba(255,255,255,0.15)",
//                         }}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: idx * 0.1 }}
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

// import { motion } from "framer-motion";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
// } from "lucide-react";

// const ProductSection = () => {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//       title: "MonNit",
//       description:
//         "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//       icon: Users,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//       title: "HawKeye",
//       description:
//         "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//       icon: Eye,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//       title: "ChatIT",
//       description:
//         "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//       icon: MessageSquare,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//       title: "De-Fore",
//       description:
//         "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//       icon: TrendingUp,
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
//       title: "Py-Transfer Learning",
//       description:
//         "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//       icon: ImageIcon,
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//       title: "NiroG",
//       description:
//         "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//       icon: Heart,
//       gradient: "from-pink-500 to-rose-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
//       title: "SearchBot",
//       description:
//         "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//       icon: Search,
//       gradient: "from-cyan-500 to-teal-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
//       title: "PratimBimba",
//       description:
//         "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//       icon: Sparkles,
//       gradient: "from-violet-500 to-purple-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
//       title: "Space Analytics",
//       description:
//         "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//       icon: Satellite,
//       gradient: "from-slate-500 to-gray-600",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
//       title: "Drone & Robotics",
//       description:
//         "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//       icon: Plane,
//       gradient: "from-amber-500 to-orange-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
//       title: "Cattle Monitoring",
//       description:
//         "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//       icon: Beef,
//       gradient: "from-lime-500 to-green-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
//       title: "AgriTech",
//       description:
//         "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//       icon: Sprout,
//       gradient: "from-emerald-500 to-teal-500",
//     },
//   ];

//   return (
//     <section className="container mx-auto px-6 py-20">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center mb-20"
//       >
//         <motion.h2
//           className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent"
//           initial={{ scale: 0.9 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Our Products
//         </motion.h2>
//         <motion.p
//           className="text-xl text-highlight max-w-3xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </motion.p>
//       </motion.div>

//       {/* Products Grid */}
//       <div className="space-y-24">
//         {data.map((item, index) => {
//           const IconComponent = item.icon;
//           const isEven = index % 2 === 0;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               {/* Background Decoration */}
//               <motion.div
//                 className={`absolute -inset-4 bg-gradient-to-r ${item.gradient} opacity-0 blur-3xl rounded-3xl`}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 0.05 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//               />

//               <div
//                 className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
//                   !isEven ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Image Section */}
//                 <motion.div
//                   className={`relative group ${
//                     !isEven ? "lg:order-2" : "lg:order-1"
//                   }`}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//                     {/* Image */}
//                     <motion.div
//                       className="relative h-96 overflow-hidden"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.6, ease: "easeOut" }}
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                       />

//                       {/* Gradient Overlay on Hover */}
//                       <motion.div
//                         className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-overlay`}
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 0.3 }}
//                         transition={{ duration: 0.4 }}
//                       />
//                     </motion.div>

//                     {/* Floating Icon Badge */}
//                     <motion.div
//                       className={`absolute top-6 right-6 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl backdrop-blur-sm`}
//                       whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </motion.div>

//                     {/* Animated Border */}
//                     <motion.div
//                       className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${item.gradient}`}
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 0.5 }}
//                       transition={{ duration: 0.4 }}
//                       style={{
//                         WebkitMask:
//                           "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                         WebkitMaskComposite: "xor",
//                         maskComposite: "exclude",
//                         padding: "2px",
//                       }}
//                     />
//                   </div>

//                   {/* Glowing Effect */}
//                   <motion.div
//                     className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl -z-10`}
//                     transition={{ duration: 0.6 }}
//                   />
//                 </motion.div>

//                 {/* Content Section */}
//                 <motion.div
//                   className={`space-y-4 ${
//                     !isEven ? "lg:order-1" : "lg:order-2"
//                   }`}
//                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   {/* Product Number */}
//                   <motion.div
//                     className="flex items-center gap-3"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                   >
//                     <motion.div
//                       className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-4xl shadow-lg`}
//                       whileHover={{ scale: 1.1, rotate: 360 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </motion.div>
//                     <motion.div
//                       className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//                       initial={{ scaleX: 0 }}
//                       whileInView={{ scaleX: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.8 }}
//                       style={{ transformOrigin: "left" }}
//                     />
//                   </motion.div>

//                   {/* Title */}
//                   <motion.h3
//                     className={`text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                   >
//                     {item.title}
//                   </motion.h3>

//                   {/* Description */}
//                   <motion.p
//                     className="text-lg text-highlight leading-relaxed"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                   >
//                     {item.description}
//                   </motion.p>

//                   {/* Learn More Button */}
//                   <motion.div className="relative inline-block">
//                     <motion.button
//                       // className={`group/btn relative px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg overflow-hidden`}
//                       className={`group/btn relative px-8 py-4 text-white font-semibold rounded-full overflow-hidden backdrop-blur-md bg-white/5 border border-white/10`}
//                       // whileHover={{
//                       //   scale: 1.05,
//                       //   boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//                       // }}
//                       whileTap={{ scale: 0.95 }}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                     >
//                       <span className="relative z-10 flex items-center gap-2">
//                         Learn More
//                         <motion.span
//                           animate={{ x: [0, 5, 0] }}
//                           transition={{ duration: 1.5, repeat: Infinity }}
//                         >
//                           →
//                         </motion.span>
//                       </span>
//                       <motion.div
//                         className="absolute inset-0 bg-white/20"
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: "100%" }}
//                         transition={{ duration: 0.5 }}
//                       />
//                     </motion.button>

//                     {/* Animated Border for Learn More Button */}
//                     <motion.div
//                       className={`absolute inset-0 rounded-full border-2 bg-gradient-to-r ${item.gradient}`}
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 0.8 }}
//                       transition={{ duration: 0.3 }}
//                       style={{
//                         WebkitMask:
//                           "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                         WebkitMaskComposite: "xor",
//                         maskComposite: "exclude",
//                         padding: "2px",
//                       }}
//                     />
//                   </motion.div>

//                   {/* Feature Tags */}
//                   <motion.div
//                     className="flex flex-wrap gap-3 pt-4"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                   >
//                     {["AI-Powered", "Real-time", "Secure"].map((tag, idx) => (
//                       <motion.div
//                         key={idx}
//                         className="relative"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: idx * 0.1 }}
//                       >
//                         <motion.span
//                           // className="relative z-10 block px-4 py-2 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium shadow-md bg-primary"
//                           className="relative z-10 block px-4 py-2 text-white/70 rounded-full text-sm font-medium
// bg-white/5 border border-white/10 backdrop-blur-md"
//                           // whileHover={{
//                           //   scale: 1.05,
//                           //   backgroundColor: "rgb(21, 154, 187)",
//                           //   y: -2,
//                           // }}
//                           whileHover={{
//                             scale: 1.05,
//                             y: -2,
//                           }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           {tag}
//                         </motion.span>

//                         {/* Glow effect on hover */}
//                         <motion.div
//                           className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-md -z-10`}
//                           initial={{ opacity: 0 }}
//                           whileHover={{ opacity: 0.4 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

// import { motion, useReducedMotion } from "framer-motion";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
// } from "lucide-react";

// const ProductSection = () => {
//   const shouldReduceMotion = useReducedMotion();

//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//       title: "MonNit",
//       description:
//         "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//       icon: Users,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//       title: "HawKeye",
//       description:
//         "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//       icon: Eye,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//       title: "ChatIT",
//       description:
//         "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//       icon: MessageSquare,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//       title: "De-Fore",
//       description:
//         "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//       icon: TrendingUp,
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
//       title: "Py-Transfer Learning",
//       description:
//         "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//       icon: ImageIcon,
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//       title: "NiroG",
//       description:
//         "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//       icon: Heart,
//       gradient: "from-pink-500 to-rose-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
//       title: "SearchBot",
//       description:
//         "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//       icon: Search,
//       gradient: "from-cyan-500 to-teal-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
//       title: "PratimBimba",
//       description:
//         "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//       icon: Sparkles,
//       gradient: "from-violet-500 to-purple-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
//       title: "Space Analytics",
//       description:
//         "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//       icon: Satellite,
//       gradient: "from-slate-500 to-gray-600",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
//       title: "Drone & Robotics",
//       description:
//         "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//       icon: Plane,
//       gradient: "from-amber-500 to-orange-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
//       title: "Cattle Monitoring",
//       description:
//         "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//       icon: Beef,
//       gradient: "from-lime-500 to-green-500",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
//       title: "AgriTech",
//       description:
//         "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//       icon: Sprout,
//       gradient: "from-emerald-500 to-teal-500",
//     },
//   ];

//   return (
//     <section className="container mx-auto px-6 py-20">
//       <div className="text-center mb-20">
//         <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//           Our Products
//         </h2>
//         <p className="text-lg text-highlight max-w-3xl mx-auto">
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </p>
//       </div>

//       <div className="space-y-24">
//         {data.map((item, index) => {
//           const Icon = item.icon;
//           const isEven = index % 2 === 0;

//           return (
//             <motion.div
//               key={index}
//               initial={shouldReduceMotion ? {} : { opacity: 0, y: 80 }}
//               whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-120px" }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               <div
//                 className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
//               >
//                 {/* Image */}
//                 <motion.div
//                   className={`${
//                     !isEven ? "lg:order-2" : "lg:order-1"
//                   } rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/10`}
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 18 }}
//                 >
//                   <div className="relative h-96">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div
//                       className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
//                     >
//                       <Icon className="w-6 h-6" />
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Content */}
//                 <div
//                   className={`space-y-5 ${
//                     !isEven ? "lg:order-1" : "lg:order-2"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-3xl`}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </div>
//                     <div
//                       className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//                     />
//                   </div>

//                   <h3
//                     className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
//                   >
//                     {item.title}
//                   </h3>

//                   <p className="text-lg text-highlight leading-relaxed max-w-xl">
//                     {item.description}
//                   </p>

//                   <motion.button
//                     whileHover={{ scale: 1.04 }}
//                     whileTap={{ scale: 0.96 }}
//                     className="px-7 py-3 rounded-full text-white font-semibold bg-white/5 border border-white/15 hover:border-white/40 transition-colors"
//                   >
//                     <span className="flex items-center gap-2">
//                       Learn More
//                       <motion.span
//                         whileHover={{ x: 6 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         →
//                       </motion.span>
//                     </span>
//                   </motion.button>

//                   <div className="flex flex-wrap gap-3 pt-2">
//                     {["AI-Powered", "Real-time", "Secure"].map((tag, i) => (
//                       <motion.span
//                         key={i}
//                         whileHover={{ y: -3, scale: 1.05 }}
//                         className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-white/70"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

// import React from "react";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
// } from "lucide-react";

// // DATA OUTSIDE COMPONENT (prevents recreation every render)
// const PRODUCTS = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//     title: "MonNit",
//     description:
//       "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//     icon: Users,
//     gradient: "from-blue-500 to-cyan-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//     title: "HawKeye",
//     description:
//       "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//     icon: Eye,
//     gradient: "from-purple-500 to-pink-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//     title: "ChatIT",
//     description:
//       "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//     icon: MessageSquare,
//     gradient: "from-green-500 to-emerald-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//     title: "De-Fore",
//     description:
//       "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//     icon: TrendingUp,
//     gradient: "from-orange-500 to-red-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
//     title: "Py-Transfer Learning",
//     description:
//       "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//     icon: ImageIcon,
//     gradient: "from-indigo-500 to-blue-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//     title: "NiroG",
//     description:
//       "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//     icon: Heart,
//     gradient: "from-pink-500 to-rose-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
//     title: "SearchBot",
//     description:
//       "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//     icon: Search,
//     gradient: "from-cyan-500 to-teal-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
//     title: "PratimBimba",
//     description:
//       "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//     icon: Sparkles,
//     gradient: "from-violet-500 to-purple-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
//     title: "Space Analytics",
//     description:
//       "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//     icon: Satellite,
//     gradient: "from-slate-500 to-gray-600",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
//     title: "Drone & Robotics",
//     description:
//       "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//     icon: Plane,
//     gradient: "from-amber-500 to-orange-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
//     title: "Cattle Monitoring",
//     description:
//       "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//     icon: Beef,
//     gradient: "from-lime-500 to-green-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
//     title: "AgriTech",
//     description:
//       "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//     icon: Sprout,
//     gradient: "from-emerald-500 to-teal-500",
//   },
// ];

// interface Product {
//   image: string;
//   title: string;
//   description: string;
//   icon: React.ComponentType<{ className?: string }>;
//   gradient: string;
// }

// interface ProductCardProps {
//   item: Product;
//   index: number;
// }

// const ProductCard = React.memo(function ProductCard({
//   item,
//   index,
// }: ProductCardProps) {
//   const Icon = item.icon;
//   const isEven = index % 2 === 0;

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
//       {/* IMAGE */}
//       <div
//         className={`${
//           !isEven ? "lg:order-2" : "lg:order-1"
//         } rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
//       >
//         <div className="relative h-90">
//           <img
//             src={item.image}
//             alt={item.title}
//             loading="lazy"
//             decoding="async"
//             className="w-full h-full object-cover will-change-transform hover:scale-[1.03] transition-transform duration-500"
//           />
//           <div
//             className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}
//           >
//             <Icon className="w-5 h-5" />
//           </div>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div
//         className={`${
//           !isEven ? "lg:order-1" : "lg:order-2"
//         } space-y-5 max-w-xl`}
//       >
//         <div className="flex items-center gap-4">
//           <div
//             className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-3xl`}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </div>
//           <div
//             className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//           />
//         </div>

//         <h3
//           className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
//         >
//           {item.title}
//         </h3>

//         <p className="text-base text-white/70 leading-relaxed">
//           {item.description}
//         </p>

//         <button className="px-6 py-2 rounded-full text-white/90 bg-white/5 border border-white/10 hover:border-white/40 transition-colors duration-300">
//           Learn More →
//         </button>
//         <div className="flex flex-wrap gap-3 pt-3">
//           {["AI-Powered", "Secure", "Real-time"].map((tag) => (
//             <span
//               key={tag}
//               className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-colors"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// });

// export default function ProductSection() {
//   return (
//     <section className="container mx-auto px-6 py-20">
//       <div className="text-center mb-16">
//         <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//           Our Products
//         </h2>
//         <p className="text-lg text-white/70 max-w-3xl mx-auto">
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </p>
//       </div>

//       {PRODUCTS.map((item, i) => (
//         <ProductCard key={item.title} item={item} index={i} />
//       ))}
//     </section>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
//   ArrowRight,
// } from "lucide-react";

// // Lightweight reveal hook (ONE observer for all cards)
// const observer =
//   typeof window !== "undefined"
//     ? new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add("revealed");
//               if (observer) {
//                 observer.unobserve(entry.target);
//               }
//             }
//           });
//         },
//         { rootMargin: "-80px 0px", threshold: 0.12 },
//       )
//     : null;

// function useReveal<T extends HTMLElement>() {
//   const ref = useRef<T | null>(null);
//   useEffect(() => {
//     if (!ref.current || !observer) return;
//     observer.observe(ref.current);
//   }, []);
//   return ref;
// }

// const PRODUCTS = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//     title: "MonNit",
//     description:
//       "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
//     icon: Users,
//     // gradient: "from-blue-500 to-cyan-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//     title: "HawKeye",
//     description:
//       "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
//     icon: Eye,
//     // gradient: "from-purple-500 to-pink-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//     title: "ChatIT",
//     description:
//       "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
//     icon: MessageSquare,
//     // gradient: "from-green-500 to-emerald-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//     title: "De-Fore",
//     description:
//       "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
//     icon: TrendingUp,
//     // gradient: "from-orange-500 to-red-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
//     title: "Py-Transfer Learning",
//     description:
//       "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
//     icon: ImageIcon,
//     // gradient: "from-indigo-500 to-blue-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//     title: "NiroG",
//     description:
//       "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
//     icon: Heart,
//     // gradient: "from-pink-500 to-rose-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
//     title: "SearchBot",
//     description:
//       "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
//     icon: Search,
//     // gradient: "from-cyan-500 to-teal-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
//     title: "PratimBimba",
//     description:
//       "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
//     icon: Sparkles,
//     // gradient: "from-violet-500 to-purple-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
//     title: "Space Analytics",
//     description:
//       "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
//     icon: Satellite,
//     // gradient: "from-slate-500 to-gray-600",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
//     title: "Drone & Robotics",
//     description:
//       "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
//     icon: Plane,
//     // gradient: "from-amber-500 to-orange-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
//     title: "Cattle Monitoring",
//     description:
//       "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
//     icon: Beef,
//     // gradient: "from-lime-500 to-green-500",
//     gradient: "bg-primary",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
//     title: "AgriTech",
//     description:
//       "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
//     icon: Sprout,
//     // gradient: "from-emerald-500 to-teal-500",
//     gradient: "bg-primary",
//   },
// ];

// interface Product {
//   image: string;
//   title: string;
//   description: string;
//   icon: React.ComponentType<{ className?: string }>;
//   gradient: string;
// }

// interface ProductCardProps {
//   item: Product;
//   index: number;
// }

// const ProductCard = React.memo(function ProductCard({
//   item,
//   index,
// }: ProductCardProps) {
//   const Icon = item.icon;
//   const isEven = index % 2 === 0;
//   const ref = useReveal<HTMLDivElement>();

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${index * 90}ms` }}
//       className="reveal-item grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16"
//     >
//       <div
//         className={`${
//           !isEven ? "lg:order-2" : "lg:order-1"
//         } rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
//       >
//         <div className="relative h-90">
//           <img
//             src={item.image}
//             alt={item.title}
//             loading="lazy"
//             decoding="async"
//             className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
//           />
//           <div
//             className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}
//           >
//             <Icon className="w-5 h-5" />
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${
//           !isEven ? "lg:order-1" : "lg:order-2"
//         } space-y-5 max-w-xl`}
//       >
//         <div className="flex items-center gap-4">
//           <div
//             className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-2xl`}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </div>
//           <div
//             className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//           />
//         </div>

//         <h3
//           className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
//         >
//           {item.title}
//         </h3>

//         <p className="text-base text-white/70 leading-relaxed">
//           {item.description}
//         </p>

//         <div className="flex flex-wrap gap-3 pt-3">
//           {["AI-Powered", "Secure", "Real-time"].map((tag) => (
//             <span
//               key={tag}
//               className="px-4 py-2 rounded-full text-sm bg-primary border border-white/10 text-white hover:border-white/30 transition-colors"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <button className="group/apply px-6 py-2 inline-flex items-center gap-2 rounded-full text-white bg-primary border border-white/10 hover:border-white/40 transition-colors duration-300">
//           Learn More
//           <ArrowRight
//             className="group-hover/apply:translate-x-1 transition"
//             size={18}
//           />
//         </button>
//       </div>
//     </div>
//   );
// });

// export default function ProductSection() {
//   return (
//     <section className="container mx-auto px-6 py-20">
//       <style>{`
//         .reveal-item { opacity: 0; transform: translateY(60px); transition: opacity .7s cubic-bezier(.22,.9,.32,1), transform .7s cubic-bezier(.22,.9,.32,1); }
//         .reveal-item.revealed { opacity: 1; transform: translateY(0); }
//       `}</style>

//       <div className="text-center mb-16">
//         <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//           Our Products
//         </h2>
//         <p className="text-lg text-white/70 max-w-3xl mx-auto">
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </p>
//       </div>

//       {PRODUCTS.map((item, i) => (
//         <ProductCard key={item.title} item={item} index={i} />
//       ))}
//     </section>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import {
//   Users,
//   Eye,
//   MessageSquare,
//   TrendingUp,
//   Image as ImageIcon,
//   Heart,
//   Search,
//   Sparkles,
//   Satellite,
//   Plane,
//   Beef,
//   Sprout,
//   ArrowRight,
// } from "lucide-react";

// /* ---------------------------
//    Global Observer (single instance)
// ---------------------------- */
// const observer =
//   typeof window !== "undefined"
//     ? new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add("revealed");
//               observer?.unobserve(entry.target);
//             }
//           });
//         },
//         { rootMargin: "-80px 0px", threshold: 0.15 },
//       )
//     : null;

// function useReveal<T extends HTMLElement>() {
//   const ref = useRef<T | null>(null);

//   useEffect(() => {
//     if (!ref.current || !observer) return;
//     observer.observe(ref.current);
//   }, []);

//   return ref;
// }

// /* ---------------------------
//    Product Data
// ---------------------------- */
// const PRODUCTS = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//     title: "MonNit",
//     description:
//       "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying.",
//     icon: Users,
//     gradient: "from-blue-500 to-cyan-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
//     title: "HawKeye",
//     description:
//       "An advanced AI-powered surveillance system built for intelligent threat detection using computer vision and GenAI.",
//     icon: Eye,
//     gradient: "from-purple-500 to-pink-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
//     title: "ChatIT",
//     description:
//       "A secure next-generation messaging platform with AI translation, summarization and encryption.",
//     icon: MessageSquare,
//     gradient: "from-green-500 to-emerald-500",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//     title: "De-Fore",
//     description:
//       "A GenAI-powered demand forecasting solution delivering accurate predictions and actionable insights.",
//     icon: TrendingUp,
//     gradient: "from-orange-500 to-red-500",
//   },
// ];

// /* ---------------------------
//    Types
// ---------------------------- */
// interface Product {
//   image: string;
//   title: string;
//   description: string;
//   icon: React.ComponentType<{ className?: string }>;
//   gradient: string;
// }

// interface ProductCardProps {
//   item: Product;
//   index: number;
// }

// /* ---------------------------
//    Product Card
// ---------------------------- */
// const ProductCard = React.memo(function ProductCard({
//   item,
//   index,
// }: ProductCardProps) {
//   const Icon = item.icon;
//   const isEven = index % 2 === 0;

//   const imageRef = useReveal<HTMLDivElement>();
//   const contentRef = useReveal<HTMLDivElement>();

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
//       {/* IMAGE */}
//       <div
//         ref={imageRef}
//         className={`
//           ${!isEven ? "lg:order-2 reveal-right" : "lg:order-1 reveal-left"}
//           rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500
//         `}
//         style={{ transitionDelay: `${index * 120}ms` }}
//       >
//         <div className="relative h-[420px]">
//           <img
//             src={item.image}
//             alt={item.title}
//             loading="lazy"
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//           />
//           <div
//             className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}
//           >
//             <Icon className="w-5 h-5" />
//           </div>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div
//         ref={contentRef}
//         className={`
//           ${!isEven ? "lg:order-1 reveal-left" : "lg:order-2 reveal-right"}
//           space-y-6 max-w-xl
//         `}
//         style={{ transitionDelay: `${index * 160}ms` }}
//       >
//         <div className="flex items-center gap-4">
//           <div
//             className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xl`}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </div>
//           <div
//             className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
//           />
//         </div>

//         <h3
//           className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
//         >
//           {item.title}
//         </h3>

//         <p className="text-lg text-white/70 leading-relaxed">
//           {item.description}
//         </p>

//         <div className="flex flex-wrap gap-3 pt-4">
//           {["AI-Powered", "Secure", "Real-time"].map((tag) => (
//             <span
//               key={tag}
//               className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-white hover:border-white/30 transition"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <button className="group px-6 py-3 inline-flex items-center gap-2 rounded-full text-white bg-gradient-to-r from-primary to-cyan-500 hover:opacity-90 transition">
//           Learn More
//           <ArrowRight
//             className="group-hover:translate-x-1 transition-transform"
//             size={18}
//           />
//         </button>
//       </div>
//     </div>
//   );
// });

// /* ---------------------------
//    Main Section
// ---------------------------- */
// export default function ProductSection() {
//   return (
//     <section className="container mx-auto px-6 py-24">
//       {/* Animation Styles */}
//       <style>{`
//         .reveal-left,
//         .reveal-right {
//           opacity: 0;
//           transition: opacity .9s cubic-bezier(.22,.9,.32,1),
//                       transform .9s cubic-bezier(.22,.9,.32,1);
//         }

//         .reveal-left {
//           transform: translateX(-100px);
//         }

//         .reveal-right {
//           transform: translateX(100px);
//         }

//         .reveal-left.revealed,
//         .reveal-right.revealed {
//           opacity: 1;
//           transform: translateX(0);
//         }
//       `}</style>

//       <div className="text-center mb-20">
//         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//           Our Products
//         </h2>
//         <p className="text-lg text-white/70 max-w-3xl mx-auto">
//           Innovative AI-powered tools designed to solve real-world challenges
//           across industries.
//         </p>
//       </div>

//       {PRODUCTS.map((item, i) => (
//         <ProductCard key={item.title} item={item} index={i} />
//       ))}
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Users,
  Eye,
  MessageSquare,
  TrendingUp,
  Image as ImageIcon,
  Heart,
  Search,
  Sparkles,
  Satellite,
  Plane,
  Beef,
  Sprout,
  ArrowRight,
} from "lucide-react";

/* ---------------------------
   Animation Variants
---------------------------- */

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 0.9, 0.32, 1],
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 0.9, 0.32, 1],
    },
  },
};

/* ---------------------------
   Product Data
---------------------------- */

const PRODUCTS = [
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    title: "MonNit",
    description:
      "An AI-powered HRMS and Project Tracking platform built for modern teams. Track employees and projects in real-time with intelligent insights and smart querying. Integrates chat, attendance systems, revenue tracking, and analytics in one unified platform. Eliminates multiple tools with a single GenAI-driven ecosystem.",
    icon: Users,
    // gradient: "from-blue-500 to-cyan-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
    title: "HawKeye",
    description:
      "An advanced AI-powered surveillance system built for intelligent threat detection. Uses computer vision and Generative AI to identify individuals and detect suspicious activity in real time. Triggers automated secondary locking and security responses when threats are detected. Optimizes storage by saving only critical events instead of long continuous recordings.",
    icon: Eye,
    // gradient: "from-purple-500 to-pink-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
    title: "ChatIT",
    description:
      "A secure, next-generation messaging platform built for smart communication. Supports local language translation, AI-powered call summarization, and transcription. Enables game calling and seamless doctor appointment booking via NiroG integration. End-to-end encrypted with enhanced data privacy and server-safe content protection.",
    icon: MessageSquare,
    // gradient: "from-green-500 to-emerald-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    title: "De-Fore",
    description:
      "An advanced GenAI-powered demand forecasting solution for smarter business planning. Analyzes historical data along with external market factors and trends. Delivers accurate predictions with actionable insights and intelligent reporting. Helps organizations optimize inventory, revenue, and strategic decisions.",
    icon: TrendingUp,
    // gradient: "from-orange-500 to-red-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    title: "Py-Transfer Learning",
    description:
      "A powerful Python package for real-time image analysis and classification. Leverages transfer learning to deliver high-accuracy predictions with minimal training data. Optimized for fast deployment across vision-based applications. Designed for developers building intelligent computer vision systems.",
    icon: ImageIcon,
    // gradient: "from-indigo-500 to-blue-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    title: "NiroG",
    description:
      "An AI-powered health assistant designed for intelligent, department-based care. Patients can consult specialized chatbots (Neurology, Cardiology, and more) or choose General Medicine for guided support. Enables appointment booking, report uploads, and AI-generated medical insights with conversation summaries. Includes a dedicated doctor portal for managing patients, consultations, and diagnostics seamlessly.",
    icon: Heart,
    // gradient: "from-pink-500 to-rose-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    title: "SearchBot",
    description:
      "An advanced AI-powered document search engine built on Agentic RAG architecture. Enables real-time multilingual search with secure, privacy-first encryption. Connects and analyzes diverse data sources including documents, images, audio, video, and hybrid datasets. Designed for intelligent knowledge retrieval across complex enterprise environments.",
    icon: Search,
    // gradient: "from-cyan-500 to-teal-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    title: "PratimBimba",
    description:
      "A multi-modal AI assistant built for personalized digital interaction. Chat in text mode, generate custom AI avatars, or interact using your cloned voice. Seamlessly switch between conversation, image generation, and voice experiences. Designed to create an intelligent, immersive AI companion.",
    icon: Sparkles,
    // gradient: "from-violet-500 to-purple-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
    title: "Space Analytics",
    description:
      "An AI-powered real-time space image analytics platform. Analyzes satellite imagery to detect debris and identify critical space events. Extracts high-value insights from complex orbital data. Designed to support safer missions and intelligent space monitoring.",
    icon: Satellite,
    // gradient: "from-slate-500 to-gray-600",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
    title: "Drone & Robotics",
    description:
      "Advanced AI-powered drone and robotic systems designed for defense and strategic operations. Enables intelligent surveillance, monitoring, and autonomous mission support. Built for high-precision navigation, real-time analytics, and secure deployment. Engineered to enhance operational efficiency and situational awareness.",
    icon: Plane,
    // gradient: "from-amber-500 to-orange-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
    title: "Cattle Monitoring",
    description:
      "An AI-powered livestock monitoring system for smart and sustainable farming. Tracks cattle health, movement, and behavioral patterns in real time using IoT and AI analytics. Detects early signs of illness, stress, or irregular activity. Enables data-driven herd management and improved agricultural productivity.",
    icon: Beef,
    // gradient: "from-lime-500 to-green-500",
    gradient: "bg-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    title: "AgriTech",
    description:
      "An AI-driven smart agriculture platform designed for modern farming. Uses data analytics, IoT, and predictive intelligence to optimize crop health and yield. Provides real-time insights on soil, weather, and resource management. Empowers farmers with smarter, sustainable, and data-backed decision-making.",
    icon: Sprout,
    // gradient: "from-emerald-500 to-teal-500",
    gradient: "bg-primary",
  },
];

/* ---------------------------
   Types
---------------------------- */

interface Product {
  image: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

interface ProductCardProps {
  item: Product;
  index: number;
}

/* ---------------------------
   Product Card
---------------------------- */

const ProductCard = React.memo(function ProductCard({
  item,
  index,
}: ProductCardProps) {
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
      {/* IMAGE */}
      <motion.div
        variants={isEven ? slideLeft : slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`${
          !isEven ? "lg:order-2" : "lg:order-1"
        } rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500`}
      >
        <div className="relative h-[420px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div
            className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={isEven ? slideRight : slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
        className={`${
          !isEven ? "lg:order-1" : "lg:order-2"
        } space-y-6 max-w-xl`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xl`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div
            className={`h-1 flex-1 rounded-full bg-gradient-to-r ${item.gradient}`}
          />
        </div>

        <h3
          className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
        >
          {item.title}
        </h3>

        <p className="text-lg text-white/70 leading-relaxed">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {["AI-Powered", "Secure", "Real-time"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-white hover:border-white/30 transition"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="group px-6 py-3 inline-flex items-center gap-2 rounded-full text-white bg-gradient-to-r from-primary to-cyan-500 hover:opacity-90 transition">
          Learn More
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={18}
          />
        </button>
      </motion.div>
    </div>
  );
});

/* ---------------------------
   Main Section
---------------------------- */

export default function ProductSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Our Products
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Innovative AI-powered tools designed to solve real-world challenges
          across industries.
        </p>
      </div>

      {PRODUCTS.map((item, i) => (
        <ProductCard key={item.title} item={item} index={i} />
      ))}
    </section>
  );
}
