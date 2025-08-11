import React from 'react'
import logo from '../../assets/logo.svg'
function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h1>Bem-vindo ao FarmaTech</h1>
                        <h2>Inovação que cuida</h2>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         marginTop: "20px"
                    }}>
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
        </>
    )
}

export default Home