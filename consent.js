/* =========================================================================
   Toestemming voor cookies, en Google Analytics dat pas daarna laadt.

   Google Analytics zet cookies, en in België mag dat niet zonder dat de
   bezoeker er eerst ja op zegt. Daarom gebeurt hier het volgende:

     - zolang niemand gekozen heeft, gebeurt er niets en wordt er geen
       enkel verzoek naar Google gestuurd
     - pas bij "Accepteren" wordt gtag geladen
     - bij "Weigeren" blijft alles uit, en we vragen het niet opnieuw

   De keuze staat in de browser van de bezoeker zelf en bereikt ons niet.
   Via de link "Cookies" onderaan elke pagina kan iemand van gedachten
   veranderen; dat moet kunnen, toestemming intrekken hoort net zo
   makkelijk te zijn als geven.

   Het meet-id komt uit analytics.json en wordt door de generators hier
   ingevuld. Staat het leeg, dan doet dit bestand helemaal niets.
   ========================================================================= */

(function () {
  'use strict';

  var GA_ID = 'G-QH4WHHC0WB';
  var SLEUTEL = 'ms-consent';

  // Niet ingesteld? Dan is er niets te vragen en niets te laden.
  if (!GA_ID || GA_ID.indexOf('__') === 0) return;

  var TEKST = {
    nl: {
      titel: 'Mogen we meekijken?',
      uitleg: 'We gebruiken Google Analytics om te zien hoeveel mensen de site bezoeken en welke pagina’s ze lezen. Daarvoor worden cookies geplaatst. Zeg je nee, dan meten we niets en werkt de site gewoon verder.',
      ja: 'Accepteren',
      nee: 'Weigeren',
      meer: 'Privacybeleid',
      heropen: 'Cookies'
    },
    fr: {
      titel: 'Pouvons-nous mesurer ?',
      uitleg: 'Nous utilisons Google Analytics pour savoir combien de personnes visitent le site et quelles pages elles lisent. Cela place des cookies. Si vous refusez, nous ne mesurons rien et le site fonctionne normalement.',
      ja: 'Accepter',
      nee: 'Refuser',
      meer: 'Politique de confidentialité',
      heropen: 'Cookies'
    },
    en: {
      titel: 'May we measure?',
      uitleg: 'We use Google Analytics to see how many people visit the site and which pages they read. That places cookies. If you say no, we measure nothing and the site works just the same.',
      ja: 'Accept',
      nee: 'Decline',
      meer: 'Privacy Policy',
      heropen: 'Cookies'
    }
  };

  function lees(sleutel) {
    try { return localStorage.getItem(sleutel); } catch (e) { return null; }
  }
  function schrijf(sleutel, waarde) {
    try { localStorage.setItem(sleutel, waarde); } catch (e) { /* privemodus */ }
  }

  function taal() {
    var t = lees('ms-lang');
    return TEKST[t] ? t : 'nl';
  }

  // Waar staat het privacybeleid, gezien vanaf deze pagina?
  function privacyPad() {
    var diep = window.location.pathname.indexOf('/vestigingen/') !== -1;
    return (diep ? '../../' : '') + 'privacy.html';
  }

  var geladen = false;
  function laadGoogle() {
    if (geladen) return;
    geladen = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    // Geen advertentiedoeleinden; we willen alleen bezoekersaantallen.
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted'
    });
    window.gtag('config', GA_ID, { anonymize_ip: true });

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  function verwijderBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) b.remove();
    document.body.classList.remove('heeft-cookiebanner');
  }

  function toonBanner() {
    if (document.getElementById('cookie-banner')) return;
    var t = TEKST[taal()];

    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookie-titel');
    banner.setAttribute('aria-describedby', 'cookie-uitleg');

    var tekst = document.createElement('div');
    tekst.className = 'cookie-tekst';
    var h = document.createElement('p');
    h.className = 'cookie-titel';
    h.id = 'cookie-titel';
    h.textContent = t.titel;
    var p = document.createElement('p');
    p.id = 'cookie-uitleg';
    p.textContent = t.uitleg;
    var a = document.createElement('a');
    a.href = privacyPad();
    a.textContent = t.meer;
    p.appendChild(document.createTextNode(' '));
    p.appendChild(a);
    tekst.appendChild(h);
    tekst.appendChild(p);

    var knoppen = document.createElement('div');
    knoppen.className = 'cookie-knoppen';
    var nee = document.createElement('button');
    nee.type = 'button';
    nee.className = 'btn btn-keuze';
    nee.textContent = t.nee;
    var ja = document.createElement('button');
    ja.type = 'button';
    ja.className = 'btn btn-keuze';
    ja.textContent = t.ja;
    knoppen.appendChild(nee);
    knoppen.appendChild(ja);

    banner.appendChild(tekst);
    banner.appendChild(knoppen);
    document.body.appendChild(banner);
    document.body.classList.add('heeft-cookiebanner');

    nee.addEventListener('click', function () {
      schrijf(SLEUTEL, 'denied');
      verwijderBanner();
    });
    ja.addEventListener('click', function () {
      schrijf(SLEUTEL, 'granted');
      verwijderBanner();
      laadGoogle();
    });

    ja.focus();
  }

  function start() {
    var keuze = lees(SLEUTEL);
    if (keuze === 'granted') laadGoogle();
    else if (keuze !== 'denied') toonBanner();

    // "Cookies" onderaan: opnieuw kiezen, ook na weigeren of accepteren
    document.querySelectorAll('[data-cookie-settings]').forEach(function (el) {
      el.textContent = TEKST[taal()].heropen;
      el.addEventListener('click', function (e) {
        e.preventDefault();
        try { localStorage.removeItem(SLEUTEL); } catch (err) { /* privemodus */ }
        toonBanner();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
