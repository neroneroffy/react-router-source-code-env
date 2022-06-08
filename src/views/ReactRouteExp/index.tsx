import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "../../react-router-src/react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";
import './styles/index.css'


const ReactRoute: React.FC = (): React.ReactElement => {
    return <div>
        <BrowserRouter>
            <div className={'header'}>
                <Link to={'/pageA'}>pageA</Link>
                <Link to={'/pageB'}>pageB</Link>
            </div>
            <div className={'container'}>
                <Routes>
                    <Route path="/pageA" element={<PageA />}/>
                    <Route path="/pageB" element={<PageB />}/>
                </Routes>

            </div>
        </BrowserRouter>
    </div>
}

export default ReactRoute
