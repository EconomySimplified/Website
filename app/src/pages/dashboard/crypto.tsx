import { /*useState,*/ ReactElement } from 'react';

// material-ui
import {
  Grid,
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';
import CryptoVolumeChart from 'sections/dashboard/crypto/CryptoVolumeChart';
import CryptoOpeningChart from 'sections/dashboard/crypto/CryptoOpeningChart';
//import CryptoClosingChart from 'sections/dashboard/currency/CryptoClosingChart';
//import CryptoHighChart from 'sections/dashboard/currency/CryptoHighChart';
//import CryptoLowChart from 'sections/dashboard/currency/CryptoLowChart';


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
    <Page title="Bitcoin Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Bitcoin Trading Volume" count="593" percentage={37.9} isLoss={false}>
            <CryptoVolumeChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Bitcoin Price" count="22861.81" percentage={-2.5} isLoss={true}>
            <CryptoOpeningChart />
          </AnalyticsDataCard>
        </Grid>
        {/*<Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Bitcoin Closing Price" count="16000" percentage={-2} isLoss={true}>
            <CryptoClosingChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Bitcoin High Price" count="16000" percentage={-2} isLoss={true}>
            <CryptoHighChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Bitcoin Low Price" count="16000" percentage={-2} isLoss={true}>
            <CryptoLowChart />
          </AnalyticsDataCard>
        </Grid>*/}

        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      </Grid>
    </Page>
  );
};

DashboardAnalytics.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DashboardAnalytics;
