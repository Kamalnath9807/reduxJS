import { BiEdit, BiTrashAlt } from 'react-icons/bi';

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
      <tbody className='bg-gray-200'>
        <tr className='bg-gray-50 text-center'>
          <td className='px-16 py-2 flex-row items-center'>
            <img src='#' alt='' />
            <span className='text-center ml-2 font-semibold'>Daily Tution</span>
          </td>
          <td className='px-16 py-2'>
            <span>dailytution@gmail.com</span>
          </td>
          <td className='px-16 py-2'>
            <span>$25000</span>
          </td>
          <td className='px-16 py-2'>
            <span>10-05-2022</span>
          </td>
          <td className='px-16 py-2'>
            <button className='cursor'>
              <span className='bg-green-500 text-white px-5 py-1 rounded'>
                Active
              </span>
            </button>
          </td>
          <td className='px-16 py-2 flex justify-around gap-5'>
            <button className='cursor'>
              <BiEdit size={25} color={'rgb(34,197,94'} />
            </button>
            <button className='cursor'>
              <BiTrashAlt size={25} color={'rgb(244,63,94'} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
