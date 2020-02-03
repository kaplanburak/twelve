import { startPlaying, stopPlaying, ctx } from "@Store";

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
        gainNode.gain.setTargetAtTime(1, audioCtx.currentTime, 0.01);
    };

    const gainOff = () => {
        gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.015);
    };

    startPlaying.set(gainOn);
    stopPlaying.set(gainOff);
};
