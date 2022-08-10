import { ReactElement } from 'react';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import Landing from 'sections/landing';

// home page function call
// - calling sections/landing
export default function HomePage() {
  return (
    <Page title="Home">
      <Landing />
    </Page>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="landing">{page}</Layout>;
};
