"use client";
import { useEffect, useRef, useState } from "react";
import { GlobalWorkerOptions, getDocument, version } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

const PDFViewer = ({ url }) => {
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const renderPDF = async () => {
      setLoading(true);
      setError("");
      try {
        const pdf = await getDocument(url).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
      } catch (err) {
        setError("Không thể tải file PDF. " + err.message);
      }
      setLoading(false);
    };
    renderPDF();
  }, [url]);

  if (loading) return <div className="text-center text-lg">Đang tải file PDF...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "auto", maxWidth: 900, borderRadius: 12, boxShadow: "0 2px 16px #0001" }} />
    </div>
  );
};

export default PDFViewer;