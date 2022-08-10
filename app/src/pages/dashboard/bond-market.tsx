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
    <Page title="Bond Market Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Treasury Bill (1 Year) Interest Rate" count="3.29" percentage={0.18} isLoss={false}>
            <MY01YChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Treasury Bill (2 Year) Interest Rate" count="3.24" percentage={0.21} isLoss={false}>
            <MY02YChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Treasury Bond(10 Year) Interest Rate" count="2.77" percentage={-0.14} isLoss={true}>
            <MY10YChart />
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
