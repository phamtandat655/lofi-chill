import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes/routes';
import { Suspense, useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import { UseOpenModal } from './context/OpenModalProvider';
import FormRegister from './components/FormRegister/FormRegister';
import FormLogin from './components/FormLogin/FormLogin';

function App() {
    const { isOpenModal, setIsOpenModal } = UseOpenModal();
    const [isOpenLogin, setIsOpenLogin] = useState(true);

    const { pathname } = useLocation();
    const nav = useNavigate();

    useEffect(() => {
        if (pathname === '/') {
            nav('/home');
        }
    }, [pathname, nav]);

    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Page = route.component;
                    let Layout = route.layout;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Suspense fallback={<Loader />}>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </Suspense>
                            }
                        />
                    );
                })}
            </Routes>

            {isOpenModal && (
                <div className="Form-modal">
                    <p
                        className="icon-close-form"
                        onClick={(e) => {
                            setIsOpenModal(false);
                        }}
                    >
                        X
                    </p>
                    {isOpenLogin === true ? (
                        <FormLogin handleSetIsOpenLogin={setIsOpenLogin} />
                    ) : (
                        <FormRegister handleSetIsOpenLogin={setIsOpenLogin} />
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
