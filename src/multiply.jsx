export function multiply(a, b) {
    return a * b;
};

/**
 * @class
 * An awesome script
 */
export class Greeter {
    constructor(name = 'Dear Coder', text = 'hi there') {
        this.name = name
        this.text = text
    }
    get message() {
        return `${this.text} ${this.name}!`
    }
    set message(text) {
        this.text = text + "coucou"
    }
};