export default class HelpingHand {
  static hex2bytes (input) {
    let bytes = [];

    for(let i=0; i< input.length-1; i+=2){
      bytes.push(parseInt(input.substr(i, 2), 16));
    }

    return bytes;
  }
  static bytes2hex (input) {
    let hex = '';

    input.map(function (value) {
      hex += value.toString(16);
    });

    return hex;
  }
  static bytes2char (input) {
    let str = String.fromCharCode.apply(String, input);

    return str;
  }
  static base64_encode (input) {
    return window.btoa(input);
  }
  static base64_decode (input) {
    return window.atob(input);
  }
  // Based on same function on php
  static hex2bin (input) {
    return this.bytes2char(this.hex2bytes(input));
  }

  static hex_binops (input1, input2, ops) {
    input1 = this.hex2bytes(input1);
    input2 = this.hex2bytes(input2);

    if (input1.length !== input2.length) {
      return false;
    } else {
      let result = [];

      for (let i = 0; i < input1.length; i++) {
        result.push( eval("input1[i] "+ ops +" input2[i]") );
      }

      return this.bytes2hex(result);
    }
  }
}
