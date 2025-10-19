import { Card, CardContent } from "@/components/ui/card";

// The new data structure using actual SVG logos for a professional look.
const technologies = [
  { name: "React", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M12.001 2.002c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10s10-4.477 10-10c0-5.522-4.478-10-10-10zm0 18.002c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.63-10.432c-.44-.438-1.026-.64-1.63-.64-.693 0-1.33.28-1.802.75l.024-.02c-.08.082-.16.162-.24.24l-1.68 1.68c-.08.08-.16.16-.24.24-.29.28-.73.28-1.02 0l-1.68-1.68c-.08-.08-.16-.16-.24-.24-.47-.47-.47-1.23 0-1.7l1.68-1.68c.08-.08.16-.16.24-.24.47-.47 1.11-.75 1.8-.75.604 0 1.19.202 1.63.64l1.68 1.68c.78.78.78 2.05 0 2.83l-1.68 1.68c-.08.08-.16.16-.24.24-.47.47-1.11.75-1.8.75-.69 0-1.33-.28-1.8-.75l-1.68-1.68c-.08-.08-.16-.16-.24-.24-.47-.47-1.11-.75-1.8-.75-.69 0-1.33.28-1.8.75-.47.47-.47 1.23 0 1.7l1.68 1.68c.08.08.16.16.24.24.47.47 1.11.75 1.8.75.69 0 1.33-.28 1.8-.75l1.68-1.68c.08-.08.16-.16.24-.24.286-.288.29-.73 0-1.02z"/></svg> },
  { name: "Node.js", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M12.365 22.822c-3.238 0-4.34-1.432-4.34-4.834V6.012H5.82v12.01c0 4.417 1.783 6.012 6.545 6.012 3.298 0 4.636-1.04 5.927-2.905l-1.93-1.235c-.87 1.34-1.752 2.115-3.997 2.115zM17.5 3.125c-.968 0-1.75.782-1.75 1.75s.782 1.75 1.75 1.75S19.25 5.843 19.25 4.875s-.782-1.75-1.75-1.75z"/></svg> },
  { name: "MongoDB", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M15.93 11.838c-1.481.998-3.837.998-5.318 0-1.481-.998-1.481-2.618 0-3.616 1.48-1.012 3.837-1.012 5.318 0 1.48.998 1.48 2.618 0 3.616zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.12 14.86c-4.44-.06-4.5-2.39-4.5-4.94 0-2.58.05-4.87 4.5-4.94.39.01.76.01 1.12.01 2.94 0 5.42 2.37 5.42 5.31 0 2.22-1.8 4.29-4.3 4.62-.29.04-.6.04-.84.04z"/></svg> },
  { name: "Tailwind CSS", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zM9.375 12c0-1.031.844-1.875 1.875-1.875h1.5c1.031 0 1.875.844 1.875 1.875s-.844 1.875-1.875 1.875h-1.5C10.219 13.875 9.375 13.031 9.375 12zm-3 5.625c0-1.031.844-1.875 1.875-1.875h1.5c1.031 0 1.875.844 1.875 1.875s-.844 1.875-1.875 1.875h-1.5c-1.031 0-1.875-.844-1.875-1.875z"/></svg> },
  { name: "Twilio", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twilio</title><path d="M12 24c6.628 0 12-5.372 12-12S18.628 0 12 0 0 5.372 0 12s5.372 12 12 12zM7.18 10.975c.98-1.577 2.45-2.81 4.223-3.414a.55.55 0 0 1 .71.488v2.46c0 .324-.247.6-.57.632-1.2.115-2.186.82-2.673 1.782a.551.551 0 0 1-.958-.337c-.07-.22-.107-.448-.132-.68v-.93zm9.642 2.05c-.98 1.577-2.45 2.81-4.223 3.414a.55.55 0 0 1-.71-.488v-2.46c0-.324.247-.6.57-.632 1.2-.115 2.186-.82 2.673-1.782a.551.551 0 0 1 .958.337c.07.22.107.448.132.68v.93z"/></svg> },
  { name: "Gemini AI", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Gemini</title><path d="M12.42 1.845a7.5 7.5 0 0 0-9.87 9.87 7.5 7.5 0 0 0 9.87-9.87M12.42 22.155a7.5 7.5 0 0 1-9.87-9.87 7.5 7.5 0 0 1 9.87 9.87M19.92 4.345a5.15 5.15 0 0 0-7.29 7.29 5.15 5.15 0 0 0 7.29-7.29"/></svg> },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Powered by a Modern & Reliable Tech Stack
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We use industry-leading technologies to ensure our service is secure, scalable, and always available for you.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mt-16">
          {technologies.map((tech) => (
            <Card 
              key={tech.name}
              className="bg-slate-50 border-2 border-slate-200 shadow-md hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 text-slate-700">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-slate-800 text-center">
                  {tech.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;