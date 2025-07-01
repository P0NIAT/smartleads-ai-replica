
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize } from 'lucide-react';

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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current && videoLoaded) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, [autoPlay, videoLoaded]);

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
  };

  const handleVideoError = (error: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', error);
  };

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
        setShowControls(true);
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

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).mozRequestFullScreen) {
        (videoRef.current as any).mozRequestFullScreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  const handleVideoEnd = () => {
    if (!isMuted) {
      setIsPlaying(false);
      setShowOverlay(true);
      setShowControls(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isMuted) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMuted && isPlaying) {
      setShowControls(false);
    }
  };

  return (
    <div 
      className={`video-container relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        poster={poster}
        muted={isMuted}
        loop={isMuted}
        playsInline
        autoPlay={autoPlay}
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
        onEnded={handleVideoEnd}
        onClick={handleVideoClick}
        className="w-full h-full object-cover cursor-pointer"
        style={{ display: 'block' }}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/quicktime" />
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
      
      {/* Video Controls */}
      {showControls && !isMuted && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 transition-opacity duration-300">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
          </div>
          
          <button
            onClick={handleFullscreen}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
      
      {isMuted && autoPlay && videoLoaded && (
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          Click to unmute
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
