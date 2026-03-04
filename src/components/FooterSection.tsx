const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-serif text-2xl font-bold text-primary-foreground">
              FEM<span className="text-accent">VITAL</span>
            </span>
            <div className="mt-3 text-sm text-muted space-y-0.5">
              <p>FemVital Health</p>
              <p>1412 Broadway, 21st Floor</p>
              <p>New York, NY 10018</p>
              <p>United States</p>
              <p><a href="mailto:support@femvitalhealth.online" className="hover:text-accent transition-colors">support@femvitalhealth.online</a></p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/terms-of-service" className="text-muted hover:text-accent transition-colors">Terms of Service</a>
            <a href="/privacy-policy" className="text-muted hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/contact-us" className="text-muted hover:text-accent transition-colors">Contact Us</a>
            <a href="/shipping-policy" className="text-muted hover:text-accent transition-colors">Shipping</a>
            <a href="/refund-policy" className="text-muted hover:text-accent transition-colors">Refund Policy</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-muted/20 text-center">
          <p className="text-sm text-muted">
            Copyright 2026 by FemVital Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
