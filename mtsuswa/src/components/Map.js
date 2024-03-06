import React from 'react';

const MapComponent = () => {
  return (
    <div className="mt-8">
      <iframe
        className="w-full h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162723.97647489543!2d36.25451849035526!3d-1.0506532044776928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182eb99227e6ddf1%3A0xe39caf365d5abc2e!2sMT%20SUSWA%20CAMPING!5e1!3m2!1sen!2ske!4v1706606801473!5m2!1sen!2ske"
        title="Mt. Suswa Camping Map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
