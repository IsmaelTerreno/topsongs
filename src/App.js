import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from './TopBar';
import TabContent from './TabContent';
import AlbumGrid from './AlbumGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(180deg,#1e3264,#121212 40%)',
    paddingTop: '64px',
  },
}));

const App = ({ 
  topAlbums,
  onLoad,
}) => { 
  const classes = useStyles();
  useEffect(() => {
    onLoad();
  },[onLoad]);
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <TopBar />
        <TabContent />
        <AlbumGrid albums={topAlbums} />
      </div>
    </>
  );
}

App.defaultProps = {
  topAlbums: [],
};

App.propTypes = {
  topAlbums: PropTypes.array,
  topSongs: PropTypes.array,
  onLoad: PropTypes.func,
  onSearch: PropTypes.func,
};

export default App;
