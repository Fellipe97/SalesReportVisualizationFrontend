/* import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; */

import { Header } from '../../components/Header';
import { Container, Content, TopContent } from './styles';




export const Home = () => {
    //const navigate = useNavigate();


    return (
        <Container>
            <Header />
            <Content>
                <TopContent>
                    <h1>Teste</h1>
                    <h1 className='negrito'>Ilumeo</h1>
                </TopContent>
            </Content>
        </Container>
    )
}