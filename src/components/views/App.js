import { Suspense, forwardRef, lazy } from 'react';
import style from './App.module.css';

const AppView = forwardRef(function (props, ref) {
  if (typeof(props.playerName) == "string" && 
    props.playerName.length > 1) {
    const GameContainer = lazy(() => import('../containers/Game'));
    return (
      <main>
        <Suspense fallback={<div>Game starting...</div>}>
          <GameContainer 
            playerName={props.playerName} 
          />
        </Suspense>
      </main>
    );
  }

  return (
    <main>
      <form className={style.playerDataForm} onSubmit={props.handleNameChange}> 
        <input ref={ref} type="text" id="pname" placeholder="First enter player name here" />
        <br />
        <input type="submit" value="Press to continue" />
        <br />
      </form>
      {props.playerName instanceof Error && (<div className={style.errorMsg}>
        <h3>Couldn't start the game.</h3>
        <p>{props.playerName.message}</p>
      </div>)}
    </main>
  );
});

export default AppView;
