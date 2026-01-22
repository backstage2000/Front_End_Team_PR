import { Outlet } from 'react-router-dom';
import './assets/styles/main.scss';
import style from './app.module.scss';
import { Footer, Header } from '@GlobalComponents';

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Header />

        <main className="main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
