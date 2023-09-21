var consolelog = '# SERVER STARTED IN 00/00/00 - 00:00\n\n';

class Console {
    constructor() {
        consolelog = `# SERVER STARTED IN ${this.getDate()} - ${this.getTime()}\n\n`;
    }

    getTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    getDate() {
        return new Date().toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    sendMessage(type, message) {
        var time = this.getTime();
        if (message == null) { message = 'error in console :('; }
        consolelog = consolelog + '\n' + time + '[Server thread/' + type + '] ' + message;

        if (type == null) { type = 'INFO'; }
        if (type == 'INFO') { type = this.withColor(type, 'Bright') }
        if (type == 'DEBUG') { type = this.withColor(type, 'FgGreen') }
        if (type == 'WARN') { type = this.withColor(type, 'FgYellow') }
        if (type == 'ERROR') { type = this.withColor(type, 'FgRed') }

        var time2 = this.withColor(time, 'FgCyan');
        var thread = 'Server thread'; thread = this.withColor(thread, 'Underscore');

        console.log(`${time2} [${thread}/${type}] ${message}`);
    }

    withColor(txt, color) {
        const colorList = {
            Reset: '\x1b[0m',
            Bright: '\x1b[1m',
            Dim: '\x1b[2m',
            Underscore: '\x1b[4m',
            Blink: '\x1b[5m',
            Reverse: '\x1b[7m',
            Hidden: '\x1b[8m',

            FgBlack: '\x1b[30m',
            FgRed: '\x1b[31m',
            FgGreen: '\x1b[32m',
            FgYellow: '\x1b[33m',
            FgBlue: '\x1b[34m',
            FgMagenta: '\x1b[35m',
            FgCyan: '\x1b[36m',
            FgWhite: '\x1b[37m',

            BgBlack: '\x1b[40m',
            BgRed: '\x1b[41m',
            BgGreen: '\x1b[42m',
            BgYellow: '\x1b[43m',
            BgBlue: '\x1b[44m',
            BgMagenta: '\x1b[45m',
            BgCyan: '\x1b[46m',
            BgWhite: '\x1b[47m',
        }

        return colorList[color] + txt + '\x1b[0m';
    }
}

const ConsoleSender = new Console();

module.exports = ConsoleSender;