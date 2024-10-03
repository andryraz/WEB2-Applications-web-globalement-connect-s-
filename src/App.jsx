import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Liste from './components/Liste';
import Detail from './components/Detail';
import './styles.css';


const App = () => {
   
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Liste />} />
                <Route path="/Detail" element={<Detail /> } />
            </Routes>
        </Router>
    );
};

export default App;
