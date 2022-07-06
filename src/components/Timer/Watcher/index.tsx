import style from './Watcher.module.scss';

export default function Watcher(){
  return (
    <>
      <span className={style.watcherNumber}>0</span>
      <span className={style.watcherNumber}>0</span>
      <span className={style.watcherDivision}>:</span>
      <span className={style.watcherNumber}>0</span>
      <span className={style.watcherNumber}>0</span>
    </>
  )
}