import { Grid, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import Login from '../components/auth/Login'
import Register from "../components/auth/Register";

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return <>
        <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
                <Box>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                            <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                            <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Login/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Register/>
                    </TabPanel>
                </Box>
            </Grid>
        </Grid>
    </>;
};

export default LoginReg;