import React from 'react';
import HelpingHand from '../../../utils/helpingHand';
import { Form, Button } from 'semantic-ui-react';

class C1Step3Page extends React.Component {
  state = {
    inputHex: '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
    resultKey: '',
    resultText: ''
  };

  calculate = (evt) => {
    const formula = HelpingHand.stringCharCount(this.refs.training_article.value);
    const inputHex = this.refs.inputHex.value;
    const result = HelpingHand.xorBruteForce(inputHex, formula);

    this.setState({
      resultKey: result.key,
      resultText: result.text
    });

    evt.preventDefault();
  }

  render () {
    const sampleTrainingArticle = require("raw!./v-for-vendetta.txt");

    return (
      <div>
        <h1>Challenge 1 Step 3</h1>
        <p>Are you ready?</p>
        <p>Look at <a href="https://cryptopals.com/sets/1/challenges/3" target="_blank">this page</a> to see the challenge.</p>
        <div>
          <Form onSubmit={this.calculate}>
            <Form.Field>
              <label>Training Article</label>
              <textarea
                ref="training_article"
                label="Training Article"
                name="train"
                placeholder="Training article"
                defaultValue={sampleTrainingArticle}
              />
            </Form.Field>
            <Form.Field>
              <label>Input Hexadecimal</label>
              <input
                ref="inputHex"
                name="inputHex"
                placeholder="Input Hexadecimal"
                defaultValue={this.state.inputHex}
              />
            </Form.Field>
            <Form.Field>
              <label>Result Key</label>
              <input
                name="resultKey"
                placeholder="Result Key"
                value={this.state.resultKey}
                readOnly
              />
            </Form.Field>
            <Form.Field>
              <label>Result Text</label>
              <input
                name="resultText"
                placeholder="Result Text"
                value={this.state.resultText}
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

export default C1Step3Page;
