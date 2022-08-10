import { /*useState,*/ ReactElement } from 'react';

// material-ui
import {
  Grid,
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';
import NationalDataGDPChart from 'sections/dashboard/national-data/gdp';
import CanadaLaborForceSizeChart from 'sections/dashboard/national-data/CanadaLaborForceSize';
import CanadaUnemploymentChart from 'sections/dashboard/national-data/CanadaUnemploymentRate';
import SKDiscountChart from 'sections/dashboard/national-data/SKDiscountRate';
import SKUnemploymentChart from 'sections/dashboard/national-data/SKUnemploymentRate';
import JapanLaborForceSizeChart from 'sections/dashboard/national-data/JapanLaborForceSize';
import JapanUnemploymentChart from 'sections/dashboard/national-data/JapanUnemploymentRate';
import JapanDiscountChart from 'sections/dashboard/national-data/JapanDiscountRate';
import ChinaDiscountChart from 'sections/dashboard/national-data/ChinaDiscountRate';
import GermanyLaborForceSizeChart from 'sections/dashboard/national-data/GermanyLaborForceSize';
import GermanyUnemploymentChart from 'sections/dashboard/national-data/GermanyUnemploymentRate';
import GermanyDiscountChart from 'sections/dashboard/national-data/GermanyDiscountRate';
import UKLaborForceSizeChart from 'sections/dashboard/national-data/UKLaborForceSize';
import IndiaDiscountChart from 'sections/dashboard/national-data/IndiaDiscountRate';


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
    <Page title="National Data">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Canada Labor Force Size" count="24743400" percentage={0.083} isLoss={false}>
            <CanadaLaborForceSizeChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Canada Unemployment Rate" count="4.9" percentage={-0.2} isLoss={true}>
            <CanadaUnemploymentChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="South Korea Discount Rate" count="0.25" percentage={0} isLoss={false}>
            <SKDiscountChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="South Korea Unemployment Rate" count="2.8" percentage={0.1} isLoss={false}>
            <SKUnemploymentChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Japan Labor Force Size" count="74326431.9375" percentage={-0.19} isLoss={true}>
            <JapanLaborForceSizeChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Japan Unemployment Rate" count="2.8" percentage={0.1} isLoss={false}>
            <JapanUnemploymentChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Japan Discount Rate" count="0.3" percentage={0} isLoss={false}>
            <JapanDiscountChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="China Discount Rate" count="2.9" percentage={0} isLoss={false}>
            <ChinaDiscountChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Germany Labor Force Size" count="53077394.09481" percentage={0.58} isLoss={false}>
            <GermanyLaborForceSizeChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Germany Unemployment Rate" count="5.3" percentage={0.3} isLoss={false}>
            <GermanyUnemploymentChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Germany Discount Rate" count="4.5" percentage={0} isLoss={false}>
            <GermanyDiscountChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="UK Labor Force Size" count="41339000" percentage={0.13} isLoss={false}>
            <UKLaborForceSizeChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="India Discount Rate" count="5.15" percentage={0.5} isLoss={false}>
            <IndiaDiscountChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Gross Domestic Product" count="" percentage={0}>
            <NationalDataGDPChart />
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
