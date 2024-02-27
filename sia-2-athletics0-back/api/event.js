// pages/api/student.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Parse the incoming JSON data
        const data = JSON.parse(req.body);
  
        // Here you can add code to save the data to your database
        // Example: const savedStudent = await saveStudentToDatabase(data);
  
        // Send a success response
        res.status(201).json({ message: 'Event added successfully', data });
      } catch (error) {
        console.error('Error adding events:', error);
        res.status(500).json({ error: 'Failed to add Event' });
      }
    } else if (req.method === 'GET') {
      try {
        // Here you can add code to fetch data from your database
        // Example: const students = await fetchStudentsFromDatabase();
  
        // For demonstration purposes, let's assume we have some sample data
        const students = [
          { id: 1, firstName: 'John', lastName: 'Doe' },
          { id: 2, firstName: 'Jane', lastName: 'Smith' }
        ];
  
        // Send the fetched data as the response
        res.status(200).json(students);
      } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  