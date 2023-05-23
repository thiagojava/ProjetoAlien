// ** React Imports
import { useContext } from 'react'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormLayoutsSeparator from 'src/views/forms/form-layouts/FormLayoutsSeparator'
import FormLayoutsTabs from 'src/views/forms/form-layouts/FormLayoutsTabs'


const ACLPage = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)

  return (
    <Grid container spacing={6}>
      <Grid item md={12} xs={12}>
          <FormLayoutsTabs />
      </Grid>
      {ability?.can('read', 'analytics') ? (
         <Grid item xs={12}>
          <FormLayoutsTabs />
        </Grid>
      ) : null}
    </Grid>
  )
}
ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
