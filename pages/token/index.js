
import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TokenPage = (props) => {

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header />
                <main className="page_content">
                    <PageTitle pageTitle={'Buy Cat Coin'} pagesub={'Presale'} />
                    <div className="token-sec pt-0">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <h2>🐱 Cat Coin Presale</h2>
                                    <p>Join the revolution! Buy Cat Coin and support FIFA football development worldwide.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5>Presale Details</h5>
                                                    <p><strong>Price:</strong> 0.0001 BNB per CAT</p>
                                                    <p><strong>Min Buy:</strong> 0.1 BNB</p>
                                                    <p><strong>Max Buy:</strong> 5 BNB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5>Football Impact</h5>
                                                    <p>25% of funds go directly to FIFA football development programs</p>
                                                    <p>5% dedicated to youth scholarships</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default TokenPage;