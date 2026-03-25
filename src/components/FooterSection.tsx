const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-serif text-2xl font-bold text-primary-foreground">
              VEL<span className="text-accent">ARA</span>
            </span>
            <div className="mt-3 text-sm text-muted space-y-0.5">
              <p>Velara Health</p>
              <p>500 Fifth Avenue, Suite 1230</p>
              <p>New York, NY 10110</p>
              <p>United States</p>
              <p><a href="mailto:support@velarahealth.online" className="hover:text-accent transition-colors">support@velarahealth.online</a></p>
              <p>Phone: 1 786 413 0651</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/privacy-policy" className="text-muted hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-muted hover:text-accent transition-colors">Terms of Service</a>
            <a href="/shipping-policy" className="text-muted hover:text-accent transition-colors">Shipping Policy</a>
            <a href="/refund-policy" className="text-muted hover:text-accent transition-colors">Refund Policy</a>
            <a href="/contact-us" className="text-muted hover:text-accent transition-colors">Contact Us</a>
            <a href="/about-us" className="text-muted hover:text-accent transition-colors">About Us</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-muted/20 text-center">
          <p className="text-sm text-muted">
            Copyright 2026 by Velara Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;