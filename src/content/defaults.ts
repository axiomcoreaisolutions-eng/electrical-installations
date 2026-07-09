/**
 * Seeded default content - the single source of truth until Sanity is
 * populated. Every value here is CMS-editable: Sanity documents with the
 * same shape override these at build time (see src/lib/content.ts).
 */

export interface Subservice {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string[];
  bullets?: string[];
  steps?: { title: string; text?: string }[];
  images?: { src: string; alt: string }[];
  seoTitle: string;
  seoDescription: string;
}

export interface CategorySection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: { src: string; alt: string };
}

export interface Product {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  index: string;
  shortDescription: string;
  hint: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  bullets: string[];
  sections?: CategorySection[];
  subservices: Subservice[];
}

export const siteSettings = {
  companyName: 'Electrical Installations d.o.o.',
  positioningLine: 'Tehnički sustavi koji moraju raditi pouzdano.',
  phone: '01 209 0733',
  phoneHref: '+38512090733',
  email: 'info@parking.hr',
  address: 'Krapanjska ulica 12, 10000 Zagreb, Hrvatska',
  foundedYear: 2023,
};

export const heroContent = {
  badge:
    'Odvodnja - elektroinstalacije - Solarni sustavi - HVAC, Sistemi za kontrolu parkinga, Punionice električnih vozila (EV)',
  headline: 'Tehnički sustavi koji moraju raditi pouzdano.',
  subheadline:
    'Od detekcije kvarova u vodovodnim sustavima do elektroinstalacija, solarnih sustava, klimatizacije, parking sustava i EV punionica - Electrical Installations d.o.o. pruža jasna tehnička rješenja za objekte koji ne smiju stati.',
  primaryCta: { label: 'Zatražite ponudu', href: '/kontakt' },
  secondaryCta: { label: 'Pogledajte usluge', href: '/usluge' },
  cardLeft: {
    title: 'Prioritetna kategorija',
    text: 'Vodovod, kanalizacija i detekcija kvarova.',
    hint: 'Curenja, puknuća cijevi, mjerenje tlakova i gubici vode.',
    href: '/usluge/vodovod-kanalizacija-i-detekcija-kvarova',
  },
  cardRight: {
    title: 'Trebate brzu procjenu?',
    ctaLabel: 'Pošaljite upit',
    href: '/kontakt',
  },
};

export const introDuo = {
  left: {
    title: 'Pristup',
    text: 'Dijagnostički pristup tehničkim sustavima: prvo mjerenje i nalaz, zatim jasna preporuka i izvedba. Zahvati se planiraju prema stvarnom stanju sustava, a ne prema pretpostavkama.',
    linkLabel: 'Saznajte više',
    href: '/o-nama',
  },
  right: {
    title: 'Tvrtka',
    text: 'Jedan partner za vodovod, elektroinstalacije, solarne sustave, klimatizaciju, parking sustave i EV punionice - s jednom odgovornošću za cjelinu objekta.',
    linkLabel: 'O nama',
    href: '/o-nama',
  },
};

export const diagnosticsShowcase = {
  headline: 'Dijagnostika vodovodnih sustava',
  supporting:
    'Većina kvarova na vodovodnim i kanalizacijskim sustavima ne vidi se golim okom. Pet dijagnostičkih usluga pokriva put od simptoma do nalaza.',
  codePrefix: 'D',
};

export const backingSection = {
  eyebrow: 'Partnerstvo',
  headline: 'Stekker - hrvatske EV punionice',
  text: 'Distribuiramo i ugrađujemo Stekker punionice električnih vozila, uz elektroinstalacijsku podlogu izvedenu u vlastitoj režiji.',
  linkLabel: 'Punionice električnih vozila',
  href: '/usluge/ev-punionice',
};

/** Homepage feature-row copy: one line + a 3-item spec strip per category
 *  (BEC case-card style). Values are real facts only, never fabricated. */
export const homeFeatures: Record<string, { line: string; specs: { k: string; v: string }[] }> = {
  'vodovod-kanalizacija-i-detekcija-kvarova': {
    line: 'Dijagnostika prije zahvata - točan nalaz umjesto nagađanja.',
    specs: [
      { k: 'Usluge', v: '5' },
      { k: 'Fokus', v: 'Detekcija kvarova' },
      { k: 'Sjedište', v: 'Zagreb' },
    ],
  },
  elektroinstalacije: {
    line: 'Jaka i slaba struja, izvedena pregledno i sigurno.',
    specs: [
      { k: 'Struja', v: 'Jaka i slaba' },
      { k: 'Opseg', v: '9 usluga' },
      { k: 'Sjedište', v: 'Zagreb' },
    ],
  },
  'solarni-sustavi': {
    line: 'Solarni sustavi uz nadzor i održavanje 24/7.',
    specs: [
      { k: 'Nadzor', v: '24/7' },
      { k: 'Sustav', v: 'ON / OFF-GRID' },
      { k: 'Sjedište', v: 'Zagreb' },
    ],
  },
  'klimatizacija-i-ventilacija': {
    line: 'Klimatizacija i ventilacija prilagođena prostoru.',
    specs: [
      { k: 'Fokus', v: 'Klima i ventilacija' },
      { k: 'Primjena', v: 'Stan i poslovni' },
      { k: 'Sjedište', v: 'Zagreb' },
    ],
  },
  'parking-sustavi': {
    line: 'Rampe, naplata i softver usklađen s fiskalizacijom.',
    specs: [
      { k: 'Partner', v: 'Orbility' },
      { k: 'Softver', v: 'Fiskalizacija' },
      { k: 'Sjedište', v: 'Zagreb' },
    ],
  },
  'ev-punionice': {
    line: 'Stekerr punionice, izvedba po principu ključ u ruke.',
    specs: [
      { k: 'Brend', v: 'Stekerr' },
      { k: 'Izvedba', v: 'Ključ u ruke' },
      { k: 'Sjedište', v: 'Zagreb' },
    ],
  },
};

export const homeStatement = {
  eyebrow: 'Tko smo',
  text: 'Tehnički partner za sustave koji ne smiju stati - vodovod i detekcija kvarova, elektroinstalacije, solarni sustavi, klimatizacija, parking sustavi i EV punionice, na jednom mjestu.',
  paragraph:
    'Electrical Installations d.o.o. osnovan je 2023. godine i specijaliziran za širok spektar tehničkih sustava. Objektima nudimo ono što je u praksi najteže naći - jednog partnera s jednom odgovornošću za više ključnih sustava.',
  linkLabel: 'O nama',
  href: '/o-nama',
};

