# 🧠 `todo-usecase`

> Interfaces et contrats métier des cas d’usage de l’application TODO. Ce module constitue la **couche application** responsable de l’orchestration des actions métier, au-dessus des entités.

---

## 🧩 Présentation

Ce module expose les **cas d’usage de haut niveau** (create todo, modify label, retrieve todos, etc.) sous forme de **types et interfaces TypeScript**.

Il formalise les **interactions attendues entre la logique métier et les couches techniques** (présentation, infrastructure, validation, persistance).  
Il ne contient **aucune implémentation concrète**, aucun effet de bord, et **ne dépend d’aucune plateforme** ou outil technique.

---

## 🎯 Objectif

- 📚 Décrire les **use cases** de manière rigoureuse, stable et modulaire  
- 🔌 Définir des **contrats métier** clairs entre la logique applicative et les couches d'infrastructure  
- 🧱 Favoriser la séparation des responsabilités et l’inversion des dépendances  
- 🧩 Permettre l’implémentation interchangeable de la logique (backends, mocks, tests, etc.)

---

## 🚫 Ce que ce module n'est pas

- ❌ Pas d’implémentation des use cases  
- ❌ Pas de logique d’accès aux données  
- ❌ Pas de couche I/O, HTTP, UI, ni d’effet de bord  
- ❌ Pas de dépendance directe aux technologies utilisées par l’application  

---

## ✅ Ce que ce module est

- ✅ Une abstraction métier sur les cas d’usage  
- ✅ Un pont entre les entités du domaine et leur traitement applicatif  
- ✅ Un ensemble de **contrats modulaires** autour des actions possibles sur le domaine TODO  
- ✅ Une base extensible et indépendante, adaptée à une architecture hexagonale ou en couches

---

## 🔗 Documentation

La description complète des cas d’usage, entrées/sorties, rôles et interactions métier est disponible dans [`DOC.md`](./docs/DOC.md).  
Ce document est maintenu séparément pour refléter fidèlement l’évolution des besoins fonctionnels.

---

## 📦 Installation

```bash
npm install todo-usecase
```