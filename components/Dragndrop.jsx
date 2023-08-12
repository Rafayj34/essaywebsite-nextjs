"use client";
import { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
const acceptedFileTypes = {
  "image/jpeg": [".jpeg"],
  "image/jpg": [".jpg"],
  "image/png": [".png"],
  "application/pdf": [".pdf"],
  "application/docx": [".docx"],
  "text/plain": [".txt"],
};

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 4, // Increased border width
  borderRadius: 4, // Increased border radius
  borderColor: "rgb(148 163 184)",
  borderStyle: "dashed",
  backgroundColor: "rgb(226 232 240)",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#fb923c",
};

const acceptStyle = {
  borderColor: "#00a8a0",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export const Dragndrop = () => {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [fileLimitExceeded, setFileLimitExceeded] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      // Append each file to the FormData object
      files.forEach((file) => {
        formData.append("files", file);
        console.log(file);
      });
      console.log(email)
      console.log(phoneNumber)
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber); // Include the phone number
      console.log("running before post request")
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      console.log("running after post request")
      if (response.ok) {
        console.log("Files uploaded successfully");
      } else {
        console.error("Error uploading files");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: acceptedFileTypes,
    multiple: false,
    onDrop: (droppedFiles) => {
      if (files.length < 5) {
        setFileLimitExceeded(false);
      }
      if (files.length >= 5) {
        setFileLimitExceeded(true);
        return; 
      }
      const updatedFiles = droppedFiles.map((file) => {
        // Create a mapping to keep track of filenames and their occurrences
        const filenameOccurrences = {};

        // Check if the filename already exists in the existing files
        for (const existingFile of files) {
          if (existingFile.name === file.name) {
            if (!filenameOccurrences[file.name]) {
              filenameOccurrences[file.name] = 1;
            }
            filenameOccurrences[file.name]++;
          }
        }

        let updatedFile = file;

        // Check if the filename already exists in the mapping
        if (filenameOccurrences[file.name]) {
          // Separate filename and extension
          const filenameParts = file.name.split(".");
          const filename = filenameParts.slice(0, -1).join(".");
          const extension = filenameParts[filenameParts.length - 1];

          // Rename the file with "(occurrence)" appended
          const newName = `${filename}(${
            filenameOccurrences[file.name]
          }).${extension}`;
          updatedFile = new File([file], newName, { type: file.type });
        }

        return updatedFile;
      });

      setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="flex items-center border p-2 mb-2 rounded-lg my-3"
    >
      <div className="flex-1">{file.name}</div>
      <div className="text-gray-500 text-sm ml-2">Size: {file.size} bytes</div>
      <button
        className="text-red-500 hover:text-red-600 ml-2"
        onClick={() => {
          const newFiles = files.filter((f) => f.name !== file.name);
          setFiles(newFiles); // Update the state
        }}
      >
        &times;
      </button>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });

  return (
    <div className="mx-auto grid mt-10 pt-10 grid-cols-1 sm:grid-cols-2  mb-10">
      <div className="flex flex-col text-center justify-center pb-4 border-r-0 sm:border-r-2 sm:border-b-0 border-orange-500 border-b-2 m-2 p-4">
        <div className="container mx-auto w-fit">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 border-b-2 border-r-4 border-orange-400 shadow-md p-2">
            Introducing <span className="text-orange-400">Dropzone</span>
          </h2>
          <div className="flex flex-col  justify-center items-center ">
            <div className="max-w-xs p-4  border-b-2 border-gray-300  bg-white  text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Step 1: Upload Task Sheet
              </h3>
              <p className="text-slate-500">
                Begin by uploading your task sheet using our user-friendly drag
                and drop interface.
              </p>
            </div>
            <div className="max-w-xs p-4  border-b-2 border-gray-300  bg-white  text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Step 2: Review & Analysis
              </h3>
              <p className="text-slate-500">
                Our team of experts will carefully review and analyze your task
                sheet to provide valuable insights and recommendations.
              </p>
            </div>
            <div className="max-w-xs p-4 border-b-2 border-gray-300  bg-white  text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Step 3: Receive Consultation
              </h3>
              <p className="text-slate-500">
                We&apos;ll send you a detailed consultation report via email,
                outlining our observations and suggestions to help you achieve
                your goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto w-fit m-2">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Upload your task sheet and get a free Consultation.
        </h1>
        <div
          {...getRootProps({ style })}
          className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[450px] border-4 border-dashed border-gray-400 rounded-lg flex items-center justify-center "
        >
          <input {...getInputProps()} />
          {fileLimitExceeded ? (
            <p className="text-red-500">
              File limit exceeded. You can&apos;t add more files.
            </p>
          ) : (
            <div className="text-center">
              <p className="text-gray-600">
                Drag and drop files or Click to upload
              </p>
            </div>
          )}
        </div>
        <aside>{thumbs}</aside>
        <button
          onClick={handleUploadClick}
          className={`${
            thumbs.length > 0
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-400 cursor-not-allowed"
          } text-white px-4 py-2 mt-4 rounded-md transition-colors`}
          disabled={thumbs.length === 0}
        >
          Upload
        </button>
        {/* Modal */}
        {showModal && (
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity ${
              showModal ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-2xl font-bold mb-4">
                Enter your email address
              </h2>
              <form>
                <input
                  type="email" // Set input type to "email"
                  className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" // Add the email pattern
                  required // Mark the field as required
                />
                <input
                  type="tel"
                  className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Phone number (optional)"
                  // Add any additional phone number validation if needed
                />

                <div className="flex justify-end">
                  <button
                    className="bg-orange-400 text-white px-4 py-2 mr-2 rounded-md hover:bg-orange-500 transition-colors"
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                  <button
                    type="button" // Use type="button" to prevent form submission
                    className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-colors"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
