export const downloadPDF = (url: any) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'documento.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};