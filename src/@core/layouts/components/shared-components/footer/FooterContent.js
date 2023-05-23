// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <LinkStyled target='_blank' href='https://themeselection.com/license/'>
            Dashboards
          </LinkStyled>
          <LinkStyled target='_blank' href='https://themeselection.com/'>
            Cadastro
          </LinkStyled>
          <LinkStyled
            target='_blank'
            href='https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/documentation'
          >
            Estrutura
          </LinkStyled>
          <LinkStyled target='_blank' href='https://themeselection.com/support/'>
            Fluxo de caixa
          </LinkStyled>
           <LinkStyled target='_blank' href='https://themeselection.com/support/'>
            Perfil
          </LinkStyled>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
