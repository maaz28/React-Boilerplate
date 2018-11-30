import React from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import history from './history';
import Login from '../components/login'

const BasicRouting = (props) => {
  return (
    <Router history={history}>
    <div>
      {((props.isLogin)) ? (
          null
//   <Grid>
//   <Grid.Row>
//     <Grid.Column width={4}>
//       <Route path = '/' component={SidebarComponent}/>        
//     </Grid.Column>
//     <Grid.Column width={10}>
//       <Route exact path="/home" component={Home} />
//       <Route exact path="/add" component={Add} />
//       <Route exact path="/display" component={DisplayAllFeaturedPlaces} />
//       <Route exact path="/edit" component={Edit} />
//       <Route exact path="/categoryForQR" component={CategoryForQR} />
//     </Grid.Column>
//   </Grid.Row>
//   </Grid>
      ) : (
        <Route exact path="/" component={Login} />
      )}
  
    </div>
    </Router>
  )
}


function mapStateToProp(state) {
  return ({
    isLogin : state.root.isLogin
  })
}

export default connect(mapStateToProp, null)(BasicRouting);