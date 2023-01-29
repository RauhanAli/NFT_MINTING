import React from "react";
import "./index.css"
import loader from './loader1.png'
import sword from "./sword1.png"
import sword1 from "./sword.png"
import queen from "./Queen.png"
import commander from "./COMMANDER.png"
import vizier from "./VIZIER.png"
import pic1 from "./gallerypics/2.png"
import pic2 from "./gallerypics/6.png"
import pic3 from "./gallerypics/17.png"
import pic4 from "./gallerypics/23.png"
import pic5 from "./gallerypics/57.png"
import pic6 from "./gallerypics/78.png"
import pic7 from "./gallerypics/93.png"
import pic8 from "./gallerypics/143.png"
import king from "./king.jpeg"
import lg1 from "./PNG-01.png"
import lg2 from "./1-02.png"
import lg3 from "./1-03.png"
import lg4 from "./1-04.png"
import lg5 from "./1-05.png"
import lg6 from "./1-06.png"
import token from "./token.png"
import breed from './breed.png'
import rk from "./64.png"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBContainer,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon
  } from 'mdb-react-ui-kit';
  
export default function Gallery(){

    async function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
    
      async function myFunction1() {
        var dots = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
        var btnText = document.getElementById("myBtn1");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
    return(
        <>
        <div className="container">
        {/* <button disabled="true" className="arrow-pointer">Roadmap</button> */}
            {/* <div>
                <img id="loader" src={loader} alt="loader" style={{backgorund:"cover"}}></img>
            </div> */}
            <div>
            <button disabled="true" id="story">Read Our Story</button>
            </div>
            <div>
              <h3 style={{color:'white', textDecoration:'underline'}}>Digital Money Your Future</h3>
            <p id="first" >We are Math Club the next level NFTs marketplace provides a platform to buy rare NFTs which are beyond your imagination. This is the artistic landscape where you find a path to complete your exceptional collection of digital art.
Participating in Math club marketplace enables you to become a part of an elite spectrum of NFT collectors. 
<span id="dots">...</span><span id="more"> Our mission is to provide you a better place to get your NFTs that you can’t find in any other marketplace. We all set to grow bigger and better with more official and exclusive NFTs collection. 
Now it is your chance to own your NFT and begin a journey towards the ownership of digital asset.
</span></p>
            </div>
            <div>
            <button onClick={myFunction} id="myBtn">Read more</button>
            </div>
            <br/>
            <div>
            <button disabled="true" id="gallery">Gallery</button> 
            </div>
            < br/>
    <MDBRow className='row-cols-1 row-cols-md-4 g-2 pt-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic1}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic2}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic3}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic4}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <MDBRow className='row-cols-1 row-cols-md-4 g-2 pt-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic5}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic6}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic7}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={pic8}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>
    {/* <div className="midcontainer"> */}
    <div className="midcontainer">
    <button disabled="true" className="arrow-pointer">
      {/* <img src={lg1} alt="roadmap" border="0" style={{width:'100px', height:'75px', marginBottom:'5px'}}/> */}
    </button>
    {/* </div>
    <div> */}
    <p id="lower-para">
      <div style={{float:'left'}}>
      <p className='st-para'>
      <li>Building a stronger communit</li>
      <li>Launching Ottoman warrior NFT</li>
      <li>Tokenomics</li> 
      <li>Warrior raids announcements</li>
      <li>Breeding announcements</li>
      <li>Staking mechanism </li>
      <li>Staking options </li>
      <li>Merchandise release </li>
      <li>Token expenditure</li>
      <li>Exclusive project collabs</li>
      </p>
      </div>
    <div className="secondlast-para">
    <p className='st-para'>
	<li>Cartoon characters and poker theme</li>
	<li>Entertainment world entries and characters</li>
	<li>Virtual online poker platforms that collab with poker theme</li> 
	<li>Staking options</li>
	<li>Merchandise</li> 
	<li>Tokenomics</li>
  </p>
  </div>
    <div className='last-para'>
    <p className='st-para'>
	<li>Movie characters and gaming theme</li> 
	<li>Fun land missions</li> 
	<li>Gift NFT’s</li>
	<li>Further project TBD</li>
    </p>
    </div>

