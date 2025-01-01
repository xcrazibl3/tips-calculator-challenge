export default function BillInput({ children, bill, onChange }) {
  return (
    <div>
      {children}
      <input
        onChange={(e) => onChange(Number(e.target.value))}
        type="number"
        value={bill}
      />
    </div>
  );
}
