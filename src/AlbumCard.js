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
  },
  cardContent:{
    height: '90px',
  }
});

const AlbumCard = ({ image, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle" gutterBottom className={classes.title} >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

AlbumCard.defaultProps = {
};

AlbumCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
};
  

export default AlbumCard;