import { getImagePath } from "@/utils/imagePaths";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background dark:bg-background-dark">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-text dark:text-text-dark">
            About Me
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden bg-white shadow-lg aspect-square rounded-2xl dark:bg-gray-800">
              {/* Display the profile image */}
              <img
                src={getImagePath("my-picture.jpg")}
                alt="Dev Patel"
                className="object-cover object-center w-full h-full"
                style={{ maxHeight: "100%" }}
              />
            </div>
            <div>
              <p className="mb-4 text-lg text-text dark:text-text-dark">
                I&apos;m a passionate Software Engineer with experience in
                full-stack development, cloud engineering, and data Engineering
                through various co-op positions in the financial sector.
              </p>
              <p className="mb-4 text-lg text-text dark:text-text-dark">
                My journey in technology began during my studies at Wilfrid
                Laurier University, where I developed a strong foundation in
                software engineering principles.
              </p>
              <p className="mb-6 text-lg text-text dark:text-text-dark">
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
