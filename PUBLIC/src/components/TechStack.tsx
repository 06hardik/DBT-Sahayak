const TechStack = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Tailwind", icon: "💨" },
    { name: "Express", icon: "🚂" },
    { name: "Twilio", icon: "📞" },
    { name: "NPCI API", icon: "🏦" },
    { name: "Gemini AI", icon: "✨" }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Powered by Modern Technology
          </h2>
          <p className="text-muted-foreground mb-10">
            Built with industry-leading tools for reliability and performance
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
