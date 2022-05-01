import React, {Fragment, useState} from 'react'
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';

import Meals from './components/Meals/Meals'

const App= () =>  {

  const [cartisShown, setCartisShown] = useState(false);

  const showCartHandler=() => {

    setCartisShown(true);
  }

  const HideCartHandler= () => {

    setCartisShown(false);
  }


  return (
    <Fragment>
      { cartisShown && <Cart onCloseCart={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>

    </Fragment>
  );
}

export default App;
