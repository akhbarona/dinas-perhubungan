import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function PDFViewer() {
  const { slug } = useParams();
  const { filename } = useParams();
  console.log(filename);
  const [DetailDocument, setDetailDocument] = useState();
  useEffect(() => {
    axios
      .get('http://adminmesuji.embuncode.com/api/dokumen/' + slug)
      .then((response) => {
        setDetailDocument(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);

  return (
    <section className="section">
      <Container>
        {DetailDocument &&
          DetailDocument.filter((val) => val.dokumen_file_name.replace(/\s/g, '') === filename.replace(/\s/g, '')).map((item, index) => {
            return (
              <iframe src={`data:application/pdf;base64,${item.dokumen_file_data}`} title={item.dokumen_file_name} className="iframe-pdf" key={index}>
                <a href={`data:application/pdf;base64,${item.dokumen_file_data}`}>Download PDF</a>
              </iframe>
            );
          })}
      </Container>
    </section>
  );
}

export default PDFViewer;
