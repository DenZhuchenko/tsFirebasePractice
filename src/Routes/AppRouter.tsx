import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";

const AppRouter = () => {

    const [isAuth, setIsAuth] = useState<boolean>(true)


    return (
        <div>

            {
                isAuth ? <Routes>
                        {
                            privateRoutes.map(route =>
                                <Route
                                    key={route.path}
                                    element={<route.element/>}
                                    path={route.path}
                                />
                            )
                        }
                        <Route
                            path={'*'}
                            element={<Navigate to="/" replace/>}
                        />
                    </Routes>
                    : <Routes>
                        {
                            publicRoutes.map(route =>
                                <Route
                                    key={route.path}
                                    element={<route.element/>}
                                    path={route.path}
                                />
                            )
                        }
                        <Route
                            path={'*'}
                            element={<Navigate to="/login" replace/>}
                        />

                    </Routes>


            }


        </div>
    );
};

export default AppRouter;