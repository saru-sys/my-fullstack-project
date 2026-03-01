import React from "react";
import { useLocation } from "react-router-dom";

export default function PdfView() {
  const location = useLocation();
  const pdfUrl = location.state?.pdfUrl;

  if (!pdfUrl) return <p>No PDF selected!</p>;

  return (
    <div className="pdf-view-container">
      <h2>PDF Viewer</h2>
      <iframe src={pdfUrl} width="80%" height="600px" title="PDF"></iframe>
      <br />
      <a href={pdfUrl} download className="btn">Download PDF</a>
    </div>
  );
}
