'use client'
import { useTheme } from 'next-themes'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={
          theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro'
        }
      >
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </>
  )
}
