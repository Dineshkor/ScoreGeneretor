const ScoreCountCard = ({ score }) => {
    return (
        <div className="flex items-center justify-center px-12 py-8 rounded-lg bg-[#0f172a]">
            <span className="text-6xl font-bold text-center">{score}</span>
        </div>
    )
}

export default ScoreCountCard