export const categoriesSection = {
  headline: 'Ključni tehnički sustavi na jednom mjestu.',
  supporting:
    'Od vodovodnih kvarova i elektroinstalacija do solarnih sustava, klimatizacije, parking kontrole i EV punionica - usluge su organizirane jasno kako biste brzo pronašli pravi smjer.',
};

export const categories: ServiceCategory[] = [
  {
    title: 'Vodovod, kanalizacija i detekcija kvarova',
    slug: 'vodovod-kanalizacija-i-detekcija-kvarova',
    index: '01',
    shortDescription:
      'Sustavan pristup kvarovima na vodovodnim i kanalizacijskim sustavima - od utvrđivanja uzroka do jasne preporuke.',
    hint: 'Detekcija curenja, ispitivanje puknuća cijevi, mjerenje tlakova, istraživanje gubitaka vode, odštopavanje odvoda.',
    featured: true,
    image: '/images/vodovod.jpg',
    imageAlt: 'Cijevi i ventili u strojarnici vodovodnog sustava',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Vodovod, kanalizacija i detekcija kvarova | Electrical Installations d.o.o.',
    seoDescription:
      'Detekcija curenja vode, ispitivanje puknuća cijevi, mjerenje tlakova, istraživanje gubitaka vode i odštopavanje odvoda. Jasna dijagnoza umjesto nagađanja - Zagreb.',
    intro: [
      'Pad tlaka, vlaga u prostoru, sumnja na puknuće cijevi, nejasna lokacija curenja, gubitak vode ili problemi s odvodnjom - kvarovi na vodovodnim i kanalizacijskim sustavima rijetko se vide golim okom, a pogrešna procjena znači nepotrebno otvaranje zidova i podova.',
      'Naš pristup je dijagnostički: prvo utvrđujemo što se stvarno događa u sustavu, zatim predlažemo najmanji zahvat koji trajno rješava problem. Bez nepotrebnog nagađanja i bez radova koji nisu potrebni.',
    ],
    bullets: [
      'Detekcija curenja vode',
      'Ispitivanje puknuća cijevi',
      'Mjerenje tlakova',
      'Istraživanje gubitaka vode',
      'Odštopavanje odvoda',
    ],
    subservices: [
      {
        title: 'Detekcija curenja vode',
        slug: 'detekcija-curenja-vode',
        shortDescription:
          'Utvrđivanje mjesta curenja u vodovodnom sustavu bez nepotrebnog otvaranja zidova i podova.',
        longDescription: [
          'Curenje vode često se primijeti tek posredno: kroz vlagu na zidu, povećanu potrošnju ili pad tlaka. Točna lokacija curenja pritom ostaje nepoznata - a upravo o njoj ovisi koliko će sanacija biti opsežna.',
          'Cilj detekcije je suziti problem na konkretno mjesto u sustavu prije bilo kakvog zahvata, kako bi se popravak sveo na najmanji potreban opseg.',
        ],
        seoTitle: 'Detekcija curenja vode | Electrical Installations d.o.o.',
        seoDescription:
          'Detekcija curenja vode u vodovodnim sustavima - točna lokacija kvara prije zahvata, bez nepotrebnog otvaranja zidova. Zagreb.',
      },
      {
        title: 'Ispitivanje puknuća cijevi',
        slug: 'ispitivanje-puknuca-cijevi',
        shortDescription:
          'Provjera cjelovitosti cijevi kod sumnje na puknuće - jasna potvrda prije sanacije.',
        longDescription: [
          'Sumnja na puknuće cijevi ne mora značiti da puknuće postoji - a ako postoji, ključno je znati gdje. Ispitivanjem se stanje cijevi provjerava sustavno, tako da odluka o sanaciji počiva na nalazu, a ne na pretpostavci.',
          'Rezultat ispitivanja je jasna informacija: postoji li oštećenje, gdje se nalazi i koji je preporučeni sljedeći korak.',
        ],
        seoTitle: 'Ispitivanje puknuća cijevi | Electrical Installations d.o.o.',
        seoDescription:
          'Ispitivanje puknuća cijevi kod pada tlaka ili sumnje na oštećenje - potvrda stanja sustava prije sanacije. Zagreb.',
      },
      {
        title: 'Mjerenje tlakova',
        slug: 'mjerenje-tlakova',
        shortDescription:
          'Kontrola tlaka u vodovodnom sustavu - rana potvrda ispravnosti ili prvi znak kvara.',
        longDescription: [
          'Tlak je jedan od najjasnijih pokazatelja stanja vodovodnog sustava. Odstupanja od očekivanih vrijednosti upućuju na curenje, začepljenje ili problem u instalaciji - često prije nego što se šteta vidi u prostoru.',
          'Mjerenjem tlakova dobiva se objektivan nalaz o stanju sustava, koji služi kao temelj za daljnju dijagnostiku ili kao potvrda da sustav radi ispravno.',
        ],
        seoTitle: 'Mjerenje tlakova | Electrical Installations d.o.o.',
        seoDescription:
          'Mjerenje tlakova u vodovodnim sustavima - objektivna provjera stanja instalacije i rano otkrivanje kvarova. Zagreb.',
      },
      {
        title: 'Istraživanje gubitaka vode',
        slug: 'istrazivanje-gubitaka-vode',
        shortDescription:
          'Utvrđivanje uzroka povećane potrošnje i gubitaka vode u sustavu.',
        longDescription: [
          'Gubitak vode najčešće se otkrije na računu: potrošnja raste, a razlog nije vidljiv. Uzrok može biti skriveno curenje, kvar na instalaciji ili problem koji se razvija postupno.',
          'Istraživanjem gubitaka utvrđuje se gdje voda odlazi iz sustava - kako bi se sanacija usmjerila na stvarni uzrok, a ne na simptome.',
        ],
        seoTitle: 'Istraživanje gubitaka vode | Electrical Installations d.o.o.',
        seoDescription:
          'Istraživanje gubitaka vode - utvrđivanje uzroka povećane potrošnje i skrivenih curenja u vodovodnom sustavu. Zagreb.',
      },
      {
        title: 'Odštopavanje odvoda',
        slug: 'odstopavanje-odvoda',
        shortDescription:
          'Rješavanje sporog otjecanja i začepljenja odvodnih sustava.',
        longDescription: [
          'Sporo otjecanje, povrat vode ili neugodni mirisi znak su da odvodni sustav ne radi kako bi trebao. Odgađanje u pravilu pogoršava problem.',
          'Odštopavanjem se uspostavlja normalna funkcija odvodnje, a po potrebi se utvrđuje i uzrok ponavljajućih začepljenja.',
        ],
        seoTitle: 'Odštopavanje odvoda | Electrical Installations d.o.o.',
        seoDescription:
          'Odštopavanje odvoda i rješavanje sporog otjecanja - uspostava normalne funkcije odvodnog sustava. Zagreb.',
      },
    ],
  },
  {
    title: 'Izvođenje elektroinstalacija',
    slug: 'elektroinstalacije',
    index: '02',
    shortDescription:
      'Instalacije jake i slabe struje za industrijske, poslovne i stambene objekte - izvedene sustavno i pregledno.',
    hint: 'Jaka i slaba struja - razvodni ormari, uzemljenje, videonadzor i strukturno kabliranje.',
    featured: false,
    image: '/images/elektro.jpg',
    imageAlt: 'Razvodni ormar s osiguračima i ožičenjem tijekom izrade',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Izvođenje elektroinstalacija | Electrical Installations d.o.o.',
    seoDescription:
      'Elektroinstalacije jake i slabe struje: razvodni ormari, uzemljenje, UPS napajanje, videonadzor, strukturno kabliranje i zaštita od požara i provale.',
    intro: [
      'Elektroinstalacije su temelj svakog objekta - i najčešće mjesto na kojem se loša izvedba skupo plaća. Izvodimo instalacije jake i slabe struje s naglaskom na preglednost, sigurnost i trajnost.',
    ],
    bullets: [
      'Utičnice, prekidači, upravljački i razvodni ormari',
      'Izjednačavanje potencijala, uzemljenje i zaštita od munje',
      'Instalacije za industrijske objekte i transformatorske stanice',
      'Neprekidno napajanje (UPS, DEA)',
      'Strukturno kabliranje i komunikacijski kablovi',
      'Videonadzor, interfoni i videofoni',
      'Zaštita od požara i provale',
      'Antenski sustavi',
      'Oprema za katodnu zaštitu',
    ],
    subservices: [
      {
        title: 'Jaka struja',
        slug: 'jaka-struja',
        shortDescription:
          'Instalacija, održavanje i popravak sustava jake struje za stambene, industrijske i komercijalne objekte.',
        longDescription: [
          'Nudimo usluge instalacije, održavanja i popravka sustava jake struje za stambene, industrijske i komercijalne objekte. Specijalizirani smo za prilagođena rješenja, od električnih instalacija i razvodnih ormara do sustava za zaštitu od munje.',
          'Naš certificirani tim osigurava sigurnost, učinkovitost i usklađenost s propisima, nudeći testiranje, certifikaciju i hitne intervencije za male i velike projekte.',
        ],
        bullets: [
          'Zaštita od munje, izjednačavanje potencijala i uzemljenje u stambenim, industrijskim, sportskim, javnim i poslovnim zgradama',
          'Oprema za katodnu zaštitu',
          'Utičnice, prekidači, ugradnja upravljačkih i razvodnih ormara',
          'Instalacije za korisnike raznih tehnologija i komutacijske blokove',
          'Uvođenje instalacija jake struje za industrijsku i drugu električnu opremu',
          'Instalacije za električne transformatorske stanice',
          'Neprekidno napajanje (UPS, DEA)',
          'Instalacije za sustave napajanja, grijanja i klimatizacije',
        ],
        images: [{ src: '/images/legacy/jaka-struja.jpg', alt: 'Elektroinstalaterski radovi na sustavu jake struje' }],
        seoTitle: 'Jaka struja | Electrical Installations d.o.o.',
        seoDescription:
          'Instalacija, održavanje i popravak sustava jake struje: razvodni ormari, uzemljenje, transformatorske stanice, UPS i DEA napajanje. Zagreb.',
      },
      {
        title: 'Slaba struja',
        slug: 'slaba-struja',
        shortDescription:
          'Instalacija i održavanje sustava slabe struje - alarmni sustavi, video nadzor, protupožarni sustavi i kontrola pristupa.',
        longDescription: [
          'Nudimo usluge instalacije i održavanja sustava slabe struje, uključujući alarmne sustave, video nadzor, protupožarne sustave te sustave za upravljanje pristupom. Naš tim koristi visokokvalitetne uređaje i tehnologije, osiguravajući sigurnost, efikasnost i dugotrajan rad.',
          'S obzirom na specifične potrebe korisnika, naši sustavi omogućuju prilagodbu i jednostavno upravljanje, stvarajući zaštitu i udobnost u vašem prostoru.',
        ],
        bullets: [
          'Strukturno kabliranje i postavljanje komunikacijskih kablova',
          'Implementacija i održavanje svih vrsta niskonaponskih instalacija: zaštita od požara i provale',
          'Univerzalno ožičenje',
          'Telefonske i komunikacijske linije',
          'Telekomunikacijski ormari i razdjelnici',
          'Video nadzor, interfoni, videofoni, zvučni i konferencijski sustavi',
          'Antenski sustavi',
        ],
        images: [{ src: '/images/legacy/slaba-struja.jpg', alt: 'Sigurnosna kamera video nadzora na objektu' }],
        seoTitle: 'Slaba struja | Electrical Installations d.o.o.',
        seoDescription:
          'Sustavi slabe struje: video nadzor, alarmi, protupožarna zaštita, strukturno kabliranje, interfoni i antenski sustavi. Zagreb.',
      },
      {
        title: 'Najam dizalice s košarom',
        slug: 'najam-dizalice-s-kosarom',
        shortDescription: 'Najam dizalice s košarom za radove na visini.',
        longDescription: [
          'Za radove na visini - na instalacijama, rasvjeti, fasadama ili opremi - dostupan je najam dizalice s košarom.',
          'Dizalica se koristi uz vlastite radove ili se iznajmljuje zasebno, ovisno o potrebi objekta.',
        ],
        seoTitle: 'Najam dizalice s košarom | Electrical Installations d.o.o.',
        seoDescription:
          'Najam dizalice s košarom za radove na visini - uz izvođenje radova ili samostalno. Zagreb.',
      },
    ],
  },
  {
    title: 'Solarni sustavi',
    slug: 'solarni-sustavi',
    index: '03',
    shortDescription:
      'Solarni sustavi uz nadzor i održavanje - dugoročno stabilna proizvodnja energije.',
    hint: 'Solarni sustavi uz nadzor i održavanje.',
    featured: false,
    image: '/images/solar.jpg',
    imageAlt: 'Montaža solarnih panela na krovu objekta',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Solarni sustavi | Electrical Installations d.o.o.',
    seoDescription:
      'Solarni sustavi s nadzorom i održavanjem - pouzdana proizvodnja energije za poslovne i stambene objekte.',
    intro: [
      'Solarna elektrana omogućuje izravnu pretvorbu sunčeve energije u električnu - čista i neiscrpna energija pretvara se u uštedu. Solarni sustav je dugoročna investicija koja vrijedi onoliko koliko pouzdano radi, pa uz izvedbu naglasak stavljamo na nadzor i održavanje.',
      'Solarna elektrana može smanjiti račune za struju do 80 %. Proizvedena energija koristi se odmah za potrebe objekta, višak se predaje u HEP mrežu, a tijekom noći i oblačnih dana struja se preuzima iz mreže putem dvosmjernog obračunskog mjernog mjesta. Povrat investicije u Hrvatskoj je ispod 10 godina, uz vijek trajanja duži od 25 godina.',
    ],
    bullets: [
      'Analiza trenutne potrošnje struje',
      'Projektiranje sustava i dobivanje potrebnih dozvola od HEP-a',
      'Montaža i instalacija fotonaponske elektrane',
      'Slanje dokumentacije HEP-u i dozvola za trajni pogon',
    ],
    sections: [
      {
        title: 'Nadzor i održavanje - podrška 24/7',
        paragraphs: [
          'Naš tim dostupan je 24 sata dnevno, 7 dana u tjednu, 365 dana u godini za praćenje rada vašeg sustava i hitne intervencije. Pravovremenim reakcijama sprječavamo skupe kvarove i osiguravamo maksimalnu učinkovitost sustava.',
          'Redovnim održavanjem osiguravate najveću iskoristivost sustava, produžujete njegov vijek trajanja i ostvarujete veći povrat investicije.',
        ],
        bullets: [
          'Održavanje pretvarača prema specifikaciji proizvođača',
          'Ispitivanje kontaminacije modula (mahovina, lišajevi, alge)',
          'Pregled montažnog okvira i stezaljki modula',
          'Vizualni pregled kabela i utikača modula na pretvaraču',
          'Kontrola stezaljki i odvodnika prenapona',
          'Provjera kabelskog niza i priključnih stezaljki (DC/AC)',
          'Pregled kućišta pretvarača i čišćenje unutrašnjosti',
          'Ispitivanje osigurača i uređaja za smanjenje snage',
          'Funkcionalno ispitivanje senzora za podatke o vremenu',
          'Pregled zaštite od munje i IT sustava za nadzor',
        ],
        image: { src: '/images/legacy/solar-odrzavanje.jpg', alt: 'Tehničar pregledava solarne panele' },
      },
      {
        title: 'ON-GRID i OFF-GRID sustavi',
        paragraphs: [
          'ON-GRID sustavi omogućuju samoopskrbu električnom energijom uz predaju viška u mrežu: elektrana se sinkronizira s instalacijom objekta i radi paralelno s HEP mrežom, a kad vlastita proizvodnja nije dovoljna, energija se preuzima iz mreže.',
          'OFF-GRID sustavi akumuliraju energiju u baterijama za neprekidnu opskrbu tijekom noći i nepovoljnih uvjeta - najčešće za vikendice i područja bez pristupa javnoj mreži. Nema računa od distributera; izazov su troškovi baterija i ograničen kapacitet pohrane.',
        ],
        image: { src: '/images/legacy/solar-4.jpg', alt: 'Solarna elektrana na krovu objekta' },
      },
      {
        title: 'Od računa za struju do elektrane u trajnom pogonu',
        paragraphs: [
          'Sve što nam treba je vaš račun za struju: iz njega prikupljamo podatke o lokaciji, potrošnji i budućim potrebama te izrađujemo informativnu kalkulaciju - veličinu elektrane, izbor opreme, proračun proizvodnje i povrata investicije.',
          'Nakon odluke o investiciji izrađujemo glavni elektroprojekt, gradimo elektranu, prijavljujemo je distributeru, testiramo sustav i puštamo ga u trajni pogon.',
        ],
        image: { src: '/images/legacy/solar-5.jpg', alt: 'Komponente solarne elektrane' },
      },
    ],
    subservices: [],
  },
  {
    title: 'Klimatizacijski i ventilacijski sustavi',
    slug: 'klimatizacija-i-ventilacija',
    index: '04',
    shortDescription:
      'Ugradnja sustava klimatizacije i ventilacije za ugodne i zdrave radne i životne prostore.',
    hint: 'Ugradnja sustava klimatizacije i ventilacije.',
    featured: false,
    image: '/images/hvac.jpg',
    imageAlt: 'Vanjska jedinica klimatizacijskog sustava',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Klimatizacijski i ventilacijski sustavi | Electrical Installations d.o.o.',
    seoDescription:
      'Ugradnja klimatizacijskih i ventilacijskih sustava - stabilna klima i kvaliteta zraka u poslovnim i stambenim objektima.',
    intro: [
      'Napredna rješenja za klimatizaciju i ventilaciju osiguravaju optimalnu udobnost i kvalitetu zraka u svim prostorima. Od energetski učinkovitih klimatizacijskih jedinica do prilagodljivih sustava ventilacije, nudimo asortiman koji potiče zdravu cirkulaciju zraka i minimizira potrošnju energije.',
      'Modularna rješenja osiguravaju fleksibilnost, dugovječnost i jednostavnu integraciju - poboljšavaju udobnost, sprječavaju vlagu i doprinose održivoj, energetski učinkovitoj unutarnjoj klimi u stambenim i komercijalnim prostorima.',
    ],
    bullets: [
      'Energetski učinkovite klimatizacijske jedinice',
      'Prilagodljivi sustavi ventilacije',
      'Modularna rješenja s jednostavnom integracijom',
    ],
    subservices: [],
  },
  {
    title: 'Sustavi za kontrolu parkinga',
    slug: 'parking-sustavi',
    index: '05',
    shortDescription:
      'Rampe, sustavi naplate i programska podrška usklađena s propisima o fiskalizaciji.',
    hint: 'Rampe, sustavi naplate i programska podrška.',
    featured: false,
    image: '/images/parking.jpg',
    imageAlt: 'Unutrašnjost garaže s označenim parkirnim mjestima',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Sustavi za kontrolu parkinga | Electrical Installations d.o.o.',
    seoDescription:
      'Parking sustavi s rampama, naplatom i programskom podrškom usklađenom s fiskalizacijom - za hotele, bolnice, trgovačke centre i javne objekte.',
    intro: [
      'Specijalizirani smo za projektiranje, proizvodnju i implementaciju pouzdanih parking rješenja koja optimiziraju parkiranje i poboljšavaju korisničko iskustvo - u partnerstvu s Orbilityjem, proizvođačem parkirne opreme s više od 3.500 instalacija u funkciji.',
      'Razvijamo vlastiti hardver i softver i prilagođavamo ga zahtjevima klijenata, uz cloud nadzor s uvidom u prihode i statistike u stvarnom vremenu te brz povrat investicije.',
    ],
    bullets: [
      'Zatvoreni parking sustavi s rampama - kontrola pristupa, video nadzor i naplata',
      'Automatizirane opcije naplate: samonaplatne blagajne (gotovina, kartice, mobilna plaćanja)',
      'Softver za upravljanje parkiralištima usklađen s fiskalizacijom, uz izdavanje fiskalnih R1 računa',
      'Cloud nadzor svih parkirališta u stvarnom vremenu',
    ],
    subservices: [
      {
        title: 'Parking sustavi za aerodrome',
        slug: 'aerodromi',
        shortDescription: 'Robusna oprema i digitalna rješenja za upravljanje parkiralištima zračnih luka.',
        longDescription: [
          'Oprema visoke kvalitete koja podnosi zahtjevne uvjete zračnih luka, uz preventivno održavanje i redovito praćenje za maksimalnu dostupnost.',
          'Rješenja po mjeri za svaku zračnu luku - od malih do velikih međunarodnih čvorišta: beskontaktno plaćanje, automatsko prepoznavanje registarskih pločica i integracija s postojećim sustavima zračne luke.',
        ],
        bullets: [
          'Robusna oprema za zahtjevne uvjete',
          'Preventivno održavanje i maksimalna dostupnost',
          'Beskontaktno plaćanje i prepoznavanje registarskih pločica',
          'Interoperabilnost s postojećim sustavima',
        ],
        images: [
          { src: '/images/legacy/aerodromi-1.jpg', alt: 'Parkiralište zračne luke' },
          { src: '/images/legacy/aerodromi-2.jpg', alt: 'Ulazna rampa parkirališta aerodroma' },
        ],
        seoTitle: 'Parking sustavi za aerodrome | Electrical Installations d.o.o.',
        seoDescription: 'Parking sustavi za zračne luke: robusna oprema, prepoznavanje registarskih pločica, beskontaktna naplata i integracija sa sustavima zračne luke.',
      },
      {
        title: 'Parking sustavi za bolnice',
        slug: 'bolnice',
        shortDescription: 'Optimiziran protok vozila i bolje iskustvo pacijenata, posjetitelja i osoblja.',
        longDescription: [
          'Upravljanje rezerviranim parkirnim mjestima za osoblje, privilegirane posjetitelje ili osobe smanjene pokretljivosti, sprječavanje neovlaštenog parkiranja i prioritet za vozila hitnih službi.',
          'Rješenja pojednostavljuju protok pacijenata i posjetitelja, smanjuju stres i podižu sigurnost - uz integraciju s bolničkim informatičkim sustavima.',
        ],
        bullets: [
          'Rezervirana mjesta za osoblje i osobe smanjene pokretljivosti',
          'Prioritet za vozila hitnih službi',
          'Video nadzor i kontrolirani pristup',
          'Integracija s bolničkim sustavima',
        ],
        images: [
          { src: '/images/legacy/bolnice-1.jpg', alt: 'Parkiralište zdravstvene ustanove' },
          { src: '/images/legacy/bolnice-2.jpg', alt: 'Kontrola pristupa bolničkom parkiralištu' },
        ],
        seoTitle: 'Parking sustavi za bolnice | Electrical Installations d.o.o.',
        seoDescription: 'Parking sustavi za bolnice i zdravstvene ustanove: rezervirana mjesta, prioritet za hitne službe, kontrola pristupa i integracija s bolničkim sustavima.',
      },
      {
        title: 'Parking sustavi za hotele',
        slug: 'hoteli',
        shortDescription: 'Bolje iskustvo gostiju, veća atraktivnost objekta i optimizirani prihodi.',
        longDescription: [
          'Integracija s rezervacijskim sustavom, beskontaktno plaćanje i automatsko prepoznavanje registarskih pločica - pozitivno iskustvo parkiranja koje goste motivira na povratak.',
          'Brza implementacija uz mali ili nikakav početni trošak i fleksibilan poslovni model; upravljanje rezerviranim mjestima za VIP goste, grupe i događaje te prioritet za električna vozila s punjenjem uključenim u cijenu parkiranja.',
        ],
        bullets: [
          'Integracija s rezervacijskim i hotelskim sustavima',
          'Rezervirana mjesta za VIP goste i događaje',
          'Prioritet za električna vozila s uključenim punjenjem',
          'Validacija parkirnih karata kroz sustav hotela',
        ],
        images: [
          { src: '/images/legacy/hoteli-1.jpg', alt: 'Hotelsko parkiralište' },
          { src: '/images/legacy/hoteli-2.jpg', alt: 'Ulaz na parkiralište hotela' },
        ],
        seoTitle: 'Parking sustavi za hotele | Electrical Installations d.o.o.',
        seoDescription: 'Parking sustavi za hotele: integracija s rezervacijama, VIP mjesta, EV punjenje u cijeni parkiranja i fleksibilan poslovni model.',
      },
      {
        title: 'Parking sustavi za općine',
        slug: 'opcine',
        shortDescription: 'Pametno upravljanje javnim parkiralištima i lakši promet za stanovnike.',
        longDescription: [
          'Oprema dizajnirana da bude intuitivna i pristupačna svima, uključujući osobe smanjene pokretljivosti - u sklopu pristupa pametnog grada koji optimizira upravljanje resursima.',
          'Plaćanje telefonom, online rezervacija mjesta, pretplate, integracija s punionicama i automatsko prepoznavanje registarskih pločica smanjuju čekanja; mreža podružnica osigurava brzo održavanje opreme.',
        ],
        bullets: [
          'Pristupačna oprema za sve korisnike',
          'Mobilno plaćanje, rezervacije i pretplate',
          'Integracija s EV punionicama',
          'Stabilni, optimizirani javni prihodi',
        ],
        images: [
          { src: '/images/legacy/opcine-1.jpg', alt: 'Javno gradsko parkiralište' },
          { src: '/images/legacy/opcine-2.jpg', alt: 'Naplatni uređaj javnog parkinga' },
        ],
        seoTitle: 'Parking sustavi za općine i gradove | Electrical Installations d.o.o.',
        seoDescription: 'Parking sustavi za općine i gradove: pametno upravljanje javnim parkiralištima, mobilno plaćanje, pretplate i integracija s EV punionicama.',
      },
      {
        title: 'Parking sustavi za shopping centre',
        slug: 'shopping-centri',
        shortDescription: 'Pozitivno iskustvo kupaca i optimizirano upravljanje parkiralištima trgovačkih centara.',
        longDescription: [
          'Automatizirani procesi poput beskontaktnog plaćanja i automatskog prepoznavanja registarskih pločica pojednostavljuju dolazak i odlazak te grade lojalnost kupaca.',
          'Sprječavanje neovlaštenog parkiranja, upravljanje rezerviranim mjestima i prioritet za električna vozila s punjenjem u cijeni parkiranja - uz integraciju s kasama i programima lojalnosti.',
        ],
        bullets: [
          'Beskontaktna naplata i prepoznavanje pločica',
          'Upravljanje rezerviranim mjestima',
          'Prioritet za električna vozila',
          'Integracija s kasama i programima lojalnosti',
        ],
        images: [
          { src: '/images/legacy/shopping-1.jpg', alt: 'Parkiralište trgovačkog centra' },
          { src: '/images/legacy/shopping-2.jpg', alt: 'Rampa na ulazu u garažu shopping centra' },
        ],
        seoTitle: 'Parking sustavi za shopping centre | Electrical Installations d.o.o.',
        seoDescription: 'Parking sustavi za trgovačke centre: beskontaktna naplata, prepoznavanje registarskih pločica, EV prioritet i integracija s programima lojalnosti.',
      },
      {
        title: 'Parking sustavi za instalatere',
        slug: 'instalateri',
        shortDescription: 'Partnerski program za instalatere: kompletna rješenja za upravljanje parkiranjem.',
        longDescription: [
          'Instalaterima nudimo partnerstvo kroz Orbility Partner Program: kompletna rješenja koja obuhvaćaju opremu, softver i digitalne usluge, uz jak i kredibilan brend s više od 3.500 instalacija u funkciji.',
          'Partneri ostvaruju financijske pogodnosti kroz popuste i komercijalne poticaje, pristup tehničkoj podršci i obuci te mogućnost isporuke potpunih rješenja svojim klijentima.',
        ],
        bullets: [
          'Popusti i komercijalni poticaji',
          'Pristup novim tržištima i proizvodima',
          'Tehnička podrška i obuka',
          'Kompletan portfelj: hardver, softver, usluge',
        ],
        images: [
          { src: '/images/legacy/instalateri-1.jpg', alt: 'Ugradnja parkirne opreme' },
          { src: '/images/legacy/instalateri-2.jpg', alt: 'Instalater na parkiralištu' },
        ],
        seoTitle: 'Parking sustavi za instalatere | Electrical Installations d.o.o.',
        seoDescription: 'Partnerski program za instalatere parkirnih sustava: oprema, softver, obuka i tehnička podrška uz komercijalne poticaje.',
      },
      {
        title: 'Parking sustavi za distributere',
        slug: 'distributeri',
        shortDescription: 'Value-Added Reseller program za distributere parkirne opreme i softvera.',
        longDescription: [
          'Distributerima nudimo proširenje tržišne prisutnosti kroz portfelj opreme, softvera i digitalnih rješenja te partnerstvo s tržišnim liderom s više od 3.500 instalacija.',
          'Operatorima su dostupna napredna rješenja: prepoznavanje registarskih pločica, mobilno plaćanje, rezervacije, integracija s punionicama i upravljanje pretplatama - uz pouzdanu opremu koja smanjuje zastoje i troškove održavanja.',
        ],
        bullets: [
          'VAR program s prodajnim poticajima',
          'Redovita lansiranja novih proizvoda',
          'Integracije s backend sustavima operatora',
          'Tehnička stručnost: instalacija, održavanje, otklanjanje kvarova',
        ],
        images: [
          { src: '/images/legacy/distributeri-1.jpg', alt: 'Parkirna oprema u distribuciji' },
          { src: '/images/legacy/distributeri-2.jpg', alt: 'Samonaplatna blagajna parkirnog sustava' },
        ],
        seoTitle: 'Parking sustavi za distributere | Electrical Installations d.o.o.',
        seoDescription: 'VAR program za distributere parkirnih sustava: oprema, softver, digitalna rješenja i tehnička podrška za operatore parkirališta.',
      },
    ],
  },
  {
    title: 'Punionice električnih vozila - EV',
    slug: 'ev-punionice',
    index: '06',
    shortDescription:
      'Distribucija i ugradnja Stekker EV punionica za tvrtke, zgrade i javne lokacije.',
    hint: 'Distribucija i ugradnja Stekker EV punionica.',
    featured: false,
    image: '/images/ev.jpg',
    imageAlt: 'Punjenje električnog vozila na punionici',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Punionice električnih vozila - EV | Electrical Installations d.o.o.',
    seoDescription:
      'Distribucija i ugradnja Stekker punionica za električna vozila - EV infrastruktura za tvrtke, stambene zgrade i javne lokacije.',
    intro: [
      'Elektrifikacija voznih parkova i potreba za punionicama rastu - a kvaliteta izvedbe određuje koliko će punionica pouzdano raditi u svakodnevnoj upotrebi.',
      'Distribuiramo i ugrađujemo Stekerr punionice električnih vozila - hrvatski brend s visokim standardima kvalitete, sigurnosti i dugovječnosti - uz elektroinstalacijsku podlogu izvedenu u vlastitoj režiji i realizaciju po principu "ključ u ruke".',
    ],
    bullets: [
      'Distribucija Stekerr EV punionica',
      'Projektiranje i kompletna izvedba za kućanstva i tvrtke',
      'Podrška kod poticaja Fonda za zaštitu okoliša',
      'Rješenja za tvrtke, zgrade i javne lokacije',
    ],
    subservices: [
      {
        title: 'Sustav punionica',
        slug: 'sustav-punionica',
        shortDescription:
          'Projektiranje i kompletna izvedba punionica za kućanstva i tvrtke - po principu "ključ u ruke".',
        longDescription: [
          'Za kućanstva razvijamo projektna rješenja kućnih punjača prilagođena vašem domu i potrebama - prvi korak prema neovisnosti od javnih punionica, uz sustav optimiziran za dugoročnu izdržljivost i visoke kapacitete.',
          'Za tvrtke smo uz vas od analize potreba i projektiranja do nabave opreme i instalacije: punjač optimalno integriramo u poslovnu infrastrukturu, s tehničkom realizacijom usmjerenom na isplativost i povrat investicije.',
          'Punionice gradimo diljem Hrvatske po principu "ključ u ruke" - preuzimamo cijeli proces od početka do kraja.',
        ],
        steps: [
          { title: 'Projektiranje', text: 'Detaljan plan prema vašim potrebama: optimalna lokacija i kapacitet punjača, prilagođeno prostoru.' },
          { title: 'Ugovaranje potrebne količine struje', text: 'Pregovaramo s distributerima energije i osiguravamo kapacitet za nesmetano punjenje, uz sve administrativne procese.' },
          { title: 'Priprema elektroinstalacija', text: 'Nove instalacije ili nadogradnja postojećih - siguran i učinkovit rad u skladu sa zakonodavstvom i standardima.' },
          { title: 'Ugovaranje s distributerom', text: 'Preuzimamo administrativne i tehničke korake: zahtjev za novu instalaciju i uvjeti pristupa mreži.' },
          { title: 'Ugradnja punjača', text: 'Instalacija i završna testiranja - punionica spremna za upotrebu, u skladu s najvišim sigurnosnim standardima.' },
        ],
        seoTitle: 'Sustav punionica - ključ u ruke | Electrical Installations d.o.o.',
        seoDescription:
          'Projektiranje i izvedba EV punionica za kućanstva i tvrtke po principu ključ u ruke: projekt, struja, instalacije, distributer i ugradnja. Cijela Hrvatska.',
      },
      {
        title: 'Poticaji',
        slug: 'poticaji',
        shortDescription:
          'Podrška kod prijave na natječaje Fonda za zaštitu okoliša za sufinanciranje EV punionica.',
        longDescription: [
          'Fond za zaštitu okoliša najavio je programe financiranja vrijedne 128 milijuna eura, dostupne jedinicama lokalne samouprave, tvrtkama i građanima - u skladu s ciljevima zelene tranzicije.',
          'Naš tim stoji na raspolaganju svima koji žele iskoristiti mogućnosti subvencioniranja instalacije punionica električnih vozila: pružamo potpunu podršku u svim fazama prijave na natječaje i javne pozive.',
        ],
        bullets: [
          'Savjetovanje o uvjetima prijave i potrebnoj dokumentaciji',
          'Izrada tehničke dokumentacije za prijavu',
          'Realizacija instalacije punionice u skladu s važećim zakonima i standardima',
          'Potpuna i točna prijava - veće šanse za ostvarivanje subvencije',
        ],
        seoTitle: 'Poticaji za EV punionice | Electrical Installations d.o.o.',
        seoDescription:
          'Subvencije Fonda za zaštitu okoliša za punionice električnih vozila: savjetovanje, tehnička dokumentacija i izvedba u skladu s natječajima.',
      },
    ],
  },
];

