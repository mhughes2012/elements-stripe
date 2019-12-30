import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  render() {
    return (
        <StripeProvider apiKey="pk_test_AJJ09Njk9gXWCkJV4kdZGiDC00ufnarOfQ">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
    );
  }
}

export default App;