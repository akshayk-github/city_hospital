import Header from './components/Header/Header';
import Home from './container/Home/Home';
import Footer from './components/Footer/Footer';
import Departments from './container/Departments/Departments';
import { Route } from 'react-router-dom';
import Doctor from './container/Doctors/Doctor';
import About from './container/About/About';
import Contact from './container/Contact/Contact';

function App() {
    return (
        <>
            <Header />
            {/* <Home /> */}
            <switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/Departments"} component={Departments} />
                <Route exact path={"/Doctors"} component={Doctor} />
                <Route exact path={"/About"} component={About} />
                <Route exact path={"/Contact"} component={Contact} />
            </switch>
            <Footer />
        </>
    );
}

export default App;
