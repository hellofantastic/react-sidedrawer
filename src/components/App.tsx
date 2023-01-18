import React from 'react';
import styled from 'styled-components';

export interface DrawerProps extends React.HTMLAttributes<HTMLHtmlElement> {
  /**
   * sidebar background color
   */
  backgroundColor?: string;

  /**
   *  ... More to follow
   */

  children?: React.ReactNode;
}
interface StyledDrawerProps extends Omit<DrawerProps, 'backgroundColor'> {
  collapsed?: boolean;
  toggled?: boolean;
}
const StyledDrawer = styled.aside<StyledDrawerProps>`
  position: relative;
`;

const SideDrawer: React.ForwardRefRenderFunction<HTMLHtmlElement, DrawerProps> = ({ children }) => {
  return <StyledDrawer>{children ? children : <h2>No component children passed in.</h2>}</StyledDrawer>;
};

export default SideDrawer;
