import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CustomNotification from './CustomNotification';

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>
      </Box>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item xs={6}>
          <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
            Top-Left
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
            Top-Right
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
            Bottom-Left
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <>
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Box>
    <div>
        <p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
variant <p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
<p>Clicking the button triggers the notification.
It stays for 5 seconds before disappearing automatically.
It has an X button to close it manually.
The background is light red (#fdecea), and the text is dark red (#d32f2f).</p>
    </div>
<div>
    <CustomNotification/>
</div>
    </>
  );
}
