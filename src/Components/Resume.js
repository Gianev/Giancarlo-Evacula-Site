import React from 'react';
import ReactDOM from 'react-dom';

import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from './images/GiancarloEvaculaResume.pdf';
const Resume = () => (
    <div>
        <PDFViewer>
            <MyDocument />
        </PDFViewer>
    </div>
  );
ReactDOM.render(<Resume />, document.getElementById('root'));
export default Resume;
