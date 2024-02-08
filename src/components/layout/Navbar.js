import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, register, login, updatePayload } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { StyledBadge, modalStyle, modalStyleLogin } from "../../helpers/styles";
import { pages } from "../../helpers/constants/Constants"
import logo from "../../helpers/images/logo.jpg"
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  //routing and dispatching and getting state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser)
  const cardQuantity = useSelector((state) => state.card.cartTotalQuantity);

  //navmenu and usermenu email val
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [emailErrorRegister, setEmailErrorRegister] = useState(false);
  const [emailErrorLogin, setEmailErrorLogin] = useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Dropdown Menü
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  //logout function
  const handleLogout = async () => {
    handleClose()
    await dispatch(logout(navigate));
  };
  //register popup
  const [isModalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const openModal = () => {
    setModalOpen(true)
    handleClose()
  }
  const closeModal = () => setModalOpen(false);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  //register submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    //email validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
    if (!isEmailValid) {
      setEmailErrorRegister(true);
      return; // Do not proceed with form submission if email is invalid
    }
    // Dispatch the register action
    await dispatch(register(formValues, navigate));
    // Closing register popup after register
    closeModal();
  };
  //login popup
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);
  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };



  // refresh navbar
  const handleRefresh = () => {
    window.location.reload(true);
  };

  const [refreshCount, setRefreshCount] = useState(0);

  //login submit function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    //email validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginFormData.email);
    if (!isEmailValid) {
      setEmailErrorLogin(true);
      return; // Do not proceed with form submission if email is invalid
    }
    // Dispatch the login action
    await dispatch(login(loginFormData, navigate));
    console.log("comes from handlesubmit")
    console.log(currentUser)
    // Closing login popup after register
    closeLoginModal()
    setRefreshCount(refreshCount + 1);
    // handleRefresh()
  };

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
              <Avatar src={logo} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={`/${page}`} key={page} onClick={handleCloseNavMenu} style={{textDecoration:"none", color:"#1976D2", marginRight:8}} >
                    {page}
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="./"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
              <Avatar src={logo} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                to={`/${page}`}
                style={{textDecoration:"none", color:"white", marginRight:8}}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Link aria-label="cart" style={{ width: "60px" }} to={"./ShoppingPage"}>
            <StyledBadge badgeContent={cardQuantity} color="primary">
              <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize: "large", width: "30px", height: "40px" }} />
            </StyledBadge>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={currentUser} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                <Box sx={{display:"flex", flexDirection:"column", width:"80px"}}>
                  <Link
                    component="a"
                    to={'/Admin'}
                    sx={{
                      width: '100%',
                      textAlign: 'left',
                      color: 'text.primary',
                    }}
                  >
                    Admin
                  </Link>
                  <Link
                    component="a"
                    to={'/Profile'}
                    sx={{
                      width: '100%',
                      textAlign: 'left',
                      color: 'text.primary',
                    }}
                  >
                    Profile
                  </Link>
                  <Link
                    component="a"
                    onClick={handleLogout}
                    sx={{
                      width: '100%',
                      textAlign: 'left',
                      color: 'text.primary',
                    }}
                  >
                    Logout
                  </Link>
                </Box>
              ) : (
                <Box>
                  <MenuItem
                    component="a"
                    onClick={openModal}
                    sx={{
                      width: '100%',
                      textAlign: 'left',
                      color: 'text.primary',
                    }}
                  >
                    Registrieren
                  </MenuItem>
                  <MenuItem
                    component="a"
                    onClick={openLoginModal}
                    sx={{
                      width: '100%',
                      textAlign: 'left',
                      color: 'text.primary',
                    }}
                  >
                    Anmelden
                  </MenuItem>
                </Box>
              )}

            </Menu>
            <Modal
              open={isModalOpen}
              onClose={closeModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Box sx={modalStyle}>
                <Typography variant="h6" component="h2" style={{ textAlign: "center", color: "#1976D2" }}>
                  Registrieren
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                    error={emailErrorRegister}
                    helperText={emailErrorRegister ? "Invalid email address" : ""}
                  />
                  <TextField
                    label="Passwort"
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <Box style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                    <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                      Registrieren
                    </Button>
                  </Box>
                </form>
                <Typography style={{ marginTop: '2.5rem', textAlign: "center" }}>
                  Sie haben bereits ein Konto? <a href='#' onClick={() => { closeModal(); openLoginModal(); }}>Anmelden</a>
                </Typography>
              </Box>
            </Modal>
            <Modal
              open={isLoginModalOpen}
              onClose={closeLoginModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Box sx={modalStyleLogin}>
                <Typography variant="h6" component="h2" style={{ textAlign: "center", color: "#1976D2" }}>
                  Anmelden
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleLoginChange}
                    required
                    fullWidth
                    margin="normal"
                    error={emailErrorLogin}
                    helperText={emailErrorLogin ? "Invalid email address" : ""}
                  />
                  <TextField
                    label="Passwort"
                    type="password"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <Box style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                    <Button onClick={handleLoginSubmit} type="submit" variant="contained" color="primary">
                      Anmelden
                    </Button>
                  </Box>
                </form>
                <Typography style={{ marginTop: '2.5rem', textAlign: "center" }}>
                  Sie haben noch kein Konto? <a href='#' onClick={() => { openModal(); closeLoginModal(); }}>Registrieren</a>
                </Typography>
              </Box>
            </Modal>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
