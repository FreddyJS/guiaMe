import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';

import {
    AppSwitcher20,
    Notification20,
    UserAvatar20,
  } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const PageHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="React App">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="JS">
            React App
        </HeaderName>
        <HeaderNavigation aria-label="React App">
          <HeaderMenuItem element={Link} to="/counter">Counter</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/counter">
                    Counter
                </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
                <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
                <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher">
                <AppSwitcher20 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default PageHeader;