import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('Testing the GifExpertApp component', () => {
    test('should have one category in the beggining', () => {
        render(<GifExpertApp />);

        const cardGridElements = screen.getAllByLabelText('card-grid');
        expect(cardGridElements.length).toBe(1);
    });
});
