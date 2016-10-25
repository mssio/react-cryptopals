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

  static byte_binops (input1, input2, ops) {
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
  static hex_binops (input1, input2, ops) {
    return this.byte_binops (
      this.hex2bytes(input1),
      this.hex2bytes(input2),
      ops
    );
  }

  static stringCharCount (input) {
    let result = {};

    input =  input.split('');
    input.map(function (value) {
      value = value.toLowerCase();
      let value_asc = value.charCodeAt(0);

      if (result.hasOwnProperty(value)) {
        result[value]++;
      } else if (value_asc >= 97 && value_asc <= 122) {
        result[value] = 1;
      }
    });

    return result;
  }
  static stringCharCompare (input, compareFormula) {
    input = this.stringCharCount(input);

    let result = 0;

    // This formula is not working > . <
    // Object.keys(input).map(function (key, value) {
    //   if (compareFormula.hasOwnProperty(key)) {
    //     result += Math.pow((compareFormula[key] - value), 2);
    //   }
    // });

    // return Math.round(Math.sqrt(result));

    Object.keys(input).map(function (key) {
      if (compareFormula.hasOwnProperty(key)) {
        result += compareFormula[key];
      }
    });

    return result;
  }
  static xorBruteForce (input, compareFormula) {
    input = this.hex2bytes(input);

    let keys = [];
    let sentences = [];
    let scores = [];

    for (let i = 48; i <= 122; i++) {
      let xorKey = [];
      for (let j = 0; j < input.length; j++) {
        xorKey.push(i);
      }

      let sentence = this.hex2bin(this.byte_binops(input, xorKey, '^'));
      let score = this.stringCharCompare(sentence, compareFormula);

      keys.push(i);
      sentences.push(sentence);
      scores.push(score);
    }

    const maxScore = Math.max.apply(null, scores);
    const maxKey = scores.indexOf(maxScore);

    return {
      key: String.fromCharCode(keys[maxKey]),
      text: sentences[maxKey]
    };
  }
}