/** Stekerr EV product catalog - migrated from the client's current site. */
export const products: Product[] = [
  {
    name: 'Stekerr F60/90/120',
    description:
      'Modularna tehnologija snage za punjenje vozila s većim baterijama - pouzdanost i robustan dizajn prve hrvatske DC punionice.',
    image: '/images/products/f60.jpg',
    imageAlt: 'Stekerr F60/90/120 DC brza punionica',
    badge: 'DC brzo punjenje',
  },
  {
    name: 'Stekerr P2',
    description:
      'Punionica kojom se stvara budućnost: P2 donosi novu generaciju punjenja i modernizira sustav rasvjete.',
    image: '/images/products/p2.jpg',
    imageAlt: 'Stekerr P2 javna punionica',
    badge: 'iF Design Award',
  },
  {
    name: 'Stekerr P1',
    description:
      'Stvoren za unapređenje javnog i privatnog prostora - jednostavan za održavanje, modernih linija, spreman za sve zahtjeve tržišta.',
    image: '/images/products/p1.jpg',
    imageAlt: 'Stekerr P1 punionica',
  },
  {
    name: 'Stekerr W3',
    description:
      'Punionica nove generacije s jedinstvenim načinom korištenja: uz mobilnu aplikaciju, osim automobila možete priključiti i drugi uređaj.',
    image: '/images/products/w3.jpg',
    imageAlt: 'Stekerr W3 zidna punionica',
  },
  {
    name: 'Stekerr W2',
    description:
      'Kompaktan, pouzdan i jednostavan - novi W2 dizajniran je da ispuni sve osnovne potrebe punjenja električnih vozila.',
    image: '/images/products/w2.jpg',
    imageAlt: 'Stekerr W2 zidna punionica',
    badge: 'Novo',
  },
  {
    name: 'Stekerr W1',
    description:
      'Prilagodljiva punionica u osnovnoj i naprednoj varijanti - efektnim dizajnom prilagođava se svim zahtjevima ugradnje.',
    image: '/images/products/w1.jpg',
    imageAlt: 'Stekerr W1 zidna punionica',
  },
  {
    name: 'CHARX Connect kabel',
    description: 'Premium 5-metarski kabel za AC punjenje električnih vozila u poslovnom ili privatnom okruženju.',
    image: '/images/products/charx.jpg',
    imageAlt: 'CHARX Connect kabel za AC punjenje',
  },
];

