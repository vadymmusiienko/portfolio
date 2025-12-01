import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 px-6 sm:px-8 border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Vadym Musiienko
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="mailto:musiienkovadym@gmail.com"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Email
                        </Link>
                        <Link
                            href="https://github.com/vadymmusiienko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/vadymmusiienko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
