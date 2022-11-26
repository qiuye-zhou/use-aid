// @ts-nocheck
import { useMedia } from '.';

test('useMedia test', () => {
    expect(useMedia(820, 'max'));
    expect(useMedia(820, 'min'));
});
