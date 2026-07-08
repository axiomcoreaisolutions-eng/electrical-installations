/**
 * Seeded default content — the single source of truth until Sanity is
 * populated. Every value here is CMS-editable: Sanity documents with the
 * same shape override these at build time (see src/lib/content.ts).
 */

export interface Subservice {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string[];
  seoTitle: string;
  seoDescription: string;
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
    'Odvodnja – elektroinstalacije - Solarni sustavi - HVAC, Sistemi za kontrolu parkinga, Punionice električnih vozila (EV)',
  headline: 'Tehnički sustavi koji moraju raditi pouzdano.',
  subheadline:
    'Od detekcije kvarova u vodovodnim sustavima do elektroinstalacija, solarnih sustava, klimatizacije, parking sustava i EV punionica — Electrical Installations d.o.o. pruža jasna tehnička rješenja za objekte koji ne smiju stati.',
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

export const categoriesSection = {
  headline: 'Ključni tehnički sustavi na jednom mjestu.',
  supporting:
    'Od vodovodnih kvarova i elektroinstalacija do solarnih sustava, klimatizacije, parking kontrole i EV punionica — usluge su organizirane jasno kako biste brzo pronašli pravi smjer.',
};

export const categories: ServiceCategory[] = [
  {
    title: 'Vodovod, kanalizacija i detekcija kvarova',
    slug: 'vodovod-kanalizacija-i-detekcija-kvarova',
    index: '01',
    shortDescription:
      'Sustavan pristup kvarovima na vodovodnim i kanalizacijskim sustavima — od utvrđivanja uzroka do jasne preporuke.',
    hint: 'Detekcija curenja, ispitivanje puknuća cijevi, mjerenje tlakova, istraživanje gubitaka vode, odštopavanje odvoda.',
    featured: true,
    image: '/images/vodovod.jpg',
    imageAlt: 'Cijevi i ventili u strojarnici vodovodnog sustava',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Vodovod, kanalizacija i detekcija kvarova | Electrical Installations d.o.o.',
    seoDescription:
      'Detekcija curenja vode, ispitivanje puknuća cijevi, mjerenje tlakova, istraživanje gubitaka vode i odštopavanje odvoda. Jasna dijagnoza umjesto nagađanja — Zagreb.',
    intro: [
      'Pad tlaka, vlaga u prostoru, sumnja na puknuće cijevi, nejasna lokacija curenja, gubitak vode ili problemi s odvodnjom — kvarovi na vodovodnim i kanalizacijskim sustavima rijetko se vide golim okom, a pogrešna procjena znači nepotrebno otvaranje zidova i podova.',
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
          'Curenje vode često se primijeti tek posredno: kroz vlagu na zidu, povećanu potrošnju ili pad tlaka. Točna lokacija curenja pritom ostaje nepoznata — a upravo o njoj ovisi koliko će sanacija biti opsežna.',
          'Cilj detekcije je suziti problem na konkretno mjesto u sustavu prije bilo kakvog zahvata, kako bi se popravak sveo na najmanji potreban opseg.',
        ],
        seoTitle: 'Detekcija curenja vode | Electrical Installations d.o.o.',
        seoDescription:
          'Detekcija curenja vode u vodovodnim sustavima — točna lokacija kvara prije zahvata, bez nepotrebnog otvaranja zidova. Zagreb.',
      },
      {
        title: 'Ispitivanje puknuća cijevi',
        slug: 'ispitivanje-puknuca-cijevi',
        shortDescription:
          'Provjera cjelovitosti cijevi kod sumnje na puknuće — jasna potvrda prije sanacije.',
        longDescription: [
          'Sumnja na puknuće cijevi ne mora značiti da puknuće postoji — a ako postoji, ključno je znati gdje. Ispitivanjem se stanje cijevi provjerava sustavno, tako da odluka o sanaciji počiva na nalazu, a ne na pretpostavci.',
          'Rezultat ispitivanja je jasna informacija: postoji li oštećenje, gdje se nalazi i koji je preporučeni sljedeći korak.',
        ],
        seoTitle: 'Ispitivanje puknuća cijevi | Electrical Installations d.o.o.',
        seoDescription:
          'Ispitivanje puknuća cijevi kod pada tlaka ili sumnje na oštećenje — potvrda stanja sustava prije sanacije. Zagreb.',
      },
      {
        title: 'Mjerenje tlakova',
        slug: 'mjerenje-tlakova',
        shortDescription:
          'Kontrola tlaka u vodovodnom sustavu — rana potvrda ispravnosti ili prvi znak kvara.',
        longDescription: [
          'Tlak je jedan od najjasnijih pokazatelja stanja vodovodnog sustava. Odstupanja od očekivanih vrijednosti upućuju na curenje, začepljenje ili problem u instalaciji — često prije nego što se šteta vidi u prostoru.',
          'Mjerenjem tlakova dobiva se objektivan nalaz o stanju sustava, koji služi kao temelj za daljnju dijagnostiku ili kao potvrda da sustav radi ispravno.',
        ],
        seoTitle: 'Mjerenje tlakova | Electrical Installations d.o.o.',
        seoDescription:
          'Mjerenje tlakova u vodovodnim sustavima — objektivna provjera stanja instalacije i rano otkrivanje kvarova. Zagreb.',
      },
      {
        title: 'Istraživanje gubitaka vode',
        slug: 'istrazivanje-gubitaka-vode',
        shortDescription:
          'Utvrđivanje uzroka povećane potrošnje i gubitaka vode u sustavu.',
        longDescription: [
          'Gubitak vode najčešće se otkrije na računu: potrošnja raste, a razlog nije vidljiv. Uzrok može biti skriveno curenje, kvar na instalaciji ili problem koji se razvija postupno.',
          'Istraživanjem gubitaka utvrđuje se gdje voda odlazi iz sustava — kako bi se sanacija usmjerila na stvarni uzrok, a ne na simptome.',
        ],
        seoTitle: 'Istraživanje gubitaka vode | Electrical Installations d.o.o.',
        seoDescription:
          'Istraživanje gubitaka vode — utvrđivanje uzroka povećane potrošnje i skrivenih curenja u vodovodnom sustavu. Zagreb.',
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
          'Odštopavanje odvoda i rješavanje sporog otjecanja — uspostava normalne funkcije odvodnog sustava. Zagreb.',
      },
    ],
  },
  {
    title: 'Izvođenje elektroinstalacija',
    slug: 'elektroinstalacije',
    index: '02',
    shortDescription:
      'Instalacije jake i slabe struje za industrijske, poslovne i stambene objekte — izvedene sustavno i pregledno.',
    hint: 'Jaka i slaba struja — razvodni ormari, uzemljenje, videonadzor i strukturno kabliranje.',
    featured: false,
    image: '/images/elektro.jpg',
    imageAlt: 'Razvodni ormar s osiguračima i ožičenjem tijekom izrade',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Izvođenje elektroinstalacija | Electrical Installations d.o.o.',
    seoDescription:
      'Elektroinstalacije jake i slabe struje: razvodni ormari, uzemljenje, UPS napajanje, videonadzor, strukturno kabliranje i zaštita od požara i provale.',
    intro: [
      'Elektroinstalacije su temelj svakog objekta — i najčešće mjesto na kojem se loša izvedba skupo plaća. Izvodimo instalacije jake i slabe struje s naglaskom na preglednost, sigurnost i trajnost.',
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
        title: 'Najam dizalice s košarom',
        slug: 'najam-dizalice-s-kosarom',
        shortDescription: 'Najam dizalice s košarom za radove na visini.',
        longDescription: [
          'Za radove na visini — na instalacijama, rasvjeti, fasadama ili opremi — dostupan je najam dizalice s košarom.',
          'Dizalica se koristi uz vlastite radove ili se iznajmljuje zasebno, ovisno o potrebi objekta.',
        ],
        seoTitle: 'Najam dizalice s košarom | Electrical Installations d.o.o.',
        seoDescription:
          'Najam dizalice s košarom za radove na visini — uz izvođenje radova ili samostalno. Zagreb.',
      },
    ],
  },
  {
    title: 'Solarni sustavi',
    slug: 'solarni-sustavi',
    index: '03',
    shortDescription:
      'Solarni sustavi uz nadzor i održavanje — dugoročno stabilna proizvodnja energije.',
    hint: 'Solarni sustavi uz nadzor i održavanje.',
    featured: false,
    image: '/images/solar.jpg',
    imageAlt: 'Montaža solarnih panela na krovu objekta',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Solarni sustavi | Electrical Installations d.o.o.',
    seoDescription:
      'Solarni sustavi s nadzorom i održavanjem — pouzdana proizvodnja energije za poslovne i stambene objekte.',
    intro: [
      'Solarni sustav je dugoročna investicija koja vrijedi onoliko koliko pouzdano radi. Uz izvedbu, naglasak stavljamo na nadzor i održavanje — kako bi sustav isporučivao očekivanu proizvodnju kroz cijeli životni vijek.',
    ],
    bullets: ['Solarni sustavi za objekte', 'Nadzor rada sustava', 'Održavanje solarnih sustava'],
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
      'Ugradnja klimatizacijskih i ventilacijskih sustava — stabilna klima i kvaliteta zraka u poslovnim i stambenim objektima.',
    intro: [
      'Klimatizacija i ventilacija izravno utječu na uvjete u prostoru — a njihova pouzdanost na svakodnevni rad objekta. Izvodimo ugradnju sustava klimatizacije i ventilacije prilagođenu namjeni prostora.',
    ],
    bullets: ['Klimatizacijski sustavi', 'Ventilacijski sustavi'],
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
      'Parking sustavi s rampama, naplatom i programskom podrškom usklađenom s fiskalizacijom — za hotele, bolnice, trgovačke centre i javne objekte.',
    intro: [
      'Sustavi za kontrolu parkinga objedinjuju opremu i programsku podršku: rampe, naplatu i upravljanje — usklađeno s propisima o fiskalizaciji.',
      'Rješenja se primjenjuju na različitim tipovima objekata: od hotela i bolnica do trgovačkih centara, zračnih luka i javnih gradskih površina.',
    ],
    bullets: [
      'Ulazno-izlazne rampe',
      'Sustavi naplate parkinga',
      'Programska podrška usklađena s fiskalizacijom',
      'Rješenja za hotele, bolnice, trgovačke centre, zračne luke i gradove',
    ],
    subservices: [],
  },
  {
    title: 'Punionice električnih vozila — EV',
    slug: 'ev-punionice',
    index: '06',
    shortDescription:
      'Distribucija i ugradnja Stekker EV punionica za tvrtke, zgrade i javne lokacije.',
    hint: 'Distribucija i ugradnja Stekker EV punionica.',
    featured: false,
    image: '/images/ev.jpg',
    imageAlt: 'Punjenje električnog vozila na punionici',
    ctaLabel: 'Saznajte više',
    seoTitle: 'Punionice električnih vozila — EV | Electrical Installations d.o.o.',
    seoDescription:
      'Distribucija i ugradnja Stekker punionica za električna vozila — EV infrastruktura za tvrtke, stambene zgrade i javne lokacije.',
    intro: [
      'Elektrifikacija voznih parkova i potreba za punionicama rastu — a kvaliteta izvedbe određuje koliko će punionica pouzdano raditi u svakodnevnoj upotrebi.',
      'Distribuiramo i ugrađujemo Stekker punionice električnih vozila, uz elektroinstalacijsku podlogu izvedenu u vlastitoj režiji.',
    ],
    bullets: [
      'Distribucija Stekker EV punionica',
      'Ugradnja i priprema elektroinstalacija',
      'Rješenja za tvrtke, zgrade i javne lokacije',
    ],
    subservices: [],
  },
];

