import Link from 'next/link';
import { Terminal, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="border-b border-border bg-card">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          {/* <span className="text-xl font-bold">DevAPI</span> */}
          <Link className="text-xl font-bold" href="/">DevAPI</Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Docs
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}