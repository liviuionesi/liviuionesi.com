import { COMPANY, HOST } from '@/data/company';

/** One heading with its text. A line break in `body` is shown as a line break. */
export interface LegalSection {
  title: string;
  body: string;
}

/** One language version of a legal page. */
export interface LegalText {
  title: string;
  intro: string;
  sections: LegalSection[];
}

const address = `${COMPANY.name}\n${COMPANY.street}\n${COMPANY.postcode} ${COMPANY.city}`;

/** Impressum, German (legally binding) and English. */
export const IMPRESSUM: { de: LegalText; en: LegalText } = {
  de: {
    title: 'Impressum',
    intro: 'Angaben nach § 5 Digitale-Dienste-Gesetz (DDG).',
    sections: [
      { title: 'Anbieter', body: `${address}\nDeutschland\nInhaber: ${COMPANY.owner}` },
      {
        title: 'Kontakt',
        body: `E-Mail: ${COMPANY.email}\nKontaktformular: auf der Startseite.`,
      },
      {
        title: 'Verantwortlich für den Inhalt',
        body: `Verantwortlich nach § 18 Abs. 2 MStV: ${COMPANY.owner}, Anschrift wie oben.`,
      },
    ],
  },
  en: {
    title: 'Legal notice (English version)',
    intro: 'Information under § 5 DDG. The German text above is the binding one.',
    sections: [
      { title: 'Provider', body: `${address}\nGermany\nOwner: ${COMPANY.owner}` },
      {
        title: 'Contact',
        body: `Email: ${COMPANY.email}\nContact form: on the home page.`,
      },
      {
        title: 'Responsible for the content',
        body: `Responsible under § 18 (2) MStV: ${COMPANY.owner}, address as above.`,
      },
    ],
  },
};

