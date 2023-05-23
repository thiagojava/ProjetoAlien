// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import AnalyticsTable from 'src/views/dashboards/analytics/AnalyticsTable'
import AnalyticsTrophy from 'src/views/dashboards/analytics/AnalyticsTrophy'
import AnalyticsSessions from 'src/views/dashboards/analytics/AnalyticsSessions'
import AnalyticsTotalProfit from 'src/views/dashboards/analytics/AnalyticsTotalProfit'
import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsWeeklyOverview from 'src/views/dashboards/analytics/AnalyticsWeeklyOverview'
import AnalyticsDepositWithdraw from 'src/views/dashboards/analytics/AnalyticsDepositWithdraw'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsTransactionsCard from 'src/views/dashboards/analytics/AnalyticsTransactionsCard'
import EcommerceWebsiteStatistics from 'src/views/dashboards/ecommerce/EcommerceWebsiteStatistics'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4} lg={2.4}>
          <AnalyticsWeeklyOverview
            perc={'1%'}
            amountPeoples={'18'}
            receita={'6.146.467'}
            cost={'9.871.187'}
            expense={'101.993'}
            ageInit={'11'}
            ageFinal={'19'}
          />
        </Grid>
        <Grid item xs={12} md={2} lg={2.4}>
          <AnalyticsWeeklyOverview 
          perc={'25%'}
          amountPeoples={'644'}
          receita={'315.351.664'}
          cost={'334.854.871'}
          expense={'3.560.120'}
          ageInit={'20'}
          ageFinal={'29'}/>
        </Grid>
        <Grid item xs={12} md={2} lg={2.4}>
          <AnalyticsWeeklyOverview 
          perc={'49%'}
          amountPeoples={'1279'}
          receita={'645.480.000'}
          cost={'657.627.023'}
          expense={'7.291.672'}
          ageInit={'30'}
          ageFinal={'39'}/>
        </Grid>
        <Grid item xs={12} md={2} lg={2.4}>
          <AnalyticsWeeklyOverview 
           perc={'20%'}
           amountPeoples={'524'}
           receita={'278.419.297'}
           cost={'249.283.353'}
           expense={'2.750.290'}
           ageInit={'40'}
           ageFinal={'49'}/>
        </Grid>
        <Grid item xs={12} md={2} lg={2.4}>
          <AnalyticsWeeklyOverview 
           perc={'5%'}
           amountPeoples={'127'}
           receita={'74.568.344'}
           cost={'62.408.273'}
           expense={'687.298'}
           ageInit={'50'}
           ageFinal={'94'}/>
        </Grid>

        <Grid item xs={12} md={3} lg={3} sx={{ order: 0 }}>
          <EcommerceWebsiteStatistics
            title={'TRADING'}
            total={'336.021,471'}
            namePerc={'Renda Fixa'}
            namePerc2={'Renda Variável'}
            namePerc3={'Reserva Risco'}
            namePerc4={'Renda Passiva'}
            perc={'27%'}
            perc2={'43%'}
            perc3={'26%'}
            perc4={'4%'}
            sales={'90.046'}
            sales2={'90.046'}
            sales3={'90.046'}
            sales4={'90.046'}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3} sx={{ order: 0 }}>
          <EcommerceWebsiteStatistics
            title={'PATRIMÔNIO'}
            total={'336.021,471'}
            namePerc={'Imobilizado'}
            namePerc2={'Líquido'}
            namePerc3={'Cash'}
            namePerc4={'Diversos'}
            perc={'28%'}
            perc2={'22%'}
            perc3={'10%'}
            perc4={'40%'}
            sales={'90.046'}
            sales2={'90.046'}
            sales3={'90.046'}
            sales4={'90.046'}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3} sx={{ order: 0 }}>
          <EcommerceWebsiteStatistics
            title={'CUSTO CAPITAL'}
            total={'336.021,471'}
            namePerc={'Contratado'}
            namePerc2={'Juros & Multas'}
            namePerc3={'Tributos'}
            namePerc4={'Dívidas'}
            perc={'28%'}
            perc2={'20%'}
            perc3={'29%'}
            perc4={'23%'}
            sales={'90.046'}
            sales2={'90.046'}
            sales3={'90.046'}
            sales4={'90.046'}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3} sx={{ order: 0 }}>
          <EcommerceWebsiteStatistics
            title={'TRANSAÇÕES'}
            total={'336.021,471'}
            namePerc={'Cheque'}
            namePerc2={'Débito'}
            namePerc3={'Dinheiro'}
            namePerc4={'Câmbios'}
            perc={'12%'}
            perc2={'36%'}
            perc3={'13%'}
            perc4={'39%'}
            sales={'90.046'}
            sales2={'90.046'}
            sales3={'90.046'}
            sales4={'90.046'}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <AnalyticsPerformance />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <AnalyticsPerformance />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsDepositWithdraw />
        </Grid>
        <Grid item xs={12} md={4}>
          <AnalyticsSalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AnalyticsTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
