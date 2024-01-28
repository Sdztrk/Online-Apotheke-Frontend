//MATERIAL UI IMPORTS
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  Box,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
//ROUTER IMPORTS
import { useNavigate } from "react-router-dom";
//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import {
  addToShoppingCard,
  calculateShoppingCardTotals,
  clearShoppingCard,
  removeShoppingCardItem,
  reduceShoppingCardItem,
} from "../redux/shoppingCardSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

// *************************** STYLES ***************************

const CheckContainer = styled(Container)(({ theme }) => ({
  marginBottom: "20rem",
  marginTop: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    marginBottom: "18rem",
  },
}));

const Item = styled(Paper)(() => ({
  height: "19vh",
}));

const Title = styled(Paper)(() => ({
  height: "6vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const UpTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const Inner = styled(Paper)(({ theme }) => ({
  height: "22vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "22vh",
    flexDirection: "column-reverse",
  },
}));

const InnerText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const QuantNum = styled(Typography)(({ theme }) => ({
  width: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));


const InnerBig = styled(Item)(({ theme }) => ({
  height: "22vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "22vh",
  },
}));

const MainCard = styled(Card)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
}));

const Subtotal = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "5vh",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    height: "12vh",
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));

const EmptyBox = styled(Box)(({ theme }) => ({
  marginTop: "5rem",
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "3rem",
  width: "100%",
  borderRadius: "20px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  [theme.breakpoints.down("sm")]: {
    width: "65%"
  },
}));
//url for image
const url = process.env.REACT_APP_API_BASEURL;


console.log("first")


// *************************** REDUX ***************************
const Checkout = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.card.cartItems);
  const total = useSelector((state) => state.card.cartTotalAmount);
  console.log(cart)
  console.log("works")

  //addToShoppingCard,
  // calculateShoppingCardTotals,
  // clearShoppingCard,
  // removeShoppingCardItem,
  // reduceShoppingCardItem,
  const handleRemove = (produkt) => {
    dispatch(removeShoppingCardItem(produkt));
  };
  
  const handleAdd = (produkt) => {
    dispatch(addToShoppingCard(produkt));
  };
  
  const handleReduce = (produkt) => {
    dispatch(reduceShoppingCardItem(produkt));
  };

  useEffect(() => {
    dispatch(calculateShoppingCardTotals());
  }, [cart, dispatch]);

  let navigate = useNavigate();
  // *************************** ROUTER-USENAVIGATE ***************************
  const handleNavigate = () => {
    navigate("/");
  };
  // *************************** TOASTIFY ***************************

  const handleToast = () => {
    toast.success(`Checkout completed successfully `, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <CheckContainer>
      {((cart || []).length > 0) ? (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5}>
            <Title>
              <UpTitle variant="h5">Produkt</UpTitle>
            </Title>
          </Grid>
          <Grid item xs={2}>
            <Title>
              <UpTitle variant="h5">Preis</UpTitle>
            </Title>
          </Grid>
          <Grid item xs={3}>
            <Title>
              <UpTitle variant="h5">Menge</UpTitle>
            </Title>
          </Grid>
          <Grid item xs={2}>
            <Title>
              <UpTitle variant="h5">Gesamt</UpTitle>
            </Title>
          </Grid>
          {(cart || []).map((item, index) => {
            return (
              <>
                <Grid key={index._id} item xs={5}>
                  <InnerBig>
                    <MainCard>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flex: "2",
                        }}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <ItemTitle component="div" variant="h5">
                            {item.name}
                          </ItemTitle>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            In-Stock
                          </Typography>
                          <br />
                          <Button
                            color="error"
                            sx={{ marginBottom: "2rem" }}
                            onClick={() => handleRemove(item)}
                            variant="outlined"
                            size="small"
                          >
                            Entfernen
                          </Button>
                        </CardContent>
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          flex: "1",
                          display: { xs: "none", sm: "block" },
                        }}
                        image={`${url}/${item.image}`}
                        alt="product-image"
                      />
                    </MainCard>
                  </InnerBig>
                </Grid>
                <Grid item xs={2}>
                  <Inner>
                    <InnerText variant="h5">€{item.price}</InnerText>
                  </Inner>
                </Grid>
                <Grid item xs={3}>
                  <Inner>
                    <IconButton
                      color="primary"
                      aria-label="remove from shopping cart"
                      size="large"
                      onClick={() => handleReduce(item)}
                    >
                      <RemoveCircleIcon fontSize="inherit" />
                    </IconButton>
                    <QuantNum variant="h5">{item.cartQuantity}</QuantNum>
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                      size="large"
                      onClick={() => handleAdd(item)}
                    >
                      <AddCircleIcon fontSize="inherit" />
                    </IconButton>
                  </Inner>
                </Grid>
                <Grid item xs={2}>
                  <Inner>
                    <InnerText variant="h5">
                      €{item.cartQuantity * item.price}
                    </InnerText>
                  </Inner>
                </Grid>
              </>
            );
          })}

          <Grid item xs={7}>
            <Button
              size="large"
              color="error"
              variant="contained"
              onClick={() => dispatch(clearShoppingCard())}
            >
              Alle Entfernen
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Subtotal>
              <InnerText variant="h5">Zwischensumme</InnerText>
            </Subtotal>
          </Grid>
          <Grid item xs={2}>
            <Subtotal>
              <ItemTitle variant="h5">€{total}</ItemTitle>
            </Subtotal>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <IconButton
              color="primary"
              aria-label="Back to shopping"
              size="large"
              onClick={() => handleNavigate()}
            >
              <ArrowCircleLeftIcon fontSize="inherit" />
            </IconButton>
            <Typography>Zurück zum Einkaufen</Typography>
          </Grid>
          <Grid
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
          >
            <Button
              size="large"
              variant="contained"
              color="success"
              style={{ display: { xs: "none", sm: "block" } }}
              onClick={() => handleToast()}
            >
              Zur Kasse
            </Button>
          </Grid>
          <Grid
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={12}
          >
            <Button
              size="large"
              variant="contained"
              color="success"
              style={{ display: { xs: "none", sm: "block" } }}
              fullWidth
              onClick={() => handleToast()}
            >
              Zur Kasse
            </Button>
          </Grid>
        </Grid>
      ) : (
        <EmptyBox >
          <Typography variant="h5">
            Einkaufswagen ist derzeit leer!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              color="primary"
              aria-label="Back to shopping"
              size="large"
              onClick={() => handleNavigate()}
            >
              <ArrowCircleLeftIcon fontSize="inherit" />
            </IconButton>
            <Typography>Zurück zum Einkaufen</Typography>
          </Box>
        </EmptyBox>
      )}
    </CheckContainer>
  );
};

export default Checkout;