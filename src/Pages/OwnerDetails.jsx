import { useLocation } from 'react-router-dom';
import owners from '../data/owners.json';

function OwnerDetails() {
  const location = useLocation();
  let ownerID = location.pathname.split('/').pop();
  let owner = owners.find((owner) => owner.owner_id.toLowerCase() === ownerID.toLowerCase());

  return (
    <div className="text-third mt-40">
    <h1 className="text-2xl font-semibold mb-4 border-b border-secondary">{owner.owner_name}</h1>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <p>Owner ID: <span className='text-secondary'>{owner.owner_id}</span></p>
        <p>Phone Number: <span className='text-secondary'>{owner.owner_phone}</span></p>
      </div>
      <div className='flex flex-col justify-center items-start gap-2'>
        <h2 className="text-lg font-semibold mb-2">Order Information</h2>
        <p>Student Interested: <span className='text-secondary'>{owner.num_students_interested}</span></p>
        <p>Location: <span className='text-secondary'>{owner.owner_location}</span></p>
        <p>Number of Properties: <span className='text-secondary'>{owner.num_properties}</span></p>
        <p>Number of Rooms: <span className='text-secondary'>${owner.num_rooms}</span></p>
        <p>Number of beds: <span className='text-secondary'>{owner.num_beds}</span></p>
      </div>
    </div>
  </div>
  )
}

export default OwnerDetails