</p>
        </div>
        <div  className="sword-div" style={{margin:'10px 0px 80px 0px'}}>
        <img src={lg1} alt="sword" id="sowrd" style={{margin:'10px', width:'220px', height:'220px'}}></img>
        </div>
        
        <div className="line11">
        <div className="line1"></div>
        </div>
        {/* </div > */}
        
        <br />
        <div>
          <button disabled="true" id="story1">
        <MDBIcon fas icon="cog text-light" size='2x' />   
        <a id='token' href="#!" disabled='disabled'>Token</a>
        </button>
        </div>
        
        {/* <div>
        <div class="bottom-arrow"></div>
        </div> */}
        <div>
        <MDBRow className='row-cols-1 row-cols-md-4 g-2 pt-4'>
      <MDBCol>
        <MDBCard style={{backgroundColor:'black'}}>
          <MDBCardImage
            src={lg4}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{backgroundColor:'black'}}>
          <MDBCardImage
            src={lg5}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{backgroundColor:'black'}}>
          <MDBCardImage
            src={lg3}
            alt='...'
            position='top'
            // height={'50px'}
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{backgroundColor:'black'}}>
          <MDBCardImage
            src={lg2}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <div>
    <button disabled="true" id="story">Token</button>
            </div>
            <div>
            <p id="first">During our breeding phase you will be able to get rewards for simply staking and breeding your NFTs and earn many mystery gift boxes from your NFT without having to sell it. 
Just buy NFT couple of male and female warriors and after completion of the stake time period <span id="dots1">...</span><span id="more1"> you will get your surprise gift and many reward tokens as well as you also own your baby NFT by breeding and staking your NFT isn’t this great for your unmatchable NFT collection.</span></p>
            </div>
            <div>
            <button onClick={myFunction1} id="myBtn1">Read more</button>
            </div>
            <br/>
            <MDBContainer className="image1">
            <MDBRow className='row-cols-1 row-cols-md-4 g-4 pt-4 image'>
      <MDBCol className="col-md-2 ms-2">
        {/* <MDBCard> */}
          <MDBCardImage
            src={king}
            alt='...'
            position='top'
          />
        {/* </MDBCard> */}
      </MDBCol>
      {/* <MDBCol className="col-md-1 mt-5" style={{paddingTop:'50px', marginRight:'5px'}}>
        <button id="plus" disabled className="set1">
        <MDBIcon fas icon="plus text-white pt-4" size="4x"/>
        </button>
        </MDBCol>  */}
      {/* <MDBCol className="col-md-1 mt-5" style={{paddingTop:'50px'}}>
        <button id="plus" disabled className="set1" >
        <MDBIcon fas icon="cog text-light pt-4" size='4x' />
        </button> 
        </MDBCol> */}
        <MDBCol className="col-md-1 mt-5 breed-tok">
        <button id="plus" disabled className="set1" >
        <MDBIcon fas icon="plus text-white pt-4" size="4x"/>
        </button> 
        </MDBCol>
           
      <MDBCol className="col-md-2 ms-5 st1" >
        {/* <MDBCard> */}
          <MDBCardImage
            src={queen}
            alt='...'
            position='top'
          />
        {/* </MDBCard> */}
      </MDBCol>
      <MDBCol className="col-md-1 mt-5 breed-tok">
        <button id="plus" disabled='true' className="set1">
        <MDBIcon fas icon="equals text-light pt-4" size="4x" />
        </button> 
        </MDBCol>
        <MDBCol className="col-md-2 ms-5 pb-2 st1" style={{paddingBottom:'70px'}}>
        <MDBCard style={{backgroundColor:'black'}}>
          <MDBCardImage
            src={breed}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>  
    </MDBContainer>
    </div>   
        <div>
        <div class="bottom-arrow"></div>
        </div>
        <div>
    <button disabled="true" className="arrow-pointer1">Raids</button>
    {/* </div>
    <div> */}
    <p id="lower-para1">Our warriors are a brave and bold bunch they are on a secret raid mission and being an owner of a warrior NFT we will treat you with many tokens as a gift.
