import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import MainLayout from './components/mainLayout/MainLayout';
import HomePage from './pages/homePage/HomePage';
import FavouritesPage from './pages/favouritesPage/FavouritesPage';
import UserProfilePage from './pages/userProfilePage/UserProfilePage';
import UserProfileCommentsPage from './pages/userProfileCommentsPage/UserProfileCommentsPage';
import InnerTopicPage from './pages/innerTopicPage/InnerTopicPage';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/favourite-topics' element={<FavouritesPage />} />
          <Route path='/user-profile/topics' element={<UserProfilePage />} />
          <Route path='/user-profile/comments' element={<UserProfileCommentsPage />} />
          <Route path='/topics/:topicID' element={<InnerTopicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
