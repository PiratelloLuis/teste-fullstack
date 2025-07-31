# 🚀 Projeto React + Node.js - Cadastro de Usuários

> Aplicação fullstack para gerenciar usuários, com cadastro, listagem e visualização detalhada.  
> Frontend em **React** + backend em **Node.js/Express** conectado a banco **MySQL**.

---

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-5.1.0-black?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Sumário

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Licença](#-licença)

---

## 📖 Sobre

Esta aplicação permite cadastrar usuários, listar usuários paginados, visualizar detalhes e armazenar tudo em banco MySQL.  

O frontend é feito em React, consumindo uma API RESTful feita com Node.js e Express.

---

## ✨ Funcionalidades

- Listagem de usuários paginada (50 por página)
- Cadastro de novos usuários com UUID gerado automaticamente
- Visualização dos detalhes de cada usuário
- Backend com rotas para criação, leitura e busca de usuários
- CORS configurado para facilitar o desenvolvimento local

---

## 🛠 Tecnologias

- **Frontend:**
  - React 18
  - React Router DOM 6
  - Axios
- **Backend:**
  - Node.js 18
  - Express 5
  - MySQL2
  - UUID

---

## 💻 Instalação

### Frontend

```bash
cd frontend
npm install
npm start
