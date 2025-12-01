import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    >
                        Vadym Musiienko
                    </Link>
                    <div className="flex gap-6">
                        <a
                            href="#work"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