Raid missions allow you to send your warriors with raiding parties to foreign lands, after a fierce few days of raiding and conquering new lands the warriors return with exciting new rewards such as companion NFTs, token rewards and merchandise. Each warrior has a specific role in the mission, and they're awarded companions based on their characteristics.
For instance, an archer gets rewarded by a scout, which can be an eagle or a falcon, similarly there are many more exciting prizes waiting for you.
</p>
        </div>
        <div>
        <img src={lg6} alt="sword" id="sowrd1"></img>
        </div>
        <br />
        <MDBContainer className="animate">
          <div className='rowdiv'>
            <MDBRow >
            <MDBCol className="col-md-1 ms-3"  >
                          <MDBCard className="only">
                        <MDBCardImage
                          src={rk}
                          alt='...'
                          position='top'
                          className="raidscard"
                        />
                      </MDBCard>
                        </MDBCol>
              <MDBCol className="col-md-1 pt-5 icon" >
                         <button id="plus" className="plus" disabled>
                        <MDBIcon fas icon="plus text-white ms-4" className="extra"/>
                        </button> 
                        </MDBCol> 
                <MDBCol className="col-md-1 ms-5">
                         {/* <button id="plus" disabled>
                        <MDBIcon fas icon="cog text-white ms-4" style={{marginBottom:'10px'}} size="4x"/>
                        </button>  */}
                         <MDBCard className="only" >
                            <MDBCardImage
                              src={token}
                              alt='...'
                              position='top'
                              className="raidscard img-logo"
                            />
                          </MDBCard>
                        </MDBCol>
                        <MDBCol className="col-md-1 ms-4 pt-5 icon">
                         <button id="plus" disabled>
                         <MDBIcon fas icon="long-arrow-alt-right text-light" className="extra" />
                        </button> 
                        </MDBCol>
                        <MDBCol className="col-md-1 ms-5" >
                        <MDBCard className="only img-logo1" >
                        <MDBCardImage
                          src={lg6}
                          alt='...'
                          position='top'
                          className="raidscard img-logo"
        
                        />
                      </MDBCard>
                        </MDBCol>
                        <MDBCol className="col-md-1 ms-3 pt-5 icon" >
                         <button id="plus" disabled>
                         <MDBIcon fas icon="long-arrow-alt-right text-light" className="extra" />
                        </button> 
                        </MDBCol>
                        <MDBCol className="col-md-1 ms-5 icon" >
                        <MDBCard className="only last" style={{backgroundColor:'black'}}>
                        <MDBCardImage
                          src={rk}
                          alt='...'
                          position='top'
                          className="raidscard"
                        />
                      </MDBCard>
                        </MDBCol>
                        {/* <MDBCol className="col-md-1 pt-5" >
                         <button id="plus" disabled>
                         <MDBIcon fas icon="long-arrow-alt-right text-light" size="4x" />
                        </button> 
                        </MDBCol> */}
                        <MDBRow>
                          {/* put here */}
                          <MDBCol className="col-md-1 me-5" >
                        </MDBCol>
                        <MDBCol className="col-md-1" >
                        </MDBCol>
                          <MDBCol className="col-md-1" >
                          <MDBCard >
                        <MDBCardImage
                          src={rk}
                          alt='...'
                          position='top'
                          className="raidscard"
                        />
                      </MDBCard>
                         
                        </MDBCol>
                        <MDBCol className="col-md-1 pt-5 icon" >
                         <button id="plus" disabled style={{marginLeft:'15px'}}>
                         <MDBIcon fas icon="slash text-light iconslash" className="extra slash-off"/>
                        </button> 
                        </MDBCol>
                        <MDBCol className="col-md-1 ms-5 pt-2" >
                         <button disabled='true' className="reveal" >To Be Revealed</button>
                        </MDBCol>
                        <MDBCol className="col-md-1 pt-5 icon" >
                         <button id="plus" disabled>
                         <MDBIcon fas icon="long-arrow-alt-left text-white pt-4" className="extra left-arrow" />
                        </button> 
                        </MDBCol>
                        <MDBCol className="col-md-1 pt-5 icon" >
                         <button id="plus" disabled>
                         <MDBIcon fas icon="long-arrow-alt-down text-white pt-1" className="extra down-arrow"/>
                        </button> 
                        </MDBCol>
                        </MDBRow>
            </MDBRow>
            </div>
        </MDBContainer>
        <div>
        <div class="bottom-arrow"></div>
        </div>
        <br/>
        <div>
          <button disabled="true" id="story">Tokenomics</button>
            </div>
            <br/>
            <br/>
            <div>
              <p id='token1'>To Be Reveled in The Next Phase</p>
            </div>
            
            <div>
        <div class="bottom-arrow"></div>
        </div>
        <br/>
        <div>
          <button disabled="true" id="story">House Warriors</button>
            </div>
            <br/>
            <br/>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 pt-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={queen}
            alt='...'
            position='top'
          />
           <MDBCardBody className="bg-dark">
            <MDBCardTitle className="text-white txt-down">Queen</MDBCardTitle>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={vizier}
            alt='...'
            position='top'
          />
          <MDBCardBody className="bg-dark">
            <MDBCardTitle className="text-white txt-down">Vizier</MDBCardTitle>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={commander}
            alt='...'
            position='top'
          />
          <MDBCardBody className="bg-dark">
            <MDBCardTitle className="text-white txt-down">Commander</MDBCardTitle>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
        </div>
            
        </>
    )
}