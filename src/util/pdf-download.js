import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function downloadPDF(user, setIconsVisibility, pdfRef) {
    const input = pdfRef.current;
    setIconsVisibility(true);

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
      }).then(() => setIconsVisibility(false));
    }, 1000);
  }
