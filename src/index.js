import { createRoot } from 'react-dom/client';
import RoutinApp from "./routing/routing.app"

// import './index.css'
var documentView = document.getElementById('root') 
console.log(process.env.API_URL)
console.log(process.env.MODE_APP)
// Render your React component instead
var documentView = document.getElementById('root') 
const root = createRoot(documentView);
root.render(<RoutinApp/>);