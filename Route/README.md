# Router와 HTML 차이

```
   - Router :    <Route exact path="/home" component={Home} />
     URL : localhost:3000/home

   - HTML :  <a href=./home.html>
     URL : localhost:80/home.html 
```
  - 두개의 차이점은 확장자를 붙이느냐 안붙이느냐가 가장 큰 차이점이다. 
  - 아래 소스처럼 수정하게되면, URL에 (/) (/home) (/menu) 로 입력하면 이동한다.

## Router 적용방법
 - App.js / index.js 수정 및 component 생성

```js
# App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Copyright from './component/Copyright';
import Home from './component/Home';
import Menu from './component/Menu';
const App = () => (
 
  <Router>
    <>
    <Route exact path="/" component={Copyright} />
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/menu" component={Menu} />
    </Switch>
    </>
  </Router>
  
);

export default App;
```

```js
# index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

```

```html
# index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <title>My React User App</title>
  </head>

  <body>
    <div id="app">
    </div>
  </body>
</html>

```

```js
# /src/component(생성)/Copyright.js(생성)

import React from 'react';

const Copyright = () => {
    return(
        <div>
            <h2>Hello, Copyright</h2>
            <h3>Copyright Page</h3>
        </div>
    )
};

export default Copyright;
```

```js
# /src/component/Home.js(생성)

import React from 'react';

const Copyright = () => {
    return(
        <div>
            <h2>Hello, Home</h2>
            <h3>Home Page</h3>
        </div>
    )
};

export default Home;
```

```js
# /src/component(생성)/Menu.js(생성)

import React from 'react';

const Copyright = () => {
    return(
        <div>
            <h2>Hello, Menu</h2>
            <h3>Menu Page</h3>
        </div>
    )
};

export defaultMenu;
```
