// ABOUT US PAGE

import './css/abtus.css'

import abtus_1 from './imgs/abtus1.png'
import abtus_2 from './imgs/abtus2.png'


function Aboutus()
{

    return(
        <>
               <div className="image-container">
                <div className="text mt-2">ABOUT US</div>
                </div>


                <div className="container-fluid mt-5">
                    <div className="row justify-content-center">
                        
                        <div className="col-md-4 m-2 p-0 ">
                            <img src={ abtus_1 } alt="" className="img_size" />
                        </div>
                        
                        <div className="col-md-3 m-2 my-5 text-center">
                            <h4 className="mb-4">the problem we want to solve</h4>
                            The entire world is awe-struck when they watch a street performer showcase their talent. We are talking about the street artists, musicians and athletes that amaze us with their skill, leaving us with goosebumps and a desire to unleash our inner street kid. Yet, the representation and awareness of this talented young community in our country is alarmingly low. We are determined to change that.
                        </div>

                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="row justify-content-center">
                        
                        <div className="col-md-3 m-2 my-5 text-center">
                            
                            <h4 className="mb-4">our engine, our designs</h4>
                            
                            Since our inception in 2013, our approach to design has expanded over time into a community based collaborative process that provides opportunities for budding creatives from various backgrounds. We take it up as our responsibility to instill positivity and togetherness into all our product designs, to inspire the future generation of our country.

                        </div>
                        
                        <div className="col-md-4 m-2 p-0">
                            <img src={ abtus_2 } alt="" className="img_size" />
                        </div>

                    </div>
                </div>

                <div className="container-fluid py-4 mt-5 values">
                    <div className="row">
                        
                        <div className="col-md-4 offset-md-1">
                            
                            <h2>OUR CORE VALUES</h2> <br/>

                            <h3>These Core Values Unite Us And Remind Us What's Important</h3> <br/>

                            <h3>Customer FIRST</h3>

                            <h5>Everything we do, say, and feel starts with our customers! Every idea, program, project, and interaction has a customer-first mindset…and we don’t stop until the customer says WOW!</h5> <br/><br/>

                            <h3>Customer FIRST</h3>

                            <h5>Everything we do, say, and feel starts with our customers! Every idea, program, project, and interaction has a customer-first mindset…and we don’t stop until the customer says WOW!</h5> <br/><br/>

                            <h3>Customer FIRST</h3>

                            <h5>Everything we do, say, and feel starts with our customers! Every idea, program, project, and interaction has a customer-first mindset…and we don’t stop until the customer says WOW!</h5> <br/><br/>

                            <h3>Customer FIRST</h3>

                            <h5>Everything we do, say, and feel starts with our customers! Every idea, program, project, and interaction has a customer-first mindset…and we don’t stop until the customer says WOW!</h5> <br/><br/>

                            <h3>Customer FIRST</h3>

                            <h5>Everything we do, say, and feel starts with our customers! Every idea, program, project, and interaction has a customer-first mindset…and we don’t stop until the customer says WOW!</h5><br/> 

                            <button type="button" className="btn w-25 m-2 btn_cls"> Career </button>
                            <button type="button" className="btn w-25 m-2 btn_cls"> Media </button>

                        </div>

                    </div>
                </div>
                 
        </>
    )
}

export default Aboutus;