export const whySection = {
  headline: 'Kvarovi, prekidi i loše izvedeni sustavi nisu samo tehnički problem.',
  supporting:
    'Kad tehnički sustav zakaže, posljedice se ne mjere samo u kvaru koji treba popraviti — mjere se u svemu što taj kvar zaustavi.',
  consequences: [
    {
      title: 'Prekid rada',
      text: 'Objekt koji stane ne stvara prihod — svaki sat prekida ima svoju cijenu.',
    },
    {
      title: 'Šteta na objektu',
      text: 'Neotkriveno curenje ili kvar na instalaciji s vremenom oštećuje konstrukciju i opremu.',
    },
    {
      title: 'Veći troškovi sanacije',
      text: 'Problem koji se rješava kasno rješava se skuplje — i s većim zahvatom.',
    },
    {
      title: 'Sigurnosni rizik',
      text: 'Neispravne instalacije ugrožavaju ljude i imovinu, ne samo funkciju sustava.',
    },
    {
      title: 'Gubitak vremena',
      text: 'Nagađanje, ponavljanje radova i traženje izvođača troše dane — dijagnoza ih štedi.',
    },
    {
      title: 'Nejasna odgovornost',
      text: 'Više izvođača na više sustava znači da nitko ne odgovara za cjelinu. Jedan partner znači jednu odgovornost.',
    },
  ],
  closing:
    'Zato radimo strukturirano: jasna dijagnoza, jasna preporuka, jasna izvedba — za sve ključne sustave objekta, na jednom mjestu.',
};

