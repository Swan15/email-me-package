# `@emailme/emailme-js` utility function for sending email notifications to the emailMe api

- **Documentation:** https://emailme.lol/docs
- Generate API key: https://emailme.lol/

The emailMe package is a utility for sending email notifications using the Email Me API. It provides a simple and convenient way to send emails with customizable options.

## Installation

```sh
npm install @emailme/emailme-js
```
or 

```sh
yarn add @emailme/emailme-js
```

Add your API key to your .env file:
```env
EMAIL_ME_API_KEY=YOUR_KEY
```

Then you're able to import the function and send email notifications to your email.

```js
import { emailMe } from '@emailme/emailme-js'

emailMe('emailMe is the best', 'it sure is')
```
**Note: Your API key is not public do not use on any client side application. If you are using Next.js we recommend using it only in Server actions or in API routes.**
