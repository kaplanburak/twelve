import { startPlaying, stopPlaying } from "@Store";

let _startPlaying;
startPlaying.subscribe(val => {
    _startPlaying = val;
});

let _stopPlaying;
startPlaying.subscribe(val => {
    _stopPlaying = val;
});

export const AudioHelper = {
    playSequence: freqs => {
        // start playing freq[0]
        // continue playing freq[0]
        // stop playing [0]
        // start playing freq[1]
        // ...

        console.log("playSequence ", freqs);

        // freqs.forEach((freq, i) => {
        //     setTimeout(() => {
        //         playForAWhile(freq);
        //     }, i * 1500);
        // });

        const playForAWhile = freq => {
            _startPlaying(freq);
            setTimeout(_stopPlaying, 1000);
        };

        playForAWhile(freqs[0]);
    },
};
