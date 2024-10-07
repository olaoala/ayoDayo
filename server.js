const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const stream = require('stream');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: 'http://localhost:3000' }));

// Multer setup to handle image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // Limit file size to 5MB

// Path to service account key file
const KEYFILEPATH = path.join(__dirname, 'config/servicekey.json');

// Google Drive API setup with Service Account credentials
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

// Google Auth Initialization using the service key file
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,  // Path to service key
  scopes: SCOPES,        // Drive permissions
});

// Initialize Google Drive API with authenticated credentials
const drive = google.drive({ version: 'v3', auth });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API to handle image uploads
app.post('/home', upload.array('photos', 3), async (req, res) => {
  try {
    const files = req.files;
    if (!files) return res.status(400).send('No files uploaded.');

    // Loop through the uploaded files
    for (const file of files) {
      const { originalname, buffer, mimetype } = file;

      // Create a readable stream from the buffer
      const bufferStream = new stream.PassThrough();
      bufferStream.end(buffer);

      try {
        // Upload the file to Google Drive
        const response = await drive.files.create({
          requestBody: {
            name: originalname,   // Name of the uploaded file
            parents: ['1Dpzy9uzmOK1gfb7o2RObruSob1aHgo8F'],  // Use the actual folder ID from your Drive
          },
          media: {
            mimeType: mimetype,
            body: bufferStream,
          },
          fields: 'id',
        });

        console.log(`Uploaded file with ID: ${response.data.id}`);
      } catch (uploadError) {
        // Error during file upload
        console.error('Error uploading to Google Drive:', uploadError.message);
        return res.status(500).send(`Error uploading ${file.originalname}`);
      }
    }

    res.status(200).send('Files uploaded successfully.');
  } catch (error) {
    // General error handling
    console.error('Error uploading files:', error.message);
    res.status(500).send('Error uploading files.');
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
