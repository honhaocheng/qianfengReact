import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './02-class+ts/01-state';
// import App from './02-class+ts/02-todolist';
// import App from './02-class+ts/03-prop';
// import App from './02-class+ts/04-抽屉';
// import App from './03-function+ts/01-state';
// import App from './03-function+ts/02-todo';
// import App from './03-function+ts/03-props';
// import App from './03-function+ts/04-抽屉';
// import App from './04-router/App';
// import App from './05-redux/App';
// import App from './06-antdmobile/App';
import App from './07-antd-EditableProTable/App';
import reportWebVitals from './reportWebVitals';

// import './01-ts基础/01-基本类型'
// import './01-ts基础/02-数组'
// import './01-ts基础/03-对象'
// import './01-ts基础/04-函数'
// import './01-ts基础/05-类'
// import './01-ts基础/06-类+接口'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
