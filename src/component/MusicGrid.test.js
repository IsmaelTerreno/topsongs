import { renderWithState, initState, screen, fireEvent } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import MusicGrid from './MusicGrid';

describe('MusicGrid component', () => {
    const musicsMock = [
        {
            title: "Test music",
            coveImage: "www.test.com/coveImage",
            outsideLink: "www.test.com",
        },
        {
            title: "Test music 2",
            coveImage: "www.test2.com/coveImage2",
            outsideLink: "www.test2.com",
        },
        {
            title: "Test music 3",
            coveImage: "www.test3.com/coveImage3",
            outsideLink: "www.test3.com",
        }
    ] ;

    test('Should have a MusicGrid component.', () => {
      renderWithState(
        <MusicGrid music={musicsMock} />,
        initState
      );
      expect(screen.getByTestId('MusicGrid')).toBeInTheDocument();
    });

    test('Should have a 3 MusicCard components.', () => {
        renderWithState(
            <MusicGrid musics={musicsMock} />,
            initState
        );
        expect(screen.getAllByTestId('MusicCard').length).toBe(3);
    });

    test('Should have a Grid container to order components.', () => {
        renderWithState(
            <MusicGrid musics={musicsMock} />,
            initState
        );
        expect(screen.getByTestId('GridContainer')).toBeInTheDocument();
    });
});