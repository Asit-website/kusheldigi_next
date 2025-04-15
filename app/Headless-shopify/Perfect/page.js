import React, { useRef, useEffect } from 'react';
import "./perfec.css";

const Progress = () => {
    const phasesRef = useRef(null);

    useEffect(() => {
        if (phasesRef.current) {
            setTimeout(() => {
                phasesRef.current.scrollLeft = 0;
            }, 50);
        }
    }, []);

    return (
        <div className='progress-outer-container'>
            <div className="progress-inner-container">
                <h2 className='progress-sm-heading primary-heading'>
                Our Headless Shopify Development Process
                </h2>
                {/* <h3 className='progress-sm-heading primary-heading'>
                    Kushel Digi believes in employing latest and advanced global process to deliver projects best suited with your business needs.
                </h3> */}

                <div className="phases-wrapper">
                    <div ref={phasesRef} className="phases">
                        <div id='phase1' className="process-button"></div>
                        <div id='phase1Name'>
                            <span>01</span>
                            <span className='procBCom'>Discovery and <br></br> Strategy</span>
                        </div>

                        <div id='phase2' className="process-button"></div>
                        <div id='phase2Name'>
                            <span>02</span>
                            <span className='procBCom'>Architecture and <br></br>Planning</span>
                        </div>

                        <div id='phase3' className="process-button"></div>
                        <div id='phase3Name'>
                            <span>03</span>
                            <span className='procBCom'>Development and Integration</span>
                        </div>

                        <div id='phase4' className="process-button"></div>
                        <div id='phase4Name'>
                            <span>04</span>
                            <span className='procBCom'>Customization and Design</span>
                        </div>

                        <div id='phase5' className="process-button"></div>
                        <div id='phase5Name'>
                            <span>05</span>
                            <span className='procBCom'>Testing and Quality <br></br>Assurance</span>
                        </div>

                        <div id='phase6' className="process-button"></div>
                        <div id='phase6Name'>
                            <span>06</span>
                            <span className='procBCom'>Deployment and Optimization</span>
                        </div>

                        <div id='phase7' className="process-button"></div>
                        <div id='phase7Name'>
                            <span>07</span>
                            <span className='procBCom'>Training and Support</span>
                        </div>

                        <div id='phase8' className="process-button"></div>
                        <div id='phase8Name'>
                            <span>08</span>
                            <span className='procBCom'>Growth and Scaling</span>
                        </div>

                        {/* <div id='phase9' className="process-button"></div>
                        <div id='phase9Name'>
                            <span className='procBCom'>User Acceptance Testing</span>
                        </div>

                        <div id='phase10' className="process-button"></div>
                        <div id='phase10Name'>
                            <span>06</span>
                            <span className='procBCom'>Final Touches</span>
                        </div>

                        <div id='phase11' className="process-button"></div>
                        <div id='phase11Name'>
                            <span>07</span>
                            <span className='procBCom'>Deployment</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;