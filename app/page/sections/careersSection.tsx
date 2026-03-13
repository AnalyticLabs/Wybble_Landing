// const CareersSection = () => {
//   return (
//     <section className="container mx-auto px-6 py-12 text-center">
//       <div className="flex flex-col items-center">
//         <h2 className="text-3xl font-extrabold mb-2 text-center">
//           Explore All Jobs
//         </h2>
//         <p className="text-md text-center">
//           Wybble AI is on a mission to push the boundaries of technology and
//           deliver smarter, future-ready solutions. Here, your work won’t just be
//           a job—it will be an opportunity to shape impactful innovations that
//           make a real difference.
//         </p>
//         <div className="w-36 md:w-56 h-1 bg-primary mt-4"></div>
//       </div>

//       {/* Job Card Section */}
//       <div className="mt-12">
//         <div className="w-full bg-white shadow-lg rounded-2xl p-6 text-left">
//           <h3 className="text-2xl font-bold text-primary mb-3">
//             Cloud and DevOps Engineer
//           </h3>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             This is a full-time remote role for a Cloud and DevOps Engineer.
//             You’ll design, implement, and manage cloud infrastructure and
//             services, automate deployment processes, and ensure systems are
//             scalable and reliable. You’ll also collaborate with development
//             teams to streamline CI/CD pipelines, monitor performance, and
//             troubleshoot issues while staying updated with industry best
//             practices.
//           </p>

//           <h4 className="text-lg font-semibold mb-2">Qualifications</h4>
//           <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
//             <li>
//               Experience with cloud platforms such as AWS, Azure, or Google
//               Cloud
//             </li>
//             <li>Proficiency in automation tools (Ansible, Chef, Puppet)</li>
//             <li>Knowledge of CI/CD tools (Jenkins, GitLab CI, CircleCI)</li>
//             <li>Strong understanding of Docker & Kubernetes</li>
//             <li>Network and security skills for cloud environments</li>
//             <li>Experience with scripting languages (Bash, Python)</li>
//             <li>Strong troubleshooting and problem-solving abilities</li>
//             <li>Bachelor’s degree in Computer Science or related field</li>
//             <li>Ability to work independently in a remote setup</li>
//           </ul>

//           <div className="flex justify-start">
//             <a
//               href="https://www.linkedin.com/jobs/view/4293847780/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-primary text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareersSection;

// import { motion } from "framer-motion";
// import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

// const CareersSection = () => {
//   return (
//     <section className="container mx-auto px-6 py-20">
//       {/* Header */}
//       <div className="text-center max-w-3xl mx-auto mb-16">
//         <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
//           Join Our Team
//         </h2>

//         <p className="text-lg text-white/70 leading-relaxed">
//           At Wybble AI, you won’t just work on software — you’ll build
//           intelligent systems shaping real-world impact across industries.
//         </p>
//       </div>

//       {/* Job Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-primary/40 transition-all"
//       >
//         {/* Top Row */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
//           <div>
//             <h3 className="text-3xl font-bold mb-3">Cloud & DevOps Engineer</h3>

//             {/* Meta info */}
//             <div className="flex flex-wrap gap-3 text-sm text-white/70">
//               <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
//                 <MapPin size={14} /> Remote
//               </span>

//               <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
//                 <Briefcase size={14} /> Full-time
//               </span>

//               <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
//                 <Clock size={14} /> 2+ Years Experience
//               </span>
//             </div>
//           </div>

//           {/* Apply Button */}
//           <a
//             href="https://www.linkedin.com/jobs/view/4293847780/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="self-start lg:self-auto group/apply inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition"
//           >
//             Apply Now
//             <ArrowRight
//               className="group-hover/apply:translate-x-1 transition"
//               size={18}
//             />
//           </a>
//         </div>

//         {/* Description */}
//         <p className="text-white/70 leading-relaxed mb-8 max-w-4xl">
//           Design and manage scalable cloud infrastructure, automate CI/CD
//           pipelines, monitor system performance, and collaborate with developers
//           to ensure reliable deployments and optimized architecture.
//         </p>

//         {/* Responsibilities */}
//         <div className="mb-8">
//           <h4 className="text-lg font-semibold mb-3">Key Responsibilities</h4>

//           <ul className="grid md:grid-cols-2 gap-y-2 text-white/70">
//             <li>• Build and maintain CI/CD pipelines</li>
//             <li>• Manage AWS / Azure / GCP infrastructure</li>
//             <li>• Monitor performance & reliability</li>
//             <li>• Automate deployments & workflows</li>
//             <li>• Containerization with Docker & Kubernetes</li>
//             <li>• Collaborate with development teams</li>
//           </ul>
//         </div>

//         {/* Tech Stack */}
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>

//           <div className="flex flex-wrap gap-3">
//             {[
//               "AWS",
//               "Docker",
//               "Kubernetes",
//               "Jenkins",
//               "GitLab CI",
//               "Terraform",
//               "Python",
//               "Bash",
//             ].map((skill, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:border-primary/40 transition"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Glow */}
//         <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-primary/10 to-cyan-500/10 blur-2xl" />
//       </motion.div>
//     </section>
//   );
// };

// export default CareersSection;

import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Cloud & DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    experience: "2+ Years",
    description:
      "Design and manage scalable cloud infrastructure, automate CI/CD pipelines, monitor performance, and collaborate with developers to ensure reliable deployments.",
    responsibilities: [
      "Build and maintain CI/CD pipelines",
      "Manage AWS / Azure / GCP infrastructure",
      "Monitor performance & reliability",
      "Automate deployments & workflows",
      "Containerization with Docker & Kubernetes",
      "Collaborate with development teams",
    ],
    tech: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "Python",
      "Bash",
    ],
    applyLink: "https://www.linkedin.com/jobs/view/4293847780/",
  },
];

function JobCard({ job }: { job: (typeof jobs)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-3xl bg-white/5 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
        <div>
          <h3 className="text-3xl font-bold mb-3">{job.title}</h3>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-2 bg-white/5 border border-gray-600 px-3 py-1.5 rounded-full">
              <MapPin size={14} /> {job.location}
            </span>

            <span className="flex items-center gap-2 bg-white/5 border border-gray-600 px-3 py-1.5 rounded-full">
              <Briefcase size={14} /> {job.type}
            </span>

            <span className="flex items-center gap-2 bg-white/5 border border-gray-600 px-3 py-1.5 rounded-full">
              <Clock size={14} /> {job.experience}
            </span>
          </div>
        </div>

        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start lg:self-auto group/apply inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition"
        >
          Apply Now
          <ArrowRight
            className="group-hover/apply:translate-x-1 transition"
            size={18}
          />
        </a>
      </div>

      <p className="leading-relaxed mb-8 max-w-4xl">{job.description}</p>

      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-3">Key Responsibilities</h4>
        <ul className="grid md:grid-cols-2 gap-y-2">
          {job.responsibilities.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-3">
          {job.tech.map((skill: string, i: number) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-gray-600 text-sm hover:bg-white/10 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CareersSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
          Join Our Team
        </h2>
        <p className="text-lg text-white/70 leading-relaxed">
          Build intelligent systems and real-world impactful technology with our
          growing team.
        </p>
        <div className="w-36 md:w-56 h-1 bg-primary mt-4"></div>
      </div> */}

      <div className="flex flex-col items-center mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
          Join Our Team
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Build intelligent systems and real-world impactful technology with our
          growing team.
        </p>
        <div className="w-36 md:w-56 h-1 bg-primary mt-4"></div>
      </div>

      <div className="space-y-10">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
