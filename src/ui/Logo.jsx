// import styled from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";

// const StyledLogo = styled.div`
//   text-align: center;
// `;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

// function Logo() {
//   const { isDarkMode } = useDarkMode();

//   const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

//   return (
//     <StyledLogo>
//       <Img src={src} alt="Logo" />
//     </StyledLogo>
//   );
// }

// export default Logo;
import styled from 'styled-components';

const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
    height: 9.6rem;
    width: auto;
`;

const Text = styled.p`
    /* margin-top: 0.1rem; */
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-700); /* Adjust this for dark mode */
`;

function Logo() {
    return (
        <StyledLogo>
            <Img src="/logo.png" alt="The Wild Oasis Logo" />
            <Text>The Frostwood Ops</Text>
        </StyledLogo>
    );
}

export default Logo;
