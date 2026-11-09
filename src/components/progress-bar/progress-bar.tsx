import { useAppSelector } from '../../app/hooks';
import { DAILY_WATER_NORM } from '../../const';
import { selectAmount } from '../../store/waterSelectors';
import './progress-bar.scss';

const SIZE_CIRCLE = 500;
const STROKE_WIDTH = 40;

export function ProgressBar() {
  const amount = useAppSelector(selectAmount);
  
  const progress = Math.min(amount / DAILY_WATER_NORM, 1);
  const radius = (SIZE_CIRCLE - STROKE_WIDTH) / 2;
  const circumference = 2 * Math.PI * radius;
  
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <section className='progress-bar'>
      <div className="progress-bar__wrapper">
        <div className="progress-bar__circle">
          <svg viewBox={`0 0 ${SIZE_CIRCLE} ${SIZE_CIRCLE}`} className="progress-bar__svg">
            <circle
              cx={SIZE_CIRCLE / 2}
              cy={SIZE_CIRCLE / 2}
              r={radius}
              className="progress-bar__track"
              strokeWidth={STROKE_WIDTH}
            />
            <circle
              cx={SIZE_CIRCLE / 2}
              cy={SIZE_CIRCLE / 2}
              r={radius}
              className="progress-bar__fill"
              strokeWidth={STROKE_WIDTH}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
        </div>

        <div className="progress-bar__info">
          <p className="progress-bar__amount">{amount} мл</p>
        </div>
      </div>
    </section>
  );
}