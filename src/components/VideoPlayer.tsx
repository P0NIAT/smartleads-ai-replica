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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current && videoLoaded) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, [autoPlay, videoLoaded]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
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

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;
      const newTime = percentage * duration;
      
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressClick(e);
  };

  const handleProgressMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleProgressClick(e);
    }
  };

  const handleProgressMouseUp = () => {
    setIsDragging(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

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
        onTimeUpdate={handleTimeUpdate}
        onError={handleVideoError}
        onEnded={handleVideoEnd}
        onClick={handleVideoClick}
        className={`w-full h-full cursor-pointer ${isFullscreen ? 'object-contain' : 'object-contain'}`}
        style={{ 
          display: 'block',
          ...(isFullscreen && {
            width: '100vw',
            height: '100vh',
            objectFit: 'contain'
          })
        }}
        controlsList="nodownload nofullscreen noremoteplaybook"
        disablePictureInPicture
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
      
      {/* Custom Video Controls */}
      {showControls && !isMuted && (
        <div className="absolute bottom-4 left-4 right-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div 
              ref={progressRef}
              className="relative h-2 bg-beauty-cream/30 rounded-full cursor-pointer backdrop-blur-sm border border-beauty-lavender/30"
              onClick={handleProgressClick}
              onMouseDown={handleProgressMouseDown}
              onMouseMove={handleProgressMouseMove}
              onMouseUp={handleProgressMouseUp}
              onMouseLeave={handleProgressMouseUp}
            >
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-beauty-pink to-beauty-purple rounded-full transition-all duration-150"
                style={{ width: `${progressPercentage}%` }}
              />
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-beauty-cream rounded-full shadow-lg border-2 border-beauty-purple transition-all duration-150"
                style={{ left: `calc(${progressPercentage}% - 8px)` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-beauty-cream text-sm">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          
          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePlayPause}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-beauty-purple/80 hover:bg-beauty-purple backdrop-blur-sm border-2 border-beauty-lavender transition-all duration-300 transform hover:scale-105"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-beauty-cream" />
              ) : (
                <Play className="w-6 h-6 text-beauty-cream ml-0.5" />
              )}
            </button>
            
            <button
              onClick={handleFullscreen}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-beauty-pink/80 hover:bg-beauty-pink backdrop-blur-sm border-2 border-beauty-lavender transition-all duration-300 transform hover:scale-105"
              aria-label="Fullscreen"
            >
              <Maximize className="w-6 h-6 text-beauty-cream" />
            </button>
          </div>
        </div>
      )}
      
      {isMuted && autoPlay && videoLoaded && (
        <div className="absolute bottom-4 right-4 bg-beauty-purple/80 backdrop-blur-sm text-beauty-cream px-4 py-2 rounded-full text-sm border border-beauty-lavender">
          Click to unmute
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
