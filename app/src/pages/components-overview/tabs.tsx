import { ReactElement } from 'react';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import BasicTabs from 'sections/components-overview/tabs/BasicTabs';
import ScrollableTabs from 'sections/components-overview/tabs/ScrollableTabs';
import IconTabs from 'sections/components-overview/tabs/IconTabs';
import CenteredTabs from 'sections/components-overview/tabs/CenteredTabs';
import VerticalTabs from 'sections/components-overview/tabs/VerticalTabs';

// ==============================|| COMPONENTS - TABS ||============================== //

const ComponentTabs = () => (
  <Page title="Tabs">
    <ComponentSkeleton>
      <ComponentHeader
        title="Tabs"
        caption="Tabs make it easy to explore and switch between different views."
        directory="src/pages/components-overview/tabs"
        link="https://mui.com/material-ui/react-tabs/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Stack spacing={1}>
              <Typography variant="h5">Basic</Typography>
              <BasicTabs />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={1}>
              <Typography variant="h5">Color Tab with Disabled Tab + Scrollable Tabs</Typography>
              <ScrollableTabs />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={1}>
              <Typography variant="h5">Icon Tabs</Typography>
              <IconTabs />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={1}>
              <Typography variant="h5">Centered Tabs</Typography>
              <CenteredTabs />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={1}>
              <Typography variant="h5">Vertical Tabs</Typography>
              <VerticalTabs />
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  </Page>
);

ComponentTabs.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="component">{page}</Layout>;
};

export default ComponentTabs;
