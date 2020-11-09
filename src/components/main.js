
import {Switch, Route} from 'react-router-dom';
import LandingPage from "./landingpage";
import Resume from "./resume";
import Experience from "./experience"
import About from "./aboutme"
import Contact from "./contact"

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/aboutme' component={About} />
        <Route path='/experience' component={Experience} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />

    </Switch>
)

export default Main;