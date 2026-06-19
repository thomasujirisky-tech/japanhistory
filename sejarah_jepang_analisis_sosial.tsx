import React, { useState } from 'react';
import { 
  BookOpen, 
  Map, 
  Users, 
  Landmark, 
  Swords, 
  TreePine, 
  Castle, 
  Train, 
  Atom, 
  Cpu, 
  Leaf, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const erasData = [
  {
    id: 'jomon',
    name: 'Zaman Jomon',
    period: '14.000 SM – 300 SM',
    icon: <TreePine size={24} />,
    events: [
      'Masyarakat pemburu, pengumpul, dan nelayan.',
      'Ditemukannya tembikar dengan pola tali (Jomon) yang merupakan salah satu tembikar tertua di dunia.',
      'Awal mula terbentuknya pemukiman semi-permanen.'
    ],
    sociology: [
      'Kolektivisme Primitif: Kesulitan bertahan hidup di alam Jepang yang keras (gempa, musim ekstrem) memaksa masyarakat untuk bekerja sama dalam kelompok kecil, menanamkan benih kesadaran kolektif.',
      'Animisme Awal: Ketergantungan pada alam memunculkan kepercayaan bahwa setiap elemen alam memiliki roh (cikal bakal agama Shinto). Penghormatan terhadap alam ini masih sangat melekat dalam antropologi budaya Jepang modern (misalnya, perayaan musim ganti).'
    ]
  },
  {
    id: 'yayoi',
    name: 'Zaman Yayoi',
    period: '300 SM – 300 M',
    icon: <Leaf size={24} />,
    events: [
      'Pengenalan teknik pertanian padi sawah dari daratan Asia (Korea/Tiongkok).',
      'Penggunaan alat-alat dari perunggu dan besi.',
      'Munculnya negara-negara kecil (kuni) dan stratifikasi sosial awal.'
    ],
    sociology: [
      'Budaya Mura (Desa): Pertanian padi membutuhkan irigasi dan kerja sama kolektif yang intensif. Ini membentuk struktur "Mura" (komunitas desa) di mana keharmonisan kelompok (Wa) lebih diutamakan daripada keinginan individu.',
      'Akar "Kuki wo Yomu": Kebutuhan untuk menjaga harmoni di desa melahirkan konsep membaca situasi (kuki wo yomu) agar tidak menyinggung anggota komunitas lain, sebuah sifat sosiologis yang sangat menonjol di Jepang modern.'
    ]
  },
  {
    id: 'kofun',
    name: 'Zaman Kofun',
    period: '300 – 538 M',
    icon: <Landmark size={24} />,
    events: [
      'Pembangunan makam-makam raksasa berbentuk lubang kunci (Kofun) untuk para penguasa.',
      'Berdirinya Negara Yamato yang berhasil menyatukan sebagian besar kepulauan Jepang.',
      'Pembentukan sistem Uji (klan) dan Be (kelompok pekerja spesialis).'
    ],
    sociology: [
      'Sistem Hierarki Kaku: Pembangunan Kofun menunjukkan adanya pengerahan tenaga kerja masif dan stratifikasi kelas yang jelas. Ini adalah awal mula penerimaan masyarakat Jepang terhadap struktur hierarkis otoritatif.',
      'Identitas Klan (Uji): Kesetiaan individu mulai dialihkan dari sekadar keluarga inti ke klan besar. Di era modern, konsep ini bertransformasi menjadi kesetiaan pada perusahaan atau institusi (Kaisha).'
    ]
  },
  {
    id: 'asuka',
    name: 'Zaman Asuka',
    period: '538 – 710 M',
    icon: <BookOpen size={24} />,
    events: [
      'Masuknya agama Buddha dari Baekje (Korea).',
      'Pangeran Shotoku mengeluarkan Konstitusi 17 Pasal.',
      'Reformasi Taika: Upaya sentralisasi kekuasaan meniru model Dinasti Tang di Tiongkok.'
    ],
    sociology: [
      'Sinkretisme Shinto-Buddha (Shinbutsu-shugo): Antropologi Jepang modern sangat diwarnai oleh fenomena ini. Orang Jepang bisa merayakan kelahiran secara Shinto dan pemakaman secara Buddha tanpa merasa ada kontradiksi.',
      'Konfusianisme: Konstitusi 17 Pasal menekankan harmoni (Wa) dan kepatuhan pada atasan, menanamkan etika Konfusianisme yang membentuk moralitas bawahan-atasan (Senpai-Kohai) di sekolah dan tempat kerja modern.'
    ]
  },
  {
    id: 'nara',
    name: 'Zaman Nara',
    period: '710 – 794 M',
    icon: <Map size={24} />,
    events: [
      'Ibu kota permanen pertama didirikan di Heijo-kyo (Nara).',
      'Penyusunan Kojiki dan Nihon Shoki (catatan sejarah tertua Jepang).',
      'Penyebaran agama Buddha yang didukung negara (pembangunan Todai-ji).'
    ],
    sociology: [
      'Legitimasi Kekaisaran: Pembuatan Kojiki bertujuan untuk melegitimasi garis keturunan Kaisar dari Dewi Matahari (Amaterasu). Ini menanamkan konsep Kaisar sebagai entitas suci yang mengakar kuat hingga Perang Dunia II, dan masih menjadi simbol pemersatu (simbolis) dalam konstitusi modern.',
      'Birokratisasi: Awal mula sistem birokrasi negara yang terstruktur, yang sifatnya metodis dan teliti, masih tercermin dalam etos kerja pegawai negeri (Kanryo) Jepang saat ini.'
    ]
  },
  {
    id: 'heian',
    name: 'Zaman Heian',
    period: '794 – 1185 M',
    icon: <Users size={24} />,
    events: [
      'Ibu kota dipindah ke Heian-kyo (Kyoto).',
      'Puncak budaya aristokrat pengadilan kekaisaran (Kuge).',
      'Kelahiran sastra klasik seperti "Genji Monogatari" karya Murasaki Shikibu.',
      'Munculnya kelas prajurit lokal (Samurai) di daerah provinsi.'
    ],
    sociology: [
      'Estetika Mono no Aware: Kesadaran akan kefanaan atau kesedihan yang indah. Konsep antropologis ini membentuk sensitivitas estetika Jepang modern, terlihat dalam apresiasi terhadap bunga sakura yang mekar sebentar lalu gugur, anime, hingga desain produk.',
      'Tatemae dan Honne: Budaya pengadilan Heian yang penuh intrik politik mengharuskan para bangsawan menyembunyikan perasaan asli (Honne) di balik fasad/kesopanan sosial (Tatemae). Ini adalah pilar utama interaksi sosial (komunikasi tingkat tinggi/high-context) Jepang saat ini.'
    ]
  },
  {
    id: 'kamakura',
    name: 'Zaman Kamakura',
    period: '1185 – 1333 M',
    icon: <Swords size={24} />,
    events: [
      'Minamoto no Yoritomo mendirikan Keshogunan (pemerintahan militer) pertama.',
      'Pergeseran kekuasaan dari bangsawan (Kaisar) ke kelas Samurai.',
      'Invasi Mongol yang berhasil dipukul mundur (diyakini karena Kamikaze/Angin Dewa).',
      'Berkembangnya Zen Buddhisme.'
    ],
    sociology: [
      'Etos Bushido: Awal mula nilai-nilai keprajuritan seperti loyalitas mutlak, keberanian, dan kehormatan. Di era modern, nilai-nilai ini bertransformasi menjadi "Corporate Warrior" (karyawan yang sangat loyal dan rela bekerja lembur demi perusahaan).',
      'Pengaruh Zen: Antropologi budaya Jepang modern sangat dipengaruhi Zen, mulai dari arsitektur minimalis, upacara teh, hingga konsep "Wabi-Sabi" (menemukan keindahan dalam ketidaksempurnaan dan kesederhanaan).'
    ]
  },
  {
    id: 'muromachi',
    name: 'Zaman Muromachi',
    period: '1336 – 1573 M',
    icon: <Castle size={24} />,
    events: [
      'Pemerintahan Keshogunan Ashikaga.',
      'Pecahnya Perang Onin yang memicu Era Sengoku Jidai (Zaman Negara-Negara Berperang).',
      'Berkembangnya seni tradisional seperti teater Noh, Ikebana, dan arsitektur paviliun (Kinkaku-ji).'
    ],
    sociology: [
      'Kecemasan dan Ketahanan (Resilience): Hidup di era perang saudara yang terus-menerus melatih masyarakat Jepang untuk menjadi tangguh (Gaman) dan menerima penderitaan dengan tabah (Shikata ga nai). Sikap ini sangat terlihat saat orang Jepang menghadapi bencana alam modern.',
      'Seni dalam Kekacauan: Masyarakat melarikan diri dari kekerasan melalui seni yang sangat dikontrol dan presisi (seperti upacara teh). Ini menjelaskan mengapa masyarakat modern Jepang memiliki standar kesempurnaan dan detail yang sangat tinggi dalam karya dan layanan mereka (Omotenashi).'
    ]
  },
  {
    id: 'edo',
    name: 'Zaman Edo',
    period: '1603 – 1868 M',
    icon: <Landmark size={24} />,
    events: [
      'Penyatuan Jepang oleh Tokugawa Ieyasu.',
      'Kebijakan Sakoku (isolasi nasional dari dunia luar selama lebih dari 200 tahun).',
      'Pembagian kelas sosial yang ketat (Shi-No-Ko-Sho: Samurai, Petani, Pengrajin, Pedagang).',
      'Berkembangnya budaya kaum urban (Chonin), seperti Ukiyo-e dan Kabuki.'
    ],
    sociology: [
      'Sistem "Ie" (Keluarga Patriarki): Keshogunan melembagakan sistem Ie di mana kepala keluarga memiliki otoritas absolut. Ini membentuk sosiologi gender dan struktur keluarga Jepang hingga abad ke-20, meski kini mulai luntur.',
      'Homogenitas Budaya: Isolasi 250 tahun menciptakan budaya yang sangat unik, terstandarisasi, dan homogen. Ini membentuk mentalitas "Grup vs Orang Luar" (Uchi/Soto) yang kadang membuat masyarakat Jepang modern tampak eksklusif atau sulit menerima imigran.',
      'Pendidikan Terakoya: Tingginya literasi di zaman Edo (pendidikan di kuil) menjadi modal antropologis yang membuat Jepang sangat cepat berasimilasi dengan teknologi Barat saat isolasi dibuka.'
    ]
  },
  {
    id: 'meiji',
    name: 'Zaman Meiji',
    period: '1868 – 1912 M',
    icon: <Train size={24} />,
    events: [
      'Restorasi Meiji: Kekuasaan dikembalikan ke tangan Kaisar, Keshogunan tumbang.',
      'Modernisasi dan industrialisasi besar-besaran meniru Barat.',
      'Penghapusan sistem kelas Samurai.',
      'Jepang menjadi kekuatan imperialis baru (memenangkan perang Sino-Jepang dan Rusia-Jepang).'
    ],
    sociology: [
      'Nasionalisme Negara (Kokka Shinto): Pemerintah secara sengaja merekayasa sosial dengan menempatkan Kaisar sebagai figur ayah bagi seluruh bangsa. Ini menyatukan loyalitas yang dulunya kedaerahan (domain) menjadi loyalitas nasional absolut.',
      'Wakon Yosai (Jiwa Jepang, Teknologi Barat): Pendekatan sosiologis adaptif di mana Jepang menyerap teknologi modern namun tetap mempertahankan inti budayanya. Sikap pragmatis namun konservatif ini menjadi ciri khas manajemen korporasi Jepang modern.'
    ]
  },
  {
    id: 'taisho',
    name: 'Zaman Taisho',
    period: '1912 – 1926 M',
    icon: <Users size={24} />,
    events: [
      'Demokrasi Taisho: Era kebebasan berekspresi, pertumbuhan partai politik, dan liberalisme sosial yang singkat.',
      'Urbanisasi yang pesat dan munculnya kelas menengah baru.',
      'Gempa Kanto Raya (1923).'
    ],
    sociology: [
      'Individualisme Perkotaan: Munculnya fenomena "Mobo" (Modern Boy) dan "Moga" (Modern Girl) yang meniru gaya hidup Barat. Ini adalah cikal bakal pergeseran sosiologis menuju individualisme, kebebasan berekspresi, dan budaya konsumen di kalangan pemuda perkotaan yang kelak meledak di era Heisei.'
    ]
  },
  {
    id: 'showa',
    name: 'Zaman Showa',
    period: '1926 – 1989 M',
    icon: <Atom size={24} />,
    events: [
      'Militerisme dan Perang Dunia II (jatuhnya bom atom di Hiroshima & Nagasaki, kekalahan Jepang).',
      'Pendudukan Sekutu dan penyusunan Konstitusi baru yang pasifis (Pasal 9).',
      'Keajaiban Ekonomi: Pertumbuhan ekonomi yang masif, Jepang menjadi ekonomi terbesar kedua di dunia.',
      'Munculnya fenomena subkultur (Otaku).'
    ],
    sociology: [
      'Pergeseran ke Pasifisme: Trauma bom atom dan perang mengubah psikologi massa Jepang secara drastis dari bangsa militeristik menjadi masyarakat yang sangat menolak peperangan dan senjata nuklir.',
      'Kolektivisme Korporat: Loyalitas kepada kekaisaran digantikan dengan loyalitas pada "Kaisha" (perusahaan). Sistem kerja seumur hidup (Shushin Koyo) menciptakan ikatan sosiologis kekeluargaan di tempat kerja, menjamin stabilitas sosial pasca-perang.',
      'Kejenuhan Materi: Kesuksesan ekonomi melahirkan generasi yang tidak pernah merasakan perang, memicu lahirnya budaya konsumen dan eskapisme (budaya Otaku) sebagai bentuk pelarian dari tekanan sosial yang tinggi.'
    ]
  },
  {
    id: 'heisei',
    name: 'Zaman Heisei',
    period: '1989 – 2019 M',
    icon: <Cpu size={24} />,
    events: [
      'Pecahnya gelembung ekonomi (Bubble Economy) yang mengawali "Dekade yang Hilang" (Lost Decades).',
      'Perkembangan pesat Soft Power Jepang (Anime, Manga, Video Games) ke seluruh dunia.',
      'Bencana alam besar: Gempa Kobe (1995) dan Gempa/Tsunami Tohoku (2011).'
    ],
    sociology: [
      'Pudarnya Ikatan Tradisional (Muen Shakai): Krisis ekonomi menghancurkan sistem kerja seumur hidup. Banyak pemuda menjadi pekerja paruh waktu (Freeter) atau menarik diri dari masyarakat (Hikikomori). Sosiologi Jepang berubah dari masyarakat kelompok yang kuat menjadi masyarakat yang semakin terisolasi (Muen Shakai / masyarakat tanpa ikatan).',
      'Herbivore Men (Soshokukei Danshi): Perubahan antropologis maskulinitas di mana pria muda menjadi kurang agresif, kurang tertarik pada karir konvensional, romansa, atau pernikahan, berkontribusi langsung pada krisis demografi Jepang.'
    ]
  },
  {
    id: 'reiwa',
    name: 'Zaman Reiwa',
    period: '2019 – Sekarang',
    icon: <BookOpen size={24} />,
    events: [
      'Turun taktanya Kaisar Akihito, digantikan oleh Naruhito.',
      'Pandemi COVID-19 yang mempercepat transformasi digital (meninggalkan faks dan stempel inkan).',
      'Krisis demografi yang semakin akut (populasi super-menua).',
      'Meningkatnya masuknya pekerja asing untuk mengatasi kekurangan tenaga kerja.'
    ],
    sociology: [
      'Krisis Demografi & Perubahan Struktur: Masyarakat hiper-menua (super-aging society) mengubah lanskap kota, ekonomi, dan struktur perawatan lansia. Beban kaum muda menjadi sangat berat, memicu perubahan sosiologis pada konsep keluarga inti.',
      'Lahirnya "Kyousei" (Koeksistensi): Untuk pertama kalinya, Jepang secara sistematis terpaksa membuka diri terhadap tenaga kerja asing. Antropologi sosial sedang bergeser perlahan dari narasi "masyarakat homogen" menuju penerimaan multikulturalisme skala terbatas.'
    ]
  }
];

export default function App() {
  const [selectedEra, setSelectedEra] = useState(erasData[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleEraSelect = (era) => {
    setSelectedEra(era);
    setIsSidebarOpen(false); // Tutup sidebar di mobile setelah memilih
  };

  return (
    <div className="flex h-screen bg-stone-100 text-stone-800 font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50
        w-72 bg-[#8c1c13] text-stone-100 flex flex-col h-full
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        shadow-2xl md:shadow-none
      `}>
        <div className="p-6 bg-[#70160f] flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wider">NIHONGO</h1>
            <p className="text-sm text-stone-300">Kronik & Antropologi</p>
          </div>
          <button className="md:hidden text-stone-200" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          <ul>
            {erasData.map((era) => (
              <li key={era.id}>
                <button
                  onClick={() => handleEraSelect(era)}
                  className={`
                    w-full text-left px-6 py-4 flex items-center gap-4 transition-colors duration-200
                    ${selectedEra.id === era.id 
                      ? 'bg-stone-100 text-[#8c1c13] border-r-4 border-[#8c1c13]' 
                      : 'hover:bg-[#a82419] border-r-4 border-transparent'
                    }
                  `}
                >
                  <span className={`${selectedEra.id === era.id ? 'text-[#8c1c13]' : 'text-stone-300'}`}>
                    {era.icon}
                  </span>
                  <div>
                    <h3 className="font-bold">{era.name}</h3>
                    <p className={`text-xs ${selectedEra.id === era.id ? 'text-stone-600' : 'text-stone-400'}`}>
                      {era.period}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-y-auto custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]">
        
        {/* Mobile Header */}
        <header className="md:hidden bg-[#8c1c13] text-white p-4 flex items-center sticky top-0 z-30 shadow-md">
          <button onClick={() => setIsSidebarOpen(true)} className="mr-4">
            <Menu size={24} />
          </button>
          <h1 className="font-bold text-lg truncate">{selectedEra.name}</h1>
        </header>

        <div className="max-w-4xl mx-auto w-full p-6 md:p-12 animate-fade-in">
          
          {/* Era Hero Section */}
          <div className="mb-12 border-b-2 border-stone-300 pb-8">
            <div className="flex items-center gap-3 text-[#8c1c13] mb-2">
              {selectedEra.icon}
              <span className="font-semibold uppercase tracking-widest text-sm">Garis Waktu Jepang</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4">{selectedEra.name}</h2>
            <p className="text-xl md:text-2xl text-stone-600 font-serif italic border-l-4 border-[#8c1c13] pl-4 py-1">
              {selectedEra.period}
            </p>
          </div>

          {/* Peristiwa Utama */}
          <section className="mb-12 bg-white rounded-xl shadow-sm border border-stone-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center text-sm">1</span>
              Peristiwa Historis Utama
            </h3>
            <ul className="space-y-4">
              {selectedEra.events.map((event, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="text-[#8c1c13] shrink-0 mt-1" size={20} />
                  <span className="text-stone-700 leading-relaxed text-lg">{event}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Analisis Sosiologi & Antropologi */}
          <section className="mb-12 bg-[#faf9f6] rounded-xl shadow-sm border border-[#8c1c13]/20 p-6 md:p-8 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8c1c13]/5 rounded-bl-full -z-0"></div>
            
            <h3 className="text-2xl font-bold text-[#8c1c13] mb-6 flex items-center gap-2 relative z-10">
              <span className="w-8 h-8 rounded-full bg-[#8c1c13] text-white flex items-center justify-center text-sm">2</span>
              Dampak Sosiologi & Antropologi Modern
            </h3>
            <div className="space-y-6 relative z-10">
              {selectedEra.sociology.map((item, index) => {
                const [title, description] = item.split(':');
                return (
                  <div key={index} className="bg-white p-5 rounded-lg border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-stone-900 text-lg mb-2">{title}</h4>
                    <p className="text-stone-600 leading-relaxed">{description}</p>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-auto py-6 text-center text-stone-500 text-sm border-t border-stone-200 bg-stone-50">
          <p>Kajian Sejarah, Sosiologi, dan Antropologi Jepang © 2026</p>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(140, 28, 19, 0.3);
          border-radius: 20px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
}