import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { CircleIcon, Container, TitleDiv, UserDiv } from './styles';


export const Header = () => {

    return (
        <Container>
            <UserDiv>
                <IconButton aria-label="delete" onClick={()=>alert('Não tem tela.')} sx={{color:'white'}} size="large">
                    <MenuIcon />
                </IconButton>
                <CircleIcon />
                <span>User Name</span>
            </UserDiv>

            <TitleDiv>
                <h1>Sales Report</h1>
            </TitleDiv>
        </Container>
    )
}