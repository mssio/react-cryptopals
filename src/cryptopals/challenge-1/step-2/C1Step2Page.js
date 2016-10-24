import React from 'react';
import HelpingHand from '../../../utils/helpingHand';
import { Form, Button } from 'semantic-ui-react';

class C1Step2Page extends React.Component {
  state = {
    input1: '1c0111001f010100061a024b53535009181c',
    input2: '686974207468652062756c6c277320657965',
    result: ''
  }

  calculate = (evt) => {
    console.log(this.refs.input1.value);
    console.log(this.refs.input2.value);

    this.setState({
      result: HelpingHand.hex_binops(
        this.refs.input1.value, this.refs.input2.value, '^'
      )
    });

    evt.preventDefault();
  }

  render () {
    return (
      <div>
        <h1>Challenge 1 Step 2</h1>
        <p>Are you ready?</p>
        <p>Look at <a href="https://cryptopals.com/sets/1/challenges/2" target="_blank">this page</a> to see the challenge.</p>
        <div>
          <Form onSubmit={this.calculate}>
            <Form.Field>
              <label>Input Hexadecimal 1</label>
              <input
                ref="input1"
                name="input1"
                placeholder="Hexadecimal"
                defaultValue={this.state.input1}
              />
            </Form.Field>
            <Form.Field>
              <label>Input Hexadecimal 2</label>
              <input
                ref="input2"
                name="input2"
                placeholder="ASCII Translated"
                defaultValue={this.state.input2}
              />
            </Form.Field>
            <Form.Field>
              <label>XOR Result</label>
              <input
                name="result"
                placeholder="Bytes Array"
                value={this.state.result}
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

export default C1Step2Page;
