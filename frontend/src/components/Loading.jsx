import React from 'react'
import '../css/Loading.css'
import loadingImg from '../assets/loading.gif'
const Loading = () => {
    return (
        <div>
            <section className='loading_section'>
                <img src={loadingImg} alt='loading...' />
            </section>
        </div>
    )
}

export default Loading