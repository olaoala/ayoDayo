import React from 'react';

const EventsPage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Church Wedding Section */}
        <div className="border-2 border-gray-300 rounded-lg p-4 w-full md:w-1/2">
          <iframe
            title="Church Wedding Location"
            className="w-full h-56 rounded-xl shadow-lg mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2091781794013!2d3.869055774161189!3d7.428639494612558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f3527aa1e289%3A0xa4d3bc2ae152b1d1!2sNew%20Covenant%20Church%2C%20Ijokodo%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1696427183749!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Church Wedding</h3>
            <p className="text-gray-700 mb-1">Venue: New Covenant Church, Ijokodo</p>
            <p className="text-gray-700 mb-1">Date: 24th October, 2024</p>
            <p className="text-gray-700 mb-1">Time: 4:00 PM</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=7.428639,3.869056"
              className="inline-block mt-2 px-4 py-2 bg-rose-gold text-white rounded-lg hover:bg-chocolate transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Reception Section */}
        <div className="border-2 border-gray-300 rounded-lg p-4 w-full md:w-1/2">
          <iframe
            title="Reception Location"
            className="w-full h-56 rounded-xl shadow-lg mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.297503872253!2d3.856942474161013!3d7.402073794630849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f4b41c2c7f85%3A0x27c2487a223ac96f!2sManhattan%20Hall%2C%20Eleyele%20Road%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1696427351065!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Reception</h3>
            <p className="text-gray-700 mb-1">Venue: Manhattan Hall, Eleyele Road, Ibadan</p>
            <p className="text-gray-700 mb-1">Date: 26th October, 2024</p>
            <p className="text-gray-700 mb-1">Time: 12:00 PM</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=7.402074,3.856942"
              className="inline-block mt-2 px-4 py-2 bg-rose-gold text-white rounded-lg hover:bg-chocolate transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventsPage;
