import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestOpen: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestOpen,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestOpen}>
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
}
