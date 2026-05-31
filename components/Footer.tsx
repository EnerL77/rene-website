import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 px-6 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-white tracking-widest uppercase">
          René Lamberti — Berlin
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/impressum"
            className="text-xs text-white hover:text-stone-400 transition-colors duration-200 tracking-wide"
          >
            Impressum
          </Link>
          <p className="text-xs text-white">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
