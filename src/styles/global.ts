import styled, { css } from 'styled-components';

export const BaseContainer = styled.div`
  position: relative;
  width: 260px;
`;

export const BaseButton = css`
  background: none;
  border: none;
  padding: 0;
`;

export const InputWrapper = styled.input`
  border: 1px solid #b6c1ce;
  border-radius: 1px;
  box-sizing: border-box;
  height: 32px;
  line-height: 32px;
  padding-left: 8px;
  padding-right: 32px;
  width: 100%;
`;

export const Icon = styled.span`
  cursor: pointer;
  display: flex;
  height: 32px;
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
  svg {
    margin: auto;
  }
`;

export const Item = styled.li`
  box-sizing: border-box;
  padding: 0 24px;
  width: 100%;
  &:hover {
    background-color: #ebf4ff;
  }
`;

export const ItemButton = styled.button`
  line-height: 30px;
  text-align: left;
  ${BaseButton} width: 100%;
  &:active {
    outline: none;
    color: #1185c4;
  }
`;

export const Text = styled(InputWrapper)`
  &:focus {
    border-color: #1185c4;
    outline: none;
  }
`;

export const Wrapper = styled.ul`
  background: #ffffff;
  border: 1px solid #1185c4;
  border-radius: 2px;
  box-sizing: border-box;
  border-top: 0;
  left: 0;
  list-style-type: none;
  margin: 0;
  max-height: 280px;
  min-width: 260px;
  overflow-y: auto;
  padding: 8px 0;
  position: absolute;
  top: 100%;
  z-index: 1;
`;
