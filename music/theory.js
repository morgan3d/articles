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
    const key_name = note_name_array[key].trim();
    const rel_minor_name = note_name_array[(key + 9) % note_name_array.length];
    
    document.write('\n## Key of ' + key_name + '\n');

    {
        let s = '*Primary Chords:* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

        // Negative is minor. Nonnegative is major, which is also the 1-4-5 chords
        const chord_array = [0, -2, -4, 5, 7, -9];

        for (const c of chord_array) {
            s += '&nbsp;&nbsp; ' + (c >= 0 ? '*' : '') + note_name_array[(Math.abs(c) + key) % note_name_array.length].trim() + (c < 0 ? 'm' : '*'); 
        }

        //C Dm Em F G Am
        s += '\n\n';
        document.write(s);
    }

    
    for (let m = 0; m < mode_array.length; ++m) {
        write_notes(note_name_array[(major_scale[m] + key) % note_name_array.length] + ' ' + mode_array[m], major_scale, m, key);
    }
    
    write_notes(key_name + ' Pentatonic Major', pentatonic_scale, 0, key);
    write_notes(rel_minor_name + ' Pentatonic Minor', pentatonic_scale, 9, key);
    
    write_notes(key_name + ' Major Blues', major_blues_scale, 0, key);
    write_notes(rel_minor_name + ' Minor Blues', minor_blues_scale, 0, key);
    write_notes(key_name + ' Harmonic Major', harmonic_major_scale, 0, key);
    write_notes(rel_minor_name + ' Harmonic Minor', harmonic_minor_scale, 0, key);
}



document.write('\n# Chord Names\n\n');

let s = '';
const chord_table = {
    'X':  [0, 4, 7],
    'Xm':  [0, 3, 7],
    'X5': [0, 7],
    'Xsus (Xsus4)': [0, 5, 7],
    'Xsus2': [0, 2, 7],
    'X° (Xdim)': [0, 3, 6],
    'X+ (Xaug)': [0, 4, 8],
    'X7': [0, 4, 7, 10],
    'Xmaj7, XM7': [0, 4, 7, 11],
    'Xm7': [0, 3, 7, 10],
    'Xadd9': [0, 2, 4, 7],
    'Xadd4 (Xadd11)': [0, 4, 5, 7],
    'X°7 (Xdim7)': [0, 3, 6, 9],
    'Xmaj6 (XM6)': [0, 4, 7, 9],
    'XmM7': [0, 3, 7, 11],
    'X9': [0, 2, 4, 7, 10],
    'Xm6': [0, 3, 7, 9, 10]
};

for (let root = 0; root < 12; ++root) {
    
    const root_name = note_name_array[root].trim();

    s += '## ' + root_name + '\n\n';
    
    for (const type in chord_table) {
        
        s += type.replaceAll('X', root_name) + '\n: `';
        
        const chord = chord_table[type];
        for (let note of chord) {
            s += note_name_array[(root + note) % note_name_array.length] + ' ';
        }
        s += '`\n\n';
    }
}

document.write(s);
