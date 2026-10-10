import { useState, useEffect, useRef } from "react";
import Dice from "./Dice";
import DiceBtn from "./DiceBtn";


const RollDice = () => {
  const [diceOne, setDiceOne] = useState<number | null>(null)
  const [diceTwo, setDiceTwo] = useState<number | null>(null)
  const [isRolling, setIsRolling] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  const rollDice = () => {

    if (isRolling) return;

    setIsRolling(true);

    timeoutRef.current = setTimeout(() => {
      const newDiceOne = Math.floor(Math.random() * 6) + 1
      const newDiceTwo = Math.floor(Math.random() * 6) + 1

      setDiceOne(newDiceOne)
      setDiceTwo(newDiceTwo)
      setIsRolling(false)

      timeoutRef.current = null;

    }, 1000)
  }


    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">React Dice Roller Example</h1>

          <div className="flex space-x-4 mb-8">
            <Dice value={diceOne} isRolling={isRolling} />
            <Dice value={diceTwo} isRolling={isRolling} />
          </div>


          <DiceBtn handleGame={rollDice} isRolling={isRolling} />
        </div>
      </div>
    )
  }

  export default RollDice;