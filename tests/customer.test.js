import { sortSuggestedSpsForOrder } from '../lib/order';

describe('Orders', () => {
    describe('SP Suggestions', () => {
        test('Order is provided with correct SP suggestions', () => {
            // arrange
            const order = {};
            const serviceProviders = [];

            // act
            const sortedSpsForOrder = sortSuggestedSpsForOrder(order, serviceProviders);

            // assert
            expect(sortedSpsForOrder).toBe(serviceProviders);
        });
    });
});
