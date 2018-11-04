import 'react-native';
import React from 'react';
import TesteUnitario from '../views/TesteUnitario';
import renderer from 'react-test-renderer';

it("Passou", () => {
    const Teste = renderer.create(<TesteUnitario />).getInstance();
    expect(Teste.somar(4,4)).toEqual(8);
})