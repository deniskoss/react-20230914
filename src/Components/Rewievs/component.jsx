
export const Rewievs = ({ data }) => {
    return (
        <ul>
            {data.map((item) => <li>{item.user}: {item.text}</li>)}
        </ul>
    )
}