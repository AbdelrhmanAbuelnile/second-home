import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import StudentDetails from './Pages/StudentDetails.jsx';
import Students from './Pages/Students.jsx';
import Layout from './Pages/Layout.jsx';
import Owners from "./Pages/Owners.jsx";
import Reports from "./Pages/Reports.jsx";
import { useEffect,useState } from "react";
import OwnerDetails from "./Pages/OwnerDetails.jsx";


function App() {

  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(()=>{
  //   if(window.innerWidth < 500){
  //     setIsMobile(true) 
  //   }
  // },[])


	return (
		<>
      {/* {
        isMobile ? <div className="w-screen h-screen flex flex-col justify-center items-center gap-10 bg-primary text-red-700 ">
          <p className="font-bold text-4xl">افتح من اللابتوب يا نجم</p>
          <p className="font-smibold text-xl">لسه شغال علي الفون والله</p>
        </div>
        : */}

			<Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Reports />} />
            <Route path="/students" element={<Students />} />
            <Route path="/student/:id" element={<StudentDetails />} />
            <Route path='/owners' element={<Owners />} />
            <Route path='/owner/:id' element={<OwnerDetails />} />
          </Route>
        </Routes>
      </Router>
      {/* } */}
		</>
	);
}

export default App;
