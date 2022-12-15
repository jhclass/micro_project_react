import styled from 'styled-components';


interface ContainerProps {
    cbgColor:string;
    bColor:string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color:${props=>props.cbgColor};
    border-radius:100%;

`;
interface CircleProps {
   bgColor:string;
   borderColor?:string; //borderColor가 required 된 상태이기 때문에 Container 속성에 ?? 를 넣어야 한다.
}


function Circle({bgColor,borderColor}:CircleProps) {
    return (
    <Container cbgColor={bgColor} bColor={borderColor ?? bgColor}>box</Container>
    );
}


export default Circle;
