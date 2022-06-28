import { Route, Routes } from 'react-router-dom';

import { About } from './about';
import { Home } from './home';
import { Hong } from './hong';

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/hong" element={<Hong />} />
  </Routes>
);
