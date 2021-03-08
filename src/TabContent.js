import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Tab,
  Tabs,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tabs: {
    background:'#121212',
  },
  tab: {
    color:'#fff',
  }
}));

const TabContent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        className={classes.tabs}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Top Albums" className={classes.tab} />
        <Tab label="Top Songs" className={classes.tab} />
        <Tab label="Favorite" className={classes.tab} />
      </Tabs>
    </Paper>
  );
};

export default TabContent;