export const productsPage = {
  title: 'Uređaji',
  slug: 'uredaji',
  intro:
    'Stekerr punionice električnih vozila - hrvatski brend s visokim standardima kvalitete, sigurnosti i dugovječnosti. Distribuiramo i ugrađujemo cijeli asortiman, od kućnih zidnih punionica do javnih DC brzih punionica.',
  seoTitle: 'Uređaji - Stekerr EV punionice | Electrical Installations d.o.o.',
  seoDescription:
    'Stekerr EV punionice: F60/90/120 DC brza punionica, P2 i P1 javne punionice, W3, W2 i W1 zidne punionice te CHARX Connect kabel. Distribucija i ugradnja.',
};

export const whySection = {
  headline: 'Kvarovi, prekidi i loše izvedeni sustavi nisu samo tehnički problem.',
  supporting:
    'Kad tehnički sustav zakaže, posljedice se ne mjere samo u kvaru koji treba popraviti - mjere se u svemu što taj kvar zaustavi.',
  consequences: [
    {
      title: 'Prekid rada',
      text: 'Objekt koji stane ne stvara prihod - svaki sat prekida ima svoju cijenu.',
    },
    {
      title: 'Šteta na objektu',
      text: 'Neotkriveno curenje ili kvar na instalaciji s vremenom oštećuje konstrukciju i opremu.',
    },
    {
      title: 'Veći troškovi sanacije',
      text: 'Problem koji se rješava kasno rješava se skuplje - i s većim zahvatom.',
    },
    {
      title: 'Sigurnosni rizik',
      text: 'Neispravne instalacije ugrožavaju ljude i imovinu, ne samo funkciju sustava.',
    },
    {
      title: 'Gubitak vremena',
      text: 'Nagađanje, ponavljanje radova i traženje izvođača troše dane - dijagnoza ih štedi.',
    },
    {
      title: 'Nejasna odgovornost',
      text: 'Više izvođača na više sustava znači da nitko ne odgovara za cjelinu. Jedan partner znači jednu odgovornost.',
    },
  ],
  closing:
    'Zato radimo strukturirano: jasna dijagnoza, jasna preporuka, jasna izvedba - za sve ključne sustave objekta, na jednom mjestu.',
};

