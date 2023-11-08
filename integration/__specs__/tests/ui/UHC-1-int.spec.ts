import { Mock } from '@Core/mock';
import { CartPage } from '@Components/cartPage/cartPage';
import { GetCartItemsMock } from '@Mocks/api/mockio/v2/id/get';
import { screen } from '@testing-library/react';

describe('UHC-1-int', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Add cart item', async () => {
        await cartPage.fulfill();
        const cartList = await cartPage.getCartList();

        reporter.startStep('‘Add New Cart Item’ modal is displayed.');
        const modalAddItem = await cartPage.openModalAddItem();
        expect(await cartPage.isModalVisible()).toBe(true);
        reporter.endStep();

        reporter.startStep('Fill all required fields & press Create');
        await modalAddItem.fillForm();
        await modalAddItem.clickCreate();
        expect(await cartPage.isModalVisible()).toBe(false);

        const addedItem = (await cartList.getCartItems())[0];
        expect(await addedItem.getCartItemName()).toStrictEqual('My first item');
        expect(await addedItem.getPriceForOne()).toStrictEqual(25);
        expect(await addedItem.getQuantity()).toStrictEqual(2);
        reporter.endStep();
        screen.debug();

        reporter.startStep('Delate and check that last added item is not on the page');
        await addedItem.deleteItem();
        const cartListAfterRemove = await cartList.getCartItems();
        expect(cartListAfterRemove.includes(addedItem)).toBe(false);
        reporter.endStep();
    });
});
