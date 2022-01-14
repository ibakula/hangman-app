import { Suspense, forwardRef, lazy } from 'react';
import style from './App.css';

const AppView = forwardRef(function (props, ref) {
  if (props.playerName instanceof Error) {
    return (
      <>
        <h3 className={`${style.errorMsg}`}>Couldn't start the game.</h3>
        <p>{props.playerName.message}</p>
      </>
    );
  }
  
  if (props.playerName.length < 1) {
    // Note: Form for player data
    return (
      <>
      </>
    );
  }
  
  const GameContainer = lazy(() => import('../containers/Game'));
  // Note: Improve styling for loading message
  return (
    <Suspense fallback={<div>Game starting...</div>}>
      <GameContainer 
        playerName={${props.playerName}} 
      />
    </Suspense>
  );
});

export default AppView;