export const processSection = {
  headline: 'Jasan proces od upita do izvedbe.',
  steps: [
    {
      title: 'Pošaljite upit',
      text: 'Opišite kvar, projekt ili pitanje - telefonom, e-mailom ili putem obrasca.',
    },
    {
      title: 'Kratka procjena situacije',
      text: 'Pregledavamo informacije i utvrđujemo o kakvom se problemu radi.',
    },
    {
      title: 'Izlazak na teren / tehnička analiza',
      text: 'Kad je potrebno, stanje sustava provjeravamo na objektu.',
    },
    {
      title: 'Jasna preporuka i ponuda',
      text: 'Dobivate konkretan prijedlog rješenja i ponudu - bez nejasnoća.',
    },
    {
      title: 'Izvedba i završna provjera',
      text: 'Radovi se izvode prema dogovoru i završavaju provjerom funkcije sustava.',
    },
  ],
};

export const deepDiveSection = {
  headline: 'Vodovod, kanalizacija i detekcija kvarova bez nepotrebnog nagađanja.',
  supporting:
    'Većina kvarova na vodovodnim i kanalizacijskim sustavima ne vidi se golim okom. Zato prvo utvrđujemo što se stvarno događa - a tek onda predlažemo zahvat.',
  problems: [
    'Pad tlaka u sustavu',
    'Vlaga u prostoru',
    'Sumnja na puknuće cijevi',
    'Nejasna lokacija curenja',
    'Gubitak vode i povećana potrošnja',
    'Problemi s odvodnjom',
    'Kvarovi na vodovodnim i kanalizacijskim sustavima',
  ],
  closing:
    'Rezultat je uvijek isti: jasan nalaz, preporuka sljedećeg koraka i zahvat sveden na ono što je stvarno potrebno.',
  ctaLabel: 'Saznajte više o kategoriji',
  ctaHref: '/usluge/vodovod-kanalizacija-i-detekcija-kvarova',
};

