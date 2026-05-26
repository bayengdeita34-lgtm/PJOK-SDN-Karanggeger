
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  videoUrl?: string;
  grade: number;
  semester: number;
  quiz: Question[];
  matchPairs?: MatchPair[];
}

export const materials: Material[] = [
  {
    id: 'gerak-lokomotor-k1-s1',
    grade: 1,
    semester: 1,
    title: 'Gerak Dasar Lokomotor',
    description: 'Mengenal gerakan yang berpindah tempat.',
    content: 'Gerak lokomotor adalah gerakan yang menyebabkan tubuh berpindah tempat. Contohnya adalah jalan, lari, melompat, dan memanjat. Siswa kelas 1 diharapkan mampu melakukan gerakan jalan lurus dengan benar.',
    imageUrl: 'https://picsum.photos/seed/lokomotor/800/450',
    videoUrl: 'https://www.youtube.com/embed/S7_0G6hW-U0', // Example educational video
    quiz: [
      {
        id: 'q1',
        text: 'Manakah yang termasuk gerak lokomotor?',
        options: ['Berlari', 'Duduk diam', 'Melambaikan tangan'],
        correctAnswer: 0
      },
      {
        id: 'q2',
        text: 'Saat berjalan, pandangan mata harus ke arah...',
        options: ['Belakang', 'Samping', 'Depan'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'gerak-non-lokomotor-k1-s1',
    grade: 1,
    semester: 1,
    title: 'Gerak Non-Lokomotor',
    description: 'Mengenal gerakan tanpa berpindah tempat.',
    content: 'Gerak non-lokomotor adalah gerakan yang dilakukan di tempat. Contohnya adalah membungkuk, menekuk, memutar badan, dan mengayun tangan.',
    imageUrl: 'https://picsum.photos/seed/nonlokomotor/800/450',
    videoUrl: 'https://www.youtube.com/embed/7r1Sj3uUpcM',
    quiz: [
      {
        id: 'q1',
        text: 'Memutar kepala termasuk gerakan...',
        options: ['Lokomotor', 'Non-lokomotor', 'Manipulatif'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'pola-hidup-sehat-k1-s2',
    grade: 1,
    semester: 2,
    title: 'Persiapan ASAS PJOK Kelas 1',
    description: 'Rangkuman materi lengkap & Kuis Interaktif 20 Soal (Pilihan Ganda + Mencocokkan) persiapan ASAS Genap.',
    content: '[BAGIAN_TUBUH]\nTubuh kita adalah ciptaan Tuhan yang luar biasa! Setiap bagian tubuh memiliki fungsi atau kegunaan yang sangat penting:\n👉 **Mata 👀**: Berfungsi untuk **Melihat** benda-benda di sekitar kita (melihat warna, bentuk, dan ukuran).\n👉 **Telinga 👂**: Berfungsi untuk **Mendengar** suara yang merdu. Letaknya di bagian samping kanan dan kiri kepala kita.\n👉 **Hidung 👃**: Berfungsi untuk **Mencium Bau** atau aroma bunga yang harum.\n👉 **Kaki 👣**: Berfungsi untuk melakukan perpindahan tempat seperti berjalan, berlari, dan melompat.\n👉 **Tangan 🖐️**: Berfungsi untuk memegang sesuatu. Satu tangan kita yang normal memiliki **5 jari**.\n👉 **Rambut 💇‍♂️**: Berfungsi menjaga kulit kepala agar tetap hangat.\n\n[MERAWAT_TUBUH]\nKita harus selalu bersyukur dengan cara rajin merawat tubuh kita agar sehat dan terhindar dari kuman:\n🧼 **Cuci Tangan**: Mencuci tangan dengan air mengalir dan **sabun** agar kuman-kuman jahat mati dan hilang!\n🦷 **Sikat Gigi**: Menggosok gigi secara teratur (pagi setelah sarapan dan malam sebelum tidur) agar gigi tetap bersih dan kuat.\n🧴 **Keramas**: Membersihkan rambut menggunakan **sampo** khusus rambut.\n💅 **Potong Kuku**: Kuku yang panjang dan kotor harus segera dipotong agar kuman tidak bersarang di sela-sela kuku.\n🍳 **Sarapan Pagi**: Supaya badan tidak lemas di sekolah, kita harus sarapan di pagi hari agar memiliki **tenaga** yang cukup.\n\n[KEBUGARAN_JASMANI]\nOlahraga teratur membuat otot-otot di tubuh kita menjadi sehat dan kuat:\n🏃 **Olahraga Lari**: Olahraga lari secara teratur sangat baik untuk **menguatkan otot kaki**.\n⚠️ **Pemanasan**: Sebelum mulai olahraga (termasuk sebelum berenang), kita harus melakukan gerakan **pemanasan** terlebih dahulu untuk melenturkan otot dan **mencegah cedera atau kram**.\n☀️ **Sinar Matahari Pagi**: Berolahraga di pagi hari sangat bagus karena sinar matahari pagi mengandung **Vitamin D** yang baik untuk pertumbuhan **tulang** kita.\n😊 **Senam Bersama**: Senam atau berolahraga bersama teman-teman di lapangan terasa sangat **menyenangkan**.\n\n[GERAK_BERIRAMA]\n🎵 **Gerak Berirama (Ritmik)** adalah gerakan yang dilakukan secara berulang-ulang dengan mengikuti **irama musik, ketukan, atau hitungan**.\n👏 Salah satu gerakan berirama yang paling mudah adalah berjalan atau melangkah sambil **bertepuk tangan** secara kompak.\n😄 Saat melakukan senam atau gerak berirama, perasaan hati kita harus selalu **senang dan gembira** agar tubuh menjadi segar bugar!\n\n[PENGENALAN_AIR]\n🏊 **Berenang** adalah aktivitas olahraga di dalam air yang sangat menyenangkan! Agar tetap aman di kolam renang, perhatikan aturan ini:\n🛟 **Pelampung**: Gunakan pelampung atau ban renang agar tubuh tetap terapung di permukaan air dan **tidak tenggelam**.\n🥽 **Kacamata Renang**: Gunakan untuk melindungi mata agar tidak perih atau merah terkena air kolam yang mengandung kaporit.\n🌬️ **Latihan Napas**: Latihan dasar pernapasan di air dilakukan dengan cara **meniup air atau membuat gelembung** di dalam kolam.\n🚫 **Aturan Keselamatan**: Di kolam renang, kita **dilarang berlari di sepanjang pinggir kolam** karena lantainya licin dan berbahaya (bisa menyebabkan tergelincir atau jatuh).',
    imageUrl: 'https://images.unsplash.com/photo-1472162072142-d544e73e493e?q=80&w=800&auto=format&fit=crop',
    quiz: [
      {
        id: 'q1',
        text: 'Bagian tubuh mana yang digunakan untuk melihat benda-benda di sekitar?',
        options: ['Mata', 'Telinga', 'Hidung'],
        correctAnswer: 0
      },
      {
        id: 'q2',
        text: 'Saat berjalan, kita menggunakan bagian tubuh yaitu...',
        options: ['Tangan', 'Kaki', 'Kepala'],
        correctAnswer: 1
      },
      {
        id: 'q3',
        text: 'Bagian tubuh yang ditunjuk oleh kata \'MATA\' berfungsi untuk...',
        options: ['Mendengar suara', 'Mencium bau', 'Melihat benda'],
        correctAnswer: 2
      },
      {
        id: 'q4',
        text: 'Kita memiliki dua buah telinga yang terletak di samping...',
        options: ['Kepala', 'Perut', 'Lutut'],
        correctAnswer: 0
      },
      {
        id: 'q5',
        text: 'Olahraga yang teratur membuat badan kita menjadi...',
        options: ['Sakit', 'Sehat', 'Lemas'],
        correctAnswer: 1
      },
      {
        id: 'q6',
        text: 'Sebelum mulai berolahraga, kita harus melakukan gerakan...',
        options: ['Makan', 'Tidur', 'Pemanasan'],
        correctAnswer: 2
      },
      {
        id: 'q7',
        text: 'Gerak berirama adalah gerakan yang dilakukan mengikuti...',
        options: ['Angin', 'Musik', 'Diam'],
        correctAnswer: 1
      },
      {
        id: 'q8',
        text: 'Anak-anak dapat melakukan gerak berirama gembira dengan cara...',
        options: ['Bertepuk tangan', 'Tidur telentang', 'Duduk diam'],
        correctAnswer: 0
      },
      {
        id: 'q9',
        text: 'Saat melakukan gerak berirama, perasaan kita harus...',
        options: ['Sedih', 'Marah', 'Senang'],
        correctAnswer: 2
      },
      {
        id: 'q10',
        text: 'Agar tidak tenggelam saat berada di air, kita bisa menggunakan alat bantu yaitu...',
        options: ['Pelampung', 'Kacamata', 'Topi'],
        correctAnswer: 0
      },
      {
        id: 'q11',
        text: 'Gerakan meniup air di dalam kolam bertujuan untuk melatih...',
        options: ['Kekuatan kaki', 'Pernapasan', 'Kecepatan lari'],
        correctAnswer: 1
      },
      {
        id: 'q12',
        text: 'Gigi yang bersih didapatkan dengan cara rajin...',
        options: ['Menggosok gigi', 'Mencuci rambut', 'Memotong kuku'],
        correctAnswer: 0
      },
      {
        id: 'q13',
        text: 'Kita harus makan makanan yang bergizi supaya badan memiliki...',
        options: ['Rasa kantuk', 'Tenaga', 'Berat badan berlebih'],
        correctAnswer: 1
      },
      {
        id: 'q14',
        text: 'Saat di kolam renang, kita dilarang untuk...',
        options: ['Berlari di pinggir kolam', 'Memakai baju renang', 'Mendengar guru'],
        correctAnswer: 0
      },
      {
        id: 'q15',
        text: 'Kuku yang panjang dan kotor harus segera...',
        options: ['Dibiarkan saja', 'Dipotong', 'Diwarnai'],
        correctAnswer: 1
      }
    ],
    matchPairs: [
      { id: 'm1', left: 'Hidung 👃', right: 'Mencium aroma wangi 🌸' },
      { id: 'm2', left: 'Lari 🏃‍♂️', right: 'Menguatkan otot kaki 👣' },
      { id: 'm3', left: 'Pemanasan ⚠️', right: 'Mencegah tubuh cedera/kram 🩹' },
      { id: 'm4', left: 'Sabun Cuci Tangan 🧼', right: 'Membunuh kuman dan bakteri 🦠' },
      { id: 'm5', left: 'Matahari Pagi ☀️', right: 'Vitamin D untuk kesehatan tulang 🦴' }
    ]
  },
  // Adding more entries for different grades to satisfy "per kelas" requirement
  {
    id: 'permainan-bola-besar-k4-s1',
    grade: 4,
    semester: 1,
    title: 'Permainan Bola Besar (Sepak Bola)',
    description: 'Teknik dasar menendang dan menghentikan bola.',
    content: 'Sepak bola melibatkan gerak manipulatif. Teknik dasar meliputi menendang dengan punggung kaki, kaki bagian dalam, dan menghentikan bola.',
    imageUrl: 'https://picsum.photos/seed/football/800/450',
    videoUrl: 'https://www.youtube.com/embed/Y-QW_2V4mXo',
    quiz: [
      {
        id: 'q1',
        text: 'Berapakah jumlah pemain inti dalam satu tim sepak bola?',
        options: ['5 orang', '11 orang', '6 orang'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'senam-lantai-k2-s1',
    grade: 2,
    semester: 1,
    title: 'Aktivitas Senam Lantai',
    description: 'Keseimbangan dan berpindah dalam senam.',
    content: 'Senam lantai melatih kekuatan dan keseimbangan. Contoh gerakannya adalah berdiri satu kaki, berjalan di atas balok titian, dan guling depan. Jangan lupa pemanasan sebelum mulai!',
    imageUrl: 'https://picsum.photos/seed/senam/800/450',
    videoUrl: 'https://www.youtube.com/embed/XqNIdvjHnS8',
    quiz: [
      {
        id: 'q1',
        text: 'Gerakan berguling ke depan disebut...',
        options: ['Backroll', 'Forward Roll', 'Handstand'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'aktivitas-air-k3-s2',
    grade: 3,
    semester: 2,
    title: 'Persiapan ASAS PJOK Kelas 3',
    description: 'Rangkuman lengkap Kebugaran, Gerak Berirama, Aktivitas Air & Kebersihan Alat Reproduksi dengan Kuis 20 Soal interaktif.',
    content: '[GERAK_BERIRAMA]\n🎵 **Gerak Berirama (Ritmik)**: Rangkaian gerakan tubuh yang dilakukan selaras dengan iringan musik, lagu, ketukan, atau hitungan suara.\n🎯 **Tujuan Utama**: Meningkatkan kelenturan tubuh serta melatih koordinasi antara gerakan anggota tubuh (gerak motorik) dengan pendengaran (irama/musik).\n👟 **Variasi Pola Langkah Kaki**: Melangkah ke depan dan melangkah ke belakang merupakan salah satu variasi gerak dasar kaki yang paling sering dilakukan.\n💪 **Variasi Gerakan Lengan**: Gerakan mengayunkan tangan ke samping kanan dan kiri merupakan variasi gerak ayunan lengan. Posisi berdiri yang benar di awal gerakan ayunan lengan adalah **Berdiri Tegak** untuk menjaga keseimbangan dan sikap tubuh yang prima.\n\n[AKTIVITAS_AIR]\n🏊‍♂️ **Aktivitas di Air (Renang)**: Melatih otot tubuh secara menyeluruh dalam lingkungan air.\n⚠️ **Pentingnya Pemanasan**: Sebelum masuk ke dalam kolam renang, anak wajib melakukan gerakan peregangan dan pemanasan agar otot-otot tubuh siap dan **mencegah kram otot** saat berada di dalam air kolam.\n🛟 **Alat Bantu Mengapung**: Untuk pemula yang sedang belajar mengapung di permukaan air, dapat menggunakan alat bantu berupa **papan luncur** atau **ban pelampung** sebagai penahan tubuh.\n🌬️ **Cara Pernapasan di Air**: Teknik pernapasan yang benar saat berada di dalam air adalah dengan mengambil napas dalam-dalam melalui mulut saat kepala terangkat, dan membuangnya secara perlahan melalui **mulut atau hidung** saat kepala berada di dalam air.\n🚀 **Teknik Meluncur**: Gerakan awal dalam berenang. Urutan meluncur yang benar adalah:\n1. Berdiri tegak di pinggir kolam dengan membelakangi air.\n2. Salah satu kaki menempel di dinding kolam sebagai tumpuan.\n3. Kedua tangan diluruskan rapat ke depan kepala.\n4. Dorong badan menjauh dengan bantuan lecutan/tendangan kaki yang kuat pada dinding kolam.\n5. Posisi badan lurus mendatar di permukaan air saat meluncur tanpa gerakan tambahan.\n🚫 **Faktor Keselamatan**: Salah satu aturan paling tegas di kolam renang adalah **dilarang berlari di sepanjang pinggir kolam** karena kondisi lantai di pinggiran kolam selalu basah dan sangat licin yang berisiko fatal jika terpeleset.\n\n[KEBUGARAN_JASMANI]\n🏃 **Kebugaran Jasmani**: Kemampuan tubuh kita untuk melaksanakan serangkaian aktivitas fisik sehari-hari tanpa merasakan kelelahan yang berlebihan atau berarti.\n💪 **Latihan Kekuatan**: \n- *Duduk membentuk huruf \'V\' (V-Sit)*: Latihan ini melatih keseimbangan tubuh serta meningkatkan kekuatan **otot perut**.\n- *Push-up*: Latihan menahan beban tubuh yang menitikberatkan latihan fisik untuk menguatkan kekuatan **otot lengan dan dada**.\n🙆‍♂️ **Latihan Kelenturan (Mencium Lutut)**: Dilakukan dalam posisi duduk selonjor tegak dengan kaki lurus ke depan sambil membungkuk menciumi lutut untuk melatih kelenturan persendian **punggung** dan otot paha belakang (*hamstring*).\n🫁 **Organ Dalam (Jantung & Paru-Paru)**: Berolahraga lari/jalan pagi secara rutin merupakan salah satu contoh latihan aerobik yang prima untuk memperkuat daya tahan fungsi jantung dan paru-paru.\n\n[KEBERSIHAN_ALAT_REPRODUKSI]\n🛡️ **Menjaga Kesehatan Alat Kelamin**: Alat reproduksi merupakan bagian sensitif tubuh yang wajib dipelihara kesehatannya untuk menghindari infeksi atau penyakit kulit.\n🧼 **Cara Pembersihan**: Setelah buang air kecil (pipis) atau buang air besar, kita harus selalu mencuci bersih area kelamin menggunakan **air mengalir yang bersih**, kemudian dikeringkan memakai tisu atau handuk bersih agar tidak lembap.\n👉 **Arah Kebiasaan Bersih**: Membersihkan alat kelamin setelah buang air besar wajib diusap dari arah **depan ke belakang** guna mencegah masuknya kuman/bakteri berbahaya dari anus ke saluran kencing kita.\n🩲 **Memilih Pakaian Dalam**: Kita harus rajin mengganti pakaian dalam **minimal dua kali sehari** (sehabis mandi). Pilihlah pakaian dalam yang sehat, lembut, dan terbuat dari bahan **katun** karena sangat mudah menyerap keringat serta menjaga kelembapan di area sensitif.\n🧣 **Aturan Barang Pribadi**: Kita **tidak boleh saling bertukar atau pinjam handuk** maupun pakaian dalam dengan orang lain agar tidak tertular kuman, bakteri jahat, atau penyakit kulit menular.',
    imageUrl: 'https://images.unsplash.com/photo-1519214714495-be93a2143b19?q=80&w=800&auto=format&fit=crop',
    quiz: [
      {
        id: 'q1',
        text: 'Aktivitas gerak yang dilakukan dengan iringan musik atau ketukan disebut gerak...',
        options: ['Statis', 'Berirama', 'Cepat', 'Diam'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        text: 'Salah satu tujuan utama dari melakukan gerak berirama adalah untuk meningkatkan...',
        options: ['Kekuatan otot leher', 'Kecepatan lari', 'Kelenturan dan koordinasi', 'Tinggi badan'],
        correctAnswer: 2
      },
      {
        id: 'q3',
        text: 'Gerakan melangkah ke depan dan ke belakang termasuk ke dalam variasi gerak dasar...',
        options: ['Langkah kaki', 'Ayunan lengan', 'Putaran badan', 'Loncat di tempat'],
        correctAnswer: 0
      },
      {
        id: 'q4',
        text: 'Saat melakukan gerakan ayunan lengan ke depan dan belakang, posisi awal berdiri yang benar adalah...',
        options: ['Jongkok', 'Duduk', 'Berbaring', 'Berdiri tegak'],
        correctAnswer: 3
      },
      {
        id: 'q5',
        text: 'Sebelum masuk ke dalam kolam renang, kita harus melakukan pemanasan untuk mencegah terjadinya...',
        options: ['Rasa haus', 'Kram otot', 'Lupa gerakan', 'Badan menjadi berat'],
        correctAnswer: 1
      },
      {
        id: 'q6',
        text: 'Alat bantu yang digunakan untuk belajar mengapung di permukaan air bagi pemula adalah...',
        options: ['Kacamata', 'Baju renang', 'Papan luncur atau ban pelampung', 'Topi renang'],
        correctAnswer: 2
      },
      {
        id: 'q7',
        text: 'Cara yang benar untuk membuang napas saat berlatih pernapasan di dalam air adalah melalui...',
        options: ['Mulut atau hidung', 'Telinga', 'Perut', 'Dada'],
        correctAnswer: 0
      },
      {
        id: 'q8',
        text: 'Salah satu aturan keselamatan utama yang wajib dipatuhi di kolam renang adalah...',
        options: ['Boleh berlari di pinggir kolam', 'Dilarang berlari di pinggir kolam karena licin', 'Berenang sendirian tanpa pengawasan', 'Makan sambil berenang'],
        correctAnswer: 1
      },
      {
        id: 'q9',
        text: 'Latihan duduk membentuk huruf \'V\' berguna untuk melatih keseimbangan dan kekuatan otot...',
        options: ['Lengan', 'Leher', 'Perut', 'Betis'],
        correctAnswer: 2
      },
      {
        id: 'q10',
        text: 'Kemampuan tubuh untuk melakukan aktivitas sehari-hari tanpa merasa lelah yang berlebihan disebut dengan...',
        options: ['Kelincahan', 'Kekuatan', 'Ketangkasan', 'Kebugaran jasmani'],
        correctAnswer: 3
      },
      {
        id: 'q11',
        text: 'Gerakan mencium lutut dalam posisi duduk dengan kaki lurus ke depan bertujuan untuk melatih...',
        options: ['Kelenturan', 'Kecepatan', 'Daya tahan', 'Tenaga'],
        correctAnswer: 0
      },
      {
        id: 'q12',
        text: 'Agar organ jantung dan paru-paru tetap sehat dan kuat, sebaiknya kita rutin melakukan olahraga...',
        options: ['Catur', 'Lari pagi', 'Tidur siang', 'Bermain game'],
        correctAnswer: 1
      },
      {
        id: 'q13',
        text: 'Berapa kali sebaiknya kita mengganti pakaian dalam dalam sehari untuk menjaga kebersihan diri?',
        options: ['Seminggu sekali', 'Dua hari sekali', 'Minimal dua kali sehari (sehabis mandi)', 'Hanya saat kotor saja'],
        correctAnswer: 2
      },
      {
        id: 'q14',
        text: 'Setelah buang air kecil (pipis) atau buang air besar, kita harus membersihkan alat kelamin menggunakan...',
        options: ['Air bersih', 'Tangan saja', 'Daun kering', 'Air sabun yang sangat pekat'],
        correctAnswer: 0
      },
      {
        id: 'q15',
        text: 'Pakaian dalam yang baik untuk kesehatan karena dapat menyerap keringat dengan mudah adalah...',
        options: ['Plastik', 'Katun', 'Wol tebal', 'Parasut'],
        correctAnswer: 1
      }
    ],
    matchPairs: [
      { id: 'm1', left: 'Dorongan Kaki Meluncur 🏊‍♂️', right: 'Ditekuk kemudian dilecutkan 🦵' },
      { id: 'm2', left: 'Push-Up Melatih Otot 💪', right: 'Lengan dan dada 🦾' },
      { id: 'm3', left: 'Area Alat Kelamin Lembap 🦠', right: 'Jamur dan bakteri gatal 🦠' },
      { id: 'm4', left: 'Barang Pribadi Mandi 🧼', right: 'Handuk mandi sendiri 🧣' },
      { id: 'm5', left: 'Arah Bersih Setelah BAB 🚽', right: 'Dari depan ke belakang 🔁' }
    ]
  },
  {
    id: 'kembang-tubuh-k5-s1',
    grade: 5,
    semester: 1,
    title: 'Pengembangan Kebugaran Jasmani',
    description: 'Latihan kekuatan dan daya tahan tubuh.',
    content: 'Kebugaran jasmani adalah kemampuan tubuh melakukan aktivitas tanpa lelah berlebihan. Latihan kekuatan bisa berupa push-up, sit-up, dan lari jarak jauh untuk daya tahan jantung.',
    imageUrl: 'https://picsum.photos/seed/fitness/800/450',
    videoUrl: 'https://www.youtube.com/embed/fAivbK1Z4H8',
    quiz: [
      {
        id: 'q1',
        text: 'Latihan push-up bertujuan untuk melatih kekuatan otot...',
        options: ['Kaki', 'Lengan dan dada', 'Perut'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'bahaya-narkoba-k6-s2',
    grade: 6,
    semester: 2,
    title: 'Bahaya Narkoba dan Rokok',
    description: 'Menjaga diri dari zat berbahaya.',
    content: 'Narkoba, rokok, dan minuman keras sangat berbahaya bagi kesehatan tubuh dan masa depan kita. Kita harus katakan TIDAK pada narkoba dan selalu bergaul dengan teman-teman yang mengajak pada kebaikan.',
    imageUrl: 'https://picsum.photos/seed/no-drugs/800/450',
    quiz: [
      {
        id: 'q1',
        text: 'Apa yang harus kita katakan jika ditawari sesuatu yang berbahaya?',
        options: ['Mau coba saja', 'Tidak, terima kasih', 'Diam saja'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'gerak-irama-k2-s2',
    grade: 2,
    semester: 2,
    title: 'Persiapan ASAS PJOK Kelas 2',
    description: 'Rangkuman lengkap Kebugaran, Gerak Berirama, Aktivitas Air & Bagian Tubuh dengan Kuis 20 Soal interaktif.',
    content: '[GERAK_BERIRAMA]\n🎵 **Gerak Berirama (Ritmik)** adalah gerakan olahraga yang indah yang dilakukan dengan mengikuti **iringan musik, ketukan, atau hitungan** secara teratur.\n🥁 Iringan yang paling sering digunakan adalah **Lagu/Musik gembira** atau hitungan lisan dari bapak/ibu guru.\n📏 **Regulasi Hitungan**: Dalam gerakan senam irama, hitungan standar yang digunakan adalah **Satu sampai Delapan (1-8)**.\n👨‍👩‍👦‍👦 Gerakan senam berirama yang dilakukan secara bersama-sama dalam kelompok akan melatih kekompakan dan terlihat sangat **indah serta serasi** jika gerakan lengannya kompak diayun mengikuti ketukan musik!',
    imageUrl: 'https://images.unsplash.com/photo-1545601445-4d6a0a056a2e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/5wU9x7jS0aU',
    quiz: [
      {
        id: 'q1',
        text: 'Gerakan yang dilakukan dengan mengikuti iringan musik atau hitungan disebut gerak...',
        options: ['Diam', 'Berirama', 'Cepat'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        text: 'Irama yang paling sering digunakan untuk mengiringi senam anak-anak adalah...',
        options: ['Musik', 'Angin sepoi', 'Gemericik air'],
        correctAnswer: 0
      },
      {
        id: 'q3',
        text: 'Latihan berjalan di dalam air saat pengenalan air bertujuan untuk melatih...',
        options: ['Kecepatan lari', 'Kekuatan tangan', 'Keberanian di air'],
        correctAnswer: 2
      },
      {
        id: 'q4',
        text: 'Alat bantu yang digunakan agar tubuh kita tidak tenggelam saat belajar berenang adalah...',
        options: ['Kacamata', 'Pelampung', 'Topi renang'],
        correctAnswer: 1
      },
      {
        id: 'q5',
        text: 'Berdiri dengan satu kaki diangkat seperti burung bangau bertujuan melatih...',
        options: ['Keseimbangan', 'Kelincahan', 'Kecepatan'],
        correctAnswer: 0
      },
      {
        id: 'q6',
        text: 'Aktivitas yang paling baik dilakukan di pagi hari untuk menjaga kebugaran tubuh kita adalah...',
        options: ['Tidur pulas', 'Menonton TV', 'Olahraga'],
        correctAnswer: 2
      },
      {
        id: 'q7',
        text: 'Bagian tubuh manakah yang paling utama digunakan untuk menendang bola?',
        options: ['Kaki', 'Tangan', 'Perut'],
        correctAnswer: 0
      },
      {
        id: 'q8',
        text: 'Bagian tubuh pribadi kita yang tidak boleh disentuh oleh orang lain secara sembarangan adalah...',
        options: ['Tangan', 'Dada', 'Kaki'],
        correctAnswer: 1
      },
      {
        id: 'q9',
        text: 'Ketika kita melakukan senam ritmik, gerakan lengan diayunkan harus disesuaikan dengan...',
        options: ['Gerakan teman', 'Keinginan hati', 'Irama musik'],
        correctAnswer: 2
      },
      {
        id: 'q10',
        text: 'Sebelum masuk ke dalam kolam renang, sebaiknya kita melakukan...',
        options: ['Makan banyak', 'Pemanasan', 'Tidur lelap'],
        correctAnswer: 1
      },
      {
        id: 'q11',
        text: 'Gerakan duduk mencium lutut dengan kaki lurus ke depan berguna untuk melatih otot...',
        options: ['Pinggang', 'Leher', 'Lengan'],
        correctAnswer: 0
      },
      {
        id: 'q12',
        text: 'Gerakan meloncat-loncat di tempat melatih kekuatan otot...',
        options: ['Perut', 'Leher', 'Kaki'],
        correctAnswer: 2
      },
      {
        id: 'q13',
        text: 'Untuk menjaga rambut kita tetap bersih dan harum, kita harus...',
        options: ['Mandi saja', 'Keramas', 'Cuci muka'],
        correctAnswer: 1
      },
      {
        id: 'q14',
        text: 'Setelah selesai melakukan olahraga, kita sebaiknya melakukan...',
        options: ['Pendinginan', 'Lari cepat', 'Makan berat'],
        correctAnswer: 0
      },
      {
        id: 'q15',
        text: 'Gerakan menekuk lutut atau jongkok berdiri di dalam air dilakukan untuk latihan...',
        options: ['Berenang cepat', 'Menyelam lama', 'Mengenal air'],
        correctAnswer: 2
      }
    ],
    matchPairs: [
      { id: 'm1', left: 'Hitungan Standar 🎵', right: 'Hitungan satu sampai delapan (1-8) 🔢' },
      { id: 'm2', left: 'Supaya Kuman Mati 🧼', right: 'Gunakan Sabun di air mengalir 🧼' },
      { id: 'm3', left: 'Pendamping Berenang 🏊', right: 'Didampingi orang dewasa atau guru 👨‍🏫' },
      { id: 'm4', left: 'Merawat Gigi Sehat 🦷', right: 'Digosok minimal dua kali sehari 🦷' },
      { id: 'm5', left: 'Makanan Bergizi Sehat 🍎', right: 'Membuat tubuh kuat dan sehat 💪' }
    ]
  },
  {
    id: 'kebugaran-k4-s2',
    grade: 4,
    semester: 2,
    title: 'Persiapan ASAS PJOK Kelas 4',
    description: 'Rangkuman lengkap Kebugaran, Gerak Berirama, Aktivitas Air & Kesehatan Alat Reproduksi dengan Kuis 20 Soal interaktif.',
    content: '[GERAK_BERIRAMA]\n🎵 **Gerak Berirama (Ritmik)**: Rangkaian aktivitas olahraga yang indah dan menyelaraskan gerak tubuh secara serasi dengan iringan ketukan, tepukan, atau alunan musik gembira.\n🎯 **Tujuan Utama & Unsur Utama**: Unsur paling utama yang menjadi pemandu atau penuntun gerakan dalam senam irama adalah **Irama musik**. Hal ini melatih kelenturan tubuh serta kekompakan kelompok agar gerakan tampak indah dan serasi.\n👟 **Pola Hitungan & Gerak Langkah Kaki**: Hitungan standar yang digunakan adalah ritme **satu sampai delapan (1-8)**. Gerakan melangkah bergantian ke depan disebut **Langkah Biasa (loop-pas)**.\n💪 **Variasi Ayunan Lengan**: **Ayunan satu lengan ke samping** setinggi bahu bermanfaat untuk melatih kelenturan persendian bahu dan koordinasi gerak.\n🚶‍♀️ **Langkah Dasar Gerak Langkah Kaki ke Depan**:\n1. Berdiri tegak dengan sikap awal yang prima, kedua tangan diletakkan di pinggang.\n2. Melangkahkan kaki kanan ke depan lurus pada hitungan kesatu.\n3. Melangkahkan kaki kiri ke depan pada hitungan kedua, dilanjutkan merapatkan kedua kaki secara lurus.\n\n[AKTIVITAS_AIR]\n🏊‍♂️ **Olahraga & Aktivitas Air**: Aktivitas air yang sangat baik untuk melatih kekuatan otot dan ketahanan pernapasan.\n⚠️ **Pentingnya Latihan Pemanasan**: Sebelum berenang, lakukan peregangan agar aliran darah lancar, suhu tubuh meningkat, dan **mengurangi risiko cedera atau kram otot**.\n🥽 **Perlengkapan & Alat Bantu**: Gunakan **kacamata renang** untuk melindungi mata agar tidak perih terkena air kaporit kolam. Anak lambat mengapung dapat ditunjang memakai **papan pelampung**.\n🚀 **Teknik Meluncur**: Posisi badan lurus mendatar **sejajar dengan permukaan air (streamline)** untuk memperkecil gaya hambat air sehingga luncuran menjadi sangat jauh dan stabil.\n🌬️ **Pernapasan Secara Benar**: Teknik mengambil napas ditarik lewat mulut saat kepala mendongak di permukaan, lalu buang napas perlahan melalui **hidung atau mulut** di dalam air.\n🧍 **Posisi Mengapung Telentang**: Melentangkan badan di air dengan posisi mata dan wajah **menghadap ke atas/langit** agar pernapasan tetap lancar dan keseimbangan terjaga.\n🛑 **Prosedur & Aturan Keselamatan**: Salah satu aturan keselamatan mutlak adalah **dilarang berlari di sepanjang pinggir kolam** karena permukaan lantai basah dan licin yang rentan terpeleset. Jika mulai merasa menggigil kedinginan, segera keluar dari kolam renang dan keringkan badan dengan handuk.\n\n[KEBUGARAN_JASMANI]\n🏃 **Kebugaran Jasmani**: Kemampuan fisik tubuh kita untuk menjalani semua aktivitas belajar dan bermain sehari-hari bebas dari rasa lelah berlebih.\n🔥 **Manfaat Pemanasan**: Mengondisikan persendian dan meminimalkan cedera fatal.\n💪 **Latihan Kekuatan Otot**: \n- *Sit-up*: Latihan menahan beban tubuh yang dikhususkan menguatkan otot-otot di bagian **perut**.\n- *Push-up*: Latihan tumpu badan yang berfokus melatih kekuatan daya tahan otot **lengan dan dada**.\n💨 **Latihan Kelincahan**: Kemampuan merubah arah dengan cepat dan tangkas tanpa kehilangan keseimbangan, dilatih dengan olahraga **lari bolak-balik (shuttle run)**.\n🙆‍♂️ **Latihan Kelenturan (Mencium Lutut)**: Gerakan menyentuh jari/mencium lutut dalam posisi selonjor bertujuan melatih kelenturan otot **punggung dan paha belakang (hamstring)**.\n📈 **Pengukuran Detak Jantung (Nadi)**: Denyut nadi setelah latihan dapat diperiksa secara mandiri pada titik **pergelangan tangan (arteri radialis)** atau **leher (arteri karotis)**. Letakkan dua jari (telunjuk & tengah) pada pergelangan tangan, hitung denyut selama 15 detik lalu kalikan 4 untuk mengetahui beban kerja jantung kardiovaskular.\n👍 **Ciri Tubuh Bugar**: Tidak mudah merasa lelah, nafsu makan stabil, tidur lebih berkualitas/nyenyak, serta istirahat tidur teratur.\n\n[KEBERSIHAN_ALAT_REPRODUKSI]\n🛡️ **Menjaga Organ Reproduksi**: Upaya utama melindungi diri dari penyakit kulit, bakteri, dan infeksi menular.\n🧼 **Membilas Setelah Renang**: Selesai berenang di kolam umum, bersegeralah **mandi membilas badan memakai air bersih dan sabun** untuk membasmi kuman, bakteri air kolam, serta zat sisa kaporit.\n🚿 **Arah Kebersihan Kelamin & Cuci Tangan**: Sehabis buang air, basuh kelamin memakai **air mengalir bersih** dari arah **depan ke belakang**. Serta cuci tangan dengan sabun pasca toilet guna melenyapkan kuman penyakit.\n🩲 **Memilih & Mengganti Celana**: Gantilah celana dalam **minimal dua kali sehari** setelah mandi pagi dan sore. Pilihlah bahan **katun** lembut yang andal dalam menyerap keringat guna meredam area privat yang becek.\n🧣 **Bahaya Saling Tukar Barang**: Kita **dilarang saling meminjamkan handuk** atau pakaian dalam karena bakteri patogen atau jamur gatal rentan menempel di helai kain yang beralih pengguna.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/SOf-hZk5g7o',
    quiz: [
      {
        id: 'q1',
        text: 'Unsur utama dalam aktivitas gerak berirama yang harus diikuti oleh pesertanya sebagai pemandu gerakan adalah...',
        options: ['Kekuatan otot', 'Irama musik', 'Kecepatan lari', 'Kedalaman air'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        text: 'Manfaat melakukan pemanasan sebelum melakukan aktivitas olahraga dan kebugaran tubuh adalah...',
        options: ['Agar cepat merasa lelah', 'Meningkatkan rasa lapar', 'Mengurangi risiko cedera otot', 'Mempercepat detak jantung saat istirahat'],
        correctAnswer: 2
      },
      {
        id: 'q3',
        text: 'Setelah selesai berenang di kolam umum, tindakan yang paling tepat untuk menjaga kesehatan kulit dan alat reproduksi adalah...',
        options: ['Mandi membilas diri dengan air bersih dan sabun', 'Langsung memakai baju tanpa handukan', 'Hanya membasuh bagian muka saja', 'Memakai baju renang yang basah seharian'],
        correctAnswer: 0
      },
      {
        id: 'q4',
        text: 'Kemampuan tubuh seseorang untuk melakukan aktivitas fisik sehari-hari tanpa merasa kelelahan yang berlebihan disebut dengan...',
        options: ['Kesehatan tubuh', 'Kelenturan persendian', 'Kekuatan fisik', 'Kebugaran jasmani'],
        correctAnswer: 3
      },
      {
        id: 'q5',
        text: 'Posisi tubuh yang benar dan tepat saat kita melakukan gerakan meluncur di dalam air adalah...',
        options: ['Menekuk lutut ke depan', 'Sejajar dengan permukaan air (lurus/streamline)', 'Tegak lurus seperti orang berdiri', 'Menekuk tangan rapat ke samping'],
        correctAnswer: 1
      },
      {
        id: 'q6',
        text: 'Gerakan mengayun satu lengan ke samping setinggi bahu dalam aktivitas gerak ritmik bertujuan melatih kelenturan otot...',
        options: ['Otot perut', 'Persendian bahu dan lengan', 'Otot lutut', 'Otot paha belakang'],
        correctAnswer: 1
      },
      {
        id: 'q7',
        text: 'Latihan lari bolak-balik (shuttle run) yang dilakukan secara cepat bertujuan untuk meningkatkan aspek kebugaran yaitu...',
        options: ['Daya tahan jantung', 'Kekuatan otot perut', 'Kelincahan tubuh', 'Kelenturan sendi'],
        correctAnswer: 2
      },
      {
        id: 'q8',
        text: 'Mengapa kita harus memilih pakaian dalam atau celana dalam yang terbuat dari bahan serat katun?',
        options: ['Karena harganya sangat murah', 'Agar modelnya terlihat lebih bagus', 'Supaya terasa dingin seharian', 'Sangat mudah menyerap keringat dan mencegah area lembap'],
        correctAnswer: 3
      },
      {
        id: 'q9',
        text: 'Apa tindakan darurat yang harus kita lakukan jika tiba-tiba merasa kedinginan atau menggigil di dalam air kolam?',
        options: ['Segera keluar dari kolam renang dan mengeringkan badan', 'Terus melanjutkan berenang agar badan terasa panas', 'Menyelam ke dasar kolam yang paling dalam', 'Meminum air kolam renang hangat-hangat'],
        correctAnswer: 0
      },
      {
        id: 'q10',
        text: 'Jika temanmu ingin melatih kekuatan otot perut agar kuat seimbang, gerakan olahraga yang kamu sarankan adalah...',
        options: ['Push-up tumpu lengan', 'Sit-up angkat badan', 'Pull-up gantung besi', 'Squat-jump meloncat'],
        correctAnswer: 1
      },
      {
        id: 'q11',
        text: 'Pola hitungan ritme standar yang digunakan saat melangsungkan rangkaian gerak senam berirama adalah...',
        options: ['Hitungan 1 sampai 5', 'Hitungan 1 sampai 8', 'Hitungan 1 sampai 10', 'Bebas sekehendak hati'],
        correctAnswer: 1
      },
      {
        id: 'q12',
        text: 'Perhatikan teknik pernapasan air! Cara membuang napas yang benar saat kepala berada di air kolam adalah...',
        options: ['Dihirup sedalam mungkin melalui hidung', 'Ditahan selama mungkin tanpa batas', 'Dikeluarkan perlahan melalui hidung atau mulut', 'Dibuang melalui lubang telinga kiri'],
        correctAnswer: 2
      },
      {
        id: 'q13',
        text: 'Mencuci tangan sebersih mungkin menggunakan sabun setelah selesai buang air besar/kecil bertujuan untuk...',
        options: ['Membuat tangan berbau harum buah', 'Supaya kuku tangan tampak putih berseri', 'Menghabiskan sabun cuci tangan sekolah', 'Menghilangkan kotoran, kuman, dan bakteri berbahaya'],
        correctAnswer: 3
      },
      {
        id: 'q14',
        text: 'Alat bantu berenang yang tepat disarankan bagi seorang pemula untuk belajar mengapung stabil adalah...',
        options: ['Papan pelampung renang', 'Sepatu olahraga jalan pagi', 'Raket tenis lapangan keras', 'Barbel besi beban latihan otot'],
        correctAnswer: 0
      },
      {
        id: 'q15',
        text: 'Latihan mencium lutut dengan meluruskan kedua kaki lurus ke depan (selonjor) ditujukan melatih kelenturan otot...',
        options: ['Kekuatan tangan dan lengan', 'Keseimbangan tumpu tubuh', 'Kelenturan otot punggung dan paha belakang', 'Kecepatan berlari sprint'],
        correctAnswer: 2
      }
    ],
    matchPairs: [
      { id: 'm1', left: 'Denyut Nadi Teraba Di 💓', right: 'Pergelangan tangan atau leher 🩺' },
      { id: 'm2', left: 'Istilah Medis Daya Tahan ❤️', right: 'Kardiovaskular (jantung/paru) 🫁' },
      { id: 'm3', left: 'Mengapung Telentang Wajah ☁️', right: 'Menghadap ke atas / langit 🌌' },
      { id: 'm4', left: 'Sering Tukar Handuk Bahaya 🚫', right: 'Tertular penyakit kulit/jamur 🦠' },
      { id: 'm5', left: 'Arah Membersihkan Kelamin 🚿', right: 'Dari depan ke belakang 🔁' }
    ]
  },
  {
    id: 'kesehatan-k5-s2',
    grade: 5,
    semester: 2,
    title: 'Persiapan ASAS PJOK Kelas 5',
    description: 'Rangkuman lengkap Gerak Berirama, Senam/Renang, Kebugaran Jasmani, & Pemeliharaan Kesehatan dengan Kuis 20 Soal interaktif.',
    content: '[GERAK_BERIRAMA]\n🎵 **Gerak Berirama (Senam Irama)**: Seluruh aktivitas gerak jasmani yang dipadukan secara terikat dengan ketukan, hitungan, tepukan lagu, atau alunan musik yang harmonis. Senam irama menekankan korelasi ritmik yang indah.\n🎹 **Ciri Khas & Unsur Utama**: Unsur paling mendasar yang membedakan aktivitas gerak berirama dengan aktivitas senam biasa adalah **Musik penyerta atau hitungan ketukan** yang digunakan untuk menyelaraskan ketepatan gerak tubuh agar semua peserta bergerak kompak, serasi, dan indah.\n👟 **Langkah Kaki (Looppas)**: Gerakan dasar mengayunkan kaki secara bergantian melangkah ke depan dengan gerakan lutut yang lentur (mengeper) disebut **Langkah Biasa (looppas)**.\n💪 **Tujuan Ayunan Lengan**: Melakukan variasi **ayunan lengan** dalam gerak berirama bermanfaat bagi tubuh untuk **melatih kelenturan persendian bahu serta koordinasi gerak** antara kaki dan tangan.\n🧍 **Sikap Awal**: Sikap awal yang paling benar saat hendak memulai rincian gerak berirama adalah berdiri dalam posisi yang **tegak namun tetap rileks** agar mumpuni dalam melakukan transisi gerak berikutnya dengan luwes.\n🧘‍♂️ **Koordinasi Otot Kaki & Pinggul**: Bagian tubuh kita yang paling banyak berkoordinasi dan bergerak aktif saat melakukan variasi gerak langkah kaki adalah bagian **kaki dan persendian pinggul**.\n\n[AKTIVITAS_AIR]\n🏊‍♂️ **Aktivitas Air & Renang**: Salah satu olahraga air terbaik untuk menyegarkan badan, memperkuat organ pernapasan, serta melatih daya tahan otot tubuh.\n⚠️ **Manfaat Utama Pemanasan**: Melakukan gerakan peregangan dan pemanasan sesaat sebelum menceburkan diri ke dalam air kolam renang bertujuan utama untuk **mencegah terjadinya kram otot di dalam air** dan menghindari cedera sendi.\n🚀 **Teknik Meluncur**: Posisi meluncur (*streamline*) yang ideal adalah tubuh berbaring **sejajar mendatar dengan permukaan air** guna memperoleh tingkat hidrodinamis terbaik dan meminimalkan tekanan hambat air kolam.\n🏊 **Renang Gaya Dada (Gaya Katak)**: Nama atau istilah lain dari renang gaya dada disebut juga sebagai **Renang Gaya Katak** karena gerakan kakinya yang menendang-nendang menyerupai cara katak berenang di air.\n🌬️ **Teknik Pengambilan Napas**: Pada gaya dada, teknik pengambilan napas yang benar dilakukan dengan mengangkat kepala ke permukaan dan menghirup udara luar menggunakan **rongga mulut saat kepala mendongak di atas air**.\n🛟 **Mengapung Telentang**: Melatih kemampuan mengambang diam secara rileks di kolam renang. Badan diposisikan tidur telentang di permukaan air dengan tangan kaki terbuka lebar, melatih **keseimbangan dan koordinasi mengapung**.\n\n[KEBUGARAN_JASMANI]\n🏃 **Kebugaran Jasmani**: Kesanggupan dan kapasitas fisik tubuh kita untuk melakukan kerja dan aktivitas fisik sehari-hari secara dinamis tanpa menderita kelelahan yang berlebihan atau berarti.\n💪 **Latihan Sit-up**: Melakukan gerakan mengangkat tubuh ke arah tekukan lutut ini bertujuan spesifik untuk melatih kekuatan dan ketahanan **otot perut bagian tengah**.\n🫁 **Mengukur Daya Tahan Jantung & Paru-Paru (Kardiovaskular)**: Jenis instrumen tes yang paling umum dan standar diaplikasikan secara ilmiah untuk mengukur kebugaran organ peredaran darah adalah melakukan **Lari 12 Menit**.\n🙆‍♂️ **Kenalan dengan Kelenturan (Flexibility)**: Gerakan senam membungkuk mencium lutut dari posisi duduk lurus selonjor ditujukan melatih komponen kebugaran **kelenturan otot punggung dan paha belakang (hamstring)**.\n💤 **Pentingnya Istirahat Tidur**: Istirahat tidur malam yang cukup bagi kebugaran jasmani seluruh organ tubuh sangat diperlukan sebagai **waktu krusial memulihkan tenaga dan regenerasi sel** setelah seharian penuh berolahraga dan belajar.\n\n[KEBERSIHAN_DARI_PENYAKIT]\n🛡️ **Pemeliharaan Kesehatan & Pencegahan Penyakit**: Upaya sadar guna membentengi diri sendiri dan orang lain di sekeliling kita dari berbagai ancaman kuman penyakit.\n🦠 **Penyakit Menular**: Kategori penyakit yang disebabkan oleh agen biologi (bakteri, virus, parasit) dan dapat **berpindah atau ditularkan dari orang sakit ke orang sehat** (misal: penyakit Influenza, DBD, diare).\n🧼 **Mencuci Tangan Berkelas**: Langkah yang paling efektif dan higienis untuk membersihkan seluruh telapak tangan adalah dengan **mencuci tangan secara teratur menggunakan sabun**. Sela-sela jari harus tetap digosok karena **sela jari sering menjadi tempat kuman bersembunyi** dan berkembang biak.\n🦟 **Antisipasi Demam Berdarah Dengue (DBD)**: Penyakit demam berdarah ditularkan via gigitan nyamuk Aedes aegypti. Langkah tangkal terbaik adalah mempraktikkan **gerakan 3M**: \n1. **Menguras** wadah penampungan air secara teratur.\n2. **Menutup** rapat tempat penampungan air.\n3. **Mengubur** barang-barang bekas penampung air hujan agar tidak menjadi sarang jentik.\n🏡 **Lingkungan Sehat**: Salah satu indikator utama dari kebersihan lingkungan yang sehat dan bebas dari sarang penyakit adalah kondisi **saluran selokan air yang lancar, jernih, dan bersih**.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/zOdfE6B6IOM',
    quiz: [
      {
        id: 'q1',
        text: 'Unsur utama yang membedakan aktivitas gerak berirama dengan aktivitas senam biasa adalah penggunaan...',
        options: ['Alat-alat berat dan besi', 'Musik penyerta atau hitungan ketukan', 'Pakaian seragam olahraga kelas', 'Lapangan terbuka yang luas'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        text: 'Gerakan melangkahkan satu kaki ke depan dengan posisi kedua lutut bergerak lentur mengeper dalam senam ritmik disebut...',
        options: ['Langkah biasa (looppas)', 'Langkah rapat lurus', 'Langkah keseimbangan (zijpas)', 'Langkah koordinasi silang'],
        correctAnswer: 0
      },
      {
        id: 'q3',
        text: 'Gerakan variasi ayunan lengan dalam aktivitas gerak berirama secara umum bertujuan utama untuk melatih...',
        options: ['Kekuatan maksimal otot jantung', 'Kecepatan berlari jarak pendek', 'Daya tahan fungsional paru-paru', 'Kelenturan persendian bahu dan koordinasi gerak'],
        correctAnswer: 3
      },
      {
        id: 'q4',
        text: 'Saat hendak memulai rincian gerak berirama, posisi sikap awal berdiri yang benar dan dianjurkan adalah...',
        options: ['Berdiri bersikap tegak namun tetap rileks', 'Membungkuk condong ke depan', 'Jongkok tumpu dua kaki', 'Berdiri kaku dengan mata terpejam'],
        correctAnswer: 0
      },
      {
        id: 'q5',
        text: 'Bagian tubuh kita yang paling banyak berkoordinasi dan bergerak aktif saat melakukan variasi gerak langkah kaki adalah...',
        options: ['Persendian tangan dan leher', 'Kepala serta organ punggung', 'Bagian kaki dan persendian pinggul', 'Perut bagian atas serta otot lengan'],
        correctAnswer: 2
      },
      {
        id: 'q6',
        text: 'Melakukan aktivitas latihan pemanasan sebelum menceburkan diri ke dalam air kolam renang bertujuan utama untuk...',
        options: ['Mencegah terjadinya kram otot di dalam air', 'Agar tubuh kita tidak menjadi basah kuyup', 'Membantu mengeringkan kulit luar tubuh', 'Membuat kondisi suhu air kolam berubah hangat'],
        correctAnswer: 0
      },
      {
        id: 'q7',
        text: 'Sikap tubuh yang benar dan lurus saat kita sedang mempraktikkan gerakan meluncur di dalam air adalah...',
        options: ['Tegak lurus mengarah ke dasar kolam', 'Kepala diposisikan lebih rendah dari kaki', 'Sejajar mendatar dengan permukaan air (streamline)', 'Miring miring ke arah salah satu sela kolam'],
        correctAnswer: 2
      },
      {
        id: 'q8',
        text: 'Pada olahraga renang gaya dada, teknik pengambilan napas yang benar dilakukan melalui bagian...',
        options: ['Rongga hidung saat kepala terbenam di air', 'Rongga mulut saat kepala mendongak di atas air', 'Rongga mulut saat kepala berada di dalam air', 'Lubang hidung ketika kepala di bawah kolam'],
        correctAnswer: 1
      },
      {
        id: 'q9',
        text: 'Alat bantu apung yang paling utama digunakan bagi pemula agar mempermudah proses belajar mengapung adalah...',
        options: ['Kacamata renang anti-kaporit', 'Topi kepala pelindung rambut', 'Sepatu katak penambah laju', 'Papan pelampung busa renang'],
        correctAnswer: 3
      },
      {
        id: 'q10',
        text: 'Posisi tidur telentang di air kolam dengan tangan kaki terlentang terbuka lebar berguna melatih teknik...',
        options: ['Kecepatan melaju lancar', 'Keseimbangan dalam mengapung diam', 'Diving menyelam di kedalaman', 'Pembalikan badan di sisi dinding'],
        correctAnswer: 1
      },
      {
        id: 'q11',
        text: 'Kemampuan fisik luar biasa dari tubuh kita dalam melakukan aktivitas sehari-hari bebas dari rasa lelah berlebih disebut...',
        options: ['Kekuatan otot maksimal', 'Daya ketangkasan organ', 'Kebugaran jasmani yang prima', 'Daya kesehatan mental psikologis'],
        correctAnswer: 2
      },
      {
        id: 'q12',
        text: 'Melakukan rangkaian aktivitas latihan sit-up secara teratur ditargetkan untuk melatih kekuatan otot...',
        options: ['Otot perut bagian tengah', 'Lengan dan pergelangan tangan', 'Otot punggung bagian atas', 'Paha kanan dan kiri'],
        correctAnswer: 0
      },
      {
        id: 'q13',
        text: 'Untuk mengukur daya tahan jantung dan paru-paru (kardiovaskular) secara optimal, tes yang biasa dijalankan adalah...',
        options: ['Push-up berulang kali', 'Tes lari cepat 12 menit', 'Lompat jauh bak pasir', 'Tarik tambang kelompok'],
        correctAnswer: 1
      },
      {
        id: 'q14',
        text: 'Gerakan senam mencium lutut dari posisi duduk lurus selonjor ditujukan melatih komponen kebugaran...',
        options: ['Kekuatan otot lengan atas', 'Daya tangkas gerak refleks', 'Keseimbangan organ kaki', 'Kelenturan otot punggung dan paha belakang'],
        correctAnswer: 3
      },
      {
        id: 'q15',
        text: 'Salah satu manfaat istirahat tidur malam yang cukup bagi kebugaran jasmani seluruh organ tubuh adalah...',
        options: ['Sebagai waktu krusial memulihkan tenaga dan regenerasi sel', 'Membuat massa otot kaku tegang', 'Membantu meninggikan berat badan', 'Menghilangkan selera nafsu makan'],
        correctAnswer: 0
      }
    ],
    matchPairs: [
      { id: 'm1', left: 'Kerja Sama Kompak Kelompok 👥', right: 'Saling bekerja sama & kompak 🤝' },
      { id: 'm2', left: 'Berenang Gaya Dada Disebut 🏊‍♂️', right: 'Gaya katak berenang 🐸' },
      { id: 'm3', left: 'Lari Cepat (Sprint) Melatih 🏃‍♂️', right: 'Kecepatan berlari ⚡' },
      { id: 'm4', left: 'Penularan Flu Influenza 💨', right: 'Droplet udara/bersin penderita 🌬️' },
      { id: 'm5', left: 'Zat Pembangun Protein 🥚', right: 'Proses pertumbuhan tubuh 🌱' }
    ]
  }
];
