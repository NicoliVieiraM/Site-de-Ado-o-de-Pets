# 🐾 Site de Adoção de Pets

Sistema full-stack de adoção de animais de estimação onde os usuários podem cadastrar pets que precisam de um lar e visualizar os que já estão disponíveis.

## ✨ Funcionalidades

- Cadastro completo de pets com foto, história, raça, porte e idade.
- Opção de marcar se o tutor faz a entrega do animal (e a distância).
- Grid dinâmico exibindo todos os pets disponíveis.
- Janela (Modal) com informações detalhadas e história de cada animalzinho.
- Botão interativo para marcar o pet como "Adotado" (removendo-o do banco de dados).
- Integração completa de Front-End e Back-End.

## 🎨 Layout

O site apresenta:
- Design **limpo e moderno** focado na foto do animal
- Cards interativos com efeitos visuais ao passar o mouse
- Estilização feita **100% à mão** com CSS puro
- Alertas visuais nativos no navegador

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| Java 17 + Spring Boot | Criação da API REST (Back-End) e regras de negócio |
| PostgreSQL | Banco de Dados relacional |
| HTML5 & CSS3 | Estrutura e estilização da interface |
| JavaScript (Vanilla) | Consumo da API via `fetch` e interatividade da tela |

## 📁 Estrutura do Projeto

```text
📦 Projeto-Pet-Adoption
 ┣ 📂 backend                 # Código fonte Java (Spring Boot)
 ┃ ┣ 📂 src/main/java         # Controllers, Models e Repositories
 ┃ ┗ 📄 application.properties # Configuração do Banco de Dados
 ┗ 📂 Frontend-Pets           # Interface Visual
   ┣ 📄 index.html
   ┣ 📄 style.css
   ┗ 📄 script.js
```

## 🚀 Como testar na sua máquina

1. Clone o repositório:
```bash
git clone https://github.com/NicoliVieiraM/Site-de-Ado-o-de-Pets.git
```

2. **Rodando o Banco de Dados e o Java:**
- Certifique-se de ter o PostgreSQL rodando localmente (porta `5432`).
- Abra a pasta `backend` no IntelliJ IDEA.
- Dê play no arquivo `BackendApplication.java` para iniciar o servidor (ele criará as tabelas automaticamente).

3. **Rodando o Site:**
- Abra a pasta `Frontend-Pets` no VS Code.
- Clique com o botão direito no arquivo `index.html` e escolha **Open with Live Server**.

## 👩‍💻 Autora

Feito com 💜 por **Nicoli Vieira**

[![GitHub](https://img.shields.io/badge/GitHub-NicoliVieiraM-181717?style=flat&logo=github)](https://github.com/NicoliVieiraM)
