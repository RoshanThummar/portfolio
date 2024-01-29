import React from 'react';
import ProgressBar from '../../../common/ProgressBar';

function Language() {

  return (
    <div
    style={{
      display:"grid",
      gridTemplateRows: "1fr",
      gap: "10px"
    }}
   >
    <ProgressBar title="React.js" progress={80} />
    <ProgressBar title="Node.js & Express.js" progress={60} />
    <ProgressBar title="MongoDB" progress={60} />

    </div>

  );
}

export default Language;