import { /*useState,*/ ReactElement } from 'react';

// material-ui
import {
  Grid,
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';
import USUnemploymentChart from 'sections/dashboard/us-macro/us-unemployment';
import TotalQuitsChart from 'sections/dashboard/us-macro/total-jobs-quit';
import TotalUnfilledVacanciesChart from 'sections/dashboard/us-macro/total-unfilled';
import EFFRChart from 'sections/dashboard/us-macro/effr';
import ConsumerLoansChart from 'sections/dashboard/us-macro/consumer-loans';
import ConsumerCreditChart from 'sections/dashboard/us-macro/consumer-credit';


// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const DashboardAnalytics = () => {
  //const theme = useTheme();
  //const [value, setValue] = useState('today');
  //const [slot, setSlot] = useState('week');
  //const [quantity, setQuantity] = useState('By volume');

  /*const handleQuantity = (e: SelectChangeEvent) => {
    setQuantity(e.target.value as string);
  };

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment) setSlot(newAlignment);
  };*/

  return (
    <Page title="US Macroeconomic Data Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="US Unemployment Rate" count="3.5" percentage={-0.1} isLoss={true}>
            <USUnemploymentChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Total Jobs Quit (in Thousands)" count="4237" percentage={-0.87} isLoss={true}>
            <TotalQuitsChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Total Unfilled Job Vacancies" count="11254000" percentage={-3.6} isLoss={true}>
            <TotalUnfilledVacanciesChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Effective Federal Funds Rate" count="2.33" percentage={0} isLoss={false}>
            <EFFRChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Total Consumer Loans (in billions of US Dollars)" count="893.448" percentage={0.29} isLoss={false}>
            <ConsumerLoansChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Total Consumer Credit (Owned and Securitized) (in billions of US Dollars)" count="1125.7538" percentage={1.3} isLoss={false}>
            <ConsumerCreditChart />
          </AnalyticsDataCard>
        </Grid>

        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      </Grid>
    </Page>
  );
};

DashboardAnalytics.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DashboardAnalytics;
