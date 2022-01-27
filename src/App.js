//import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import Editor from './Editor';
import DialogFormik from './DialogFormik';

function App() {
  return (
    <div className="App">
      
      <div className="left_side">
        <header className="top_header"><span>Canvas</span></header>
        <div className="wr1">
          <Canvas />        
          <div className="canvas_right_field"><p>Header</p><div className="add_btn">+</div></div>         
        </div>  
        <div className="wr2">
          <div className="canvas_body2"></div>
          <div className="canvas_right_field"><p>Body</p></div>         
        </div>       
      </div>

      <div className="right_side">
        <header className="top_header"><span>Editor</span></header>
        <Editor />                 
      </div>
      
      <DialogFormik />
    </div>
  );
}

export default App;
