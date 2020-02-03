import { startPlaying, stopPlaying } from "@Store";

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
        freqs.forEach((freq, i) => {
            setTimeout(() => {
                playForAWhile(freq, i === freqs.length);
            }, i * 450);
        });

        const playForAWhile = (freq, long) => {
            _startPlaying(freq);
            setTimeout(_stopPlaying, long ? 2000 : 350);
        };
    },
};
