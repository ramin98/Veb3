export default function Modal({ warnMessage }) {

    return (
        <div className="modal-container">
            <div className="modal">
                <h1>{warnMessage}</h1>
            </div>
        </div>
    )
}


