
import type { ReactNode } from "react";

interface DiceBtnProps {
  handleGame: () => void;
  children?: ReactNode;
  isRolling: boolean;
}

const DiceBtn = ({
  handleGame,
  children,
  isRolling,
}: DiceBtnProps) => {
  const buttonClass = [
    "inline-flex w-[12.5rem] items-center justify-center",
    "rounded-full border-2 border-indigo-500 p-4",
    "text-base font-semibold leading-6 text-white",
    "transition-colors ease-in-out",
    isRolling
      ? "cursor-not-allowed opacity-70"
      : "cursor-pointer hover:border-indigo-400",
  ].join(" ");

  return (
    <button
      type="button"
      onClick={handleGame}
      disabled={isRolling}
      aria-busy={isRolling}
      className={buttonClass}
    >
      {isRolling && (
        <svg
          className="mr-3 size-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={4}
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}

      {isRolling ? "Rolling..." : children ?? "Roll Dice"}
    </button>
  );
};

export default DiceBtn;
