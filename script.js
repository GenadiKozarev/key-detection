let pressed = [];
const secretCode = 'genadi';

window.addEventListener('keyup', e => {
    pressed.push(e.key);
    // If the pressed keys array exceeds the length of the secret code,
    // remove the first elements to keep the length of the array the same as the secret code length
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    pressed.join('') === secretCode && cornify_add();
});
