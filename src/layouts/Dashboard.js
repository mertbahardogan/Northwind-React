import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"></ToastContainer>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductList}></Route>
            <Route exact path="/products" component={ProductList}></Route>
            <Route path="/products/:name" component={ProductDetail}></Route>
            <Route path="/cart" component={CartDetail}></Route>
            <Route path="/product/add" component={ProductAdd}></Route>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
