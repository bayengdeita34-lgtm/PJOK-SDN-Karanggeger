import { motion } from 'motion/react';
import { useState } from 'react';

export default function TraditionalGameAnimation() {
  const [speed, setSpeed] = useState(1);
  const [bubbleText, setBubbleText] = useState('Ayo, hadang dia! 🏃‍♂️');

  const voices = [
    'Lari cepat, Ani! 💨',
    'Eits, tidak boleh lewat! 🙅‍♂️',
    'Yee, kita lolos! 🎉',
    'Gobak Sodor SDN Karanggeger II! 🏆',
    'Ayo tanding lagi! 🙌',
    'Kompak selalu tim kita! 🤝'
  ];

  const triggerShout = () => {
    // Pick a random shout
    const index = Math.floor(Math.random() * voices.length);
    setBubbleText(voices[index]);
    setSpeed(1.8);
    setTimeout(() => {
      setSpeed(1);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-b from-sky-200 via-sky-100 to-amber-50 rounded-[3rem] shadow-2xl border-8 border-white overflow-hidden p-6 flex flex-col justify-between">
      
      {/* Dynamic Sky elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Sun */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-4 right-6 text-4xl select-none"
        >
          ☀️
        </motion.div>

        {/* Cloud 1 */}
        <motion.div 
          animate={{ x: [-50, 420] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 text-3xl select-none opacity-80"
        >
          ☁️
        </motion.div>

        {/* Cloud 2 */}
        <motion.div 
          animate={{ x: [400, -50] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-16 text-2xl select-none opacity-60"
        >
          ☁️
        </motion.div>
      </div>

      {/* Title Header inside card */}
      <div className="relative z-10 text-center space-y-1">
        <span className="bg-sky-500/10 text-sky-800 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-sky-200/50 inline-block">
          Permainan Tradisional Berkelompok
        </span>
        <h3 className="font-extrabold text-slate-800 text-sm">Simulasi Gobak Sodor (Hadangan) 🇮🇩</h3>
      </div>

      {/* Main Ground and Court View */}
      <div className="relative h-52 w-full mt-2 z-10 bg-emerald-100/70 border border-emerald-200 rounded-3xl flex items-center justify-center overflow-hidden">
        {/* Grassy floor background decoration */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-emerald-200/50"></div>
        
        {/* Court layout lines (Gobak Sodor Grid) */}
        <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none">
          {/* Main court outline */}
          <rect x="10%" y="15%" width="80%" height="70%" fill="none" stroke="#ffffff" strokeWidth="3" />
          {/* Center Vertical Separator */}
          <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="#ffffff" strokeWidth="3" strokeDasharray="3 3" />
          {/* Horizontal Guard Lane 1 */}
          <line x1="10%" y1="35%" x2="90%" y2="35%" stroke="#ffffff" strokeWidth="3" />
          {/* Horizontal Guard Lane 2 */}
          <line x1="10%" y1="65%" x2="90%" y2="65%" stroke="#ffffff" strokeWidth="3" />
        </svg>

        {/* Animated Kids Characters */}
        {/* 1. Guard Kid (Budi) - patrolling horizontal line 1 */}
        <motion.div
          animate={{ x: [-80, 80, -80] }}
          transition={{ duration: 4 / speed, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[25%] flex flex-col items-center justify-center z-20 pointer-events-none"
        >
          <div className="relative">
            {/* Guard Warning Indicator */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] bg-red-500 text-white font-black px-1.5 py-0.5 rounded-full"
            >
              JAGA!
            </motion.div>
            <span className="text-4xl filter drop-shadow">👦🏽</span>
          </div>
          <span className="text-[9px] font-black text-slate-700 bg-white/80 px-1.5 rounded-full border border-slate-200">Budi</span>
        </motion.div>

        {/* 2. Patrolling Guard 2 (Siti) - patrolling line 2 */}
        <motion.div
          animate={{ x: [60, -60, 60] }}
          transition={{ duration: 3.2 / speed, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[52%] flex flex-col items-center justify-center z-20 pointer-events-none"
        >
          <div className="relative">
            <span className="text-4xl filter drop-shadow">👧🏻</span>
          </div>
          <span className="text-[9px] font-black text-slate-700 bg-white/80 px-1.5 rounded-full border border-slate-200">Siti</span>
        </motion.div>

        {/* 3. Runner Kid (Ani) - trying to dodge through lines */}
        <motion.div
          animate={{ 
            y: [-30, 45, -30], 
            x: [-40, 50, -40],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 5.5 / speed, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[38%] flex flex-col items-center justify-center z-30 pointer-events-none"
        >
          <div className="relative">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
              className="text-4xl filter drop-shadow"
            >
              🏃‍♀️
            </motion.div>
          </div>
          <span className="text-[9px] font-black text-emerald-800 bg-emerald-100 px-1.5 rounded-full border border-emerald-300">Ani (Pelari)</span>
        </motion.div>

        {/* 4. Cheering Sideline Kid (Adi) - waving on the right */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="absolute right-2 top-[40%] flex flex-col items-center justify-center z-10 pointer-events-none"
        >
          <span className="text-3xl filter drop-shadow">🙋‍♂️</span>
          <span className="text-[8px] font-black text-slate-600">Adi</span>
        </motion.div>
      </div>

      {/* Bubble Chat / Speeches */}
      <div className="bg-white/90 border border-amber-200/80 p-3 rounded-2xl relative shadow-md z-10 flex items-center gap-3 mt-2 min-h-[48px]">
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-lg filter shrink-0 drop-shadow">
          🗣️
        </div>
        <p className="text-xs font-black text-slate-800 line-clamp-2 leading-tight">
          {bubbleText}
        </p>
      </div>

      {/* Simulation triggers */}
      <div className="bg-white/60 border border-slate-200/50 rounded-2xl p-2.5 z-10 flex gap-1.5 items-center justify-between mt-3">
        <div className="text-[10px] font-black text-slate-500 uppercase flex flex-col">
          <span>Kompak & Lincah</span>
          <span className="text-sky-600 font-extrabold text-[11px]">Nilai Karakter 👍</span>
        </div>
        
        <button 
          onClick={triggerShout}
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black text-xs px-4 py-2.5 rounded-xl uppercase transition-all shadow-md shadow-orange-500/20 whitespace-nowrap"
        >
          Ayo Semangati! 🎉
        </button>
      </div>

    </div>
  );
}
