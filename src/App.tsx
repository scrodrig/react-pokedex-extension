import React from 'react';
import Home from './components/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" style={{
            marginRight: 2,
          }} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        Learn React pokedex!!!
        <Home />
      </header>
    </div>
  );
}

export default App;
