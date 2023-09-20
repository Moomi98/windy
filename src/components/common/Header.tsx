import styled from "styled-components";
import { GiLibertyWing } from "react-icons/gi";

const Container = styled.header`
  width: 100%;
  height: 4rem;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LogoText = styled.strong`
  font-size: 1.5rem;
`;

const WingLogo = styled(GiLibertyWing)`
  color: ${({ theme }) => theme.colors.default};
`;

export default function Header() {
  return (
    <Container>
      <Logo>
        <WingLogo size={20} />
        <LogoText>windy</LogoText>
      </Logo>
    </Container>
  );
}
