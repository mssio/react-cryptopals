import React from 'react';
import HelpingHand from '../../../utils/helpingHand';
import { Form, Button } from 'semantic-ui-react';

class C1Step1Page extends React.Component {
  state = {
    inputStr: '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d',
    bytesArr: [],
    asciiRead: '',
    base64Encoded: '',
  }

  getBytesArray = (inputStr) => HelpingHand.hex2bytes(inputStr)

  getAsciiRead = (bytesArr) => HelpingHand.bytes2char(bytesArr)

  getBase64Encoded = (asciiRead) => HelpingHand.base64_encode(asciiRead);

  calculate = (evt) => {
    const inputStr = this.refs.input.value;
    const bytesArr = this.getBytesArray(inputStr);
    const asciiRead = HelpingHand.hex2bin(inputStr);
    const base64Encoded = this.getBase64Encoded(asciiRead);

    this.setState({
      inputStr: inputStr,
      bytesArr: bytesArr,
      asciiRead: asciiRead,
      base64Encoded: base64Encoded
    });

    evt.preventDefault();
  }

  render () {
    return (
      <div>
        <h1>Challenge 1 Step 1</h1>
        <p>Are you ready?</p>
        <p>Look at <a href="https://cryptopals.com/sets/1/challenges/1" target="_blank">this page</a> to see the challenge.</p>
        <div>
          <Form onSubmit={this.calculate}>
            <Form.Field>
              <label>Input Hexadecimal</label>
              <input
                ref="input"
                name="input"
                placeholder="Hexadecimal"
                defaultValue={this.state.inputStr}
              />
            </Form.Field>
            <Form.TextArea
              label="Bytes Array"
              name="bytes"
              placeholder="Bytes Array"
              value={this.state.bytesArr.toString()}
              readOnly
            />
            <Form.Field>
              <label>ASCII Translated</label>
              <input
                name="ascii"
                placeholder="ASCII Translated"
                value={this.state.asciiRead}
                readOnly
              />
            </Form.Field>
            <Form.Field>
              <label>Base64 Encoded</label>
              <input
                name="input"
                placeholder="Bytes Array"
                value={this.state.base64Encoded}
                readOnly
              />
            </Form.Field>

            <Button primary type="submit">Calculate</Button>
          </Form>
        </div>
        <hr />
      </div>
    );
  }
}

export default C1Step1Page;
