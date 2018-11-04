import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Renderizado corretamente', () => {
  const tree = renderer.create(<App/>);
  expect(renderer).toBeTruthy();
});