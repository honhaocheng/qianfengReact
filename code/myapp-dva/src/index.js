import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva(); // 不配置默认是hash模式
const app = dva({
  // history: require("history").createBrowserHistory() // 此处配置为browser模式
  history: require("history").createHashHistory()// 此处配置为hash模式（可以省略）
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/maizuo').default);
// app.model(require('./models/aaa').default);
// app.model(require('./models/bbb').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
