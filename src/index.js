import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {firstList, secondList, thirdList} from './data';
import Movies from './components/movieList';
import { Watch } from './components/watchTV';
import {withTv1,withTv2,withTv3} from './data';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><div className="container">
    <Movies films={firstList} title="محبوب‌ترین‌های فیلیمو" />
    <Movies films={secondList} title="فیلم های رایگان" />
    <Movies films={thirdList} title="ماجراجویی" />
  </div>
  <hr/>
  <div className="container">
      <Watch first={withTv1} title="
فیلیمو‌باکس چیست؟ " text="برای تماشای فیلیمو، تلویزیون شما باید هوشمند باشد، اگر نیست، با تهیه یک اندروید باکس، تلویزیون خود را هوشمند کنید، ما به شما فیلیمو باکس را پیشنهاد می‌کنیم که به تلویزیون وصل می‌شود و آن را هوشمند می‌کند. چطوری؟ کافیست ویدیو‌های زیر را تماشا‌کنید." info="اطلاعات بیشتر"/>
      <Watch first={withTv2} title="تلویزیون ما سیستم عامل اندروید دارد." text="اگر روی تلویزیون شما امکان نصب‌ برنامه وجود دارد، کافیست، برنامه Filimo را از گوگل‌پلی جستجو و روی تلویزیون خود نصب کنید. روش نصب برنامه فیلیمو را در ویدیوی مربوط به آن کامل توضیح دادیم."
      info="سایت فیلیمو"/>
      <Watch first={withTv3}  info="اطلاعات بیشتر" title="تلویزیون ما LG است." text="برای تماشا روی تلویزیون‌های LG، هم می‌توانید برنامه Filimo را نصب کنید هم می‌توانید در مرورگر تلویزیون خود، سایت فیلیمو را جستجو کنید. برای جزییات بیشتر ویدیوی مربوط به آن را تماشا‌کنید."/>
    </div></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
