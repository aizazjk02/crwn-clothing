import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUp } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();

    // State to store the user info
    this.state = {
      currentUser: null,
    };

    console.log(this.state);
  }

  unsubscribeFromAuth = null;

  // method to make sure that the user remains signed in
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          },() => console.log(this.state));
        });
      } else this.setState({ currentUser: userAuth });
    });
  }

  // method to clear the user data after sign out
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      //Needs the Switch wrapper to manage the route
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
