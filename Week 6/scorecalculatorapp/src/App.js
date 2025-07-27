import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Bawyah" school="Christ King" total={450} goal={5} />
    </div>
  );
}

export default App;
