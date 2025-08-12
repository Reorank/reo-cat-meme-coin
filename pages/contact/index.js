
import React, { Fragment } from 'react';
import ContactSection from '../../components/ContactSection';
import PageTitle from '../../components/pagetitle/PageTitle';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ContactPage = (props) => {

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header />
                <main className="page_content">
                    <PageTitle pageTitle={'Contact Cat Coin'} pagesub={'Get In Touch'} />
                    <ContactSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ContactPage;