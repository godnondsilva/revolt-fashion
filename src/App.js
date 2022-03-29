import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation';

// Routes
import Home from './routes/home/Home';
import SignIn from './routes/sign-in/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        {/* <Route path='shop' element={<Shop />} /> */}
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
