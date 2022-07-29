import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ authUser }) {
    const location = useLocation();
  // console.log("authUser-->",authUser);
  return (
    <nav className="navbar navbar-light bg-light rounded-3">
    <h1 className="text-dark my-auto mx-3">
      <img src="https://elbrus-bootcamp.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F642542ae-a4b2-4a29-a37a-4ca2080102d5%2Fmountain.png?table=block&id=c5ecb8b7-d5a0-457e-913a-78968e32d878&spaceId=ae9a42d7-4691-4e42-8b18-b4afbde7a000&width=1020&userId=&cache=v2" width="50" height="50" className="d-inline-block align-top" alt="" />
      ООО “Высокая гора”
      </h1>
      {location.pathname === '/' ? <Link to="/user/auth" className="btn btn-light my-auto align-self-right mx-3">Войти!</Link> : <></>}

        {authUser?.nameRole === 'Admin' ? (
                <>
                    <Link to="/lists" className="btn btn-light my-auto align-self-right mx-3">Все чеклисты</Link>
                    <Link to="/user" className="btn btn-light my-auto align-self-right mx-3">Пользователи</Link>
                    <Link to="/" className="btn btn-light my-auto align-self-right mx-3">Выход</Link>
                </>
            )
              : (
                <>
                </>
              )}
        {authUser?.nameRole === 'noAdmin' ? (
                <>
                    <Link to="/lists" className="btn btn-light my-auto align-self-right mx-3">Все чеклисты</Link>
                    <Link to="/userlist" className="btn btn-light my-auto align-self-right mx-3">Мои чеклисты</Link>
                    <Link to="/" className="btn btn-light my-auto align-self-right mx-3">Выход</Link>
                </>
            )
              : (
                <>
                </>
              )}

    </nav>
  )
}
//  Нужно откорректировать пути в линках (ОНИ ПОСТОЯННО МЕНЯЮТСЯ Я НЕ ЕБУ БЛИААТЬ!!) ЭМПЛООЙИИИИИИИИС