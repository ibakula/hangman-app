import { Suspense, forwardRef, lazy } from 'react';
import style from './App.css';

const AppView = forwardRef(function (props, ref) {
  if (props.playerName.length > 1) {
    const GameContainer = lazy(() => import('../containers/Game'));
    return (
      <Suspense fallback={<div>Game starting...</div>}>
        <GameContainer 
          playerName={${props.playerName}} 
        />
      </Suspense>
    );
  }

  return (
    <>
      <form onSubmit={props.handleNameChange}> 
        <label for="pname">Player name:</label>
        <br /><br />
        <input ref={ref} type="text" id="pname" placeholder="Player" />
        <br /><br />
        <input type="submit" value="Submit" />
        <br /><br />
      </form>
      {props.playerName instanceof Error && (<>
        <h3 className={`${style.errorMsg}`}>Couldn't start the game.</h3>
        <p>{props.playerName.message}</p>
      </>)}
    </>
  );
});

export default AppView;
