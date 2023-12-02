import React from 'react';
import Toggle from './Toggle';

const App = () => {
  return (
      <div>
        <h1>Toggle Example</h1>
        <Toggle
            render={(isOpen) => (
                <div>
                  {isOpen ? <p>Content is visible!</p> : null}
                </div>
            )}
        />
      </div>
  );
};

export default App;
