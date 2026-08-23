import Link from "next/link";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(255,90,0,0.12)] bg-[var(--color-background)]">
      <div className="section-shell flex flex-col gap-6 py-8 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>Sarmad Siddique - Full Stack AI Developer</p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="link-underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
