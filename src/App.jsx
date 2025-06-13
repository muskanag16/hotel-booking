

import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails } from './pages';
import Restaurant from './components/Restaurant';
import HotelRooms from './components/HotelRooms';
import Spa from './components/Spa';
import Contact from './components/Contact';
const App = () => {

  // const paths = [
  //   { path: '/', element: <Home /> },
  //   { path: '/room/:id', element: <RoomDetails /> },
  //   { path: '*', element: <PageNotFound /> },
  // ]

  // const router = createBrowserRouter(paths);
  // <RouterProvider router={router} /> 

  return (

    <main className=''>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path={'*'} element={<PageNotFound />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/rooms" element={<HotelRooms />} />
               <Route path="/spa" element={<Spa />} />
               <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </main>
  )
}

export default App