import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/layout';

const CreateNextJSApp = () => (
    <Layout>
        <Head>
            <title>How to create a Next JS application</title>
        </Head>
        <h1>How to create a Next JS application</h1>
        <h2>
            <Link href="/">
                Back to home
            </Link>
        </h2>
    </Layout>
);

export default CreateNextJSApp;
