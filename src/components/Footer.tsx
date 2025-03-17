import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">SolarEnergy</h3>
            <p className="text-muted-foreground mb-4">
              Transformando a maneira como você consome energia, com economia e sustentabilidade.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#simulator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Simule sua economia
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                contato@solarenergy.com.br
              </li>
              <li className="text-muted-foreground">
                (11) 99999-9999
              </li>
              <li className="text-muted-foreground">
                Av. Paulista, 1000 - São Paulo/SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SolarEnergy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 