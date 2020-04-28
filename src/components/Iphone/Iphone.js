import React, { Fragment } from "react";
import logogrey from "../../Images/logogrey.svg";
import iphone11 from "../../Images/iphone11.jpg";

// import

const Iphone = () => {
    return (
        <Fragment>
            <div className="iphonebody">
                <header className="iphone-header">
                    <img className="logogrey2" src={logogrey} alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="iphone-text">
                                    <h3
                                        className="iphone-red wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        iPhone
                                    </h3>
                                    <h1
                                        className="iphone-main wow fadeInUp"
                                        data-wow-delay=".7s"
                                    >
                                        The ultimate <br />
                                        iPhone
                                    </h1>
                                    <p
                                        className="iphone-p wow fadeInUp"
                                        data-wow-delay=".9s"
                                    >
                                        The future is here. Join the iPhone
                                        Upgrade <br />
                                        Program to get the latest iPhone - NOW!
                                    </p>
                                </div>
                                <div className="iphone-price">
                                    <h3
                                        className="price wow fadeInUp"
                                        data-wow-delay="1s"
                                    >
                                        From $699
                                    </h3>
                                    <p
                                        className="buy-red wow fadeInUp"
                                        data-wow-delay="1s"
                                    >
                                        Buy Now >
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">&nbsp;</div>
                        </div>
                    </div>
                </header>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1
                            className="apple-lead wow fadeInUp"
                            data-wow-delay="2s"
                        >
                            iPhone 11 Pro
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <img
                            className="iphonepro wow fadeInUp"
                            data-wow-delay="3s"
                            src={iphone11}
                            alt=""
                        />
                    </div>
                    <div className="col-md-4">
                        <h3
                            className="iphone-subhead wow fadeInUp"
                            data-wow-delay="3s"
                        >
                            And then there was pro.
                        </h3>
                        <p
                            className="iphone-p wow fadeInUp"
                            data-wow-delay="3.5s"
                        >
                            A transformative triple‑camera system that adds tons
                            of capability without complexity. An unprecedented
                            leap in battery life. And a mind‑blowing chip that
                            doubles down on machine learning and pushes the
                            boundaries of what a smartphone can do. Welcome to
                            the first iPhone powerful enough to be called Pro.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Iphone;
