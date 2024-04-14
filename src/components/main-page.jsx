import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import DynamicDisplaySection from "./dynamic-display-section";
import Header from "./header";

export default function MainPage({ user, setUser }) {
  const [hideDeleteIcons, setHideDeleteIcons] = useState(false);
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    setHideDeleteIcons(true);

    setTimeout(() => {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 10;

        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save(`${user.firstName} ${user.lastName} CV.pdf`);
      }).then(() => setHideDeleteIcons(false));
    }, 1000);
  };

  return (
    <>
      <main className="main-section">
        <div ref={pdfRef} className="page-section">
          <Header user={user} />
          <DynamicDisplaySection arrayName={"schools"} user={user} setUser={setUser} hideIcons={hideDeleteIcons} />
          <DynamicDisplaySection arrayName={"experience"} user={user} setUser={setUser} hideIcons={hideDeleteIcons} />
        </div>
        <button className="btn btn__download" onClick={downloadPDF}>
          DOWNLOAD PDF
        </button>
      </main>
    </>
  );
}

MainPage.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
