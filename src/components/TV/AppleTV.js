import React, { Fragment } from "react";
import logogrey from "../../Images/logogrey.svg";

const AppleTV = () => {
    return (
        <Fragment>
            <div className="tvbody">
                <header className="tv-header">
                    <img className="logogrey2" src={logogrey} alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="iphone-text">
                                    <h3
                                        className="iphone-red wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        Apple TV
                                    </h3>
                                    <h1
                                        className="iphone-main wow fadeInUp"
                                        data-wow-delay=".7s"
                                    >
                                        All Apple Originals. <br />
                                        Only on Apple TV+.
                                    </h1>
                                    <p
                                        className="iphone-p wow fadeInUp"
                                        data-wow-delay=".9s"
                                    >
                                        Watch now!
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">&nbsp;</div>
                        </div>
                    </div>
                </header>
            </div>
        </Fragment>
    );
};

export default AppleTV;
