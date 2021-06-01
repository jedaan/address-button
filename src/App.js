import AddressButton from './lib/components/AddressButton';
import './App.css';

function App() {
  return (
    <div style={{ display:'flex', 
              flexDirection:'column', 
              alignItems:'start', 
              justifyContent:'center', 
              gap:'1.5rem', 
              padding: '5rem' }}>
      <p>Wow, look at this component library.</p>
     <h5>A button:</h5>
        <AddressButton label="Enter" kind="primary"/>
    </div>
  );
}

export default App;
