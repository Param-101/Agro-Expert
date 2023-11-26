// // Assuming you have Firebase and Firestore configured in "@/components/config"
// "use client";
// import  db from "@/components/config"; // Assuming 'db' is initialized with getFirestore
// import { useEffect, useState } from "react";
// import { collection, getDocs, DocumentData } from 'firebase/firestore';

// interface StatsData {
//     Humidity: number;
//     Pump: boolean;
//     'Soil Moisture': number; // Note: Field name with spaces should be in quotes
//     Temperature: number;
// }

// const Stats: React.FC = () => {
//   // State to store the fetched data
//   const [statsData, setStatsData] = useState<StatsData[]>([]);

//   useEffect(() => {
//     // Function to fetch data from Firestore
//     const fetchData = async () => {
//       try {
//         // Get the collection reference
//         const statsCollectionRef = collection(db, 'Stats');

//         // Get the documents from the collection
//         const snapshot = await getDocs(statsCollectionRef);

//         // Extract data from the snapshot
//         const data: StatsData[] = snapshot.docs.map(doc => doc.data() as StatsData);

//         // Update the component state with the fetched data
//         setStatsData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchData function
//     fetchData();
//   }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

//   return (
//     <div>
//       <h2>Data from Firestore</h2>
//       <ul>
//         {statsData.map((stats, index) => (
//           <li key={index}>
//             <div>Humidity: {stats.Humidity}</div>
//             <div>Pump: {stats.Pump ? 'On' : 'Off'}</div>
//             <div>Soil Moisture: {stats['Soil Moisture']}</div>
//             <div>Temperature: {stats.Temperature}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Stats;



"use client"
// Stats.jsx
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get, DataSnapshot } from 'firebase/database';
import firebaseApp from './config'; // Update the import path

interface StatsData {
  Humidity: number;
  Pump: boolean;
  'Soil Moisture': number; // Use quotes for keys with spaces
  Temperature: number;
}


const Stats: React.FC = () => {
    
  const [statsData, setStatsData] = useState<StatsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase(firebaseApp);
      const statsRef = ref(database, 'Stats');

      try {
        const snapshot: DataSnapshot = await get(statsRef);
        const data: StatsData | null = snapshot.val();
        setStatsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from Cloud Database</h2>
      {statsData && (
        <ul>
          <li>Humidity: {statsData.Humidity}</li>
          <li>Pump: {statsData.Pump ? 'On' : 'Off'}</li>
          <li>Soil Moisture: {statsData['Soil Moisture']}</li>
          <li>Temperature: {statsData.Temperature}</li>
        </ul>
      )}
    </div>


  );
};

export default Stats;
