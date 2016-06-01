jest
  .unmock('../client/components/content')
    .unmock('fs')
    .unmock('path');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Content from '../client/components/content';

var shallowContent;
describe('Example Project', () => {

    it('should have an appropriate header', () => {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Content />);
        shallowContent = renderer.getRenderOutput();
        expect(shallowContent.props.children).toEqual(
            <h1>Example Project</h1>
        )
    });
});