export const processSection = {
  headline: 'Jasan proces od upita do izvedbe.',
  steps: [
    {
      title: 'Pošaljite upit',
      text: 'Opišite kvar, projekt ili pitanje — telefonom, e-mailom ili putem obrasca.',
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
      text: 'Dobivate konkretan prijedlog rješenja i ponudu — bez nejasnoća.',
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
    'Većina kvarova na vodovodnim i kanalizacijskim sustavima ne vidi se golim okom. Zato prvo utvrđujemo što se stvarno događa — a tek onda predlažemo zahvat.',
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
      text: 'Znate što se radi, zašto se radi i što slijedi — u svakom koraku.',
    },
    {
      title: 'Tehnička preciznost',
      text: 'Odluke se donose na temelju nalaza i mjerenja, ne pretpostavki.',
    },
    {
      title: 'Profesionalan pristup objektu',
      text: 'Prostor u kojem radimo tretiramo kao da je naš — uredno i odgovorno.',
    },
    {
      title: 'Rješenja za više sustava',
      text: 'Vodovod, struja, solar, klimatizacija, parking i EV — jedan partner umjesto pet izvođača.',
    },
    {
      title: 'Odgovorna izvedba',
      text: 'Posao je gotov kad sustav radi — i kad je to provjereno.',
    },
  ],
};