export const trustSection = {
  headline: 'Način rada koji možete provjeriti u praksi.',
  cards: [
    {
      title: 'Jasna komunikacija',
      text: 'Znate što se radi, zašto se radi i što slijedi - u svakom koraku.',
    },
    {
      title: 'Tehnička preciznost',
      text: 'Odluke se donose na temelju nalaza i mjerenja, ne pretpostavki.',
    },
    {
      title: 'Profesionalan pristup objektu',
      text: 'Prostor u kojem radimo tretiramo kao da je naš - uredno i odgovorno.',
    },
    {
      title: 'Rješenja za više sustava',
      text: 'Vodovod, struja, solar, klimatizacija, parking i EV - jedan partner umjesto pet izvođača.',
    },
    {
      title: 'Odgovorna izvedba',
      text: 'Posao je gotov kad sustav radi - i kad je to provjereno.',
    },
  ],
};

export const aboutSection = {
  headline: 'Partner za tehničke sustave objekta.',
  paragraphs: [
    'Electrical Installations d.o.o. osnovan je 2023. godine i specijaliziran je za širok spektar usluga u području elektroinstalacija i sustava za tehničku opremu - od jake i slabe struje, preko solarnih sustava, klimatizacije i ventilacije, do parking sustava i punionica električnih vozila.',
    'Djelatnost je proširena i na vodovodne i kanalizacijske sustave, s naglaskom na detekciju kvarova: curenja, puknuća cijevi, mjerenje tlakova i istraživanje gubitaka vode. Time objekti dobivaju ono što je u praksi najteže naći - jednog partnera za više ključnih sustava.',
    'U radu s objektima dostupan je i najam dizalice s košarom za radove na visini.',
  ],
};

