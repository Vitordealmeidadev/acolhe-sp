# Acolhe SP — Doações para Migrantes e Refugiados 🕊️

> Plataforma web que conecta doadores a ONGs parceiras para apoiar de forma direta e transparente a causa de migrantes e refugiados na cidade de São Paulo.

O **Acolhe SP** une tecnologia e design moderno para centralizar campanhas de arrecadação voltadas a necessidades básicas (alimentação e higiene), moradia e cursos de capacidade profissional.

🔗 **[Acesse o projeto homologado na Vercel](https://acolhe-sp.vercel.app/)**

---

## 📸 Preview da Plataforma

Pelo fato de a experiência visual ser um pilar fundamental deste projeto, veja abaixo a interface principal da plataforma:


(<img width="1898" height="938" alt="image" src="https://github.com/user-attachments/assets/234ab0ed-4354-48ed-b442-d87635177e6d" />
)

---

## 🚀 Funcionalidades

- **Design System Responsivo:** Interface limpa, moderna e totalmente adaptável para dispositivos móveis, tablets e desktop.
- **Menu Mobile Integrado:** Navegação fluida e otimizada para smartphones com controle de estado nativo.
- **Scroll Reveal Animate:** Animações sutis e elegantes que surgem conforme o usuário navega pelas seções da página.
- **Contadores Dinâmicos:** Estatísticas de impacto real que são animadas via código assim que entram na tela.
- **Modal de Doação Interativo:** Sistema dinâmico para seleção de valores predefinidos ou inserção de valores personalizados, incluindo validação robusta de dados antes do envio.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído do zero utilizando a stack nativa da web (Vanilla Web Stack), priorizando semântica, performance, SEO e acessibilidade:

- 🌐 **HTML5** — Estruturação semântica avançada e aplicação de atributos de acessibilidade (Aria-labels e papéis de atributos).
- 🎨 **CSS3** — Estilização moderna utilizando *CSS Custom Properties* (variáveis), Flexbox, CSS Grid e funções de responsividade fluida (`clamp`).
- ⚡ **JavaScript (ES6+)** — Manipulação interativa de DOM, animações de scroll baseadas na API *Intersection Observer* e gerenciamento de estados do modal de doações.
- 🔤 **Google Fonts** — Combinação tipográfica das fontes *Fraunces* (títulos de display) e *DM Sans* (legibilidade para o corpo do texto).

## 📁 Estrutura do Projeto

A organização dos arquivos foi dividida de forma estrita e modular para garantir um código limpo e padrão de mercado:

```textbox
├── assets/             # Recursos de mídia (Favicon, imagens de preview)
├── index.html          # Estrutura de tags e conteúdo da página
├── style.css           # Design system, variáveis, layouts e responsividade
├── app.js              # Lógica de interações, animações e validação de formulário
└── README.md           # Documentação do projeto
