import { useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className = "" }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          (videoRef.current as any).webkitRequestFullscreen();
        }
      }
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover ${className}`}
        autoPlay
        loop
        muted
        playsInline
      />

      <button
        onClick={handlePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all rounded-full"
      >
        <div className="bg-black/20 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default VideoPlayer;
