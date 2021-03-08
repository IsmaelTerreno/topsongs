import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 170,
    height: 260,
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
    fontSize: '12px'
  },
  cardContent:{
    height: '90px',
  }
});

const MusicCard = ({ image, title, outsideLink }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={()=>{ window.open(outsideLink); }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="inherit" gutterBottom className={classes.title} >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MusicCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    outsideLink: PropTypes.string,
};
  

export default MusicCard;