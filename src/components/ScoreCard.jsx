import ScoreCountCard from "./ScoreCountCard"
import Button from "./Button"
const ScoreCard = ({ teamName, score, handleClick }) => {


    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-[#1e293b] py-8 px-12 rounded-lg gradient-to-b from-[#6b7280] to-[#2d2d2d] hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-3xl font-bold font-poppins">{teamName}</h2>
            <ScoreCountCard score={score} />
            <div className="flex gap-4">
                <Button value={1} handleClick={() => handleClick(1)} />
                <Button value={2} handleClick={() => handleClick(2)} />
                <Button value={3} handleClick={() => handleClick(3)} />
            </div>

        </div>

    )
}

export default ScoreCard