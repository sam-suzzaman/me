const ResumeDownloadHandler = () => {
    const fileUrl = "assets/resume.pdf";

    // Use the fetch API to fetch the file
    fetch(fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
            // Create a temporary anchor element
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;

            // Set the filename for the download
            link.setAttribute("download", "samsuzzaman_resume.pdf");

            // Append the anchor to the body and trigger the click event
            document.body.appendChild(link);
            link.click();

            // Cleanup
            link.parentNode.removeChild(link);
        })
        .catch((error) => console.error("Error downloading the file:", error));
};

export default ResumeDownloadHandler;
