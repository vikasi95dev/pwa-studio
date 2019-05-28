import React from 'react';
import ShallowRenderer from 'react-test-renderer/Shallow';

import CartOptions from '../cartOptions';

const renderer = new ShallowRenderer();

test('it renders correctly', () => {
    const props = {
        cartItem: {
            item_id: 99,
            name: 'cartItem name',
            price: 99,
            qty: 99
        },
        configItem: {
            __typename: 'simple'
        },
        endEditItem: jest.fn(),
        updateCart: jest.fn()
    };

    const tree = renderer.render(<CartOptions {...props} />);

    expect(tree).toMatchSnapshot();
});
