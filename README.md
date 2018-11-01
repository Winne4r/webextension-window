# webextension-window

Library for accessing document.window variable from content scripts with no deps.

### Installation
```yarn add webextension-window``` or ```npm install webextension-window```

### Example
```
import getVariable from 'webextension-window';

const value = getVariable('someWindowValue'); //equal to window.someWindowValue
```