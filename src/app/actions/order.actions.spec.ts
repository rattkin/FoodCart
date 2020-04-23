import * as fromOrder from './order.actions';

describe('loadOrders', () => {
  it('should return an action', () => {
    expect(fromOrder.loadOrders().type).toBe('[Order] Load Orders');
  });
});
