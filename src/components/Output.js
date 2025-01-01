export default function Output({ bill, tip }) {
  return (
    <div>
      <p>
        {bill
          ? `You pay $${bill + tip} ($${bill} + $${tip})`
          : `Please enter bill`}
      </p>
    </div>
  );
}
