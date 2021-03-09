import { renderWithState, initState, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App component', () => {
  
  test('Should call onLoad one time.', () => {
    const onLoadMock = jest.fn(() => []);
    renderWithState(
      <App onLoad={onLoadMock}/>,
      initState
    );
    expect(onLoadMock.mock.calls.length).toBe(1);
  });

  test('Should have a TopBar component.', () => {
    const onLoadMock = jest.fn(() => []);
    renderWithState(
      <App onLoad={onLoadMock}/>,
      initState
    );
    expect(screen.getByTestId('TopBar')).toBeInTheDocument();
  });

  test('Should have a TabContent component.', () => {
    const onLoadMock = jest.fn(() => []);
    renderWithState(
      <App onLoad={onLoadMock}/>,
      initState
    );
    expect(screen.getByTestId('TabContent')).toBeInTheDocument();
  });

  test('Should have a MusicGrid component.', () => {
    const onLoadMock = jest.fn(() => []);
    renderWithState(
      <App onLoad={onLoadMock}/>,
      initState
    );
    expect(screen.getByTestId('MusicGrid')).toBeInTheDocument();
  });
});