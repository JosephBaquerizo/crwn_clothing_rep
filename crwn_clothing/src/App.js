import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignOutPage from './pages/sign-in-out/sign-in-out.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.jsx';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  unsubscribeFromAuth = null;

  // sign in
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // Método para estar al tanto de qué usuario se encuentra conectado
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  /*
    El componente Redirect se emplea para que el usuario no ingrese a la página de signIn
    cuando ya se encuentre logueado
  */

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact 
                 path='/signin' 
                 render={() => this.props.currentUser ? 
                               (<Redirect to='/'/>) 
                               : 
                               (<SignInAndSignOutPage/>)
                        }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
