'use client'
import { useEffect } from 'react';

const TawkToMessenger = () => {
  useEffect(() => {
    // Load Tawk.to script asynchronously
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://embed.tawk.to/61472e1d25797d7a89ffbc6c/1ffv0o9r4';
    // Replace 'YOUR_TAWKTO_WIDGET_CODE' with your actual Tawk.to widget code

    // Append the script to the document body instead of head
    document.body.appendChild(s);

    return () => {
      // Remove Tawk.to script when the component unmounts
      document.body.removeChild(s);
    };
  }, []);

  return (
    
    // This component doesn't render anything, as the Tawk.to widget is loaded externally.
    // You can add any custom styling or div elements if needed.
    <></>
  );
};

export default TawkToMessenger;
