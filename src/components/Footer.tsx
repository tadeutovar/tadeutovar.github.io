const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-secondary-foreground/70 text-sm">
            © {new Date().getFullYear()} Tadeu Tovar. Todos os direitos reservados.
          </div>
          <div className="text-secondary-foreground/50 text-sm">
            Automação • Dados • IA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
