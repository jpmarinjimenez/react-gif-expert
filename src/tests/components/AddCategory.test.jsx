import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Testing the AddCategory component', () => {
    const newInputValue = 'Warzone';

    test('should change the input value', () => {
        render(<AddCategory onNewCategory={() => {}} />);

        const inputEl = screen.getByRole('textbox');

        fireEvent.input(inputEl, { target: { value: newInputValue } });

        expect(inputEl.value).toBe(newInputValue);
        // screen.debug();
    });

    test('should call onNewCategory if input has any value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const inputEl = screen.getByRole('textbox');
        const formEl = screen.getByRole('form');

        fireEvent.input(inputEl, { target: { value: newInputValue } });
        fireEvent.submit(formEl);

        expect(inputEl.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(newInputValue);
    });

    test('should not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const inputEl = screen.getByRole('textbox');
        const formEl = screen.getByRole('form');

        fireEvent.input(inputEl, { target: { value: '' } });
        fireEvent.submit(formEl);

        // expect(onNewCategory).toBeCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});
