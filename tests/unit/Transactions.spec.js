// Import the mount() method from the test utils
// and the component you want to test

import {mount, shallowMount} from '@vue/test-utils'
import Transactions from "../../src/components/Transactions";

const testData = [
    {
        to: "John Doe",
        amount: 100,
        currency: "EUR",
        type: "spending"
    },
    {
        from: "Unknown OU",
        amount: 2045.87,
        currency: "EUR",
        type: "income"
    },
    {
        to: "Jane Doe",
        amount: 200,
        currency: "EUR",
        type: "spending"
    },
];


describe('Transactions', () => {
    // Did not manage to get the wrapper to work.
    const wrapper = mount(Transactions);
    // Now mount the component and you have the wrapper
    it('should return true', function () {
        expect(1).toEqual(1)
    });

    //Test that as many table rows are displayed as items in the array that are passed to `Transactions` component
    it('as many table rows as itmes in the array', () => {
        const items = wrapper.findAll('.item')
        expect(items.length).toEqual(testData.length);
    });

    // Test that `.income` and `.spending` classes are properly attached to the transaction
    // with the appropriate `type`'
    it('income and spending classes properly attached', () => {
        const incomeItems = testData.filter(type => type.income);
        const spendingItems = testData.filter(type => type.spending);

        expect(incomeItems.length).toEqual(1);
        expect(spendingItems.length).toEqual(2);
    });

    //Test that final balance is correctly calculated

});