'use client'
import { useEffect } from 'react';

const TawkToMessenger = () => {
  useEffect(() => {
    // Load Tawk.to script asynchronously
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://embed.tawk.to/61472e1d25797d7a89ffbc6c/1ffv0o9r4';
    
    // Use an id to ensure you don't add multiple scripts to the DOM
    s.id = 'tawk-to-script';

    // Check if the script already exists before appending it
    const existingScript = document.getElementById('tawk-to-script');
    if (!existingScript) {
      document.body.appendChild(s);
    }

    // Cleanup function: remove Tawk.to script when the component unmounts
    return () => {
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToMessenger;
