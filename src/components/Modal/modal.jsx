import { Component } from 'react';
import { Overlay, Modal } from './modal.styled';

export class Modal extends Component {
  state = { isModalOpen: false };
  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <>
        <Overlay>
          <Modal>
            isOpen={this.state.isModalOpen}
            <button onClick={this.closeModal}>close</button>
          </Modal>
        </Overlay>
      </>
    );
  }
}
