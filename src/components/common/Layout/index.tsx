import { useCallback, ReactNode, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';
import Breadcrumb from './BreadcrumbCustom';
import { ParsedUrlQuery } from 'querystring';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())
const Layout = ({ children }: { children: ReactNode }) => {

    const getDefaultTextGenerator = useCallback((subpath: string) => {
        return {
            product: "Product",
        }[subpath] || subpath;
    }, [])

    const getTextGenerator = async (param: string, query: ParsedUrlQuery) => {
        let data = { name: ''}
        return { 
            "product_id": (data = await fetcher(`/api/product/${query.product_id}`) && data.name),
        }[param];
    }

    return (
        <>
            <Head>
                <title>NextShop2</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                {/* <Container maxW={'container.xl'}>
                    <Breadcrumb getDefaultTextGenerator={getDefaultTextGenerator} getTextGenerator={getTextGenerator}/>
                </Container> */}
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;