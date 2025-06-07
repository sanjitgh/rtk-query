import Button from "./Button";

export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className='py-10'>
      {/* card */}
      <div className='max-w-xl p-10 mx-auto rounded border border-slate-400'>
        <p className='text-center mb-5 text-2xl'>{count}</p>
        <div className='flex justify-center gap-5'>
          <Button handler={onIncrement} children={"Incriment"} />
          <Button handler={onDecrement} children={"Decriment"} />
        </div>
      </div>
    </div>
  );
}
