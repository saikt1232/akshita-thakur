import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import profilepic from "../assets/akshita2.jpeg";

const Resume = () => {
  return (
    <div className="h-screen bg-white p-8 text-gray-800 mx-auto align-middle">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row bg-gray-800 text-white">
        <div className="w-full sm:w-1/3 text-white p-6 flex justify-center sm:block">
          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white">
            <img
              src={profilepic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full sm:w-2/3 p-6 rounded-r-lg flex flex-col justify-center items-center sm:items-start">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
            AKSHITA THAKUR
          </h1>
          <p className="text-lg sm:text-xl mt-2 text-center sm:text-left">
            Senior Scrum Master/ Project Manager
          </p>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row">
        {/* Left Column - full width on mobile, 1/3 on desktop */}
        <div className="w-full sm:w-1/3 bg-slate-800 text-white p-6">
          {/* About Me Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">👩🏽‍💻 About Me</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-base italic">
                <span>
                  Certified Scrum Master with over 7 years of experience in
                  Agile methodologies, including Scrum, Kanban, and SAFe. Proven
                  track record of efficiently managing development sprints from
                  planning to execution and review, coaching cross-functional
                  teams, and fostering continuous improvement. Adept at using
                  tools such as Jira, Confluence, and cloud-based platforms to
                  deliver high-quality products with speed and precision. Highly
                  motivated servant leader with a strong growth mindset,
                  excellent facilitation skills, and a passion for driving
                  organizational agility.
                </span>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">☎️ Contact</h2>
            <div className="space-y-3 text-xs sm:text-base italic">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="break-words">
                  3011 Ottaviano way, Hutto, Texas 78634
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>517.278.9289</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href={`mailto:akshitathakur27@gmail.com`}
                  className="break-words"
                >
                  akshitathakur27@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span className="break-words">
                  <a href="https://www.linkedin.com/in/akshita-thakur-b45357173/">
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">🎖️ Skills</h2>
            <div className="flex items-center gap-2">
              <ul className="list-disc list-inside space-y-2 italic text-xs sm:text-base">
                <li>Agile Frameworks: Scrum, SAFe, Kanban</li>
                <li>Team Leadership & Coaching</li>
                <li>Sprint Planning & Execution</li>
                <li>Stakeholder Collaboration</li>
                <li>Impediment Resolution</li>
                <li>Metrics Implementation & Reporting</li>
                <li>Tools: Jira, Confluence, Microsoft Azure, AWS</li>
                <li>Behavioral Change Management</li>
                <li>Process Improvement & Optimization</li>
              </ul>
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">⚒️ Tools & Technologies</h2>
            <div className="flex items-center gap-2">
              <ul className="list-disc list-inside space-y-2 italic text-xs sm:text-base">
                <li>Jira, Microsoft Project, Confluence, Miro, Slack, Microsoft Teams, Git, GitHub, GitLab, Jenkins, AWS, Azure, Google Cloud Platform, Selenium, JUnit, Postman, Tableau, Power BI, Google Analytics</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Right Column - full width on mobile, 2/3 on desktop */}
        <div className="w-full sm:w-2/3 p-4 sm:p-8">
          {/* Education Section */}
          <section className="mb-8 text-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span className="text-gray-600">📚</span> Education
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <h3 className="font-bold sm:text-lg">Wilmington University,Delaware, USA</h3>
                  <h3 className="font-bold text-sm">2015-2017</h3>
                </div>
                <p>Master of Science in Information Assurance</p>
                <p className="text-gray-600">GPA: 3.95</p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <h3 className="font-bold sm:text-lg">
                    Jawaharlal Nehru Technology University, Hyderabad, India
                  </h3>
                  <h3 className="font-bold text-sm">2011-2015</h3>
                </div>
                <p>Bachelor of Technology in Computer Science</p>
                <p className="text-gray-600">GPA: 3.75</p>
              </div>
            </div>
          </section>

          {/* Professional Experience Section remains largely the same */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span className="text-gray-600">💼</span> Professional Experience
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold">Senior Scrum Master</h3>
                  <h3 className="font-bold text-sm">2020-Current</h3>
                </div>
                <p className="font-semibold">Cigna Healthcare</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-xs sm:text-base text-left">
                  <li>
                    Led Agile Teams: Managed development sprints in an Agile
                    environment, ensuring timely delivery of quality products
                    with a 95% on-time release rate.
                  </li>

                  <li>
                    Facilitated Scrum Events: Organized Sprint Planning, Daily
                    Scrums, and Retrospectives, resulting in a 30% increase in
                    team collaboration and engagement.
                  </li>

                  <li>
                    Cross-functional Collaboration: Partnered with Product
                    Owners to document requirements and remove impediments,
                    achieving a 20% reduction in project delays.
                  </li>

                  <li>
                    Coaching: Guided teams on Agile practices, enhancing process
                    efficiency by 25% through effective Lean methodologies.
                  </li>

                  <li>
                    Metrics Implementation: Developed metrics for project
                    phases, improving visibility and accountability, leading to
                    a 15% increase in overall productivity.
                  </li>

                  <li>
                    Risk Management: Identified risks and dependencies,
                    successfully removing barriers that resulted in a 40%
                    decrease in project blockers.
                  </li>

                  <li>
                    Process Improvement: Advanced Agile practices through
                    collaboration with Scrum Masters and coaches, contributing
                    to a 10% improvement in sprint velocity.
                  </li>

                  <li>
                    Technical Proficiency: Utilized Jira and Confluence for
                    tracking progress and reporting metrics, enhancing
                    transparency and stakeholder communication.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold">Scrum Master</h3>
                  <h3 className="font-bold text-sm">2017-2019</h3>
                </div>
                <p className="font-semibold">SITA</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-xs sm:text-base">
                  <li>
                    Supported 3 Agile teams in their daily Scrum activities and
                    facilitated core ceremonies including daily standups, sprint
                    planning, and retrospectives
                  </li>
                  <li>
                    Collaborated with 2 Product Owners to maintain healthy
                    backlogs and ensure user stories met the team's Definition
                    of Ready standards
                  </li>
                  <li>
                    Tracked and communicated team metrics including velocity,
                    sprint burndown, and cycle time to identify areas for
                    process improvement
                  </li>
                  <li>
                    Helped remove day-to-day obstacles for development teams by
                    coordinating with other departments and escalating blockers
                    when needed
                  </li>
                  <li>
                    Mentored 5 team members in Agile practices while developing
                    personal expertise through Scrum certification courses and
                    hands-on experience
                  </li>
                  <li>
                    Assisted in organizing and documenting sprint demos to
                    showcase team achievements to stakeholders, improving
                    project visibility by 25%
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
