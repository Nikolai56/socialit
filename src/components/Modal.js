import React from 'react';
import ReactModal from 'react-modal';

class Modal extends React.PureComponent {
    constructor () {
        super();
        this.state = {
            showModal: false
        };
    }

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    handleOpenModal = e => {
        e.preventDefault();
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render () {
        return (
            <div className="yellow-button">
                <a href="#" onClick={this.handleOpenModal}>Закажите обратный звонок</a>
                <ReactModal
                    isOpen={this.state.showModal}
                    role="dialog"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                        overlay: {
                            display: 'flex',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }, content: {
                            position: 'static',
                            margin: 'auto',
                            width: 320,
                        }
                    }}
                >
                    <div className="wrapper">
                        <div className="modal-header">
                            <h3>Закажите обратный звонок и мы вам перезвоним.</h3>
                        </div>

                        <div className="modal-body">
                            <form name="modal" method="POST" data-netlify netlify-honeypot="bot-field">
                                <input type="text" name="name" placeholder="Имя" required />
                                <input type="tel" name="tel" placeholder="Телефон" required />
                                <textarea name="comment" rows="4" placeholder="Комментарий" />

                                <input type="hidden" name="form-name" value="modal" />
                                <label className="hidden">Don’t fill this out if you're human: <input name="bot-field" /></label>

                                <input className="btn" type="submit" value='Заказать звонок' />

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button onClick={this.handleCloseModal}>Закрыть</button>
                        </div>

                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default Modal;
