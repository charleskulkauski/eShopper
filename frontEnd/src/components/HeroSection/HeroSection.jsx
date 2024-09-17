import React from 'react'
import HeroImg from '../../img/shop-hero-1-product-slide-1.png'

function HeroSection() {
    return (
        <div className="relative flex items-center bg-cover flex-start bg-center text-left h-svh w-full" style={{ backgroundImage: `url(${HeroImg})` }}>
            <div className="absolute top-0 right-0 bottom-0 left-0"></div>
            <main className='px-10 lg:px-24 z-10'>
                <div className='text-left'>
                    <h2 className='text-2xl text-white'>Venha comprar seus presentes também!</h2>
                    <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl'>Roupas para o verão</p>
                    <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-4xl'>Confortáveis em qualquer estação</p>
                    <button className='border rounded mt-6 border-white text-[#5f3c75] font-bold bg-white w-44 h-12 hover:bg-[#5f3c75] hover:text-white hover:border-white hover:scale-110 cursor-pointer'>
                        Compre agora
                    </button>
                </div>
            </main>

        </div>
    )
}

export default HeroSection
