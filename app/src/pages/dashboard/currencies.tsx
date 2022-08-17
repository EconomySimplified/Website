import { /*useState,*/ ReactElement } from 'react';

// material-ui
import {
  Grid,
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';
import EuroForexRateChart from 'sections/dashboard/forex/euro-us-forex';
import GBForexRateChart from 'sections/dashboard/forex/gb-us-forex';
import ChinaForexRateChart from 'sections/dashboard/forex/china-us-forex';
import JapanForexRateChart from 'sections/dashboard/forex/japan-us-forex';
import KoreaForexRateChart from 'sections/dashboard/forex/korea-us-forex';
import IndiaForexRateChart from 'sections/dashboard/forex/india-us-forex';
import CanadaForexRateChart from 'sections/dashboard/forex/canada-us-forex';
import DEMForexRateChart from 'sections/dashboard/forex/dem-us-forex';


// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const DashboardAnalytics = () => {

  return (
    <Page title="Currencies Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Euro/US Dollar Exchange Rate" count="0.98" percentage={0} isLoss={false}>
            <EuroForexRateChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="British Pound/US Dollar Exchange Rate" count="0.83" percentage={0} isLoss={false}>
            <GBForexRateChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Chinese RMB/US Dollar Exchange Rate" count="6.75" percentage={0} isLoss={false}>
            <ChinaForexRateChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Japanese Yen/US Dollar Exchange Rate" count="134.97" percentage={0.16} isLoss={false}>
            <JapanForexRateChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Korean Won/US Dollar Exchange Rate" count="1306.72" percentage={0.46} isLoss={false}>
            <KoreaForexRateChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Indian Rupee/US Dollar Exchange Rate" count="79.59" percentage={0.01} isLoss={true}>
            <IndiaForexRateChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Canadian Dollar/US Dollar Exchange Rate" count="1.29" percentage={0} isLoss={false}>
            <CanadaForexRateChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Deutsches Mark/US Dollar Exchange Rate" count="1.91" percentage={-0.52} isLoss={true}>
            <DEMForexRateChart />
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
