import './add-water.scss';
import type { Button } from '../../types/types';
import { useAppDispatch } from '../../app/hooks';
import { addWater } from '../../store/waterSlice';
import { useState } from 'react';
import { ModalCustomAddWater } from '../modal-custom-add-water/modal-custom-add-water';

const buttons: Button[] = [
  { id: 'glass',  icon: '', value: 250 },
  { id: 'mug',    icon: '', value: 350 },
  { id: 'bottle', icon: '', value: 500 },
];

export function AddWater() { 
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const onCloseModal = () => {
    setModalOpen(false);
  }

  const onOpenModal = () => {
    setModalOpen(true);
  }
  
  return (
    <>
      <section className='add-water'>
        {buttons.map(button =>
          <button
            key={button.id}
            type='button'
            className='add-water__button'
            aria-label={`Добавить ${button.value} мл`}
            onClick={() => dispatch(addWater(button.value))}
          >
            <span className="add-water__icon">{button.icon}</span>
            <span className="add-water__value">+ {button.value} мл</span>
          </button>
        )}
        <button type="button" className="add-water__button add-water__button--custom" onClick={onOpenModal}>
          Своё значение
        </button>
        
      </section>

      {isModalOpen && (
        <ModalCustomAddWater onClose={onCloseModal} />
      )}
    </>
  );
}