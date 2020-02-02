export const NoteHelper = {
    notes: {
        C: [16.35, 32.7, 65.41, 130.8, 261.6, 523.3, 1047, 2093, 4186],
        "C#/Db": [17.32, 34.65, 69.3, 138.6, 277.2, 554.4, 1109, 2217, 4435],
        D: [18.35, 36.71, 73.42, 146.8, 293.7, 587.3, 1175, 2349, 4699],
        "D#/Eb": [19.45, 38.89, 77.78, 155.6, 311.1, 622.3, 1245, 2489, 4978],
        E: [20.6, 41.2, 82.41, 164.8, 329.6, 659.3, 1319, 2637, 5274],
        F: [21.83, 43.65, 87.31, 174.6, 349.2, 698.5, 1397, 2794, 5588],
        "F#/Gb": [23.12, 46.25, 92.5, 185.0, 370.0, 740.0, 1480, 2960, 5920],
        G: [24.5, 49.0, 98.0, 196.0, 392.0, 784.0, 1568, 3136, 6272],
        "G#/Ab": [25.96, 51.91, 103.8, 207.7, 415.3, 830.6, 1661, 3322, 6645],
        A: [27.5, 55.0, 110.0, 220.0, 440.0, 880.0, 1760, 3520, 7040],
        "A#/Bb": [29.14, 28.27, 116.5, 233.1, 466.2, 932.3, 1865, 3729, 7459],
        B: [30.87, 61.74, 123.5, 246.9, 493.9, 987.8, 1976, 3951, 7902],
    },
    scales: {
        diatonic: [
            { name: "Major", notes: [0, 2, 4, 5, 7, 9, 11, 12] },
            { name: "Natural Minor", notes: [0, 2, 3, 5, 7, 8, 10, 12] },
            { name: "Harmonic Minor", notes: [0, 2, 3, 5, 7, 8, 11, 12] },
            { name: "Melodic Minor", notes: [0, 2, 3, 5, 7, 9, 11, 12] },
        ],
    },
    getTwelveNotes: (tonic, tonicPitch, scale) => {
        const notes = NoteHelper.notes;
        const keys = Object.keys(notes);
        const indexOfTonic = keys.indexOf(tonic);

        const mapKeys = (keys, pitch) => {
            return keys.map(key => {
                const freq = notes[key][pitch];
                return {
                    pitch,
                    key,
                    freq,
                    isOpen: true,
                };
            });
        };

        const keysHead = keys.slice(indexOfTonic, keys.length);
        const notesHead = mapKeys(keysHead, tonicPitch);

        const keysTail = keys.slice(0, indexOfTonic);
        const notesTail = mapKeys([...keysTail, tonic], tonicPitch + 1);

        let twelveNotes = [...notesHead, ...notesTail];

        console.log("scale", scale);

        if (scale.length) {
            twelveNotes = twelveNotes.map((note, i) => {
                return {
                    ...note,
                    isOpen: scale.includes(i),
                };
            });
        }

        return twelveNotes;
    },
    getScaleUpAndDown: scale => {
        return scale.concat(scale.slice(0, scale.length - 1).reverse());
    },
};
