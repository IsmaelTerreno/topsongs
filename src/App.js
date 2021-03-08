import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from './containers/TopBarContainer';
import TabContent from './containers/TabContent';
import MusicGrid from './MusicGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(180deg,#1e3264,#121212 40%)',
    paddingTop: '64px',
  },
}));

const App = ({ 
  musicResult,
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
        <MusicGrid musics={musicResult} />
      </div>
    </>
  );
}

App.defaultProps = {
  musicResult: [],
};

App.propTypes = {
  musicResult: PropTypes.array,
  onLoad: PropTypes.func,
};

export default App;