export const contactCta = {
  headline: 'Imate kvar, projekt ili tehničko pitanje?',
  supporting:
    'Opišite situaciju - vratit ćemo se s jasnom procjenom i preporukom sljedećeg koraka.',
  primaryCta: { label: 'Kontaktirajte nas', href: '/kontakt' },
  secondaryCta: { label: 'Pogledajte usluge', href: '/usluge' },
};

export const contactPage = {
  headline: 'Kontakt',
  supporting:
    'Pošaljite upit s osnovnim informacijama o objektu i problemu - javit ćemo vam se s procjenom i sljedećim korakom.',
  formTitle: 'Pošaljite upit',
  privacyNote:
    'Vaše podatke koristimo isključivo za odgovor na upit. Više u politici privatnosti.',
  serviceOptions: [
    'Vodovod, kanalizacija i detekcija kvarova',
    'Izvođenje elektroinstalacija',
    'Solarni sustavi',
    'Klimatizacijski i ventilacijski sustavi',
    'Sustavi za kontrolu parkinga',
    'Punionice električnih vozila - EV',
    'Ostalo / nisam siguran',
  ],
};

export const seoDefaults = {
  siteTitle: 'Electrical Installations d.o.o.',
  homeTitle:
    'Electrical Installations d.o.o. | Vodovod, elektroinstalacije, solar, HVAC, parking i EV punionice - Zagreb',
  homeDescription:
    'Tehnički sustavi koji moraju raditi pouzdano: detekcija kvarova na vodovodu i kanalizaciji, elektroinstalacije, solarni sustavi, klimatizacija, parking sustavi i EV punionice. Zagreb.',
};
