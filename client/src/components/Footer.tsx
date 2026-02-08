/**
 * Footer Component - Minimal version with just copyright
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="container py-8 md:py-10">
        <div className="flex flex-col items-center text-center">
          {/* Copyright */}
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Pixel Bloom Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
