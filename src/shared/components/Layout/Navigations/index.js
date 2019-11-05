import React from 'react';

// components
import Divider from '@material-ui/core/Divider';
import CompanyNavigations from './CompanyNavigations';

// styles
import { ToolbarSection } from './styled.components';

const Navigations = () => (
  <>
    <ToolbarSection />
    <CompanyNavigations />
    <Divider />
  </>
);

export default Navigations;
