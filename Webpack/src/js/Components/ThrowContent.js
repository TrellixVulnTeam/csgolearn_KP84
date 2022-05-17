import React, { lazy, Suspense } from 'react';
const Throw = lazy(() => import('./Maps/Throw.js'));

export default function ThrowContent(){
      return(
        <div className="content">
          <h1>Раскидка гранат в CS:GO</h1>
          <p>Cамый полный обучающий гайд раскидки гранат в CS:GO на популярных картах, это то, что Вам нужно. В этой статье Вы наглядно увидите качественные раскидки гранат smoke, на картах Dust 2, Mirage, Inferno, Overpass, Nuke, Vertigo, Ancient.</p>
          <div className="guide">
          <p>Выбери карту и нажми на необходимый смок:</p>
          <Suspense fallback={<div>...Loading</div>}><Throw /></Suspense>
          </div>
        </div>
      );
  }