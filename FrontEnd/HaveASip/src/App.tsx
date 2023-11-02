import './App.scss'
import { Routes, Route } from 'react-router-dom'
import GuestLayout from './BigComponents/GuestPage/GuestLayout';
import GuestHomePage from './BigComponents/GuestPage/components/pages/home-page/home-page';
import './BigComponents/GuestPage/guest-general.scss'
import './assets/font/Gilroy-Regular.ttf'
import './BigComponents/GuestPage/components/templates/guest-template.scss'

function App() {
  const user = sessionStorage.getItem('loginedUser') ? JSON.parse(sessionStorage.getItem('loginedUser')) : null;

  return (
    <>
      <Routes>
        {
          user == null ? (
            <Route element={<GuestLayout />} >
              <Route index element={<GuestHomePage />} />
            </Route>
          ) : (
            <h1>hello</h1>
          )
        }
      </Routes>
    </>
  )
}

export default App
