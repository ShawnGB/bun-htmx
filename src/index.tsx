import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import BaseHtml from './templates/BaseHtml';
import { tailwind } from 'elysia-tailwind'; // 1. Import

const app = new Elysia()
  .use(html())
  .use(
    tailwind({
      path: './public/stylesheet.css',
      source: './src/styles/global.css',
      config: './tailwind.config.ts',
    })
  )
  .get('/', () => (
    <BaseHtml>
      <h1 class={'text-6xl text-primary-500'}>Shawn Is so gut</h1>
    </BaseHtml>
  ))
  .listen(3000);

console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`
);
