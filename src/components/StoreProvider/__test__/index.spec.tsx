// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Under testing
import StoreProvider from '../index';

/**
 * @file index.spec.tsx
 * @author Daniel Mejia
 * @description Test file for Store provider container.
 */
describe('StoreProvider', () => {
  let component: ShallowWrapper;
  const children = jest.fn();

  beforeEach(() => {
    component = shallow(<StoreProvider>{children}</StoreProvider>);
  });

  it('render correctly', () => {
    expect(component.find(children)).toBeTruthy();
  });
});
