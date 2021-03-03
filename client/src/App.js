import Home from "./pages/Home";
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query';
import Result from "./pages/Result";
import Product from "./pages/Product";
import {loadStripe} from '@stripe/stripe-js';
import { CartProvider } from "use-shopping-cart";
import {Toaster} from 'react-hot-toast';
import Navbar from "./components/Navbar";


const queryClient = new QueryClient();

const stripePromise = loadStripe('pk_test_51IQkAPA74VPmdiQEYANYUSHAGYpGzebZ4QPFaSlBV0JDtOTeocq6C0AVWs6kKdj7SM5nGjQjmb4G7c97pbe25gGn00jIfBifih');

function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="AUD"
      >
      <BrowserRouter>
        <Navbar />
        <Toaster position="bottom-center"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
          <Route path="/:productId" component={Product} />

        </Switch>
      </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App;
