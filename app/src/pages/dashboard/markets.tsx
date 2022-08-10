import { /*useState,*/ ReactElement } from 'react';

// material-ui
import {
  Grid,
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';
import IndexSPYChart from 'sections/dashboard/markets/spy-index';
import IndexUPROChart from 'sections/dashboard/markets/upro-index';
import IndexVolumeChart from 'sections/dashboard/markets/index-volume';
import CommoditiesChart from 'sections/dashboard/commodities/brentoil';


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
    <Page title="Markets Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="SPY Stock Index" count="411.79" percentage={-0.57} isLoss={true}>
            <IndexSPYChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="UPRO Stock Index" count="44.62" percentage={-1.7} isLoss={true}>
            <IndexUPROChart />
          </AnalyticsDataCard>
        </Grid>
        {/*<Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Stock Trade Volume" count="17445" percentage={94} isLoss={false}>
            <IndexVolumeChart />
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
