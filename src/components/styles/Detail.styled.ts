import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  width: min(95%, 1700px);
  padding: 20px 25px 0;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const SideBar = styled.header`
  min-width: 270px;
  margin-right: 25px;
  margin-top: 20px;
  border-right: 1px solid #808080;

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #808080;
    border-right: 0;
    width: 100%;
  }
`;

export const HairInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: end;
  text-align: right;
  color: #fff;
  font-weight: bold;
  position: fixed;
  width: 270px;
  padding-right: 25px;

  @media (max-width: 1023px) {
    align-items: start;
    text-align: start;
    padding-bottom: 25px;
    position: relative;
    width: 90%;
  }
`;

export const HairTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 2rem;
`;

export const HairDescription = styled.p`
  line-height: 20px;
  width: min(22vw, 250px);
  font-weight: bolder;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;

  @media (max-width: 1023px) {
    width: 70%;
  }
`;

export const Contents = styled.section`
  width: min(90%, 1400px);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  & > div {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #ffffff;
    font-size: 2rem;

    &::before {
      content: '';
      flex-grow: 1;
      margin-right: 15px;
      background: #808080;
      height: 2px;
    }

    &::after {
      content: '';
      flex-grow: 1;
      margin-left: 15px;
      background: #808080;
      height: 2px;
    }
  }
`;

export const Images = styled.ul`
  width: 100%;
`;

export const Image = styled.li`
  width: 100%;
  height: 90vh;
  margin-bottom: 25px;

  & > span {
    border-radius: 5px;
  }

  & img {
    object-fit: cover;
  }
`;