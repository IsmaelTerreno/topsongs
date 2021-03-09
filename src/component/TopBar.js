import React from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import LogoImg from '../img/icon-app.png'
import SearchIcon from '@material-ui/icons/Search';
import {
    Dialog, 
    Hidden, 
    InputBase, 
    IconButton, 
    Typography, 
    Toolbar, 
    AppBar, 
    Avatar
} from '@material-ui/core';
import { MAIN_APP_NAME } from '../config';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    topBar:{
        background: '#1c202b',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const TopBar = ({onSearch}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const SearchInput = () => (
    <InputBase
        data-testid="SearchInput"
        placeholder="Search…"
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e)=>{
            onSearch(e.target.value);
        }}
        />
  );
  return (
    <div id="TopBar" className={classes.root} data-testid="TopBar">
      <AppBar position="fixed">
        <Toolbar className={classes.topBar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar data-testid="Avatar" alt={MAIN_APP_NAME} src={LogoImg} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { MAIN_APP_NAME }
          </Typography>
            <Hidden only={['xs']} data-testid="Hidden1" >
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <SearchInput />
                </div>
            </Hidden>
            <Hidden only={['xl', 'lg', 'sm', 'md']}>
                <IconButton aria-label="search" color="inherit" onClick={handleClickOpen} >
                    <SearchIcon />
                </IconButton>
                <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
                    <SearchInput />
                </Dialog>
            </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {
    onSearch: PropTypes.func,
};

export default TopBar;
