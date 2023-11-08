import { Component } from '@Core/component';

export class CartItem extends Component {
    static deleteItem() {
        throw new Error('Method not implemented.');
    }
    protected selectors = {
        cartItemName: 'h2',
        fullPrice: './/div[contains(@class, "fullprice")]',
        priceForOne: './/div[contains(@class, "price-for-one")]',
        addButton: './/button[text()="+"]',
        quantity: './/div[@data-testid="quantity-current"]',
        lessButton: '//button[text()="-"]',
        deleteButton: './/button[contains(@class, "cart-item__delete-btn")]',
    };

    public async getCartItemName(): Promise<string> {
        const [title] = await document.waitForQuerySelector(this.selectors.cartItemName);
        return title.textContent;
    }

    public async getQuantity(): Promise<number> {
        const [quantityElement] = await this.element.waitForXpath(this.selectors.quantity);
        return Number(quantityElement.textContent);
    }

    public async getPriceForAll(): Promise<number> {
        const [priceElement] = await this.element.waitForXpath(this.selectors.fullPrice);
        return Number(priceElement.textContent.replace('$', ''));
    }

    public async getPriceForOne(): Promise<number> {
        const priceForAll = await this.getPriceForAll();
        const quantity = await this.getQuantity();
        const priceForOne = priceForAll / quantity;
        return priceForOne;
    }

    public async addOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.addButton);
    }

    public async lessOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.lessButton);
    }

    public async deleteItem(): Promise<void> {
        await this.element.clickByXpath(this.selectors.deleteButton);
    }
}
