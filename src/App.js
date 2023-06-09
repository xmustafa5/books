import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Sighup from './pages/SingUp';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/sighup' element={<Sighup />} />
          <Route path='/Loading' element={<Loading />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
