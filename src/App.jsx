import { useRef, useState } from 'react'
import { Button, Input } from "@heroui/react";
import Header from './components/Header'
import Footer from './components/Footer'
import ToDoCard from './components/ToDoCard'
import Counter from './components/Counter'
import WishlistPage from './pages/WishlistPage';
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
// import CounterPage from './pages/CounterPage'
import LoadingSpinner from './components/LoadingSpinner'
import { li } from 'framer-motion/client';
import { Toaster } from "sonner";
import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const CounterPage = lazy(() => import("./pages/CounterPage"));

function App() {
  return (
    <>

    {/* <SignUpPage />
    <Toaster position='bottom-right'/> */}
    <Routes>
      <Route element={<WishlistPage />} path="/wishlist" />
      <Route element={<SignUpPage />} path="/auth/sign-up" />
      <Route element={
        <Suspense fallback={<LoadingSpinner />}>
          <CounterPage />
        </Suspense>
      } path="/" />
      <Route element={<ProfilePage />} path="/profile/:username" />
    </Routes>

    {/* <main className="p-4">
      <ToDoCard day="Tuesday" numberOfActivities={5} list1="Bangun" list2="Makan" list3="Tidur"/>
      <Footer /> 
    </main> */}
    
    </>
  );
};

export default App;
