
import React, { useState, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowOverlay(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowOverlay(true);
  };

  return (
    <div className={`video-container ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {showOverlay && (
        <div className="video-overlay">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          
          <div 
            className="play-button animate-pulse-glow"
            onClick={handlePlay}
          >
          </div>
        </div>
      )}
      
      {isPlaying && (
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={handlePause}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
