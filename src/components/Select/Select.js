import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    color: ${COLORS.black};
  }
`;

const TransparentSelect = styled.select`
  position: absolute;
  border: 0;
  border-radius: inherit;
  color: transparent;
  background-color: transparent;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  vertical-align: middle;
  display: inline-block;
  margin-left: 24px;
`;

const StyledIcon = styled(Icon)`
  /* The icon itself is 12px wide, and that's the icon width in the design mocks. 
  This instance of the Icon component, however, has 2px of extra horizontal whitespace on both sizes, 
  giving its box 16px wide. The negative horizontal margin cancels out the extra horizontal whitespace
  in the Icon component so that the spacing very closely matches the design mocks. */
  margin: 0 -2px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const selectID = `${label}-select`;

  return (
    <>
      <label htmlFor={selectID}>{label}</label>
      <SelectWrapper>
        <TransparentSelect id={selectID} value={value} onChange={onChange}>
          {children}
        </TransparentSelect>
        {displayedValue}
        <IconWrapper>
          <StyledIcon id="chevron-down" size={16} strokeWidth={2} />
        </IconWrapper>
      </SelectWrapper>
    </>
  );
};

export default Select;
