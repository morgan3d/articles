const note_name_array = ['C ', 'C♯', 'D ', 'E♭', 'E ', 'F ', 'F♯', 'G ', 'G♯', 'A ', 'B♭', 'B '];

// Offsets from C in chromatic scale
const major_scale = [0, 2, 4, 5, 7, 9, 11];

// Major pentatonic. The relative minor is shifted by +9
const pentatonic_scale = [0, 2, 4, 7, 9];

const harmonic_major_scale = [0, 2, 4, 5, 7, 8, 11];

// Relative harmonic minor 
const harmonic_minor_scale = [9, 11, 0, 2, 4, 5, 8];

const major_blues_scale = [0, 2, 3, 4, 7, 9];
const minor_blues_scale = [9, 0, 2, 3, 4, 7];


const mode_array = ['Major / Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor / Aeolian', 'Locrian']

// offset is the offset in the scale for modes
function write_notes(name, note_array, offset = 0, key = 0) {
    let s = '*' + name + '*\n: `';
    
    for (let i = 0; i < note_array.length; ++i) {
        s += note_name_array[(note_array[(i + offset) % note_array.length] + key) % note_name_array.length] + ' ';
    }

    s += '`\n\n';
    
    document.write(s);
}


for (let key = 0; key < 12; ++key) {
    document.write('\n## Key of ' + note_name_array[key] + '\n');
    for (let m = 0; m < mode_array.length; ++m) {
        write_notes(note_name_array[(major_scale[m] + key) % note_name_array.length] + ' ' + mode_array[m], major_scale, m, key);
    }
    
    write_notes(note_name_array[0] + ' Pentatonic Major', pentatonic_scale, 0, key);
    write_notes(note_name_array[9] + ' Pentatonic Minor', pentatonic_scale, 9, key);
    
    write_notes(note_name_array[0] + ' Major Blues', major_blues_scale, 0, key);
    write_notes(note_name_array[9] + ' Minor Blues', minor_blues_scale, 0, key);
    write_notes(note_name_array[0] + ' Harmonic Major', harmonic_major_scale, 0, key);
    write_notes(note_name_array[9] + ' Harmonic Minor', harmonic_minor_scale, 0, key);
}
