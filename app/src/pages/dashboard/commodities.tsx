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
import BrentOilChart from 'sections/dashboard/commodities/brentoil';
import CocoaChart from 'sections/dashboard/commodities/cocoa';
import CoffeeChart from 'sections/dashboard/commodities/coffee';
import CornChart from 'sections/dashboard/commodities/corn';
import CottonChart from 'sections/dashboard/commodities/cotton';
import EthanolChart from 'sections/dashboard/commodities/ethanol';
import GoldChart from 'sections/dashboard/commodities/gold';
import LumberChart from 'sections/dashboard/commodities/lumber';
import NaturalGasChart from 'sections/dashboard/commodities/natural-gas';
import PalladiumChart from 'sections/dashboard/commodities/palladium';
import PlatinumChart from 'sections/dashboard/commodities/platinum';
import RhodiumChart from 'sections/dashboard/commodities/rhodium';
import RiceChart from 'sections/dashboard/commodities/rice';
import RobustaChart from 'sections/dashboard/commodities/robusta';
import RubberChart from 'sections/dashboard/commodities/rubber';
import SilverChart from 'sections/dashboard/commodities/silver';
import SoybeanChart from 'sections/dashboard/commodities/soybean';
import SugarChart from 'sections/dashboard/commodities/sugar';
import WheatChart from 'sections/dashboard/commodities/wheat';
import WTIOilChart from 'sections/dashboard/commodities/wti-oil';


// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const DashboardAnalytics = () => {

  return (
    <Page title="Commodities Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Brent Oil Price" count="105.29" percentage={-0.039} isLoss={true}>
            <BrentOilChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Cocoa Price" count="2376.5" percentage={0.25} isLoss={false}>
            <CocoaChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Coffee Price" count="2.15" percentage={0} isLoss={false}>
            <CoffeeChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Corn Price" count="5.99" percentage={-0.17} isLoss={true}>
            <CornChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Cotton Price" count="1" percentage={0} isLoss={false}>
            <CottonChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Ethanol Price" count="2.16" percentage={0} isLoss={false}>
            <EthanolChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Gold Price" count="1719.16" percentage={-0.071} isLoss={true}>
            <GoldChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Lumber Price" count="552" percentage={0} isLoss={false}>
            <LumberChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Natural Gas Price" count="8.8" percentage={0} isLoss={false}>
            <NaturalGasChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Palladium Price" count="1957" percentage={-0.15} isLoss={true}>
            <PalladiumChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Platinum Price" count="881" percentage={-0.11} isLoss={true}>
            <PlatinumChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Rhodium Price" count="14850" percentage={0} isLoss={false}>
            <RhodiumChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Rice Price" count="17.09" percentage={0} isLoss={false}>
            <RiceChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Robusta Price" count="1986" percentage={0.05} isLoss={false}>
            <RobustaChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Rubber Price" count="1.94" percentage={0} isLoss={false}>
            <RubberChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Silver Price" count="18.71" percentage={-0.05} isLoss={true}>
            <SilverChart />
          </AnalyticsDataCard>
        </Grid>
        {/* row 5 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Soybean Price" count="15.65" percentage={0} isLoss={false}>
            <SoybeanChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Sugar Price" count="0.17" percentage={0} isLoss={false}>
            <SugarChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="Wheat Price" count="347" percentage={0} isLoss={false}>
            <WheatChart />
          </AnalyticsDataCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticsDataCard title="West Texas Intermediate Oil Price" count="95.98" percentage={0.06} isLoss={false}>
            <WTIOilChart />
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
