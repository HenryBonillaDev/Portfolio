export const Percentage = ({ percentage, color }) => {
    const percentageStyle = {
        '--percentage': percentage,
        '--color': color,
    };

    return (
        <div className='percentage' style={percentageStyle}>
            <svg width="150" height="150">
                <circle r="60" cx="50%" cy="50%" pathLength="100" />
                <circle r="60" cx="50%" cy="50%" pathLength="100" />
            </svg>
            <span>{percentage}%</span>
        </div>
    )
}
