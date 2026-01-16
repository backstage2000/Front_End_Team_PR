import { Outlet } from 'react-router-dom';
import './assets/styles/main.scss';
import style from './app.module.scss';
import { Header } from '@GlobalComponents';

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Header />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
