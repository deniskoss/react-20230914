export const NavItem = ({ restaurant, onClick }) => {
    return <button onClick={onClick}>{restaurant.name}</button>
};