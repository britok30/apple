import React, { Fragment } from "react";
import logogrey from "../../Images/logogrey.svg";

// import

const Watch = () => {
    return (
        <Fragment>
            <div className="watchbody">
                <header className="watch-header">
                    <img className="logogrey2" src={logogrey} alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="watch-text">
                                    <h3
                                        className="watch-red wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        Apple Watch
                                    </h3>
                                    <h1
                                        className="watch-main wow fadeInUp"
                                        data-wow-delay=".7s"
                                    >
                                        Change starts <br />
                                        within.
                                    </h1>
                                    <p
                                        className="watch-p wow fadeInUp"
                                        data-wow-delay=".9s"
                                    >
                                        Apple Watch Series 4. Fundamentally
                                        redesigned and <br />
                                        re-engineered to help you be even more
                                        active, <br /> healthy, and connected.
                                    </p>
                                </div>
                                <div className="watch-price">
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
        </Fragment>
    );
};

export default Watch;
