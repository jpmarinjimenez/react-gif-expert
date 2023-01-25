import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Testing useFetchGifs Hook', () => {
    test('should return the initial status', () => {
        const { result } = renderHook(() => useFetchGifs('Warzone'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of images and isLoading should be false', async () => {
        const { result } = renderHook(() => useFetchGifs('Warzone'));
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
