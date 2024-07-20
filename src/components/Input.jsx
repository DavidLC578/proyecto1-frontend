// eslint-disable-next-line react/prop-types
export function Input({ value, onChange }) {
  return (
    <>
      <input
        className="h-8 p-2 mt-1 bg-gray-200 rounded-sm w-full"
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
