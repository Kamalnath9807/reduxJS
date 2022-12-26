export default function Table() {
  return (
    <table className='min-w-full table-auto'>
      <thead>
        <tr className='bg-gray-800'>
          <th className='px-16 py-2'>
            <span className='text-white'>Name</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-white'>Email</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-white'>salary</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-white'>Birthday</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-white'>Status</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-white'>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
