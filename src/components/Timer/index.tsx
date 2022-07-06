import Button from "../Button";
import Watcher from "./Watcher";
import style from './Timer.module.scss';

export default function Timer(){
  return (
    <div className={style.timer}>
      <p className={style.title}>Chosen a card e start a timer</p>
      <div className={style.watcherWrapper}>
        <Watcher />
      </div>
      <Button 
        texto="Começar!"
      />
    </div>
  )
}