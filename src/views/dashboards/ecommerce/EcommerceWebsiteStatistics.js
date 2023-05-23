// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'




const EcommerceWebsiteStatistics = ({title,total,namePerc, namePerc2, namePerc3, namePerc4, perc, perc2, perc3, perc4,sales,sales2,sales3,sales4 }) => {
  const data = [
    {
      sales: sales,
      title: namePerc,
      trendDir: 'down',
      color: 'success',
      trendNumber: perc
    },
    {
      trendDir: 'up',
      sales: sales2,
      title: namePerc2,
      color: 'primary',
      trendNumber: perc2
    },
    {
      sales: sales3,
      trendDir: 'up',
      color: 'warning',
      title: namePerc3,
      trendNumber: perc3
    },
    {
      sales: sales4,
      title: namePerc4,
      color: 'error',
      trendDir: 'down',
      trendNumber: perc4
    }
  ]
  
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title={title}
        titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}
        action={
          <OptionsMenu
            iconProps={{ fontSize: '1.375rem' }}
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent>
        <Box sx={{ mt: 2.75, mb: 4.75, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h3'> {total}</Typography>
          </Box>
          <Box sx={{ height: 75, width: '100%', maxWidth: '120px' }}>
          </Box>
        </Box>
        <TableContainer>
          <Table>
            <TableBody>
              {data.map(row => {
                return (
                  <TableRow
                    key={row.title}
                    sx={{
                      '&:last-of-type td': { border: 0, pb: 0 },
                      '& .MuiTableCell-root': {
                        py: theme => `${theme.spacing(3.125)} !important`,
                        '&:last-of-type': { pr: 0 },
                        '&:first-of-type': { pl: 0 }
                      },
                      '&:first-of-type td': { borderTop: theme => `1px solid ${theme.palette.divider}` }
                    }}
                  >
                    <TableCell>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.8, color: `${row.color}.main` } }}
                      >
                        <Icon icon='mdi:circle' fontSize='1.05rem' />
                        <Typography sx={{ fontSize: '0.875rem' }}>{row.title}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{row.sales}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          '& svg': { color: row.trendDir === 'down' ? 'error.main' : 'success.main' }
                        }}
                      >
                        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{row.trendNumber}</Typography>
                        <Icon icon={row.trendDir === 'down' ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default EcommerceWebsiteStatistics
