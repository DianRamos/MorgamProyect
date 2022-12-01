import React from 'react'
import { FaHandHoldingUsd,FaUserClock,FaRegMoneyBillAlt } from 'react-icons/fa';
import { Benefits,Bonus,ChangeRV,Extras, Question,ContinerBenefits, Title, ContainerTitle, SpamIcon } from './WhyUs.styled';

const WhyUs = () => {
  return (
    <ContinerBenefits>
      <ContainerTitle>

       <Title>¿Por qué elegirnos?</Title>
      </ContainerTitle>
      <Benefits>
        
        <Bonus>
          <SpamIcon class="icon">
            <FaHandHoldingUsd style={{ color: "#14213D", fontSize: "25px" }}/>
          </SpamIcon><br/>
          <Question> Bonos de descuento</Question>
          <p>Registrese y esté enterado de los mejores descuentos por temporada, ademas redima su bono de bienvenida en su primera reserva.</p>
        </Bonus>
        <ChangeRV>
          <SpamIcon class="icon">
            <FaUserClock style={{ color: "#14213D", fontSize: "25px" }}/>
          </SpamIcon><br/>
          <Question>Cambie su reservación sin costo</Question>
          <p>En caso de eventos imprevistos, usted puede modificar o cancelar su reservación en cualquier momento.</p>
        </ChangeRV>
        <Extras>
          <SpamIcon class="icon">
            <FaRegMoneyBillAlt style={{ color: "#14213D", fontSize: "25px" }}/>
          </SpamIcon><br/>
          <Question>Sin cargos ocultos</Question>
          <p>Sabes qué pagas exactamente...</p>
        </Extras>

      </Benefits>

    </ContinerBenefits>
  )
}

export default WhyUs
