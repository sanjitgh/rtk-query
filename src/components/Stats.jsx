export default function Stats({ totalCount }) {
  return (
    <div className='max-w-xl p-10 mx-auto rounded border border-slate-400'>
      <p className='text-2xl font-medium text-center'>
        Total Count: {totalCount}
      </p>
    </div>
  );
}
