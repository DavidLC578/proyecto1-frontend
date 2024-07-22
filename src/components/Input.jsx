// eslint-disable-next-line react/prop-types
export function Input({ value, onChange, tipo = "text" }) {
  return (
    <>
      <input
        className="h-8 p-2 mt-1 bg-gray-200 rounded-sm w-full"
        type={tipo}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
