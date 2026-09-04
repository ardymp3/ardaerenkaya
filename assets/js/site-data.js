window.ARDA_SITE = {
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/ardaerenkayaa/" },
    { label: "YouTube", url: "https://www.youtube.com/@ArdaErenKaya" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/arda-eren-kaya/" },
    { label: "GitHub", url: "https://github.com/ardaerenkaya" }
  ],
  works: [
    {
      slug: "PractEar",
      title: "PractEar",
      eyebrow: "Mobile App",
      year: "",
      status: "",
      type: "Müzik Teknolojisi",
      role: "Uygulama tasarımı, geliştirme",
      url: "works/PractEar/",
      externalUrl: "https://practear.com/",
      image: "assets/images/practear-icon.webp",
      summary:
        "Müzisyenlerin müzik kulağını geliştirmeleri için bir mobil uygulama tasarladım ve geliştirdim.",
      detail:
        "Müzisyenlerin müzik kulağını geliştirmeleri için bir mobil uygulama tasarladım ve geliştirdim. Uygulama, farklı işitme becerilerine yönelik çeşitli egzersizler içeriyor."
    },
    {
      slug: "De-Noizen",
      title: "De-Noizen",
      eyebrow: "Audio Plug-in",
      year: "In development",
      status: "Free",
      type: "DSP / Plug-in",
      role: "Plug-in design and development",
      url: "works/De-Noizen/",
      externalUrl: "",
      image: "assets/images/de-noizen-cover.png",
      summary:
        "Windows ve macOS için ücretsiz yayınlanması planlanan noise reduction plug-in. Temiz, hızlı ve pratik bir denoising aracı olarak konumlanıyor.",
      detail:
        "de-noizen, gürültülü kayıtları basit, tek düğmeli bir arayüzle temizlemek için tasarlanmış ücretsiz, gerçek zamanlı bir gürültü azaltma eklentisidir.",
      headline: "real-time dialogue noise reduction plugin",
      useCases: [
        "Arkaplan oda gürültüsü",
        "Klima ve havalandırma (HVAC) gürültüsü",
        "Trafik ve yol gürültüsü",
        "Düşük seviyeli prodüksiyon gürültüsü",
        "Nefes, ağız sesleri ve öksürük",
        "Kıyafet ve kumaş sesleri",
        "Arkaplandaki konuşma sesleri (yüksek Reduction değerlerinde)"
      ],
      workflow: [
        "de-noizen gerçek zamanlı çalışır; böylece ses oynatılırken işlemin sonucunu anlık olarak duyabilirsiniz.",
        "Eklentinin temel kontrolü Reduction düğmesidir.",
        "Gürültü azaltma miktarını artırmak için düğmeyi saat yönünde çevirin."
      ],
      reductionLevels: [
        "%0-30: Çok hafif temizlik",
        "%40-60: Çoğu kayıt için doğal gürültü azaltma",
        "%70-90: Gürültülü kayıtlar için daha güçlü azaltma",
        "%100: Zorlu gürültüler için maksimum azaltma"
      ],
      recommendation:
        "En doğal sonucu elde etmek için yaklaşık %50 seviyesinden başlamanız ve arka plan gürültüsü yeterince azalıncaya kadar miktarı kademeli olarak artırmanız önerilir.",
      installation: {
        windows: [
          "VST3 sürümünü Windows yükleyicisini kullanarak kurabilir veya .vst3 eklentisini manuel olarak aşağıdaki klasöre kopyalayabilirsiniz:",
          "C:\\Program Files\\Common Files\\VST3",
          "Kurulumdan sonra DAW'ınızı açın ve eklentileri yeniden taratın."
        ],
        macos: [
          "macOS yükleyicisi aşağıdaki eklentileri içerir:",
          "/Library/Audio/Plug-Ins/VST3/de-noizen.vst3",
          "/Library/Audio/Plug-Ins/Components/de-noizen.component",
          "Uyumlu DAW'larda VST3 sürümünü, Logic Pro'da ise AU sürümünü kullanabilirsiniz.",
          "Logic Pro eklentiyi hemen göstermiyorsa Logic'i yeniden başlatın ve Plugin Manager üzerinden Audio Units eklentilerini yeniden taratın."
        ],
        manual: [
          "Windows yükleyicisini (.exe) kullanmak istemiyorsanız, de-noizen.vst3 dosyasını manuel olarak kurabilirsiniz.",
          "Eklenti dosyasını aşağıdaki klasöre kopyalamanız yeterlidir:",
          "C:\\Program Files\\Common Files\\VST3",
          "Kurulumdan sonra DAW'ınızı açın ve eklentileri yeniden taratın."
        ],
        security:
          "de-noizen.vst3 dosyasının güvenlik taraması için VirusTotal sonuçlarını inceleyebilirsiniz.",
        virusTotalUrl:
          "https://www.virustotal.com/gui/file/9c9b23b89955bcdcb9dd0b36bac62a15a189245e7c1d415829252b7d0a592ba0"
      },
      downloads: [
        {
          label: "Windows Installer",
          url: "downloads/de-noizen-1.0.12-windows-installer.exe",
          note: ".exe / 1.0.12"
        },
        {
          label: "Windows VST3",
          url: "downloads/de-noizen-1.0.12-windows-vst3.zip",
          note: ".zip / manual"
        },
        {
          label: "macOS Package",
          url: "downloads/de-noizen-1.0.12-macos-signed.pkg",
          note: ".pkg / signed"
        }
      ],
      isPluginLanding: true,
      hiddenFromWorks: true
    },
    {
      slug: "52-hertz",
      title: "52 Hertz",
      eyebrow: "Short Film",
      year: "",
      status: "",
      type: "Film",
      role: "Sound design",
      url: "works/52-hertz/",
      externalUrl: "",
      image: "assets/images/52-hertz.png",
      summary:
        "Ahmet Şenkaya tarafından yazılıp yönetilen kısa filmin ses tasarımını üstlendim.",
      detail:
        "Ahmet Şenkaya tarafından yazılıp yönetilen kısa filmin ses tasarımını üstlendim.",
      showContact: false
    },
    {
      slug: "ritzy-poker",
      title: "Ritzy Poker",
      eyebrow: "Game Audio",
      year: "2026",
      status: "Released",
      type: "Game",
      role: "Sound effects design",
      url: "works/ritzy-poker/",
      externalUrl: "https://apps.apple.com/us/app/ritzy-poker/id6739818022",
      image: "assets/images/ritzy-poker-cover.jpg",
      summary:
        "Ritzy Games tarafından geliştirilen Ritzy Poker oyununun ses efektlerini tasarladım.",
      detail:
        "Ritzy Games tarafından geliştirilen Ritzy Poker oyununun ses efektlerini tasarladım.",
      showContact: false,
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/ritzy-poker/id6739818022" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.RitzyGames.RitzyPoker&hl=tr" }
      ]
    },
    {
      slug: "breaworlds",
      title: "Breaworlds",
      eyebrow: "Game Audio",
      year: "",
      status: "",
      type: "Game",
      role: "Music composition and sound effects design",
      url: "works/breaworlds/",
      externalUrl: "",
      image: "assets/images/breaworlds.png",
      summary:
        "Bitdawn Studios tarafından geliştirilen MMO sandbox oyunu Breaworlds için bazı etkinlik tema müziklerini besteledim ve ses efektleri tasarladım.",
      detail:
        "Bitdawn Studios tarafından geliştirilen MMO sandbox oyunu Breaworlds için bazı etkinlik tema müziklerini besteledim ve ses efektleri tasarladım.",
      showContact: false
    },
    {
      slug: "seninle-olmak-var-ya",
      title: "Seninle olmak var ya",
      eyebrow: "Mix",
      year: "",
      status: "",
      type: "Mix",
      role: "Mix",
      url: "works/seninle-olmak-var-ya/",
      externalUrl: "https://www.youtube.com/watch?v=Xub2endZM-I",
      image: "https://img.youtube.com/vi/Xub2endZM-I/hqdefault.jpg",
      summary: "Merve Yılmaz Quartet için mix çalışması.",
      detail: "Merve Yılmaz Quartet'in Seninle olmak var ya kaydı için mix çalışmasını üstlendim.",
      showContact: false,
      links: [{ label: "YouTube", url: "https://www.youtube.com/watch?v=Xub2endZM-I" }]
    },
    {
      slug: "alisamadim",
      title: "Alışamadım",
      eyebrow: "Mix",
      year: "",
      status: "",
      type: "Mix",
      role: "Mix",
      url: "works/alisamadim/",
      externalUrl: "https://www.youtube.com/watch?v=NrU4uwciIGw",
      image: "https://img.youtube.com/vi/NrU4uwciIGw/hqdefault.jpg",
      summary: "Merve Yılmaz Quartet için mix çalışması.",
      detail: "Merve Yılmaz Quartet'in Alışamadım kaydı için mix çalışmasını üstlendim.",
      showContact: false,
      links: [{ label: "YouTube", url: "https://www.youtube.com/watch?v=NrU4uwciIGw" }]
    },
    {
      slug: "zalim",
      title: "Zalim",
      eyebrow: "Mix",
      year: "",
      status: "",
      type: "Mix",
      role: "Mix",
      url: "works/zalim/",
      externalUrl: "https://www.youtube.com/watch?v=OU5S3kKsGY4",
      image: "https://img.youtube.com/vi/OU5S3kKsGY4/hqdefault.jpg",
      summary: "Merve Yılmaz Quartet için mix çalışması.",
      detail: "Merve Yılmaz Quartet'in Zalim kaydı için mix çalışmasını üstlendim.",
      showContact: false,
      links: [{ label: "YouTube", url: "https://www.youtube.com/watch?v=OU5S3kKsGY4" }]
    },
    {
      slug: "kara-kislar",
      title: "Kara Kışlar",
      eyebrow: "Mix",
      year: "",
      status: "",
      type: "Mix",
      role: "Mix",
      url: "works/kara-kislar/",
      externalUrl: "https://www.youtube.com/watch?v=Ebi-_JrBzaU",
      image: "https://img.youtube.com/vi/Ebi-_JrBzaU/hqdefault.jpg",
      summary: "Merve Yılmaz Quartet için mix çalışması.",
      detail: "Merve Yılmaz Quartet'in Kara Kışlar kaydı için mix çalışmasını üstlendim.",
      showContact: false,
      links: [{ label: "YouTube", url: "https://www.youtube.com/watch?v=Ebi-_JrBzaU" }]
    },
    {
      slug: "don-bebegim",
      title: "Dön Bebeğim",
      eyebrow: "Mix",
      year: "",
      status: "",
      type: "Mix",
      role: "Mix",
      url: "works/don-bebegim/",
      externalUrl: "https://www.youtube.com/watch?v=KEsAHWMWtcI",
      image: "https://img.youtube.com/vi/KEsAHWMWtcI/hqdefault.jpg",
      summary: "Merve Yılmaz Quartet için mix çalışması.",
      detail: "Merve Yılmaz Quartet'in Dön Bebeğim kaydı için mix çalışmasını üstlendim.",
      showContact: false,
      links: [{ label: "YouTube", url: "https://www.youtube.com/watch?v=KEsAHWMWtcI" }]
    },
    {
      slug: "kassandra",
      title: "Kassandra",
      eyebrow: "Theatre",
      year: "",
      status: "Staged",
      type: "Theatre Music",
      role: "Music",
      url: "works/kassandra/",
      externalUrl: "https://tiyatrolar.com.tr/tiyatro/kassandra-2",
      image: "assets/images/kassandra.webp",
      summary:
        "Kassandra, Yunan mitolojisinin trajik karakterlerini modern dünyanın popüler kültürüyle harmanlayan yenilikçi bir tiyatro oyunudur. Bu oyunun müziklerini besteledim.",
      detail:
        "Kassandra, Yunan mitolojisinin trajik karakterlerini modern dünyanın popüler kültürüyle harmanlayan yenilikçi bir tiyatro oyunudur. Bu oyunun müziklerini besteledim.",
      showContact: false,
      links: [{ label: "Project page", url: "https://tiyatrolar.com.tr/tiyatro/kassandra-2" }]
    },
    {
      slug: "marinusun-cesur-cocuklari",
      title: "Marinus'un Cesur Çocukları",
      eyebrow: "Theatre",
      year: "",
      status: "Staged",
      type: "Theatre Music",
      role: "Music with Şirvan Kalenderoğlu",
      url: "works/marinusun-cesur-cocuklari/",
      externalUrl: "https://biletinial.com/tr-tr/tiyatro/marinusun-cesur-cocuklari",
      image: "assets/images/marinusun-cesur-cocuklari.webp",
      summary:
        "Şirvan Kalenderoğlu yönetmenliğinde sahnelenen, iklim krizi, çevre bilinci ve sürdürülebilirlik temalı eğitici çocuk tiyatrosunun müziklerini besteledim.",
      detail:
        "Şirvan Kalenderoğlu yönetmenliğinde sahnelenen, iklim krizi, çevre bilinci ve sürdürülebilirlik temalı eğitici çocuk tiyatrosunun müziklerini besteledim.",
      showContact: false,
      links: [{ label: "Project page", url: "https://biletinial.com/tr-tr/tiyatro/marinusun-cesur-cocuklari" }]
    }
  ]
};
