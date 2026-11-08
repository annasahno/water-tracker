import { AddWater } from '../../components/add-water/add-water';
import { ProgressBar } from '../../components/progress-bar/progress-bar';

export function Main() {
 
  return (
    <main className='main'>
      <h1 className='visually-hidden'>Трекер выпитой воды</h1>
      <div className='container'>
        {/* <Calendar /> */}
        <ProgressBar />
        <AddWater />
      </div>
    </main>
  );
}