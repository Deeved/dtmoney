import Modal from "react-modal";
import { Container } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestOpen: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestOpen,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
