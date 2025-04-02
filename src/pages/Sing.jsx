import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const Sing = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4">Sing Along!</h1>
            <audio ref={audioRef} src="/song.mp3" />
            <button 
                onClick={togglePlay} 
                className="p-4 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
            >
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
        </div>
    );
};

export default Sing;