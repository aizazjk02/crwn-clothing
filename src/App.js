import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect ,withRouter} from "react-router-dom";
import { ShopPage } from "./pages/shop/shop.component";
import checkoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import { SignInAndSignUp } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selector";
class App extends React.Component {
  unsubscribeFromAuth = null;

  // method to make sure that the user remains signed in
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else setCurrentUser(null);
    });
  }

  // method to clear the user data after sign out
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      //Needs the Switch wrapper to manage the route
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={ checkoutPage}/>
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/"/> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
