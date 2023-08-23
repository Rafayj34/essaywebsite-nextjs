
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResponseToast = (message) => {
   
      return (
        <>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {showToast()}
        </>
      );
    };

export default ResponseToast