export const aboutSection = {
  headline: 'Partner za tehničke sustave objekta.',
  paragraphs: [
    'Electrical Installations d.o.o. osnovan je 2023. godine i specijaliziran je za širok spektar usluga u području elektroinstalacija i sustava za tehničku opremu — od jake i slabe struje, preko solarnih sustava, klimatizacije i ventilacije, do parking sustava i punionica električnih vozila.',
    'Djelatnost je proširena i na vodovodne i kanalizacijske sustave, s naglaskom na detekciju kvarova: curenja, puknuća cijevi, mjerenje tlakova i istraživanje gubitaka vode. Time objekti dobivaju ono što je u praksi najteže naći — jednog partnera za više ključnih sustava.',
    'U radu s objektima dostupan je i najam dizalice s košarom za radove na visini.',
  ],
};

export const contactCta = {
  headline: 'Imate kvar, projekt ili tehničko pitanje?',
  supporting:
    'Opišite situaciju — vratit ćemo se s jasnom procjenom i preporukom sljedećeg koraka.',
  primaryCta: { label: 'Kontaktirajte nas', href: '/kontakt' },
  secondaryCta: { label: 'Pogledajte usluge', href: '/usluge' },
};

export const contactPage = {
  headline: 'Kontakt',
  supporting:
    'Pošaljite upit s osnovnim informacijama o objektu i problemu — javit ćemo vam se s procjenom i sljedećim korakom.',
  formTitle: 'Pošaljite upit',
  privacyNote:
    'Vaše podatke koristimo isključivo za odgovor na upit. Više u politici privatnosti.',
  serviceOptions: [
    'Vodovod, kanalizacija i detekcija kvarova',
    'Izvođenje elektroinstalacija',
    'Solarni sustavi',
    'Klimatizacijski i ventilacijski sustavi',
    'Sustavi za kontrolu parkinga',
    'Punionice električnih vozila — EV',
    'Ostalo / nisam siguran',
  ],
};

export const seoDefaults = {
  siteTitle: 'Electrical Installations d.o.o.',
  homeTitle:
    'Electrical Installations d.o.o. | Vodovod, elektroinstalacije, solar, HVAC, parking i EV punionice — Zagreb',
  homeDescription:
    'Tehnički sustavi koji moraju raditi pouzdano: detekcija kvarova na vodovodu i kanalizaciji, elektroinstalacije, solarni sustavi, klimatizacija, parking sustavi i EV punionice. Zagreb.',
};
