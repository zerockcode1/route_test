
import { Route } from 'react-router-dom';
import MemberPage from "./views/MemberPage";
import BoardPage from "./views/BoardPage";
import MainPage from "./views/MainPage";


function App() {
  return (
    <>
      <Route path="/member" component={MemberPage}></Route>
      <Route path="/board" component={BoardPage}></Route>
      <Route exact path="/" component={MainPage}></Route>
    </>
  );
}

export default App;
