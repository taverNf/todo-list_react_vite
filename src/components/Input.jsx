function Input(props) {
  return (
    <input
      className="
          border-2 border-violet-200 rounded-lg
          font-medium
          px-6 py-4
          transition-colors
          placeholder:text-gray-500
          focus:border-indigo-500 focus:placeholder:text-gray-400 focus:outline-none
        "
      {...props}
      //  Ao invés de passar propriedade por propriedade, pega todas de uma vez e envia via "props"
    />
  );
}

export default Input;
