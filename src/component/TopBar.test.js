import { renderWithState, initState, screen, fireEvent } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import TopBar from './TopBar';

describe('TabContent component', () => {
    
    test('Should have a TopBar component.', () => {
      const onSearchMock = jest.fn(() => []);
      renderWithState(
        <TopBar onSearch={onSearchMock} />,
        initState
      );
      expect(screen.getByTestId('TopBar')).toBeInTheDocument();
    });

    test('Should have a Avatar component.', () => {
        const onSearchMock = jest.fn(() => []);
        renderWithState(
            <TopBar onSearch={onSearchMock} />,
            initState
        );
        expect(screen.getByTestId('Avatar')).toBeInTheDocument();
    });
});