import { getImagePath } from "@/utils/imagePaths";

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
                src={getImagePath("my-picture.jpg")}
                alt="Dev Patel"
                className="w-full h-full object-cover object-center"
                style={{ maxHeight: "100%" }}
              />
            </div>
            <div>
              <p className="text-lg mb-4 text-text dark:text-text-dark">
                I&apos;m a passionate Software Engineer with experience in
                full-stack development, cloud engineering, and data analytics
                through various co-op positions in the financial sector.
              </p>
              <p className="text-lg mb-4 text-text dark:text-text-dark">
                My journey in technology began during my studies at McMaster
                University, where I developed a strong foundation in software
                engineering principles. My practical experience spans React,
                Node.js, Python, AWS, and data engineering technologies.
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
