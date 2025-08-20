import { Check } from "lucide-react"

function Button(props) {
  return (
    <button
      className={`
          bg-violet-50
          font-semibold text-lg text-left
          rounded-lg p-4 cursor-pointer
          transition-colors
          hover:bg-indigo-500
          hover:text-white
          ${
            props.type == "name" && `w-full flex items-center gap-4`
          }
      `}
      {...props}
    >
      {props.children}
      {props.completed == "true" && <Check />}
    </button>
  );
}

export default Button;
