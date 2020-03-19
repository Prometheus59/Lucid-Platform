import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        background="grey"
        indicatorColor="primary"
        textColor="primary"
      >
        <Link to="/journal"><Tab label="Journal" /></Link>
        <Link to="/news"><Tab label="News" /></Link>
        <Link to="/resources"><Tab label="Resources" /></Link>
        <Link to="/community"><Tab label="Community" /></Link>
      </Tabs>
    </Paper>
  );
}