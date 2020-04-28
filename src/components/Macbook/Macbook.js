import React, { Fragment } from "react";
import logogrey from "../../Images/logogrey.svg";
import macbookpro from "../../Images/macbookpro.jpg";

const Macbook = () => {
    return (
        <Fragment>
            <div className="macbody">
                <header className="macbook-header">
                    <img className="logogrey2" src={logogrey} alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="macbook-text">
                                    <h3
                                        className="macbook-blue wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        Macbook
                                    </h3>
                                    <h1
                                        className="macbook-main wow fadeInUp"
                                        data-wow-delay=".7s"
                                    >
                                        More power. <br />
                                        More pro.
                                    </h1>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="macbook-p wow fadeInUp">
                                                8-Core <br />
                                                <span className="lite">
                                                    Intel Processor
                                                </span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="macbook-p wow fadeInUp">
                                                32 GB <br />
                                                <span className="lite">
                                                    Memory
                                                </span>
                                            </p>
                                        </div>
                                    </div>
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
                            Macbook Pro
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <img
                            className="macbookpro wow fadeInUp"
                            data-wow-delay="3s"
                            src={macbookpro}
                            alt=""
                        />
                    </div>
                    <div className="col-md-4">
                        <h3 className="macbook-subhead wow fadeInUp">
                            Portable Powerhouse
                        </h3>
                        <p
                            className="macbook-p wow fadeInUp"
                            data-wow-delay="3.5s"
                        >
                            MacBook Pro elevates the notebook to a whole new
                            level of performance and portability. Wherever your
                            ideas take you, you’ll get there faster than ever
                            with high‑performance processors and memory,
                            advanced graphics, blazing‑fast storage, and more —
                            all in a compact 3-pound package.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Macbook;
