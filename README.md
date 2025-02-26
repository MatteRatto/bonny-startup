# Bonny Sport 🏆

Un'applicazione web moderna per la gestione di incentivi sportivi, sviluppata con TypeScript e progettata con un'architettura orientata agli oggetti.

## Descrizione

Bonny Sport è una piattaforma che semplifica l'accesso ai bonus sportivi statali e promuove l'attività fisica, collegando cittadini, incentivi finanziari e servizi sportivi in un unico ecosistema digitale.

## Tecnologie Utilizzate

- TypeScript
- HTML5 / CSS3
- Programmazione Orientata agli Oggetti (OOP)
- Design Responsive

## Funzionalità Principali

- **Gestione Incentivi**: Visualizzazione e assegnazione di bonus sportivi
- **Profili Utente**: Gestione di profili cittadini con interessi sportivi
- **Sistema di Logging**: Monitoraggio in tempo reale delle attività di sistema
- **UI Moderna**: Interfaccia utente elegante con tema personalizzato rosso/nero

## Struttura del Progetto

Il progetto implementa un'architettura basata su interfacce e classi:

- `IStartup`, `IIncentivo`, `ICittadino`: Interfacce che definiscono i contratti di tipo
- `Startup`, `Incentivo`, `Cittadino`: Classi che implementano la logica di business
- Sistema di visualizzazione reattivo che aggiorna l'UI in tempo reale

## Come eseguire localmente

1. Clona il repository
2. Apri `index.html` nel tuo browser

## Sviluppo

Per contribuire o modificare il progetto:

1. Installa le dipendenze: `npm install`
2. Compila TypeScript in watch mode: `npm run watch`
3. Per una build di produzione: `npm run build`

## Autore

Matteo Ratto

## Licenza

MIT
