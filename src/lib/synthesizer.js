import context from './audio-context.js';
import Oscillator from './oscillator';
import Octavian from 'octavian';

const notes = {};

export default {
  oscillatorFor(note, destination = context.destination) {
    const frequency = new Octavian.Note(note).frequency;
    if (!this.notes[frequency]) {
      this.notes[frequency] = new Oscillator(frequency, destination);
    }
    return this.notes[frequency];
  }
};
