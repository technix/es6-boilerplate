import $ from 'jquery';

import './style.css';

class HelloWorld {
    constructor(data) {
        this.prop1 = data;
    }

    line1() {
        this.constructor.append(this.prop1.join(';'));
    }

    static append(string) {
        $('#output').text(string);
    }
}

const hello = new HelloWorld(['test', 'data']);

hello.line1();
