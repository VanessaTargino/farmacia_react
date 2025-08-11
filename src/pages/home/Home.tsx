import React from 'react'
import logo from '../../assets/logo.svg'
function Home() {
    return (
        <>
            <div className="w-screen flex justify-center items-center" >
                <div>
                    <div>
                        <div className="max-w-7xl flex flex-col items-center justify-center text-center" >
                        
                            <h1>Bem-vindo ao FarmaTech</h1>
                            <h2>Inovação que cuida</h2>
                        </div>

                        <div className= "max-w-7xl flex flex-col items-center justify-center text-center mt-4" >
                            <img 
                                src= {logo} 
                                alt="Logo do projeto"
                                style={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    height: "auto"
                                }} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home