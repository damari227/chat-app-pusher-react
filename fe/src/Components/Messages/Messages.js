const Messages = (props) => {

    return (
        <div className="px-4">
            { props.messages.map((m, i) => 
            <div key={i} className={ m.user.id == props.user ? 'text-right mb-4' : 'text-left mb-4' }>
                <div className="mb-2">
                    <small className="text-secondary">{m.user.name}</small>
                </div>
                <span className={ m.user.id === props.user ? 'text-white bg-primary py-2 px-3 rounded-lg' : 'text-dark bg-light rounded-lg py-2 px-3' }>{m.text}</span>
            </div>
            ) }
        </div>
    )
}

export default Messages;