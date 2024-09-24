import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
display:flex;
font-size: 30px;
`

const LogoImage = styled.img`
margin-right: 10px;
`

function Logo(){
    return(
        <div className='logo'>

            <img src={logo} alt='logo' className='logo-img'>
            </img>

            <p><strong>Store</strong>Books</p>

        </div>
    )
}

export default Logo