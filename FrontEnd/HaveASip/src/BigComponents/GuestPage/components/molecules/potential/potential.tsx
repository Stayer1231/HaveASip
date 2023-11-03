import React from 'react'
import './potential.scss'

function Potential() {
    return (
        <div className='potential-container'>
            <h1 className='potential-title tw-text-center tw-mb-10'>
                It is not what you think!
            </h1>
            <div className='potential-content-box'>
                <div className='box-1 tw-flex tw-flex-row'>
                    <div className='information-1' />
                    <div className='content-1 tw-text-black'>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>

                <div className="box-2 tw-flex tw-flex-row-reverse">
                    <div className='information-2' />
                    <div className='content-2 tw-text-black'>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>

                <div className="box-3 tw-flex tw-flex-row">
                    <div className='information-3' />
                    <div className='content-3 tw-text-black'>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Potential