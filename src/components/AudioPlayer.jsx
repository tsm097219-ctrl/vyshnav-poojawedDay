import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Audio Player for background wedding music
 * Handles browser autoplay policies by attempting play on mount,
 * and falling back to immediate play on first user interaction (touch, click, scroll).
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayPrompt, setAutoplayPrompt] = useState(false);
  const audioRef = useRef(null);

  const startAudio = () => {
    if (!audioRef.current) return;
    
    // Set volume to comfortable level
    audioRef.current.volume = 0.65;
    
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setAutoplayPrompt(false);
        })
        .catch((error) => {
          // Autoplay was prevented by browser policy
          console.log("Autoplay waiting for user gesture:", error.message);
          setIsPlaying(false);
          setAutoplayPrompt(true);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    // 1. Attempt autoplay immediately on mount
    startAudio();

    // 2. Also register first-interaction unlock (click, touch, scroll, keydown)
    // Most modern mobile browsers unlock audio on first touch/tap
    const unlockAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        startAudio();
      }
      // Remove listeners once unlocked
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('click', unlockAudio, { once: true, passive: true });
    window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
    window.addEventListener('scroll', unlockAudio, { once: true, passive: true });
    window.addEventListener('keydown', unlockAudio, { once: true, passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  return (
    <div className="audio-player-wrapper">
      <audio
        ref={audioRef}
        src={weddingConfig.music.audioSrc}
        loop
        preload="auto"
        playsInline
      />

      <button
        onClick={toggleMusic}
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
        title={isPlaying ? "Mute Background Music" : "Play Wedding Song"}
        aria-label="Toggle background wedding song"
      >
        <span className="music-icon-wrapper">
          {isPlaying ? <Volume2 size={16} /> : <Music size={16} />}
        </span>
        <span className="music-label">
          {isPlaying ? "Music ON" : "Play Music"}
        </span>
        {isPlaying && (
          <span className="sound-wave" aria-hidden="true">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </span>
        )}
      </button>

      {/* Gentle floating hint if browser initially blocked autoplay until first tap */}
      {autoplayPrompt && !isPlaying && (
        <div
          className="audio-autoplay-hint"
          onClick={startAudio}
          role="status"
          aria-live="polite"
        >
          <span>🎵 Tap anywhere to play wedding music</span>
        </div>
      )}
    </div>
  );
};
