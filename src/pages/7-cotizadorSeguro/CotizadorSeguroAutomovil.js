import React from 'react';
import styled from '@emotion/styled';
import Header from '../../components/7-cotizadorSeguroAutomovil/Header';
import Formulario from '../../components/7-cotizadorSeguroAutomovil/Formulario';

const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #FFFFFF;
    padding: 3rem;
`

const CotizadorSeguroAutomovil = () => {
    return (
        <div className="cotizadorSeguro">
            <Contenedor>
                <Header titulo="Cotizador de Seguros de Automóvil" />
                <ContenedorFormulario>
                    <Formulario />
                </ContenedorFormulario>
            </Contenedor>
        </div>
    )
}

export default CotizadorSeguroAutomovil
