const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const stream = require('stream');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:3000','https://ponmile-ati-dayo.onrender.com','https://ponmile-ati-dayo.onrender.com/home', 'https://ayodayo.netlify.app', 'https://ayodayo.netlify.app/home'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

const KEYFILEPATH = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(Buffer.from(KEYFILEPATH, 'base64').toString()),
  scopes: SCOPES,
});


const drive = google.drive({ version: 'v3', auth });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/home', upload.array('photos', 3), async (req, res) => {
  try {
    const files = req.files;
    if (!files) return res.status(400).send('No files uploaded.');

    for (const file of files) {
      const { originalname, buffer, mimetype } = file;
      const bufferStream = new stream.PassThrough();
      bufferStream.end(buffer);
      try {
        const response = await drive.files.create({
          requestBody: {
            name: originalname,
            parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
          },
          media: {
            mimeType: mimetype,
            body: bufferStream,
          },
          fields: 'id',
        });
        console.log(`Uploaded file with ID: ${response.data.id}`);
      } catch (uploadError) {
        console.error('Error uploading to Google Drive:', uploadError.message);
        return res.status(500).send(`Error uploading ${file.originalname}`);
      }
    }
    res.status(200).send('Files uploaded successfully.');
  } catch (error) {
    console.error('Error uploading files:', error.message);
    res.status(500).send('Error uploading files.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
