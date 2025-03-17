# SolarEnergy - Landing Page

![SolarEnergy](https://solarenergy.com.br/logo.png)

Uma landing page moderna para empresa de energia solar por assinatura, desenvolvida com Next.js e Tailwind CSS.

## 🌞 Sobre o Projeto

SolarEnergy é uma landing page para uma empresa que oferece serviços de energia solar por assinatura, permitindo que os clientes economizem até 20% em suas contas de energia sem a necessidade de instalar painéis solares em suas residências.

A página inclui:
- Seção Hero com destaque para os principais benefícios
- Simulador de economia personalizado
- Seção de benefícios da energia solar
- Explicação do processo de adesão
- Chamada para ação (CTA)
- Design responsivo com suporte a tema claro/escuro

## 🚀 Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [React 19](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Radix UI](https://www.radix-ui.com/) - Componentes de UI acessíveis e sem estilo
- [Lucide React](https://lucide.dev/) - Ícones bonitos e consistentes
- [Next Themes](https://github.com/pacocoursey/next-themes) - Suporte a temas para Next.js

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 18.17 ou superior
- pnpm 10.5.0 ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/sua-empresa/solar-energy-landing.git

# Entre no diretório do projeto
cd solar-energy-landing

# Instale as dependências
pnpm install
```

### Executando o projeto

```bash
# Desenvolvimento
pnpm dev

# Produção
pnpm build
pnpm start
```

O site estará disponível em [http://localhost:3002](http://localhost:3002).

### Docker

O projeto também pode ser executado com Docker:

```bash
# Desenvolvimento
pnpm dev:docker

# Produção
pnpm build:docker
```

## 🎨 Personalização

### Cores e Temas

As cores do projeto são definidas em `src/app/globals.css` usando variáveis CSS. O site suporta tema claro e escuro, que podem ser alternados pelo botão no cabeçalho.

### Conteúdo

Para modificar o conteúdo da página, edite os arquivos de componentes em `src/components/`.

## 📱 Responsividade

A landing page é totalmente responsiva e se adapta a diferentes tamanhos de tela, desde dispositivos móveis até desktops.

## 🔍 SEO

O projeto inclui configurações otimizadas para SEO, incluindo:
- Meta tags personalizadas
- Sitemap XML
- Arquivo robots.txt
- Esquemas JSON-LD para melhor indexação

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 📞 Contato

Para mais informações, entre em contato através de [contato@solarenergy.com.br](mailto:contato@solarenergy.com.br).
