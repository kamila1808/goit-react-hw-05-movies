import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home' /* webpackChunkName: "Home" */))
const Movies = lazy(() => import('../pages/Movies/Movies' /* webpackChunkName: "Movies" */));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails' /* webpackChunkName: "Movie-Details" */));
const Cast = lazy(() => import('../components/Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
  );
};
