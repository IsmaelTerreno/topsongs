import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { mockData } from './api';
import AlbumGrid from './AlbumGrid';

const digestAlbumsData = (apiData) => {
  return apiData.feed.entry.map((album) => {
    return{
      title: album.title.label,
      coveImage: album['im:image'].filter(itemImg => itemImg.attributes.height === "170")[0].label
    };
  });
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(180deg,#1e3264,#121212 40%)',
  },
}));

const App = ({ albums }) => { 
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AlbumGrid albums={albums} />
      </div>
    </>
  );
}

App.defaultProps = {
  albums: digestAlbumsData(mockData),
};

App.propTypes = {
  albums: PropTypes.array,
};

export default App;
