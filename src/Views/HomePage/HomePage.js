import HomeTable from 'modules/tables/components/HomeTable/HomeTable';
import InputArea from 'modules/tables/components/InputArea/InputArea';
import Balance from '../../modules/balance/components/Balance';
import ReportsLink from '../../modules/reports/components/ReportsLink';
import Page from 'modules/SecondPage/Page/Page';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <section>
        <h1>Page for Revenue and Expenses</h1>
        <p>Welcome to the best resource for managing budget</p>
        <div className={s.balanceBlock}>
          <ReportsLink />
          <Balance type="home" />
        </div>

        <div>
          <Page />
        </div>
        <div>
          <InputArea></InputArea>
          <HomeTable></HomeTable>
        </div>
      </section>
    </>
  );
}
