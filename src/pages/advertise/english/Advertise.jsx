
import "./advertise.scss"

const Adform = ()=>{
    return(
        <div className="adform-container">
            <form className="adform">
                <label>Name</label><br/>
                <input type="text" placeholder="name here" /><br/>
                <label>Email</label><br/>
                <input type="text" placeholder="name here"  /><br/>
                <label>Mobile</label><br/>
                <input type="text" placeholder="name here"  /><br/>
                <label>Property Type</label><br/>
                <input type="text" placeholder="name here"  /><br/>
                <label>Location</label><br/>
                <input type="text" placeholder="name here"  /><br/>
                <input className="sub-btn" type="submit" name="value"/>
            </form>

        </div>
    )
}


const Advertise = () => {
  return (
    
     <div className="admain-div">
        <div className="ad-content">

            <h2 className="adhead">Advertise With Us</h2>
            <p>
            Reach out to potential buyers, sellers and renters with the UAE Assistant. Join the club, tap the network and expand your business.
            </p>
            <br/>
            <br/>
            <p>
            We don't just offer, but you simply gain with being part of our network.
            </p>


            <div className="list-space">
                <div className="list-container">
                <div className="list-square">
                    <p
                    className="list-no">1</p>
                </div>
                <p className="list-content">Quality insights to seal the deal</p>
                
                </div>
                <div className="list-container">
                <div className="list-square">
                    <p
                    className="list-no">2</p>
                </div>
                <p className="list-content">Maximum market exposure</p>
                
                </div>
                <div className="list-container">
                <div className="list-square">
                    <p
                    className="list-no">3</p>
                </div>
                <p className="list-content">AI powered tools giving you predictive analysis</p>
                
                </div>
                <div className="list-container">
                <div className="list-square">
                    <p
                    className="list-no">4</p>
                </div>
                <p className="list-content">Consistent and genuine listings</p>
                
                </div>
                <div className="list-container">
                <div className="list-square">
                    <p
                    className="list-no">5</p>
                </div>
                <p className="list-content">Reasonable pricings</p>
                
                </div>
                <div className="list-container">
                <div className="list-square">
                    <p
                    className="list-no">6</p>
                </div>
                <p className="list-content"> Directives on contracts and legal services</p>
                
                </div>
              

            </div>
           
               
            </div>

            <h2 className="form-head-div">Get in touch to experience more:</h2>
            <Adform/>
        </div>
  
  )
}

export default Advertise



