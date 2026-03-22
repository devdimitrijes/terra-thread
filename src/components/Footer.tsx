import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">Terra & Thread</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Handcrafted goods made with intention. Every piece tells a story of patience, material, and care.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">Navigate</h4>
            <div className="flex flex-col gap-2">
              {["/", "/gallery", "/about", "/contact"].map((to) => (
                <Link key={to} to={to} className="text-sm text-foreground/70 hover:text-foreground transition-colors w-fit">
                  {to === "/" ? "Home" : to.slice(1).charAt(0).toUpperCase() + to.slice(2)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-foreground/70">
              <a href="#" className="hover:text-foreground transition-colors w-fit">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors w-fit">Pinterest</a>
              <a href="#" className="hover:text-foreground transition-colors w-fit">Etsy</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Terra & Thread. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
