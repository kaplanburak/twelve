import { start, stop, ctx } from "../../store";

export const useAudioContext = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    ctx.set(audioCtx);

    const oscillatorNode = audioCtx.createOscillator();
    oscillatorNode.type = "sine";

    oscillatorNode.start(0);
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;

    oscillatorNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const gainOn = freq => {
        oscillatorNode.frequency.value = freq;
        gainNode.gain.value = 1;
    };

    const gainOff = () => {
        gainNode.gain.value = 0;
    };

    start.set(gainOn);
    stop.set(gainOff);
};
