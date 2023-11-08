import { Component } from '@Core/component';
import { fireEvent } from '@testing-library/react';

export class ModalAddItem extends Component {
    protected selectors = {
        modalTitle: 'h2',
        name: '//input[contains(@data-testid, "input-name")]',
        price: '//input[contains(@data-testid, "input-price")]',
        quantity: '//input[contains(@data-testid, "input-quantity")]',
        createButton: '//button[text()="Create"]',
        modalCloseButton: '//button[contains(@class, "moda")]',
    };

    public async fillForm(): Promise<void> {
        const [inputName] = await this.element.waitForXpath(this.selectors.name);
        fireEvent.change(inputName, { target: { value: 'My first item' } });

        const [inputPrice] = await this.element.waitForXpath(this.selectors.price);
        fireEvent.change(inputPrice, { target: { value: 25 } });

        const [inputQuantity] = await this.element.waitForXpath(this.selectors.quantity);
        fireEvent.change(inputQuantity, { target: { value: 2 } });
    }

    public async clickCreate(): Promise<void> {
        const [create] = await this.element.waitForXpath(this.selectors.createButton);
        fireEvent.click(create);
    }
}
