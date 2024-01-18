import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"

function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-9xl font-black text-[#D0FFE9]">404</h1>
                <h2 className="text-2xl font-bold text-[#D0FFE9]">Cette page n'existe pas</h2>
            </div>
            <Button
                fullWidth
                variant="contained"
                onClick={() => window.location.replace("/")}
                sx={{
                    borderRadius: '20px',
                    backgroundColor: '#D0FFE9',
                    color: 'white',
                    width: 'fit-content',
                    height: '56px', // adjust this value to match the TextField's height
                    '&:hover': {
                        backgroundColor: '#D0FFE9',
                        opacity: 0.8,
                    },
                }}
            >
                <p className="text-black text-lg font-bold">Retourner à l'accueil</p>
            </Button>
        </div>
    )
}

export default Custom404