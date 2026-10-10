
import { iconHtml } from "../utils/diceIcon";

const Dice = ({ value, isRolling } : { value: number | null , isRolling: boolean }) => {
    return (
        <div id="dice" className="w-24 h-24 bg-white text-slate-900 rounded-xl shadow-2xl 
          flex flex-col items-center justify-center text-4xl font-extrabold mx-auto mb-6 select-none 
          transition-transform duration-300">
            { !isRolling && value ? iconHtml(value) : isRolling ? null : '?' }
            { isRolling && (
                <svg className="mr-3 ml-1 size-10 animate-spin text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
          </div>
    )
}

export default Dice