import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../assets/eth.png'

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#191b1f] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#20242a] my-3 rounded-2xl p-6 text-3xl border border-[#20242a] hover:border-[#41444f] flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#b2b9d2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2d2f36] hover:bg-[#41444f] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-3 uppercase`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#2172e5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172e5] hover:border-[#234169]`,
}

function Main() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>

        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => {
              handleChange(e, 'amount')
            }}
          />

          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image
                  src={ethLogo}
                  alt="Etherume Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className={style.currencySelectorTicker}>eth</div>
              <AiOutlineDown className={style.currencySelectorArrow}/>
            </div>
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0x..."
            onChange={(e) => handleChange(e, 'addressTo')}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>Confirm</div>
      </div>
    </div>
  )
}

export default Main
