import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//importowanie z react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//importowanie komponentów z material-UI
import { Button, 
TextField, 
Paper,
Tab,
Tabs,
FormControl,
FormLabel,
RadioGroup,
Radio,
FormControlLabel,
InputLabel,
MenuItem,
Select,
Typography,
Grid,
Slider,
FormGroup,
FormHelperText,
BottomNavigation,
BottomNavigationAction,
AppBar,
Toolbar,
IconButton,
CircularProgress
} from '@material-ui/core';
 
import {  
VolumeDown,
VolumeUp
} from '@material-ui/icons';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';

  
export default function App() {
	
  return (
    <Router>
      <div>
	  <a href="/"> Strona główna</a>
        <nav>
          <ul>
		  
            <li>
              <Link to="/home">Pierwsza strona</Link>
            </li>
            <li>
              <Link to="/about">Druga strona</Link>
            </li>
            <li>
              <Link to="/users">Trzecia strona</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
			</Route>
          <Route path="/">
            <Glowne />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Glowne(){
	return <h1>Strona początkowa</h1>
}
function Home() {
  return (
  <div>
  <h2>Pierwsza strona </h2>
  <Button variant="contained" color="disable">Przycisk</Button>
  
  <form>
  <TextField id="standard-basic" label="Podstawowy" />
  <h1></h1>
  <TextField id="filled-basic" label="Wypełniony" variant="filled" />
  <h1></h1>
  <TextField id="outlined-basic" label="Ramka" variant="outlined" />
  <h1></h1>
 </form>  
  <Paper>
	<Tabs
   
		indicatorColor="primary"
		textColor="primary"
		centered
	>
    <Tab label="Jeden" />
    <Tab label="Dwa" />
    <Tab label="Trzy" />
	
  </Tabs>
  </Paper>
  </div>
 
  );
}


function About() {
  return (
  <div>
  
  <h2>About</h2>
  <FormControl component="fieldset">
  <FormLabel component="legend">Przyciski typu "Radio"</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" >
    <FormControlLabel value="female" control={<Radio />} label="Jeden" />
    <FormControlLabel value="male" control={<Radio />} label="Dwa" />
    <FormControlLabel value="other" control={<Radio />} label="Trzy" />
    
  </RadioGroup>
</FormControl>

    <h1></h1>
      
      <FormControl >
        <InputLabel id="demo-controlled-open-select-label">Opcje</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
        >
         
          <MenuItem >Pierwsza opcja</MenuItem>
          <MenuItem >Druga opcja</MenuItem>
          <MenuItem >Trzecia opcja</MenuItem>
        </Select>
      </FormControl>
	  
	 <h1></h1>
  
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
     
	 
	
  
    </div>
  );
}
  



function Users() {
  return (
  
  <div>
  <h2>Users</h2>
  
 
	
<BottomNavigation>
  <BottomNavigationAction label="Recents" value="Ostatnie" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" value="Ulubione" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" value="Najbliższe"  icon={<LocationOnIcon />} />
</BottomNavigation>

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" >
      Pasek nawigacyjny 
    </Typography>
  </Toolbar>
</AppBar>


<CircularProgress variant="determinate" value={25} />
<CircularProgress variant="determinate" value={50} />
<CircularProgress variant="determinate" value={75} />
<CircularProgress variant="determinate" value={100} />
<CircularProgress />
  </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
