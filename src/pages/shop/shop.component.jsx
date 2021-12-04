import React from "react";
import { Route } from "react-router";
// import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Switch } from "react-router";
const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Switch>
        <Route path={`${match.path}`} component={CollectionOverview} />
      </Switch>
    </div>
  );
};

export default ShopPage;
