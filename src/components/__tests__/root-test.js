import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Root from '../root';

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toExist();
  });
});
