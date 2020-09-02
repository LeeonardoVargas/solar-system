import styled, { css } from 'styled-components/native';
import BGConstellation from '../../assets/backgrounds/constellation.svg';

interface TextProps {
  type: 'small' | 'normal' | 'title';
  bold?: boolean;
  opacity?: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px 0;
`;

export const Constellation = styled(BGConstellation)`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -152px;
`;

export const Text = styled.Text<TextProps>`
  color: #FFFFFF;
  
  ${props => props.type === 'small' && css`
    font-size: 14px;
    line-height: 16px;
  `}

  ${props => props.type === 'normal' && css`
    font-size: 16px;
    line-height: 19px;
    font-family: ${props.bold ? 'Roboto-Bold' : 'Roboto-Regular'};
  `}

  ${props => props.type === 'title' && css`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 32px;
    line-height: 37px;
  `}

  opacity: ${props => props.opacity ? 0.65 : 1};
  
`;