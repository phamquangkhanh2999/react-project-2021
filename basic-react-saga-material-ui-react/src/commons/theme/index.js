import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  color: {
    primary: '#388E3C',
    secondary: '#00BCD4',
    error: '#E64A19',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#536DFE',
    textColor: '#ffff',
  },
});
export default theme;
