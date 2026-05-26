import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Trophy, ChevronRight, Play, CheckCircle2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { materials } from './data/materials';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import TraditionalGameAnimation from './components/TraditionalGameAnimation';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-sky-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-sky-500 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-lg shadow-sky-100">
              <Trophy size={24} />
            </div>
            <span className="font-bold text-sky-900 text-lg hidden sm:block">PJOK SD Karanggeger II</span>
            <span className="font-bold text-sky-900 text-lg sm:hidden">PJOK SD</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sky-700 hover:text-sky-900 font-medium transition-colors">Beranda</Link>
            <Link to="/asas-genap" className="text-orange-600 hover:text-orange-700 font-bold transition-colors">ASAS Genap 2025/2026</Link>
            <Link to="/materi" className="bg-sky-500 text-white px-4 py-2 rounded-full font-medium hover:bg-sky-600 transition-all hover:shadow-md">Lihat Materi</Link>
          </div>

          <button className="md:hidden text-sky-700" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-sky-50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-sky-700 font-medium px-2 py-2">Beranda</Link>
              <Link to="/asas-genap" onClick={() => setIsOpen(false)} className="text-orange-600 font-bold px-2 py-2">ASAS Genap 2025/2026</Link>
              <Link to="/materi" onClick={() => setIsOpen(false)} className="bg-sky-500 text-white px-4 py-3 rounded-xl font-bold text-center">Lihat Materi</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HomePage() {
  const grades = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-sky-900 leading-tight mb-6">
                Belajar PJOK Jadi <span className="text-orange-500">Lebih Seru!</span>
              </h1>
              <p className="text-lg text-sky-700 mb-8 max-w-xl mx-auto lg:mx-0">
                Aplikasi materi pembelajaran Pendidikan Jasmani, Olahraga, dan Kesehatan untuk siswa SD Negeri Karanggeger II. Pilih kelasmu dan mulai petualangan olahraga sekarang!
              </p>
              <Link to="/materi" className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-sky-600 hover:scale-105 transition-all shadow-lg shadow-sky-200">
                Mulai Belajar <ChevronRight size={24} />
              </Link>
            </motion.div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <TraditionalGameAnimation />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400 rounded-full z-0 blur-2xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-400 rounded-full z-0 blur-2xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Persiapan ASAS Genap 2025/2026 Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-900 via-sky-850 to-indigo-950 text-white rounded-[4rem] p-8 md:p-14 relative overflow-hidden shadow-2xl shadow-sky-950/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-450 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-10 pb-8 border-b border-white/10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500 rounded-full text-xs font-black tracking-widest uppercase text-white shadow-lg shadow-orange-500/30 animate-bounce">
                  <Trophy size={14} /> Menu Khusus Persiapan Ujian
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Persiapan ASAS Genap <span className="text-orange-400">2025/2026</span>
                </h2>
                <p className="text-sky-200 text-sm md:text-base max-w-2xl leading-relaxed">
                  Asesmen Sumatif Akhir Semester (ASAS) Genap segera tiba! Pelajari materi rangkuman esensial PJOK kelas 1 sampai kelas 5 sesuai panduan terbaru dari Kemendikdasmen dan ukur kesiapanmu lewat kuis interaktifnya.
                </p>
              </div>

              <Link 
                to="/asas-genap" 
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-black text-white text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-950/20 whitespace-nowrap self-start lg:self-center"
              >
                Buka Menu ASAS Genap →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((grade) => {
                const mapId = grade === 1 ? 'pola-hidup-sehat-k1-s2' : 
                              grade === 2 ? 'gerak-irama-k2-s2' : 
                              grade === 3 ? 'aktivitas-air-k3-s2' : 
                              grade === 4 ? 'kebugaran-k4-s2' : 
                              'kesehatan-k5-s2';
                return (
                  <Link 
                    key={grade}
                    to={`/materi/${mapId}`}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-[2rem] p-6 transition-all text-left flex flex-col justify-between group h-40 hover:border-orange-500/30"
                  >
                    <div>
                      <span className="font-extrabold text-orange-400 text-sm tracking-wide block">Kelas {grade} SD</span>
                      <h4 className="font-bold text-white text-base mt-2 line-clamp-2 leading-snug group-hover:text-orange-300 transition-colors">
                        Materi Persiapan ASAS Genap Kelas {grade}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-black text-sky-400 uppercase tracking-wider mt-4">
                      <span>Mulai</span> <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selection */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-sky-900 mb-2">Pilih Kelas</h2>
            <p className="text-sky-600">Terdiri dari berbagai materi yang disesuaikan untuk tiap tingkatan.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {grades.map((grade) => (
              <motion.div key={grade} whileHover={{ y: -5 }}>
                <Link 
                  to={`/materi?grade=${grade}`}
                  className="group flex flex-col items-center p-8 rounded-[2.5rem] border-2 border-sky-50 hover:border-sky-500 hover:bg-sky-50 transition-all text-center shadow-lg shadow-sky-50 hover:shadow-sky-100 bg-white"
                >
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors animate-pulse group-hover:animate-none">
                    <GraduationCap size={32} />
                  </div>
                  <span className="font-bold text-sky-900">Kelas {grade}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-sky-50">
        <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block p-2 px-4 bg-orange-100 text-orange-600 rounded-full font-bold text-sm uppercase tracking-wide">
                Kurikulum Merdeka
            </div>
            <h3 className="text-3xl font-black text-sky-900">Sesuai Panduan Kemendikdasmen</h3>
            <p className="text-lg text-sky-700 leading-relaxed">
                Materi yang disusun telah mengacu pada panduan mata pelajaran PJOK terbaru untuk menciptakan generasi yang sehat, bugar, dan berkarakter. Dilengkapi dengan kuis interaktif agar belajar jadi lebih menyenangkan bagi siswa SD Negeri Karanggeger II.
            </p>
        </div>
      </section>
    </div>
  );
}

function MaterialsListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGrade = Number(searchParams.get('grade')) || 1;
  const initialSemester = Number(searchParams.get('semester')) || 1;
  
  const [selectedGrade, setSelectedGrade] = useState(initialGrade);
  const [selectedSemester, setSelectedSemester] = useState(initialSemester);

  const filteredMaterials = materials.filter(m => m.grade === selectedGrade && m.semester === selectedSemester);

  useEffect(() => {
    setSearchParams({ grade: selectedGrade.toString(), semester: selectedSemester.toString() });
  }, [selectedGrade, selectedSemester, setSearchParams]);

  return (
    <div className="min-h-screen bg-sky-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="w-full md:w-auto">
            <h1 className="text-4xl font-black text-sky-900 mb-6">Daftar Materi</h1>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map(g => (
                <button 
                  key={g} 
                  onClick={() => setSelectedGrade(g)}
                  className={cn(
                    "px-6 py-3 rounded-2xl font-bold transition-all text-lg",
                    selectedGrade === g ? "bg-sky-500 text-white shadow-xl shadow-sky-200" : "bg-white text-sky-600 hover:bg-sky-100"
                  )}
                >
                  K{g}
                </button>
              ))}
            </div>
          </div>
          <div className="flex bg-white p-2 rounded-[1.5rem] shadow-sm w-full md:w-auto">
            {[1, 2].map(s => (
              <button 
                key={s}
                onClick={() => setSelectedSemester(s)}
                className={cn(
                  "flex-1 md:px-10 py-3 rounded-xl font-bold transition-all text-lg",
                  selectedSemester === s ? "bg-orange-500 text-white shadow-lg" : "text-sky-600 hover:bg-sky-50"
                )}
              >
                Semester {s}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
            {filteredMaterials.length > 0 ? (
            <motion.div 
                key={`${selectedGrade}-${selectedSemester}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {filteredMaterials.map((m) => (
                <motion.div 
                    key={m.id}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-sky-900/5 hover:shadow-sky-900/10 transition-all border border-sky-100 flex flex-col"
                >
                    <div className="aspect-video relative overflow-hidden">
                    <img 
                        src={m.imageUrl} 
                        alt={m.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-sky-700 shadow-sm uppercase tracking-widest">
                        Kelas {m.grade} • Sem {m.semester}
                    </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-sky-900 mb-3 leading-tight tracking-tight">{m.title}</h3>
                    <p className="text-sky-600 text-sm mb-8 line-clamp-3 leading-relaxed">{m.description}</p>
                    <div className="mt-auto">
                        <Link 
                            to={`/materi/${m.id}`}
                            className="flex items-center justify-center gap-2 w-full bg-sky-500 text-white py-4 rounded-2xl font-black hover:bg-sky-600 transition-all shadow-lg shadow-sky-200"
                        >
                            Buka Materi <ChevronRight size={20} />
                        </Link>
                    </div>
                    </div>
                </motion.div>
                ))}
            </motion.div>
            ) : (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 bg-white rounded-[3rem] border-4 border-dashed border-sky-50"
            >
                <div className="bg-sky-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-200">
                <BookOpen size={48} />
                </div>
                <h3 className="text-2xl font-black text-sky-900 mb-2">Belum Ada Materi</h3>
                <p className="text-sky-500 max-w-sm mx-auto">Materi untuk tingkat kelas dan semester ini sedang disusun oleh tim guru PJOK.</p>
            </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MaterialDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const material = materials.find(m => m.id === id);
  const [showQuiz, setShowQuiz] = useState(searchParams.get('startQuiz') === 'true');
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Sub-tabs for Class 1 Interactive Lesson
  const [selectedSubTab, setSelectedSubTab] = useState<'bagian' | 'kebersihan' | 'jasmani' | 'irama' | 'air' | 'penyakit' | 'reproduksi'>('bagian');
  
  // Set the first sub-tab automatically when material id changes or page mounts
  useEffect(() => {
    if (material) {
      if (material.id === 'pola-hidup-sehat-k1-s2') {
        setSelectedSubTab('bagian');
      } else {
        setSelectedSubTab('irama');
      }
    }
  }, [material]);
  
  // Kids Interactive Games State
  const [teethClickCount, setTeethClickCount] = useState(0);
  const [isWashingHands, setIsWashingHands] = useState(false);
  const [bubblePopped, setBubblePopped] = useState(0);
  const [isRunningFeet, setIsRunningFeet] = useState(false);
  const [musicBeatsCount, setMusicBeatsCount] = useState(0);
  const [waterBlowCount, setWaterBlowCount] = useState(0);

  // Class 3 ASAS Specific States
  const [vSitHoldSeconds, setVSitHoldSeconds] = useState(0);
  const [isVSitCounting, setIsVSitCounting] = useState(false);
  const [selectedUnderwear, setSelectedUnderwear] = useState<string | null>(null);
  const [washDirectionStep, setWashDirectionStep] = useState<string | null>(null);
  const [glideDistanceState, setGlideDistanceState] = useState(0);
  const [isGliding, setIsGliding] = useState(false);

  // Class 4 ASAS Specific States
  const [pulseCountSeconds, setPulseCountSeconds] = useState(0);
  const [isMeasuringPulse, setIsMeasuringPulse] = useState(false);
  const [pulseBeatsCount, setPulseBeatsCount] = useState(0);
  const [selectedUnderwearK4, setSelectedUnderwearK4] = useState<string | null>(null);
  const [washDirectionK4, setWashDirectionK4] = useState<string | null>(null);
  const [shuttleRunLaps, setShuttleRunLaps] = useState(0);
  const [isShuttleRunning, setIsShuttleRunning] = useState(false);
  const [floatHoldSeconds, setFloatHoldSeconds] = useState(0);
  const [isFloatingK4, setIsFloatingK4] = useState(false);
  const [armSwingBeats, setArmSwingBeats] = useState(0);

  // Class 5 ASAS Specific States
  const [c5RhythmSpeed, setC5RhythmSpeed] = useState(1); // 1 = lambat, 2 = sedang, 3 = cepat
  const [c5RhythmCount, setC5RhythmCount] = useState(1);
  const [c5DoPemanasan, setC5DoPemanasan] = useState(false);
  const [c5GlideActive, setC5GlideActive] = useState(false);
  const [c5SitUpCount, setC5SitUpCount] = useState(0);
  const [c5LariProgress, setC5LariProgress] = useState(0); // target 100
  const [c5WashStep, setC5WashStep] = useState(1); // 1, 2, 3
  const [c5DbdMenguras, setC5DbdMenguras] = useState(false);
  const [c5DbdMenutup, setC5DbdMenutup] = useState(false);
  const [c5DbdMengubur, setC5DbdMengubur] = useState(false);

  // Matchmaking State for Quiz
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [currentMatches, setCurrentMatches] = useState<Record<string, string>>({});

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setC5RhythmCount(prev => (prev >= 8 ? 1 : prev + 1));
    }, 1200 / c5RhythmSpeed);
    return () => clearInterval(interval);
  }, [c5RhythmSpeed]);

  // Class 4 Pulse and Shuttle Run animation handlers
  useEffect(() => {
    let timer: any = null;
    if (isMeasuringPulse) {
      setPulseCountSeconds(0);
      setPulseBeatsCount(0);
      timer = setInterval(() => {
        setPulseCountSeconds(prev => {
          if (prev >= 15) {
            setIsMeasuringPulse(false);
            clearInterval(timer);
            setPulseBeatsCount(Math.floor(Math.random() * 5) + 18); // healthy 15s pulse (72-92 bpm)
            return 15;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isMeasuringPulse]);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setArmSwingBeats(prev => (prev >= 8 ? 1 : prev + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer: any = null;
    if (isShuttleRunning) {
      timer = setInterval(() => {
        setShuttleRunLaps(prev => {
          if (prev >= 3) {
            setIsShuttleRunning(false);
            clearInterval(timer);
            return 3;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isShuttleRunning]);

  useEffect(() => {
    let timer: any = null;
    if (isFloatingK4) {
      timer = setInterval(() => {
        setFloatHoldSeconds(prev => {
          if (prev >= 10) {
            setIsFloatingK4(false);
            clearInterval(timer);
            return 10;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isFloatingK4]);

  if (!material) return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Materi tidak ditemukan</h2>
            <Link to="/materi" className="text-sky-500 font-bold underline">Halaman Materi</Link>
        </div>
    </div>
  );

  useEffect(() => {
    let interval: any = null;
    if (isVSitCounting) {
      interval = setInterval(() => {
        setVSitHoldSeconds(prev => {
          if (prev >= 10) {
            setIsVSitCounting(false);
            return 10;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVSitCounting]);

  useEffect(() => {
    let interval: any = null;
    if (isMeasuringPulse) {
      interval = setInterval(() => {
        setPulseCountSeconds(prev => {
          if (prev >= 15) {
            setIsMeasuringPulse(false);
            setPulseBeatsCount(21); // 21 beats in 15 sec -> (21 * 4) = 84 BPM
            return 15;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMeasuringPulse]);

  useEffect(() => {
    let interval: any = null;
    if (isFloatingK4) {
      interval = setInterval(() => {
        setFloatHoldSeconds(prev => {
          if (prev >= 8) {
            setIsFloatingK4(false);
            return 8;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFloatingK4]);

  const totalQuestions = material.matchPairs ? material.quiz.length + 5 : material.quiz.length;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    // Advance questions
    if (currentQuestion < material.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If we have matchmaking left (Questions 16-20), we go to "currentQuestion = 15" for Matchmaking View
      if (material.matchPairs) {
        setCurrentQuestion(material.quiz.length); // go to question 15 (index)
      } else {
        // Calculate standard quiz score directly
        const score = newAnswers.reduce((acc, curr, idx) => {
          return acc + (curr === material.quiz[idx].correctAnswer ? 1 : 0);
        }, 0);
        setQuizScore(score);
      }
    }
  };

  const handleMatchClick = (leftId: string, rightId: string) => {
    setCurrentMatches(prev => {
      const updated = { ...prev };
      // Check if this rightId was already matched by slot, clear it from other slot
      Object.keys(updated).forEach(k => {
        if (updated[k] === rightId) {
          delete updated[k];
        }
      });
      // Set match
      updated[leftId] = rightId;
      return updated;
    });
    setSelectedLeft(null);
  };

  const handleRemoveMatch = (leftId: string) => {
    setCurrentMatches(prev => {
      const updated = { ...prev };
      delete updated[leftId];
      return updated;
    });
  };

  const submitMatchmaking = () => {
    // 15 MCQs score
    const mcqScore = answers.reduce((acc, curr, idx) => {
      return acc + (curr === material.quiz[idx].correctAnswer ? 1 : 0);
    }, 0);

    // 5 Match Pairs score
    let matchScore = 0;
    if (currentMatches['m1'] === 'r1') matchScore++; // Hidung -> Mencium aroma
    if (currentMatches['m2'] === 'r2') matchScore++; // Lari -> menguatkan kaki
    if (currentMatches['m3'] === 'r3') matchScore++; // Pemanasan -> Mencegah cedera/kram
    if (currentMatches['m4'] === 'r4') matchScore++; // Sabun -> Membantu membunuh kuman
    if (currentMatches['m5'] === 'r5') matchScore++; // Matahari -> Vitamin D

    setQuizScore(mcqScore + matchScore);
  };

  const restartQuiz = () => {
    setQuizScore(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentMatches({});
    setSelectedLeft(null);
    setShowQuiz(true);
  };

  // Dynamic items for Class 1, Class 2, Class 3, or Class 4 Matchmaking UI
  const matchLeftItems = material.id === 'gerak-irama-k2-s2'
    ? [
        { id: 'm1', text: 'Hitungan Standar 🎵', hint: 'Hitungan senam standar?' },
        { id: 'm2', text: 'Supaya Kuman Mati 🧼', hint: 'Cuci tangan pakai apa?' },
        { id: 'm3', text: 'Pendamping Berenang 🏊', hint: 'Berenang ditemani siapa?' },
        { id: 'm4', text: 'Merawat Gigi Sehat 🦷', hint: 'Berapa kali sikat gigi sehari?' },
        { id: 'm5', text: 'Makanan Bergizi Sehat 🍎', hint: 'Membuat tubuh kita...' }
      ]
    : material.id === 'aktivitas-air-k3-s2'
    ? [
        { id: 'm1', text: 'Dorongan Kaki Meluncur 🏊‍♂️', hint: 'Gerakan kaki meluncur?' },
        { id: 'm2', text: 'Push-Up Melatih Otot 💪', hint: 'Melatih otot bagian apa?' },
        { id: 'm3', text: 'Area Alat Kelamin Lembap 🦠', hint: 'Menyebabkan tumbuhnya apa?' },
        { id: 'm4', text: 'Barang Pribadi Mandi 🧼', hint: 'Barang apa yang tidak boleh bertukar?' },
        { id: 'm5', text: 'Arah Bersih Setelah BAB 🚽', hint: 'Dilakukan dari arah mana ke mana?' }
      ]
    : material.id === 'kebugaran-k4-s2'
    ? [
        { id: 'm1', text: 'Denyut Nadi Teraba Di 💓', hint: 'Bagian tubuh yang biasa diraba?' },
        { id: 'm2', text: 'Istilah Medis Daya Tahan ❤️', hint: 'Kombinasi kata jantung dan piringan?' },
        { id: 'm3', text: 'Mengapung Telentang Wajah ☁️', hint: 'Posisi wajah menghadap ke mana?' },
        { id: 'm4', text: 'Sering Tukar Handuk Bahaya 🚫', hint: 'Dapat menyebabkan penyakit apa?' },
        { id: 'm5', text: 'Arah Membersihkan Kelamin 🚿', hint: 'Membasuh dari arah mana ke mana?' }
      ]
    : material.id === 'kesehatan-k5-s2'
    ? [
        { id: 'm1', text: 'Kerja Sama Kompak Kelompok 👥', hint: 'Kebutuhan utama senam irama beregu?' },
        { id: 'm2', text: 'Berenang Gaya Dada Disebut 🏊‍♂️', hint: 'Gaya renang mirip kura-kura atau katak?' },
        { id: 'm3', text: 'Lari Cepat (Sprint) Melatih 🏃‍♂️', hint: 'Melatih kemampuan tubuh dalam bergerak cepat?' },
        { id: 'm4', text: 'Penularan Flu Influenza 💨', hint: 'Ditransmisikan lewat bersin/droplet di mana?' },
        { id: 'm5', text: 'Zat Pembangun Protein 🥚', hint: 'Gizi utama pembentuk sel baru untuk...' }
      ]
    : [
        { id: 'm1', text: 'Hidung 👃', hint: 'Gunakan untuk apa ya?' },
        { id: 'm2', text: 'Lari 🏃‍♂️', hint: 'Melatih bagian bawah?' },
        { id: 'm3', text: 'Pemanasan ⚠️', hint: 'Sebelum berolahraga agar...' },
        { id: 'm4', text: 'Sabun Cuci Tangan 🧼', hint: 'Cuci tangan supaya...' },
        { id: 'm5', text: 'Matahari Pagi ☀️', hint: 'Kesehatan bagian tubuh?' }
      ];

  const matchRightItems = material.id === 'gerak-irama-k2-s2'
    ? [
        { id: 'r2', text: 'Gunakan Sabun di air mengalir 🧼' },
        { id: 'r4', text: 'Digosok minimal dua kali sehari 🦷' },
        { id: 'r1', text: 'Hitungan satu sampai delapan (1-8) 🔢' },
        { id: 'r5', text: 'Membuat tubuh kuat dan sehat 💪' },
        { id: 'r3', text: 'Didampingi orang dewasa atau guru 👨‍🏫' }
      ]
    : material.id === 'aktivitas-air-k3-s2'
    ? [
        { id: 'r2', text: 'Lengan dan dada 🦾' },
        { id: 'r5', text: 'Dari depan ke belakang 🔁' },
        { id: 'r1', text: 'Ditekuk kemudian dilecutkan 1🦵' },
        { id: 'r3', text: 'Jamur dan bakteri gatal 🦠' },
        { id: 'r4', text: 'Handuk mandi sendiri 🧣' }
      ]
    : material.id === 'kebugaran-k4-s2'
    ? [
        { id: 'r2', text: 'Kardiovaskular (jantung/paru) 🫁' },
        { id: 'r4', text: 'Tertular penyakit kulit/jamur 🦠' },
        { id: 'r1', text: 'Pergelangan tangan atau leher 🩺' },
        { id: 'r5', text: 'Dari depan ke belakang 🔁' },
        { id: 'r3', text: 'Menghadap ke atas / langit 🌌' }
      ]
    : material.id === 'kesehatan-k5-s2'
    ? [
        { id: 'r2', text: 'Gaya katak berenang 🐸' },
        { id: 'r4', text: 'Droplet udara/bersin penderita 🌬️' },
        { id: 'r1', text: 'Saling bekerja sama & kompak 🤝' },
        { id: 'r5', text: 'Proses pertumbuhan tubuh 🌱' },
        { id: 'r3', text: 'Kecepatan berlari ⚡' }
      ]
    : [
        { id: 'r4', text: 'Membunuh kuman dan bakteri 🦠' },
        { id: 'r1', text: 'Mencium aroma wangi 🌸' },
        { id: 'r3', text: 'Mencegah tubuh cedera/kram 🩹' },
        { id: 'r5', text: 'Vitamin D untuk kesehatan tulang 🦴' },
        { id: 'r2', text: 'Menguatkan otot kaki 👣' }
      ];

  return (
    <div className="min-h-screen bg-sky-50 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-400 to-sky-600 text-white py-12 lg:py-20 px-4 relative overflow-hidden shadow-md">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 text-sky-100 hover:text-white transition-colors font-bold group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Daftar
          </button>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-300/30 rounded-full text-xs font-black tracking-widest uppercase text-white mb-4 border border-white/15">
            ✏️ ASAS GENAP 2025/2026
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight"
          >
            {material.title}
          </motion.h1>
          <div className="flex gap-3">
            <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black border border-white/10 text-white">Kelas {material.grade} SD</span>
            <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black border border-white/10 text-white">Semester {material.semester} (Genap)</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto -mt-10 px-4">
        {!showQuiz ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Custom Interactive Book for Class 1 */}
            {material.id === 'pola-hidup-sehat-k1-s2' ? (
              <div className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-2xl border border-sky-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-400 via-yellow-400 to-sky-400"></div>
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-2">Buku Interaktif Anak Pintar</span>
                  <h2 className="text-3xl font-black text-sky-900 leading-tight">Mari Belajar dengan Menyenangkan! 📖✨</h2>
                  <p className="text-sky-600 text-sm mt-2">Klik tombol-tombol lucu di bawah ini untuk melihat pelajaran bergambar yang bisa bergerak!</p>
                </div>

                {/* Sub tabs selectors */}
                <div className="flex flex-wrap gap-2.5 justify-center mb-10 bg-sky-50 p-2 rounded-[2.5rem] border border-sky-100/50">
                  <button 
                    onClick={() => setSelectedSubTab('bagian')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-sm flex items-center gap-1.5 transition-all shadow-sm",
                      selectedSubTab === 'bagian' ? "bg-orange-500 text-white shadow-md" : "text-sky-800 hover:bg-white"
                    )}
                  >
                    <span>👀</span> Bagian Tubuh
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('kebersihan')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-sm flex items-center gap-1.5 transition-all shadow-sm",
                      selectedSubTab === 'kebersihan' ? "bg-amber-500 text-white shadow-md" : "text-sky-800 hover:bg-white"
                    )}
                  >
                    <span>🧼</span> Merawat Diri
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('jasmani')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-sm flex items-center gap-1.5 transition-all shadow-sm",
                      selectedSubTab === 'jasmani' ? "bg-green-500 text-white shadow-md" : "text-sky-800 hover:bg-white"
                    )}
                  >
                    <span>☀️</span> Kebugaran
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('irama')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-sm flex items-center gap-1.5 transition-all shadow-sm",
                      selectedSubTab === 'irama' ? "bg-indigo-500 text-white shadow-md" : "text-sky-800 hover:bg-white"
                    )}
                  >
                    <span>🎵</span> Gerak Berirama
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('air')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-sm flex items-center gap-1.5 transition-all shadow-sm",
                      selectedSubTab === 'air' ? "bg-sky-500 text-white shadow-md" : "text-sky-800 hover:bg-white"
                    )}
                  >
                    <span>🏊</span> Pengenalan Air
                  </button>
                </div>

                {/* Animated content areas based on tab selection */}
                <AnimatePresence mode="wait">
                  {selectedSubTab === 'bagian' && (
                    <motion.div
                      key="subtab-bagian"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Interactive Display Card */}
                      <div className="lg:col-span-5 bg-sky-100/50 p-8 rounded-[3rem] text-center space-y-6 border border-sky-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        {/* Eyes Blink Animation */}
                        <div className="flex gap-14 mb-4">
                          <motion.div 
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
                            className="w-14 h-14 bg-white rounded-full border-4 border-sky-950 flex items-center justify-center origin-center"
                          >
                            <div className="w-5 h-5 bg-sky-950 rounded-full"></div>
                          </motion.div>
                          <motion.div 
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
                            className="w-14 h-14 bg-white rounded-full border-4 border-sky-950 flex items-center justify-center origin-center"
                          >
                            <div className="w-5 h-5 bg-sky-950 rounded-full"></div>
                          </motion.div>
                        </div>
                        {/* Nose sniffing with floating flowers */}
                        <motion.div 
                          animate={{ y: [0, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="text-4xl relative"
                        >
                          👃
                          {/* Flower floating up */}
                          <motion.span 
                            animate={{ opacity: [0, 1, 0], y: [-10, -30, -40], scale: [0.8, 1.2, 0.8] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -right-4 -top-3 text-xs"
                          >
                            🌸
                          </motion.span>
                        </motion.div>
                        {/* Smile mouth */}
                        <div className="w-20 h-10 border-b-8 border-sky-950 rounded-b-full"></div>
                        
                        <div className="text-center font-black text-sky-900 text-sm tracking-wider uppercase">Panca Indra & Kaki Tangan</div>
                        
                        <div className="flex justify-center gap-3">
                          <button 
                            onClick={() => setIsRunningFeet(!isRunningFeet)}
                            className={cn(
                              "px-4 py-2 rounded-full font-black text-xs uppercase tracking-wide transition-all",
                              isRunningFeet ? "bg-orange-500 text-white animate-bounce" : "bg-white text-orange-600"
                            )}
                          >
                            {isRunningFeet ? 'Kaki Berlari! 👣' : 'Ayo Lari! 👣'}
                          </button>
                        </div>
                      </div>

                      {/* Text details */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 1</span>
                        <h3 className="text-2xl font-black text-sky-950">Mengenal Bagian Tubuh dan Kegunaannya 🚶‍♂️🧠</h3>
                        <p className="text-sky-800 text-sm leading-relaxed">
                          Tubuh kita diciptakan memiliki fungsi luar biasa di masing-masing bagian anggota badan:
                        </p>
                        <ul className="space-y-4 text-sky-900 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">👀</span>
                            <div>
                              <span className="text-orange-600 font-extrabold block">MATA</span>
                              Melihat indahnya dunia di sekitar kita (objek, warna, ukuran).
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">👂</span>
                            <div>
                              <span className="text-orange-600 font-extrabold block">TELINGA</span>
                              Mendengar suara indah, lagu, serta penjelasan guru.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">👃</span>
                            <div>
                              <span className="text-orange-600 font-extrabold block">HIDUNG</span>
                              Mencium aroma wewangian bunga yang harum.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">👣</span>
                            <div>
                              <span className="text-orange-600 font-extrabold block">KAKI</span>
                              Digunakan untuk berjalan tegak, lari cepat, dan melompat gembira.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🖐️</span>
                            <div>
                              <span className="text-orange-600 font-extrabold block">TANGAN</span>
                              Memegang benda-benda pendukung belajar. Setiap tangan normal memiliki **5 jari tangan**.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'kebersihan' && (
                    <motion.div
                      key="subtab-kebersihan"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Interactive Display Card */}
                      <div className="lg:col-span-5 bg-amber-50 p-8 rounded-[3rem] text-center space-y-6 border border-amber-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        {/* Brushing teeth mini game */}
                        <div className="relative">
                          {/* Sparkles */}
                          <motion.span 
                            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="absolute -top-3 -right-3 text-2xl text-yellow-400"
                          >
                            ✨
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                            transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
                            className="absolute -bottom-2 -left-4 text-xl text-sky-400"
                          >
                            ✨
                          </motion.span>
                          <div className={cn("text-7xl transition-colors duration-500", teethClickCount >= 5 ? "grayscale-0 text-white drop-shadow-md" : "grayscale opacity-80")}>🦷</div>
                        </div>

                        <div className="w-full space-y-2">
                          <label className="text-xs font-black text-amber-800 uppercase tracking-wide block">Gigi Bersih mengkilap:</label>
                          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 transition-all" style={{ width: `${Math.min(teethClickCount * 20, 100)}%` }}></div>
                          </div>
                        </div>

                        <button 
                          onClick={() => setTeethClickCount(prev => Math.min(prev + 1, 5))}
                          className="bg-white hover:bg-amber-100 text-amber-600 border border-amber-200 font-black text-xs px-5 py-2.5 rounded-full shadow-sm transition-all uppercase tracking-wide"
                        >
                          {teethClickCount < 5 ? `Sikat Gigi ini (${teethClickCount}/5) 🦷` : 'Selesai disikat! Bersih ✨'}
                        </button>

                        <div className="flex justify-center gap-2">
                          <button 
                            onMouseEnter={() => setIsWashingHands(true)}
                            onMouseLeave={() => setIsWashingHands(false)}
                            onClick={() => {
                              setIsWashingHands(true);
                              setTimeout(() => setIsWashingHands(false), 2000);
                              setBubblePopped(p => p + 1);
                            }}
                            className={cn(
                              "px-4 py-2 rounded-full font-black text-xs transition-all uppercase",
                              isWashingHands ? "bg-sky-500 text-white animate-pulse" : "bg-white text-sky-600 border border-sky-100"
                            )}
                          >
                            {isWashingHands ? 'Membilas Kuman 🧼' : 'Cuci Tangan 🧼'}
                          </button>
                        </div>
                      </div>

                      {/* Text details */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 2</span>
                        <h3 className="text-2xl font-black text-amber-950">Cara Merawat Tubuh Kita (Kebersihan Diri) 🧼🦷</h3>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          Kita harus menyayangi bagian tubuh kita agar terhindar dari kuman pembawa penyakit:
                        </p>
                        <ul className="space-y-4 text-sky-900 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🧼</span>
                            <div>
                              <span className="text-amber-600 font-extrabold block">CUCI TANGAN DENGAN SABUN</span>
                              Kuman mati dan hilang berkat mencuci tangan dengan air mengalir dan **sabun**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🦷</span>
                            <div>
                              <span className="text-amber-600 font-extrabold block">GIGI BERSIH & KUAT</span>
                              Gigi bersih merona berkat rajin **menggosok gigi** pagi setelah sarapan dan malam sebelum tidur.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🧴</span>
                            <div>
                              <span className="text-amber-600 font-extrabold block">RAMBUT INDAH</span>
                              Rambut bersih, wangi, tidak gatal dikeramas mengunakan **sampo**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">💅</span>
                            <div>
                              <span className="text-amber-600 font-extrabold block">HINDARI KUMAN KUKU</span>
                              Kuku yang panjang harus segera **dipotong**, karena kotoran kuman suka bersembunyi di sana.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🍳</span>
                            <div>
                              <span className="text-amber-600 font-extrabold block">SARAPAN SETIAP PAGI</span>
                              Sebelum sekolah kita wajib **sarapan** agar badan bertenaga dan tidak lemas menerima pelajaran!
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'jasmani' && (
                    <motion.div
                      key="subtab-jasmani"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Interactive Display Card */}
                      <div className="lg:col-span-5 bg-green-50 p-8 rounded-[3rem] text-center space-y-6 border border-green-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        {/* Sun breathing life */}
                        <div className="relative">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            className="text-7xl cursor-pointer"
                          >
                            ☀️
                          </motion.div>
                          {/* Bones blinking */}
                          <motion.div 
                            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-5xl mt-6 relative"
                          >
                            🦴
                          </motion.div>
                        </div>

                        <div className="text-center font-black text-green-800 text-xs uppercase tracking-wide">
                          Matahari Pagi = Vitamin D 🦴☀️
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-green-100/50 shadow-sm w-full text-left">
                          <span className="block text-[10px] uppercase font-black tracking-widest text-green-500">Tips Sehat:</span>
                          <p className="text-xs text-green-800 font-bold leading-relaxed">Pemanasan wajib menghindari otot terkilir kram!</p>
                        </div>
                      </div>

                      {/* Text details */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 3</span>
                        <h3 className="text-2xl font-black text-green-950">Aktivitas Kebugaran Jasmani Anak Hebat 🏃‍♂️☀️</h3>
                        <p className="text-green-800 text-sm leading-relaxed">
                          Menjaga kebugaran jasmani melatih organ tubuh berkarya tanpa mudah kelelahan:
                        </p>
                        <ul className="space-y-4 text-sky-900 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🏃</span>
                            <div>
                              <span className="text-green-600 font-extrabold block">OLAHRAGA LARI</span>
                              Berlari secara teratur dapat meningkatkan kesiapan otot serta **menguatkan otot kaki** kita.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">⚠️</span>
                            <div>
                              <span className="text-green-600 font-extrabold block">WAJIB PEMANASAN</span>
                              Sebelum mulai berolahraga kita harus **pemanasan** agar melenturkan persendian dan **mencegah kram**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">☀️</span>
                            <div>
                              <span className="text-green-600 font-extrabold block">SINAR MATAHARI BAGUS</span>
                              Sinar matahari pagi sangat bagus untuk kesehatan **tulang**, karena mengandung Vitamin D alami!
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">😊</span>
                            <div>
                              <span className="text-green-600 font-extrabold block">MENYENANGKAN BERSAMA</span>
                              Melakukan senam di lapangan sekolah bersama bapak guru dan teman kelas terasa sangat **menyenangkan**.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'irama' && (
                    <motion.div
                      key="subtab-irama"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Interactive Display Card */}
                      <div className="lg:col-span-5 bg-indigo-50 p-8 rounded-[3rem] text-center space-y-6 border border-indigo-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        {/* Music scale dancing children */}
                        <div className="flex gap-4 items-center mb-2">
                          <motion.span 
                            animate={{ scale: [1, 1.4, 1] }} 
                            transition={{ repeat: Infinity, duration: 1 }} 
                            className="text-4xl text-indigo-500"
                          >
                            🎵
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.4, 1], y: [-5, 5, -5] }} 
                            transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} 
                            className="text-5xl text-pink-500"
                          >
                            💃
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.4, 1] }} 
                            transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} 
                            className="text-4xl text-sky-500"
                          >
                            🎶
                          </motion.span>
                        </div>

                        <div className="text-center font-black text-indigo-800 text-xs uppercase block">
                          Melangkah Sambil Tepuk Tangan 👏
                        </div>
                        
                        <button 
                          onClick={() => setMusicBeatsCount(p => p + 1)}
                          className="bg-white hover:bg-indigo-100 text-indigo-600 border border-indigo-200 font-black text-xs px-5 py-2.5 rounded-full shadow-sm transition-all uppercase tracking-wide animate-bounce"
                        >
                          Klik Bertepuk Tangan! ({musicBeatsCount}x) 👏
                        </button>
                      </div>

                      {/* Text details */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 4</span>
                        <h3 className="text-2xl font-black text-indigo-950">Aktivitas Gerak Berirama (Ritmik) 🎵👏</h3>
                        <p className="text-indigo-800 text-sm leading-relaxed">
                          Gerak berirama memadukan keselarasan tubuh dengan keindahan musik:
                        </p>
                        <ul className="space-y-4 text-sky-900 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🎵</span>
                            <div>
                              <span className="text-indigo-600 font-extrabold block">DIIRINGI MUSIK / KETUKAN</span>
                              Gerak berirama adalah gerakan yang dilakukan mengikuti **irama musik, ketukan tempo, atau hitungan**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">👏</span>
                            <div>
                              <span className="text-indigo-600 font-extrabold block">TEPUK TANGAN GEMBIRA</span>
                              Kita bisa mengiringi langkah gerak dengan cara yang kompak yaitu sambil **bertepuk tangan**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">😄</span>
                            <div>
                              <span className="text-indigo-600 font-extrabold block">HATI HARUS SENANG</span>
                              Berolahraga ritmik membuat hati kita merasa gembira dan **senang**, membuang rasa malas sedih!
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'air' && (
                    <motion.div
                      key="subtab-air"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Interactive Display Card */}
                      <div className="lg:col-span-5 bg-sky-50 p-8 rounded-[3rem] text-center space-y-6 border border-sky-100 flex flex-col items-center justify-center relative min-h-[350px] overflow-hidden">
                        {/* Swimming wave character */}
                        <div className="relative flex flex-col items-center">
                          {/* Floating waves anim */}
                          <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="text-7xl"
                          >
                            🏊‍♂️
                          </motion.div>
                          {/* Floating Safety Ring */}
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="text-4xl absolute -top-4 -right-4"
                          >
                            🛟
                          </motion.div>
                        </div>

                        <div className="w-full space-y-2">
                          <label className="text-xs font-black text-sky-800 uppercase tracking-wide block">Gelembung udara tiupan:</label>
                          <div className="flex gap-2 justify-center">
                            {[...Array(Math.min(waterBlowCount, 5))].map((_, i) => (
                              <motion.span 
                                key={i}
                                initial={{ scale: 0, y: 10 }}
                                animate={{ scale: [1, 1.5, 0], y: [10, -20] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-sky-400 font-black text-xl"
                              >
                                🫧
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <button 
                          onClick={() => setWaterBlowCount(p => p + 1)}
                          className="bg-white hover:bg-sky-100 text-sky-600 border border-sky-200 font-black text-xs px-5 py-2.5 rounded-full shadow-sm transition-all uppercase tracking-wide"
                        >
                          Tiup Air Kolam (Buat Gelembung!) 🫧
                        </button>

                        <div className="text-[10px] font-black uppercase text-red-500 tracking-wider">
                          🚫 DILARANG LARI DI TEPI KOLAM!
                        </div>
                      </div>

                      {/* Text details */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 5</span>
                        <h3 className="text-2xl font-black text-sky-950">Aktivitas Pengenalan Air (Benang Aman!) 🏊‍♂️💧</h3>
                        <p className="text-sky-800 text-sm leading-relaxed">
                          Bermain air sangat menyenangkan, namun harus mematuhi aturan keselamatan yang penting berikut ini:
                        </p>
                        <ul className="space-y-4 text-sky-900 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🛟</span>
                            <div>
                              <span className="text-sky-600 font-extrabold block">GUNAKAN PELAMPUNG</span>
                              Supaya aman dan **tidak tenggelam**, gunakan pelampung atau ban renang untuk menjaga tubuh tetap terapung.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🥽</span>
                            <div>
                              <span className="text-sky-600 font-extrabold block">KACAMATA RENANG</span>
                              Melindungi mata anak agar tidak perih terkena kaporit penjernih air kolam renang.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl shrink-0">🌬️</span>
                            <div>
                              <span className="text-sky-600 font-extrabold block">LATIHAN TIUP AIR (NAPAS)</span>
                              Latihan dasar pernapasan air dilakukan dengan cara **meniup gelembung air** saat wajah menghadap kolam.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
                            <span className="text-xl text-red-500 shrink-0">🚫</span>
                            <div>
                              <span className="text-red-500 font-extrabold block">DILARANG BERLARI DI PINGGIR KOLAM</span>
                              Pinggir kolam sangat licin. Anak **dilarang berlari** karena bisa terpeleset terbentur parah!
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : material.id === 'gerak-irama-k2-s2' ? (
              <div className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-2xl border border-sky-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-400 via-pink-400 to-emerald-400"></div>
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-indigo-500 font-black text-xs uppercase tracking-widest block mb-1">Materi Pembelajaran Asyik Kelas 2</span>
                  <h2 className="text-3xl font-black text-indigo-950 leading-tight">Materi Interaktif ASAS PJOK Kelas 2 📚✨</h2>
                  <p className="text-slate-500 text-sm mt-2">Pilih materi seru di bawah ini dengan gambar bergerak dan tombol permainan yang interaktif!</p>
                </div>

                {/* Sub tabs selectors for Class 2 */}
                <div className="flex flex-wrap gap-2 justify-center mb-10 bg-indigo-50/50 p-2 rounded-[2.5rem] border border-indigo-100/30">
                  <button 
                    onClick={() => setSelectedSubTab('irama')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'irama' ? "bg-indigo-500 text-white shadow-md" : "text-indigo-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🎵</span> Senam Irama
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('jasmani')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'jasmani' ? "bg-emerald-500 text-white shadow-md" : "text-emerald-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🦩</span> Kebugaran
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('bagian')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'bagian' ? "bg-rose-500 text-white shadow-md" : "text-rose-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🛡️</span> Organ Pribadi
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('kebersihan')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'kebersihan' ? "bg-amber-500 text-white shadow-md" : "text-amber-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🚿</span> Rawat Diri
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('air')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'air' ? "bg-sky-500 text-white shadow-md" : "text-sky-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🏊‍♂️</span> Air & Kolam
                  </button>
                </div>

                {/* Content Areas for Class 2 */}
                <AnimatePresence mode="wait">
                  {selectedSubTab === 'irama' && (
                    <motion.div
                      key="subtab-irama-k2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Animated Interactive Column */}
                      <div className="lg:col-span-5 bg-indigo-50/70 p-8 rounded-[3rem] text-center space-y-6 border border-indigo-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.08, 1],
                            rotate: [0, 8, -8, 0]
                          }}
                          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                          className="text-8xl select-none"
                        >
                          🕺💃
                        </motion.div>
                        
                        <div className="space-y-2 w-full">
                          <div className="flex gap-1 justify-center">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                              const isActive = (musicBeatsCount % 8) === num - 1;
                              return (
                                <motion.span 
                                  key={num}
                                  animate={{ 
                                    y: isActive ? -8 : 0,
                                    scale: isActive ? 1.25 : 1,
                                    backgroundColor: isActive ? '#4f46e5' : '#e0e7ff',
                                    color: isActive ? '#ffffff' : '#312e81'
                                  }}
                                  className="w-7 h-7 flex items-center justify-center rounded-full font-black text-[11px] shadow-sm transition-all"
                                >
                                  {num}
                                </motion.span>
                              );
                            })}
                          </div>
                          <span className="text-[10px] font-black text-indigo-500 block uppercase tracking-wide">Ketukan Lagu: {(musicBeatsCount % 8) + 1} / 8</span>
                        </div>

                        <button 
                          onClick={() => setMusicBeatsCount(p => p + 1)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs px-6 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wider flex items-center gap-2"
                        >
                          <span>Ayunan Lengan 👏</span> Melangkah Gembira!
                        </button>
                      </div>

                      {/* Details Column */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 1</span>
                        <h3 className="text-2xl font-black text-indigo-950">Aktivitas Gerak Berirama (Ritmik) 🎵🥁</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Gerak berirama memadukan keindahan langkah kaki dengan ketukan yang membuat tubuh tangkas dan ceria:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-indigo-50 shadow-sm">
                            <span className="text-2xl shrink-0">🎵</span>
                            <div>
                              <span className="text-indigo-600 font-black block">APA ITU GERAK BERIRAMA?</span>
                              Gerak olahraga yang dilakukan mengikuti **iringan musik, suara ketukan, atau hitungan suara**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-indigo-50 shadow-sm">
                            <span className="text-2xl shrink-0">🔢</span>
                            <div>
                              <span className="text-indigo-600 font-black block">HITUNGAN STANDAR 1 SAMPAI 8</span>
                              Dalam aktivitas senam berirama, hitungan tempo langkah yang umum digunakan adalah **Satu sampai Delapan (1-8)**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-indigo-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧑‍🤝‍🧑</span>
                            <div>
                              <span className="text-indigo-600 font-black block">MANFAAT GERAK BEROMPOK</span>
                              Gerakan senam yang dilakukan secara bersama-sama dalam kelompok melatih kekompakan agar terlihat **indah dan serasi**.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'jasmani' && (
                    <motion.div
                      key="subtab-jasmani-k2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Animated Card */}
                      <div className="lg:col-span-5 bg-emerald-50 p-8 rounded-[3rem] text-center space-y-6 border border-emerald-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <motion.div 
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, -3, 3, 0]
                          }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                          className="text-8xl select-none"
                        >
                          🦩
                        </motion.div>

                        <div className="bg-white/80 border border-emerald-100 px-4 py-2 rounded-2xl text-xs font-black text-emerald-800 uppercase tracking-widest shadow-sm">
                          Sikap Burung Bangau! 🦢
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <button 
                            onClick={() => setIsRunningFeet(!isRunningFeet)}
                            className={cn(
                              "px-5 py-3 rounded-full font-black text-xs uppercase tracking-wide transition-all shadow-md flex items-center gap-2",
                              isRunningFeet ? "bg-emerald-600 text-white animate-pulse" : "bg-white text-emerald-700 border border-emerald-200"
                            )}
                          >
                            <span>🏃‍♂️ Lari di Tempat</span> {isRunningFeet ? "AKTIF" : "KLIK UNTUK LARI"}
                          </button>
                        </div>
                        {isRunningFeet && (
                          <p className="text-[10px] text-emerald-600 font-black animate-bounce uppercase">Melatih & Menguatkan Otot Kaki! 👣</p>
                        )}
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 2</span>
                        <h3 className="text-2xl font-black text-emerald-950">Keseimbangan & Kebugaran Jasmani 🏃‍♂️💪</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Menjaga tubuh agar selalu bugar melatih daya tahan serta kekuatan koordinasi persendian kita:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🦢</span>
                            <div>
                              <span className="text-emerald-600 font-black block">LATIHAN KESEIMBANGAN</span>
                              Menumpu pada satu kaki seperti sikap burung bangau bertujuan melatih **keseimbangan** berdiri kita.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🦵</span>
                            <div>
                              <span className="text-emerald-600 font-black block">KEKUATAN SEWAKTU MELONCAT</span>
                              Gerakan meloncat-loncat di tempat dan berlari melatih kekuatan **otot kaki** kita.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🌅</span>
                            <div>
                              <span className="text-emerald-600 font-black block">BEROLAHRAGA PAGI HARI</span>
                              Berolahraga di pagi hari (jalan/lari santai) sangat prima untuk menjaga kebuagaran organ **jantung dan paru-paru**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🙆‍♂️</span>
                            <div>
                              <span className="text-emerald-600 font-black block">MANFAAT KELENTURAN</span>
                              Latihan **mencium lutut** dalam posisi duduk melatih kelenturan persendian **pinggang dan punggung**.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'bagian' && (
                    <motion.div
                      key="subtab-bagian-k2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Animated Image/Card */}
                      <div className="lg:col-span-5 bg-rose-50 p-8 rounded-[3rem] text-center space-y-6 border border-rose-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotateY: [0, 15, -15, 0]
                          }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="text-8xl select-none"
                        >
                          🧒🛡️
                        </motion.div>

                        <div className="bg-rose-500 text-white rounded-2xl py-2 px-4 shadow-sm text-xs font-black uppercase">
                          Batas Sentuhan Aman! 🚫
                        </div>
                        <div className="text-rose-700 font-black text-xs leading-relaxed uppercase bg-white/70 px-4 py-2 rounded-xl">
                          Dada • Perut • Area Kemaluan 🔒
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 3</span>
                        <h3 className="text-2xl font-black text-rose-950">Mengenal Batasan Aman Tubuh Pribadi 🛡️⚽</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Tubuh kita adalah milik kita sendiri yang sangat berharga. Mari ketahui fungsinya serta pelindungnya:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-rose-50 shadow-sm">
                            <span className="text-2xl shrink-0">👣</span>
                            <div>
                              <span className="text-rose-600 font-black block">ANGGOTA GERAK BAWAH</span>
                              Bagian tubuh yang paling dominan digunakan untuk **menendang bola** adalah **Kaki**. Kaki juga melatih kelincahan!
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-rose-50 shadow-sm">
                            <span className="text-2xl shrink-0">🔒</span>
                            <div>
                              <span className="text-rose-600 font-black block">BAGIAN TUBUH PRIBADI</span>
                              Bagian tertentu yaitu **Dada**, perut, dan kemaluan merupakan area pribadi yang **tidak boleh disentuh sembarangan** oleh orang lain.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-rose-50 shadow-sm">
                            <span className="text-2xl shrink-0">📣</span>
                            <div>
                              <span className="text-rose-600 font-black block">TINDAKAN PENYELAMATAN</span>
                              Apabila ada orang berniat kurang baik memegang bagian pribadi tersebut, teriaklah dengan keras lalu lari lapor ke guru atau orang tua!
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'kebersihan' && (
                    <motion.div
                      key="subtab-kebersihan-k2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Interactive Column */}
                      <div className="lg:col-span-5 bg-amber-50 p-8 rounded-[3rem] text-center space-y-6 border border-amber-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <motion.div 
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ repeat: Infinity, duration: 1.8 }}
                          className="text-7xl select-none"
                        >
                          🧼🪥
                        </motion.div>

                        <div className="w-full space-y-2">
                          <label className="text-xs font-black text-amber-800 uppercase tracking-widest block">Gosok Gigi Bersih Hari ini:</label>
                          <div className="h-3.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 transition-all duration-300" style={{ width: `${Math.min(teethClickCount * 50, 100)}%` }}></div>
                          </div>
                        </div>

                        <button 
                          onClick={() => setTeethClickCount(p => Math.min(p + 1, 2))}
                          className="bg-white hover:bg-amber-100 text-amber-600 border border-amber-200 font-black text-xs px-5 py-3 rounded-full shadow-sm transition-all uppercase tracking-wide"
                        >
                          {teethClickCount < 2 ? `Sikat Gigi Sekarang (${teethClickCount}/2) 🦷` : "Selesat Sikat Gigi 2x Sehari! Bersih ✨"}
                        </button>

                        <button 
                          onClick={() => {
                            setIsWashingHands(true);
                            setTimeout(() => setIsWashingHands(false), 2000);
                          }}
                          className={cn(
                            "px-5 py-3 rounded-full font-black text-xs transition-all uppercase tracking-wide shadow-sm flex items-center justify-center gap-2",
                            isWashingHands ? "bg-sky-500 text-white animate-bounce" : "bg-white text-sky-600 border border-sky-100"
                          )}
                        >
                          <span>Cuci Tangan Sabun 🧴</span> {isWashingHands ? "MEMBASMI KUMAN! 🩹" : ""}
                        </button>
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 4</span>
                        <h3 className="text-2xl font-black text-amber-950">Cara Merawat & Menjaga Kebersihan Diri 🚿🧼</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Membersihkan tubuh secara teratur mendatangkan kesegaran jasmani tinggi dan membasmi virus penyakit:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-50 shadow-sm">
                            <span className="text-2xl shrink-0">🦷</span>
                            <div>
                              <span className="text-amber-600 font-black block">ANJURAN GOSOK GIGI</span>
                              Gigi yang sehat dan bersih harus digosok minimal **Dua kali sehari** yaitu pagi hari sesudah sarapan dan malam sebelum tidur.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧴</span>
                            <div>
                              <span className="text-amber-600 font-black block">KEBERSIHAN KULIT KEPALA & RAMBUT</span>
                              Untuk menjaga rambut indah berkilau, kita harus rajin **keramas menggunakan sampo** secara rutin.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧼</span>
                            <div>
                              <span className="text-amber-600 font-black block">GOSOK SABUN SAMPAI BERSIH</span>
                              Zat pembersih utama yang ampuh membunuh kuman kotoran di tangan adalah **Sabun** pembasmi bakteri.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-50 shadow-sm">
                            <span className="text-2xl shrink-0">🍎</span>
                            <div>
                              <span className="text-amber-600 font-black block">MAKANAN SEHAT BERGIZI</span>
                              Latihan kebugaran butuh asupan berguna. Mengonsumsi makanan bergizi membuat tubuh menjadi kuat dan sehat.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'air' && (
                    <motion.div
                      key="subtab-air-k2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Interactive Column */}
                      <div className="lg:col-span-5 bg-sky-50 p-8 rounded-[3rem] text-center space-y-6 border border-sky-100 flex flex-col items-center justify-center relative min-h-[350px] overflow-hidden">
                        <motion.div 
                          animate={{ 
                            y: [0, -10, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          className="text-8xl select-none"
                        >
                          🏊‍♂️💧
                        </motion.div>

                        <div className="bg-white/80 border border-sky-200 px-4 py-2.5 rounded-2xl shadow-sm text-[11px] font-black tracking-wider text-sky-800 uppercase">
                          Sikap Tubuh: Berjalan Tegak 🚶‍♂️
                        </div>

                        <div className="flex gap-2">
                          <button 
                            onClick={() => {
                              setWaterBlowCount(p => p + 1);
                              setTimeout(() => setWaterBlowCount(0), 1500);
                            }}
                            className="bg-sky-500 hover:bg-sky-600 text-white font-black text-xs px-5 py-3 rounded-full shadow-md transition-all uppercase tracking-wider animate-bounce"
                          >
                            Jongkok Menekuk Lutut! 🥽
                          </button>
                        </div>
                        {waterBlowCount > 0 && (
                          <div className="flex justify-center gap-1">
                            {[1, 2, 3, 4].map((i) => (
                              <motion.span 
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: -10, opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                                className="text-sky-400 text-lg font-bold"
                              >
                                🫧
                              </motion.span>
                            ))}
                          </div>
                        )}

                        <div className="text-[10px] font-black uppercase text-red-500 bg-red-50 py-1.5 px-3 rounded-full border border-red-100">
                          🚫 PINGGIR KOLAM LICIN! JANGAN BERLARI!
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 5</span>
                        <h3 className="text-2xl font-black text-sky-950">Aktivitas di Air & Keselamatan Kolam 🏊‍♂️🛟</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Berenang sangat mengasyikkan. Namun sebelum terjun bebas, pastikan mematuhi prinsip keselamatan mutlak kolam:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🤝</span>
                            <div>
                              <span className="text-sky-600 font-black block">PENGAWASAN ORANG DEWASA</span>
                              Saat melakukan latihan pengenalan air, kita wajib **didampingi oleh orang dewasa atau guru**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🛟</span>
                            <div>
                              <span className="text-sky-600 font-black block">ALAT BANTU TIDAK TENGGELAM</span>
                              Alat bantu utama yang digunakan anak pemula supaya tidak tenggelam adalah **Pelampung**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧍</span>
                            <div>
                              <span className="text-sky-600 font-black block">SIKAP BERJALAN TEGAK DI AIR</span>
                              Ketika membelah air saat berjalan di kolam renang, posisi tubuh kita diusahakan tetap **Tegak**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🥽</span>
                            <div>
                              <span className="text-sky-600 font-black block">LATIHAN MENERIMA AIR</span>
                              Gerakan menekuk lutut atau jongkok berdiri dilakukan untuk membiasakan diri beradaptasi berada di bawah permukaan air.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : material.id === 'aktivitas-air-k3-s2' ? (
              <div className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-2xl border border-sky-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-violet-400 via-sky-400 to-teal-400"></div>
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-violet-500 font-black text-xs uppercase tracking-widest block mb-1">Materi Pembelajaran Asyik Kelas 3</span>
                  <h2 className="text-3xl font-black text-violet-950 leading-tight">Materi Sumatif ASAS PJOK Kelas 3 📚✨</h2>
                  <p className="text-slate-500 text-sm mt-2">Pilih sub-materi interaktif di bawah ini untuk belajar materi gerak, renang, kebugaran, dan kesehatan dengan media simulasi visual yang menarik!</p>
                </div>

                {/* Sub tabs selectors for Class 3 */}
                <div className="flex flex-wrap gap-2 justify-center mb-10 bg-violet-50/50 p-2 rounded-[2.5rem] border border-violet-100/30">
                  <button 
                    onClick={() => setSelectedSubTab('irama')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'irama' ? "bg-indigo-500 text-white shadow-md" : "text-indigo-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🎵</span> Senam Irama
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('jasmani')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'jasmani' ? "bg-emerald-500 text-white shadow-md" : "text-emerald-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>⚖️</span> Kebugaran Jasmani
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('bagian')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'bagian' ? "bg-rose-500 text-white shadow-md" : "text-rose-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🩲</span> Alat Reproduksi
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('kebersihan')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'kebersihan' ? "bg-amber-500 text-white shadow-md" : "text-amber-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🚽</span> Cara Bersih Diri
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('air')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'air' ? "bg-sky-500 text-white shadow-md" : "text-sky-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🏊‍♂️</span> Kolam & Meluncur
                  </button>
                </div>

                {/* Content Areas for Class 3 */}
                <AnimatePresence mode="wait">
                  {selectedSubTab === 'irama' && (
                    <motion.div
                      key="subtab-irama-k3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Animated Interactive Column */}
                      <div className="lg:col-span-5 bg-indigo-50/70 p-8 rounded-[3rem] text-center space-y-6 border border-indigo-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.06, 1],
                            y: (musicBeatsCount % 2 === 0) ? -15 : 15
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="text-8xl select-none"
                        >
                          {(musicBeatsCount % 2 === 0) ? '💃' : '🕺'}
                        </motion.div>

                        <div className="space-y-1.5 w-full">
                          <div className="flex gap-1 justify-center">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                              const isActive = (musicBeatsCount % 8) === num - 1;
                              return (
                                <motion.span 
                                  key={num}
                                  animate={{ 
                                    y: isActive ? -6 : 0,
                                    scale: isActive ? 1.25 : 1,
                                    backgroundColor: isActive ? '#4f46e5' : '#e0e7ff',
                                    color: isActive ? '#ffffff' : '#312e81'
                                  }}
                                  className="w-7 h-7 flex items-center justify-center rounded-full font-black text-[11px] shadow-sm transition-all"
                                >
                                  {num}
                                </motion.span>
                              );
                            })}
                          </div>
                          <span className="text-[10px] font-black text-indigo-500 block uppercase tracking-wide">Ketukan Lagu: {(musicBeatsCount % 8) + 1} / 8</span>
                        </div>

                        <div className="flex gap-2">
                          <button 
                            onClick={() => setMusicBeatsCount(p => p + 1)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs px-5 py-3 rounded-full shadow-lg transition-all uppercase tracking-wider flex items-center gap-1.5"
                          >
                            <span>👟 Maju-Mundur</span> Langkah Kaki
                          </button>
                          <button 
                            onClick={() => setMusicBeatsCount(p => p + 2)}
                            className="bg-white hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-black text-xs px-4 py-3 rounded-full shadow-sm transition-all uppercase tracking-wider"
                          >
                            👋 Ayun Lengan
                          </button>
                        </div>
                        <p className="text-[10px] text-indigo-600 font-extrabold block uppercase tracking-wide">Gerakan langkah melatih kelenturan sendi!</p>
                      </div>

                      {/* Details Column */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-indigo-150 text-indigo-800 px-3 py-1 rounded-full text-xs font-black uppercase bg-indigo-100">Pembelajaran 1</span>
                        <h3 className="text-2xl font-black text-indigo-950">Aktivitas Gerak Berirama (Ritmik) 🎵🥁</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Mempelajari keselarasan gerak indah yang diiringi musik tempo yang serasi dengan kelenturan fisik kita:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-indigo-50 shadow-sm">
                            <span className="text-2xl shrink-0">🎵</span>
                            <div>
                              <span className="text-indigo-600 font-black block">GERAK BERIRAMA</span>
                              Rangkaian aktivitas fisik teratur yang dilakukan menggunakan **iringan musik, lagu, ketukan atau hitungan suara**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-indigo-50 shadow-sm">
                            <span className="text-2xl shrink-0">🎯</span>
                            <div>
                              <span className="text-indigo-600 font-black block">TUJUAN UTAMA LATIHAN</span>
                              Meningkatkan **kelenturan tubuh** serta koordinasi yang serasi antara persendian dengan keindahan irama musik.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-indigo-50 shadow-sm">
                            <span className="text-2xl shrink-0">👟</span>
                            <div>
                              <span className="text-indigo-600 font-black block">VARIASI POLA LANGKAH KAKI</span>
                              Gerakan melangkah ke **depan** dan melangkah ke **belakang** merupakan variasi dasar pola gerak langkah kaki anak.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-indigo-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧍</span>
                            <div>
                              <span className="text-indigo-600 font-black block">POSISI AWAL AYUNAN LENGAN</span>
                              Ayunkan lengan kanan dan kiri ke samping dengan posisi awal badan berdiri tegak lurus sempurna.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'jasmani' && (
                    <motion.div
                      key="subtab-jasmani-k3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Animated Balance Trainer Column */}
                      <div className="lg:col-span-5 bg-emerald-50 p-8 rounded-[3rem] text-center space-y-6 border border-emerald-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <motion.div 
                          animate={{ 
                            y: isVSitCounting ? [0, -6, 0] : 0,
                            rotate: isVSitCounting ? [0, -3, 3, 0] : 0,
                            scale: isVSitCounting ? 1.08 : 1
                          }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="text-8xl select-none"
                        >
                          🧘‍♀️⚖️
                        </motion.div>

                        <div className="w-full space-y-2">
                          <div className="flex justify-between items-center text-xs font-black text-emerald-800 uppercase px-2">
                            <span>Waktu Bertahan:</span>
                            <span>{vSitHoldSeconds} / 10 Detik</span>
                          </div>
                          <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
                            <div 
                              className="h-full bg-emerald-500 rounded-full transition-all duration-300" 
                              style={{ width: `${vSitHoldSeconds * 10}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex gap-2 w-full justify-center">
                          <button 
                            onClick={() => {
                              if (vSitHoldSeconds >= 10) setVSitHoldSeconds(0);
                              setIsVSitCounting(true);
                            }}
                            className={cn(
                              "px-5 py-3 rounded-full font-black text-xs uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5",
                              isVSitCounting ? "bg-emerald-600 text-white animate-pulse" : "bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
                            )}
                          >
                            <span>⏱️</span> {isVSitCounting ? "Menahan Posisi..." : "Mulai Duduk Huruf V"}
                          </button>
                          
                          <button 
                            onClick={() => {
                              setIsVSitCounting(false);
                              setVSitHoldSeconds(0);
                            }}
                            className="bg-white text-rose-600 border border-rose-150 font-black text-xs px-4 py-3 rounded-full shadow-sm hover:bg-rose-50"
                          >
                            Reset
                          </button>
                        </div>
                        {vSitHoldSeconds >= 10 && (
                          <p className="text-[10px] text-emerald-700 font-extrabold uppercase animate-bounce">🏆 HEBAT! Keseimbangan & Otot Perutmu Kuat sekali!</p>
                        )}
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 2</span>
                        <h3 className="text-2xl font-black text-emerald-950">Aktivitas Kebugaran Jasmani Anak 🏃‍♂️🏋️‍♀️</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Melatih kemampuan tubuh agar kuat beraktivitas sehari-hari secara gembira tanpa cepat merasa lelah:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🫁</span>
                            <div>
                              <span className="text-emerald-600 font-black block">KEBUGARAN JASMANI</span>
                              Kemampuan melangsungkan tugas fisik sehari-hari tanpa merasa lelah berlebih. Dilatih dengan rajin **lari atau jalan pagi** teratur untuk menyehatkan organ **jantung dan paru-paru**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧘‍♀️</span>
                            <div>
                              <span className="text-emerald-600 font-black block">LATIHAN DUDUK HURUF 'V' (V-SIT)</span>
                              Bertujuan melatih koordinasi keseimbangan statis serta menguatkan daya tahan **otot perut** kita.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🦾</span>
                            <div>
                              <span className="text-emerald-600 font-black block">PUSH-UP UTK KEKUATAN</span>
                              Menitikberatkan latihan beban tubuh untuk memelihara ketangkasan daya kekuatan otot **lengan dan dada** bagian atas.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-50 shadow-sm">
                            <span className="text-2xl shrink-0">🙆‍♂️</span>
                            <div>
                              <span className="text-emerald-600 font-black block">MENCIUM LUTUT (KELENTURAN)</span>
                              Dilakukan dalam posisi duduk kaki selonjor lurus ke depan untuk melatih kelenturan persendian **punggung** dan otot paha belakang.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'bagian' && (
                    <motion.div
                      key="subtab-bagian-k3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Underwear Selector Game Column */}
                      <div className="lg:col-span-5 bg-rose-50 p-8 rounded-[3rem] text-center space-y-6 border border-rose-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotateY: [0, 10, -10, 0]
                          }}
                          transition={{ repeat: Infinity, duration: 2.5 }}
                          className="text-8xl select-none"
                        >
                          🩲🧸
                        </motion.div>

                        <div className="w-full space-y-3">
                          <span className="text-rose-800 font-black text-xs uppercase tracking-wider block">Pilih Bahan Celana Dalam Paling Sehat:</span>
                          <div className="grid grid-cols-2 gap-2">
                            {['Katun 🧶', 'Sutra ✨', 'Plastik 🚫', 'Wol 🐏'].map((item) => (
                              <button
                                key={item}
                                onClick={() => setSelectedUnderwear(item)}
                                className={cn(
                                  "py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wide transition-all border shadow-sm",
                                  selectedUnderwear === item
                                    ? item.includes('Katun')
                                      ? "bg-rose-500 border-rose-600 text-white"
                                      : "bg-red-400 border-red-500 text-white"
                                    : "bg-white border-rose-100 text-rose-800 hover:bg-rose-100/30"
                                )}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <AnimatePresence mode="wait">
                          {selectedUnderwear && (
                            <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[11px] font-black uppercase bg-white/80 p-3 rounded-2xl border border-rose-100"
                            >
                              {selectedUnderwear.includes('Katun') ? (
                                <span className="text-emerald-700">✅ BENAR SEKALI! Katun menyerap keringat dengan baik, menjaga area intim tidak lembap!</span>
                              ) : (
                                <span className="text-red-500">❌ KURANG TEPAT! Bahan ini tidak menyerap keringat dengan baik & membuat kulit lembap gatal!</span>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 3</span>
                        <h3 className="text-2xl font-black text-rose-950">Menjaga Kebersihan Organ Reproduksi 🩲🛡️</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Alat kelamin atau reproduksi adalah organ sensitif yang wajib dijaga kebersihan dan kesehatannya dengan disiplin tinggi:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-rose-50 shadow-sm">
                            <span className="text-2xl shrink-0">🩲</span>
                            <div>
                              <span className="text-rose-600 font-black block">ANJURAN GANTI PAKAIAN DALAM</span>
                              Kita harus mengganti celana atau pakaian dalam **minimal dua kali sehari** sehabis mandi, agar kuman tidak bersarang.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-rose-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧶</span>
                            <div>
                              <span className="text-rose-600 font-black block">BAHAN TERBAIK (KATUN)</span>
                              Pilihlah pakaian dalam berbahan lembut dari **katun** yang sangat mudah **menyerap keringat** demi menjaga kelembapan area pribadi tetap sehat.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-rose-50 shadow-sm">
                            <span className="text-2xl shrink-0">🦠</span>
                            <div>
                              <span className="text-rose-600 font-black block">DAMPAK JIKA AREA LEMBAP</span>
                              Kondisi tubuh bagian privat yang basah, kotor, dan lembap dapat menyebabkan tumbuhnya **jamur dan bakteri** penyebab gatal berbahaya.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'kebersihan' && (
                    <motion.div
                      key="subtab-kebersihan-k3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Swipe Droplets Simulator */}
                      <div className="lg:col-span-5 bg-amber-50 p-8 rounded-[3rem] text-center space-y-6 border border-amber-100 flex flex-col items-center justify-center relative min-h-[350px] overflow-hidden">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.08, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="text-7xl select-none"
                        >
                          🧼🚽
                        </motion.div>

                        <div className="w-full space-y-2">
                          <span className="text-[10px] font-black text-amber-800 uppercase block tracking-wider">Simulasi Arah Basuh yang Benar:</span>
                          <div className="flex justify-between items-center bg-white border border-amber-200 p-3 rounded-2xl shadow-sm text-xs font-black text-slate-700">
                            <span className="text-rose-500 font-extrabold text-[10px]">DEPAN ⬅️</span>
                            <motion.span 
                              animate={washDirectionStep === 'correct' ? { x: [ -30, 30, -30] } : {}}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-sky-500 text-lg"
                            >
                              💧
                            </motion.span>
                            <span className="text-indigo-500 font-extrabold text-[10px]">➡️ BELAKANG</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                          <button 
                            onClick={() => setWashDirectionStep('correct')}
                            className={cn(
                              "py-2.5 px-4 rounded-xl text-xs font-black uppercase border transition-all shadow-sm",
                              washDirectionStep === 'correct' ? "bg-amber-500 text-white border-amber-600" : "bg-white border-amber-200 text-amber-800"
                            )}
                          >
                            Arah Depan ke Belakang 🔁 (KLIK)
                          </button>
                          <button 
                            onClick={() => setWashDirectionStep('wrong')}
                            className={cn(
                              "py-2.5 px-4 rounded-xl text-xs font-black uppercase border transition-all shadow-sm",
                              washDirectionStep === 'wrong' ? "bg-red-500 text-white border-red-600" : "bg-white border-amber-200 text-slate-600"
                            )}
                          >
                            Arah Belakang ke Depan ❌ (KLIK)
                          </button>
                        </div>

                        {washDirectionStep && (
                          <div className="text-[11px] font-black uppercase text-slate-800">
                            {washDirectionStep === 'correct' ? (
                              <span className="text-emerald-700">🏆 BENAR SEKALI! Depan ke Belakang mencegah bakteri anus masuk saluran kencing!</span>
                            ) : (
                              <span className="text-red-500">❌ BAHAYA! Bakteri kotor dari anus bisa terbawa masuk ke organ kencing!</span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 4</span>
                        <h3 className="text-2xl font-black text-amber-950">Tata Cara Membersihkan Diri Setelah Buang Air 🚽🧼</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Menerapkan kebiasaan hidup bersih harian guna melindungi organ vital reproduksi kita secara mandiri:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-50 shadow-sm">
                            <span className="text-2xl shrink-0">💧</span>
                            <div>
                              <span className="text-amber-600 font-black block">BASUH DENGAN AIR BERSIH</span>
                              Setelah buang air kecil maupun besar, anak wajib membersihkan alat kelamin menggunakan aliran **Air Bersih**. Hindari sabun kimia pekat.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-50 shadow-sm">
                            <span className="text-2xl shrink-0">⬆️</span>
                            <div>
                              <span className="text-amber-600 font-black block">ARAH MEMBERSINKAN YANG TEPAT</span>
                              Usapan pembersihan alat kelamin harus dari arah **Depan ke Belakang**, untuk menjaga bakteri anus agar tidak merembet.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-amber-50 shadow-sm">
                            <span className="text-2xl shrink-0">🧣</span>
                            <div>
                              <span className="text-amber-600 font-black block">TIDAK BOLEH BERTUKAR HANDUK</span>
                              Kita **tidak boleh bertukar handuk** milik orang lain untuk mengeringkan badan agar terhindar dari kuman penyakit kulit menular gatal.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'air' && (
                    <motion.div
                      key="subtab-air-k3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Swipe Swimmer Simulator Column */}
                      <div className="lg:col-span-5 bg-sky-50 p-8 rounded-[3rem] text-center space-y-6 border border-sky-100 flex flex-col items-center justify-center relative min-h-[350px] overflow-hidden">
                        <span className="text-xs font-black text-sky-800 uppercase tracking-widest block">Simulasi Luncuran Streamline:</span>
                        
                        <div className="w-full bg-sky-200 border border-sky-300 rounded-2xl h-16 relative overflow-hidden flex items-center p-3">
                          {/* Floating swimming lane markers */}
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-red-400"></div>
                          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-sky-400"></div>

                          {/* Swimmer on the track */}
                          <motion.div 
                            animate={isGliding ? { x: [0, 180, 0] } : {}}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="text-4xl select-none z-10"
                          >
                            🏊‍♂️
                          </motion.div>

                          {/* Trail bubbles */}
                          {isGliding && (
                            <div className="absolute left-10 flex gap-0.5 animate-pulse text-xs text-sky-400 font-extrabold">
                              <span>🫧</span><span>🫧</span>
                            </div>
                          )}
                        </div>

                        <button 
                          onClick={() => {
                            setIsGliding(true);
                            setTimeout(() => setIsGliding(false), 2000);
                          }}
                          className="bg-sky-500 hover:bg-sky-600 text-white font-black text-xs px-5 py-3 rounded-full shadow-md transition-all uppercase tracking-wide animate-bounce"
                        >
                          Dorong Memakai Kaki & Meluncur! 🚀
                        </button>

                        <div className="text-[10px] uppercase font-black text-red-600 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                          🚫 LANTAI BASAH! DILARANG BERLARI DI KOLAM!
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 5</span>
                        <h3 className="text-2xl font-black text-sky-950">Olahraga & Aktivitas Keselamatan di Kolam Air 🏊‍♂️🛟</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Berenang menyenangkan dan melatih kekuatan otot pernapasan, serta harus memegang teguh urutan meluncur yang aman berikut ini:
                        </p>
                        <ul className="space-y-4 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">⚠️</span>
                            <div>
                              <span className="text-sky-600 font-black block">PENTINGNYA PEMANASAN</span>
                              Wajib melakukan kelenturan peregangan sebelum berenang demi **mencegah cedera atau kram otot** yang membahayakan di air dingin.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🛟</span>
                            <div>
                              <span className="text-sky-600 font-black block">ALAT BELAJAR MENGAPUNG</span>
                              Alat bantu utama penopang tubuh anak pemula agar melatih keberanian mengapung yaitu menggunakan **papan luncur** atau pelampung.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🌬️</span>
                            <div>
                              <span className="text-sky-600 font-black block">COCOK PERNAPASAN DI AIR</span>
                              Latihan membuang napas saat wajah terbenam dilakukan dengan meniup membuang napas lewat **mulut atau hidung**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🚀</span>
                            <div>
                              <span className="text-sky-600 font-black block">URUTAN TEKNIK MELUNCUR SEMPURNA</span>
                              Berdiri membelakangi air, salah satu kaki menempel dinding kolam, tangan lurus rapat ke depan, dorong badan lurus mendatar sekuat tenaga.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : material.id === 'kebugaran-k4-s2' ? (
              <div className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-2xl border border-sky-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-400 via-amber-400 to-sky-400"></div>
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-1">Materi Pembelajaran Asyik Kelas 4</span>
                  <h2 className="text-3xl font-black text-slate-800 leading-tight">Materi Sumatif ASAS PJOK Kelas 4 📚✨</h2>
                  <p className="text-slate-500 text-sm mt-2">Pilih sub-materi di bawah ini untuk mempelajari Senam Irama, Aktivitas Air, Kebugaran Jasmani, dan Kesehatan Alat Reproduksi dengan simulator interaktif!</p>
                </div>

                {/* Sub tabs selectors for Class 4 */}
                <div className="flex flex-wrap gap-2 justify-center mb-10 bg-amber-50/50 p-2 rounded-[2.5rem] border border-amber-100/30">
                  <button 
                    onClick={() => setSelectedSubTab('irama')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'irama' || selectedSubTab === 'bagian' ? "bg-orange-500 text-white shadow-md" : "text-amber-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🎵</span> Senam Irama
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('air')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'air' ? "bg-sky-500 text-white shadow-md" : "text-sky-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🏊‍♂️</span> Aktivitas Air
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('jasmani')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'jasmani' ? "bg-amber-500 text-white shadow-md" : "text-amber-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🏋️‍♂️</span> Kebugaran Jasmani
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('reproduksi')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'reproduksi' ? "bg-rose-500 text-white shadow-md" : "text-rose-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🛡️</span> Alat Reproduksi
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {(selectedSubTab === 'irama' || selectedSubTab === 'bagian') && (
                    <motion.div
                      key="subtab-irama-k4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Senam Irama Animation Simulator for Class 4 */}
                      <div className="lg:col-span-5 bg-orange-50 p-8 rounded-[3rem] text-center space-y-6 border border-orange-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-orange-800 uppercase tracking-widest block">Metronom & Animasi Gerak Berirama:</span>
                        
                        <div className="relative flex items-center justify-center w-36 h-36 bg-white rounded-full border border-orange-100 shadow-md">
                          <motion.div 
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ repeat: Infinity, duration: 1.2 }}
                            className="absolute inset-0 rounded-full bg-orange-100/40 border border-orange-200"
                          />
                          
                          <div className="text-center z-10 space-y-2">
                            {/* Arm Swing and Step Character */}
                            <motion.div 
                              animate={{ 
                                rotate: armSwingBeats % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                                y: armSwingBeats % 2 === 0 ? [0, -4, 0] : [0, -2, 0],
                                x: armSwingBeats % 4 === 0 ? [-5, 5, -5] : [0, 0, 0]
                              }}
                              transition={{ duration: 0.6 }}
                              className="text-6xl filter drop-shadow select-none"
                            >
                              {armSwingBeats % 4 === 1 && "🧍"}
                              {armSwingBeats % 4 === 2 && "🙋‍♂️"}
                              {armSwingBeats % 4 === 3 && "🤸‍♂️"}
                              {armSwingBeats % 4 === 0 && "🙆‍♂️"}
                            </motion.div>
                            
                            <div className="bg-orange-500 text-white font-black text-sm px-3.5 py-1 rounded-full border border-orange-400 shadow-sm inline-block">
                              Hitungan {armSwingBeats} / 8
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 text-left bg-white p-4 rounded-2xl border border-orange-100/50 w-full">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">Gerakan yang Sedang Diperagakan:</span>
                          <p className="text-xs font-bold text-slate-700">
                            {armSwingBeats % 2 === 0 
                              ? "Langkah Biasa (loop-pas): Melangkahkan kaki bergantian secara ritmis." 
                              : "Ayunan Satu Lengan ke Samping: Melatih kelenturan persendian bahu."}
                          </p>
                        </div>

                        <div className="text-[10px] uppercase font-black text-orange-700 bg-orange-100/50 px-3 py-1 rounded-full border border-orange-100">
                          🎵 Ritme Pemandu Utama: Irama Musik
                        </div>
                      </div>

                      {/* Senam Irama Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 1</span>
                        <h3 className="text-2xl font-black text-slate-800">Aktivitas Gerak Berirama (Ritmik) Kelas 4 🎵👞</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Gerak berirama adalah aktivitas fisik yang menyelaraskan gerak tubuh secara serasi dengan iringan ketukan atau musik penuntun.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">🎼</span>
                            <h4 className="font-extrabold text-xs text-orange-950">UNSUR UTAMA: IRAMA MUSIK</h4>
                            <p className="text-slate-500 text-xs">Unsur utama pemandu atau penuntun seluruh gerakan adalah **Irama musik/ketukan** agar kompak.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">👟</span>
                            <h4 className="font-extrabold text-xs text-orange-950">LANGKAH LOOPPAS</h4>
                            <p className="text-slate-500 text-xs">Langkah kaki melangkah bergantian ke depan secara teratur diistilahkan sebagai **Langkah Biasa (loop-pas)**.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">💪</span>
                            <h4 className="font-extrabold text-xs text-orange-950">AYUNAN LENGAN KE SAMPING</h4>
                            <p className="text-slate-500 text-xs">Mengayun satu lengan ke samping setinggi bahu bertujuan melatih **kelenturan persendian bahu** dan koordinasi.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">🔢</span>
                            <h4 className="font-extrabold text-xs text-orange-950">POLA HITUNGAN STANDAR</h4>
                            <p className="text-slate-500 text-xs">Pola hitungan teratur yang paling standar digunakan dalam gerakan senam ritmik adalah **1 sampai 8**.</p>
                          </div>
                        </div>

                        <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100 text-xs font-semibold text-slate-700">
                          <span className="font-black text-orange-850 block mb-1">👣 Langkah Dasar Melangkah ke Depan:</span>
                          1. Berdiri tegak, letakkan kedua tangan di pinggang secara santai.<br/>
                          2. Melangkahkan kaki kanan ke depan lurus pada hitungan kesatu.<br/>
                          3. Melangkahkan kaki kiri menyusul ke depan pada hitungan dua dan merapatkan kedua kaki.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'air' && (
                    <motion.div
                      key="subtab-air-k4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Renang Swimmer Dynamic Simulator for Class 4 */}
                      <div className="lg:col-span-5 bg-sky-50 p-8 rounded-[3rem] text-center space-y-6 border border-sky-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-sky-800 uppercase tracking-widest block">Simulasi Kendali di Kolam Renang:</span>
                        
                        {/* Simulation Arena */}
                        <div className="w-full bg-sky-100 border border-sky-200 rounded-3xl h-24 relative overflow-hidden flex items-center justify-center p-4">
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-red-400 opacity-50"></div>
                          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-sky-400 opacity-50"></div>
                          
                          {/* Animated swimmer character */}
                          <motion.div 
                            animate={
                              isFloatingK4 
                                ? { y: [-15, 15, -15], rotate: [0, -5, 0] } 
                                : isGliding 
                                ? { x: [-80, 120, -80] } 
                                : {}
                            }
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-5xl select-none z-10 font-bold"
                          >
                            {isFloatingK4 ? "🧘‍♂️" : "🏊‍♂️"}
                          </motion.div>

                          {/* Bubble effects */}
                          {(isFloatingK4 || isGliding) && (
                            <div className="absolute left-1/4 flex gap-1 animate-pulse text-xs text-sky-400">
                              <span>🫧</span><span>🫧</span>
                            </div>
                          )}
                        </div>

                        <div className="text-xs font-black text-slate-500 uppercase tracking-wider">
                          ⏱️ Tahan Mengapung: {floatHoldSeconds} detik
                        </div>

                        {/* Interactive triggers */}
                        <div className="flex flex-col gap-2 w-full">
                          <button 
                            onClick={() => {
                              setIsFloatingK4(true);
                              setIsGliding(false);
                            }}
                            className={cn(
                              "px-5 py-2.5 rounded-full font-black text-xs transition-all uppercase border tracking-wider shadow-sm",
                              isFloatingK4 
                                ? "bg-amber-500 text-white border-amber-400 animate-pulse" 
                                : "bg-white text-sky-900 border-sky-100 hover:bg-sky-50"
                            )}
                          >
                            ☁️ Posisi Mengapung Telentang
                          </button>

                          <button 
                            onClick={() => {
                              setIsGliding(true);
                              setIsFloatingK4(false);
                              setTimeout(() => setIsGliding(false), 3000);
                            }}
                            className={cn(
                              "px-5 py-2.5 rounded-full font-black text-xs transition-all uppercase border tracking-wider shadow-sm",
                              isGliding 
                                ? "bg-emerald-500 text-white border-emerald-400" 
                                : "bg-white text-sky-900 border-sky-100 hover:bg-sky-50"
                            )}
                          >
                            🚀 Dorong Tubuh & Meluncur
                          </button>
                        </div>

                        <div className="text-[10px] uppercase font-black text-sky-900 bg-white/80 px-4 py-1.5 rounded-full border border-sky-150">
                          {isFloatingK4 ? "Sikap: Tubuh lurus wajah menghadap atas 🌌" : "Sikap: Tubuh sejajar permukaan air (Streamline)"}
                        </div>
                      </div>

                      {/* Renang & Keselamatan Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 2</span>
                        <h3 className="text-2xl font-black text-slate-800">Aktivitas Air & Aturan Keselamatan Kolam 🏊‍♂️🛟</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Aktivitas air sangat baik bagi kesegaran fisik namun membutuhkan sikap disiplin keselamatan setinggi-tingginya demi menghindari risiko kram:
                        </p>
                        
                        <ul className="space-y-3.5 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🩹</span>
                            <div>
                              <span className="text-sky-650 font-black block text-xs animate-pulse">TUJUAN UTAMA PEMANASAN</span>
                              Peregangan sebelum berenang melatih otot elastis untuk **mengurangi risiko cedera atau kram otot**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🚀</span>
                            <div>
                              <span className="text-sky-650 font-black block text-xs">MELUNCUR STREAMLINE</span>
                              Posisi badan meluncur dengan benar adalah **sejajar dengan permukaan air** guna mereduksi hambatan gesek air seminimal mungkin.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🌌</span>
                            <div>
                              <span className="text-sky-650 font-black block text-xs">MENGAPUNG TELENTANG</span>
                              Pada posisi mengapung telentang di air kolam, pandangan wajah harus bertumpu lurus **menghadap ke atas / langit**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🌬️</span>
                            <div>
                              <span className="text-sky-650 font-black block text-xs">TEKNIK PERNAPASAN YANG BENAR</span>
                              Proses pengambilan napas dilakukan melalui mulut di permukaan air, lalu dihembuskan lewat **hidung** secara lambat di dasar kolam.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'jasmani' && (
                    <motion.div
                      key="subtab-jasmani-k4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Kebugaran Interactive Simulator for Class 4 */}
                      <div className="lg:col-span-5 bg-amber-50 p-8 rounded-[3rem] text-center space-y-6 border border-amber-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-amber-800 uppercase tracking-widest block">Simulator Cari Tahu Kebugaran Tubuh:</span>
                        
                        {/* Interactive Cardiac Rate Monitor */}
                        <div className="w-full bg-white p-5 rounded-3xl border border-amber-100 shadow-sm space-y-4">
                          <div className="flex justify-between items-center text-[10px] font-black text-amber-800 uppercase">
                            <span>Langkah Cari Titik Nadi:</span>
                            <span className="text-amber-600">Arteri Radialis 🩺</span>
                          </div>
                          
                          <div className="relative flex items-center justify-center h-20 bg-amber-50 rounded-2xl border border-amber-100">
                            {isMeasuringPulse ? (
                              <div className="text-center space-y-1">
                                <motion.span 
                                  animate={{ scale: [1, 1.3, 1] }}
                                  transition={{ repeat: Infinity, duration: 0.6 }}
                                  className="text-3xl inline-block text-rose-500"
                                >
                                  💓
                                </motion.span>
                                <p className="text-xs font-extrabold text-amber-950">Mendeteksi Denyut... {15 - pulseCountSeconds}s</p>
                              </div>
                            ) : (
                              <div className="text-center space-y-1">
                                <span className="text-3xl text-rose-500">
                                  {pulseBeatsCount > 0 ? "❤️" : "👋"}
                                </span>
                                <p className="text-[10px] font-black text-slate-500">
                                  {pulseBeatsCount > 0 
                                    ? `Nadi Terdeteksi: ${pulseBeatsCount} detak / 15 detik (${pulseBeatsCount * 4} BPM - SEHAT)` 
                                    : "Sentuhkan jari di pergelangan tangan / leher!"}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Shuttle Run Interactive Card */}
                          <div className="space-y-1.5 text-left bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                            <div className="flex justify-between items-center text-[9px] font-black text-amber-800 uppercase">
                              <span>Lari Bolak-Balik (Shuttle Run):</span>
                              <span>Pencapaian: {shuttleRunLaps} / 3 Laps</span>
                            </div>
                            <div className="relative h-6 bg-white rounded-full border border-amber-100 flex items-center p-1 overflow-hidden">
                              <motion.div 
                                className="absolute text-sm"
                                animate={isShuttleRunning ? { x: [0, 200, 0] } : {}}
                                transition={{ repeat: Infinity, duration: 2.5 }}
                              >
                                🏃‍♂️
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Control buttons */}
                        <div className="flex gap-2 w-full">
                          <button 
                            onClick={() => setIsMeasuringPulse(true)}
                            disabled={isMeasuringPulse}
                            className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-black text-[10px] px-3 py-2.5 rounded-full uppercase tracking-wider transition-all"
                          >
                            Cek Denyut Nadi 🩺
                          </button>
                          
                          <button 
                            onClick={() => {
                              setShuttleRunLaps(0);
                              setIsShuttleRunning(true);
                            }}
                            disabled={isShuttleRunning}
                            className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-black text-[10px] px-3 py-2.5 rounded-full uppercase tracking-wider transition-all"
                          >
                            Mulai Shuttle Run 🏃💨
                          </button>
                        </div>

                        <div className="text-[10px] uppercase font-black text-amber-800 bg-amber-100/50 px-4 py-1.5 rounded-full border border-amber-100 justify-center">
                          {shuttleRunLaps === 3 ? "🏆 SHUTTLE RUN SELESAI! KELINCAHAN PRIMA!" : "Lari bolak-balik melatih ketangkasan lincah"}
                        </div>
                      </div>

                      {/* Kebugaran Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 3</span>
                        <h3 className="text-2xl font-black text-slate-800">Uji Daya Tahan & Kebugaran Jasmani ⚖️🏃‍♂️</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Kebugaran jasmani adalah kesanggupan tubuh untuk menuntaskan rutinitas belajar dan bermain tanpa didera letih berlebih.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">❤️</span>
                            <span className="text-amber-600 font-extrabold text-xs block">ISTILAH MEDIS DAYA TAHAN</span>
                            <span className="text-slate-500 text-xs text-slate-650">Istilah medis untuk daya tahan organ jantung dan paru-paru kita disebut **Kardiovaskular**.</span>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">💓</span>
                            <span className="text-amber-600 font-extrabold text-xs block">TITIK MERABA NADI</span>
                            <span className="text-slate-500 text-xs text-slate-650">Denyut jantung/nadi paling mudah dirasakan melaui rabaan pada **pergelangan tangan** atau **leher**.</span>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">🏃‍♂️</span>
                            <span className="text-amber-600 font-extrabold text-xs block">LARI BOLAK-BALIK</span>
                            <span className="text-slate-500 text-xs text-slate-650">Lari bolak-balik (*shuttle run*) berulang-ulang bertujuan meningkatkan ketangkasan **kelincahan**.</span>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">🧘‍♂️</span>
                            <span className="text-amber-600 font-extrabold text-xs block">LATIHAN SIT-UP</span>
                            <span className="text-slate-500 text-xs text-slate-650">Olahraga sit-up beralih fokus secara mutlak melatih daya tahan kekuatan **otot-otot perut**.</span>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-700">
                          <span className="font-bold text-slate-800 block mb-1">💡 Cara Melakukan Pengukuran Denyut Nadi secara Mandiri:</span>
                          Letakkan jari telunjuk dan jari tengah di pergelangan tangan bagian dalam, hitung denyut selama 15 detik lalu kalikan hasilnya dengan 4 untuk mendapatkan denyut jantung per menit.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'reproduksi' && (
                    <motion.div
                      key="subtab-reproduksi-k4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Kebersihan Reproduksi Interactive Simulator for Class 4 */}
                      <div className="lg:col-span-5 bg-rose-50 p-8 rounded-[3rem] text-center space-y-6 border border-rose-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-rose-800 uppercase tracking-widest block">Misi Kebersihan Kesehatan Anak:</span>
                        
                        <div className="w-full bg-white p-5 rounded-3xl border border-rose-100 shadow-sm space-y-4">
                          {/* Choose fabric interactive game */}
                          <div className="space-y-2 text-left">
                            <span className="text-[10px] font-black uppercase text-slate-400 block tracking-wider">Pilih Bahan Pakaian Dalam yang Sehat:</span>
                            <div className="grid grid-cols-2 gap-2">
                              <button 
                                onClick={() => setSelectedUnderwearK4('katun')}
                                className={cn(
                                  "p-3 border rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-colors",
                                  selectedUnderwearK4 === 'katun' ? "bg-emerald-500 text-white border-emerald-400" : "bg-white text-slate-700 border-slate-150 hover:bg-slate-50"
                                )}
                              >
                                <span className="text-xl">👕</span>Serat Katun
                              </button>
                              <button 
                                onClick={() => setSelectedUnderwearK4('sintetis')}
                                className={cn(
                                  "p-3 border rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-colors",
                                  selectedUnderwearK4 === 'sintetis' ? "bg-rose-500 text-white border-rose-400 hover:bg-rose-100" : "bg-white text-slate-700 border-slate-150 hover:bg-slate-50"
                                )}
                              >
                                <span className="text-xl">🎗️</span>Serat Nilon/Sintetis
                              </button>
                            </div>
                            {selectedUnderwearK4 === 'katun' && (
                              <p className="text-[10px] font-bold text-emerald-600 bg-emerald-50 p-2 rounded-lg border border-emerald-100 mt-2">
                                ✅ BENAR SEKALI! Serat katun menyerap keringat dengan baik sehingga area intim tetap kering dan bebas jamur gatal!
                              </p>
                            )}
                            {selectedUnderwearK4 === 'sintetis' && (
                              <p className="text-[10px] font-bold text-rose-600 bg-rose-50 p-2 rounded-lg border border-rose-100 mt-2">
                                ❌ KURANG COCOK! Bahan nilon/sintetis tidak menyerap keringat dengan baik, memicu kelembapan & bakteri gatal!
                              </p>
                            )}
                          </div>

                          {/* How to wash interactive checklist */}
                          <div className="space-y-2 text-left bg-rose-50/50 p-3 rounded-2xl border border-rose-100/30">
                            <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Arah Membasuh Organ setelah Toilet:</span>
                            <div className="grid grid-cols-2 gap-1.5">
                              <button 
                                onClick={() => setWashDirectionK4('depan-belakang')}
                                className={cn(
                                  "px-2 py-2 border rounded-lg text-[9px] font-black tracking-wide transition-colors text-center",
                                  washDirectionK4 === 'depan-belakang' ? "bg-rose-500 text-white border-rose-400" : "bg-white text-rose-900 border-rose-100 hover:bg-rose-50"
                                )}
                              >
                                Depan ke Belakang 🔁
                              </button>
                              <button 
                                onClick={() => setWashDirectionK4('belakang-depan')}
                                className={cn(
                                  "px-2 py-2 border rounded-lg text-[9px] font-black tracking-wide transition-colors text-center",
                                  washDirectionK4 === 'belakang-depan' ? "bg-red-500 text-white border-red-400" : "bg-white text-rose-900 border-rose-100 hover:bg-rose-50"
                                )}
                              >
                                Belakang ke Depan ❌
                              </button>
                            </div>
                            {washDirectionK4 === 'depan-belakang' && (
                              <p className="text-[9px] font-bold text-emerald-600 mt-1">
                                ✅ TEPAT! Membasuh dari depan ke belakang mencegah bakteri kotor dari anus terbawa ke depan.
                              </p>
                            )}
                            {washDirectionK4 === 'belakang-depan' && (
                              <p className="text-[9px] font-bold text-red-600 mt-1">
                                ⚠️ BAHAYA! Bakteri kotoran di anus bisa merembet masuk mencemari saluran reproduksi bagian depan.
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="text-[10px] uppercase font-black text-rose-800 bg-rose-100/50 px-4 py-1.5 rounded-full border border-rose-100">
                          Jangan bertukar handuk milik orang lain! 🚫🧣
                        </div>
                      </div>

                      {/* Kebersihan Reproduksi Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 4</span>
                        <h3 className="text-2xl font-black text-slate-800">Kebersihan Diri & Kesehatan Alat Reproduksi 🛡️🛁</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                          Memelihara kebersihan diri sangat penting guna mencegah penyebaran kuman penyakit kulit menular dan melindungi organ intim:
                        </p>
                        
                        <div className="space-y-3.5 text-slate-800 text-sm font-bold">
                          <div className="flex gap-3 bg-white p-3 border border-rose-50 shadow-sm rounded-2xl items-center">
                            <span className="text-2xl shrink-0">👕</span>
                            <div>
                              <span className="text-rose-605 font-extrabold text-xs block text-rose-600">MEMILIH PAKAIAN DALAM</span>
                              Celana dalam harus berbahan **katun** demi menyerap keringat dengan baik sehingga area reproduksi tidak lembap dan berjamur.
                            </div>
                          </div>

                          <div className="flex gap-3 bg-white p-3 border border-rose-50 shadow-sm rounded-2xl items-center">
                            <span className="text-2xl shrink-0">🧼</span>
                            <div>
                              <span className="text-rose-605 font-extrabold text-xs block text-rose-600">MEMBILAS SETELAH RENANG</span>
                              Usai berenang di kolam umum, wajib **mandi dengan sabun dan air bersih** untuk menghilangkan sisa kaporit kolam serta bakteri parasit.
                            </div>
                          </div>

                          <div className="flex gap-3 bg-white p-3 border border-rose-50 shadow-sm rounded-2xl items-center">
                            <span className="text-2xl shrink-0">🔁</span>
                            <div>
                              <span className="text-rose-605 font-extrabold text-xs block text-rose-600">FREKUENSI GANTI CELANA</span>
                              Pakaian dalam harus diganti **minimal 2 kali sehari** sehabis mandi untuk mencegah kelembapan berlebih yang gatal.
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : material.id === 'kesehatan-k5-s2' ? (
              <div className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-2xl border border-sky-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400"></div>
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-emerald-500 font-black text-xs uppercase tracking-widest block mb-1">Materi Pembelajaran Asyik Kelas 5</span>
                  <h2 className="text-3xl font-black text-emerald-950 leading-tight">Materi Sumatif ASAS PJOK Kelas 5 📚✨</h2>
                  <p className="text-slate-500 text-sm mt-2">Pilih sub-materi di bawah ini untuk mempelajari Gerak Berirama, Renang, Kebugaran, dan Pencegahan Penyakit dengan media simulasi interaktif!</p>
                </div>

                {/* Sub tabs selectors for Class 5 */}
                <div className="flex flex-wrap gap-2 justify-center mb-10 bg-emerald-50/50 p-2 rounded-[2.5rem] border border-emerald-100/30">
                  <button 
                    onClick={() => setSelectedSubTab('irama')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'irama' ? "bg-emerald-500 text-white shadow-md" : "text-emerald-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🎵</span> Senam Irama
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('air')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'air' ? "bg-indigo-500 text-white shadow-md" : "text-indigo-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🏊‍♂️</span> Renang (Gaya Dada)
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('jasmani')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'jasmani' ? "bg-amber-500 text-white shadow-md" : "text-amber-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>⚖️</span> Kebugaran Jasmani
                  </button>
                  <button 
                    onClick={() => setSelectedSubTab('penyakit')}
                    className={cn(
                      "px-5 py-3 rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-sm uppercase tracking-wide",
                      selectedSubTab === 'penyakit' ? "bg-rose-500 text-white shadow-md" : "text-rose-900 bg-white/50 hover:bg-white"
                    )}
                  >
                    <span>🛡️</span> Pencegahan Penyakit
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {selectedSubTab === 'irama' && (
                    <motion.div
                      key="subtab-irama-k5"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Senam Irama Animation Simulator */}
                      <div className="lg:col-span-5 bg-emerald-50 p-8 rounded-[3rem] text-center space-y-6 border border-emerald-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-emerald-800 uppercase tracking-widest block">Metronom & Animasi Gerakan:</span>
                        
                        {/* Pulse Beat and Swinging Emote representation */}
                        <div className="relative flex items-center justify-center w-36 h-36 bg-white rounded-full border border-emerald-100 shadow-md">
                          <motion.div 
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ repeat: Infinity, duration: 1200 / c5RhythmSpeed / 1000 }}
                            className="absolute inset-0 rounded-full bg-emerald-100/40 border border-emerald-200"
                          />
                          
                          <div className="text-center z-10 space-y-2">
                            {/* Swinging character */}
                            <motion.div 
                              animate={{ 
                                rotate: c5RhythmCount % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
                                y: c5RhythmCount % 2 === 0 ? [0, -6, 0] : [0, -3, 0]
                              }}
                              transition={{ duration: 0.3 }}
                              className="text-6xl filter drop-shadow select-none"
                            >
                              {c5RhythmCount % 2 === 0 ? "🙋‍♂️" : "🤸‍♂️"}
                            </motion.div>
                            
                            <div className="bg-emerald-500 text-white font-black text-sm px-3.5 py-1 rounded-full border border-emerald-400 shadow-sm inline-block">
                              Ke- {c5RhythmCount} / 8
                            </div>
                          </div>
                        </div>

                        {/* Rhythm Speed controller buttons */}
                        <div className="space-y-2 w-full">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Kecepatan Irama Musik:</span>
                          <div className="flex gap-1.5 justify-center">
                            {[1, 2, 3].map((spd) => (
                              <button
                                key={spd}
                                onClick={() => setC5RhythmSpeed(spd)}
                                className={cn(
                                  "px-4 py-1.5 rounded-full font-black text-[10px] uppercase transition-all shadow-sm border",
                                  c5RhythmSpeed === spd 
                                    ? "bg-emerald-500 text-white border-emerald-400" 
                                    : "bg-white text-emerald-800 border-emerald-100 hover:bg-emerald-50"
                                )}
                              >
                                {spd === 1 ? "Slow" : spd === 2 ? "Medium" : "Fast"}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="text-[10px] uppercase font-black text-emerald-700 bg-emerald-100/50 px-3 py-1 rounded-full border border-emerald-100">
                          🎵 Gerakan Looppas & Ayunan Lengan Terkoordinasi
                        </div>
                      </div>

                      {/* Senam Irama Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 1</span>
                        <h3 className="text-2xl font-black text-emerald-950">Aktivitas Gerak Berirama (Senam Ritmik) 🎵👟</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold font-sans">
                          Gerak Berirama adalah rangkaian gerakan jasmani yang dilakukan selaras dengan ketukan, hitungan, tepukan tangan, atau iringan musik.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">🎼</span>
                            <h4 className="font-extrabold text-xs text-emerald-950">MUSIK ATAU HITUNGAN</h4>
                            <p className="text-slate-500 text-xs text-slate-600">Unsur utama pembeda utama gerak berirama dengan senam biasa adalah penggunaan **Musik atau hitungan** pembimbing.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">👟</span>
                            <h4 className="font-extrabold text-xs text-emerald-950">LANGKAH LOOPPAS</h4>
                            <p className="text-slate-500 text-xs text-slate-600">Melangkahkan kaki bergantian ke depan dengan lutut mengeper lentur disebut **Langkah Biasa (looppas)**.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">💪</span>
                            <h4 className="font-extrabold text-xs text-emerald-950">AYUNAN LENGAN</h4>
                            <p className="text-slate-500 text-xs text-slate-600">Gerak mengayun lengan dirancang melatih **kelenturan persendian bahu** serta mengasah kecakapan koordinasi tangan-kaki.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                            <span className="text-lg">🧍</span>
                            <h4 className="font-extrabold text-xs text-emerald-950">SIKAP AWAL SEHAT</h4>
                            <p className="text-slate-500 text-xs text-slate-600">Sikap awal yang benar di awal gerakan harus berdiri **tegak namun tetap rileks** agar memudahkan transisi gerak.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'air' && (
                    <motion.div
                      key="subtab-air-k5"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Renang Swimmer Dynamic Simulator */}
                      <div className="lg:col-span-5 bg-sky-50 p-8 rounded-[3rem] text-center space-y-6 border border-sky-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-sky-800 uppercase tracking-widest block">Simulasi Renang & Meluncur:</span>
                        
                        {/* Swimming Lane */}
                        <div className="w-full bg-sky-100 border border-sky-200 rounded-3xl h-24 relative overflow-hidden flex items-center p-4">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-white to-red-500"></div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-white to-blue-500"></div>
                          
                          {/* Animated swimmer */}
                          <motion.div 
                            animate={c5GlideActive ? { x: [0, 200, 0] } : {}}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            className="text-5xl select-none z-10"
                          >
                            🏊‍♂️
                          </motion.div>

                          {c5GlideActive && (
                            <div className="absolute left-10 flex gap-0.5 animate-pulse text-xs text-sky-400 font-extrabold">
                              <span>🫧</span><span>🫧</span>
                            </div>
                          )}
                        </div>

                        {/* Interactive triggers */}
                        <div className="flex flex-col gap-2 w-full">
                          <button 
                            onClick={() => setC5DoPemanasan(prev => !prev)}
                            className={cn(
                              "px-5 py-2.5 rounded-full font-black text-xs transition-colors tracking-wide border uppercase shadow-sm",
                              c5DoPemanasan 
                                ? "bg-emerald-500 text-white border-emerald-400" 
                                : "bg-white text-rose-500 border-rose-200 hover:bg-rose-50"
                            )}
                          >
                            {c5DoPemanasan ? "✅ PEMANASAN SELESAI" : "⚠️ LAKUKAN PEMANASAN DULU"}
                          </button>

                          <button 
                            onClick={() => {
                              if (!c5DoPemanasan) {
                                alert("UPS! Kamu harus melakukan pemanasan terlebih dulu untuk mencegah kram otot di air dingin!");
                                return;
                              }
                              setC5GlideActive(true);
                              setTimeout(() => setC5GlideActive(false), 2500);
                            }}
                            className="bg-sky-500 hover:bg-sky-600 text-white font-black text-xs px-5 py-3 rounded-full hover:scale-105 transition-all shadow-md uppercase tracking-wider"
                          >
                            🚀 Dorong Tubuh & Meluncur Streamline
                          </button>
                        </div>

                        <div className="text-[10px] uppercase font-black text-sky-900 bg-white/80 px-4 py-1.5 rounded-full border border-sky-100">
                          Gaya Dada (Katak) • Ambil Napas Melalui Mulut 🌬️
                        </div>
                      </div>

                      {/* Renang Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 2</span>
                        <h3 className="text-2xl font-black text-sky-950">Aktivitas di Air (Renang Gaya Dada) 🏊‍♂️🌊</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold font-sans">
                          Renang gaya dada melatih fisik secara menyeluruh dan membutuhkan teknik ketepatan koordinasi tubuh:
                        </p>
                        
                        <ul className="space-y-3.5 text-slate-800 text-sm font-bold">
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🩹</span>
                            <div>
                              <span className="text-sky-600 font-black block">TUTORIAL PENCEGAHAN KRAM</span>
                              Pemanasan awal mutlak diperlukan sebelum berenang untuk meningkatkan suhu dan elastisitas otot demi **mencegah kram otot**.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🚀</span>
                            <div>
                              <span className="text-sky-600 font-black block">MELUNCUR STREAMLINE SIKAP</span>
                              Posisi badan meluncur yang benar harus **sejajar mendatar dengan permukaan air** agar laju hidrodinamis di air maksimal.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🐸</span>
                            <div>
                              <span className="text-sky-605 font-black block">RENANG GAYA KATAK</span>
                              Gaya dada sering diistilahkan sebagai **renang gaya katak** disebabkan gerakan tebasan kaki menyerupai kepak kaki katak.
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-sky-50 shadow-sm">
                            <span className="text-2xl shrink-0">🌬️</span>
                            <div>
                              <span className="text-sky-600 font-black block">AMBIL NAPAS DENGAN MULUT</span>
                              Pengambilan udara bersih dilakukan dengan mengangkat kepala di atas kolam dan menghirup udara **lewat rongga mulut**.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'jasmani' && (
                    <motion.div
                      key="subtab-jasmani-k5"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Kebugaran Interactive Simulator */}
                      <div className="lg:col-span-5 bg-amber-50 p-8 rounded-[3rem] text-center space-y-6 border border-amber-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-amber-800 uppercase tracking-widest block">Simulator Workout & Stamina:</span>
                        
                        {/* Rep counter and progress bars */}
                        <div className="w-full bg-white p-6 rounded-3xl border border-amber-100 shadow-sm space-y-4">
                          {/* Sit Up Reps */}
                          <div className="space-y-1 text-left">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-amber-800 uppercase">1. Sit-Up (Otot Perut) 🧘‍♂️</span>
                              <span className="text-xs font-black text-amber-600">{c5SitUpCount} Reps</span>
                            </div>
                            <div className="w-full bg-amber-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full transition-all duration-300" style={{ width: `${Math.min(c5SitUpCount * 10, 100)}%` }}></div>
                            </div>
                          </div>

                          {/* 12 Min Run cardio */}
                          <div className="space-y-1 text-left">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-amber-800 uppercase">2. Lari 12 Menit (Kardio) 🏃‍♂️</span>
                              <span className="text-xs font-black text-amber-600">{Math.round(c5LariProgress * 24)} Meter</span>
                            </div>
                            <div className="w-full bg-amber-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-amber-600 h-full transition-all duration-300" style={{ width: `${c5LariProgress}%` }}></div>
                            </div>
                          </div>
                        </div>

                        {/* Interactive rep buttons */}
                        <div className="flex gap-2 w-full">
                          <button 
                            onClick={() => setC5SitUpCount(prev => prev + 1)}
                            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-black text-[10px] px-3 py-3 rounded-full uppercase tracking-wider transition-all"
                          >
                            Tambah Sit-up 💪
                          </button>
                          <button 
                            onClick={() => setC5LariProgress(prev => (prev >= 100 ? 0 : prev + 10))}
                            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-black text-[10px] px-3 py-3 rounded-full uppercase tracking-wider transition-all"
                          >
                            Maju Putaran Lari 🏃💨
                          </button>
                        </div>

                        <div className="text-[10px] uppercase font-black text-amber-800 bg-amber-100/50 px-4 py-1.5 rounded-full border border-amber-100">
                          {c5LariProgress >= 100 ? "🎉 REKOR DAYA TAHAN JANTUNG PRIMA!" : "Latih Terus Kebugaran Jasmanimu!"}
                        </div>
                      </div>

                      {/* Kebugaran Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 3</span>
                        <h3 className="text-2xl font-black text-amber-950">Kebugaran Jasmani & Latihan Kekuatan ⚖️🏃‍♂️</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold font-sans">
                          Kebugaran Jasmani adalah perwujudan kapasitas fisik organ tubuh untuk berkiprah aktif melaksanakan kegiatan harian tanpa kelelahan berlebih:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">🫄</span>
                            <span className="text-amber-600 font-extrabold text-xs block">LATIHAN SIT-UP</span>
                            <span className="text-slate-500 text-xs text-slate-600 block">Latihan sit-up didesain untuk menumbuhkan kekuatan dan ketahanan daya tahan **otot perut** kita.</span>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">🫁</span>
                            <span className="text-amber-600 font-extrabold text-xs block">TES LARI 12 MENIT</span>
                            <span className="text-slate-500 text-xs text-slate-600 block">Merupakan tes fungsional paling standar untuk meneliti status kebugaran ketahanan jantung-paru (**kardiovaskular**).</span>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">🙆‍♂️</span>
                            <span className="text-amber-600 font-extrabold text-xs block">MENCIUM LUTUT</span>
                            <span className="text-slate-500 text-xs text-slate-600 block">Peregangan duduk mencium lutut dirancang untuk menguji kelenturan penuh **otot punggung dan paha belakang**.</span>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-amber-50 shadow-sm space-y-1">
                            <span className="text-xl">🛌</span>
                            <span className="text-amber-600 font-extrabold text-xs block">PEMULIHAN TENAGA</span>
                            <span className="text-slate-500 text-xs text-slate-600 block">Tidur yang cukup menyediakan fase emas di mana sel-sel tubuh bekerja memulihkan tenaga serta **membangun pertumbuhan**.</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedSubTab === 'penyakit' && (
                    <motion.div
                      key="subtab-penyakit-k5"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Pencegahan Penyakit Interactive Simulator */}
                      <div className="lg:col-span-5 bg-rose-50 p-8 rounded-[3rem] text-center space-y-6 border border-rose-100 flex flex-col items-center justify-center relative min-h-[350px]">
                        <span className="text-xs font-black text-rose-800 uppercase tracking-widest block">Misi Sehat Hand Wash & Tangkap DBD:</span>
                        
                        <div className="w-full bg-white p-5 rounded-3xl border border-rose-100 shadow-sm space-y-4">
                          {/* Washing steps */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-black text-rose-800 uppercase">
                              <span>Langkah Cuci Tangan:</span>
                              <span className="text-rose-600">Langkah {c5WashStep} / 3</span>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-1">
                              {[1, 2, 3].map((st) => (
                                <div 
                                  key={st} 
                                  className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    c5WashStep >= st ? "bg-rose-500" : "bg-rose-100"
                                  )}
                                />
                              ))}
                            </div>

                            <p className="text-xs font-bold text-slate-600 text-center min-h-[44px] flex items-center justify-center bg-slate-50 p-2 rounded-xl border border-slate-100">
                              {c5WashStep === 1 && "💧 Langkah 1: Siram air mengalir & bubuhkan sabun melimpah."}
                              {c5WashStep === 2 && "🧼 Langkah 2: Gosok sela-sela jari tangan tempat kuman bersembunyi! 🦠"}
                              {c5WashStep === 3 && "✨ Langkah 3: Bilas air bersih mengalir & keringkan dengan handuk."}
                            </p>
                          </div>

                          {/* DBD checklist */}
                          <div className="space-y-2 text-left bg-rose-50/50 p-3 rounded-2xl border border-rose-100/30">
                            <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Gerakan 3M DBD Pencegah Jentik Nyamuk:</span>
                            <div className="grid grid-cols-3 gap-1">
                              <button 
                                onClick={() => setC5DbdMenguras(prev => !prev)}
                                className={cn(
                                  "px-2 py-1 flex items-center justify-center gap-1 border rounded-lg text-[9px] font-black tracking-wide transition-colors",
                                  c5DbdMenguras ? "bg-rose-500 text-white border-rose-400" : "bg-white text-rose-900 border-rose-100 hover:bg-rose-50"
                                )}
                              >
                                {c5DbdMenguras ? "🟢 Kuras" : "🔴 Kuras"}
                              </button>
                              <button 
                                onClick={() => setC5DbdMenutup(prev => !prev)}
                                className={cn(
                                  "px-2 py-1 flex items-center justify-center gap-1 border rounded-lg text-[9px] font-black tracking-wide transition-colors",
                                  c5DbdMenutup ? "bg-rose-500 text-white border-rose-400" : "bg-white text-rose-900 border-rose-100 hover:bg-rose-50"
                                )}
                              >
                                {c5DbdMenutup ? "🟢 Tutup" : "🔴 Tutup"}
                              </button>
                              <button 
                                onClick={() => setC5DbdMengubur(prev => !prev)}
                                className={cn(
                                  "px-2 py-1 flex items-center justify-center gap-1 border rounded-lg text-[9px] font-black tracking-wide transition-colors",
                                  c5DbdMengubur ? "bg-rose-500 text-white border-rose-400" : "bg-white text-rose-900 border-rose-100 hover:bg-rose-50"
                                )}
                              >
                                {c5DbdMengubur ? "🟢 Kubur" : "🔴 Kubur"}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Control actions */}
                        <div className="w-full flex gap-1.5 justify-center">
                          <button 
                            onClick={() => setC5WashStep(prev => (prev >= 3 ? 1 : prev + 1))}
                            className="bg-rose-500 hover:bg-rose-600 text-white font-black text-[10px] px-4 py-2.5 rounded-full uppercase tracking-wider transition-all"
                          >
                            Putar Langkah Cuci Tangan 🧼
                          </button>
                        </div>

                        {c5DbdMenguras && c5DbdMenutup && c5DbdMengubur ? (
                          <div className="text-[10px] uppercase font-black text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 flex items-center gap-1 shadow-sm transition-all animate-pulse">
                            <span>🎉 NYAMUK AEDES GO AWAY! BEBAS DBD!</span>
                          </div>
                        ) : (
                          <div className="text-[10px] uppercase font-black text-rose-800 bg-rose-100/50 px-4 py-1.5 rounded-full border border-rose-100 flex items-center gap-1 justify-center transition-all">
                            <span>🦟 Terapkan 3M untuk mencegah jentik nyamuk!</span>
                          </div>
                        )}
                      </div>

                      {/* Pencegahan Penyakit Explanations */}
                      <div className="lg:col-span-7 space-y-6">
                        <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase">Pembelajaran 4</span>
                        <h3 className="text-2xl font-black text-rose-950">Mengenal Penyakit & Menjaga Kebersihan 🛡️🦠</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-semibold font-sans">
                          Kesehatan adalah modal utama kita belajar. Wajib memelihara diri dari penyakit menular (seperti Flu, Influenza, DBD) lewat beberapa kunci utama:
                        </p>
                        
                        <div className="space-y-3.5 text-slate-800 text-sm font-bold">
                          <div className="flex gap-3 bg-white p-3 border border-rose-50 shadow-sm rounded-2xl items-center">
                            <span className="text-2xl shrink-0">🦠</span>
                            <div>
                              <span className="text-rose-600 font-extrabold text-xs block">PENYAKIT MENULAR</span>
                              <p className="text-slate-500 text-xs text-slate-600 leading-normal">Penyakit yang dipindahkan/ditransfer kuman/bakteri berbahaya dari tubuh penderita sakit ke tubuh sehat.</p>
                            </div>
                          </div>

                          <div className="flex gap-3 bg-white p-3 border border-rose-50 shadow-sm rounded-2xl items-center">
                            <span className="text-2xl shrink-0">🧼</span>
                            <div>
                              <span className="text-rose-600 font-extrabold text-xs block">CUCI TANGAN DENGAN SABUN DI SELA-SELA JARI</span>
                              <p className="text-slate-500 text-xs text-slate-600 leading-normal">Merupakan pemutus penularan kuman terunggul. Sela-sela jari harus digosok karena area basah tersebut merupakan lokasi kuman paling aman bersembunyi.</p>
                            </div>
                          </div>

                          <div className="flex gap-3 bg-white p-3 border border-rose-50 shadow-sm rounded-2xl items-center">
                            <span className="text-2xl shrink-0">🏡</span>
                            <div>
                              <span className="text-rose-600 font-extrabold text-xs block">LINGKUNGAN HIDUP SEHAT</span>
                              <p className="text-slate-500 text-xs text-slate-600 leading-normal">Kondisi lingkungan asri dicirikan dengan **saluran air atau selokan yang lancar dan bersih** agar terhindar dari pembiakan nyamuk DBD serta banjir.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Default view for other materials (Class 2 to 5)
              <>
                <div className="relative group">
                    <img 
                        src={material.imageUrl} 
                        alt={material.title} 
                        className="w-full aspect-video object-cover rounded-[3.5rem] shadow-2xl relative z-10 border-[12px] border-white"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="flex items-center gap-4 text-sky-900/40 font-bold text-xs uppercase tracking-widest">
                    <BookOpen size={14} /> materi pembelajaran
                    <div className="w-1 h-1 bg-sky-200 rounded-full"></div>
                    {material.title}
                </div>

                <div className="prose prose-sky prose-lg max-w-none">
                  <div className="text-xl md:text-2xl text-sky-900 leading-relaxed font-bold whitespace-pre-wrap">
                    {material.content}
                  </div>
                </div>
              </>
            )}

            {/* Kuis Wrapper */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-12 rounded-[4rem] text-white text-center shadow-2xl shadow-orange-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="relative z-10">
                    <Trophy size={64} className="mx-auto mb-6 text-orange-200 animate-bounce" />
                    <h2 className="text-4xl font-black mb-4">Ayo Uji Dirimu!</h2>
                    <p className="text-orange-50 mb-10 max-w-sm mx-auto text-lg opacity-90">Kumpulkan nilai tertinggimu untuk mempersiapkan ASAS Ujian Akhir semester!</p>
                    <button 
                        onClick={() => setShowQuiz(true)}
                        className="bg-white text-orange-600 px-14 py-5 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl hover:shadow-orange-700/30"
                    >
                      Mulai Kuis ({totalQuestions} Soal) Now
                    </button>
                </div>
            </div>
          </motion.div>
        ) : (
          /* Quiz Container */
          <div className="max-w-3xl mx-auto bg-sky-50 rounded-[4.5rem] p-8 md:p-14 border-2 border-sky-100 shadow-2xl mt-12 relative overflow-hidden">
            {quizScore === null ? (
              /* Quiz active view */
              currentQuestion < material.quiz.length ? (
                /* Multiple Choice Part */
                <div className="space-y-10">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-orange-500 font-black uppercase tracking-widest text-xs">ASAS BAGIAN 1: PILIHAN GANDA</span>
                      <span className="text-sky-900 font-black text-2xl mt-1">Nomor {currentQuestion + 1} dari {totalQuestions}</span>
                    </div>
                    <button onClick={() => setShowQuiz(false)} className="bg-white p-3 rounded-2xl text-sky-300 hover:text-red-500 transition-colors shadow-sm border border-sky-100">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="h-3 w-full bg-sky-100 rounded-full overflow-hidden">
                      <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                          className="h-full bg-orange-500"
                      />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-sky-900 leading-snug">
                    {material.quiz[currentQuestion].text}
                  </h3>

                  <div className="space-y-4">
                    {material.quiz[currentQuestion].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="w-full text-left p-6 bg-white rounded-3xl border-2 border-transparent hover:border-orange-500 hover:bg-orange-50 text-sky-800 transition-all group flex items-center gap-5 shadow-sm hover:shadow-md"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center font-black text-sky-600 group-hover:bg-orange-500 group-hover:text-white transition-colors text-lg">
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="font-bold text-sky-900 text-lg">{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Matchmaking Part (Questions 16 to 20) */
                <div className="space-y-10">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-orange-500 font-black uppercase tracking-widest text-xs">ASAS BAGIAN 2: MENCOCOKKAN GAMBAR & KATA</span>
                      <h3 className="text-sky-900 font-black text-2xl mt-1">Sisa 5 Soal Menjodohkan Berpasangan</h3>
                    </div>
                    <button onClick={() => setShowQuiz(false)} className="bg-white p-3 rounded-2xl text-sky-300 hover:text-red-500 transition-colors shadow-sm">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="bg-indigo-950 text-white p-6 rounded-3xl text-sm leading-relaxed border border-white/10">
                    💡 **Cara Bermain**: Klik salah satu **Kotak Oranye** di sebelah kiri terlebih dahulu, kemudian klik **Garis/Kotak Hijau** di sebelah kanan yang merupakan jawaban pasangannya yang benar!
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Left Hand Column */}
                    <div className="space-y-4">
                      <span className="block text-sky-400 font-black tracking-widest text-[10px] uppercase">Kolam Aktivitas / Bagian</span>
                      {matchLeftItems.map((item) => {
                        const isMatched = !!currentMatches[item.id];
                        const RightMatch = isMatched ? matchRightItems.find(r => r.id === currentMatches[item.id]) : null;
                        
                        return (
                          <div key={item.id} className="relative">
                            <button
                              onClick={() => setSelectedLeft(item.id)}
                              className={cn(
                                "w-full text-left p-5 rounded-brand flex flex-col justify-between transition-all border-2 rounded-2xl",
                                selectedLeft === item.id 
                                  ? "bg-orange-500 text-white border-orange-400 scale-102 shadow-lg shadow-orange-300/30"
                                  : isMatched
                                    ? "bg-slate-100 text-slate-500 border-slate-200 opacity-90"
                                    : "bg-white text-sky-900 border-sky-100 hover:border-orange-500"
                              )}
                            >
                              <div className="flex justify-between items-center w-full">
                                <span className="font-black text-lg">{item.text}</span>
                                {isMatched && <span className="text-xs font-black text-green-600 bg-green-100 px-2.5 py-1 rounded-full uppercase tracking-wider">Berpasangan ✅</span>}
                              </div>
                              <span className={cn("text-xs block mt-1", selectedLeft === item.id ? "text-orange-100" : "text-sky-400")}>
                                {item.hint}
                              </span>
                            </button>
                            {/* Matching Details Badge */}
                            {isMatched && RightMatch && (
                              <div className="absolute top-1/2 left-full translate-x-4 -translate-y-1/2 z-20 bg-green-500 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hidden md:flex items-center gap-1.5 shadow-md">
                                Pasangan → {RightMatch.text.split(' ')[0]} 
                                <button onClick={() => handleRemoveMatch(item.id)} className="bg-green-700 p-0.5 rounded-full hover:bg-red-500 transition-colors">
                                  <X size={10} />
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Hand Column */}
                    <div className="space-y-4">
                      <span className="block text-sky-400 font-black tracking-widest text-[10px] uppercase">Kegunaan / Pembahasan Tepat</span>
                      {matchRightItems.map((item) => {
                        // Check if this card was mapped
                        const leftKey = Object.keys(currentMatches).find(k => currentMatches[k] === item.id);
                        const isMatched = !!leftKey;
                        const LeftMatch = isMatched ? matchLeftItems.find(l => l.id === leftKey) : null;

                        return (
                          <button
                            key={item.id}
                            disabled={!selectedLeft}
                            onClick={() => {
                              if (selectedLeft) {
                                handleMatchClick(selectedLeft, item.id);
                              }
                            }}
                            className={cn(
                              "w-full text-left p-5 rounded-2xl transition-all border-2 flex flex-col justify-center min-h-[76px]",
                              isMatched 
                                ? "bg-green-500 text-white border-green-400 opacity-90"
                                : selectedLeft
                                  ? "bg-white text-sky-900 border-dashed border-sky-300 hover:bg-sky-100/50 hover:border-green-500 cursor-pointer"
                                  : "bg-white text-sky-400 border-sky-100 cursor-not-allowed opacity-60"
                            )}
                          >
                            <span className="font-extrabold text-sm">{item.text}</span>
                            {isMatched && LeftMatch && (
                              <div className="flex items-center gap-1 mt-1 font-black text-[10px] uppercase tracking-wider text-green-100">
                                Cocok dengan: {LeftMatch.text}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (leftKey) handleRemoveMatch(leftKey);
                                  }}
                                  className="ml-auto bg-green-700 p-0.5 rounded-full hover:bg-red-500 transition-colors"
                                >
                                  <X size={10} />
                                </button>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-sky-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button 
                      onClick={() => {
                        setCurrentMatches({});
                        setSelectedLeft(null);
                      }}
                      className="text-sky-500 font-black text-sm uppercase tracking-wider bg-white px-6 py-3.5 rounded-2xl border border-sky-100 hover:bg-sky-100"
                    >
                      Mulai Ulang Pasangan 🔄
                    </button>
                    
                    <button
                      onClick={submitMatchmaking}
                      disabled={Object.keys(currentMatches).length < 5}
                      className={cn(
                        "font-black text-lg px-8 py-4 rounded-[2rem] transition-all shadow-lg text-white",
                        Object.keys(currentMatches).length === 5 
                          ? "bg-green-500 hover:bg-green-600 shadow-green-200"
                          : "bg-slate-300 cursor-not-allowed shadow-none"
                      )}
                    >
                      {Object.keys(currentMatches).length < 5 
                        ? `Pasangkan Semua (${Object.keys(currentMatches).length}/5) 🔒` 
                        : 'Selesai & Kirim Jawaban! 🚀'}
                    </button>
                  </div>
                </div>
              )
            ) : (
              /* Quiz Finished / Score breakdown screen */
              <div className="text-center py-6">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={cn(
                        "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner",
                        quizScore >= 16 ? "bg-green-100 text-green-500" : "bg-sky-100 text-sky-500"
                    )}
                >
                  {quizScore >= 16 ? <Trophy size={50} className="animate-bounce" /> : <CheckCircle2 size={50} />}
                </motion.div>
                
                <h2 className="text-4xl font-black text-sky-900 mb-2">
                  {quizScore === 20 ? 'Luar Biasa Sempurna! 🎉' : quizScore >= 15 ? 'Hebat Sekali! 👍' : 'Bagus! Terus Belajar ya! 💪'}
                </h2>
                <p className="text-sky-500 mb-8 text-lg font-medium">Kamu telah menyelesaikan seluruh ujian ASAS Kelas 1.</p>
                
                {/* Score Panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto mb-10">
                  <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm">
                    <span className="block text-sky-400 font-black text-[10px] uppercase tracking-widest mb-1">Skor Pilihan Ganda</span>
                    <span className="text-3xl font-black text-sky-900">{answers.reduce((acc, curr, idx) => acc + (curr === material.quiz[idx].correctAnswer ? 1 : 0), 0)}</span>
                    <span className="text-slate-300 font-bold">/15</span>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm">
                    <span className="block text-sky-400 font-black text-[10px] uppercase tracking-widest mb-1">Skor Mencocokan</span>
                    <span className="text-3xl font-black text-sky-900">
                      {Object.keys(currentMatches).reduce((acc, k) => {
                        const correctMap: Record<string, string> = { m1: 'r1', m2: 'r2', m3: 'r3', m4: 'r4', m5: 'r5' };
                        return acc + (currentMatches[k] === correctMap[k] ? 1 : 0);
                      }, 0)}
                    </span>
                    <span className="text-slate-300 font-bold">/5</span>
                  </div>
                </div>

                <div className="bg-orange-500 text-white p-8 rounded-[2.5rem] shadow-lg max-w-sm mx-auto mb-10 shadow-orange-500/10">
                    <span className="block text-orange-200 font-bold text-xs uppercase tracking-widest">Total Nilai Akhir</span>
                    <div className="flex items-center justify-center gap-1.5 mt-1">
                      <span className="text-6xl font-black leading-none">{quizScore}</span>
                      <span className="text-xl font-bold text-orange-200">/ 20</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <button 
                    onClick={restartQuiz}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4.5 rounded-[2rem] font-black text-lg transition-all shadow-xl shadow-orange-200/50 flex-1"
                  >
                    Ulangi Ujian 🔄
                  </button>
                  <button 
                    onClick={() => setShowQuiz(false)}
                    className="bg-white hover:bg-sky-100 text-sky-600 border border-sky-100 px-8 py-4.5 rounded-[2rem] font-black text-lg transition-all shadow-sm flex-1"
                  >
                    Buka Rangkuman
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function AsasGenapPage() {
  const [searchParams] = useSearchParams();
  const initialGrade = Number(searchParams.get('grade')) || 1;
  const [selectedGrade, setSelectedGrade] = useState(initialGrade);

  // Filter materials for Class 1 to 5 and Semester 2 (Genap)
  const asasMaterials = materials.filter(m => m.semester === 2 && m.grade >= 1 && m.grade <= 5);
  const displayedMaterials = asasMaterials.filter(m => m.grade === selectedGrade);

  return (
    <div className="min-h-screen bg-sky-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="bg-gradient-to-r from-indigo-900 to-sky-900 text-white rounded-[3rem] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-orange-500 rounded-full text-xs font-black tracking-wider uppercase mb-4">Program Khusus SDN Karanggeger II</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Persiapan ASAS Genap 2025/2026</h1>
            <p className="text-sky-200 text-sm md:text-lg">
              Persiapkan dirimu sebaik mungkin untuk menghadapi Asesmen Sumatif Akhir Semester (ASAS) Genap Tahun Pelajaran 2025/2026. Temukan rangkuman materi esensial PJOK lengkap untuk kelas 1 sampai kelas 5 di bawah ini!
            </p>
          </div>
        </div>

        {/* Grade Selection Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {[1, 2, 3, 4, 5].map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGrade(g)}
              className={cn(
                "px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-sm",
                selectedGrade === g 
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-300"
                  : "bg-white text-sky-800 hover:bg-sky-100/50"
              )}
            >
              Materi ASAS Kelas {g}
            </button>
          ))}
        </div>

        {/* Materials list */}
        <div className="max-w-4xl mx-auto">
          {displayedMaterials.length > 0 ? (
            <div className="space-y-8">
              {displayedMaterials.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-sky-950/5 border border-sky-100/50 flex flex-col md:flex-row gap-8 items-center"
                >
                  <img
                    src={m.imageUrl}
                    alt={m.title}
                    className="w-full md:w-64 aspect-video object-cover rounded-[2rem] shadow-md shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-black uppercase tracking-wider">
                      Target Ujian • Semester 2
                    </div>
                    <h3 className="text-2xl font-black text-sky-900">{m.title}</h3>
                    <p className="text-sky-600 text-sm leading-relaxed">{m.description}</p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/materi/${m.id}`}
                        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all shadow-md shadow-sky-100 flex-1"
                      >
                        Pelajari Materi
                      </Link>
                      <Link
                        to={`/materi/${m.id}?startQuiz=true`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all shadow-md shadow-orange-100 flex-1"
                      >
                        Latihan Kuis
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-sky-100 p-8">
              <BookOpen size={48} className="mx-auto text-sky-300 mb-4" />
              <h3 className="text-xl font-bold text-sky-900">Materi Kelas {selectedGrade}</h3>
              <p className="text-sky-500 max-w-sm mx-auto mt-2">Materi khusus ujian ASAS Genap Kelas {selectedGrade} sedang diverifikasi oleh Kepala Sekolah sesuai panduan resmi Kemendikdasmen.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 selection:bg-sky-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/asas-genap" element={<AsasGenapPage />} />
            <Route path="/materi" element={<MaterialsListPage />} />
            <Route path="/materi/:id" element={<MaterialDetailPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-sky-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2.5 rounded-xl text-sky-900 shadow-xl shadow-sky-950/20">
                            <Trophy size={28} />
                        </div>
                        <div>
                             <h4 className="font-black text-xl leading-none">PJOK DIGITAL</h4>
                             <span className="text-[10px] text-sky-300 font-bold uppercase tracking-[0.2em]">SD Negeri Karanggeger II</span>
                        </div>
                    </div>
                    <p className="text-sky-300/70 max-w-sm text-sm leading-relaxed">
                        Aplikasi pendukung pembelajaran PJOK yang menyenangkan dan interaktif untuk siswa-siswi SD Negeri Karanggeger II. Mari hidup sehat dan aktif!
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-16">
                    <div className="space-y-4">
                        <h5 className="font-black text-sky-100 text-sm uppercase tracking-wider">Navigasi</h5>
                        <ul className="space-y-2 text-sky-300 text-sm font-medium">
                            <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
                            <li><Link to="/asas-genap" className="hover:text-white transition-colors">Persiapan ASAS Genap</Link></li>
                            <li><Link to="/materi" className="hover:text-white transition-colors">Daftar Materi</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h5 className="font-black text-sky-100 text-sm uppercase tracking-wider">Kelas</h5>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sky-300 text-sm font-medium">
                            <li><Link to="/materi?grade=1" className="hover:text-white transition-colors">Kelas 1</Link></li>
                            <li><Link to="/materi?grade=2" className="hover:text-white transition-colors">Kelas 2</Link></li>
                            <li><Link to="/materi?grade=3" className="hover:text-white transition-colors">Kelas 3</Link></li>
                            <li><Link to="/materi?grade=4" className="hover:text-white transition-colors">Kelas 4</Link></li>
                            <li><Link to="/materi?grade=5" className="hover:text-white transition-colors">Kelas 5</Link></li>
                            <li><Link to="/materi?grade=6" className="hover:text-white transition-colors">Kelas 6</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="pt-12 border-t border-sky-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-sky-400 uppercase tracking-widest">
              <p>© 2026 SDN Karanggeger II • All Rights Reserved</p>
              <div className="flex gap-8">
                <span>Panduan Kemendikdasmen</span>
                <span>Aplikasi Edukasi</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
