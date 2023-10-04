
export const Rewievs = ({ rewievs }) => {
    return (
        <ul>
            {rewievs.map((item) => <li>{item.user}: {item.text}</li>)}
        </ul>
    )
}