import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid component', () => {
    const category = 'Warzone';

    test('should show loading in the beggining', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);

        expect(screen.findByText('Cargando...')).toBeTruthy();
        expect(screen.findByText(category)).toBeTruthy();
    });

    test('should show items when the gifs have been loaded', () => {
        const images = [
            {
                id: 'ABC',
                title: 'Messi',
                url: 'http://localhost/messi.jpg',
            },
            {
                id: 'DEF',
                title: 'Messi 1',
                url: 'http://localhost/messi1.jpg',
            },
        ];

        useFetchGifs.mockReturnValue({
            images,
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(images.length);
    });
});
