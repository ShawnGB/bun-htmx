export default function BaseHtml({ children }: { children: JSX.Element }) {
  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang='en'>
        <head>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
            rel='stylesheet'
          />
          <title>Uskillity SSR htmx</title>
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
