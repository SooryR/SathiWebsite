
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header.js'
import { Home } from '../pages/Home.js'
import { WorkPage } from '../pages/Work.js'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Header/>}>
                    <Route index element={<Home/>} />
                    <Route path = "/work" element={<WorkPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export {Router}
