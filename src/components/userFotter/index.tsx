import Link from 'next/link'
import React, { Fragment } from 'react'
import { FotterAssets } from '../../staticData/img'

const UserFotter = () => {
    return (
        <Fragment>
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <img src={FotterAssets.whiteLogo} alt="{`img`}" />
                                    </Link>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </div>
                                <ul className="social">
                                    <li>
                                        <Link href="/"><i className="flaticon-facebook-letter-logo" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><i className="flaticon-twitter-black-shape" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><i className="flaticon-instagram-logo" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><i className="flaticon-youtube" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>
                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Address:</span> 2750 Quadra Street Victoria, Canada
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <Link href="/"><span className="__cf_email__" data-cfemail="4124372e2d352001262c20282d6f222e2c">[email&nbsp;protected]</span></Link>
                                    </li>
                                    <li><span>Phone:</span> <Link href="/">+44 587 154756</Link></li>
                                    <li><span>Fax:</span> <Link href="/">+44 785 4578964</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright 2020 <Link href="/">Pham Dong</Link>. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li><Link href="/">Privacy Policy</Link></li>
                                    <li><Link href="/">Terms &amp; Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-map">
                    <img src={FotterAssets.circleMap} alt="{`img`}" />
                </div>
            </footer>
        </Fragment>
    )
}

export default UserFotter
