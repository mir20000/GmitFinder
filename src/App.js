import Login from './component/Login';
import Search from './component/Search';
import Navbars from './component/Navbar';
import Signup from './component/Signup';
import SearchResult from './component/SearchReasult';
import { BrowserRouter,Switch, Route} from "react-router-dom";
import ProfileViewer from './component/ProfileViewer';
import StudentProfile from './component/StudentProfile';
import StudentDashboard from './component/StudentDashboard/StudentDashboard';
import HRDashboard from './component/Dashboard/HRDashboard';
import CDCDashboard from './component/Dashboard/CDCDashboard';

// import Login from './Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars/>
    <Switch>
      <Route exact path="/" component={Search}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/profile" component={StudentProfile}/>
      <Route exact path="/search/:search" component={SearchResult}/>
      <Route exact path="/profileviewer/:id" component={ProfileViewer}/>
      <Route exact path="/studentdashboard" component={StudentDashboard}/>
      <Route exact path="/hrdashboard" component={HRDashboard}/>
      <Route exact path="/cdcdashboard" component={CDCDashboard}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
