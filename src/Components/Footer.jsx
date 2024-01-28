import React from 'react'

const Footer = () => {
    return (
  <div className="footer bg-greenColor xl:p-[5rem] p-[0.6rem] mb-4 rounded-[10px] grid grid-cols-5 xl:gap-[8] gap-[6] m-auto items-center justify-center">
      <div>
        <div>
           <h1 className="logo xl:text-[25px] text-[18px] text-white pb-[1.5rem]">
            <strong>Mind</strong>Match
           </h1>
        </div>
       <p className="text-white pb-[13px] opacity-80 leading-7">
        Unites minds and reveals potentials.
        </p>
      </div>  
      <div className="grid">
        <span className="divTitle xl:text-[18px] text-[14px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        
        <div className="grid xl:gap-3 gap-1">
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">About Us</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Features</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">News</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">FAQ</p>
       </div>

      </div>

      <div className="grid">
        <span className="divTitle xl:text-[18px] text-[14px] font-semibold md:pb-[1.5rem] pb-[1.rem] text-white">
          Resources
        </span>
        
        <div className="grid xl:gap-3 gap-1">
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Account</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Support Center</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Feedback</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Contact Us</p>
       </div>

      </div>

      <div className="grid">
        <span className="divTitle xl:text-[18px] text-[14px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        
        <div className="grid xl:gap-3 gap-1">
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Events</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Promo</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Req Demo</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Careers</p>
       </div>
       
      </div>

      <div className="grid">
        <span className="divTitle xl:text-[18px] text-[14px] font-semibold md:pb-[1.5rem] pb-[0.7rem] text-white">
          Contact Info
        </span>
        
        <div className="grid xl:gap-3 gap-1">
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Events</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Promo</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Req Demo</p>
         <p className="text-white opacity-[.8] hover:opacity-95 cursor-pointer">Careers</p>
       </div>
       
      </div>
  </div>
    )
}

export default Footer