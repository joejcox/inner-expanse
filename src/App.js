import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignInAndUp from "./pages/sign-in-up/sign-in-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.scss";

//Pages
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shoppage.component.jsx";

// Components
import SiteHeader from "./components/site-header/site-header.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

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
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  userSignOut = () => {
    auth.signOut();
    this.setState({
      currentUser: null,
    });
  };

  render() {
    return (
      <div className="App">
        <SiteHeader
          signout={() => this.userSignOut()}
          user={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
