import { useLocation } from 'react-router-dom';
import students from '../data/students.json';

function StudentDetails() {
  const location = useLocation();
  let studentID = location.pathname.split('/').pop();
  let student = students.find((student) => student.student_id.toLowerCase() === studentID.toLowerCase());

  if (!student) {
    return <div>student not found</div>;
  }

  return (
    <div className="text-third mt-40">
      <h1 className="text-2xl font-semibold mb-4 border-b border-secondary">{student.student_name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <p>Email: <span className='text-secondary'>{student.student_email}</span></p>
          <p>Phone Number: <span className='text-secondary'>{student.student_number}</span></p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Student Information</h2>
          <p>Student Location: <span className='text-secondary'>{student.student_location}</span></p>
          <p>Preferred Location: <span className='text-secondary'>{student.preferred_location}</span></p>
          <p>rooms needed: <span className='text-secondary'>{student.num_rooms_needed}</span></p>
          <p>Max Budget: <span className='text-secondary'>${student.max_budget}</span></p>
          <p>Student ID: <span className='text-secondary'>{student.student_id}</span></p>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
