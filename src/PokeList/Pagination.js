import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="pagination">
      {gotoPrevPage && <Button onClick={gotoPrevPage}>Prev</Button>}
      {gotoNextPage && <Button onClick={gotoNextPage}>Next</Button>}
    </div>
  )
}
