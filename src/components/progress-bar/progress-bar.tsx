import { useAppSelector } from '../../app/hooks';
import { selectAmount } from '../../store/waterSelectors';
import './progress-bar.scss';

export function ProgressBar() {
  const amount = useAppSelector(selectAmount);
  
  return (
    <section className='progress-bar'>
      <span className='progress-bar__amount'>{amount} мл</span>
    </section>
  );
}