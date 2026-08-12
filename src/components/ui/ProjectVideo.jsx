import React, { useEffect, useRef, useState } from "react";

const SpeakerOff = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
    <path d="m16.5 9.5 5 5m0-5-5 5" />
  </svg>
);

const SpeakerOn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
    <path d="M16 9a4 4 0 0 1 0 6" />
    <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
  </svg>
);

/**
 * Looping showreel for a project card. Muted autoplay (the only kind browsers
 * allow) with an explicit unmute control; if autoplay is refused a manual
 * play button appears instead of a dead frame. No hover effects — the card
 * animation is the reference design's sticky stack + scale, nothing more.
 */
const ProjectVideo = ({ src, label, poster, className = "" }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [allowMotion] = useState(
    () =>
      typeof window === "undefined" ||
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Only run the loop while on screen — a 30MB clip should not decode
  // while the user is elsewhere on the page.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !allowMotion) return;

    let onScreen = false;
    const attempt = () => {
      if (!onScreen) return;
      const p = video.play();
      if (p?.catch) {
        p.then(() => setBlocked(false)).catch(() => setBlocked(true));
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) attempt();
        else video.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(video);

    video.addEventListener("loadeddata", attempt);
    video.addEventListener("canplay", attempt);
    return () => {
      io.disconnect();
      video.removeEventListener("loadeddata", attempt);
      video.removeEventListener("canplay", attempt);
    };
  }, [allowMotion]);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next) {
      video.volume = 1;
      const p = video.play(); // the click is the gesture that permits audio
      if (p?.catch) p.catch(() => {});
    }
  };

  return (
    <div className={`relative overflow-hidden bg-black-200 ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted={muted}
        playsInline
        preload="metadata"
        tabIndex={-1}
        disablePictureInPicture
        onLoadedData={() => setReady(true)}
        onPlaying={() => {
          setPlaying(true);
          setBlocked(false);
        }}
        onPause={() => setPlaying(false)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Loading shimmer until there are frames to show */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-frost/40 text-[10px] uppercase tracking-[0.3em] animate-pulse">
            Loading showreel
          </span>
        </div>
      )}

      {/* Manual start, shown only when the browser refused to autoplay */}
      {ready && blocked && !playing && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const v = videoRef.current;
            if (!v) return;
            const p = v.play();
            if (p?.catch) p.catch(() => {});
          }}
          aria-label="Play video"
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/35 backdrop-blur-[2px]
            transition-colors duration-300 hover:bg-black/25"
        >
          <span
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full
              border-2 border-frost/70 text-frost bg-black/50"
            style={{ boxShadow: "0 0 26px rgba(182,0,168,0.5)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* status + sound controls */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-3 pointer-events-none">
        <span
          className="flex items-center gap-2 rounded-full border border-frost/20 bg-black/55 backdrop-blur-md
            px-3 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-frost/85"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          {label}
        </span>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          className="pointer-events-auto shrink-0 flex items-center gap-2 rounded-full border border-frost/30
            bg-black/60 backdrop-blur-md px-3 py-2 text-frost hover:text-white hover:border-frost/70
            hover:bg-black/75 transition-all duration-300 active:scale-95"
          style={muted ? undefined : { boxShadow: "0 0 18px rgba(182,0,168,0.55)" }}
        >
          {muted ? <SpeakerOff /> : <SpeakerOn />}
          <span className="hidden sm:inline text-[9px] uppercase tracking-[0.2em]">
            {muted ? "Sound off" : "Sound on"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectVideo;
