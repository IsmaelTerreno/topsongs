import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MusicCard from '../container/MusicCardContainer';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '40px',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCard: {
    padding: '0px',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const MusicGrid = ({musics}) => {
  const classes = useStyles();
  let delayEffectTime = 100;
  return (
    <div className={classes.root} data-testid="MusicGrid">
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        { musics && musics.map((music, idx) => {
          delayEffectTime += 150;
          return(
            <Grid item xs={6} xl={2} sm={3} lg={2} key={idx + music.title} >
                <Grow
                    in
                    style={{ transformOrigin: '0 0 0' }}
                    timeout={delayEffectTime} 
                >
                    <div className={classes.itemCard}>
                        <MusicCard music={music} />
                    </div>
                </Grow>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

MusicGrid.defaultProps = {
  musics: [],
};

MusicGrid.propTypes = {
  musics: PropTypes.array,
};

export default MusicGrid;