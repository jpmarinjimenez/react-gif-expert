import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Testing GifItem component', () => {
    const title = 'Testing GifItem';
    const url =
        'https://media2.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-downsized-medium.gif?cid=96343e7asjat8zr3wcx7x1vcdj1u8iiann5m9mpsgav7m0rm&rid=giphy-downsized-medium.gif&ct=g';

    test('should match the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the right url and alt', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should render the title as text', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
