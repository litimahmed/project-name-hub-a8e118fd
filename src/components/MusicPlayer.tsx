import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Song } from "@/hooks/useMusicPlayer";

interface MusicPlayerProps {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  onTogglePlay: () => void;
  onSelectSong: (song: Song) => void;
  onVolumeChange: (volume: number) => void;
}

const MusicPlayer = ({
  songs,
  currentSong,
  isPlaying,
  volume,
  onTogglePlay,
  onSelectSong,
  onVolumeChange,
}: MusicPlayerProps) => {
  if (songs.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      {/* Play/Pause Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onTogglePlay}
        disabled={!currentSong}
        className="gap-2"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">
          {isPlaying ? "Pause" : "Play"}
        </span>
      </Button>

      {/* Song Selector */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Music className="h-4 w-4" />
            <span className="hidden md:inline">
              {currentSong ? currentSong.name : "Select Song"}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-2">
            <h4 className="font-medium text-sm mb-3">Background Music</h4>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {songs.map((song) => (
                <button
                  key={song.url}
                  onClick={() => onSelectSong(song)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    currentSong?.url === song.url
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {song.name}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Volume Control */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm">
            {volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Volume</h4>
            <Slider
              value={[volume * 100]}
              onValueChange={(value) => onVolumeChange(value[0] / 100)}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MusicPlayer;
