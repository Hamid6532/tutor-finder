export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up as a student, parent, or tutor and complete your detailed profile.",
      forTutor: "Showcase your expertise, subjects, pricing, and availability.",
      forStudent:
        "Share your learning goals, preferred subjects, and schedule.",
    },
    {
      number: "02",
      title: "Connect",
      description:
        "Our intelligent matching system helps you find the perfect educational fit.",
      forTutor:
        "Get discovered by students looking for your specific expertise.",
      forStudent:
        "Search, filter, and compare tutors based on your requirements.",
    },
    {
      number: "03",
      title: "Schedule Sessions",
      description:
        "Book and manage learning sessions with our intuitive calendar.",
      forTutor: "Set your availability and receive booking notifications.",
      forStudent:
        "Book sessions with real-time availability and get reminders.",
    },
    {
      number: "04",
      title: "Learn & Grow",
      description: "Engage in productive sessions using our integrated tools.",
      forTutor:
        "Use video calls, file sharing, and progress tracking to deliver value.",
      forStudent:
        "Enjoy personalized learning experiences and track your improvement.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Our streamlined process makes finding and scheduling tutoring
            sessions simple and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-teal-700/50 rounded-xl p-8 relative">
              <div className="absolute -top-4 -left-4 bg-teal-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">{step.title}</h3>
              <p className="mb-6 opacity-90">{step.description}</p>

              <div className="space-y-4 mt-6 pt-6 border-t border-teal-500/30">
                <div>
                  <h4 className="font-semibold mb-1 text-teal-200">
                    For Tutors
                  </h4>
                  <p className="text-sm opacity-90">{step.forTutor}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-teal-200">
                    For Students
                  </h4>
                  <p className="text-sm opacity-90">{step.forStudent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 font-bold rounded-md text-lg transition duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
