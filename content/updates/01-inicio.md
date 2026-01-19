---
title: "Start do Projeto: Arquitetura Definida"
date: "2026-01-19"
tags: ["Infra", "Backend"]
version: "v0.1.0"
---
Hoje demos o pontapé inicial no Vioo. Definimos que a arquitetura será baseada em 'Dumb Client, Smart Edge'.

O objetivo é garantir que mudanças no layout da SEFAZ não quebrem o app, permitindo correções rápidas via Edge Functions no Supabase.

Tecnologias definidas:
- **App:** React Native (Expo)
- **Backend:** Supabase + Edge Functions (Deno)
- **Site:** Next.js + Markdown (Build in Public)
