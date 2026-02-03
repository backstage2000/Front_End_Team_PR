import { Outlet } from 'react-router-dom';
import './assets/styles/main.scss';
import style from './app.module.scss';
import { Footer, Header } from '@GlobalComponents';
import { CafeInfoPage } from './modules/CafeInfoPage/CafeInfoPage';
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Header />

        <main
          style={{
            padding: 100,
          }}
          className="main"
        >
          hello
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
