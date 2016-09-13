import React from 'react';
import renderer from 'react-test-renderer';
import Query from '../Query';
import OrderBy from '../OrderBy';

describe('OrderBy', () => {
  it('should work', () => {
    const component = renderer.create(
      <Query>
        <OrderBy>
          LastName
        </OrderBy>
      </Query>
    );
    console.log(component.toJSON())
  });
});
