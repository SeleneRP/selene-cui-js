# JavaScript Bindings for Selene CUI 

This JavaScript library is part of the Selene project. It provides utility methods for interacting with Selene CUI, allowing the embedded browser to interact with the game and vice-versa.

## Installation

```bash
npm install selene-cui-js
```

## Usage

```javascript
import { quit, openUrl, rpc, onEvent } from 'selene-cui-js';

// Quit the game
quit();

// Open a URL in the system's default browser (as opposed to the embedded browser)
openUrl('https://example.com');

// Call a custom RPC method you've defined in a bundle
rpc('myCustomMethod', { foo: 'bar' });

// Listen for a custom event you fire in a bundle
onEvent('myCustomEvent', (data) => {
  console.log('Received custom event:', data);
});
```