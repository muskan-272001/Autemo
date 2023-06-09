import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Landing from './components/Landing/Landing';
import LevelScreen from './components/LevelScreen/LevelScreen';
import Credits from './components/Credits/Credits';
import Level1 from './components/Levels/Level1/Level1';
import Level2 from './components/Levels/Level2/Level2';
import Level3 from './components/Levels/Level3/Level3';
import UploadQuestion from './containers/UploadQuestion/UploadQuestion';
import FaceExpression from './components/FaceExpression/FaceExpression';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App" style={{ height: '100%' }}>
        <BrowserRouter>
          <div className="ToolbarSideDrawer">
            <Toolbar show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </div>

          <main className="Main" style={{ height: '100%' }}>
            <Switch>
              <Route path="/levels" exact component={LevelScreen} />
              <Route path="/level1" exact component={Level1} />
              <Route path="/level2" exact component={Level2} />
              <Route path="/level3" exact component={Level3} />
              <Route path="/upload" exact component={UploadQuestion} />
              <Route path="/camera" exact component={FaceExpression} />
              <Route path="/credits" exact component={Credits} />
              <Route path="/" component={Landing} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
