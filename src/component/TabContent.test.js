import { renderWithState, initState, screen, fireEvent } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import TabContent from './TabContent';

describe('TabContent component', () => {
    
    test('Should have a TabContent component.', () => {
      const onClickTopAlbumsMock = jest.fn(() => []);
      const onClickTopSongsMock = jest.fn(() => []);
      const onClickFavoriteMock = jest.fn(() => []);
      renderWithState(
        <TabContent 
            onClickTopAlbums={onClickTopAlbumsMock}
            onClickTopSongs={onClickTopSongsMock}
            onClickFavorite={onClickFavoriteMock}
        />,
        initState
      );
      expect(screen.getByTestId('TabContent')).toBeInTheDocument();
    });

    test('Should call the onClickTopAlbums when click on the top albums tab.', () => {
        const onClickTopAlbumsMock = jest.fn(() => []);
        const onClickTopSongsMock = jest.fn(() => []);
        const onClickFavoriteMock = jest.fn(() => []);
        renderWithState(
          <TabContent 
              onClickTopAlbums={onClickTopAlbumsMock}
              onClickTopSongs={onClickTopSongsMock}
              onClickFavorite={onClickFavoriteMock}
          />,
          initState
        );
        const TopAlbumsTab = screen.getByTestId('TopAlbumsTab');
        fireEvent.click(TopAlbumsTab);
        expect(onClickTopAlbumsMock.mock.calls.length).toBe(1);
      });

      test('Should call the onClickTopSongs when click on the top songs tab.', () => {
        const onClickTopAlbumsMock = jest.fn(() => []);
        const onClickTopSongsMock = jest.fn(() => []);
        const onClickFavoriteMock = jest.fn(() => []);
        renderWithState(
          <TabContent 
              onClickTopAlbums={onClickTopAlbumsMock}
              onClickTopSongs={onClickTopSongsMock}
              onClickFavorite={onClickFavoriteMock}
          />,
          initState
        );
        const TopSongsTab = screen.getByTestId('TopSongsTab');
        fireEvent.click(TopSongsTab);
        expect(onClickTopSongsMock.mock.calls.length).toBe(1);
      });

      test('Should call the onClickFavorite when click on the top favorite tab.', () => {
        const onClickTopAlbumsMock = jest.fn(() => []);
        const onClickTopSongsMock = jest.fn(() => []);
        const onClickFavoriteMock = jest.fn(() => []);
        renderWithState(
          <TabContent 
              onClickTopAlbums={onClickTopAlbumsMock}
              onClickTopSongs={onClickTopSongsMock}
              onClickFavorite={onClickFavoriteMock}
          />,
          initState
        );
        const FavoriteTab = screen.getByTestId('FavoriteTab');
        fireEvent.click(FavoriteTab);
        expect(onClickFavoriteMock.mock.calls.length).toBe(1);
      });
});