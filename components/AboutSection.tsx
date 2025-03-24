export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-text dark:text-text-dark">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
              {/* Display the profile image */}
              <img
                src="images/my-picture.jpg"
                alt="Dev Patel"
                className="w-full h-full object-contain object-center"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
            <div>
              <p className="text-lg mb-4 text-text dark:text-text-dark">
                I&apos;m a passionate Software Engineer with over 5 years of
                experience building web applications and services.
              </p>
              <p className="text-lg mb-4 text-text dark:text-text-dark">
                My journey in technology began when I built my first website at
                14. Since then, I&apos;ve been hooked on the power of code to
                transform ideas into reality.
              </p>
              <p className="text-lg mb-6 text-text dark:text-text-dark">
                When I&apos;m not coding, you can find me playing cricket,
                hiking, or experimenting with new cooking recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
