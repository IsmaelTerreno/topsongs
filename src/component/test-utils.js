import React from "react";
import { render, screen } from '@testing-library/react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../redux/reducers";
import { VIEW_TOP_ALBUMS, TOP_ALBUMS_FILTER} from '../redux/reducers/songs'

const initState = {
  albums:[],
  songs:[],
  filter:{
    fullTextSearch:'',
    type: TOP_ALBUMS_FILTER,
  },
  favorite:[],
  currentResult: [],
  view: VIEW_TOP_ALBUMS,
};

const renderWithState = (
  ui,
  { initialState, ...renderOptions } = {}
) => {
  const store = createStore(reducer, initialState);
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export {
  screen,
  renderWithState,
  initState
};