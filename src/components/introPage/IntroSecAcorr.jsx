import React from 'react'
import './IntroSecAcorr.css'
import GetStarted from './GetStarted'

export default function IntroSecAcorr() {
    return (
        <div className='accor-sec'>
            <h2 className='seconhd'>Frequently Asked Questions</h2>
            <div className="accordion bg-dark" id="accordionExample">
                <div className="accordion-item my-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Betaflix?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body bg-dark text-white">
                            Betaflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How much does Betaflix cost?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Watch  Betaflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2">
                    <h2 className="accordion-header bg-dark">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Where can I watch?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Watch anywhere, anytime. Sign in with your Betaflix account to watch instantly on the web at Betaflix.com from your personal computer or on any internet-connected 
                            device that offers the Betaflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Betaflix with you anywhere.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2">
                    <h2 className="accordion-header bg-dark">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How do can I cancle?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Betaflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2">
                    <h2 className="accordion-header bg-dark">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What can I watch on Betaflix?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Betaflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Betaflix originals, and more. Watch as much as you want, anytime you want.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2">
                    <h2 className="accordion-header bg-dark">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Is Betaflix good for kids?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The Betaflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </div>
                    </div>
                </div>
                </div>
                <GetStarted/>
            </div>
        )
}