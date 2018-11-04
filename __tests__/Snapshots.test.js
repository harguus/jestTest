import 'react-native';
import React from 'react';
import Snapshot from '../views/Snapshots';

import renderer from 'react-test-renderer';

it('Não ha mudanças', () => {
    const snapshot = renderer.create(
        <Snapshot />
    ).toJSON();
    // cria um snap e testa mudanças
    expect(snapshot).toMatchSnapshot();
});