# Instrukce pro práci s MD dokumenty

MD dokument je dokument ve formátu markdown, který vytváříš během své práce

## Šablona pro vytvoření nového MD dokumentu

Šablona pro vytvoření nového dokumentu je uložená ve složce templates a má název document_template.md
Pokud vytváříš novou verzi dokumentu, tak vytvoříš fyzicky nový dokument a součástí jména dokumentu bude i označení verze dokumentu

## Struktura hlavičky MD dokumentu

```yaml
---
title: "Název dokumentu"
author: "jméno autora dokumentu"
date: "datum vytvoření dokumentu"
status: "stav dokumentu: Draft, Active, Replaced"
language: "identifikace jazyku dokumentu"
owner: "jméno vlastníka dokumentu"
version: "verze dokumentu"
tags: "[tagy charakterizující obsah a zařazení dokumentu]"
based_on: "na kterých dokument je tento dokument založený"
revisions:
- "datum: popis změny (version)"
---
```

## Konvence verzování

- nový dokument bude mít
  
  - status: "Draft"
  
  - version: "0.1"

- při práci na dokumentu při každé iteraci zvyš minor o 1

- v okamžiku, kdy bude revize uzavřena a vytvoříš finalní dokument, tak
  
  - status: "Active"
  
  - version: "1.0"

- když se budou dělat revize takového dokumentu, tak každá revize zvýší minor o 1

- při uzavření revizí se major zvýší o 1 a minor bude 0

## Jazyk a styl

Dokumenty vytvářej standardně v češtině

V případě požadavku na vytvoření dokumentu v jiném jazyce dostaneš pokyn ke změně jazyka

Jazyk dokumentu poznamenej při jeho vytvoření  do hlavičky - hodnota language

- CZ pro dokument v češtině

- EN pro dokument v angličtině

## Pravidla pro cesty k obrázkům

- obrázky standardně generuj do složky `output/diagrams/`

- do dokumentu vlož relativní cestu k obrázku (např. `output/diagrams/nazev.png`)

- při vytvoření finální verze dokumentu se zeptej, zda obrázky mají být embedded nebo jen jako odkazy

## Jak do revisions zapisovat změny

- nejprve napiš datum provedení změny

- pak napiš krátký popis změny dokumentu, max. 1 věta

- za popis změny dej do závorky verzi dokumentu, ve které byla tato změna realizována