/** Datenschutzerklärung, German (legally binding) and English. */
export const DATENSCHUTZ: { de: LegalText; en: LegalText } = {
  de: {
    title: 'Datenschutzerklärung',
    intro: 'So geht diese Website mit personenbezogenen Daten um, wie es Art. 13 DSGVO verlangt.',
    sections: [
      {
        title: 'Verantwortlicher',
        body: `Verantwortlicher nach Art. 4 Nr. 7 DSGVO ist ${COMPANY.name}, Inhaber ${COMPANY.owner}, ${COMPANY.street}, ${COMPANY.postcode} ${COMPANY.city}, Deutschland. E-Mail: ${COMPANY.email}.`,
      },
      {
        title: 'Hosting und Server-Logs',
        body: `Diese Website läuft bei Vercel (${HOST.name}, ${HOST.address}). Bei jedem Seitenaufruf speichert der Vercel-Server Ihre IP-Adresse, Datum und Uhrzeit, die angeforderte Seite und Ihren Browsertyp. Das ist nötig, um die Seite auszuliefern und sicher zu betreiben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: unser Interesse an einer funktionierenden und sicheren Website. Vercel hat seinen Sitz in den USA und ist nach dem EU-U.S. Data Privacy Framework zertifiziert (Art. 45 DSGVO). Vercel verarbeitet die Daten in unserem Auftrag auf Grundlage eines Auftragsverarbeitungsvertrags (Art. 28 DSGVO).`,
      },
      {
        title: 'Cookies und lokaler Speicher',
        body: 'Diese Website setzt keine Cookies für Analyse, Werbung oder Tracking. Ihr Browser speichert im lokalen Speicher zwei Werte: Ihre Wahl des Farbschemas (Schlüssel theme) und, nach dem Absenden des Kontaktformulars, einen Zeitpunkt (Schlüssel contactCooldown), der Mehrfachsendungen kurz bremst. Beide Werte bleiben auf Ihrem Gerät und werden nie an einen Server gesendet. Sie sind für den von Ihnen gewünschten Dienst erforderlich, eine Einwilligung ist deshalb nicht nötig (§ 25 Abs. 2 Nr. 2 TDDDG).',
      },
      {
        title: 'Kontaktformular und E-Mail',
        body: `Wenn Sie das Kontaktformular nutzen, übertragen Sie Name, E-Mail-Adresse, Ihre Nachricht, den Zweck, Ihre Ortspräferenz und, wenn Sie sie eintragen, Telefonnummer, Anschrift und Technologien. Ein Server dieser Website schickt die Angaben per E-Mail an uns. Zum Schutz vor Missbrauch merkt sich der Server Ihre IP-Adresse kurz im Arbeitsspeicher (höchstens 5 Anfragen pro Minute). Wenn Sie an ${COMPANY.email} schreiben, verarbeiten wir Ihre E-Mail-Adresse und Ihre Nachricht ebenso. Wir nutzen die Daten nur, um Ihnen zu antworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um einen Vertrag geht, sonst Art. 6 Abs. 1 lit. f DSGVO. Wir löschen die Nachricht, wenn der Vorgang abgeschlossen ist, es sei denn, ein Gesetz verlangt die Aufbewahrung. Handelsbriefe werden zum Beispiel 6 Jahre aufbewahrt (§ 257 HGB).`,
      },
      {
        title: 'Entfernungsprüfung im Kontaktformular',
        body: 'Nur wenn Sie im Kontaktformular eine Anschrift eintragen und prüfen lassen, sendet Ihr Browser die Anschrift an den Kartendienst Nominatim von OpenStreetMap (nominatim.openstreetmap.org). Dabei sieht der Dienst Ihre IP-Adresse. Danach senden wir nur die gefundenen Koordinaten, ohne Ihren Namen, über unseren Server an den Routing-Dienst OSRM (router.project-osrm.org), um die Entfernung zu berechnen. Sie lösen die Prüfung selbst aus. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Wenn Sie keine Anschrift eintragen, findet keine dieser Übermittlungen statt.',
      },
      {
        title: 'GitHub-Statistik',
        body: 'Nur wenn Sie in der Seitenleiste die GitHub-Statistik öffnen, ruft Ihr Browser Daten von api.github.com ab (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). GitHub sieht dabei Ihre IP-Adresse. Es gilt die Datenschutzerklärung von GitHub. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
      },
      {
        title: 'Anmeldung mit Google',
        body: 'Der Lebenslauf-Bereich ist nur für den Betreiber gedacht. Wenn Sie auf Anmelden klicken, werden Sie zu Google weitergeleitet und Ihr Browser erhält ein technisch notwendiges Sitzungs-Cookie (§ 25 Abs. 2 Nr. 2 TDDDG). Ohne Anmeldung passiert nichts davon. Für die Anmeldung gilt die Datenschutzerklärung von Google.',
      },
      {
        title: 'Ihre Rechte',
        body: `Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Einer Verarbeitung nach Art. 6 Abs. 1 lit. f können Sie jederzeit widersprechen (Art. 21). Um ein Recht auszuüben, schreiben Sie an ${COMPANY.email}.`,
      },
      {
        title: 'Beschwerde',
        body: 'Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Für uns ist das: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart, Deutschland.',
      },
      { title: 'Stand', body: 'Oktober 2026' },
    ],
  },
  en: {
    title: 'Privacy policy (English version)',
    intro:
      'How this website handles personal data, as Art. 13 GDPR requires. The German text above is the binding one.',
    sections: [
      {
        title: 'Controller',
        body: `The controller under Art. 4(7) GDPR is ${COMPANY.name}, owner ${COMPANY.owner}, ${COMPANY.street}, ${COMPANY.postcode} ${COMPANY.city}, Germany. Email: ${COMPANY.email}.`,
      },
      {
        title: 'Hosting and server logs',
        body: `This website runs on Vercel (${HOST.name}, ${HOST.address}). On every page request the Vercel server stores your IP address, the date and time, the page you asked for and your browser type. This is needed to deliver the page and to run it safely. The legal basis is Art. 6(1)(f) GDPR: our interest in a working and safe website. Vercel is based in the USA and is certified under the EU-U.S. Data Privacy Framework (Art. 45 GDPR). Vercel processes the data on our behalf under a data processing agreement (Art. 28 GDPR).`,
      },
      {
        title: 'Cookies and local storage',
        body: 'This website sets no cookies for analytics, advertising or tracking. Your browser keeps two values in local storage: your colour scheme (key theme) and, after you send the contact form, a time (key contactCooldown) that briefly slows down repeat sending. Both values stay on your device and are never sent to a server. They are needed for the service you ask for, so no consent is needed (§ 25(2) no. 2 TDDDG).',
      },
      {
        title: 'Contact form and email',
        body: `When you use the contact form, you send your name, email address, your message, the purpose, your location preference and, if you fill them in, phone number, address and technologies. A server of this website sends the details to us by email. To prevent abuse, the server keeps your IP address briefly in memory (at most 5 requests per minute). If you write to ${COMPANY.email}, we process your email address and message in the same way. We use the data only to reply to you. The legal basis is Art. 6(1)(b) GDPR if a contract is involved, otherwise Art. 6(1)(f) GDPR. We delete the message when the matter is closed, unless a law requires us to keep it. Business letters, for example, are kept for 6 years (§ 257 HGB).`,
      },
      {
        title: 'Distance check in the contact form',
        body: 'Only if you enter an address in the contact form and have it checked, your browser sends the address to the map service Nominatim of OpenStreetMap (nominatim.openstreetmap.org). The service sees your IP address. After that, our server sends only the coordinates found, without your name, to the routing service OSRM (router.project-osrm.org) to calculate the distance. You start the check yourself. The legal basis is Art. 6(1)(f) GDPR. If you enter no address, none of this happens.',
      },
      {
        title: 'GitHub statistics',
        body: 'Only if you open the GitHub statistics in the sidebar, your browser fetches data from api.github.com (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). GitHub sees your IP address. GitHub’s own privacy policy applies. The legal basis is Art. 6(1)(f) GDPR.',
      },
      {
        title: 'Sign in with Google',
        body: 'The CV area is meant for the owner only. If you click Sign in, you are sent to Google and your browser receives a technically necessary session cookie (§ 25(2) no. 2 TDDDG). Without signing in, none of this happens. Google’s own privacy policy applies to the sign-in.',
      },
      {
        title: 'Your rights',
        body: `You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18) and data portability (Art. 20). You can object at any time to processing under Art. 6(1)(f) (Art. 21). To use a right, write to ${COMPANY.email}.`,
      },
      {
        title: 'Complaint',
        body: 'You can complain to a data protection authority. For us this is: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart, Germany.',
      },
      { title: 'Date', body: 'October 2026' },
    ],
  },
};
