const el = document.getElementById('typing');
const cursor = document.querySelector('.cursor');

if (el && cursor) {
    const full = el.dataset.text;
    const BASE = 40;
    let i = 0;

    (function type() {
        if (i >= full.length) {
            cursor.classList.add('done');
            return;
        }
        el.textContent += full[i++];
        const ch = full[i - 1];
        const pause = /[，。；：！？、]/.test(ch) ? BASE * 5 : BASE;
        setTimeout(type, pause);
    })();
} else {
    console.warn('找不到 #typing 或 .cursor');
}