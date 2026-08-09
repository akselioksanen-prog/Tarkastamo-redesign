import './styles.css';
import './overrides.css';

const team = [
  { name: 'Katja Latva-Pirilä', qualification: 'KHT', phone: '050 467 8935', email: 'katja.latva-pirila@tarkastamo.fi', company: 'Adeviisori Oy', image: '/assets/katja-latva-pirila.jpg' },
  { name: 'Jari Kekki', qualification: 'HT', phone: '040 564 2640', email: 'jari.kekki@tarkastamo.fi', company: 'Reviiseurit Oy', image: '/assets/jari-kekki.jpg' },
  { name: 'Susanna Mäkiranta', qualification: 'KHT', phone: '050 339 9905', email: 'susanna.makiranta@tarkastamo.fi', company: 'Mc Audit Oy', image: '/assets/susanna-makiranta.jpg' },
];

const services = [
  ['01', 'Tilintarkastus'],
  ['02', 'Tilintarkastajan muut lausunnot ja todistukset'],
  ['03', 'Taloushallinnon neuvonta'],
  ['04', 'Taloushallinnon koulutukset'],
];

const clients = ['Pienet ja keskisuuret yhtiöt', 'Asunto- ja kiinteistöosakeyhtiöt', 'Yhdistykset ja säätiöt'];

function mailto(email) { return `<a href="mailto:${email}">${email}</a>`; }
function tel(phone) { return `<a href="tel:${phone.replaceAll(' ', '')}">${phone}</a>`; }

function nav(current) {
  const items = [['/', 'Etusivu'], ['/meista', 'Meistä'], ['/yhteystiedot', 'Yhteystiedot']];
  return `<header class="site-header"><div class="shell nav-shell">
    <a class="brand" href="/" aria-label="Tarkastamo, etusivu"><img src="/assets/tarkastamo-logo.png" alt="Tarkastamo" width="542" height="68" /></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span><span class="sr-only">Avaa valikko</span></button>
    <nav id="main-nav" aria-label="Päänavigaatio"><ul>${items.map(([href, label]) => `<li><a ${current === href ? 'aria-current="page"' : ''} href="${href}">${label}</a></li>`).join('')}</ul></nav>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-main">
    <div><img class="footer-logo" src="/assets/tarkastamo-logo.png" alt="Tarkastamo" width="542" height="68" /><p>Tilintarkastuksen asiantuntijat Tampereella.</p></div>
    <address><strong>Toimisto</strong><span>Keenrakatu 1 LH 1</span><span>33100 Tampere</span><a href="https://www.google.com/maps/search/?api=1&query=Keenrakatu+1+LH+1%2C+33100+Tampere" target="_blank" rel="noreferrer">Avaa kartta <span aria-hidden="true">↗</span></a></address>
    <div class="footer-links"><strong>Yhteys</strong><a href="/yhteystiedot">Yhteystiedot</a><a href="/meista">Asiantuntijat</a></div>
  </div><div class="prototype-note shell">Tämä on itsenäisesti laadittu verkkosivuluonnos, eikä se ole yrityksen virallinen verkkosivusto.</div></footer>`;
}

function eyebrow(text) { return `<p class="eyebrow"><span></span>${text}</p>`; }
function cta(href, label, variation = '') { return `<a class="button ${variation}" href="${href}">${label}<span aria-hidden="true">→</span></a>`; }

function home() {
  return `<main id="main-content">
    <section class="hero"><div class="hero-texture"></div><div class="shell hero-content">
      ${eyebrow('Tampere · Tilintarkastus')}
      <h1>Tilintarkastuksen asiantuntijat<br /><em>Tampereella.</em></h1>
      <p class="lede">Tarkastamo tarjoaa tilintarkastusta, lausuntoja ja todistuksia sekä taloushallinnon neuvontaa ja koulutuksia.</p>
      <div class="hero-actions">${cta('/yhteystiedot', 'Ota yhteyttä')}${cta('/meista', 'Tutustu asiantuntijoihin', 'button-quiet')}</div>
    </div><div class="hero-mark" aria-hidden="true">T</div></section>
    <section class="section services"><div class="shell"><div class="section-heading"><div>${eyebrow('Palvelut')}<h2>Selkeä osaaminen<br />talouden tueksi.</h2></div></div>
      <div class="service-grid">${services.map(([number, name]) => `<article class="service-card"><span class="service-number">${number}</span><h3>${name}</h3><p class="service-hint">Klikkaamalla aukeaisi lisää tietoa</p><span class="service-arrow" aria-hidden="true">↗</span></article>`).join('')}</div>
    </div></section>
    <section class="credibility-band"><div class="shell credibility-grid"><div>${eyebrow('Miksi Tarkastamo')}<h2>Kokemusta, johon voi luottaa.</h2></div><ul><li><span>01</span>Usean kymmenen vuoden tarkastuskokemus</li><li><span>02</span>BIG4-tausta</li><li class="credibility-placeholder"><span>03</span>[Vahvistettava asiakashyöty]</li><li class="credibility-placeholder"><span>04</span>[Vahvistettava toimintatapa]</li><li class="credibility-placeholder"><span>05</span>[Vahvistettava lisävahvuus]</li></ul></div></section>
    <section class="section clients"><div class="shell clients-layout"><div>${eyebrow('Asiakkaat')}<h2>Asiantuntemusta<br />eri yhteisöille.</h2></div><ul>${clients.map((client, index) => `<li><span>0${index + 1}</span>${client}</li>`).join('')}</ul></div></section>
    <section class="closing-note"><div class="shell"><p>Otetaan talouden tärkeät kysymykset käsittelyyn.</p>${cta('/yhteystiedot', 'Yhteystiedot')}</div></section>
  </main>`;
}

