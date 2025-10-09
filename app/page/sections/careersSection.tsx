const CareersSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-2 text-center">
          Explore All Jobs
        </h2>
        <p className="text-md text-center">
          Wybble AI is on a mission to push the boundaries of technology and
          deliver smarter, future-ready solutions. Here, your work won’t just be
          a job—it will be an opportunity to shape impactful innovations that
          make a real difference.
        </p>
        <div className="w-36 md:w-56 h-1 bg-primary mt-4"></div>
      </div>

      {/* Job Card Section */}
      <div className="mt-12">
        <div className="w-full bg-white shadow-lg rounded-2xl p-6 text-left">
          <h3 className="text-2xl font-bold text-primary mb-3">
            Cloud and DevOps Engineer
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This is a full-time remote role for a Cloud and DevOps Engineer.
            You’ll design, implement, and manage cloud infrastructure and
            services, automate deployment processes, and ensure systems are
            scalable and reliable. You’ll also collaborate with development
            teams to streamline CI/CD pipelines, monitor performance, and
            troubleshoot issues while staying updated with industry best
            practices.
          </p>

          <h4 className="text-lg font-semibold mb-2">Qualifications</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>
              Experience with cloud platforms such as AWS, Azure, or Google
              Cloud
            </li>
            <li>Proficiency in automation tools (Ansible, Chef, Puppet)</li>
            <li>Knowledge of CI/CD tools (Jenkins, GitLab CI, CircleCI)</li>
            <li>Strong understanding of Docker & Kubernetes</li>
            <li>Network and security skills for cloud environments</li>
            <li>Experience with scripting languages (Bash, Python)</li>
            <li>Strong troubleshooting and problem-solving abilities</li>
            <li>Bachelor’s degree in Computer Science or related field</li>
            <li>Ability to work independently in a remote setup</li>
          </ul>

          <div className="flex justify-start">
            <a
              href="https://www.linkedin.com/jobs/view/4293847780/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
