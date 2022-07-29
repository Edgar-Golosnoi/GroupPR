import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckCards({ checklist }) {
  return (
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{checklist.nameEmployer}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{checklist.nameMentor}</h6>
    <Link to={`/checklist/${checklist.id}`} className="btn btn-light my-auto align-self-right mx-3">Подробнее</Link>
  </div>
</div>
  );
}
