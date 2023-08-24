'use client';
import ActivityForm from '@/components/admin/ActivityForm';
import AdminHeader from '@/components/admin/AdminHeader';
import React from 'react';

const ActivityPage = () => {
  return (
    <main className="flex-1">
      <AdminHeader title="Create/Update/Delete Activities" />

      <section className="p-[20px]">
        <ActivityForm />
      </section>
    </main>
  );
};

// const fetchPhotos = async () => {
//   try {
//     const res = await axiosClient.get('/activity/image');
//     console.log('iMages:', res);
//     setData(res.data.message);
//   } catch (error) {
//     console.log(error);
//   }
// };
// {data !== undefined &&
//   // @ts-ignore
//   data.map((item, index) => {
//     const photo = `http://localhost:1999/uploads/${item.proof_of_completion}`;
//     return (
//       <div key={index}>
//         {item.proof_of_completion ? (
//           <Image
//             loader={() => photo}
//             alt="phto"
//             src={photo}
//             width={300}
//             height={300}
//           />
//         ) : (
//           ''
//         )}
//       </div>
//     );
//   })}

export default ActivityPage;
