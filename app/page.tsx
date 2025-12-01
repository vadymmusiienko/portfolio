import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
    // Keep all the projects here for now, will add them later
    const projects = [
        {
            title: "Ray Tracer",
            description: "A physically-based ray tracer implementation",
            href: "/ray-tracer",
        },
        {
            title: "Machine Learning",
            description: "ML projects and experiments",
            href: "/machine-learning",
        },
        {
            title: "Data Science",
            description: "Data analysis and visualization projects",
            href: "/data-science",
        },
        {
            title: "Escape Vimension",
            description: "An interactive experience",
            href: "/escape-vimension",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
                        Software Engineer
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed">
                        Building elegant solutions to complex problems.
                        Currently studying at Pomona College.
                    </p>
                </div>
            </section>

            {/* Work Section */}
            <section id="work" className="py-20 px-6 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-12">
                        Selected Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <Link
                                key={index}
                                href={project.href}
                                className="group block p-8 border border-gray-200 rounded-lg hover:border-gray-300 transition-all hover:shadow-sm"
                            >
                                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-20 px-6 sm:px-8 border-t border-gray-100"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
                        About
                    </h2>
                    <div className="max-w-2xl">
                        <p className="text-gray-600 leading-relaxed mb-4">
                            I&apos;m a software engineer passionate about
                            creating clean, efficient, and meaningful software
                            solutions. My work spans across various domains
                            including computer graphics, machine learning, and
                            data science.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Currently pursuing my studies at Pomona College,
                            where I continue to explore the intersection of
                            technology and creativity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
