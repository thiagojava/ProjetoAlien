// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import CardActions from '@mui/material/CardActions'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsTabs = () => {
  // ** States
  const [value, setValue] = useState('Dados conta')
  const [date, setDate] = useState(null)
  const [language, setLanguage] = useState([])
  
  const [personalData, setPersonalData] = useState({
    cep: '',
    complement: '',
    city: '',
    country: '',
    address: '',
    number: '',
    neighborhood: '',
    state: '',
    ip: ''
  });

    // Estados para os campos do cartão de crédito
    const [creditCardData, setCreditCardData] = useState({
      cardNumber: '',
      cpf: '',
      creditLimit: '',
      fullName: '',
      expiryDate: '',
      cardFlag: ''
    });
  

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })
  
    // Estados para os campos dos dados bancários
    const [bankData, setBankData] = useState({
      bank: '',
      accountType: '',
      currentBalance: '',
      agency: '',
      accountHolder: '',
      bankCode: ''
    });

  const handleTabsChange = (event, newValue) => {
    setValue(newValue)
  }

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }
  const handlePersonalDataChange = (prop) => (event) => {
    setPersonalData({ ...personalData, [prop]: event.target.value });
  };

  const handleCreditCardDataChange = (prop) => (event) => {
    setCreditCardData({ ...creditCardData, [prop]: event.target.value });
  };

    // Função para lidar com a mudança nos campos dos dados bancários
    const handleBankDataChange = (prop) => (event) => {
      setBankData({ ...bankData, [prop]: event.target.value });
    };

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          variant='scrollable'
          scrollButtons={false}
          onChange={handleTabsChange}
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab value='Dados conta' label='Dados conta' />
          <Tab value='Dados pessoais' label='Dados pessoais' />
          <Tab value='Cartão de crédito' label='Cartão de crédito' />
          <Tab value='Dados Bancários' label='Dados Bancários' />
        </TabList>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel value='Dados conta'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Nome Completo' placeholder='Nome Completo' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='CPF' placeholder='CPF' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='RG' placeholder='RG' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Sexo' placeholder='Sexo' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Nacionalidade' placeholder='Nacionalidade' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Nome Completo do Pai' placeholder='Nome Completo do Pai' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Nome Completo da Mãe' placeholder='Nome Completo da Mãe' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Telefone Celular' placeholder='Telefone Celular' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Data de Nascimento' placeholder='Data de Nascimento' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Orgão Emissor' placeholder='Orgão Emissor' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Profissão' placeholder='Profissão' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Estado Civil' placeholder='Estado Civil' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth disabled label='Email: clientalien@dashboard.com' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth disabled label='Cliente desde: 10/06/2023' />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value='Dados pessoais'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='CEP' value={personalData.cep} onChange={handlePersonalDataChange('cep')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Complemento' value={personalData.complement} onChange={handlePersonalDataChange('complement')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Cidade' value={personalData.city} onChange={handlePersonalDataChange('city')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='País' value={personalData.country} onChange={handlePersonalDataChange('country')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Endereço' value={personalData.address} onChange={handlePersonalDataChange('address')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Número' value={personalData.number} onChange={handlePersonalDataChange('number')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Bairro' value={personalData.neighborhood} onChange={handlePersonalDataChange('neighborhood')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='UF' value={personalData.state} onChange={handlePersonalDataChange('state')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth disabled label='IP' value={personalData.ip} />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value='Cartão de crédito'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Número do cartão' value={creditCardData.cardNumber} onChange={handleCreditCardDataChange('cardNumber')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='CPF do titular' value={creditCardData.cpf} onChange={handleCreditCardDataChange('cpf')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Limite de crédito' value={creditCardData.creditLimit} onChange={handleCreditCardDataChange('creditLimit')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Nome completo titular' value={creditCardData.fullName} onChange={handleCreditCardDataChange('fullName')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Data de validade' value={creditCardData.expiryDate} onChange={handleCreditCardDataChange('expiryDate')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Bandeira' value={creditCardData.cardFlag} onChange={handleCreditCardDataChange('cardFlag')} />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value='Dados Bancários'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Banco' value={bankData.bank} onChange={handleBankDataChange('bank')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Tipo de conta' value={bankData.accountType} onChange={handleBankDataChange('accountType')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Saldo atual' value={bankData.currentBalance} onChange={handleBankDataChange('currentBalance')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Agência' value={bankData.agency} onChange={handleBankDataChange('agency')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Titular' value={bankData.accountHolder} onChange={handleBankDataChange('accountHolder')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Código do banco' value={bankData.bankCode} onChange={handleBankDataChange('bankCode')} />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardActions>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Submit
            </Button>
            <Button type='reset' size='large' variant='outlined' color='secondary'>
              Reset
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  )
}

export default FormLayoutsTabs
