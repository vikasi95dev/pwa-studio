import React from 'react';
import ShallowRenderer from 'react-test-renderer/Shallow';

import Section from '../section';

const renderer = new ShallowRenderer();

test('it renders an icon when passed a valid one', () => {
    const props = {
        icon: 'Heart',
        text: 'Unit Test Text'
    };

    const tree = renderer.render(<Section {...props} />);

    expect(tree).toMatchSnapshot();
});

test('it does not render an icon when passed an invalid one', () => {
    const props = {
        icon: 'INVALID',
        text: 'Unit Test Text'
    };

    const tree = renderer.render(<Section {...props} />);

    expect(tree).toMatchSnapshot();
});

test('it does not render an icon when not passed one', () => {
    const props = {
        /* icon property purposefully not supplied. */
        text: 'Unit Test Text'
    };

    const tree = renderer.render(<Section {...props} />);

    expect(tree).toMatchSnapshot();
});

test('it overrides icon attributes when given them', () => {
    const props = {
        icon: 'Heart',
        iconAttributes: {
            color: 'black',
            height: '25px',
            width: '50px'
        },
        text: 'Unit Test Text'
    };

    const tree = renderer.render(<Section {...props} />);

    expect(tree).toMatchSnapshot();
});
