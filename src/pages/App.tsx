import Forms from '../components/Forms';
import FormMultiHours from '../components/FormMultiHours';
import List from '../components/List';
import style from './App.module.scss';
import Timer from '../components/Timer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
      <Timer />
      <FormMultiHours />
    </div>
  );
}

export default App;
