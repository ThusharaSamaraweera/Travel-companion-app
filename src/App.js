import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} sm={6}>
          <List />
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
