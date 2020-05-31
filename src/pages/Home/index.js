import React from 'react';
import './styles.scss';

function Home (props) {
    return (
        <article>
            <section className="canvas">
                <div className="bear bounce-1">
                    <div className="ear-left">
                        <div className="ear-left__inner"/>
                    </div>
                    <div className="ear-right">
                        <div className="ear-right__inner"/>
                    </div>
                    <div className="head">
                        <div className="eye-left">
                            <div className="eye-left__inner animated-right-eye"/>
                        </div>
                        <div className="eye-right">
                            <div className="eye-right__inner animated-right-eye"/>
                        </div>
                        <div className="mouth">
                            <div className="mouth__nose"></div>
                            <div className="mouth__line"></div>
                            <div className="mouth__line-diagonal-right"></div>
                            <div className="mouth__line-diagonal-left"></div>
                        </div>
                    </div>
                    <div className="bow-1"/>
                    <div className="bow-2"/>
                    <div className="bow-4"/>
                    <div className="bow-5"/>
                    <div className="bow-3"/>

                </div>
                <div className="shadow"/>
            </section>
            <section className="canvas">
                <div className="bear panda">
                    <div className="ear-left black animated-ear"/>
                    <div className="ear-right black animated-ear"/>
                    <div className="head white">
                        <div className="eye-left black">
                            <div className="eye-left__inner white"/>
                        </div>
                        <div className="eye-right black">
                            <div className="eye-right__inner white"/>
                        </div>
                        <div className="mouth white">
                            <div className="mouth__nose"/>
                            <div className="mouth__line"/>
                            <div className="mouth__cross-line"/>
                        </div>
                    </div>
                    <div className="body animated-body">
                        <div className="hand-left"/>
                        <div className="hand-right"/>
                    </div>
                    <div className="leg-right"/>
                    <div className="leg-left"/>

                </div>
                <div className="shadow"/>
            </section>
            <section className="canvas">
                <div className="bear harry">
                    <div className="ear-left "/>
                    <div className="ear-right "/>
                    <div className="back-hair-2"/>
                    <div className="back-hair"/>
                    <div className="head white">
                        <div className="eye-left black">
                            <div className="eye-left__inner white"/>
                        </div>
                        <div className="glass-inner" />
                        <div className="eye-right black">
                            <div className="eye-right__inner white"/>
                        </div>
                        <div className="bangs"/>
                        <div className="bangs-2"/>

                    </div>

                    <div className="body ">
                        <div className="hand-left"/>
                        <div className="hand-right"/>
                    </div>
                    <div className="leg-right"/>
                    <div className="leg-left"/>
                </div>
            </section>
        </article>);
}
export default Home;
