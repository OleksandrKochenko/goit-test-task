import { createPortal } from 'react-dom';
import { Spiner } from './LoaderSpiner';

const modalRoot = document.querySelector('#root-modal');

const styles = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  opacity: '0.7',
  zIndex: '1200',
};

export const Loader = () => {
  return createPortal(
    <div style={styles}>
      <Spiner />
    </div>,
    modalRoot
  );
};
