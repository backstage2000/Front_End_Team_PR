import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox } from './checkBox/Checkbox';

import AccordionSummary from '@mui/material/AccordionSummary';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from './accordion.module.scss';
import { useState } from 'react';

export default function AccordionUsage() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const theme = createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: 'none',
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            minHeight: 30,
            padding: 0,

            '&.Mui-expanded': {
              minHeight: 30,
            },
          },

          content: {
            margin: 0,

            '&.Mui-expanded': {
              margin: 0,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: 'black',
            fontWeight: 700,
            fontFamily: 'JakartaRegular, Arial, sans-serif',
          },
        },
      },
    },
  });

  return (
    <>
      <div className={style.accordion}>
        <ThemeProvider theme={theme}>
          <div>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Workspaces</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  paddingLeft: 1,
                }}
              >
                <div>
                  <Checkbox>Laptop Friendly</Checkbox>
                  <Checkbox>Power Outlets</Checkbox>
                  <Checkbox>Quiet Environment</Checkbox>
                  <Checkbox>Call Zone</Checkbox>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Menu & Food</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  paddingLeft: 1,
                }}
              >
                <div>
                  <Checkbox>Vegan Options</Checkbox>
                  <Checkbox>Sugar-Free</Checkbox>
                  <Checkbox>Gluten-Free</Checkbox>
                  <Checkbox>All-Day Breakfast</Checkbox>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Amenities</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  paddingLeft: 1,
                }}
              >
                <div>
                  <Checkbox>Pet Friendly</Checkbox>
                  <Checkbox>Outdoor Seating</Checkbox>
                  <Checkbox>Wheelchair Accessible</Checkbox>
                  <Checkbox>Kids Friendly</Checkbox>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Status</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  paddingLeft: 1,
                }}
              >
                <div>
                  <Checkbox>Open Now</Checkbox>
                  <Checkbox>Table Booking</Checkbox>
                  <Checkbox>Quiet Environment</Checkbox>
                  <Checkbox>Takeaway</Checkbox>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}
