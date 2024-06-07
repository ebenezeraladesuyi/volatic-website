// import React from 'react';

// import file from "../../assets/file/VOLATIC ACADEMYprovisionalAdmissionAndTermsNew.pdf";

import { IoCloudDownloadSharp } from "react-icons/io5";

const DownloadFile = () => {
  const handleDownload = () => {
    // Example file URL
    const fileUrl = "https://drive.google.com/file/d/1F01oOAHQkNl4Qvj214Np3NiEO618BQTt/view";

    // Create a link element
    const link = document.createElement('a');
    link.href = fileUrl;

    // Set the download attribute and file name
    link.setAttribute('download', 'volaticdocs.pdf');

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className="font-pop w-full h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[45%] flex flex-col justify-center items-center gap-4 lg:gap-6">
        <div className="text-[#00afef] text-[140px] md:text-[200px] ">
          <IoCloudDownloadSharp />
        </div>

        <h2 className="text-center text-[12px] md:text-[15px] lg:text-[17px]">Click <span className="text-[#00afef]">'Download'</span> to get <span>Volatic Academy Provisional Admission Letter, Terms of Admission, Guarantor's Letter and Code of Conduct documents</span></h2>

        <button onClick={handleDownload} className="text-[14px] md:text-[16px] bg-[#00afef] text-white  hover:text-[#00afef] hover:bg-transparent hover:border-[1px] hover:boder-[#00afef]">Download</button>

      </div>
    </div>
  );
};

export default DownloadFile;
