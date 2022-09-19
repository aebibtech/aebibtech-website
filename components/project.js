import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function Project({ name, description, image, repo }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  const placeholder = "/images/placeholder.png";

  return (
    <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea onClick={event => {window.open(repo)}}>
            <CardMedia
                component="img"
                height="140"
                image={image ? image : placeholder}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </ThemeProvider>
    
  );
}