function personCard(person, contactContext = false) {
  return `<article class="person-card"><div class="person-image"><img src="${person.image}" alt="${person.name}" width="200" height="209" loading="lazy" /></div><div class="person-content"><p class="person-qualification">${person.qualification}</p><h3>${person.name}</h3>${contactContext ? `<p class="person-company">${person.company}</p>` : ''}<dl><div><dt>Puhelin</dt><dd>${tel(person.phone)}</dd></div><div><dt>Sähköposti</dt><dd>${mailto(person.email)}</dd></div></dl></div></article>`;
}

function about() {
  return `<main id="main-content"><section class="page-intro"><div class="shell"><div>${eyebrow('Meistä')}<h1>Tarkastamo on<br /><em>ihmisten</em> asiantuntijatyötä.</h1></div><p class="lede">Tutustu Tarkastamon asiantuntijoihin ja ota yhteyttä suoraan sopivalle henkilölle.</p></div></section>
    <section class="team-section"><div class="shell"><div class="section-heading"><div>${eyebrow('Asiantuntijat')}<h2>Tarkastamon tiimi</h2></div><p>Kolme kokenutta tarkastusalan ammattilaista Tampereella.</p></div><div class="team-grid">${team.map((person) => personCard(person)).join('')}</div></div></section>
    <section class="about-details"><div class="shell about-grid"><div class="dark-callout"><p class="eyebrow"><span></span>Tarkastamon perusta</p><ul><li>Usean kymmenen vuoden tarkastuskokemus</li><li>BIG4-tausta</li></ul></div><div class="placeholder"><span>Vahvistettava sisältö</span><h2>[Tarkastamon toimintatapa]</h2><p>“Tähän voidaan lisätä lyhyt kuvaus siitä, miten Tarkastamo työskentelee asiakkaidensa kanssa ja mikä toimintatavassa on asiakkaille tärkeää.”</p></div></div></section>
    <section class="closing-note"><div class="shell"><p>Ota yhteyttä asiantuntijaan.</p>${cta('/yhteystiedot', 'Yhteystiedot')}</div></section>
  </main>`;
}

function contact() {
  return `<main id="main-content"><section class="page-intro contact-intro"><div class="shell"><div>${eyebrow('Yhteystiedot')}<h1>Ota yhteyttä<br /><em>Tarkastamoon.</em></h1></div><address class="address-block"><strong>Tarkastamo</strong><span>Keenrakatu 1 LH 1</span><span>33100 Tampere</span><a href="https://www.google.com/maps/search/?api=1&query=Keenrakatu+1+LH+1%2C+33100+Tampere" target="_blank" rel="noreferrer">Näytä kartalla <span aria-hidden="true">↗</span></a></address></div></section>
    <section class="contact-people"><div class="shell"><div class="section-heading"><div>${eyebrow('Yhteyshenkilöt')}<h2>Asiantuntijat<br />palveluksessasi.</h2></div><p>Voit olla yhteydessä suoraan asiantuntijoihimme.</p></div><div class="contact-team">${team.map((person) => personCard(person, true)).join('')}</div></div></section>
    <section class="form-section"><div class="shell form-layout"><div>${eyebrow('Yhteydenotto')}<h2>Lähetä viesti.</h2><p>Yhteydenottolomake on tämän sivuluonnoksen prototyyppi eikä lähetä tietoja.</p></div><form id="contact-form" novalidate><div class="form-row"><label>Nimi <b aria-hidden="true">*</b><input name="name" autocomplete="name" required /></label><label>Sähköposti <b aria-hidden="true">*</b><input type="email" name="email" autocomplete="email" inputmode="email" required /></label></div><div class="form-row"><label>Puhelinnumero<input type="tel" name="phone" autocomplete="tel" inputmode="tel" /></label><label>Yritys<input name="company" autocomplete="organization" /></label></div><label>Viesti <b aria-hidden="true">*</b><textarea name="message" required rows="5"></textarea></label><p id="form-status" class="form-status" role="status" aria-live="polite"></p><button class="button" type="submit">Lähetä yhteydenotto <span aria-hidden="true">→</span></button></form></div></section>
  </main>`;
}

const route = location.pathname.replace(/\/$/, '') || '/';
const views = { '/': home, '/meista': about, '/yhteystiedot': contact };
const current = views[route] ? route : '/';
document.querySelector('#app').innerHTML = `${nav(current)}${views[current]()}${footer()}`;
if (!views[route]) history.replaceState({}, '', '/');

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mainNav.classList.toggle('open', !expanded);
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector('#form-status');
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = 'Tarkista pakolliset kentät ennen lähettämistä.';
    return;
  }
  status.textContent = 'Tämä on prototyyppi: viestiä ei lähetetty eikä tallennettu.';
});
