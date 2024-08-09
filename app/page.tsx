import styles from './Estilo.css';

export default function ConfirmationDialog({ onConfirm, onCancel }) {
  return (
    <div className={styles.dialog}>
      <div className={styles.dialogContent}>
        <p>Are you sure? Absolutely sure?</p>
        <button onClick={onConfirm} className={styles.button}>Continuar</button>
        <button onClick={onCancel} className={styles.button}>Cancelar</button>
      </div>
    </div>
  );
}
