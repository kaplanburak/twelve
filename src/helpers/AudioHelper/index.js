import { startPlaying, stopPlaying, playingSequence } from "@Store";

let _startPlaying;
startPlaying.subscribe(val => {
    _startPlaying = val;
});

let _stopPlaying;
stopPlaying.subscribe(val => {
    _stopPlaying = val;
});

export const AudioHelper = {
    playSequence: freqs => {
        playingSequence.set(true);

        freqs.forEach((freq, i) => {
            setTimeout(() => {
                playForAWhile(freq, i === freqs.length - 1);
            }, i * 350);
        });

        const playForAWhile = (freq, last) => {
            _startPlaying(freq);
            setTimeout(
                () => {
                    _stopPlaying();
                    last && playingSequence.set(false);
                },
                last ? 750 : 250
            );
        };
    },
};
