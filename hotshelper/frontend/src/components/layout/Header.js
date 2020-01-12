import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div align="center">
		        <Link to="/"><img src="../../static/img/logo.png" alt="logo.png" align="center" width="250" /></Link>
		    </div>
        </div>
    )
}



