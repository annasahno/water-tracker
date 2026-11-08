import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addWater } from '../../store/waterSlice';
import './modal-custom-add-water.scss'

type ModalCustomAddWaterProps = {
  onClose: () => void;
};

const MAX_AMOUNT = 5000;

export function ModalCustomAddWater({onClose}: ModalCustomAddWaterProps) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number(value);

    dispatch(addWater(amount));
    onClose();
  }
  
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <form className="modal__form" onSubmit={onSubmit}>
          <h2 className="modal__title">Введите количество воды</h2>
          <input
            id="custom-amount"
            className="modal__input"
            type="number"
            inputMode="numeric"
            min={1}
            max={MAX_AMOUNT}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            autoFocus
          />
          <div className="modal__button-wrapper">
            <button type="submit" className="modal__button">
              Добавить
            </button>
            <button type="button" className="modal__button" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}