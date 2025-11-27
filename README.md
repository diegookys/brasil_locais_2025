# 🇧🇷 10 Destinos Imperdíveis no Brasil em 2025

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen) ![License](https://img.shields.io/badge/Licença-MIT-blue)

## Sobre o Projeto

Este projeto é um **E-book Multimídia Interativo** desenvolvido como atividade final da disciplina de **Desenvolvimento Front-End** na Universidade Católica de Brasília (UCB).

O site funciona como um guia turístico digital, apresentando 10 destinos incríveis para visitar no Brasil em 2025. O objetivo principal foi aplicar conceitos fundamentais de HTML5, CSS3 moderno (Flexbox/Grid) e JavaScript, focando em interatividade, responsividade e acessibilidade.

---

## Funcionalidades

O projeto atende a todos os requisitos técnicos propostos, incluindo:

-   **Renderização:** Os cards dos destinos são gerados automaticamente via JavaScript a partir de uma estrutura de dados (Array/JSON).
-   **Busca:** Barra de pesquisa que filtra destinos por nome do local e sigla do estado (ex: "BA") ou nome completo do estado (ex: "Bahia").
-   **Sistema de Favoritos:** O usuário pode "favoritar" destinos. Essas preferências ficam salvas no navegador (LocalStorage), persistindo mesmo após recarregar a página.
-   **Galeria:** Layout em Grid para fotos e incorporação de vídeo do YouTube com tratamento de segurança.
-   **Validação de Formulário:** Verificação simples nos campos de contato antes do envio.
-   **Design:** Layout adaptável para celulares, tablets e desktops.

---

## Tecnologias Utilizadas

-   **HTML:** Estrutura semântica (main, section, nav,).
-   **CSS:** Variáveis CSS, Flexbox, CSS Grid.
-   **JavaScript:** Manipulação do DOM, Event Listeners, `filter()`, `map()` e LocalStorage.

---

## Estrutura de Pastas

```text
brasil_locais_2025/
│
├── index.html        # Estrutura
├── style.css         # Estilo
├── script.js         # Lógica
├── README.md         # Documentação
│
└── assets/           # Imagens locais
    ├── lencois.jpg
    ├── bonito_ms.jpg
    └── jalapao.jpg
    └── ouropreto.jpg
    └── galeria_destinos/
        ├── cataratas.jpg
        ├── floresta-amazonica.jpg
        ├── paodeacucar.jpg
        ├── porto-de-galinhas-pe.jpg

