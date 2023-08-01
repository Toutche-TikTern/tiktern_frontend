import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React from 'react';
import TabOne from './TabOne';
import TabTwo from './TabTwo';

type Props = {};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabContainer = (props: Props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <div className="flex justify-center w-full">
        <Box className="w-[50%] lg:w-[30%]">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            className="border border-black/30 rounded-[14px]"
          >
            <Tab label="Tokens" {...a11yProps(0)} />
            <Tab label="NFT's" {...a11yProps(1)} />
          </Tabs>
        </Box>
      </div>
      <TabPanel value={value} index={0}>
        <TabOne />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabTwo />
      </TabPanel>
    </Box>
  );
};

export default TabContainer;
