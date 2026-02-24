const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-serif text-2xl font-bold text-primary-foreground">
              FEM<span className="text-accent">VITAL</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            {["Termos de Uso", "Política de Privacidade", "Contato", "Envio", "Reembolso"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-muted/20 text-center">
          <p className="text-sm text-muted">
            Copyright 2025 by FemVital Health. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
