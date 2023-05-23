// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons
import PersonIcon from '@mui/icons-material/Person'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const AnalyticsWeeklyOverview = ({perc, amountPeoples, cost, expense,ageInit, ageFinal, receita }) => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false }
    },
    stroke: {
      width: 6,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main, theme.palette.info.main, theme.palette.warning.main, theme.palette.error.main],
    grid: {
      padding: {
        top: -7,
        bottom: 5
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: -2,
              formatter: () => perc,
              color: theme.palette.text.primary
            },
            value: {
              offsetY: 2,
              fontSize: '0.75srem',
              formatter: () => `De ${ageInit} a ${ageFinal}`,
              color: theme.palette.text.secondary
            },
            total: {
              show: true,
              label: '18%',
              fontWeight: 500,
              fontSize: '1.25rem',
              formatter: () => `De ${ageInit} a ${ageFinal}`,
              color: theme.palette.text.primary
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Receita'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <OptionsMenu
            options={['Refresh', 'Update', 'Delete']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactApexcharts type='donut' height={125} options={options} series={[80, 22, 30, 50]} />
          <Box>
            <Box sx={{ mb: 7, mt: 5, display: 'flex', alignItems: 'center' }}>
              <PersonIcon />
              <Typography variant='h5' sx={{ mr: 4 }}>
                {amountPeoples}
              </Typography>
              <Typography variant='h5' sx={{ mr: 4 }}>
                {receita}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '0.8rem', color: 'grey' }}>Custo:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '1rem', color: 'white' }}>{cost}</Typography>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'green', ml: 1 }} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '0.8rem', color: 'grey' }}>Despesa:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '1rem', color: 'white' }}>{expense}</Typography>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'red', ml: 1 }} />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsWeeklyOverview
