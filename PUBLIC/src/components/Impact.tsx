import { GraduationCap, Lightbulb, Users } from "lucide-react";

const Impact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Our Commitment to Every Student
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            DBT-Sahayak was built on a simple belief: no student should lose access to their rightful scholarship due to a complex system. Our work is guided by three core principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {/* Pillar 1: Empowerment */}
          <div className="text-center p-6">
            <div className="flex items-center justify-center h-20 w-20 mx-auto bg-slate-100 text-slate-700 rounded-full border-2 border-slate-200">
              <GraduationCap size={40} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-800">
              Student Empowerment
            </h3>
            <p className="mt-2 text-slate-600">
              We provide students with the tools and clarity to take control of their own financial aid, turning confusion into confidence.
            </p>
          </div>

          {/* Pillar 2: Proactive Governance */}
          <div className="text-center p-6">
            <div className="flex items-center justify-center h-20 w-20 mx-auto bg-slate-100 text-slate-700 rounded-full border-2 border-slate-200">
              <Users size={40} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-800">
              Proactive Governance
            </h3>
            <p className="mt-2 text-slate-600">
              We provide officials with real-time, actionable data to identify and fix problems before they impact students.
            </p>
          </div>
          
          {/* Pillar 3: Technological Clarity */}
          <div className="text-center p-6">
            <div className="flex items-center justify-center h-20 w-20 mx-auto bg-slate-100 text-slate-700 rounded-full border-2 border-slate-200">
              <Lightbulb size={40} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-800">
              Technological Clarity
            </h3>
            <p className="mt-2 text-slate-600">
              We use technology, including AI, not as a gimmick, but as a tool to make a complex system simple and accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;