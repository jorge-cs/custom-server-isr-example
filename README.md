# Custom Express Server ISR Example

As simple example of running redirection (failing) with a custom server towards and ISR location.

# How to reproduce

Start the server with yarn dev

Navigate to localhost:3000/es/b

A page should be shown with the text B. Country - es

This is using default ISR with next.js

Navigate to localhost:3000/es/a

A page should be shown with the text A. Country - es

This is also using default ISR with next.js

Navigate to localhost:3000/a

This will show a page with the text A.Country - and it will display an error: Error: The provided `as` value (/a) is incompatible with the `href` value (/[country]/a). Read more: https://err.sh/vercel/next.js/incompatible-href-as

