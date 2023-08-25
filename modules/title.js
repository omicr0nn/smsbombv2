function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / FastBomber v1.0 - github.com/omicr0n";
    } else {
        process.stdout.write('\x1b]2;' + x + " / Sms Bomber v2.0 - github.com/omicr0nn" + '\x1b\x5c');
    }
}

module.exports = console_title;