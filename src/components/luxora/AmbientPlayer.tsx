"use client";

import { useState, useEffect, useRef } from "react";
import { HiVolumeUp, HiVolumeOff, HiOutlineSparkles } from "react-icons/hi";

export default function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      // Stop sound
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      // Start ambient synth chime sound
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          audioCtxRef.current = new AudioContextClass();
        }

        if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }

        // Ambient low-frequency lofi pad synth tone
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(174, audioCtxRef.current.currentTime); // Solfeggio 174 Hz relaxing frequency

        gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime); // Subtle volume

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;

        setIsPlaying(true);
      } catch (err) {
        console.log("Audio not allowed yet", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-[var(--font-inter)] tracking-wider uppercase transition-all duration-300 ${
        isPlaying
          ? "border-luxora-gold bg-luxora-gold/20 text-luxora-gold shadow-[0_0_12px_rgba(212,175,55,0.4)] animate-pulse"
          : "border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20"
      }`}
      title={isPlaying ? "Mute LUXORA Ambient Lounge Audio" : "Play LUXORA Sunset Session Ambient Audio"}
    >
      {isPlaying ? (
        <>
          <HiVolumeUp size={14} className="text-luxora-gold" />
          <span className="hidden sm:inline">Lounge Vibes ON</span>
        </>
      ) : (
        <>
          <HiVolumeOff size={14} />
          <span className="hidden sm:inline">Lounge Music</span>
        </>
      )}
    </button>
  );
}
