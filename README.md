# Portfólio NFT - Thumbnails

Um site de portfólio moderno e interativo com estilo dark NFT para exibir thumbnails, otimizado para GitHub Pages.

## 🚀 Características

- **Design Dark NFT**: Estilo moderno com cores escuras e acentos neon
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interativo**: Animações suaves, efeitos de hover e transições fluidas
- **Lightbox**: Visualização ampliada das thumbnails
- **Formulário de Contato**: Interface elegante para comunicação
- **Performance Otimizada**: Carregamento rápido e experiência fluida

## 🎨 Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com variáveis customizadas e animações
- JavaScript vanilla para interatividade
- Google Fonts (Inter e Orbitron)
- Font Awesome para ícones

## 📱 Seções do Site

1. **Hero Section**: Introdução impactante com animações
2. **Portfólio**: Galeria de thumbnails com lightbox
3. **Contato**: Formulário e informações de contato
4. **Footer**: Links sociais e copyright

## 🛠️ Como Usar no GitHub Pages

### 1. Fazer Upload dos Arquivos

1. Crie um novo repositório no GitHub
2. Faça upload dos seguintes arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### 2. Ativar GitHub Pages

1. Vá para as configurações do repositório
2. Role até a seção "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Escolha a branch "main" e a pasta "/ (root)"
5. Clique em "Save"

### 3. Personalizar o Conteúdo

#### Adicionar Suas Thumbnails

Edite o arquivo `script.js` e modifique o array `portfolioData`:

```javascript
const portfolioData = [
    {
        id: 1,
        title: "Seu Título",
        description: "Sua descrição",
        image: "URL_DA_SUA_IMAGEM",
        category: "categoria"
    },
    // Adicione mais itens...
];
```

#### Atualizar Informações de Contato

No arquivo `index.html`, procure pela seção de contato e atualize:

```html
<div class="contact-details">
    <h3>Email</h3>
    <p>seu-email@exemplo.com</p>
</div>
```

#### Personalizar Cores

No arquivo `styles.css`, modifique as variáveis CSS no `:root`:

```css
:root {
    --accent-primary: #00d4ff; /* Sua cor primária */
    --accent-secondary: #7c3aed; /* Sua cor secundária */
    /* ... outras cores */
}
```

## 🎯 Dicas de Otimização

### Para Melhor Performance

1. **Otimize as Imagens**: Use formatos WebP quando possível
2. **Comprima os Arquivos**: Minifique CSS e JavaScript para produção
3. **Use CDN**: Para bibliotecas externas como Font Awesome

### Para SEO

1. Adicione meta tags relevantes no `<head>`
2. Use alt text descritivo nas imagens
3. Implemente structured data para portfólios

## 📋 Estrutura de Arquivos

```
portfolio-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
└── README.md           # Este arquivo
```

## 🌟 Recursos Implementados

- ✅ Layout responsivo
- ✅ Animações CSS
- ✅ Lightbox para imagens
- ✅ Formulário de contato funcional
- ✅ Navegação suave
- ✅ Efeitos de hover
- ✅ Menu mobile
- ✅ Cursor personalizado
- ✅ Scroll animations

## 🔧 Customização Avançada

### Adicionar Novas Animações

```css
@keyframes suaAnimacao {
    from { /* estado inicial */ }
    to { /* estado final */ }
}

.elemento {
    animation: suaAnimacao 1s ease-in-out;
}
```

### Adicionar Novos Efeitos JavaScript

```javascript
// Exemplo: Efeito de partículas
function criarParticulas() {
    // Seu código aqui
}
```

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas sobre a implementação, verifique:

1. Se todos os arquivos estão no repositório
2. Se o GitHub Pages está ativado corretamente
3. Se não há erros no console do navegador

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar conforme necessário.

---

**Desenvolvido com ❤️ para criadores de thumbnails NFT**

