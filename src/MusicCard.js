import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Snackbar
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    maxWidth: 170,
  },
  media: {
    height: 170,
  },
  title:{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: '137px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '10px'
  },
  cardContent:{
    height: '90px',
  },
  favorite: {
    marginLeft: '121px',
    marginTop: '6px',
    zIndex: 999,
    position: 'absolute',
  }
});

const FavoriteButton = ({music, onClick, isSavedAlready}) =>{
  const classes = useStyles();
  const [isSaved, setIsSaved] = React.useState(isSavedAlready);
  const handleClick = () => {
    setIsSaved(!isSaved);
  };
  return (
    <IconButton 
      onClick={()=>{
        handleClick();
        onClick(music);
      }} 
      aria-label="add to favorites" 
      className={classes.favorite}
      style={{
        color: (isSaved) ? '#ff0000bd' : '#fff900bd',
      }}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

FavoriteButton.propTypes = {
  music: PropTypes.object,
  onClick: PropTypes.func,
};

const MusicCard = ({ music, favorites, onClickFavorite }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const isSavedAlready = favorites.filter(f=> f.outsideLink === music.outsideLink).length > 0;
  const handleClick = () => {
      setOpen(true); 
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Card className={classes.root}>
        <FavoriteButton 
        isSavedAlready={isSavedAlready}
        onClick={()=>{
          handleClick();
          onClickFavorite(music);
        }}/>
        <CardActionArea onClick={()=>{ 
          window.open(music.outsideLink); 
        }}>
          <CardMedia
            className={classes.media}
            image={music.coveImage}
            title={music.title}
          />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography variant="inherit" gutterBottom className={classes.title} >
            {music.title}
          </Typography>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message= {(!isSavedAlready) ? "Removed from favorite" : "Saved to favorite"}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
}

MusicCard.defaultProps = {
  favorites: [],
};

MusicCard.propTypes = {
    music: PropTypes.object,
    onClickFavorite: PropTypes.func,
    favorites: PropTypes.array,
};
  

export default MusicCard;