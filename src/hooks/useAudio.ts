import { useEffect, useMemo, useState } from 'react';

const useAudio = (url: string) => {
    const audio = useMemo(() => new Audio(url), []);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));

        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return { playing, toggle, stop: () => setPlaying(false), play: () => setPlaying(true) };
};

export default useAudio;
