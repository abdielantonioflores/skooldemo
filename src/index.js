import { createRoot } from 'react-dom/client';
import RoutinApp from "./routing/routing.app"
// import './index.css'
var documentView = document.getElementById('root') 

// Render your React component instead
var documentView = document.getElementById('root') 
const root = createRoot(documentView);
root.render(<RoutinApp/>);