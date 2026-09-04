# 🐾 Site de Adoção de Pets

Este é o meu primeiro projeto Full-Stack! É um sistema simples de adoção de animais de estimação onde podemos cadastrar pets que precisam de um lar e visualizar todos os que estão disponíveis no banco de dados.

Eu separei o projeto em duas partes: o backend (a inteligência e o banco de dados) e o frontend (a interface visual no navegador).

## 🛠️ Tecnologias que usei

- **Frontend:** HTML, CSS e JavaScript puro. Criei a tela na mão sem usar bibliotecas gigantes, fazendo as requisições para a API usando `fetch`.
- **Backend:** Java 17 com Spring Boot.
- **Banco de Dados:** PostgreSQL (para salvar as informações, idades, histórias e links das fotos dos pets).

## 🚀 Como rodar o projeto na sua máquina

Para testar o projeto no seu próprio computador, você precisa ligar o "motor" do Java e depois abrir a tela do site.

**1. Rodando o Servidor (Backend):**
- Abra a pasta `backend` usando o IntelliJ IDEA.
- Deixe o Maven carregar as dependências sozinho.
- Encontre o arquivo `BackendApplication.java` e clique no play verde para iniciar o servidor na porta 8080.

**2. Rodando o Site (Frontend):**
- Abra a pasta `Frontend-Pets` no VS Code.
- Instale a extensão "Live Server".
- Clique com o botão direito no arquivo `index.html` e escolha "Open with Live Server".

## 📝 Resumo
Esse projeto me ajudou muito a entender na prática como funciona uma arquitetura de verdade: como uma tela envia os dados (JSON), como o Java recebe, trata tudo e salva no banco de dados.
