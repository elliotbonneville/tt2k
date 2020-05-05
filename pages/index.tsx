/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import Head from 'next/head';

const Home = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Time To 2K</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-155120013-4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-155120013-4');
              `,
          }}
        />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Heading as="h1">Time To 2K</Heading>
        <Box sx={{ paddingTop: 4 }} />
        <Heading sx={{ textAlign: 'center' }}>
          Thank you for your interest. Data will be available soon. If you'd
          like to submit a response to the survey, it is available{' '}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHs5l4YNgnrxhuvUKWk_r6CUTZSj9QBSJeVI1RjIDdsymrEw/viewform?usp=sf_link">
            here
          </a>
          .
        </Heading>
        <Box sx={{ paddingTop: 4 }} />
        <Heading sx={{ textAlign: 'center' }}>Entries so far: 3</Heading>
        <Box sx={{ paddingTop: 4 }} />
        <Text>
          Follow <a href="https://twitter.com/elliotbnvl">@elliotbnvl</a> for
          updates.
        </Text>
      </Box>
    </>
  );
};

export default Home;
