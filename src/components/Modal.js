import React from 'react';
import ReactModal from 'react-modal';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class Modal extends React.PureComponent {
    constructor () {
        super();
        this.state = {
            showModal: false,
            name: "", email: "", message: "",
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

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "modal", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render () {
        const { name, tel, comment } = this.state;
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
                            <form onSubmit={this.handleSubmit} netlify-honeypot="modal-bot-field">
                                <input type="text" name="name" placeholder="Имя" value={name} onChange={this.handleChange} required />
                                <input type="tel" name="tel" placeholder="Телефон" value={tel} onChange={this.handleChange} required />
                                <textarea name="comment" rows="4" placeholder="Комментарий" value={comment} onChange={this.handleChange} />

                                {/*<input type="hidden" name="form-name" value="modal" />*/}
                                <label className="hidden">Don’t fill this out if you're human: <input name="modal-bot-field" /></label>
                                <button className="btn" type="submit">Заказать звонок</button>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button onClick={this.handleCloseModal}>Закрыть</button>
                        </div>

                    </div>
                </ReactModal>
                {/*<form name="modal" method="POST" data-netlify netlify-honeypot="modal-bot-field">*/}
                    {/*<input type="text" name="name" placeholder="Имя" required />*/}
                    {/*<input type="tel" name="tel" placeholder="Телефон" required />*/}
                    {/*<textarea name="comment" rows="4" placeholder="Комментарий" />*/}

                    {/*/!*<input type="hidden" name="form-name" value="modal" />*!/*/}
                    {/*<label className="hidden">Don’t fill this out if you're human: <input name="modal-bot-field" /></label>*/}

                    {/*<button className="btn" type="submit">Заказать звонок</button>*/}

                {/*</form>*/}
            </div>
        );
    }
}

export default Modal;
