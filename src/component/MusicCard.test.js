import { renderWithState, initState, screen, fireEvent } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import MusicCard from './MusicCard';

describe('MusicCard component', () => {
    const musicMock = {
        title: "Test music",
        coveImage: "www.test.com/coveImage",
        outsideLink: "www.test.com",
    };

    test('Should have a FavoriteButton component.', () => {
      renderWithState(
        <MusicCard music={musicMock} />,
        initState
      );
      expect(screen.getByTestId('FavoriteButton')).toBeInTheDocument();
    });

    test('Should call onClickFavorite when click on FavoriteButton component.', () => {
        const onClickFavoriteMock = jest.fn(() => {});
        renderWithState(
            <MusicCard music={musicMock}  onClickFavorite={onClickFavoriteMock}/>,
            initState
        );
        const FavoriteButton = screen.getByTestId('FavoriteButton');
        fireEvent.click(FavoriteButton);
        expect(onClickFavoriteMock.mock.calls.length).toBe(1);
    });

    test('Should show a message when add a favorite when click on FavoriteButton component.', () => {
        const onClickFavoriteMock = jest.fn(() => {});
        const favorites = [musicMock];
        renderWithState(
            <MusicCard music={musicMock}  onClickFavorite={onClickFavoriteMock} favorites={favorites}/>,
            initState
        );
        const FavoriteButton = screen.getByTestId('FavoriteButton');
        fireEvent.click(FavoriteButton);
        const Snackbar = screen.getByTestId('Snackbar');
        expect(Snackbar).toHaveTextContent('Saved to favorite');
    });
    
    test('Should show a message when remove a favorite when click on FavoriteButton component.', () => {
        const onClickFavoriteMock = jest.fn(() => {});
        const favorites = [];
        renderWithState(
            <MusicCard music={musicMock}  onClickFavorite={onClickFavoriteMock} favorites={favorites}/>,
            initState
        );
        const FavoriteButton = screen.getByTestId('FavoriteButton');
        fireEvent.click(FavoriteButton);
        const Snackbar = screen.getByTestId('Snackbar');
        expect(Snackbar).toHaveTextContent('Removed from favorite');
    });
    
    test('Should have a CoverImage component.', () => {
        renderWithState(
            <MusicCard music={musicMock} />,
            initState
        );
        expect(screen.getByTestId('CoverImage')).toBeInTheDocument();
    });

    test('Should have a title music title component.', () => {
        renderWithState(
            <MusicCard music={musicMock} />,
            initState
        );
        expect(screen.getByTestId('titleMusic')).toBeInTheDocument();
    });

    test('Should show a red heart color when click on favorite button component.', () => {
        const onClickFavoriteMock = jest.fn(() => {});
        const favorites = [];
        renderWithState(
            <MusicCard music={musicMock}  onClickFavorite={onClickFavoriteMock} favorites={favorites}/>,
            initState
        );
        const FavoriteButton = screen.getByTestId('FavoriteButton');
        fireEvent.click(FavoriteButton);
        expect(FavoriteButton).toHaveStyle({
            color:'#ff0000bd'
        });
    });

    test('Should show a yellow heart color when click to remove on favorite button component.', () => {
        const onClickFavoriteMock = jest.fn(() => {});
        const favorites = [musicMock];
        renderWithState(
            <MusicCard music={musicMock}  onClickFavorite={onClickFavoriteMock} favorites={favorites}/>,
            initState
        );
        const FavoriteButton = screen.getByTestId('FavoriteButton');
        fireEvent.click(FavoriteButton);
        expect(FavoriteButton).toHaveStyle({
            color:'#fff900bd'
        });
    });

  });