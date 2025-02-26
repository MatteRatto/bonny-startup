function displayOutput(text, isSuccess = false) {
  const outputDiv = document.getElementById("output");
  if (outputDiv) {
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(
      2,
      "0"
    )}`;

    const logEntry = document.createElement("div");
    logEntry.className = `log-entry ${isSuccess ? "success" : ""}`;

    logEntry.innerHTML = `
      <span class="log-icon">${isSuccess ? "✓" : "ℹ"}</span>
      <span class="log-text">${text}</span>
      <span class="log-time">Oggi, ${time}</span>
    `;

    outputDiv.insertBefore(logEntry, outputDiv.firstChild);
  }
}

function displayStartupInfo(startup) {
  const startupDiv = document.getElementById("startup-info");
  if (startupDiv) {
    startupDiv.innerHTML = `
      <p class="section-description">${startup.descrizione}</p>
      <p><strong>Nome:</strong> ${startup.nome}</p>
      <p><strong>Settore:</strong> ${startup.settore}</p>
      <div class="service-tags">
        ${startup.prodottiServizi
          .map((s) => `<span class="tag">${s}</span>`)
          .join("")}
      </div>
    `;
  }
}

function displayIncentiviInfo(incentivi) {
  const incentiviDiv = document.getElementById("incentivi-info");
  if (incentiviDiv) {
    incentiviDiv.innerHTML = incentivi
      .map(
        (i) => `
          <div class="stat-item">
            <div class="stat-value">€${i.valore}</div>
            <div class="stat-label">${i.descrizione}</div>
            <div style="font-size: 0.875rem; margin-top: 0.5rem; color: var(--primary);">
              Codice: ${i.codiceId}
            </div>
          </div>
        `
      )
      .join("");
  }
}

function displayCittadiniInfo(cittadini) {
  const cittadiniDiv = document.getElementById("cittadini-info");
  if (cittadiniDiv) {
    cittadiniDiv.innerHTML = cittadini
      .map(
        (c) => `
          <div style="margin-bottom: 1.5rem;">
            <p><strong>${c.nome} ${c.cognome}</strong> (${c.eta} anni)</p>
            <div class="service-tags">
              ${c.interessiSportivi
                .map((i) => `<span class="tag">${i}</span>`)
                .join("")}
            </div>
          </div>
        `
      )
      .join("");
  }
}

interface IStartup {
  nome: string;
  settore: string;
  descrizione: string;
  prodottiServizi: string[];
  riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo {
  codiceId: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string[];
  assegnaAStartup(startup: IStartup): void;
}

interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  partecipaAttivita(startup: IStartup): void;
}

class Startup implements IStartup {
  constructor(
    public nome: string,
    public settore: string,
    public descrizione: string,
    public prodottiServizi: string[]
  ) {}

  riceviIncentivo(incentivo: IIncentivo): void {
    displayOutput(
      `La startup ${this.nome} ha ricevuto un incentivo: ${incentivo.descrizione}`,
      true
    );
    displayOutput(`Valore dell'incentivo: €${incentivo.valore}`);
  }
}

class Incentivo implements IIncentivo {
  constructor(
    public codiceId: string,
    public descrizione: string,
    public valore: number,
    public criteriEleggibilita: string[]
  ) {}

  assegnaAStartup(startup: IStartup): void {
    displayOutput(
      `Assegnazione dell'incentivo ${this.codiceId} alla startup ${startup.nome}`,
      true
    );
    displayOutput(
      `Criteri di eleggibilità verificati: ${this.criteriEleggibilita.join(
        ", "
      )}`
    );
    startup.riceviIncentivo(this);
  }
}

class Cittadino implements ICittadino {
  constructor(
    public nome: string,
    public cognome: string,
    public eta: number,
    public interessiSportivi: string[]
  ) {}

  partecipaAttivita(startup: IStartup): void {
    displayOutput(
      `${this.nome} ${this.cognome} partecipa alle attività di ${startup.nome}`,
      true
    );
    displayOutput(
      `Interessi sportivi coinvolti: ${this.interessiSportivi.join(", ")}`
    );
  }
}

const bonny = new Startup(
  "Bonny Sport",
  "Tecnologie per lo sport e benessere",
  "Piattaforma che semplifica l'accesso ai bonus sportivi e promuove l'attività fisica",
  [
    "Analisi bonus sport",
    "Convenzioni palestre",
    "App fitness tracking",
    "Consulenza sportiva",
  ]
);

const incentivi = [
  new Incentivo("BS2024", "Bonus Sport Giovani 2024", 500, [
    "ISEE sotto 20000€",
    "Età tra 6 e 18 anni",
    "Iscrizione a società sportiva",
  ]),
  new Incentivo("BW2024", "Bonus Wellness & Sport 2024", 300, [
    "Residenza in Italia",
    "Maggiore età",
    "Abbonamento palestra/piscina",
  ]),
];

const cittadini = [
  new Cittadino("Mario", "Rossi", 25, ["Calcio", "Nuoto"]),
  new Cittadino("Anna", "Verdi", 16, ["Pallavolo", "Tennis"]),
];

displayStartupInfo(bonny);
displayIncentiviInfo(incentivi);
displayCittadiniInfo(cittadini);

displayOutput("=== Inizializzazione Sistema Bonny ===", true);

incentivi.forEach((incentivo) => incentivo.assegnaAStartup(bonny));

cittadini.forEach((cittadino) => cittadino.partecipaAttivita(bonny));
