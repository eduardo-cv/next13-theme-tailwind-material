import { AppBar, Toolbar, Button } from '@mui/material'
import Link from 'next/link'
import ThemeToggle from '../theme/ThemeToggle'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 0 }}>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/about" passHref>
            <Button color="inherit">About</Button>
          </Link>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}
