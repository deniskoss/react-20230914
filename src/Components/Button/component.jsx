
export const Button = ({type, handler}) => {
    return (
        <button onClick={() => handler()}>{type}</button>
    )
}