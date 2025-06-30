
import React, { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className = "", autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(!autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, [autoPlay]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isMuted) {
        // Unmute, restart, and play with sound
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsMuted(false);
        setIsPlaying(true);
        setShowOverlay(false);
      } else {
        // Toggle play/pause
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  const handleVideoEnd = () => {
    if (!isMuted) {
      setIsPlaying(false);
      setShowOverlay(true);
    }
  };

  return (
    <div className={`video-container ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        muted={isMuted}
        loop={isMuted} // Only loop when muted (autoplay mode)
        playsInline
        autoPlay={autoPlay}
        onEnded={handleVideoEnd}
        onClick={handleVideoClick}
        className="w-full h-full object-cover cursor-pointer"
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/mov" />
        Your browser does not support the video tag.
      </video>
      
      {showOverlay && !autoPlay && (
        <div className="video-overlay">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          
          <div 
            className="play-button animate-pulse-glow"
            onClick={handleVideoClick}
          >
          </div>
        </div>
      )}
      
      {isMuted && autoPlay && (
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          Click to unmute
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
