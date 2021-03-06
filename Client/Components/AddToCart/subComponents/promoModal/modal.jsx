import React from 'react';
import Modal from 'react-modal';
import styles from './modal.module.css';
import MainCard from './subComponents/mainCard/mainCard.jsx';
import Card from './subComponents/card/card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class PromoModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
    }
  }

  openModal(e) {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal(e) {
    this.setState({
      modalIsOpen: false
    });
  }

  render(){
    return (
      <div>
      <button
        onClick={() => {
          this.props.changeVisible()
          this.openModal()
          }
        }
        className={styles.addButton}
      >
        Add to cart
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={this.state.modalIsOpen}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div>
          <h2 className={styles.confirmation}><FontAwesomeIcon icon={faCheck} />  Added to cart</h2>
          <MainCard closeModal={this.closeModal.bind(this)} image={this.props.image} title={this.props.title} price={this.props.price} />
          <div className={styles.cards}>
            {this.props.firstRowModalItems.map( item => <Card image={item.image} key={this.props.keyGenerator()} title={item.title} price={item.price} /> )}
          </div>
          <div className={styles.cards}>
            {this.props.secondRowModalItems.map( item => <Card image={item.image} key={this.props.keyGenerator()} title={item.title} price={item.price} /> )}
          </div>
        </div>
      </Modal>
    </div>
    )
  }
}

export default PromoModal;