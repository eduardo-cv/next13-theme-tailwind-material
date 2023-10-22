import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Página não encontrada.
      </Typography>
      <Box mt={4}>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Voltar para o Início
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
