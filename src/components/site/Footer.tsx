import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">
            Full <span className="italic text-gold-gradient">Solution</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Dermatologist-led beauty and personal care, formulated, manufactured
            and packaged for retail partners worldwide.
          </p>
          <p className="mt-6 eyebrow">B-BBEE compliant · ISO 22716</p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/science" className="hover:text-foreground">Our Science</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/wholesale" className="hover:text-foreground">Wholesale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>hello@fullsolution.vip</li>
            <li>+27 (0) 11 000 0000</li>
            <li>Johannesburg, South Africa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Full Solution. All rights reserved.</p>
          <p>Crafted with care in South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
