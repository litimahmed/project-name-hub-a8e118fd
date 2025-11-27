import { useState, useEffect, useRef } from 'react';

export interface Song {
  name: string;
  url: string;
}

export const useMusicPlayer = (autoPlay: boolean = false) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fetch available songs from the public/songs folder
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // This will need to be populated manually or via a build script
        // For now, we'll check for common song filenames
        const potentialSongs = [
          'Fairytale.mp3',
        ];

        const availableSongs: Song[] = [];

        for (const filename of potentialSongs) {
          try {
            const response = await fetch(`/songs/${filename}`, { method: 'HEAD' });
            if (response.ok) {
              availableSongs.push({
                name: filename.replace('.mp3', '').replace(/-/g, ' ').replace(/_/g, ' '),
                url: `/songs/${filename}`,
              });
            }
          } catch (error) {
            // Song doesn't exist, skip it
          }
        }

        setSongs(availableSongs);
        
        // Auto-select first song if available
        if (availableSongs.length > 0 && autoPlay) {
          setCurrentSong(availableSongs[0]);
        }
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, [autoPlay]);

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle song changes
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSong]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const toggle = () => setIsPlaying(!isPlaying);

  const selectSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return {
    songs,
    currentSong,
    isPlaying,
    volume,
    play,
    pause,
    toggle,
    selectSong,
    setVolume,
  };
};
