import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AlbumCard from './AlbumCard';
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

const AlbumGrid = ({albums}) => {
  const classes = useStyles();
  let delayEffectTime = 100;
  return (
    <div className={classes.root}>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {albums.map((album, idx) => {
          delayEffectTime += 150;
          return(
            <Grid item xs={6} xl={2} sm={3} lg={2} key={idx + album.title} >
                <Grow
                    in
                    style={{ transformOrigin: '0 0 0' }}
                    timeout={delayEffectTime} 
                >
                    <div className={classes.itemCard}>
                        <AlbumCard 
                            title={album.title}
                            image={album.coveImage} 
                        />
                    </div>
                </Grow>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};


export default AlbumGrid;