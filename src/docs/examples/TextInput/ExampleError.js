import React from 'react';
import TextInput from '../../../components/TextInput/TextInput';

export default class ExampleOptional extends React.Component {
  render() {
    return <TextInput
      htmlId='example-optional'
      label='First Name'
      name='firstname'
      error='First name is required'
      onchange={() => {}}
    />
  }
}