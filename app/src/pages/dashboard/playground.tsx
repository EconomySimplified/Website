import { /*useState,*/ ReactElement } from 'react';

// material-ui
import {
  Grid,
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';
import MY01YChart from 'sections/dashboard/analytics/MY01YChart'
import MY02YChart from 'sections/dashboard/analytics/MY02YChart';
import MY10YChart from 'sections/dashboard/analytics/MY10YChart';
import { getServerSideProps, MY10YTest } from 'pages/api/playIndex';


// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const DashboardAnalytics = async () => {
  const serverSideProps = await getServerSideProps();

  return (
    <Page title="Consumer Price Index (CPI) Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Treasury Bill (1 Year) Interest Rate" count="23" percentage={-95.3} isLoss={true}>
            <MY01YChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Treasury Bill (2 Year) Interest Rate" count="23" percentage={-95.3} isLoss={true}>
            <MY02YChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Treasury Bond (10 Year) Interest Rate" count="23" percentage={-95.3} isLoss={true}>
            <MY10YChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Treasury Bond (10 Year) Interest Rate" count="23" percentage={-95.3} isLoss={true}>
            <MY10YTest my10y={serverSideProps.props.my10y} />
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
