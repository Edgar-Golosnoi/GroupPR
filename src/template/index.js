import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import hbs from 'hbs';
import App from '../components/App';

export default function template(initState) {
  const Path = path.join(__dirname, '../view/index.hbs');
  const html = fs.readFileSync(Path, 'utf-8');
  const hbsTemplate = hbs.compile(html);
  const reactComponent = renderToString(
    <StaticRouter location={initState.path}>
      <App {...initState} />
    </StaticRouter>,
  );
  return hbsTemplate({
    initState: JSON.stringify(initState),
    content: reactComponent,
    title: 'Заказчику понравится',
  });
}
