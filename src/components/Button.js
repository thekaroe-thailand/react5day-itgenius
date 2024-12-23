const Button = (props) => {
    return (
        <button style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            marginRight: '2px',
            border: 'none'
        }}>
            <i className={props.icon}
                style={{
                    marginRight: '5px'
                }}></i>
            {props.text}
        </button>
    );
}

export default Button;

