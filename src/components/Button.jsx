const Button = ({ value, handleClick }) => {
    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300" onClick={handleClick}>{"+" + value}</button>

    )
}
export default Button
